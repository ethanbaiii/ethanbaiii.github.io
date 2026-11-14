---
id: "battle-demo"
title: "Skill Inheritance Action Combat Prototype"
role: "Combat & Systems Design"
meta: "Unity 6 · Solo Project · Sep–Oct 2026"
overview: ["A third-person action combat prototype with roguelite upgrades, exploring how three skills can combine to create varied combat experiences.","I used external model and animation assets and developed the prototype with AI assistance."]
description: "A third-person action combat prototype with roguelite upgrades, exploring how three skills can combine to create varied combat experiences."
hero: {"id":"BATTLE-01","label":"Combat overview","caption":"Gameplay preview"}
page: "case"
href: "/work/battle-demo/"
backHref: "/#work"
backLabel: "Selected Work"
---

## Gameplay Overview

Players use a three-hit normal attack, three skills, and a dodge. Skills consume a shared resource called SP, while normal-attack hits help replenish it. Breaking enemy poise creates openings for follow-up attacks. After each challenge round, players choose upgrades for themselves and their enemies.

## Three Skills with Distinct Roles

| Skill | Behavior & Trade-off |
| --- | --- |
| S1 Slam | High single-hit poise damage creates openings for follow-up attacks. |
| S2 Barrage | Sustained damage requires a longer commitment; dodging after the first shot trades the remaining shots for safety. |
| S3 Burst | Short startup and 360-degree coverage suit clustered or surrounding enemies. |

<div class="media-trio" data-media-group="BATTLE-02"><figure class="media-frame media-video media-ready" data-media-slot="BATTLE-SKILL-1" data-media-state="ready" data-media-kind="video"><video controls playsinline preload="none" data-managed-media src="/media/action-combat/skills/skill-1.mp4" poster="/media/action-combat/posters/skills/skill-1.webp" width="720" height="960" style="aspect-ratio: 720 / 960" aria-label="Skill Inheritance Action Combat Prototype: S1 Slam">Your browser does not support this video.</video><figcaption>S1 Slam</figcaption></figure><figure class="media-frame media-video media-ready" data-media-slot="BATTLE-SKILL-2" data-media-state="ready" data-media-kind="video"><video controls playsinline preload="none" data-managed-media src="/media/action-combat/skills/skill-2.mp4" poster="/media/action-combat/posters/skills/skill-2.webp" width="720" height="960" style="aspect-ratio: 720 / 960" aria-label="Skill Inheritance Action Combat Prototype: S2 Barrage">Your browser does not support this video.</video><figcaption>S2 Barrage</figcaption></figure><figure class="media-frame media-video media-ready" data-media-slot="BATTLE-SKILL-3" data-media-state="ready" data-media-kind="video"><video controls playsinline preload="none" data-managed-media src="/media/action-combat/skills/skill-3.mp4" poster="/media/action-combat/posters/skills/skill-3.webp" width="720" height="960" style="aspect-ratio: 720 / 960" aria-label="Skill Inheritance Action Combat Prototype: S3 Burst">Your browser does not support this video.</video><figcaption>S3 Burst</figcaption></figure></div>

## Two Layers of Combination

**Attack Modifiers - normal attacks add effects to the next skill.** The first, second, and third hits of the normal-attack combo are referred to as A1, A2, and A3. A1 shortens skill startup, A2 adds extra SP recovery progress on the skill's first hit, and A3 increases skill damage. The latest modifier replaces the previous one and can apply to any skill. This creates a choice between speed, resources, and damage rather than granting all three benefits for completing the combo.

<figure class="media-frame media-video media-ready" data-media-slot="BATTLE-03" data-media-state="ready" data-media-kind="video"><video controls playsinline preload="none" data-managed-media src="/media/action-combat/attack-modifiers.mp4" poster="/media/action-combat/posters/attack-modifiers.webp" width="1280" height="720" style="aspect-ratio: 1280 / 720" aria-label="Skill Inheritance Action Combat Prototype: Attack modifiers">Your browser does not support this video.</video><figcaption>Attack modifiers</figcaption></figure>

**Skill Legacy - using a skill adds effects to the next skill.** S1 grants additional poise damage and a launch on poise break, S2 grants an enemy pull, and S3 grants protection from interruption. For example, S2 gains extra poise damage and a launch on poise break after S1, or protection from interruption after S3. S2's pull can also gather enemies for a subsequent S3.

A skill chain has three stages: Starter, Link, and Finisher. The Link inherits the previous skill's tier-2 effect; the Finisher inherits the previous skill's tier-3 effect. Base inheritance only passes between adjacent skills in the chain. Normal attacks and dodges can be inserted without advancing the chain.

Skill chains have a time limit: the next skill must be used within the chain window, and taking a hit further reduces the remaining time.

<div class="media-trio" data-media-group="BATTLE-04"><figure class="media-frame media-video media-ready" data-media-slot="BATTLE-LEGACY-1" data-media-state="ready" data-media-kind="video"><video controls playsinline preload="none" data-managed-media src="/media/action-combat/legacy/skill-1.mp4" poster="/media/action-combat/posters/legacy/skill-1.webp" width="720" height="960" style="aspect-ratio: 720 / 960" aria-label="Skill Inheritance Action Combat Prototype: S1 Legacy">Your browser does not support this video.</video><figcaption>S1 Legacy</figcaption></figure><figure class="media-frame media-video media-ready" data-media-slot="BATTLE-LEGACY-2" data-media-state="ready" data-media-kind="video"><video controls playsinline preload="none" data-managed-media src="/media/action-combat/legacy/skill-2.mp4" poster="/media/action-combat/posters/legacy/skill-2.webp" width="720" height="960" style="aspect-ratio: 720 / 960" aria-label="Skill Inheritance Action Combat Prototype: S2 Legacy">Your browser does not support this video.</video><figcaption>S2 Legacy</figcaption></figure><figure class="media-frame media-video media-ready" data-media-slot="BATTLE-LEGACY-3" data-media-state="ready" data-media-kind="video"><video controls playsinline preload="none" data-managed-media src="/media/action-combat/legacy/skill-3.mp4" poster="/media/action-combat/posters/legacy/skill-3.webp" width="720" height="960" style="aspect-ratio: 720 / 960" aria-label="Skill Inheritance Action Combat Prototype: S3 Legacy">Your browser does not support this video.</video><figcaption>S3 Legacy</figcaption></figure></div>

## Enemy Behavior: Creating Opportunities for Different Combinations

Enemies choose between melee attacks, gap-closing moves, and retreating ranged attacks based on their distance from the player and their own health. Players must judge when to pursue, pull a target into position, or use a poise-break window for S2.

In group encounters, one enemy takes the active attacking role while others reposition. Breaking the active attacker's poise temporarily removes its pressure, while scattered or clustered targets create different opportunities for pull and area attacks. The intent is to manage direct attack pressure while retaining target-selection and positioning decisions.

<figure class="media-frame media-video media-ready" data-media-slot="BATTLE-05" data-media-state="ready" data-media-kind="video"><video controls playsinline preload="none" data-managed-media src="/media/action-combat/enemy-behavior.mp4" poster="/media/action-combat/posters/enemy-behavior.webp" width="1280" height="720" style="aspect-ratio: 1280 / 720" aria-label="Skill Inheritance Action Combat Prototype: Enemy behavior">Your browser does not support this video.</video><figcaption>Enemy behavior</figcaption></figure>

## Roguelite Upgrades: Changing Combinations & Risks

Roguelite upgrades extend these relationships. Legacy Echo lets the finisher also inherit the starter's tier-2 effect, extending inheritance beyond adjacent skills.

Players also choose enemy upgrades, making risk part of build development: a poise-focused build may avoid higher enemy poise, while a player confident in perfect dodges may accept higher enemy damage.

<figure class="media-frame media-image media-ready" data-media-slot="BATTLE-06" data-media-state="ready" data-media-kind="image"><img src="/media/action-combat/roguelite.webp" width="1600" height="900" alt="Player and enemy upgrade choices" loading="lazy" decoding="async" /><figcaption>Player and enemy upgrades</figcaption></figure>
