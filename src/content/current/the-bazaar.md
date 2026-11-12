---
id: "the-bazaar"
title: "Why The Bazaar Is Fun - and Keeps Me Coming Back"
role: "Roguelike Build & System Design Analysis"
meta: ""
description: "What makes The Bazaar fun, and why is it so easy to keep playing? I explore the satisfaction of discovering item combinations and watching them work, and how each fight gives players something else to try. A Vanessa build illustrates how item pools, board space, and tags turn individual effects into combinations worth pursuing."
overview: []
translation: "Originally written in Chinese. Translated into English using AI."
hero: null
page: "analysis"
href: "/analysis/the-bazaar/"
backHref: "/analysis/"
backLabel: "Analysis"
---

## 1. How the Game Works

The Bazaar is a strategy game built around assembling item combinations, with elements of autobattlers and roguelites. After choosing a hero, players acquire items through shops and events, then fit them onto a board with limited space. Each hero has a separate item pool, and an item's effects, size, and position all affect how it works with the rest of the build.

A run progresses through days, each divided into six hours. Players fight monsters and asynchronously matched players at fixed points, using the remaining hours to gather resources and adjust their builds. Combat is fully automatic: items activate according to their cooldowns and trigger conditions, with no manual input during the fight.

What I want to explore is why The Bazaar is fun, and why it makes me want to keep playing. Coming up with a combination and watching it work as expected is a big part of that. Players can feel that they understand the rules and that the decisions they thought through have paid off.

But one successful combination does not fully explain the urge to keep playing. While a build is working, players often already have something else they want to do: add an item, make the effects trigger faster, or try another combination they have just noticed. I will look at how building, combat feedback, and the pace of acquiring resources keep giving players something to look forward to.

## 2. From Imagining a Combination to Watching It Work

<figure class="media-frame media-image media-compact media-ready" data-media-slot="BAZAAR-CORE-LOOP" data-media-state="ready" data-media-kind="image"><img src="/media/the-bazaar/section-2/core-game-loop.png" width="1132" height="630" style="max-width:440px" alt="The Bazaar: Core game loop." loading="lazy" decoding="async" /><figcaption>Core game loop</figcaption></figure>

### Building: Stronger Now or Stronger Later?

In shops and events, players have to consider gold, board space, and item effects together. An item might improve the build immediately, or do little now but fit a later combination. Buying it leaves less gold or space for something else.

Building is therefore also a decision about how much to invest in the next fight and how much to save for what the build could become.

<figure class="media-frame media-image media-compact media-ready" data-media-slot="BAZAAR-SHOP" data-media-state="ready" data-media-kind="image"><img src="/media/the-bazaar/section-2/shop.png" width="752" height="514" style="max-width:480px" alt="The Bazaar: Shopping." loading="lazy" decoding="async" /><figcaption>Shopping</figcaption></figure>

### Anticipation: Working Out How Items Connect

Once players discover a connection between items, they have something specific to look forward to in combat. Item A might Haste B, which then triggers C's damage. After putting them together, players start imagining what the combination could do.

They are waiting to see whether their idea works, as well as whether they win.

### Combat: Seeing Whether the Build Works as Expected

Automatic combat runs those interactions. Players can watch which items activate first, whether the follow-up effects connect, and whether the build deals damage quickly enough.

Winning or losing does not fully measure build quality, though. The opponent's strength and the matchup also matter. Whether a combination works as intended and whether it can beat this particular opponent are two separate questions.

<figure class="media-frame media-image media-ready" data-media-slot="BAZAAR-BATTLE" data-media-state="ready" data-media-kind="image"><img src="/media/the-bazaar/section-2/battle.webp" width="1600" height="900" alt="The Bazaar: Combat." loading="lazy" decoding="async" /><figcaption>Combat</figcaption></figure>

### Feedback: A Result Gives Players Something Else to Try

When items trigger as expected and help defeat an opponent, victory brings more than in-game resources. It also supports the player's earlier judgment: this combination can work.

If the result is disappointing, players have something to reconsider. For example, a combination might work but trigger too slowly, giving them a reason to look for Haste items. Part of the appeal is that a fight's result often suggests a new goal. Once players see what could be better, they want to change it and try another fight.

<figure class="media-frame media-image media-ready" data-media-slot="BAZAAR-ADJUST" data-media-state="ready" data-media-kind="image"><img src="/media/the-bazaar/section-2/adjust.webp" width="1600" height="900" alt="The Bazaar: Adjusting the build." loading="lazy" decoding="async" /><figcaption>Adjusting the build</figcaption></figure>

## 3. How a Fixed Schedule Shapes Resource Decisions

<figure class="media-frame media-image media-ready" data-media-slot="BAZAAR-DAY" data-media-state="ready" data-media-kind="image"><img src="/media/the-bazaar/section-3/daily-schedule.png" width="1000" height="433" alt="The Bazaar: Daily schedule." loading="lazy" decoding="async" /><figcaption>Daily schedule</figcaption></figure>

Shops and events vary, but battles happen at fixed times. Players know how many opportunities remain to acquire resources each day and when they need to be ready to fight.

| Daily Schedule | What Players Do |
| --- | --- |
| Hours 1 and 2 | Visit shops or events to prepare for the monster fight and develop the build |
| Hour 3 | Choose a monster to fight for loot |
| Hours 4 and 5 | Acquire more resources and adjust the build after the earlier fight |
| Hour 6 | Fight another player's snapshot from the same day through asynchronous PvP |

### Monster Fights: Earn Rewards and Observe the Build

Knowing that a monster fight is coming at Hour 3 gives the first two hours a purpose. Should players buy immediate strength to pursue better loot, or keep their gold for a later combination?

Losing to a monster does not directly cost Prestige. The main loss is missing out on its loot and some resources. Before facing the risk of elimination in PvP, players can use a monster fight to see whether a new combination works, then adjust it during Hours 4 and 5.

Beating a weaker monster is easier, however, and does not necessarily show that the build is ready for the next player battle.

<figure class="media-frame media-image media-ready" data-media-slot="BAZAAR-PVE" data-media-state="ready" data-media-kind="image"><img src="/media/the-bazaar/section-3/pve.webp" width="1600" height="900" alt="The Bazaar: Monster encounter." loading="lazy" decoding="async" /><figcaption>Monster encounter</figcaption></figure>

### Player Battles: Gold Cannot Stay Unspent Forever

Under the rules discussed in the original analysis, players start with 20 Prestige. A PvP loss costs Prestige equal to the current day. Running out of Prestige triggers a one-time comeback reward; another loss ends the run. Players try to accumulate wins before that happens, with ten wins as the final goal and four, seven, and ten wins offering different amounts of ranked progression.

Unlike monster fights, PvP does not let players choose an opponent or see their exact build in advance. The Hour 6 fight is unavoidable, so gold cannot always be saved for later. Players must judge when to turn resources into strength on the board to survive the day.

I think this gives the building phase a sense of urgency. Players can look forward to better items later, but the current build still has to get through today. Each purchase raises two questions: is this enough for now, and what could it become later?

A fixed schedule makes planning possible, but does not remove randomness. After a loss, players can consider whether they spent too early, saved too long, or missed an important interaction. They also need to account for the opponent's strength and the matchup; poor resource allocation cannot explain every loss.

<figure class="media-frame media-image media-ready" data-media-slot="BAZAAR-PVP" data-media-state="ready" data-media-kind="image"><img src="/media/the-bazaar/section-3/pvp.webp" width="1600" height="900" alt="The Bazaar: Player battle." loading="lazy" decoding="async" /><figcaption>Player battle</figcaption></figure>

## 4. From Exploring Options to Completing a Build

Predictable battle times alone are not enough. As a build takes shape, the items it needs become more specific. If players can only keep trying their luck in a huge item pool, it becomes difficult to develop the combination they have started.

In the version examined in the original analysis, the offerings from shops, events, and monsters gradually change as days pass. Tiers such as Bronze, Silver, Gold, and Diamond also help players recognize those changes.

### Early Game: Find a Direction in What You Get

Early general shops offer a variety of items, while events more often provide random items, skills, or smaller combat bonuses. Players are unlikely to assemble a complete build immediately. They need enough strength from the scattered items available, then decide which possibilities are worth investing in.

Weaker early monsters leave some room to experiment with incomplete combinations. Players can see whether a few items work together without committing to an entire build at the start of the run.

<figure class="media-frame media-image media-compact media-ready" data-media-slot="BAZAAR-EARLY-SHOPS" data-media-state="ready" data-media-kind="image"><img src="/media/the-bazaar/section-4/early-shops.png" width="1270" height="434" style="max-width:600px" alt="The Bazaar: Early shops." loading="lazy" decoding="async" /><figcaption>Early shops</figcaption></figure>

### Mid and Late Game: Find and Improve What the Build Needs

By the middle and later stages of a run, players usually have a direction and can be more selective about where they look for resources.

| Source | How It Helps the Build |
| --- | --- |
| Specialized shops | Offer specific item types or sizes, narrowing the search for a useful item |
| Upgrade events | Improve existing items or provide temporary bonuses for the day's battles |
| Later monsters | Carry higher-tier items and skills with clearer synergies, offering ways to fill gaps in the build |
| Special events | May offer rare resources such as Legendary items, while also introducing greater risks or new random outcomes |

These opportunities do not guarantee a core item, but they make it worth considering where to look next and what to improve. Players can choose a source that fits their goal rather than simply wait for one item to appear.

<figure class="media-frame media-image media-compact media-ready" data-media-slot="BAZAAR-LATE-SHOPS" data-media-state="ready" data-media-kind="image"><img src="/media/the-bazaar/section-4/late-shops.png" width="1264" height="452" style="max-width:600px" alt="The Bazaar: Later shops." loading="lazy" decoding="async" /><figcaption>Later shops</figcaption></figure>

### Monster Difficulty: How Much Risk Is a Useful Item Worth?

Daily monster encounters offer easy, medium, and hard choices. Players need to consider both the difficulty and the possible rewards, rather than only whether they can win.

<figure class="media-frame media-image media-compact media-ready" data-media-slot="BAZAAR-ENEMY-RARITY" data-media-state="ready" data-media-kind="image"><img src="/media/the-bazaar/section-4/monster-choices.png" width="910" height="424" style="max-width:560px" alt="The Bazaar: Monster choices." loading="lazy" decoding="async" /><figcaption>Monster choices</figcaption></figure>

A difficult monster might carry exactly the item needed to complete a combination. Choosing it risks a loss and a missed reward opportunity. A weaker monster is safer, but its rewards may not fit the build.

As the build's direction becomes clearer, the same difficulty choice takes on a different meaning. Early on, players may simply want reliable resources. Later, they may take a risk for one particular item.

Random early items introduce different openings, while more targeted opportunities later let players develop an idea they have already chosen. I think that connection matters: each run offers something new to explore, and committing to a direction gives players reasons to keep investing instead of waiting for luck to supply every piece.

## 5. How Space, Item Pools, and Tags Shape a Build

### Hero Item Pools Suggest Different Directions

Each hero has a separate item pool. Different heroes may share damage or Poison mechanics, but use them in different ways and favor different combinations. Most items encountered normally come from the chosen hero's pool, helping players learn what that hero can do and what they lack.

Special shops, events, and monster drops offer access to other heroes' items. Their value can go beyond higher numbers: they may fill a gap in the hero's abilities or connect effects that could not otherwise work together.

### Strong Items Also Cost Board Space

Items occupy space on the board. Even with enough gold, players cannot include everything useful.

In the combinations discussed in the original analysis, items that provide a central mechanic or the main damage output are often Medium or Large. They have strong effects, but take up more room. Adding one means giving up space for several other items.

Small items often supply trigger conditions, Haste, or links between other items. Their individual numbers may be modest, but they can use the remaining space to help the main items activate more often. This is not a fixed division across all items; the example below includes items that both enable interactions and deal damage.

Replacing an item therefore involves more than comparing its strength in isolation. Players must consider how much space it occupies, whether removing another item would break an interaction, and whether the new arrangement meets adjacency requirements.

<div class="media-trio bazaar-item-group media-equal-height" data-media-group="BAZAAR-SIZES" style="--media-columns:minmax(0,1.0297029702970297fr) minmax(0,1.0944055944055944fr) minmax(0,0.8792134831460674fr);--media-image-height:219.297124600639px;--media-group-width:698.6198893429207px;--media-max-ratio:1.0944055944055944"><figure class="media-frame media-image media-compact media-ready" data-media-slot="BAZAAR-SMALL" data-media-state="ready" data-media-kind="image"><img src="/media/the-bazaar/section-5/small.png" width="624" height="606" style="max-width:240px" alt="The Bazaar: Small item." loading="lazy" decoding="async" /><figcaption>Small item</figcaption></figure><figure class="media-frame media-image media-compact media-ready" data-media-slot="BAZAAR-MEDIUM" data-media-state="ready" data-media-kind="image"><img src="/media/the-bazaar/section-5/medium.png" width="626" height="572" style="max-width:240px" alt="The Bazaar: Medium item." loading="lazy" decoding="async" /><figcaption>Medium item</figcaption></figure><figure class="media-frame media-image media-compact media-ready" data-media-slot="BAZAAR-LARGE" data-media-state="ready" data-media-kind="image"><img src="/media/the-bazaar/section-5/large.png" width="626" height="712" style="max-width:240px" alt="The Bazaar: Large item." loading="lazy" decoding="async" /><figcaption>Large item</figcaption></figure></div>

### Tags Limit Interactions and Open New Possibilities

Item effects often apply only to specific tags, such as Aquatic, Friend, or Toy. An item may have a useful effect but still fail to fit an interaction because its tags do not match.

That makes items and events that add tags valuable. They let previously ineligible items receive bonuses or participate in triggers. Players still have to account for tags, positioning, and space to turn that opportunity into a working combination.

This is another part of building that I enjoy. Once players know the rules, they can discover that an extra item connects two effects that previously could not work together. Finding that combination and making it work can be more satisfying than simply replacing an item with one that has higher numbers.

## 6. Example: Vanessa's Aquatic Friend Build

Vanessa's Aquatic Friend build illustrates how these rules influence choices together. It relies on Friends activating frequently to deal damage and stack Poison. Different core items change what players prioritize.

### Shark Ray: Gain Bonuses by Hasting Friends

Shark Ray's key effect is that Hasting Friends increases their Damage and Poison. Once players acquire it, they have a reason to look for more ways to Haste Friends and build up their output through repeated triggers.

<figure class="media-frame media-image media-compact media-ready" data-media-slot="BAZAAR-SHARK-RAY" data-media-state="ready" data-media-kind="image"><img src="/media/the-bazaar/section-6/shark-ray.png" width="626" height="572" style="max-width:280px" alt="The Bazaar: Shark Ray." loading="lazy" decoding="async" /><figcaption>Shark Ray</figcaption></figure>

Many of Vanessa's Friends also have the Aquatic tag, so effects that Haste Aquatic items can contribute as well. Players need Friends that deal damage or apply Poison, alongside items that make them activate faster. Some do both, dealing damage while helping the other interactions continue.

<div class="media-trio bazaar-item-group media-equal-height" data-media-group="BAZAAR-COMBOS" style="--media-columns:minmax(0,1.022950819672131fr) minmax(0,0.9658385093167702fr) minmax(0,0.8939828080229226fr);--media-image-height:234.61538461538464px;--media-group-width:716.3426936835433px;--media-max-ratio:1.022950819672131"><figure class="media-frame media-image media-compact media-ready" data-media-slot="BAZAAR-COMBO-1" data-media-state="ready" data-media-kind="image"><img src="/media/the-bazaar/section-6/combination-1.png" width="624" height="610" style="max-width:240px" alt="The Bazaar: Combination example 1." loading="lazy" decoding="async" /><figcaption>Combination example 1</figcaption></figure><figure class="media-frame media-image media-compact media-ready" data-media-slot="BAZAAR-COMBO-2" data-media-state="ready" data-media-kind="image"><img src="/media/the-bazaar/section-6/combination-2.png" width="622" height="644" style="max-width:240px" alt="The Bazaar: Combination example 2." loading="lazy" decoding="async" /><figcaption>Combination example 2</figcaption></figure><figure class="media-frame media-image media-compact media-ready" data-media-slot="BAZAAR-COMBO-3" data-media-state="ready" data-media-kind="image"><img src="/media/the-bazaar/section-6/combination-3.png" width="624" height="698" style="max-width:240px" alt="The Bazaar: Combination example 3." loading="lazy" decoding="async" /><figcaption>Combination example 3</figcaption></figure></div>

### Tortuga: Use Friend Activations to Charge the Main Damage Item

Tortuga gains Charge whenever another Friend activates. Since Tortuga also serves as a main damage source, players need to consider how often their Friends activate, as well as how strong each one is.

<figure class="media-frame media-image media-compact media-ready" data-media-slot="BAZAAR-TORTUGA" data-media-state="ready" data-media-kind="image"><img src="/media/the-bazaar/section-6/tortuga.png" width="628" height="816" style="max-width:220px" alt="The Bazaar: Tortuga." loading="lazy" decoding="async" /><figcaption>Tortuga</figcaption></figure>

Items that Haste Friends gain another use here: more frequent Friend activations apply Charge to Tortuga more often. Tortuga can also Haste other items. Together with Shark Ray, this allows Friend activations, Charge, and bonuses to feed into one another.

The two approaches are not necessarily separate. The same Friends and Haste items can serve different purposes depending on the core item, and those purposes can also be combined.

### Frog Hollow and Piano: Add Healing, Then Connect It to the Friend Build

Acquiring Karnok's Frog Hollow through a special source opens another possibility. It heals and applies Poison when a Friend is used, benefiting from the build's frequent Friend activations while adding healing that is relatively scarce in Vanessa's own item pool.

Piano makes adjacent items count as Friends. Placing Frog Hollow beside Piano lets Frog Hollow receive Friend-targeted effects and interact with items such as Shark Ray. An item acquired from another hero's pool can therefore do more than add a separate effect: changing its tag helps it become part of the existing build.

<div class="media-pair media-equal-height" data-media-group="BAZAAR-TAGS" style="--media-columns:minmax(0,1.0756013745704467fr) minmax(0,1.0296052631578947fr);--media-image-height:260.3194888178914px;--media-group-width:568.0263157894736px;--media-max-ratio:1.0756013745704467"><figure class="media-frame media-image media-compact media-ready" data-media-slot="BAZAAR-FROG-HOLLOW" data-media-state="ready" data-media-kind="image"><img src="/media/the-bazaar/section-6/frog-hollow.png" width="626" height="582" style="max-width:280px" alt="The Bazaar: Frog Hollow." loading="lazy" decoding="async" /><figcaption>Frog Hollow</figcaption></figure><figure class="media-frame media-image media-compact media-ready" data-media-slot="BAZAAR-PIANO" data-media-state="ready" data-media-kind="image"><img src="/media/the-bazaar/section-6/piano.png" width="626" height="608" style="max-width:280px" alt="The Bazaar: Piano." loading="lazy" decoding="async" /><figcaption>Piano</figcaption></figure></div>

The appeal of this combination is that each step has a reason. Haste makes Friends activate more often. Those activations Charge Tortuga and let Frog Hollow keep providing healing and Poison. Piano brings an item that was not originally a Friend into the same interactions. Players need to understand each item's effect and work out what happens when the items are put together.

For me, much of The Bazaar's fun comes from imagining combinations, making trade-offs, and seeing those choices work in combat. The urge to keep playing comes from having something else to try. Shark Ray gives players a reason to find more Haste. Tortuga adds another payoff for frequent activations. Frog Hollow and Piano open up further combinations. Even if the pieces do not come together in this run, players may start the next one thinking, “I want to try building that.”
