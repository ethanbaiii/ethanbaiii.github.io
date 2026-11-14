---
id: "the-unrealtor"
title: "The Unrealtor"
role: "关卡设计"
meta: "Unity · 约 30 人团队 · 2026 年 1 至 5 月"
overview: ["一款以“不可能空间”为灵感的双人合作视角解谜游戏。玩家一起寻找目标物体，调整观察角度，让场景中的物体与目标剪影重合。已上架 [Steam](https://store.steampowered.com/app/4420050/The_Unrealtor/)。","作为四人策划团队的一员，我参与最终关卡的布局和流程设计。"]
description: "一款以“不可能空间”为灵感的双人合作视角解谜游戏。玩家一起寻找目标物体，调整观察角度，让场景中的物体与目标剪影重合。已上架 Steam。"
hero: {"id":"UNREALTOR-01","label":"The Unrealtor","caption":""}
page: "case"
href: "/zh/work/the-unrealtor/"
backHref: "/zh/#work"
backLabel: "精选作品"
headings: [{"depth":2,"slug":"project-context--my-contribution","text":"项目背景与我的贡献"},{"depth":2,"slug":"rethinking-the-final-levels-flow","text":"重新安排最终关卡的推进流程"},{"depth":2,"slug":"making-perspective-puzzles-easier-to-read","text":"让视角谜题更容易理解"},{"depth":3,"slug":"reflection","text":"反思"}]
---

<h2 id="project-context--my-contribution">项目背景与我的贡献</h2>

我在 Alpha 接近结束时加入。核心机制、教程和第一个主要关卡已经完成，剩下两个关卡仍处于早期白盒阶段。

教师评审指出，项目规模过大、谜题目标不清晰，整体难度也偏高。团队因此减少关卡数量，并重新调整保留内容中的谜题、流程和房间关系。

我为最终关卡提出并行推进结构，并在 Unity 中布置、迭代卧室、画廊、浴室和客厅，包括场景摆放、谜题物体位置和视角关系。引擎实现由程序负责。

<h2 id="rethinking-the-final-levels-flow">重新安排最终关卡的推进流程</h2>

之前的谜题建立了一个一致的预期：解开谜题，就会打开同一房间里的门，玩家能立刻看到结果。原本的最终关卡打破了这个预期。卧室谜题打开的是客厅里的浴室入口，玩家必须先返回客厅，才能确认哪扇门打开了。

空间连接和推进顺序也不一致：卧室与浴室都直接连接客厅，但玩家必须按固定顺序完成。空间上是两个并列的房间，目标上却是一条线性流程。

<figure class="media-frame media-image media-ready" data-media-slot="UNREALTOR-02" data-media-state="ready" data-media-kind="image"><img src="/media/the-unrealtor/living-room-connections.zh.png" width="1600" height="875" alt="客厅连接关系" loading="lazy" decoding="async" /><figcaption>客厅连接关系</figcaption></figure>

我提出把两个入口谜题都移到客厅，让每次解谜打开的门都在视野内。卧室和浴室则成为两条并行分支，各自解锁最终谜题的一部分。玩家仍需完成两条分支才能到达结局，但可以自己决定先去哪里。

- **调整前 - 线性：** 客厅谜题 → 卧室 → 卧室谜题 → 返回客厅 → 浴室 → 浴室谜题 → 最终谜题。
- **调整后 - 并行：** 客厅入口谜题 → 自选顺序完成卧室与浴室谜题 → 两条分支都完成后，解锁最终谜题。

<div class="media-pair media-flow-pair" data-media-group="UNREALTOR-03" style="--media-columns:minmax(0,1.0916666666666666fr) minmax(0,1.0416666666666667fr)"><figure class="media-frame media-image media-diagram media-ready" data-media-slot="UNREALTOR-FLOW-BEFORE" data-media-state="ready" data-media-kind="image"><img src="/media/the-unrealtor/flow-before.png" width="1179" height="1080" alt="调整前 · 线性流程" loading="lazy" decoding="async" /><figcaption>调整前 · 线性流程</figcaption></figure><figure class="media-frame media-image media-diagram media-ready" data-media-slot="UNREALTOR-FLOW-AFTER" data-media-state="ready" data-media-kind="image"><img src="/media/the-unrealtor/flow-after.png" width="1125" height="1080" alt="调整后 · 并行流程" loading="lazy" decoding="async" /><figcaption>调整后 · 并行流程</figcaption></figure></div>

团队在最终游戏中采用了这个结构。推进顺序与房间连接一致，也恢复了前面关卡中“解开谜题就能看到门打开”的反馈。每条分支都与最终目标明确相关，同时给玩家留下了完成顺序上的选择。

<h2 id="making-perspective-puzzles-easier-to-read">让视角谜题更容易理解</h2>

原有谜题希望玩家尝试不同物体和观察角度来发现解法。但试玩发现，玩家更早就遇到了障碍：他们经常不知道该找什么物体，也不知道为什么需要它，还没进入视角匹配的挑战，就卡在了辨认目标这一步。

团队加入了目标剪影、谜题区域的颜色提示，以及交互点文字。我的贡献是在 Unity 中重新安排部分谜题的场景，调整物体位置和视角关系，帮助玩家辨认目标并完成匹配。

<div class="media-trio" data-media-group="UNREALTOR-04"><figure class="media-frame media-image media-diagram media-compact media-ready" data-media-slot="UNREALTOR-HINT-SILHOUETTE" data-media-state="ready" data-media-kind="image"><img src="/media/the-unrealtor/hint-silhouette.png" width="370" height="520" style="max-width:152px" alt="剪影提示" loading="lazy" decoding="async" /><figcaption>剪影提示</figcaption></figure><figure class="media-frame media-image media-diagram media-compact media-ready" data-media-slot="UNREALTOR-HINT-INTERACT" data-media-state="ready" data-media-kind="image"><img src="/media/the-unrealtor/hint-interaction.png" width="370" height="522" style="max-width:152px" alt="交互提示" loading="lazy" decoding="async" /><figcaption>交互提示</figcaption></figure><figure class="media-frame media-image media-diagram media-compact media-ready" data-media-slot="UNREALTOR-HINT-TEXT" data-media-state="ready" data-media-kind="image"><img src="/media/the-unrealtor/hint-text.png" width="372" height="522" style="max-width:154px" alt="文字提示" loading="lazy" decoding="async" /><figcaption>文字提示</figcaption></figure></div>

调整后，玩家从“先发现目标，再找到视角”，变成“先知道目标，再找到匹配视角”。

<h3 id="reflection">反思</h3>

提示改善了目标辨认，但也减少了寻找目标时的探索、猜想和尝试。如果继续迭代，我会测试渐进式提示：先用环境引导，玩家持续卡住时，再逐步显示剪影和文字。之后还需要试玩，判断目标清晰度和独立发现之间的平衡。
