// Checks generated files only. No browser, screenshots, or private source library.
import { readFile, readdir, stat } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import assert from 'node:assert/strict';

const root = fileURLToPath(new URL('../dist/', import.meta.url));
const html = new Map();
async function scan(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) await scan(file);
    else if (entry.name.endsWith('.html')) html.set(file, await readFile(file, 'utf8'));
  }
}
await scan(root);
assert(html.size >= 16, 'Expected portfolio routes were not built');
const references = new Set();
for (const [file, text] of html) {
  const ids = [...text.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]);
  assert.equal(ids.length, new Set(ids).size, `Duplicate ID: ${file}`);
  assert(!text.includes('/Users/'), `Local filesystem path exposed: ${file}`);
  assert(!/\/(?:media\/sthh|网站媒体待接入|作品集素材)\//i.test(text), `Private media path exposed: ${file}`);
  assert.equal((text.match(/<h1\b/g) || []).length, 1, `Expected one h1: ${file}`);
  for (const match of text.matchAll(/\b(?:href|src|poster|data-src)=["']([^"']+)["']/g)) {
    const href = match[1].replaceAll('&amp;', '&');
    if (/^(?:[a-z][\w+.-]*:|\/\/)/i.test(href)) continue;
    const parsed = new URL(href, 'https://ethanbaiii.github.io/' + path.relative(root, file).split(path.sep).join('/'));
    let target = path.resolve(root, '.' + decodeURIComponent(parsed.pathname));
    assert(target === path.resolve(root) || target.startsWith(path.resolve(root) + path.sep), 'Reference outside website');
    let information;
    try { information = await stat(target); } catch { assert.fail(`Missing file: ${href} in ${file}`); }
    if (information.isDirectory()) target = path.join(target, 'index.html');
    await stat(target);
    if (parsed.hash && html.has(target)) {
      const fragment = decodeURIComponent(parsed.hash.slice(1));
      const escaped = fragment.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      assert(new RegExp('\\bid="' + escaped + '"').test(html.get(target)), `Missing anchor: ${href}`);
    }
    references.add(target + parsed.hash);
  }
}
console.log(`Verified ${html.size} pages and ${references.size} internal file/anchor targets.`);
