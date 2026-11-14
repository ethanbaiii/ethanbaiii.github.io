import { navigate } from 'astro:transitions/client';
import { localeFromPath, type Locale } from '../lib/i18n';
let manual: Locale | null = null;
const remember = (locale: Locale) => { manual = locale; try { localStorage.setItem('portfolio-language', locale); } catch {} };
function preferred(): Locale {
  if (manual) return manual;
  try { const stored = localStorage.getItem('portfolio-language'); if (stored === 'en' || stored === 'zh') return stored; } catch {}
  return (navigator.languages?.[0] || navigator.language).toLowerCase().startsWith('zh') ? 'zh' : 'en';
}
document.addEventListener('click', event => {
  if (!(event instanceof MouseEvent) || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || !(event.target instanceof Element)) return;
  const link = event.target.closest<HTMLAnchorElement>('a[data-language-choice]');
  const choice = link?.dataset.languageChoice;
  if (!link || (choice !== 'en' && choice !== 'zh')) return;
  const target = new URL(link.href);
  if (target.origin !== location.origin) return;
  event.preventDefault();
  remember(choice);
  target.hash = location.hash;
  void navigate(target.pathname + target.search + target.hash);
}, true);
function pageLoad() {
  const url = new URL(location.href);
  const explicit = url.searchParams.get('lang');
  if (explicit === 'en' || explicit === 'zh') {
    remember(explicit);
    url.searchParams.delete('lang');
    history.replaceState(history.state, '', url.pathname + url.search + url.hash);
  }
  if (url.pathname === '/' && preferred() === 'zh') void navigate('/zh/' + url.search + url.hash, { history: 'replace' });
  document.documentElement.dataset.locale = localeFromPath(url.pathname);
}
document.addEventListener('astro:page-load', pageLoad);
pageLoad();
