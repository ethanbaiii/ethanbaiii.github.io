---
id: "sthh"
title: "Soft Things Hit Hard"
role: "角色、战斗与系统设计"
meta: "Unreal Engine 5 · 约 40 人团队 · 2026 年 3 月至今"
overview: ["一款最多支持八人的派对大逃杀游戏。玩家把日常物品拼装成武器和装备。我负责角色相关玩法与行为设计，以及外观系统设计。","我的工作包括制定规则、编写设计文档和程序需求、配置参数，以及在引擎中测试行为。系统由程序实现。"]
description: "一款最多支持八人的派对大逃杀游戏。玩家把日常物品拼装成武器和装备。我负责角色相关玩法与行为设计，以及外观系统设计。"
hero: {"id":"STHH-01","label":"Soft Things Hit Hard","caption":""}
page: "case"
href: "/zh/work/sthh/"
backHref: "/zh/#work"
backLabel: "精选作品"
headings: [{"depth":2,"slug":"throwing-and-discarding-giving-each-action-a-purpose","text":"投掷与丢弃：让两个操作各有用途"},{"depth":3,"slug":"making-the-throw-easier-to-aim","text":"让投掷更容易瞄准"},{"depth":3,"slug":"preserving-weapon-differences-after-impact","text":"命中后仍保留武器之间的差异"},{"depth":2,"slug":"customization-developing-a-feature-from-defined-categories","text":"外观自定义：从分类到完整规则"},{"depth":2,"slug":"character-design","text":"角色设计"}]
---

<h2 id="throwing-and-discarding-giving-each-action-a-purpose">投掷与丢弃：让两个操作各有用途</h2>

<p class="implementation-note">当前状态：已有可玩版本。</p>

在我最初设计的规则中，投掷会扔出最后装上的武器零件，丢弃则移除整把武器。这与武器策划希望通过不同投掷伤害区分武器的目标不一致，也让玩家在装错一个零件时，必须拆掉整把武器重新拼装。

在后续迭代中，我将投掷改为扔出整把武器，丢弃改为只移除一个零件，保留其余部分。我也考虑过让玩家切换“投零件”和“投整把武器”，但最终没有采用。能造成伤害的零件投掷可能取代丢弃，而增加一个操作也不符合派对游戏容易上手的目标。

<h3 id="making-the-throw-easier-to-aim">让投掷更容易瞄准</h3>

测试原有的抛物线轨迹时，我发现很难让投掷落在预期位置。游戏已经用画面中央的圆点拾取物品，因此我提出让投掷先直线飞行一段距离，再开始下落，并以镜头和中央圆点作为瞄准依据。

我还规定，进入投掷模式后，角色始终朝向镜头的水平方向，即使玩家正在侧移或后退。这样，投掷手相对镜头的位置更稳定，也方便其他玩家辨认瞄准姿态。

武器投掷和泥团投掷沿用相同的操作与飞行规则，让玩家切换形态后仍能使用熟悉的操作。我将轨迹拆成可配置的初速度、开始下落的距离、向下加速度，以及继承玩家移动速度的比例；两类投掷分别保留自己的参数。

<h3 id="preserving-weapon-differences-after-impact">命中后仍保留武器之间的差异</h3>

旧规则规定，武器第一次命中敌人后就会散开。我提出增加一个较短的命中窗口，让武器在这段时间保持连接，还能命中其他敌人，但每次投掷对同一个敌人只能造成一次伤害。这样，不同武器的形状和覆盖范围才有机会影响投掷效果，而不会一碰到第一个目标就结束。

新的投掷功能在一定程度上改善了瞄准体验，但仍需进一步调整摄像机位置。

<h2 id="customization-developing-a-feature-from-defined-categories">外观自定义：从分类到完整规则</h2>

<p class="implementation-note">当前状态：已有可玩版本；新功能和调整仍待接入，包括大厅颜色分配。</p>

我接手时，项目已经确定了外观分类，但还没有具体的功能规则。作为主要设计者，我补齐了浏览与预览流程、解锁与装备规则、外观拥有记录与配置保存，以及不同角色状态下的外观表现。当前可玩版本已经支持预览、解锁、装备、保存和应用外观。

我将预览、拥有和装备分开处理：预览只改变本地展示角色，不保存；解锁只获得拥有权，不自动装备；装备才会确认并保存选择。我也定义了默认外观，以及存档中的选择失效时如何恢复。程序负责实现，我负责参数配置、排查问题和测试。

下一轮调整中，我设计了大厅内不重复的角色颜色，同时保留玩家保存的颜色偏好。偏好颜色可用时直接使用，否则为本次大厅分配一个空闲颜色，且不覆盖原有偏好。这样既方便辨认玩家，也不会因为一次颜色冲突而永久改变选择。大厅颜色分配尚未接入。

<span id="character-design-and-production-support" aria-hidden="true"></span>

<h2 id="character-design">角色设计</h2>

<p class="implementation-note">当前状态：Moving Mud 已有可玩实现。</p>

玩家操控黏土角色，失去正常身体后会变成 Moving Mud。这是一种可以移动的泥团形态，能收集黏土，逐步恢复身体。

我接手时，正常角色已有基础设计。我补充了此前缺少的 Moving Mud 行为、角色状态与切换条件，以及部分角色基础数值，并为两种形态整理模型和动画需求，与美术、程序沟通推进。

Moving Mud 目前已有可玩实现。操作方面，我沿用既有按键，并补充了投掷需要的输入规则。
