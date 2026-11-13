// A decorative opening, independent of loading: never wait for images or video.
// Letter motion adapted from Effect 9 (Babooner), Codrops DecorativeLetterAnimations.
// Source and resource terms are recorded in THIRD_PARTY_NOTICES.md.
const sequence = {
  enterDuration: 680,
  exitStart: 1240,
  exitDurationMin: 680,
  exitDurationMax: 820,
  letterJitter: 60,
  // Follow the letters with a small delay.
  curtainDelay: 150,
  curtainDuration: 880,
};
const randomBetween = (min: number, max: number) => min + Math.random() * (max - min);

class OpeningIntro extends HTMLElement {
  private stop?: () => void;

  connectedCallback() {
    const root = document.documentElement;
    if (this.stop || root.dataset.intro !== 'pending') return;
    const reduce = matchMedia('(prefers-reduced-motion: reduce)');
    if (reduce.matches || location.hash) { root.removeAttribute('data-intro'); return; }
    const curtainStart = sequence.exitStart + sequence.curtainDelay;
    this.style.setProperty('--intro-enter-duration', `${sequence.enterDuration}ms`);
    this.style.setProperty('--intro-curtain-start', `${curtainStart}ms`);
    this.style.setProperty('--intro-curtain-duration', `${sequence.curtainDuration}ms`);
    this.querySelectorAll<HTMLElement>('.intro-letter').forEach(letter => {
      // Babooner: -300% to 0, then 0 to +300%; random +/-50deg and tiny random delays.
      letter.style.setProperty('--letter-enter-angle', `${randomBetween(-50, 50).toFixed(2)}deg`);
      letter.style.setProperty('--letter-exit-angle', `${randomBetween(-50, 50).toFixed(2)}deg`);
      letter.style.setProperty('--letter-enter-delay', `${randomBetween(0, sequence.letterJitter).toFixed(1)}ms`);
      letter.style.setProperty('--letter-exit-delay', `${(sequence.exitStart + randomBetween(0, sequence.letterJitter)).toFixed(1)}ms`);
      letter.style.setProperty('--letter-exit-duration', `${randomBetween(sequence.exitDurationMin, sequence.exitDurationMax).toFixed(1)}ms`);
    });
    const narrow = matchMedia('(max-width: 720px)').matches;
    this.querySelectorAll<HTMLElement>('.intro-shape').forEach(shape => {
      const x = Number(narrow ? shape.dataset.mobileX : shape.dataset.x);
      const y = Number(narrow ? shape.dataset.mobileY : shape.dataset.y);
      // Jitter the established composition, rather than scattering over the whole screen.
      shape.style.setProperty('--shape-x', `${Math.min(88, Math.max(12, x + randomBetween(-6, 6))).toFixed(2)}%`);
      shape.style.setProperty('--shape-y', `${Math.min(80, Math.max(16, y + randomBetween(-5, 5))).toFixed(2)}%`);
      shape.style.setProperty('--shape-angle', `${(Number(shape.dataset.angle) + randomBetween(-14, 14)).toFixed(2)}deg`);
      shape.style.setProperty('--shape-delay', `${randomBetween(100, 220).toFixed(1)}ms`);
    });
    const events = new AbortController();
    const timers: number[] = [];
    const content = [...document.querySelectorAll<HTMLElement>('[data-intro-content]')];
    content.forEach(element => {
      if (!element.inert) { element.inert = true; element.dataset.introInert = ''; }
    });
    const finish = () => {
      const restoreFocus = this.contains(document.activeElement);
      timers.forEach(timer => clearTimeout(timer));
      events.abort();
      this.hidden = true;
      root.removeAttribute('data-intro');
      content.forEach(element => {
        if (element.hasAttribute('data-intro-inert')) { element.inert = false; element.removeAttribute('data-intro-inert'); }
      });
      if (restoreFocus) document.querySelector<HTMLElement>('#main')?.focus({ preventScroll: true });
      this.stop = undefined;
    };
    this.stop = finish;
    this.hidden = false;
    document.addEventListener('keydown', event => { if (event.key === 'Escape') finish(); }, { signal: events.signal });
    document.addEventListener('astro:before-preparation', finish, { signal: events.signal });
    document.addEventListener('portfolio:intro-timeout', finish, { signal: events.signal });
    reduce.addEventListener('change', event => { if (event.matches) finish(); }, { signal: events.signal });
    // Only the initial document is eligible. Returning home via ClientRouter skips it.
    requestAnimationFrame(() => {
      if (!this.stop) return;
      root.dataset.intro = 'playing';
      timers.push(window.setTimeout(() => { root.dataset.intro = 'revealing'; }, curtainStart));
      timers.push(window.setTimeout(finish, curtainStart + sequence.curtainDuration + 50));
    });
  }

  disconnectedCallback() { this.stop?.(); }
}

if (!customElements.get('site-intro')) customElements.define('site-intro', OpeningIntro);
