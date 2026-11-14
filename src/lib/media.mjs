import registry from '../data/media.json' with { type: 'json' };
import chinese from '../data/zh.json' with { type: 'json' };
export const mediaItems = registry.items;
export const pageMedia = registry.pages;
export const mediaRestrictions = registry.restrictions || {};
const escape = value => String(value ?? '').replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&#39;');
function localizedItem(id, options = {}) {
  const variant = options.locale === 'zh' ? (options.mediaVariants || chinese.mediaVariants)?.[id] : null;
  return mediaItems[variant || id];
}
const mediaGroups = {
  'BATTLE-02': { className: 'media-trio', items: ['BATTLE-SKILL-1', 'BATTLE-SKILL-2', 'BATTLE-SKILL-3'] },
  'BATTLE-04': { className: 'media-trio', items: ['BATTLE-LEGACY-1', 'BATTLE-LEGACY-2', 'BATTLE-LEGACY-3'] },
  'BAZAAR-SIZES': { className: 'media-trio bazaar-item-group media-equal-height', equalHeight: true, items: ['BAZAAR-SMALL', 'BAZAAR-MEDIUM', 'BAZAAR-LARGE'] },
  'BAZAAR-COMBOS': { className: 'media-trio bazaar-item-group media-equal-height', equalHeight: true, items: ['BAZAAR-COMBO-1', 'BAZAAR-COMBO-2', 'BAZAAR-COMBO-3'] },
  'BAZAAR-TAGS': { className: 'media-pair media-equal-height', equalHeight: true, items: ['BAZAAR-FROG-HOLLOW', 'BAZAAR-PIANO'] },
  'WTS-04': { className: 'media-pair', items: ['WTS-NORMAL', 'WTS-CRITICAL'] },
  'UNREALTOR-03': { className: 'media-pair media-flow-pair', equalHeight: true, items: ['UNREALTOR-FLOW-BEFORE', 'UNREALTOR-FLOW-AFTER'] },
  'UNREALTOR-04': { className: 'media-trio', items: ['UNREALTOR-HINT-SILHOUETTE', 'UNREALTOR-HINT-INTERACT', 'UNREALTOR-HINT-TEXT'] }
};
export function renderMedia(id, options = {}) {
  let html = renderMediaBase(id, options);
  if (options.locale !== 'zh') return html;
  const copy = (options.mediaTranslations || chinese.media)[id];
  if (!copy) return html;
  if (copy.alt) html = html.replace(/(alt|aria-label|title)="[^"]*"/g, (_,attr) => attr + '="' + escape(copy.alt) + '"');
  if (copy.caption && mediaItems[id]?.kind !== 'pdf') html = html.replace(/<figcaption>[\s\S]*?<\/figcaption>/g, '<figcaption>' + escape(copy.caption) + '</figcaption>');
  if (copy.notice) html = html.replace('<span>' + escape(mediaRestrictions.sthh.homepageNotice) + '</span>', '<span>' + escape(copy.notice) + '</span>');
  html = html.replace('Open rulebook <span', '打开英文规则书 <span');
  return html.replace("Your browser does not support this video.", "当前浏览器不支持播放此视频。");
}
function renderMediaBase(id, options = {}) {
  const restriction = Object.values(mediaRestrictions).find(rule => id.startsWith(rule.idPrefix));
  if (restriction) {
    if (!options.showRestrictedNotice) return '';
    return '<figure class="media-frame media-image media-restricted" data-media-slot="' + escape(id) + '" data-media-state="restricted" data-media-kind="image"><div class="media-slot" role="note"><span>' + escape(restriction.homepageNotice) + '</span></div></figure>';
  }
  const group = mediaGroups[id];
  if (group) {
    // Proportional columns let diagrams retain their aspect ratios at a common height.
    const items = group.items.map(id => localizedItem(id, options));
    const columns = group.equalHeight ? items.map(item => 'minmax(0,' + item.width / item.height + 'fr)').join(' ') : '';
    const ratios = items.map(item => item.width / item.height);
    const heightLimits = group.equalHeight ? items.flatMap((item, index) => item.displayWidth ? [item.displayWidth / ratios[index]] : []) : [];
    const sharedHeight = heightLimits.length ? Math.min(...heightLimits) : null;
    const groupWidth = sharedHeight ? sharedHeight * ratios.reduce((sum, ratio) => sum + ratio, 0) + 20 * (ratios.length - 1) : null;
    const sizing = sharedHeight ? ';--media-image-height:' + sharedHeight + 'px;--media-group-width:' + groupWidth + 'px;--media-max-ratio:' + Math.max(...ratios) : '';
    const style = columns ? ' style="--media-columns:' + columns + sizing + '"' : '';
    return '<div class="' + group.className + '" data-media-group="' + escape(id) + '"' + style + '>' + group.items.map(item => renderMedia(item, options)).join('') + '</div>';
  }
  if (id === 'WTS-03') {
    const rows = [
      ['Level cap', 'Lv.10', 'Lv.20', 'Lv.30'],
      ['Player hits to defeat boss', '5.0', '5.5', '5.4'],
      ['Boss hits to defeat player', '5.6', '6.7', '6.3'],
      ['Player hits with Base Damage one level below cap', '6.5', '7.1', '7.1']
    ];
    if (options.locale === 'zh') {
      const labels=['等级上限','玩家击败 Boss 所需攻击次数','Boss 击败玩家所需攻击次数','基础伤害低于上限一级时，玩家所需攻击次数'];
      rows.forEach((row,index)=>row[0]=labels[index]);
    }
    const cn=options.locale==='zh';
    return '<table class="boss-model-table" data-media-slot="WTS-03" data-media-state="ready" data-media-kind="table" aria-label="' + (cn ? 'Boss 数值对照' : 'Boss stat comparison') + '"><thead><tr><th scope="col">' + (cn ? '指标' : 'Metric') + '</th><th scope="col">Boss 1</th><th scope="col">Boss 2</th><th scope="col">Boss 3</th></tr></thead><tbody>' + rows.map(([label, ...values]) => '<tr><th scope="row">' + escape(label) + '</th>' + values.map(value => '<td>' + escape(value) + '</td>').join('') + '</tr>').join('') + '</tbody></table>';
  }
  const item = localizedItem(id, options);
  const kind = item?.kind || options.kind || 'image';
  const className = ['media-frame', 'media-' + kind, options.className || '', item?.diagram ? 'media-diagram' : '', item?.displayWidth ? 'media-compact' : '', item?.portrait ? 'media-portrait' : '', item ? 'media-ready' : 'media-pending'].filter(Boolean).join(' ');
  const attributes = ' class="' + escape(className) + '" data-media-slot="' + escape(id) + '" data-media-state="' + (item ? 'ready' : 'pending') + '" data-media-kind="' + kind + '"';
  const caption = item ? item.caption : options.caption;
  const figcaption = caption ? '<figcaption>' + escape(caption) + '</figcaption>' : '';
  if (!item) {
    const label = options.label || id;
    return '<figure' + attributes + '><div class="media-slot" role="img" aria-label="' + escape(label + ': media pending') + '"><span>' + escape(label) + ' · ' + (kind === 'audio' ? 'Audio' : kind === 'video' ? 'Video' : 'Media') + ' pending</span></div>' + figcaption + '</figure>';
  }
  if (kind === 'image') {
    const style = item.displayWidth ? ' style="max-width:' + item.displayWidth + 'px"' : '';
    const image = '<img src="' + escape(item.src) + '" width="' + item.width + '" height="' + item.height + '"' + style + ' alt="' + escape(item.alt) + '" loading="' + (options.eager ? 'eager' : 'lazy') + '" decoding="async" />';
    return '<figure' + attributes + '>' + image + figcaption + '</figure>';
  }
  if (kind === 'pdf') return '<figure' + attributes + '><iframe class="rulebook-reader" src="' + escape(item.src) + '#view=FitH" title="' + escape(item.alt) + '" loading="lazy"></iframe><figcaption><a class="pdf-link" href="' + escape(item.src) + '" target="_blank" rel="noopener noreferrer">Open rulebook <span aria-hidden="true">↗</span></a></figcaption></figure>';
  if (kind === 'video') return '<figure' + attributes + '><video controls playsinline preload="none" data-managed-media src="' + escape(item.src) + '" poster="' + escape(item.poster) + '" width="' + item.width + '" height="' + item.height + '" style="aspect-ratio: ' + item.width + ' / ' + item.height + '" aria-label="' + escape(item.alt) + '">Your browser does not support this video.</video>' + figcaption + '</figure>';
  return '<figure' + attributes + '><audio controls preload="metadata" data-managed-media src="' + escape(item.src) + '" aria-label="' + escape(item.alt + ' audio') + '">Your browser does not support this audio.</audio>' + figcaption + '</figure>';
}
