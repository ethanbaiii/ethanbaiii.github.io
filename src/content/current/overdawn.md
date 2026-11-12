---
id: "overdawn"
title: "Overdawn"
role: "Audio Lead & Sound Designer"
meta: "Unity · ~20-Person Team · Sep 2025–Feb 2026"
overview: ["Overdawn is a 2.5D dystopian shooter released on Steam. I led its three-person audio team and personally created over 100 sound assets for combat, abilities, UI, and environments. The other two members primarily worked on music.","My sound work focused on distinguishing attacks, warning players about upcoming abilities, and confirming combat events. I created sounds through source selection, editing, modulation, and layering."]
description: "Overdawn is a 2.5D dystopian shooter released on Steam. I led its three-person audio team and personally created over 100 sound assets for combat, abilities, UI, and environments. The other two members primarily worked on music."
hero: null
page: "audio"
href: "/audio/overdawn/"
backHref: "/audio/"
backLabel: "Audio"
---

## Building the Hidden Boss's Audio

The hidden boss already had combat behavior but lacked audio feedback. I worked with designers to identify the cues it needed, then independently handled its sound work, including projectile attacks, hit reactions, the ultimate, and mechanical wings.

<figure class="media-frame media-video media-ready" data-media-slot="OVERDAWN-SHOWCASE" data-media-state="ready" data-media-kind="video"><video controls playsinline preload="none" data-managed-media src="/media/overdawn/sound-showcase.en.mp4" poster="/media/overdawn/posters/sound-showcase.en.webp" width="1280" height="720" style="aspect-ratio: 1280 / 720" aria-label="Overdawn hidden boss sound showcase, including charge-up V1 and V2">Your browser does not support this video.</video><figcaption>Hidden boss sound showcase</figcaption></figure>

### Connecting the Charge-Up to the Release

The first version of the ultimate charge-up used separate sound segments. Designers wanted a more continuous build toward the attack. I connected the segments and added a pitch glide leading into the release. The team adopted the second version.

The aim was for the charge-up to sound like one continuous action leading into the attack. Both versions are included in the video above.

## Bringing the Sounds into Unity

Engineers built the main audio systems and tools. I used those tools to configure assets and wrote parts of the trigger logic to align playback with combat events. For the hidden boss, I configured sounds on the corresponding Unity Behavior Graph nodes and adjusted their playback timing against the boss actions.
