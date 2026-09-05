---
party: "[[3. The Party/Parties/Midnight Covenant.md|Midnight Covenant]]"
world: "[[4. World Almanac/Worlds/Eldoria.md|Eldoria]]"
tags:
  - campaign
obsidianUIMode: preview
---
> [!infobox|n-th]
> # Configuration
> | | |
> |---|---|
> | **Party:** | `INPUT[suggester(optionQuery(#party)):party]` |
> | **World:** | `INPUT[suggester(optionQuery(#world)):world]` |

## Public Premise
> [!div|no-t clean]
> `INPUT[textArea:public_premise]`

> [!abstract] Campaign Bible
> This note is the campaign bible. Agents (`dm-assistant`, `world-builder`, `story-creator`, `encounter-builder`) read it for tone, power level, and content boundaries before generating anything. Locked canon here is fixed unless the DM reopens it. Where a section is marked *(TODO)* or is silent, agents ask rather than assume.

# Premise

The **[[Midnight Covenant]]** unknowingly freed **[[Vecna]]**, the Whispered One. In the halls of Castle Ravenloft, [[Redgrave]] drove the final blow into Strahd von Zarovich, drawing his soul out with the Amulet of Ravenkind and a stake through the heart. As the castle fell, a beam of purple energy erupted from Mount Ghakis, where the Amber Temple lies — Strahd's death was "the final piece," a voice told them, that broke the seal binding Vecna inside. It promised ruin to come, and named itself (S33). The party knows this; it's the reason the hunt bears his name.

The campaign is set in the world of **[[Eldoria]]**. Barovia's mists are behind them — the current arc centers on **[[Bruokdon]]**, where the party researches Vecna at the Umbral Athenaeum and closes in on the **Silent Ascendency**, his mortal network, while Vecna works to force his ascension into the **God of Truth** and rewrite reality itself.

> [!note] See **The Hunt — Campaign Arc** below for the full stage-by-stage roadmap, and **Character Tie-Ins** for how each PC's thread intersects it.

# Tone

**Epic, high-stakes, and gritty — with room to breathe.**

- **Epic & high-stakes.** The endgame is cosmic: a god-tier villain reshaping reality. Choices carry weight far beyond the party. Play up scale, dread, and the sense that the world itself is at risk.
- **Gritty & grounded.** Consequences stick. Resources, wounds, and losses matter; victories cost something. Avoid tidy, consequence-free resolutions.
- **Mixed with levity.** The core is serious, but leave space for banter, character moments, and lighter beats between the dark ones. Humor punctuates the tension — it doesn't undercut it.

Register: gothic and ominous in Barovia; grander and more mythic as the Vecna arc surfaces.

# Power Level

- **Party:** 5 active PCs at **level 10** (tier 3). Roster: [[Faerah Duskrane]] (Drow), [[Redgrave]] (Warforged Envoy), [[Roark Battleborn]] (Human), [[Wisp]] (Awakened Cat), [[Yevelda Ovak]] (Human). [[Marin]] and [[Seluvis Felo'melorn]] are currently inactive.
- **Lethality: hard but survivable.** Encounters should genuinely threaten the party, but rarely kill outright without bad luck or bad decisions. Player death is on the table as a consequence, not a baseline expectation.
- **Encounter budgeting:** use the Lazy DM (Sly Flourish) encounter benchmark — the same method surfaced in the [[Midnight Covenant]] infobox. Verify current level and active roster from the party note before building fights.
- **Magic / rewards:** significant artifacts are in play via the Fortunes of Ravenloft ([[Tome Of Strahd (COS)]], [[Sunsword (COS)]], [[Holy Symbol Of Ravenkind (COS)]]). Treat major magic items as story-weighted rewards, not routine loot.

# Lines & Veils

Content-safety boundaries every agent must respect.

**Lines (never depicted or used as a plot element):**
- Sexual violence.

**Veils (may exist in the fiction, kept off-screen — fade to black):**
- Romance and intimacy: relationships can develop, but intimate scenes are not depicted.

> [!note] Revisit this list with the table as the campaign continues; add lines/veils as needed.

# The Villain: Vecna

### End Goal: become the God of Truth and dominate reality itself

Vecna's endgame isn't just a spell — it's staking a claim on a cosmic domain-slot that doesn't exist yet.

1. **Prove the concept** — *done.* [[Thornmere]] (see DM-only note below) was a small-scale prototype — proof his truth-magic works at village scale. The party doesn't know he caused it, and doesn't know it was only a test run.
2. **Harvest raw power** — *active.* The Silent Ascendency, his mortal network, is buying up far more stolen magic items than [[Lord Caldris Velmont]]'s smuggling ring normally moves, siphoning their magical energy toward the ascension — and, per S42, has escalated to targeting the party's own accumulated magical power directly.
3. **The World-Truth Working** *(Act I climax)* — force a compulsion to truth onto most or all of the world. At that scale and permanence, Truth stops being "a thing that happens" and becomes a metaphysical constant — a cosmic domain-slot on par with Death or Time. Reality "needs" a God of Truth once that domain exists. The Working's own wording carries a built-in exception letting Vecna alone define what "true" means while everyone else is bound to it — that hypocrisy is both the point and the mechanism by which he stakes his claim on the vacancy the ritual creates.
4. **Claim a vessel** — *upcoming.* Weakened and newly escaped, Vecna needs a physical anchor or champion to act fully in the material world.
5. **The Ascension Rite** *(Act II climax, the endgame)* — Vecna formally executes and validates his claim on the Truth-domain, becoming its god. Because the claim isn't honestly won — it rests on an exception to his own law — it's contestable: see **The Hunt — Campaign Arc → Endings**.

> [!warning]- DM only — Vecna's methods (party unaware)
> As Vecna departed [[Barovia]], he tested his truth-manipulating magic on the town of [[Thornmere]] in [[Greenfall]] — a small-scale prototype for the World-Truth Working, not the working itself:
> - He erased [[Eamon Morcant]] from the villagers' memories, making a man who had lived there his whole life into a shunned "stranger." The spell succeeded.
> - The town's children instead "knew too much truth" — retaining impossible knowledge of the party's deeds in Barovia, an unintended overflow of the same magic that likely echoes at civilizational scale when the World-Truth Working completes.
>
> The party broke the rune beneath Eamon's house (S35), restoring the villagers' memories and curing the children — but **they do not know Vecna was responsible, or that Thornmere was only a test.**

# The Hunt — Campaign Arc

The party's journey to stop Vecna unfolds across **two acts, each built around one of Vecna's two rituals** (see The Villain: Vecna, above). Vecna's plan keeps advancing on its own timeline regardless of which stage the party is in — these are the party's moves, not his. Stage numbers are pacing scaffolding, not a railroad — treat each as a situation, not a fixed scene order. Arcs marked *Breather* are deliberately low-stakes: room to explore consequences, spotlight a PC, and let tension recover before the next climb.

## Act I — The World-Truth Working

Ends with the party's first direct fight against Vecna — and they **lose**. He is functionally unstoppable while completing the ritual; the fight is a wall by design, not a balance failure.

1. **Harvest Power — [[Bruokdon]]** *(complete, S40–44)* — unmasking [[Lord Caldris Velmont]] and the Umbral Athenaeum smuggling ring exposed the Silent Ascendency's item-energy pipeline. Closed out in S44 with [[Marrow]] dead, its frame-man in custody, and the last Bruokdon shipment intercepted. Villain step 2.
2. **Breather: Bruokdon aftermath** *(low stakes)* — fallout of unmasking Velmont, Council/city reaction, downtime. Candidate slot for a future Eilistraee-shrine side quest (see Active Threads) if the DM wants it here rather than saved for later.
3. **The Great Library** *(next — [[The Well of Many Worlds]])* — via the Well of Many Worlds with [[Professor Gousse Windcaller]]'s help (Plane of Water → Feywild → Limbo → Library), the party catches Silent Ascendency agents mid-operation at the Library. **What exactly they're after there is an open thread — no specific artifact/McGuffin is locked yet.** Hinge point: the party gets the real shape of Vecna's plan.
4. **Breather: processing the reveal** *(low stakes)* — a smaller personal beat — Roark/[[Martin Thricefold]], or a taste of [[Redgrave]]'s still-undefined Watchers over the Fallen. The bigger personal arcs are Act II's job.
5. **Rising tremors** *(medium, investigative)* — a Thornmere-echo incident surfaces elsewhere, making the threat concrete again before the ramp-up. Not designed in detail yet — could be one scene or its own short arc.
6. **The Convergence** *(escalating)* — piecing together where and when Vecna will perform the Working, using intel from the Library operation and the power-harvesting pipeline. **This is where the actual casting site — distinct from the Library — gets identified.**
7. **The World-Truth Working** *(climax)* — the losing battle. Villain step 3. The ritual's severity at completion is set by two levers: how well the party disrupted the Library operation, and how much of the power-harvesting/soul-vessel pipeline they'd already dismantled. This severity carries forward into Act II's opening state and into how contestable Vecna's claim is at the very end of the campaign (see Endings, below).

> [!warning]- DM only — how the party survives the Working
> Three options are being kept live for the table; **do not pre-select** — pick whichever lands hardest when it happens:
> 1. Vecna's contempt — he's spent and doesn't bother finishing off mortals beneath his notice.
> 2. Ritual backlash — the Working's completion knocks the party out/scatters them, possibly with a lingering side effect echoing Thornmere's "too much truth" overflow.
> 3. A rescuer pulls them out at a cost, creating a debt.

## Act II — The Ascension Rite

Opens low-stakes: the post-Working world, and room to explore how it changed. Climaxes with the true, decisive final battle.

1. **Aftermath** *(low stakes)* — the post-Working world; its severity depends on how Act I's climax landed. Side-story room here.
2. **Breather/personal arc: The Underdark** *(low–medium)* — [[Faerah Duskrane]]'s sister resurfaces. Answers Eilistraee's stance on Vecna in the fiction rather than in advance.
3. **Claim a Vessel** *(rising)* — [[Izek Strazni (COS)|Izek Strazni]] and [[Anastrasya Karelova (COS)|Anastrasya Karelova]] as candidates. Personal stakes for [[Yevelda Ovak]] (rescue-or-mercy) and [[Redgrave]] (the Order of the Silver Dragon resurfaces here, recognizing the soul-craft in both him and the vessel network). Villain step 4.
4. **Breather/personal arc: The Eternal Watch** *(low–medium)* — [[Wisp]]'s master. Also where the Watch explains how domain-claiming actually works — this sets the rules for the finale.
5. **Rising tremors, part 2** *(medium, optional)* — signs Vecna is closing in on the Rite: vessel-binding side effects, the world reacting to an almost-god's presence.
6. **The Convergence** *(escalating)* — locating and racing to the Rite's nexus, using intel from the Eternal Watch and the vessel hunt.
7. **The Ascension Rite — Finale** *(climax)* — the true final battle. Villain step 5. Multiple possible endings — see below.

## Endings

Ritual 1 forces a global compulsion to truth and creates a vacant cosmic Truth-domain — and in the same act, stakes Vecna's claim to it, because the ritual's own wording exempts him alone from the truth it compels everyone else to. That asymmetry reads to the cosmos as the strongest available claim on the vacancy, even though it's a rigged cheat rather than an honestly total relationship to Truth. Ritual 2 is where Vecna formally executes and validates that claim.

**Because the claim isn't honestly won, it's contestable** — a rival claimant with a genuinely total, unhedged relationship to Truth could override Vecna's reservation at the Rite. How cleanly the World-Truth Working landed in Act I (a patchy, disrupted casting vs. a clean, near-total one) determines which of these are realistically on the table:

1. **Stop Vecna outright** — kill or banish him before the Rite completes; the vacancy dissolves unclaimed. Always available, regardless of Act I's outcome — the baseline win.
2. **Redirect the vacancy to a worthier claimant** — candidate: [[Wisp]]'s master, if the Eternal Watch have groomed a contingency candidate for exactly this scenario. Gated behind Act II prep — keeping him alive/stable and completing the Eternal Watch arc (Act II, Arc 4).
3. **Collapse the domain entirely** — destroy the vacancy so nothing can ever fill it. Cost: Truth-magic (Zone of Truth, Discern Lies, binding oaths, etc.) becomes permanently unreliable in the world. Requires specific knowledge from the Eternal Watch to even be an option.

# Character Tie-Ins

How each PC's story hooks into the campaign. These are threads and open questions, not locked outcomes — develop them with the DM.

### [[Redgrave]]
- The soul within belongs to a member of the Order of the Silver Dragon — likely captured mid-investigation into Eludrax's soul-vessel experiments, the same forbidden soul-craft that (unknown to Strahd) fed the seal binding Vecna at the Amber Temple. Redgrave's own killing blow on Strahd was the "final piece" that broke that seal (S33) — he freed Vecna without knowing it.
- The Silent Ascendency's current power-harvesting pipeline reuses that same craft: smuggled magic items are drained into constructed soul-vessels grown from stolen fragments of Eludrax's soul-craft (see Active Threads — Amber Wardens) — a closed-loop irony, and exactly why the Order would take notice.
- What remains of the Order of the Silver Dragon is undefined but expected to resurface at **Act II, Arc 3 (Claim a Vessel)**, recognizing the soul-craft in both Redgrave and the vessel network.
- His Artisan Guild and membership in the **Watchers over the Fallen**, a faction in his hometown of [[Bruokdon]], remain *(TODO — undefined; develop purpose, structure, and any tie to the hunt.)* Candidate slot for a smaller beat: **Act I, Arc 4 (Breather: processing the reveal)**.

### [[Faerah Duskrane]]
- Patron is [[Drow Eilistraee (MTF)|Eilistraee]].
- Her sister — believed killed fleeing the Underdark — may actually be alive, having escaped it independently. Surfaces at **Act II, Arc 2 (The Underdark)**; exact location and circumstances of the reunion are still open.
- Eilistraee's stance on Vecna's ascension will be answered in the fiction during that stage rather than decided in advance.
- A separate future side quest has been floated at her player's request: a hidden surface congregation of Eilistraee worshippers in the wilds of Greenfall near [[Bruokdon]], with a corrupted-convert infiltrator. Confirmed strong interest, but not yet built or scheduled — see Active Threads.

### [[Yevelda Ovak]]
- Parents were killed defending [[Barovia]].
- [[Izek Strazni (COS)|Izek Strazni]] — last seen alive in Van Richten's Tower (S16), never found after Castle Ravenloft's fall — was claimed by Vecna's power in the moment of his escape and bound to serve him. Surfaces at **Act II, Arc 3 (Claim a Vessel)** as a personal rescue-or-mercy dilemma.

### [[Wisp]]
- A cat familiar carrying spellcasting power that actually belongs to their master — a member of the Eternal Watch, the order that originally imprisoned Vecna at the Amber Temple and has watched over the seal ever since. An Eternal Watch seal binds a living thread of its Watcher's own mind into it — lock and lookout at once — so when Vecna broke it, the backlash tore back up that thread and hit the master's mind directly rather than just draining him. His coma is that mind folded shut around whatever he perceived in that instant, not ordinary damage; Greater Restoration, Remove Curse, and similar mundane fixes don't touch it. Wisp's borrowed power is fraying as a result.
- Finding the Eternal Watch (**Act II, Arc 4**) to save him is Wisp's throughline — this is also where the Watch explains how domain-claiming actually works, setting the rules for the finale (see The Hunt — Campaign Arc → Endings). Getting at what's buried in the master's mind will require some way to actually enter it — the Eternal Watch is expected to hold the method (DM-only working name: **the Hollow Vigil**, unrevealed) when the party finds them. Whatever's recovered there is a strong candidate for the "specific knowledge from the Eternal Watch" the Endings section gates both the worthier-claimant and domain-collapse options behind — not yet committed to which, or both.

### [[Roark Battleborn]]
- His father is a Trickster God, bound — like all gods — by an ancient compact never to act in ways that would strip mortals of their own agency. He cannot move against Vecna directly; Roark, his mortal son, is the sanctioned loophole.
- [[Martin Thricefold]] is bonded to protect Roark on the god's behalf, having received a warning years ago that the corruption of knowledge would be Vecna's first sign of return — a warning that's already proven true at the Umbral Athenaeum.
- Roark's arc is growing into the role of his father's hands in the mortal world.

# Active Threads

Open questions and hooks the agents should track for continuity:

- **The Silent Ascendency** — Vecna's mortal network. Buying up far more stolen magic items than [[Lord Caldris Velmont]]'s ring normally moves, to siphon their energy toward the ascension (Act I, Arc 1) — and, per S42, escalating to target the party's own magical power directly. The items are drained into constructed **soul-vessels** built from stolen fragments of Eludrax's forbidden soul-craft (see Amber Wardens, below). Velmont's doppelganger impersonator was **[[Marrow]]**, the Ascendency's Bruokdon cell leader, killed in S44 — see below. **The Bruokdon cell is broken:** leader dead, a cell member in custody, the last outbound shipment taken. The network above and outside the city is untouched, and nobody caught in Bruokdon knew who ran it. What the Ascendency is after at the Great Library (Act I, Arc 3) is a separate, still-undefined open thread — no artifact/McGuffin is locked yet.
- **The Eternal Watch** — the order that originally imprisoned Vecna at the Amber Temple, and has watched over the seal ever since. [[Wisp]]'s master is a member; the ward he maintained broke the instant Vecna escaped, dropping him into a coma. Surfaces at Act II, Arc 4 — also where they explain how domain-claiming works, setting the rules for the finale (see The Hunt — Campaign Arc → Endings). The 2026-08-22 Great Library prep surfaces the "originally imprisoned him" half of this as a discoverable clue (a founding-era text, restricted three years before Vecna's escape for reasons not yet explained) — the party doesn't know it yet as of this writing.
- **Amber Wardens** *(working name, not yet confirmed)* — a recurring monster motif: some soul-vessels are grown into large mechanical guardian constructs, amber conduits threaded through the frame carrying bound souls of cult victims as a power source. Echoes the Stone Golem fight (S43) and pulls Amber Temple imagery through the whole hunt; expected to recur guarding anchors/vessel caches across both acts. No stat block built yet — `statblock-creator`/`encounter-builder` job when a concrete encounter needs one.
- **[[Marrow]] and the Marrow-rite** — Marrow is a doppelganger grafted with a sliver of the same stolen Eludrax soul-craft that builds the Amber Wardens: a rare, individually-made augmentation (not a mass-produced template) that lets it draw on a whisper of a disguise target's soul-print — trained reflexes, muscle memory, a taste of talent — layered over its own shapeshifting, given prior contact with that target. It captured [[Lord Caldris Velmont]], ran Bruokdon's smuggling ring under his stolen identity, was unmasked by Redgrave's Geas (S43), burned a second identity (Professor Gousse Windcaller) within the hour, and then ambushed and captured Roark Battleborn and Mistress Lyssandra Veil, taking Roark's identity to salvage its cover and stay embedded with the party hunting it. **[[Faerah Duskrane]] killed it in a Bruokdon street in S44**, and the corpse reverted to its true form with the graft plainly visible at the nape of the neck. **The live piece of this thread is now the graft itself:** the party left the body in the street and has not examined the amber gem, which is uninvestigated physical evidence tying the Marrow-rite to the Amber Wardens and Eludrax's soul-craft — and a natural way into [[Redgrave]]'s Order of the Silver Dragon tie-in whenever it's wanted. The dwarf who falsely confessed to leading the cell is in custody and has not been re-questioned.
- **The Great Unveiling** — Silent Ascendency doctrine, sincerely held by rank-and-file cultists: all hidden truths will one day surface in a promised revelation, and their secrecy now is preparation for it. They refer to their god only by title — the Whispered One, God of Secrets, the Undying King — never by name, and don't know who sits above their own cell leadership. Unbeknownst to them, this is devotional language for the World-Truth Working (Act I climax) — the party already knows the name Vecna (S33), so this is confirmation and tone, not new intel.
- The fate and activity of the Order of the Silver Dragon *([[Redgrave]])* — expected to resurface at Act II, Arc 3, tied to Eludrax's soul-vessel craft.
- Vecna's truth-magic loose in [[Greenfall]] — the Thornmere incident and its ripples; the party is unaware of his hand in it, or that it was only a small-scale prototype for the World-Truth Working *(see The Villain: Vecna)*.
- The **Watchers over the Fallen** faction and Redgrave's ties to it *([[Redgrave]])* — undefined, needs developing. Candidate breather slot: Act I, Arc 4.
- The Underdark / Eilistraee connection, and whether [[Faerah Duskrane]]'s sister survived and escaped it *(Act II, Arc 2)*.
- **Eilistraee shrine** *(future side quest, not yet built)* — a hidden surface congregation of Eilistraee worshippers in the wilds of Greenfall near [[Bruokdon]], with a corrupted-convert infiltrator. Ties to [[Faerah Duskrane]]'s patron; her player has asked for this in-fiction, so it's confirmed real interest, just not yet placed on the timeline. Candidate slot: Act I, Arc 2.
- [[Izek Strazni (COS)|Izek Strazni]] — missing since Castle Ravenloft's fall; claimed by Vecna's power in that moment, now bound to serve him *([[Yevelda Ovak]], Act II, Arc 3)*.
- [[Anastrasya Karelova (COS)|Anastrasya Karelova]] — fled Strahd's wedding battle and survived; a candidate for Vecna's forces to recruit as vessel or enforcer *(Act II, Arc 3)*.
- The Great Library, reached via the Well of Many Worlds with [[Professor Gousse Windcaller]]'s help — next session; expect Silent Ascendency agents already at work there *(Act I, Arc 3)*. The actual World-Truth Working casting site is separate from the Library and gets identified later, at The Convergence (Act I, Arc 6).
- **[[Baba Lysaga (COS)|Baba Lysaga]]'s vendetta** — unresolved from the Curse of Strahd arc. She has not forgiven Strahd's death or the theft of her hut's gem, and (barely a week removed from the loss, by her own reckoning) has struck a bargain with [[Mab]], Queen of Air and Darkness and ruler of the Gloaming Court, to intercept the party the moment they cross into fey territory. Mab now holds a debt over the party from however that confrontation resolves — a hook, not a one-off fight.
- The gods' non-interference compact and Roark's father, the Trickster God — background force shaping [[Roark Battleborn]]'s arc; [[Martin Thricefold]] acts as the god's indirect agent.
- The Fortunes of Ravenloft — locations tracked below.

## Fortunes of Ravenloft
- [[Tome Of Strahd (COS)]] — Van Richten's Tower
- [[Sunsword (COS)]] — Ruins of Berez, in Baba Lysaga's Creeping Hut
- [[Holy Symbol Of Ravenkind (COS)]] — Amber Temple

# Locked Canon

Facts the DM has finalized. Agents treat these as fixed unless the DM explicitly reopens them.

- Vecna's end goal is to become the God of Truth and dominate reality.
- [[Redgrave]] carries the soul of an Order of the Silver Dragon member.
- [[Faerah Duskrane]] is a servant of [[Drow Eilistraee (MTF)|Eilistraee]].
- [[Yevelda Ovak]]'s parents died defending [[Barovia]].
- Killing Strahd (S33) — specifically Redgrave's final blow, drawing out Strahd's soul — delivered "the final piece" that freed Vecna from the Amber Temple. The party witnessed this and knows it.
- Roark's father is a Trickster God, bound by the gods' ancient non-interference compact; Roark is his sanctioned mortal agent.
- [[Wisp]]'s master is a member of the Eternal Watch and fell into a coma the instant Vecna's escape broke the ward he maintained.
- [[Izek Strazni (COS)|Izek Strazni]] survived the fall of Castle Ravenloft and was claimed by Vecna's power in that moment; he now serves him.
- [[Anastrasya Karelova (COS)|Anastrasya Karelova]] survived Strahd's wedding-night battle and fled; she is being courted by Vecna's forces.
- The Silent Ascendency is buying up stolen magic items from [[Lord Caldris Velmont]]'s ring — and, per S42, targeting the party's own magical power — to siphon energy toward Vecna's ascension, draining them into constructed soul-vessels built from stolen fragments of Eludrax's forbidden soul-craft — the same craft that fed the original seal binding Vecna and produced [[Redgrave]]'s bound soul.
- [[Marrow]] is the Silent Ascendency's cell leader in Bruokdon — the doppelganger who captured and impersonated [[Lord Caldris Velmont]], then briefly [[Professor Gousse Windcaller]], before escaping into a crowd (S43). It carries a rare soul-graft (the Marrow-rite) built from the same Eludrax soul-craft as the Amber Wardens, letting it borrow a disguise target's trained reflexes and muscle memory, not just their appearance. In the session after S43, it ambushed and captured Roark Battleborn and Mistress Lyssandra Veil (opportunistic, not premeditated — the Ascendency had no advance knowledge of the doppelganger-detection device [[Corwin Vantor]] built, and Vantor was killed defending it) and took Roark's identity to salvage its cover. **The party doesn't know any of this yet** — it's the DM-only spine of that session.
- [[Faerah Duskrane]]'s sister may have survived and escaped the Underdark.
- [[Thornmere]] (S35) was only a small-scale prototype of Vecna's truth-magic, not the working itself. The party doesn't know this.
- Vecna's ascension is a two-ritual structure: **the World-Truth Working** (Act I climax) forces a global truth-compulsion, creates a vacant cosmic Truth-domain, and stakes Vecna's claim to it via a built-in hypocritical exception; **the Ascension Rite** (Act II climax) formally executes that claim. The party doesn't know this structure yet.
- Vecna's claim on the Truth-domain is contestable because it's dishonestly won — a genuinely total, unhedged claimant could override it at the Rite. Three endings remain live: stop Vecna outright (always available), redirect the vacancy to a worthier claimant (gated behind Act II's Eternal Watch arc; candidate is [[Wisp]]'s master), or collapse the domain entirely (requires Eternal Watch knowledge; permanently costs all Truth-magic reliability in the world).

# Timelines
```aat-vertical
COS
```
