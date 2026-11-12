---
id: "tapper-recreate"
title: "Tapper Recreation"
role: "Gameplay Implementation"
meta: "Unity · 2-Person Team · 1 Month"
overview: ["A Unity recreation of Tapper's multi-lane serving loop. Players switch counters, serve drinks to push customers back, and catch returning mugs while managing pressure across lanes."]
description: "A Unity recreation of Tapper's multi-lane serving loop. Players switch counters, serve drinks to push customers back, and catch returning mugs while managing pressure across lanes."
hero: {"id":"TAPPER-01","label":"Gameplay","caption":""}
page: "prototypes"
href: null
backHref: "/prototypes/"
backLabel: "More Work"
---

I handled the primary gameplay implementation through observation of the original game and AI-assisted development. Level configurations use ScriptableObjects to define per-lane customer queues, repeat counts, queue spacing, and respawn delays, keeping these settings separate from the shared gameplay code.
