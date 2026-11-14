---
id: "sprawl"
title: "Sprawl"
role: "主要玩法设计"
meta: "桌游 · 四人团队 · 3 周"
overview: ["一款以藤蔓生长为主题的领地争夺桌游。玩家在共用棋盘上延伸藤蔓，争夺空间，同时保住自己的生长路线。","**核心设计关键词：** 多方竞争 · 领地控制 · 建造 · 自然主题","藤蔓生长把建造和领地控制联系起来：玩家一边延伸、分叉，一边截断对手的生长路线。"]
description: "一款以藤蔓生长为主题的领地争夺桌游。玩家在共用棋盘上延伸藤蔓，争夺空间，同时保住自己的生长路线。"
hero: {"id":"SPRAWL-01","label":"Sprawl","caption":""}
page: "prototypes"
href: "/zh/prototypes/sprawl/"
backHref: "/zh/prototypes/"
backLabel: "更多作品"
headings: [{"depth":2,"slug":"gameplay-expand-cut-off-and-survive","text":"玩法：扩张、截断与生存"},{"depth":2,"slug":"iteration-creating-conflict-and-preserving-planning","text":"迭代：促成对抗，保留规划空间"},{"depth":2,"slug":"reflection","text":"反思"}]
---

<h2 id="gameplay-expand-cut-off-and-survive">玩法：扩张、截断与生存</h2>

行动牌决定本回合可放置的藤蔓牌大小。玩家选择形状和方向，再连接到自己藤蔓的一个开放生长端点。摆放可以延长路线、创造分支，也可以覆盖对手的藤蔓。

生长端点既是扩张的位置，也是容易受到攻击的目标。覆盖对手的端点可以封住一条生长路线，并获得额外分数。失去所有端点的玩家被淘汰。游戏结束时按可见领地计分，而最后存活的藤蔓会直接获胜。因此，玩家要在扩大面积、截断对手和保护自身端点之间权衡。除此以外，道具卡还可以保护一个棋盘格，或在下一回合增加一次行动。

<h2 id="iteration-creating-conflict-and-preserving-planning">迭代：促成对抗，保留规划空间</h2>

早期测试中，玩家过于容易各自扩张。我们将初始的 13×13 棋盘缩小到 9×9，加入端点被完全封住后的淘汰规则，并奖励覆盖对手端点，鼓励直接竞争。

<figure class="media-frame media-image media-ready" data-media-slot="SPRAWL-PLAYTEST" data-media-state="ready" data-media-kind="image"><img src="/media/sprawl/playtest.webp" width="1600" height="1081" alt="试玩" loading="lazy" decoding="async" /><figcaption>试玩</figcaption></figure>

最初，行动牌确定大小后，玩家还要随机抽取形状，这可能让事先规划的走法失效。后来改为自行选择形状，移除了第二层随机性，同时保留行动牌带来的限制。

<span id="adapting-to-a-classroom-time-limit" aria-hidden="true"></span>

<h2 id="reflection">反思</h2>

我们对约 40 至 60 分钟的领地争夺体验比较满意，但作业要求控制在 20 分钟以内。因此，我们继续尝试 7×7 棋盘、减少轮数，以及增加开局摆放次数。然而，后续记录中仍有一局持续了 45 分钟。

这次经历让我意识到，领地争夺类桌游的时长不只取决于棋盘大小和轮数。玩家还会花时间思考走法、交流和判断对手的意图。要保留这些互动，同时把一局控制在 20 分钟以内，对我们来说是一个挑战。

玩家喜欢互相进攻、预判对手下一步的行动。不过，藤蔓叠放后，不容易看清哪些部分相连、哪些端点还能继续生长。我们为此调整了规则表述、示意图和指示物，希望让玩家更容易理解棋盘上的情况。
