---
id: "sthh"
title: "Soft Things Hit Hard"
role: "Character, Combat & Systems Design"
meta: "Unreal Engine 5 · ~40-Person Team · Mar 2026–Present"
overview: ["An up-to-eight-player party battle royale where players assemble everyday objects into improvised weapons and armor. I design character-related gameplay and behavior, as well as the customization system.","I design the rules, write design documents and engineering specifications, configure parameters, and test behavior in-engine. Engineers implement the systems."]
description: "An up-to-eight-player party battle royale where players assemble everyday objects into improvised weapons and armor. I design character-related gameplay and behavior, as well as the customization system."
hero: {"id":"STHH-01","label":"Gameplay overview","caption":""}
page: "case"
href: "/work/sthh/"
backHref: "/#work"
backLabel: "Selected Work"
---

## Throwing and Discarding: Giving Each Action a Purpose

<p class="implementation-note">Current Status: Playable.</p>

I originally designed Throw to launch the last attached weapon part and Discard to remove the entire weapon. This conflicted with the weapon designer’s goal of giving different weapons distinct throw damage. It also made correcting one misplaced part require rebuilding the whole weapon.

In later iterations, I changed Throw to launch the complete weapon and Discard to remove one part while preserving the rest of the assembly. I considered a toggle between throwing a part and throwing the whole weapon, but rejected it: damaging part throws could displace Discard, and another control would work against our goal of an approachable party game.

### Making the throw easier to aim

While testing the existing parabolic trajectory, I found it difficult to land throws where I intended. The game already used a central dot for picking up objects, so I proposed a trajectory that flies straight initially before dropping, with aiming informed by the camera and central dot.

I also specified that characters face the camera’s horizontal direction during Throw Mode, even when moving sideways or backward. The intent is to make aiming easier by keeping the throwing hand in a consistent position relative to the camera, while making the aiming pose recognizable to other players.

I kept Weapon and Mud Throw consistent in their controls and flight rules so players can carry what they learn about throwing across character forms, making the game easier to pick up. I translated the revised trajectory into configurable launch speed, drop-start distance, downward acceleration, and player-velocity inheritance, while retaining separate settings for Weapon and Mud Throw.

### Preserving weapon differences after impact

The previous specification broke the weapon apart on its first enemy hit. I proposed a short hit window during which it stays connected and can damage additional enemies, once per enemy per throw. The intent is to let different weapon shapes and coverage matter when thrown, rather than ending every throw at the first target.

The new throwing features have improved aiming, but the camera position still needs further adjustment.

## Customization: Developing a Feature from Defined Categories

<p class="implementation-note">Current Status: Playable baseline; new features and updates awaiting implementation, including lobby color assignment.</p>

When I took ownership of customization, the project had identified the cosmetic categories but had no supporting feature rules. As the primary designer, I developed the browsing and preview flow, unlock and equip rules, saved ownership and loadouts, and appearance behavior across character states. Previewing, unlocking, equipping, persistence, and appearance application are implemented in the playable baseline.

I separated previewing, owning, and equipping: preview changes the local preview character without saving; unlocking grants ownership without automatically equipping; equipping confirms the saved selection. I also defined defaults and recovery rules for invalid saved selections. Engineers implemented the system, and I handled parameter configuration, debugging, and testing.

For the next update, I designed unique lobby colors while preserving each player’s saved preference. A player uses their preferred color when available, otherwise receives an unoccupied color for that lobby. Automatic assignment does not overwrite the saved preference. This supports player identification without permanently changing a player’s choice because of one lobby conflict. Lobby color assignment is not yet integrated.

<span id="character-design-and-production-support" aria-hidden="true"></span>

## Character Design

<p class="implementation-note">Current Status: Moving Mud has a playable implementation.</p>

Players control clay characters. After losing their normal body, they continue as Moving Mud, a mobile mud form that collects clay toward revival.

The normal character already had an established foundation when I took on this work. I designed the previously absent Moving Mud behavior, character states and transition conditions, and some base character values. I also defined model and animation requirements for both forms and coordinated them with art and engineering.

Moving Mud has a playable implementation. For controls, I built on the existing input bindings and defined the additional Throw inputs.
