---
id: "way-to-the-sky"
title: "Way to the Sky"
role: "数值、系统与战斗设计"
meta: "Unity · 双人团队 · 5 周"
overview: ["一款以夸张的扇巴掌动作为主题的增量战斗游戏。玩家挥动鼠标给训练假人扇巴掌，获得与伤害等量的经验值，升级属性，并挑战三位 Boss。","作为主要设计者，我负责整体游戏设计，并在 Unity 中实现核心玩法系统。我使用 AI 辅助编程。","队友主要负责美术、UI 和挥动输入，也参与部分设计与编程。"]
description: "一款以夸张的扇巴掌动作为主题的增量战斗游戏。玩家挥动鼠标给训练假人扇巴掌，获得与伤害等量的经验值，升级属性，并挑战三位 Boss。"
hero: {"id":"WTS-01","label":"Way to the Sky","caption":""}
page: "case"
href: "/zh/work/way-to-the-sky/"
backHref: "/zh/#work"
backLabel: "精选作品"
headings: [{"depth":2,"slug":"making-damage-drive-progression","text":"让伤害推动成长"},{"depth":2,"slug":"tuning-bosses-as-progression-checkpoints","text":"用 Boss 检验成长进度"},{"depth":2,"slug":"reflection","text":"反思"}]
---

<h2 id="making-damage-drive-progression">让伤害推动成长</h2>

我希望通过夸张的扇巴掌动作、不断增加的伤害数字，以及击败 Boss 后解锁的新能力，营造持续变强的喜剧感。

<figure class="media-frame media-image media-diagram media-compact media-ready" data-media-slot="WTS-02" data-media-state="ready" data-media-kind="image"><img src="/media/way-to-the-sky/core-loop.zh.png" width="886" height="702" style="max-width:360px" alt="核心玩法循环" loading="lazy" decoding="async" /><figcaption>核心玩法循环</figcaption></figure>

训练时造成多少伤害，就能获得多少经验值。因此，攻击属性既能提高战斗力，也会加快之后的成长。最大生命值则只提高 Boss 战中的生存能力，不会加快训练。这让玩家有理由在训练时先发展输出，再在挑战 Boss 前投入生命值。

初始可升级的属性是基础伤害、暴击率和最大生命值。击败第一位 Boss 后解锁暴击倍率，让之前投入的暴击率更有价值；击败第二位 Boss 后解锁双重打击概率，增加另一种伤害成长方式。每次胜利都会带来新的成长变量和更高的等级上限。

<figure class="media-frame media-image media-diagram media-compact media-ready" data-media-slot="WTS-PROGRESSION" data-media-state="ready" data-media-kind="image"><img src="/media/way-to-the-sky/progression.zh.png" width="546" height="364" style="max-width:320px" alt="概念性成长曲线" loading="lazy" decoding="async" /><figcaption>概念性成长曲线</figcaption></figure>

所有属性最终都能升满，因此这些选择影响的是升级顺序和节奏，而不是形成无法更改的构筑方向。

<figure class="media-frame media-image media-ready" data-media-slot="WTS-UPGRADE" data-media-state="ready" data-media-kind="image"><img src="/media/way-to-the-sky/upgrades.webp" width="1600" height="901" alt="属性升级与解锁" loading="lazy" decoding="async" /><figcaption>属性升级与解锁</figcaption></figure>

<h2 id="tuning-bosses-as-progression-checkpoints">用 Boss 检验成长进度</h2>

<figure class="media-frame media-image media-ready" data-media-slot="WTS-BOSS-FIGHT" data-media-state="ready" data-media-kind="image"><img src="/media/way-to-the-sky/boss-fight.webp" width="1600" height="900" alt="Boss 战" loading="lazy" decoding="async" /><figcaption>Boss 战</figcaption></figure>

我用电子表格推算各级属性、升级费用，以及玩家和 Boss 击败对方所需的攻击次数。基础伤害每级乘以 1.30，让数值提高后，每次升级仍有相近比例的提升；升级费用每级乘以 1.37。实际训练耗时还会受到暴击和后续解锁能力的影响。

通过期望伤害，可以比较双方大约需要多少次攻击才能获胜。在第一位 Boss 对应的等级上限，模型中玩家约需攻击 5.0 次，Boss 约需攻击 5.6 次；其他属性不变、基础伤害低一级时，玩家的期望攻击次数增至约 6.5 次。战斗中由玩家先出手。

<table class="boss-model-table" data-media-slot="WTS-03" data-media-state="ready" data-media-kind="table" aria-label="Boss 数值对照"><thead><tr><th scope="col">指标</th><th scope="col">Boss 1</th><th scope="col">Boss 2</th><th scope="col">Boss 3</th></tr></thead><tbody><tr><th scope="row">等级上限</th><td>Lv.10</td><td>Lv.20</td><td>Lv.30</td></tr><tr><th scope="row">玩家击败 Boss 所需攻击次数</th><td>5.0</td><td>5.5</td><td>5.4</td></tr><tr><th scope="row">Boss 击败玩家所需攻击次数</th><td>5.6</td><td>6.7</td><td>6.3</td></tr><tr><th scope="row">基础伤害低于上限一级时，玩家所需攻击次数</th><td>6.5</td><td>7.1</td><td>7.1</td></tr></tbody></table>

这些数字是期望值，不代表实际能打出小数次攻击，也不是测得的胜率。随机暴击仍可能让玩家在目标等级前提前获胜。因此，Boss 更像是检验玩家能否稳定推进的关卡，而不是严格锁住进度的等级门槛。

<h2 id="reflection">反思</h2>

课堂试玩反馈指出，训练过程重复，获得明显升级的等待也较长。我降低了经验需求，缩短升级间隔，也通过区分普通命中和暴击的视觉效果、受击反应、镜头震动与音效，加强了攻击反馈。

<div class="media-pair" data-media-group="WTS-04"><figure class="media-frame media-image media-ready" data-media-slot="WTS-NORMAL" data-media-state="ready" data-media-kind="image"><img src="/media/way-to-the-sky/normal.webp" width="1600" height="900" alt="普通命中" loading="lazy" decoding="async" /><figcaption>普通命中</figcaption></figure><figure class="media-frame media-image media-ready" data-media-slot="WTS-CRITICAL" data-media-state="ready" data-media-kind="image"><img src="/media/way-to-the-sky/critical.webp" width="1600" height="900" alt="暴击" loading="lazy" decoding="async" /><figcaption>暴击</figcaption></figure></div>

这些调整改善的是奖励节奏和攻击反馈，并没有增加战斗中的选择，也没有加入需要观察、预判或判断的操作。在五周的开发时间内，我们优先完成从训练到结局的完整流程，原计划中的闪避和反击没有实现。

如果继续做，我会先尝试一种需要玩家观察并回应 Boss 动作的防御交互，再围绕这个新选择重新测试战斗时长和升级节奏。先让重复进行的操作本身更有意思，再调整下一次奖励需要等多久。
