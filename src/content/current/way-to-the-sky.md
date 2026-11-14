---
id: "way-to-the-sky"
title: "Way to the Sky"
role: "Balance, Systems & Combat Design"
meta: "Unity · 2-Person Team · 5 Weeks"
overview: ["A comedic incremental combat game where players swipe the mouse to slap a training dummy, earn XP equal to the damage dealt, upgrade their stats, and challenge three bosses.","As the primary designer, I shaped the overall game design and implemented core gameplay systems in Unity with AI-assisted programming.","My teammate focused on art, UI, and swipe input, with additional design and programming contributions."]
description: "A comedic incremental combat game where players swipe the mouse to slap a training dummy, earn XP equal to the damage dealt, upgrade their stats, and challenge three bosses."
hero: {"id":"WTS-01","label":"Gameplay overview","caption":"Accelerated-growth walkthrough"}
page: "case"
href: "/work/way-to-the-sky/"
backHref: "/#work"
backLabel: "Selected Work"
---

## Making Damage Drive Progression

The design goal was a comedic sense of continuous growth: exaggerated slaps, escalating damage numbers, and new abilities opening up after boss victories.

<figure class="media-frame media-image media-diagram media-compact media-ready" data-media-slot="WTS-02" data-media-state="ready" data-media-kind="image"><img src="/media/way-to-the-sky/core-loop.en.png" width="886" height="702" style="max-width:360px" alt="Training loop: swipe to attack, earn XP equal to damage, upgrade stats, challenge a boss and unlock a new ability." loading="lazy" decoding="async" /><figcaption>Core game loop</figcaption></figure>

Because training damage equals XP earned, offensive upgrades improve both combat power and the speed of future progression. Max Health provides a different benefit: it improves boss survivability without accelerating training. This creates an incentive to develop offense during training, then invest in health before challenging a boss.

Players begin with Base Damage, Crit Chance, and Max Health. Boss 1 unlocks Crit Multiplier, making existing Crit Chance upgrades more valuable. Boss 2 unlocks Double-Hit Chance, adding another source of damage growth. Each victory introduces a new progression variable as well as a higher level cap.

<figure class="media-frame media-image media-diagram media-compact media-ready" data-media-slot="WTS-PROGRESSION" data-media-state="ready" data-media-kind="image"><img src="/media/way-to-the-sky/progression.en.png" width="562" height="350" style="max-width:320px" alt="Conceptual upgrade-effort curve showing new progression variables unlocked after Boss 1 and Boss 2." loading="lazy" decoding="async" /><figcaption>Conceptual progression curve</figcaption></figure>

All stats can eventually be maxed. These choices shape upgrade order and pacing rather than permanent build identities.

<figure class="media-frame media-image media-ready" data-media-slot="WTS-UPGRADE" data-media-state="ready" data-media-kind="image"><img src="/media/way-to-the-sky/upgrades.webp" width="1600" height="901" alt="Upgrade interface showing damage, critical chance, a locked critical multiplier, and health." loading="lazy" decoding="async" /><figcaption>Stat upgrades and unlocks</figcaption></figure>

## Tuning Bosses as Progression Checkpoints

<figure class="media-frame media-image media-ready" data-media-slot="WTS-BOSS-FIGHT" data-media-state="ready" data-media-kind="image"><img src="/media/way-to-the-sky/boss-fight.webp" width="1600" height="900" alt="A Way to the Sky boss encounter with player and boss health bars." loading="lazy" decoding="async" /><figcaption>Boss encounter</figcaption></figure>

I modeled progression in a spreadsheet. Base Damage is multiplied by 1.30 per level, keeping each upgrade proportionally noticeable as numbers grow. Upgrade costs are multiplied by 1.37 per level; actual training effort also depends on critical hits and later unlocks.

Expected damage provides a comparison of how many attacks each side would need to win. At Boss 1's level cap, the model predicts about 5.0 player attacks to defeat the boss versus 5.6 boss attacks to defeat the player. With Base Damage one level lower and other stats unchanged, the player's requirement rises to about 6.5 attacks. The player acts first.

<table class="boss-model-table" data-media-slot="WTS-03" data-media-state="ready" data-media-kind="table" aria-label="Boss stat comparison"><thead><tr><th scope="col">Metric</th><th scope="col">Boss 1</th><th scope="col">Boss 2</th><th scope="col">Boss 3</th></tr></thead><tbody><tr><th scope="row">Level cap</th><td>Lv.10</td><td>Lv.20</td><td>Lv.30</td></tr><tr><th scope="row">Player hits to defeat boss</th><td>5.0</td><td>5.5</td><td>5.4</td></tr><tr><th scope="row">Boss hits to defeat player</th><td>5.6</td><td>6.7</td><td>6.3</td></tr><tr><th scope="row">Player hits with Base Damage one level below cap</th><td>6.5</td><td>7.1</td><td>7.1</td></tr></tbody></table>

These are expected values, not literal fractions of attacks or measured win rates. Random critical hits can still allow early victories below the target level. Bosses therefore act as checkpoints for reliable progression rather than absolute level locks.

## Reflection

Classroom playtest feedback identified repetitive training and slow access to meaningful upgrades. I reduced XP requirements to shorten upgrade intervals. I also strengthened attack presentation with distinct normal/critical-hit visuals, hit reactions, camera shake, and audio.

<div class="media-pair" data-media-group="WTS-04"><figure class="media-frame media-image media-ready" data-media-slot="WTS-NORMAL" data-media-state="ready" data-media-kind="image"><img src="/media/way-to-the-sky/normal.webp" width="1600" height="900" alt="Normal hit with a white 108 damage number." loading="lazy" decoding="async" /><figcaption>Normal hit</figcaption></figure><figure class="media-frame media-image media-ready" data-media-slot="WTS-CRITICAL" data-media-state="ready" data-media-kind="image"><img src="/media/way-to-the-sky/critical.webp" width="1600" height="900" alt="Critical hit with an orange impact graphic and a red 162 damage number." loading="lazy" decoding="async" /><figcaption>Critical hit</figcaption></figure></div>

These revisions focused on reward timing and attack feedback. They did not expand the player's choices during combat or add actions that required observation, anticipation, or judgment. Within the five-week schedule, we prioritized completing the training-to-ending flow, leaving the planned dodge and counter mechanics unimplemented.

If revisiting the project, I would first prototype a defensive interaction that asks players to read and respond to boss actions. I would then retest combat length and upgrade pacing around that added decision. The priority would be to make the repeated interaction more engaging before tuning the time to the next reward.
