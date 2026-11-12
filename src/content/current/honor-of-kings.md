---
id: "honor-of-kings"
title: "The “Overloaded Hero” Problem in Honor of Kings - A Case Study of Chicha"
role: "MOBA Champion & Combat Design Analysis"
meta: ""
description: "When does a versatile hero offer meaningful choices, and when does it leave too few weaknesses or counterplay options? Using Chicha's weapon rotation as a case study, I examine the trade-offs behind functional coverage, form progression, and lane flexibility, then propose clearer roles and limits for each form."
overview: []
translation: "Originally written in Chinese. Translated into English using AI."
hero: null
page: "analysis"
href: "/analysis/honor-of-kings/"
backHref: "/analysis/"
backLabel: "Analysis"
---

## 1. What Makes a Hero “Overloaded”?

Chinese players sometimes use the slang term “santiren” (literally, “Trisolarans”) to describe heroes with overloaded kits. Chicha is one such hero. I think the question goes beyond how many effects a kit contains: what does the hero give up to gain those tools, and how can opponents respond?

When a hero can easily handle many combat situations, has few clear weaknesses, and leaves opponents little room to respond, the design deserves another look, especially if it also leaves players with fewer reasons to pick other heroes.

I approach this through five questions:

| Area | Question |
| --- | --- |
| Complexity | How many rules, states, and trigger conditions does the player need to track? |
| Range of tools | What can the hero do, and which of those jobs would usually belong to different characters? |
| Costs and limits | Do strong effects require resources, successful hits, risky positioning, or a commitment to engage? |
| Counterplay | Can opponents read what is about to happen and respond through movement, spacing, or focus fire? |
| Impact on other heroes | Does this hero leave less room for others in the same role, or raise expectations for what heroes in that role should be able to do? |

## 2. Do Five Weapons Create More Combat Choices?

### Weapon Rotation and Three Forms

Chicha cycles through five weapons in a fixed order. Each basic attack advances to the next weapon and increases her attack range. The first two forms, Defense and Offense, contain two weapons each; the fifth weapon, a bow, makes up the third form, Overkill. After a limited time in Overkill form, the cycle resets to the first weapon.

The rule is straightforward: two basic attacks in either Defense or Offense advance her to the next form. In my matches, however, players rarely chose a form to stay in based on the situation. They mostly repeated the same sequence to start a fight.

<figure class="media-frame media-video media-ready" data-media-slot="HOK-BASIC-ATTACK" data-media-state="ready" data-media-kind="video"><video controls playsinline preload="none" data-managed-media src="/media/honor-of-kings/basic-attacks.mp4" poster="/media/honor-of-kings/posters/basic-attacks.webp" width="1280" height="720" style="aspect-ratio: 1280 / 720" aria-label="Chicha: Basic attacks.">Your browser does not support this video.</video><figcaption>Basic attacks</figcaption></figure>

### Defense Form: Usually Skipped

The Defense form has the shortest range and the weakest ability effects. Players rarely choose to stay in it or use its abilities. When Overkill form ends, a common response is to attack twice immediately and return to the Offense form.

It is part of the cycle, but offers little reason to remain there.

<figure class="media-frame media-video media-ready" data-media-slot="HOK-DEFENSE" data-media-state="ready" data-media-kind="video"><video controls playsinline preload="none" data-managed-media src="/media/honor-of-kings/defense.mp4" poster="/media/honor-of-kings/posters/defense.webp" width="1280" height="720" style="aspect-ratio: 1280 / 720" aria-label="Chicha: Defense form abilities.">Your browser does not support this video.</video><figcaption>Defense form abilities</figcaption></figure>

### Offense Form: Preparing to Engage

Because Overkill form has a time limit, entering it well before a fight wastes its duration. Players usually stop at the third or fourth weapon (the Offense form) while preparing to engage.

In this form, Ability 1 provides both a dash and crowd control. Players can use it to close the gap, then advance to Overkill form through basic attacks. Offense is therefore the usual form for initiating fights.

<figure class="media-frame media-video media-ready" data-media-slot="HOK-OFFENSE" data-media-state="ready" data-media-kind="video"><video controls playsinline preload="none" data-managed-media src="/media/honor-of-kings/offense.mp4" poster="/media/honor-of-kings/posters/offense.webp" width="1280" height="720" style="aspect-ratio: 1280 / 720" aria-label="Chicha: Offense form abilities.">Your browser does not support this video.</video><figcaption>Offense form abilities</figcaption></figure>

### Overkill Form: The Main Damage Window

Entering Overkill form halves the remaining cooldowns of Abilities 1 and 2. Players can use those abilities to engage in the Offense form, then attack to enter Overkill form and use them again sooner.

This greatly reduces the cost of spending abilities early. Players can engage first and recover cooldown time by changing forms, with less need to decide whether to save those abilities for later.

<figure class="media-frame media-video media-ready" data-media-slot="HOK-OVERKILL" data-media-state="ready" data-media-kind="video"><video controls playsinline preload="none" data-managed-media src="/media/honor-of-kings/overkill.mp4" poster="/media/honor-of-kings/posters/overkill.webp" width="1280" height="720" style="aspect-ratio: 1280 / 720" aria-label="Chicha: Overkill form abilities.">Your browser does not support this video.</video><figcaption>Overkill form abilities</figcaption></figure>

The result is a fairly fixed sequence: skip Defense, prepare and engage in Offense, then deal damage in Overkill with its longer range and stronger abilities. Players mainly practice that sequence rather than decide, during a fight, whether to stay in a particular form.

The clip below shows Chicha quickly passing through Defense and Offense, entering Overkill, and defeating an opponent.

<figure class="media-frame media-video media-ready" data-media-slot="HOK-TYPICAL" data-media-state="ready" data-media-kind="video"><video controls playsinline preload="none" data-managed-media src="/media/honor-of-kings/typical-gameplay.mp4" poster="/media/honor-of-kings/posters/typical-gameplay.webp" width="1280" height="720" style="aspect-ratio: 1280 / 720" aria-label="Chicha: Typical gameplay.">Your browser does not support this video.</video><figcaption>Typical gameplay</figcaption></figure>

Five weapons add visual variety and longer ability descriptions, but fewer practical choices than they might suggest. Reaching the strongest form is also relatively easy. I would like to give players more reasons to stay in a form or switch out of it.

## 3. Does Lane Flexibility Create Different Playstyles?

At the time of the original analysis, Chicha’s post-release adjustments had mainly changed ability values. Her core mechanics and ability to play across lanes remained intact.

### Clash Lane: A Range Advantage

Chicha outranges most Clash Lane heroes and heals through basic attacks. Strong early-game stats help her win trades, while Ability 1 in the Offense form lets her dash in and control an opponent.

Chicha, Fuzi, and the earlier version of Li Xin’s dark form all rely heavily on frequent basic attacks and on-hit effects. Compared with Fuzi, Chicha lacks damage reduction and is less durable, but can poke from farther away and actively engage with a dash and crowd control. In my matches, she could pressure opponents earlier than the older dark-form Li Xin, with better range and more tools to chase enemies and stop them from escaping.

### Farm Lane: Sustained Damage with a Fighter’s Survivability

Chicha has slightly less range than a traditional marksman, but enough to last-hit and poke. She also retains a fighter’s higher base health and defenses, healing on basic attacks, mobility, and close-range burst.

Traditional marksmen often depend on protection from teammates or careful positioning to keep attacking. Chicha can instead engage and threaten the back line herself. Marksmen facing her must keep watching for her dash, making it harder to push forward safely.

### Jungle: Fast Clears

Attack speed, sustain, and a dash also let Chicha jungle. Many fighters can do this, though, so jungle access itself is not the focus of this analysis.

Her build is largely the same across all three roles: an on-hit build centered on Sparkfogged Dagger and Doomsday. She still relies on frequent basic attacks, sustain, and the ability to engage. Different lanes do not lead to three distinct playstyles through different builds.

### Keep the Flexibility, Add Trade-offs

Chicha does have weaknesses. Without direct defensive tools such as damage reduction, she is relatively fragile for a fighter. She is strongest in the early and middle stages of a match; her on-hit damage scaling slows later on.

Even with those weaknesses, she outranges most fighters in Clash Lane while retaining a fighter’s base durability and self-protection in Farm Lane. Changing lanes or builds does not clearly cost her a major capability.

I would keep her lane flexibility. Playing the same hero in different lanes can mean different resources, responsibilities, and team compositions. Many Honor of Kings heroes have fairly fixed lanes and builds, so this flexibility is worth preserving.

The issue is that Chicha keeps much the same on-hit build alongside poke, sustain, a dash, crowd control, and sustained damage. I would rather have players choose which strengths to keep and which tools to give up when taking her into a different role.

## 4. Proposed Changes: A Purpose and a Cost for Each Form

I want to preserve weapon rotation, the range changes tied to basic attacks, and lane flexibility, while continuing to emphasize sustained damage in the midgame. Opponents should also have chances to act while she prepares her form or returns to melee after Overkill form ends, and to exploit her lack of damage reduction.

Each form would serve a different purpose, giving players reasons to stay rather than always rushing toward Overkill:

| Form | Main Use in the Original Analysis | Proposed Role and Cost |
| --- | --- | --- |
| Defense | Quickly advance to the next form | Close-range sustain, limited by short range and no dash |
| Offense | Prepare and engage | Close the gap and control enemies, with limited range and less emphasis on damage |
| Overkill | Stronger range, abilities, and damage | Sustained ranged damage, with less healing and weaker self-protection |

Concentrating basic-attack healing in the Defense form and reworking Abilities 1 and 2 for close combat would give players a reason to stay and trade. They would still have to work around short range and the lack of a dash.

The Offense form would retain its dash and crowd control, mainly helping Chicha reach enemies and start fights rather than serving as her main source of damage.

Overkill form would keep its range and sustained damage, but lose the across-the-board upgrades to Abilities 1 and 2 and receive less basic-attack healing. Choosing ranged damage would mean accepting weaker self-protection.

### Returning to Defense: Trade Initiation for Sustain

I would also let players return voluntarily from Offense to Defense. They could give up the ability to initiate immediately in exchange for close-range sustain. Advancing again would still require basic attacks.

Stepping back would take an action time or have a cooldown. It would not reset abilities or allow repeated bow-form cooldown refunds. The exact input would still need to be worked out in a prototype.

The aim is to let players decide whether to advance or step back based on the fight, while opponents use the current weapon and remaining bow-form duration to judge when to respond.

Video clips are excerpted from the official Honor of Kings tutorial [Chicha | Basic Tutorial | Honor of Kings](https://www.youtube.com/watch?v=yTUcQgwcVc4).
