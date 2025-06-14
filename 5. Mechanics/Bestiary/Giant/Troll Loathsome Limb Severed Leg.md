---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 5
environments: 'underdark, mountain, forest, swamp, hill, arctic'
size: Tiny
tags:
  - compendium/src/5e/mm
  - monster/cr/5
  - monster/environment/arctic
  - monster/environment/forest
  - monster/environment/hill
  - monster/environment/mountain
  - monster/environment/swamp
  - monster/environment/underdark
  - monster/size/tiny
  - monster/type/giant
aliases:
  - Troll (Loathsome Limb; Severed Leg)
---
# [[5. Mechanics\Bestiary\Giant\Troll Loathsome Limb Severed Leg.md|Troll (Loathsome Limb; Severed Leg)]]
*Source: Monster Manual p. 291. Available in the <span title='Systems Reference Document (5.1)'>SRD</span> and the Basic Rules (2014)*

```statblock
"name": "Troll (Loathsome Limb; Severed Leg)"
"size": "Tiny"
"type": "giant"
"alignment": "Chaotic Evil"
"ac": !!int "13"
"ac_class": "natural armor"
"hp": !!int "10"
"modifier": !!int "1"
"stats":
  - !!int "18"
  - !!int "13"
  - !!int "20"
  - !!int "7"
  - !!int "9"
  - !!int "7"
"speed": "5 ft."
"senses": "passive Perception 12"
"languages": ""
"cr": "5"
"traits":
  - "desc": "The troll regains 10 hit points at the start of its turn. If the troll\
      \ takes acid or fire damage, this trait doesn't function at the start of the\
      \ troll's next turn. The troll dies only if it starts its turn with 0 hit points\
      \ and doesn't regenerate."
    "name": "Regeneration"
"source":
  - "MM"
```
^statblock

## Environment

underdark, mountain, forest, swamp, hill, arctic

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
