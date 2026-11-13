/**
 * Astro adaptation of React Bits Dither's noise field and Bayer dithering.
 * https://github.com/DavidHDev/react-bits/blob/main/src/ts-default/Backgrounds/Dither/Dither.tsx
 * Copyright (c) 2026 David Haz. MIT + Commons Clause; see THIRD_PARTY_NOTICES.md.
 * The background has no pointer effects, intro reveal, or React runtime.
 */

const settings = {
  waveSpeed: 0.01,
  waveFrequency: 5,
  waveAmplitude: 0.3,
  pixelSize: 3,
  colorLevels: 5,
  frameInterval: 1000 / 30,
  // Brightest dither colour; the base colour comes from the site's --bg token.
  highlight: '#344957',
};

const vertex = `#version 300 es
in vec2 aPosition;
void main() { gl_Position = vec4(aPosition, 0.0, 1.0); }`;

const waveFragment = `#version 300 es
precision highp float;
uniform vec2 uResolution;
uniform float uCell;
uniform float uTime;
uniform float uScroll;
uniform float uSpeed;
uniform float uFrequency;
uniform float uAmplitude;
out vec4 outColor;
vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 permute(vec4 x) { return mod289(((x * 34.0) + 1.0) * x); }
vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
vec2 fade(vec2 t) { return t * t * t * (t * (t * 6.0 - 15.0) + 10.0); }
float cnoise(vec2 P) {
  vec4 Pi = floor(P.xyxy) + vec4(0.0, 0.0, 1.0, 1.0);
  vec4 Pf = fract(P.xyxy) - vec4(0.0, 0.0, 1.0, 1.0);
  Pi = mod289(Pi);
  vec4 ix = Pi.xzxz;
  vec4 iy = Pi.yyww;
  vec4 fx = Pf.xzxz;
  vec4 fy = Pf.yyww;
  vec4 i = permute(permute(ix) + iy);
  vec4 gx = fract(i * (1.0 / 41.0)) * 2.0 - 1.0;
  vec4 gy = abs(gx) - 0.5;
  vec4 tx = floor(gx + 0.5);
  gx = gx - tx;
  vec2 g00 = vec2(gx.x, gy.x);
  vec2 g10 = vec2(gx.y, gy.y);
  vec2 g01 = vec2(gx.z, gy.z);
  vec2 g11 = vec2(gx.w, gy.w);
  vec4 norm = taylorInvSqrt(vec4(dot(g00, g00), dot(g01, g01), dot(g10, g10), dot(g11, g11)));
  g00 *= norm.x;
  g01 *= norm.y;
  g10 *= norm.z;
  g11 *= norm.w;
  float n00 = dot(g00, vec2(fx.x, fy.x));
  float n10 = dot(g10, vec2(fx.y, fy.y));
  float n01 = dot(g01, vec2(fx.z, fy.z));
  float n11 = dot(g11, vec2(fx.w, fy.w));
  vec2 fadeXY = fade(Pf.xy);
  vec2 nx = mix(vec2(n00, n01), vec2(n10, n11), fadeXY.x);
  return 2.3 * mix(nx.x, nx.y, fadeXY.y);
}
float fbm(vec2 p) {
  float value = 0.0;
  float amplitude = 1.0;
  for (int i = 0; i < 4; i++) {
    value += amplitude * abs(cnoise(p));
    p *= uFrequency;
    amplitude *= uAmplitude;
  }
  return value;
}
void main() {
  vec2 uv = (gl_FragCoord.xy - 0.5) * uCell / uResolution - 0.5;
  uv.x *= uResolution.x / uResolution.y;
  uv.y -= uScroll / uResolution.y;
  float f = clamp(fbm(uv + fbm(uv - uTime * uSpeed)), 0.0, 1.0);
  outColor = vec4(floor(f * 255.0) / 255.0, fract(f * 255.0), 0.0, 1.0);
}`;

const ditherFragment = `#version 300 es
precision highp float;
uniform sampler2D uField;
uniform ivec2 uFieldSize;
uniform float uCell;
uniform float uLevels;
uniform float uScrollCells;
uniform vec3 uBase;
uniform vec3 uHighlight;
out vec4 outColor;
const float bayer[64] = float[64](
  0.,48.,12.,60.,3.,51.,15.,63.,32.,16.,44.,28.,35.,19.,47.,31.,
  8.,56.,4.,52.,11.,59.,7.,55.,40.,24.,36.,20.,43.,27.,39.,23.,
  2.,50.,14.,62.,1.,49.,13.,61.,34.,18.,46.,30.,33.,17.,45.,29.,
  10.,58.,6.,54.,9.,57.,5.,53.,42.,26.,38.,22.,41.,25.,37.,21.
);
void main() {
  vec2 cell = floor(gl_FragCoord.xy / uCell);
  vec4 sampleValue = texelFetch(uField, clamp(ivec2(cell), ivec2(0), uFieldSize - 1), 0);
  float field = sampleValue.r + sampleValue.g / 255.0;
  ivec2 index = ivec2(mod(cell - vec2(0.0, uScrollCells), 8.0));
  float threshold = bayer[index.y * 8 + index.x] / 64.0 - 0.5;
  float levels = uLevels - 1.0;
  float value = floor(clamp(field + threshold / levels, 0.0, 1.0) * levels + 0.5) / levels;
  outColor = vec4(mix(uBase, uHighlight, value), 1.0);
}`;

function createProgram(gl: WebGL2RenderingContext, fragment: string) {
  const shaders: WebGLShader[] = [];
  const program = gl.createProgram();
  if (!program) return null;
  for (const [type, source] of [[gl.VERTEX_SHADER, vertex], [gl.FRAGMENT_SHADER, fragment]] as const) {
    const shader = gl.createShader(type);
    if (!shader) { shaders.forEach(item => gl.deleteShader(item)); gl.deleteProgram(program); return null; }
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    shaders.push(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      shaders.forEach(item => gl.deleteShader(item));
      gl.deleteProgram(program);
      return null;
    }
    gl.attachShader(program, shader);
  }
  gl.bindAttribLocation(program, 0, 'aPosition');
  gl.linkProgram(program);
  shaders.forEach(shader => gl.deleteShader(shader));
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) { gl.deleteProgram(program); return null; }
  return program;
}

class DitherBackground extends HTMLElement {
  private dispose?: () => void;
  private elapsed = 23;
  private paused = false;

  connectedCallback() {
    if (this.dispose) return;
    const canvas = this.querySelector('canvas');
    if (!canvas) return;
    const gl = canvas.getContext('webgl2', { alpha: false, antialias: false, depth: false, stencil: false });
    if (!gl) { canvas.hidden = true; return; } // Keep the solid background when WebGL is unavailable.
    const wave = createProgram(gl, waveFragment);
    const dither = createProgram(gl, ditherFragment);
    if (!wave || !dither) {
      if (wave) gl.deleteProgram(wave);
      if (dither) gl.deleteProgram(dither);
      canvas.hidden = true;
      return;
    }
    const buffer = gl.createBuffer();
    const vao = gl.createVertexArray();
    const field = gl.createTexture();
    const framebuffer = gl.createFramebuffer();
    if (!buffer || !vao || !field || !framebuffer) {
      gl.deleteProgram(wave);
      gl.deleteProgram(dither);
      gl.deleteBuffer(buffer);
      gl.deleteVertexArray(vao);
      gl.deleteTexture(field);
      gl.deleteFramebuffer(framebuffer);
      canvas.hidden = true;
      return;
    }
    const uniforms = (program: WebGLProgram, names: string[]) => Object.fromEntries(names.map(name => [name, gl.getUniformLocation(program, name)]));
    const w = uniforms(wave, ['uResolution', 'uCell', 'uTime', 'uScroll', 'uSpeed', 'uFrequency', 'uAmplitude']);
    const d = uniforms(dither, ['uField', 'uFieldSize', 'uCell', 'uLevels', 'uScrollCells', 'uBase', 'uHighlight']);
    const reduce = matchMedia('(prefers-reduced-motion: reduce)');
    const events = new AbortController();
    let raf = 0;
    let last = 0;
    let scrollDirty = false;
    let lost = false;
    let cols = 1;
    let rows = 1;
    let cell = 2;
    let cssCell = 2;
    let width = 1;
    let height = 1;
    try { this.paused = sessionStorage.getItem('portfolio-background-paused') === 'true'; } catch { /* Storage may be unavailable. */ }
    const color = (hex: string) => [1, 3, 5].map(start => parseInt(hex.slice(start, start + 2), 16) / 255);
    const base = color(getComputedStyle(this).getPropertyValue('--bg').trim() || '#171b1f');
    const highlight = color(settings.highlight);

    gl.bindVertexArray(vao);
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    gl.enableVertexAttribArray(0);
    gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);
    gl.bindTexture(gl.TEXTURE_2D, field);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);

    const moving = () => !this.paused && !reduce.matches && !document.hidden && !lost;
    const syncControl = () => {
      this.dataset.motion = moving() ? 'running' : 'paused';
      document.querySelectorAll<HTMLButtonElement>('[data-background-toggle]').forEach(button => {
        button.hidden = lost;
        button.disabled = reduce.matches;
        button.textContent = reduce.matches ? 'Background motion off' : this.paused ? 'Resume background' : 'Pause background';
      });
    };
    const draw = () => {
      if (lost) return;
      // Anchor both the noise field and Bayer grid to document coordinates.
      // Keep only a viewport-sized drawing surface, even on long project pages.
      const scroll = Math.max(0, window.scrollY);
      const scrollCells = Math.floor(scroll / cssCell);
      const scrollRemainder = scroll - scrollCells * cssCell;
      canvas.style.transform = `translate3d(0, ${-scrollRemainder}px, 0)`;
      scrollDirty = false;
      gl.bindVertexArray(vao);
      // Compute noise once per dither cell instead of once per screen pixel.
      gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer);
      gl.viewport(0, 0, cols, rows);
      gl.useProgram(wave);
      gl.uniform2f(w.uResolution, width, height);
      gl.uniform1f(w.uCell, cssCell);
      gl.uniform1f(w.uTime, this.elapsed);
      gl.uniform1f(w.uScroll, scrollCells * cssCell);
      gl.uniform1f(w.uSpeed, settings.waveSpeed);
      gl.uniform1f(w.uFrequency, settings.waveFrequency);
      gl.uniform1f(w.uAmplitude, settings.waveAmplitude);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
      gl.bindFramebuffer(gl.FRAMEBUFFER, null);
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.useProgram(dither);
      gl.activeTexture(gl.TEXTURE0);
      gl.bindTexture(gl.TEXTURE_2D, field);
      gl.uniform1i(d.uField, 0);
      gl.uniform2i(d.uFieldSize, cols, rows);
      gl.uniform1f(d.uCell, cell);
      gl.uniform1f(d.uLevels, settings.colorLevels);
      gl.uniform1f(d.uScrollCells, scrollCells);
      gl.uniform3fv(d.uBase, base);
      gl.uniform3fv(d.uHighlight, highlight);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    };
    const frame = (now: number) => {
      raf = 0;
      if (document.hidden || lost) { last = 0; return; }
      if (!moving()) {
        // Pausing ambient motion still allows the texture to follow scrolling.
        if (scrollDirty) draw();
        last = 0;
        return;
      }
      if (!last || now - last >= settings.frameInterval || scrollDirty) {
        if (last) this.elapsed += Math.min((now - last) / 1000, .1);
        last = now;
        draw();
      }
      raf = requestAnimationFrame(frame);
    };
    const wake = () => {
      cancelAnimationFrame(raf);
      raf = 0;
      last = 0;
      if (moving() || (scrollDirty && !document.hidden && !lost)) raf = requestAnimationFrame(frame);
      syncControl();
    };
    const resize = () => {
      if (lost) return;
      width = Math.max(1, this.clientWidth);
      const viewportHeight = Math.max(1, this.clientHeight);
      const ratio = Math.min(1, 1920 / width, 1080 / viewportHeight);
      cell = Math.max(1, Math.round(settings.pixelSize * ratio));
      cssCell = cell / ratio;
      height = viewportHeight + cssCell;
      this.style.setProperty('--dither-scroll-padding', `${cssCell}px`);
      canvas.width = Math.max(1, Math.round(width * ratio));
      canvas.height = Math.max(1, Math.round(height * ratio));
      cols = Math.ceil(canvas.width / cell);
      rows = Math.ceil(canvas.height / cell);
      gl.bindTexture(gl.TEXTURE_2D, field);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA8, cols, rows, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
      gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer);
      gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, field, 0);
      const complete = gl.checkFramebufferStatus(gl.FRAMEBUFFER) === gl.FRAMEBUFFER_COMPLETE;
      gl.bindFramebuffer(gl.FRAMEBUFFER, null);
      if (!complete) { lost = true; canvas.hidden = true; wake(); return; }
      draw();
      wake();
    };
    const observer = new ResizeObserver(resize);
    observer.observe(this);
    const followScroll = () => {
      scrollDirty = true;
      if (!raf && !document.hidden && !lost) raf = requestAnimationFrame(frame);
    };
    window.addEventListener('scroll', followScroll, { passive: true, signal: events.signal });
    document.addEventListener('visibilitychange', wake, { signal: events.signal });
    document.addEventListener('astro:page-load', followScroll, { signal: events.signal });
    document.addEventListener('astro:page-load', syncControl, { signal: events.signal });
    reduce.addEventListener('change', wake, { signal: events.signal });
    document.addEventListener('click', event => {
      if (!(event.target instanceof Element) || !event.target.closest('[data-background-toggle]')) return;
      this.paused = !this.paused;
      try { sessionStorage.setItem('portfolio-background-paused', String(this.paused)); } catch { /* Optional preference. */ }
      wake();
    }, { signal: events.signal });
    canvas.addEventListener('webglcontextlost', event => {
      event.preventDefault();
      lost = true;
      canvas.hidden = true;
      wake();
    }, { signal: events.signal });
    canvas.addEventListener('webglcontextrestored', () => {
      this.dispose?.();
      this.dispose = undefined;
      canvas.hidden = false;
      this.connectedCallback();
    }, { signal: events.signal });
    this.dispose = () => {
      cancelAnimationFrame(raf);
      events.abort();
      observer.disconnect();
      gl.deleteProgram(wave);
      gl.deleteProgram(dither);
      gl.deleteBuffer(buffer);
      gl.deleteVertexArray(vao);
      gl.deleteTexture(field);
      gl.deleteFramebuffer(framebuffer);
    };
    resize();
  }

  disconnectedCallback() {
    // Astro may briefly detach persisted elements while swapping pages.
    queueMicrotask(() => {
      if (!this.isConnected) { this.dispose?.(); this.dispose = undefined; }
    });
  }
}

if (!customElements.get('dither-background')) customElements.define('dither-background', DitherBackground);
