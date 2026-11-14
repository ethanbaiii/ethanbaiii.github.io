export type Locale = 'en' | 'zh';
export const translatedPaths = ["/", "/about/", "/prototypes/", "/analysis/", "/audio/", "/resume/", "/work/battle-demo/", "/work/sthh/", "/work/way-to-the-sky/", "/work/the-unrealtor/", "/prototypes/god-of-words/", "/prototypes/sprawl/", "/analysis/honor-of-kings/", "/analysis/the-bazaar/", "/audio/overdawn/"];
export const localeFromPath = (path: string): Locale => /^\/zh(?:\/|$)/.test(path) ? 'zh' : 'en';
export const englishPath = (path: string) => path.replace(/^\/zh(?=\/|$)/, '') || '/';
export function hasChinese(path: string) { return translatedPaths.includes(englishPath(path)); }
export function localizedPath(path: string, locale: Locale) {
  const url = new URL(path, 'https://ethanbaiii.github.io');
  const en = englishPath(url.pathname);
  return (locale === 'zh' && hasChinese(en) ? '/zh' + en : en) + url.search + url.hash;
}
export const englishLabel = (path: string, locale: Locale) => locale === 'zh' && !hasChinese(new URL(path, 'https://ethanbaiii.github.io').pathname) ? '（英文）' : '';
