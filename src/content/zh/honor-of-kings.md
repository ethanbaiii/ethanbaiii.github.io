---
id: "honor-of-kings"
title: "《王者荣耀》的“三体人”问题 - 以蚩奼为例"
role: "MOBA 英雄与战斗设计分析"
meta: ""
description: "一个英雄能应对多种局面时，怎样才算提供了有意义的选择，又在什么时候变成短板太少、对手难以应对？我以蚩奼的兵器轮换为例，分析功能覆盖、形态推进和跨分路能力中的取舍，并提出让三种形态各有用途与限制的调整方向。"
overview: ["一个英雄能应对多种局面时，怎样才算提供了有意义的选择，又在什么时候变成短板太少、对手难以应对？我以蚩奼的兵器轮换为例，分析功能覆盖、形态推进和跨分路能力中的取舍，并提出让三种形态各有用途与限制的调整方向。"]
hero: null
page: "analysis"
href: "/zh/analysis/honor-of-kings/"
backHref: "/zh/analysis/"
backLabel: "设计分析"
headings: [{"depth":2,"slug":"1-what-makes-a-hero-overloaded","text":"一、“三体人”问题"},{"depth":2,"slug":"2-do-five-weapons-create-more-combat-choices","text":"二、五把兵器带来了怎样的战斗选择？"},{"depth":3,"slug":"weapon-rotation-and-three-forms","text":"兵器轮换与三种形态"},{"depth":3,"slug":"defense-form-usually-skipped","text":"第一形态：通常会被快速跳过"},{"depth":3,"slug":"offense-form-preparing-to-engage","text":"第二形态：准备与进场"},{"depth":3,"slug":"overkill-form-the-main-damage-window","text":"第三形态：主要输出阶段"},{"depth":2,"slug":"3-does-lane-flexibility-create-different-playstyles","text":"三、跨分路能力是否带来了不同玩法？"},{"depth":3,"slug":"clash-lane-a-range-advantage","text":"对抗路：用射程取得对线优势"},{"depth":3,"slug":"farm-lane-sustained-damage-with-a-fighters-survivability","text":"发育路：能打持续输出，也保留了战士的生存能力"},{"depth":3,"slug":"jungle-fast-clears","text":"打野：刷野效率较高"},{"depth":3,"slug":"keep-the-flexibility-add-trade-offs","text":"跨分路值得保留，但应该有取舍"},{"depth":2,"slug":"4-proposed-changes-a-purpose-and-a-cost-for-each-form","text":"四、调整方向：让三种形态各有用途与代价"},{"depth":3,"slug":"returning-to-defense-trade-initiation-for-sustain","text":"主动收势：用进场准备换取近身续航"}]
---

<h2 id="1-what-makes-a-hero-overloaded">一、“三体人”问题</h2>

玩家常用“三体人”形容机制复杂、功能全面，又没什么明显短板的英雄。蚩奼就是其中之一。我认为，不能只看技能效果有多少，还要看这些能力有没有相应的代价，以及对手能怎么应对。

如果一个英雄能轻易处理多种战斗场景，自身短板不明显，对手也难找到反制机会，甚至让其他英雄失去上场的理由，我会认为这个设计存在问题，值得重新检查。

分析时，我会主要看这五个方面：

| 观察角度 | 需要回答的问题 |
| --- | --- |
| 机制负担 | 玩家需要记住多少规则、关注哪些状态和触发条件？ |
| 功能覆盖 | 这个英雄能做多少事，其中哪些通常由不同角色负责？ |
| 代价与限制 | 强力效果需要消耗资源、满足命中条件，还是承担站位和进场风险？ |
| 反制空间 | 对手能否看懂接下来会发生什么，并及时通过走位、拉扯或集火应对？ |
| 生态影响 | 这个英雄会不会让同位置的其他英雄更难上场，或抬高对这类英雄的能力要求？ |

<h2 id="2-do-five-weapons-create-more-combat-choices">二、五把兵器带来了怎样的战斗选择？</h2>

<h3 id="weapon-rotation-and-three-forms">兵器轮换与三种形态</h3>

蚩奼按照固定顺序轮换五把兵器，每次普攻后切换至下一把，攻击距离也随之增加。前两种形态各包含两把兵器，第五把弓单独构成弓形态。弓形态持续一段时间后，兵器重置到第一把。

切换规则很简单：前两种形态各打两次普攻，就会进入下一形态。但从我的实战观察来看，玩家很少根据局势选择要留在哪个形态，更多是在重复一套固定的开战流程。



<figure class="media-frame media-video media-ready" data-media-slot="HOK-BASIC-ATTACK" data-media-state="ready" data-media-kind="video"><video controls playsinline preload="none" data-managed-media src="/media/honor-of-kings/basic-attacks.mp4" poster="/media/honor-of-kings/posters/basic-attacks.webp" width="1280" height="720" style="aspect-ratio: 1280 / 720" aria-label="普通攻击">当前浏览器不支持播放此视频。</video><figcaption>普通攻击</figcaption></figure>

<h3 id="defense-form-usually-skipped">第一形态：通常会被快速跳过</h3>

第一形态攻击距离最短，技能效果也最弱。玩家通常不会主动维持它，也较少使用该形态下的技能。弓形态结束、回到第一形态后，常见做法是立即普攻两次，重新进入第二形态。

第一形态虽然是循环的一部分，却缺少让玩家主动留下来的理由。

<figure class="media-frame media-video media-ready" data-media-slot="HOK-DEFENSE" data-media-state="ready" data-media-kind="video"><video controls playsinline preload="none" data-managed-media src="/media/honor-of-kings/defense.mp4" poster="/media/honor-of-kings/posters/defense.webp" width="1280" height="720" style="aspect-ratio: 1280 / 720" aria-label="第一形态技能">当前浏览器不支持播放此视频。</video><figcaption>第一形态技能</figcaption></figure>

<h3 id="offense-form-preparing-to-engage">第二形态：准备与进场</h3>

弓形态有持续时间，不适合提前很久进入并等待战斗。玩家通常将兵器停在第三或第四把，也就是第二形态，作为开战前的准备状态。

第二形态的一技能同时提供突进和控制，可以用来接近敌人，再通过普攻进入弓形态。第二形态也就成了最常用的进场准备。

<figure class="media-frame media-video media-ready" data-media-slot="HOK-OFFENSE" data-media-state="ready" data-media-kind="video"><video controls playsinline preload="none" data-managed-media src="/media/honor-of-kings/offense.mp4" poster="/media/honor-of-kings/posters/offense.webp" width="1280" height="720" style="aspect-ratio: 1280 / 720" aria-label="第二形态技能">当前浏览器不支持播放此视频。</video><figcaption>第二形态技能</figcaption></figure>

<h3 id="overkill-form-the-main-damage-window">第三形态：主要输出阶段</h3>

进入弓形态时，一、二技能的当前剩余冷却时间会减少一半。玩家因此可以先在第二形态使用技能进场，再通过普攻进入弓形态，更快地再次使用这两个技能。

这样一来，提前交技能的代价就小了很多。玩家可以先用技能进场，再靠切换形态缩短冷却，不太需要纠结要不要把技能留到后面。

<figure class="media-frame media-video media-ready" data-media-slot="HOK-OVERKILL" data-media-state="ready" data-media-kind="video"><video controls playsinline preload="none" data-managed-media src="/media/honor-of-kings/overkill.mp4" poster="/media/honor-of-kings/posters/overkill.webp" width="1280" height="720" style="aspect-ratio: 1280 / 720" aria-label="第三形态技能">当前浏览器不支持播放此视频。</video><figcaption>第三形态技能</figcaption></figure>

三种形态的使用顺序因此比较固定：跳过第一形态，在第二形态准备和进场，再进入射程与技能都更强的弓形态输出。玩家主要是在练习这套流程，很少需要临时决定要不要留在某个形态。

下面的片段展示了快速跳过第一、第二形态，进入第三形态并击杀对手的常见流程。

<figure class="media-frame media-video media-ready" data-media-slot="HOK-TYPICAL" data-media-state="ready" data-media-kind="video"><video controls playsinline preload="none" data-managed-media src="/media/honor-of-kings/typical-gameplay.mp4" poster="/media/honor-of-kings/posters/typical-gameplay.webp" width="1280" height="720" style="aspect-ratio: 1280 / 720" aria-label="常见实战流程">当前浏览器不支持播放此视频。</video><figcaption>常见实战流程</figcaption></figure>

五把兵器让表现更丰富、技能说明更长，但实际可做的选择没有增加那么多，进入强势形态也不难。我认为这里可以增加一些保留或切换形态的理由。



<h2 id="3-does-lane-flexibility-create-different-playstyles">三、跨分路能力是否带来了不同玩法？</h2>

在原稿讨论的阶段，蚩奼上线后的调整主要集中于技能数值，核心机制和跨分路能力没有改变。

<h3 id="clash-lane-a-range-advantage">对抗路：用射程取得对线优势</h3>

蚩奼的攻击距离长于大部分对抗路英雄，普攻还能回复生命。她的前期数值也较高，容易在换血中占到便宜，再利用第二形态的一技能突进和控制对手。

蚩奼、老夫子和旧版暗信，都主要依靠高频普攻与法球效果输出。与老夫子相比，蚩奼缺少免伤，生存能力较弱，但能从更远距离消耗，并主动突进、控制。在我的实战中，她比旧版暗信更容易在前期压住对手，射程、追击和留人能力也更强。

<h3 id="farm-lane-sustained-damage-with-a-fighters-survivability">发育路：能打持续输出，也保留了战士的生存能力</h3>

蚩奼的攻击距离略短于传统射手，但仍足以完成补刀和消耗。她同时保留了战士较高的基础生命和防御，还有普攻回血、位移和近身爆发。

传统射手往往需要队友保护，或依靠站位维持输出；蚩奼则可以主动突进并威胁后排。射手与她对线时，要一直提防她的突进，很难放心地往前压。

<h3 id="jungle-fast-clears">打野：刷野效率较高</h3>

攻速、续航和突进也让蚩奼能够打野。不过，很多战士都能够进入野区，因此打野能力本身不是本次分析重点。

她在这三个位置的出装基本一样，核心都是闪电匕首和末世组成的法球流。换分路后，她依靠的仍是高频普攻、续航和进场能力，并没有通过出装变化形成三套不同的玩法。



<h3 id="keep-the-flexibility-add-trade-offs">跨分路值得保留，但应该有取舍</h3>

蚩奼也有短板：缺少免伤等直接防御手段，在战士中相对较脆；优势集中于前中期，进入后期后，法球流的输出成长逐渐放缓。

即使考虑这些短板，她在对抗路仍比大部分战士打得更远，到了发育路又保留了战士的基础生存和自保能力。换分路、换出装，都没有让她明显失去某项主要能力。

我希望保留她的跨分路能力。同一个英雄走不同分路，可以获得不同资源、承担不同职责，也能带来更多阵容和玩法选择。《王者荣耀》里很多英雄的分路和出装比较固定，蚩奼的这种灵活性值得留下。

问题在于，她换分路后仍用着差不多的法球出装，消耗、续航、突进、控制和持续输出也都还在。我更希望她去不同位置时，需要选择保留哪些优势、放弃哪些能力。

<h2 id="4-proposed-changes-a-purpose-and-a-cost-for-each-form">四、调整方向：让三种形态各有用途与代价</h2>

我想保留兵器轮换、普攻带来的距离变化和跨分路能力，继续突出她的中期持续输出。同时，也希望对手能抓住她准备形态、弓形态结束回到近战等时机，以及缺少免伤这一短板。

具体做法是让三种形态各有用途，让玩家有理由留在某个形态，而不是总想尽快进入弓形态：

| 形态 | 原分析中的主要用途 | 提案中的职责与代价 |
| --- | --- | --- |
| 第一形态 | 快速跳过，进入下一形态 | 近身续航；以短射程、缺少突进为代价 |
| 第二形态 | 开战准备与进场 | 接近和控制敌人；距离有限，不承担主要输出 |
| 第三形态 | 距离、技能与输出全面强化 | 远程持续输出；回复减少，自保较弱 |

把普攻回血集中到第一形态，并重做一、二技能，让它适合近身缠斗。这样玩家就有理由留在第一形态换血，但仍要接受手短、缺少突进的限制。

第二形态保留突进和控制，主要用来接近敌人、准备开战，不承担主要输出。

弓形态保留射程和持续输出，但取消对一、二技能的全面强化，降低普攻回血。玩家想要远程输出，就要接受更弱的自保能力。



<h3 id="returning-to-defense-trade-initiation-for-sustain">主动收势：用进场准备换取近身续航</h3>

我还想让玩家能从第二形态主动退回第一形态：放弃已经准备好的进场能力，换取近身续航。之后想再次进阶，仍然要靠普攻推进。

主动降阶需要动作时间或冷却，不重置技能，也不能反复触发弓形态的冷却返还。具体按键与输入方式仍需要原型验证。

我希望玩家能根据战况决定继续推进还是主动退回形态，对手也能通过当前兵器和弓形态剩余时间判断何时应对。

本文视频片段均来自[《王者荣耀》官方教学视频](https://www.youtube.com/watch?v=yTUcQgwcVc4)。
