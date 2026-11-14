---
id: "the-unrealtor"
title: "The Unrealtor"
role: "Level Design"
meta: "Unity · ~30-Person Team · Jan–May 2026"
overview: ["A two-player co-op perspective puzzle game inspired by impossible spaces. Players work together to find target objects and adjust their viewing angles until objects in the environment match a target silhouette. Available on [Steam](https://store.steampowered.com/app/4420050/The_Unrealtor/).","As part of a four-person design team, I contributed to the final level's layout and progression."]
description: "A two-player co-op perspective puzzle game inspired by impossible spaces. Players work together to find target objects and adjust their viewing angles until objects in the environment match a target silhouette. Available on Steam."
hero: {"id":"UNREALTOR-01","label":"Two-player perspective puzzle","caption":""}
page: "case"
href: "/work/the-unrealtor/"
backHref: "/#work"
backLabel: "Selected Work"
---

## Project Context & My Contribution

I joined near the end of Alpha. The core mechanic, tutorial, and first major level were already complete, while the two remaining levels were still in early whitebox.

Faculty review identified excessive scope, unclear puzzle goals, and high overall difficulty. We reduced the number of levels and reworked the puzzles, flow, and room relationships of the remaining content.

Within that effort, I proposed a parallel progression structure for the final level and laid out and iterated on the bedroom, gallery, bathroom, and living-room spaces in Unity. My work included scene arrangement, puzzle-object placement, and perspective relationships. Programmers handled gameplay implementation in the engine.

## Rethinking the Final Level's Flow

Earlier puzzles established a consistent expectation: solving a puzzle opens a door in the same room, so players can immediately see the result of their action. The original final-level sequence broke that pattern. A bedroom puzzle opened the bathroom entrance back in the living room, requiring players to return before they could confirm which door had opened.

There was also a mismatch between the space and its progression. Both the bedroom and bathroom connected directly to the living room, but players had to complete them in a fixed order. Spatially, they were parallel rooms; as objectives, they formed a linear sequence.

<figure class="media-frame media-image media-ready" data-media-slot="UNREALTOR-02" data-media-state="ready" data-media-kind="image"><img src="/media/the-unrealtor/living-room-connections.png" width="1501" height="820" alt="The Unrealtor living-room connections." loading="lazy" decoding="async" /><figcaption>Living-room connections</figcaption></figure>

I proposed moving both entrance puzzles into the living room so that each solution would open a door within view. The bedroom and bathroom would then become parallel branches, each unlocking one component of the final puzzle. Players would complete both branches before reaching the ending, but could choose which to tackle first.

- **Before - linear:** Living Room Puzzle → Bedroom → Bedroom Puzzle → Return to Living Room → Bathroom → Bathroom Puzzle → Final Puzzle.
- **After - parallel:** Living Room Entrance Puzzles → Bedroom Puzzle and Bathroom Puzzle in Either Order → Final Puzzle, unlocked by completing both branches.

<div class="media-pair media-flow-pair" data-media-group="UNREALTOR-03" style="--media-columns:minmax(0,1.0916666666666666fr) minmax(0,1.0416666666666667fr)"><figure class="media-frame media-image media-diagram media-ready" data-media-slot="UNREALTOR-FLOW-BEFORE" data-media-state="ready" data-media-kind="image"><img src="/media/the-unrealtor/flow-before.png" width="1179" height="1080" alt="The Unrealtor original linear level-flow diagram." loading="lazy" decoding="async" /><figcaption>Before · Linear flow</figcaption></figure><figure class="media-frame media-image media-diagram media-ready" data-media-slot="UNREALTOR-FLOW-AFTER" data-media-state="ready" data-media-kind="image"><img src="/media/the-unrealtor/flow-after.png" width="1125" height="1080" alt="The Unrealtor revised parallel level-flow diagram." loading="lazy" decoding="async" /><figcaption>After · Parallel flow</figcaption></figure></div>

The team adopted this structure in the final game. It aligned progression with the room connections and restored the puzzle-to-door feedback established in earlier levels. Each branch had a clear relationship to the final objective, while players gained a choice of completion order.

## Making Perspective Puzzles Easier to Read

The original puzzles asked players to experiment with different objects and viewing angles to discover a solution. Playtesting showed a bottleneck earlier in that process: players often did not know which object to look for or why they needed it. They became stuck identifying the target before reaching the intended perspective-matching challenge.

We added target silhouettes, color highlights around puzzle areas, and text at interaction points. My contribution was to rearrange parts of several puzzles in Unity, adjusting object placement and perspective relationships to support target recognition and matching.

<div class="media-trio" data-media-group="UNREALTOR-04"><figure class="media-frame media-image media-diagram media-compact media-ready" data-media-slot="UNREALTOR-HINT-SILHOUETTE" data-media-state="ready" data-media-kind="image"><img src="/media/the-unrealtor/hint-silhouette.png" width="370" height="520" style="max-width:152px" alt="The Unrealtor silhouette hint." loading="lazy" decoding="async" /><figcaption>Silhouette hint</figcaption></figure><figure class="media-frame media-image media-diagram media-compact media-ready" data-media-slot="UNREALTOR-HINT-INTERACT" data-media-state="ready" data-media-kind="image"><img src="/media/the-unrealtor/hint-interaction.png" width="370" height="522" style="max-width:152px" alt="The Unrealtor interaction hint." loading="lazy" decoding="async" /><figcaption>Interaction hint</figcaption></figure><figure class="media-frame media-image media-diagram media-compact media-ready" data-media-slot="UNREALTOR-HINT-TEXT" data-media-state="ready" data-media-kind="image"><img src="/media/the-unrealtor/hint-text.png" width="372" height="522" style="max-width:154px" alt="The Unrealtor text hint." loading="lazy" decoding="async" /><figcaption>Text hint</figcaption></figure></div>

The revised structure separated two tasks that players previously had to solve together:

- **Before:** Discover the target object and find a matching perspective.
- **After:** Recognize the indicated target, then find a matching perspective.

### Reflection

Making the target explicit helped players identify it, but reduced the exploration, hypothesis-building, and experimentation involved in discovering it. If revisiting the level, I would test progressive hints: begin with environmental guidance, then reveal the silhouette and text in stages if the player remains stuck. Further playtesting would be needed to assess the balance between goal clarity and independent discovery.
