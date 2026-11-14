---
id: "god-of-words"
title: "God of Words"
role: "主要玩法设计"
meta: "桌游 · 四人团队 · 3 周"
overview: ["一款结合秘密拍卖和字母造词的派对桌游。","**核心设计关键词：** 多方竞争 · 拍卖 · 连线 · 用秘密增加玩家互动的变数","玩家先暗中出价，争取选取字母的优先权，再用拿到的字母组合并展示符合主题的答案。"]
description: "一款结合秘密拍卖和字母造词的派对桌游。"
hero: {"id":"GOD-01","label":"God of Words","caption":""}
page: "prototypes"
href: "/zh/prototypes/god-of-words/"
backHref: "/zh/prototypes/"
backLabel: "更多作品"
headings: [{"depth":2,"slug":"gameplay-bid-build-an-answer-and-persuade","text":"玩法：竞拍、组织答案与说服他人"},{"depth":2,"slug":"iteration-more-choice-within-the-constraint","text":"迭代：在限制中留下更多选择"},{"depth":2,"slug":"adjusting-the-auction-phase","text":"调整拍卖阶段的长度"}]
---

<h2 id="gameplay-bid-build-an-answer-and-persuade">玩法：竞拍、组织答案与说服他人</h2>

玩家围绕同一个主题，用有限预算参与字母拍卖。每次公布待选字母后，玩家暗中出价。所有参与者都支付各自的出价，出价高者先选。玩家需要权衡，是花钱拿到有用的字母，还是留钱给后面的机会，也可以跳过不想参与的拍卖。专门的元音拍卖则提供了补全想法的机会。

收集到的字母用于组织主题答案。不必用完所有字母。只要其他玩家认可与主题的联系，单词、短语、缩写和非英语答案都可以。最后，所有人展示并解释自己的答案，再秘密投票给另一位玩家，得票最多者获胜。

游戏将两种乐趣接在一起：提前考虑该争取哪些字母，以及用实际拿到的字母临场组织一个说得通的答案。

<h2 id="iteration-more-choice-within-the-constraint">迭代：在限制中留下更多选择</h2>

早期反馈指出，多花钱并不能稳定拿到想要的字母。我们改为按出价高低依次挑选，将后期随机抽取元音改为元音拍卖，也允许玩家跳过，不必为不需要的字母付钱。

<figure class="media-frame media-image media-ready" data-media-slot="GOD-PLAYTEST" data-media-state="ready" data-media-kind="image"><img src="/media/god-of-words/playtest.webp" width="1600" height="1057" alt="试玩" loading="lazy" decoding="async" /><figcaption>试玩</figcaption></figure>

玩家能获得的字母数量有限，我们也没有加入结算前的交易，保留了拍卖时的取舍。

<h2 id="adjusting-the-auction-phase">调整拍卖阶段的长度</h2>

结束条件从花完预算改为固定轮数。最初轮数与玩家人数相同，但四人游戏的四轮显得太短，因此我们增加了轮数。然而，六人测试进行九轮时，部分玩家已经准备好答案，后面的拍卖开始失去吸引力。最后定为六轮，随后展示答案并投票。
