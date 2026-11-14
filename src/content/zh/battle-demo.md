---
id: "battle-demo"
title: "技能传承战斗Demo"
role: "战斗与系统设计"
meta: "Unity 6 · 个人项目 · 2026 年 9 至 10 月"
overview: ["一个第三人称动作战斗Demo，探索三个技能能组合出怎样的战斗体验，带有肉鸽强化机制。", "项目使用了外部模型和动画素材，并使用 AI 辅助开发。"]
description: "一个第三人称动作战斗Demo，探索三个技能能组合出怎样的战斗体验，带有肉鸽强化机制。"
hero: {"id":"BATTLE-01","label":"战斗概览","caption":"游戏实录"}
page: "case"
href: "/zh/work/battle-demo/"
backHref: "/zh/#work"
backLabel: "精选作品"
headings: [{"depth":2,"slug":"gameplay-overview","text":"基础玩法"},{"depth":2,"slug":"three-skills-with-distinct-roles","text":"三个技能的分工"},{"depth":2,"slug":"two-layers-of-combination","text":"技能组合"},{"depth":2,"slug":"enemy-behavior-creating-opportunities-for-different-combinations","text":"敌人行为与技能选择"},{"depth":2,"slug":"roguelite-upgrades-changing-combinations--risks","text":"肉鸽强化与风险取舍"}]
---

<h2 id="gameplay-overview">基础玩法</h2>

玩家通过三段普攻、三个技能和闪避进行战斗。三个技能消耗共用的 SP 资源，普攻命中可以帮助恢复 SP。打破敌人的韧性后，可以趁机接上后续攻击。每一轮挑战后，玩家需要为自己和敌人选择强化。

<h2 id="three-skills-with-distinct-roles">三个技能的分工</h2>

| 技能 | 行为与取舍 |
| --- | --- |
| S1 重击 | 单次削韧较高，为后续攻击创造机会。 |
| S2 连射 | 持续输出，但出招时间较长。需要时可以在第一发后闪避取消，代价是放弃剩余射击。 |
| S3 爆发 | 前摇短，攻击覆盖周围 360°，适合应对聚集或包围的敌人。 |

<div class="media-trio" data-media-group="BATTLE-02"><figure class="media-frame media-video media-ready" data-media-slot="BATTLE-SKILL-1" data-media-state="ready" data-media-kind="video"><video controls playsinline preload="none" data-managed-media src="/media/action-combat/skills/skill-1.mp4" poster="/media/action-combat/posters/skills/skill-1.webp" width="720" height="960" style="aspect-ratio: 720 / 960" aria-label="技能传承战斗Demo：S1 重击">当前浏览器不支持播放此视频。</video><figcaption>S1 重击</figcaption></figure><figure class="media-frame media-video media-ready" data-media-slot="BATTLE-SKILL-2" data-media-state="ready" data-media-kind="video"><video controls playsinline preload="none" data-managed-media src="/media/action-combat/skills/skill-2.mp4" poster="/media/action-combat/posters/skills/skill-2.webp" width="720" height="960" style="aspect-ratio: 720 / 960" aria-label="技能传承战斗Demo：S2 连射">当前浏览器不支持播放此视频。</video><figcaption>S2 连射</figcaption></figure><figure class="media-frame media-video media-ready" data-media-slot="BATTLE-SKILL-3" data-media-state="ready" data-media-kind="video"><video controls playsinline preload="none" data-managed-media src="/media/action-combat/skills/skill-3.mp4" poster="/media/action-combat/posters/skills/skill-3.webp" width="720" height="960" style="aspect-ratio: 720 / 960" aria-label="技能传承战斗Demo：S3 爆发">当前浏览器不支持播放此视频。</video><figcaption>S3 爆发</figcaption></figure></div>

<h2 id="two-layers-of-combination">技能组合</h2>

**普攻强化**

不同段的普攻会给下一个技能带来不同强化。三段普攻分别记为 A1、A2、A3：A1 缩短技能前摇，A2 让技能首次命中时额外推进 SP 的恢复进度，A3 提高技能伤害。每次只保留最后一次普攻带来的强化，可用于任意技能。玩家需要在速度、资源恢复和伤害之间选择，而不是打完整套普攻就获得三种强化。

<figure class="media-frame media-video media-ready" data-media-slot="BATTLE-03" data-media-state="ready" data-media-kind="video"><video controls playsinline preload="none" data-managed-media src="/media/action-combat/attack-modifiers.mp4" poster="/media/action-combat/posters/attack-modifiers.webp" width="1280" height="720" style="aspect-ratio: 1280 / 720" aria-label="技能传承战斗Demo：普攻强化">当前浏览器不支持播放此视频。</video><figcaption>普攻强化</figcaption></figure>

**技能传承**

使用技能会影响下一个技能的效果。S1 能为后一个技能提供额外削韧和破韧后浮空效果，S2 能提供牵引效果，S3 则提供防打断效果。例如，S2 接在 S1 后可以获得额外削韧和破韧后浮空效果，接在 S3 后则更不容易被打断。S2 提供的牵引效果，也能帮后续的 S3 聚拢敌人。

一组技能连携分为三段：起始技能、连接技能和终结技能。连接技能继承前一个技能的二阶效果，终结技能继承前一个技能的三阶效果。默认情况下，技能传承只在前后相邻的技能之间生效。中间可以穿插普攻和闪避，它们不会占用或推进连携段数。

技能连携有时间限制，玩家需要在连携窗口内接上下一个技能；受到攻击还会进一步缩短剩余窗口时间。

<div class="media-trio" data-media-group="BATTLE-04"><figure class="media-frame media-video media-ready" data-media-slot="BATTLE-LEGACY-1" data-media-state="ready" data-media-kind="video"><video controls playsinline preload="none" data-managed-media src="/media/action-combat/legacy/skill-1.mp4" poster="/media/action-combat/posters/legacy/skill-1.webp" width="720" height="960" style="aspect-ratio: 720 / 960" aria-label="技能传承战斗Demo：S1 传承">当前浏览器不支持播放此视频。</video><figcaption>S1 传承</figcaption></figure><figure class="media-frame media-video media-ready" data-media-slot="BATTLE-LEGACY-2" data-media-state="ready" data-media-kind="video"><video controls playsinline preload="none" data-managed-media src="/media/action-combat/legacy/skill-2.mp4" poster="/media/action-combat/posters/legacy/skill-2.webp" width="720" height="960" style="aspect-ratio: 720 / 960" aria-label="技能传承战斗Demo：S2 传承">当前浏览器不支持播放此视频。</video><figcaption>S2 传承</figcaption></figure><figure class="media-frame media-video media-ready" data-media-slot="BATTLE-LEGACY-3" data-media-state="ready" data-media-kind="video"><video controls playsinline preload="none" data-managed-media src="/media/action-combat/legacy/skill-3.mp4" poster="/media/action-combat/posters/legacy/skill-3.webp" width="720" height="960" style="aspect-ratio: 720 / 960" aria-label="技能传承战斗Demo：S3 传承">当前浏览器不支持播放此视频。</video><figcaption>S3 传承</figcaption></figure></div>

<h2 id="enemy-behavior-creating-opportunities-for-different-combinations">敌人行为与技能选择</h2>

敌人会根据与玩家的距离和自身血量，选择近战攻击、突进或后撤远程攻击。玩家需要判断什么时候追击、什么时候用牵引拉近目标，或抓住破韧的机会打完 S2。

面对多个敌人时，由一名敌人主攻，其余敌人调整站位。打破主攻敌人的韧性，可以暂时缓解它带来的攻击压力。敌人聚在一起还是分散开，也会影响牵引和范围攻击的使用时机。这样设计是为了控制直接攻击的压力，同时让玩家有机会判断先打谁、怎么走位。

<figure class="media-frame media-video media-ready" data-media-slot="BATTLE-05" data-media-state="ready" data-media-kind="video"><video controls playsinline preload="none" data-managed-media src="/media/action-combat/enemy-behavior.mp4" poster="/media/action-combat/posters/enemy-behavior.webp" width="1280" height="720" style="aspect-ratio: 1280 / 720" aria-label="技能传承战斗Demo：敌人行为">当前浏览器不支持播放此视频。</video><figcaption>敌人行为</figcaption></figure>

<h2 id="roguelite-upgrades-changing-combinations--risks">肉鸽强化与风险取舍</h2>

肉鸽强化会进一步改变技能之间的组合方式。比如，“传承回响”能让终结技能额外继承起始技能的二阶效果，突破原本只能相邻传承的限制。

玩家不只给自己选强化，也要决定敌人获得什么强化。这让玩家在构筑时需要考虑自己能承受哪些风险：如果依赖破韧，就可能避开提高敌人韧性的选项；如果擅长完美闪避，就可能接受敌人伤害更高的挑战。

<figure class="media-frame media-image media-ready" data-media-slot="BATTLE-06" data-media-state="ready" data-media-kind="image"><img src="/media/action-combat/roguelite.webp" width="1600" height="900" alt="技能传承战斗Demo：玩家与敌人强化" loading="lazy" decoding="async" /><figcaption>玩家与敌人强化</figcaption></figure>
