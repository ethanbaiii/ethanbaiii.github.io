// One persistent music element serves both the page controls and the mini player.
const selector = 'audio[data-managed-media], video[data-managed-media]';
const player = document.querySelector<HTMLElement>('#site-music-player');
const audio = document.querySelector<HTMLAudioElement>('#site-music-audio');

if (player && audio) {
  type Track = { id: string; title: string; src: string; duration: number };
  let track: Track | null = null;
  let request = 0;
  const title = player.querySelector<HTMLAnchorElement>('[data-music-title]')!;
  const toggle = player.querySelector<HTMLButtonElement>('[data-mini-toggle]')!;
  const seek = player.querySelector<HTMLInputElement>('[data-mini-seek]')!;
  const time = player.querySelector<HTMLElement>('[data-mini-time]')!;
  const error = player.querySelector<HTMLElement>('[data-music-error]')!;
  const formatTime = (seconds: number) => {
    const value = Number.isFinite(seconds) ? Math.max(0, Math.floor(seconds)) : 0;
    return `${Math.floor(value / 60)}:${String(value % 60).padStart(2, '0')}`;
  };
  const duration = () => Number.isFinite(audio.duration) && audio.duration > 0 ? audio.duration : track?.duration || 0;
  const clearError = () => { error.hidden = true; error.textContent = ''; };

  function sync() {
    const playing = Boolean(track && !audio.paused && !audio.ended);
    player.hidden = !track;
    title.textContent = track?.title || 'Music';
    title.setAttribute('aria-label', track ? `Back to Audio: ${track.title}` : 'Back to Audio');
    toggle.setAttribute('aria-pressed', String(playing));
    toggle.setAttribute('aria-label', `${playing ? 'Pause' : 'Play'} ${track?.title || 'music'}`);
    const length = duration();
    const elapsed = track ? audio.currentTime : 0;
    seek.max = String(length || 1);
    seek.value = String(elapsed);
    seek.disabled = !track || audio.readyState < 1;
    time.textContent = `${formatTime(elapsed)} / ${formatTime(length)}`;
    document.querySelectorAll<HTMLElement>('[data-music-track]').forEach(row => {
      const active = row.dataset.musicTrack === track?.id;
      const button = row.querySelector<HTMLButtonElement>('[data-music-toggle]')!;
      const slider = row.querySelector<HTMLInputElement>('[data-music-seek]')!;
      const label = row.querySelector<HTMLElement>('[data-music-time]')!;
      const rowLength = active ? length : Number(row.dataset.duration);
      button.setAttribute('aria-label', `${active && playing ? 'Pause' : 'Play'} ${row.dataset.title}`);
      button.setAttribute('aria-pressed', String(active && playing));
      row.dataset.state = active ? playing ? 'playing' : 'paused' : 'idle';
      slider.max = String(rowLength);
      slider.value = String(active ? elapsed : 0);
      slider.disabled = !active || audio.readyState < 1;
      label.textContent = `${formatTime(active ? elapsed : 0)} / ${formatTime(rowLength)}`;
    });
  }

  function play() {
    if (!track) return;
    clearError();
    if (audio.ended) audio.currentTime = 0;
    const token = ++request;
    void audio.play().catch(reason => {
      if (token !== request || reason?.name === 'AbortError') return;
      error.textContent = 'Could not play this track. Please try again.';
      error.hidden = false;
      sync();
    });
    sync();
  }

  document.addEventListener('click', event => {
    if (!(event.target instanceof Element)) return;
    if (event.target.closest('[data-music-close]')) {
      const focusWasInside = player.contains(document.activeElement);
      const previousId = track?.id;
      ++request;
      audio.pause();
      track = null;
      audio.removeAttribute('src');
      audio.load();
      clearError();
      sync();
      if (focusWasInside) {
        const row = [...document.querySelectorAll<HTMLElement>('[data-music-track]')].find(row => row.dataset.musicTrack === previousId);
        (row?.querySelector<HTMLButtonElement>('button') || document.querySelector<HTMLAnchorElement>('.primary-nav a.current'))?.focus();
      }
      return;
    }
    if (event.target.closest('[data-mini-toggle]')) {
      if (audio.paused) play(); else { ++request; audio.pause(); }
      return;
    }
    const button = event.target.closest('[data-music-toggle]');
    const row = button?.closest<HTMLElement>('[data-music-track]');
    if (!row) return;
    if (track?.id === row.dataset.musicTrack) {
      if (audio.paused) play(); else { ++request; audio.pause(); }
    } else {
      ++request;
      audio.pause();
      track = { id: row.dataset.musicTrack!, title: row.dataset.title!, src: row.dataset.src!, duration: Number(row.dataset.duration) };
      audio.src = track.src;
      play();
    }
  });

  document.addEventListener('input', event => {
    const slider = event.target;
    if (!(slider instanceof HTMLInputElement) || !slider.matches('[data-music-seek], [data-mini-seek]') || slider.disabled || !track) return;
    audio.currentTime = Math.min(duration(), Math.max(0, Number(slider.value)));
    sync();
  });

  document.addEventListener('play', event => {
    const current = event.target;
    if (!(current instanceof HTMLMediaElement) || !current.matches(selector)) return;
    document.querySelectorAll<HTMLMediaElement>(selector).forEach(media => { if (media !== current && !media.paused) media.pause(); });
  }, true);
  document.addEventListener('astro:before-swap', () => {
    document.querySelectorAll<HTMLMediaElement>(selector).forEach(media => { if (media !== audio) media.pause(); });
  });
  document.addEventListener('astro:page-load', sync);
  window.addEventListener('pagehide', () => document.querySelectorAll<HTMLMediaElement>(selector).forEach(media => media.pause()));
  ['play', 'pause', 'timeupdate', 'loadedmetadata', 'durationchange', 'ended', 'emptied'].forEach(event => audio.addEventListener(event, sync));
  sync();
}
