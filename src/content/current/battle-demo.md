---
id: "battle-demo"
title: "Skill Inheritance Action Combat Prototype"
role: "Combat & Systems Design"
meta: "Unity 6 · Solo Project · Sep–Oct 2026"
overview: ["This third-person action prototype includes roguelite elements and explores how simple skills and rules can combine to create varied combat experiences.","I designed the mechanics, tuned values, and playtested the prototype, using ChatGPT for design analysis and documentation and Codex for AI-assisted implementation and debugging. The character and enemy animations were from external sources."]
description: "This third-person action prototype includes roguelite elements and explores how simple skills and rules can combine to create varied combat experiences."
hero: {"id":"BATTLE-01","label":"Combat overview","caption":"Gameplay preview"}
page: "case"
href: "/work/battle-demo/"
backHref: "/#work"
backLabel: "Selected Work"
---

## Gameplay Overview

Players use a three-hit normal attack, three skills, and a dodge. Skills consume a shared resource called SP, while normal-attack hits help replenish it. Breaking enemy poise creates openings for follow-up attacks. Between encounters, players choose upgrades for themselves and their enemies.

## Three Skills with Distinct Roles

| Skill | Behavior & Trade-off |
| --- | --- |
| Slam | High single-hit poise damage creates openings for follow-up attacks. |
| Barrage | Sustained damage requires a longer commitment; dodging after the first shot trades the remaining shots for safety. |
| Burst | Short startup and 360-degree coverage suit clustered or surrounding enemies. |

<div class="media-trio" data-media-group="BATTLE-02"><figure class="media-frame media-video media-ready" data-media-slot="BATTLE-SKILL-1" data-media-state="ready" data-media-kind="video"><video controls playsinline preload="none" data-managed-media src="/media/action-combat/skills/skill-1.mp4" poster="/media/action-combat/posters/skills/skill-1.webp" width="720" height="960" style="aspect-ratio: 720 / 960" aria-label="Skill Inheritance Action Combat Prototype: Slam">Your browser does not support this video.</video><figcaption>Slam</figcaption></figure><figure class="media-frame media-video media-ready" data-media-slot="BATTLE-SKILL-2" data-media-state="ready" data-media-kind="video"><video controls playsinline preload="none" data-managed-media src="/media/action-combat/skills/skill-2.mp4" poster="/media/action-combat/posters/skills/skill-2.webp" width="720" height="960" style="aspect-ratio: 720 / 960" aria-label="Skill Inheritance Action Combat Prototype: Barrage">Your browser does not support this video.</video><figcaption>Barrage</figcaption></figure><figure class="media-frame media-video media-ready" data-media-slot="BATTLE-SKILL-3" data-media-state="ready" data-media-kind="video"><video controls playsinline preload="none" data-managed-media src="/media/action-combat/skills/skill-3.mp4" poster="/media/action-combat/posters/skills/skill-3.webp" width="720" height="960" style="aspect-ratio: 720 / 960" aria-label="Skill Inheritance Action Combat Prototype: Burst">Your browser does not support this video.</video><figcaption>Burst</figcaption></figure></div>

## Two Layers of Combination

**Attack modifiers - how normal attacks prepare the next skill.** The first, second, and third hits of the normal-attack combo are referred to as A1, A2, and A3. A1 shortens skill startup, A2 adds extra SP recovery progress on the skill's first hit, and A3 increases skill damage. The latest modifier replaces the previous one and can apply to any skill. This creates a choice between speed, resources, and damage rather than granting all three benefits for completing the combo.

<figure class="media-frame media-video media-ready" data-media-slot="BATTLE-03" data-media-state="ready" data-media-kind="video"><video controls playsinline preload="none" data-managed-media src="/media/action-combat/attack-modifiers.mp4" poster="/media/action-combat/posters/attack-modifiers.webp" width="1280" height="720" style="aspect-ratio: 1280 / 720" aria-label="Skill Inheritance Action Combat Prototype: Attack modifiers">Your browser does not support this video.</video><figcaption>Attack modifiers</figcaption></figure>

**Legacy effects - which skill comes before it.** Slam passes poise/launch support, Barrage passes enemy pull, and Burst passes protection from interruption. Barrage gains poise/launch support after Slam or protection after Burst; its own pull can gather enemies for a subsequent Burst.

A skill chain has three positions: starter, second skill, and finisher. The second skill inherits the previous skill's tier-2 effect; the finisher inherits the previous skill's tier-3 effect. Base inheritance only passes between adjacent skills in the chain. Normal attacks and dodges can be inserted without advancing the chain.

<div class="media-trio" data-media-group="BATTLE-04"><figure class="media-frame media-video media-ready" data-media-slot="BATTLE-LEGACY-1" data-media-state="ready" data-media-kind="video"><video controls playsinline preload="none" data-managed-media src="/media/action-combat/legacy/skill-1.mp4" poster="/media/action-combat/posters/legacy/skill-1.webp" width="720" height="960" style="aspect-ratio: 720 / 960" aria-label="Skill Inheritance Action Combat Prototype: Slam Legacy">Your browser does not support this video.</video><figcaption>Slam Legacy</figcaption></figure><figure class="media-frame media-video media-ready" data-media-slot="BATTLE-LEGACY-2" data-media-state="ready" data-media-kind="video"><video controls playsinline preload="none" data-managed-media src="/media/action-combat/legacy/skill-2.mp4" poster="/media/action-combat/posters/legacy/skill-2.webp" width="720" height="960" style="aspect-ratio: 720 / 960" aria-label="Skill Inheritance Action Combat Prototype: Barrage Legacy">Your browser does not support this video.</video><figcaption>Barrage Legacy</figcaption></figure><figure class="media-frame media-video media-ready" data-media-slot="BATTLE-LEGACY-3" data-media-state="ready" data-media-kind="video"><video controls playsinline preload="none" data-managed-media src="/media/action-combat/legacy/skill-3.mp4" poster="/media/action-combat/posters/legacy/skill-3.webp" width="720" height="960" style="aspect-ratio: 720 / 960" aria-label="Skill Inheritance Action Combat Prototype: Burst Legacy">Your browser does not support this video.</video><figcaption>Burst Legacy</figcaption></figure></div>

## Enemy Behavior: Creating Opportunities for Different Combinations

Enemy decisions respond to distance, using melee attacks, gap-closing moves, and retreating ranged attacks to shift the engagement range. This asks players to reconsider when to pursue, pull a target into position, or use a poise-break window for Barrage.

In group encounters, one enemy takes the active attacking role while others reposition. Breaking the active attacker's poise temporarily removes its pressure, while scattered or clustered targets create different opportunities for pull and area attacks. The intent is to manage direct attack pressure while retaining target-selection and positioning decisions.

<figure class="media-frame media-video media-ready" data-media-slot="BATTLE-05" data-media-state="ready" data-media-kind="video"><video controls playsinline preload="none" data-managed-media src="/media/action-combat/enemy-behavior.mp4" poster="/media/action-combat/posters/enemy-behavior.webp" width="1280" height="720" style="aspect-ratio: 1280 / 720" aria-label="Skill Inheritance Action Combat Prototype: Enemy behavior">Your browser does not support this video.</video><figcaption>Enemy behavior</figcaption></figure>

## Roguelite Upgrades: Changing Combinations & Risks

Roguelite upgrades extend these relationships. Legacy Echo lets the finisher also inherit the starter's tier-2 effect, extending inheritance beyond adjacent skills.

Players also choose enemy upgrades, making risk part of build development: a poise-focused build may avoid higher enemy poise, while a player confident in perfect dodges may accept higher enemy damage.

<figure class="media-frame media-image media-ready" data-media-slot="BATTLE-06" data-media-state="ready" data-media-kind="image"><img src="/media/action-combat/roguelite.webp" width="1600" height="900" alt="Player and enemy upgrade choices" loading="lazy" decoding="async" /><figcaption>Player and enemy upgrades</figcaption></figure>
