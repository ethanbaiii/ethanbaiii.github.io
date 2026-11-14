---
id: "overdawn"
title: "Overdawn"
role: "音频负责人、音效设计"
meta: "Unity · 约 20 人团队 · 2025 年 9 月至 2026 年 2 月"
overview: ["Overdawn 是一款 2.5D 反乌托邦射击游戏，已在 [Steam](https://store.steampowered.com/app/3519070/Overdawn/) 发布完整可玩 Demo。我带领三人音频团队，通过素材编辑、调制和分层，亲自制作了 100 多个用于战斗、技能、UI 和环境的音效资源。另外两位成员主要负责音乐。"]
description: "Overdawn 是一款 2.5D 反乌托邦射击游戏，已在 Steam 发布完整可玩 Demo。我带领三人音频团队，通过素材编辑、调制和分层，亲自制作了 100 多个用于战斗、技能、UI 和环境的音效资源。另外两位成员主要负责音乐。"
hero: null
page: "audio"
href: "/zh/audio/overdawn/"
backHref: "/zh/audio/"
backLabel: "音频"
headings: [{"depth":2,"slug":"building-the-hidden-bosss-audio","text":"隐藏 Boss 的音效设计"},{"depth":3,"slug":"connecting-the-charge-up-to-the-release","text":"让蓄力连贯地接到释放"},{"depth":2,"slug":"bringing-the-sounds-into-unity","text":"将音效接入 Unity"}]
---

<h2 id="building-the-hidden-bosss-audio">隐藏 Boss 的音效设计</h2>

我与策划确认隐藏 Boss 的音效需求，并为弹幕攻击、受击、大招和机械羽翼制作音效。

<figure class="media-frame media-video media-ready" data-media-slot="OVERDAWN-SHOWCASE" data-media-state="ready" data-media-kind="video"><video controls playsinline preload="none" data-managed-media src="/media/overdawn/sound-showcase.zh.mp4" poster="/media/overdawn/posters/sound-showcase.zh.webp" width="1280" height="720" style="aspect-ratio: 1280 / 720" aria-label="隐藏 Boss 音效展示">当前浏览器不支持播放此视频。</video><figcaption>隐藏 Boss 音效展示</figcaption></figure>

<h3 id="connecting-the-charge-up-to-the-release">让蓄力连贯地接到释放</h3>

第一版大招蓄力由几段独立声音组成。策划希望声音能更连贯地推向攻击释放，因此我把这些片段连接起来，并加入通向释放的音高滑变。团队最终采用了第二版。

我希望蓄力听起来像一个持续推进、最终接到攻击的动作。两个版本都收录在上方视频中。

<h2 id="bringing-the-sounds-into-unity">将音效接入 Unity</h2>

主要音频系统和工具由程序搭建。我使用这些工具配置音效资源，并编写部分触发逻辑，让声音与战斗事件对应。隐藏 Boss 的音效配置在对应的 Unity Behavior Graph 节点上，再根据动作调整播放时机。
