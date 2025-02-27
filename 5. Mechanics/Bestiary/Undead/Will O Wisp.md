---
obsidianUIMode: preview
cssclasses: json5e-monster
statblock: inline
cr: 2
environments: 'forest, swamp, urban'
size: Tiny
tags:
  - compendium/src/5e/mm
  - monster/cr/2
  - monster/environment/forest
  - monster/environment/swamp
  - monster/environment/urban
  - monster/size/tiny
  - monster/type/undead
aliases:
  - Will-o'-Wisp
---
# [[5. Mechanics\Bestiary\Undead\Will O Wisp.md|Will-o'-Wisp]]
*Source: Monster Manual p. 301, Curse of Strahd, Vecna: Eve of Ruin. Available in the <span title='Systems Reference Document (5.1)'>SRD</span>*

Will-o'-wisps are malevolent, wispy balls of light that haunt lonely places and battlefields, bound by dark fate or dark magic to feed on fear and despair.

## Hope and Doom

Will-o'-wisps look like bobbing lantern lights in the distance, although they can choose to alter their colors, or wink out completely. When they activate their lights, will-o'-wisps offer hope, hinting of safety to creatures that follow them.

Will-o'-wisps lure unwary creatures into quicksand pits, monster lairs, and other dangerous places so that they can feed on the suffering of their prey and revel in their death screams. An evil being that falls prey to a will-o'-wisp might become a wisp itself, its woeful spirit coalescing above its lifeless corpse like a flickering flame.

### Consumed by Despair

Will-o'-wisps are the souls of evil beings that perished in anguish or misery as they wandered forsaken lands permeated with powerful magic. They thrive in swampy bogs and bone-strewn battlefields where the oppressive weight of sorrow stoops even heavier than the low-hanging mist and fog. Trapped in these desolate places of lost hope and memory, will-o'-wisps lure other creatures toward dismal fates and feed on their misery.

## Agents of Evil

Will-o'-wisps rarely speak, but when they do, their voices sound like faint or distant whispers. In the miserable domains they haunt, will-o'-wisps sometimes form symbiotic relationships with their wicked neighbors. Hags, oni, black dragons, and evil cultists work with will-o'-wisps to draw creatures into ambush. As their evil allies surround and slaughter creatures, the wisps hover above them, drinking the agony of a last breath and savoring the sensation as the light of life goes out in a creature's eyes.

## Undead Nature

A will-o'-wisp doesn't require air, drink, or sleep.

```statblock
"name": "Will O Wisp"
"size": "Tiny"
"type": "undead"
"alignment": "Chaotic Evil"
"ac": !!int "19"
"hp": !!int "22"
"hit_dice": "9d4"
"stats":
- !!int "1"
- !!int "28"
- !!int "10"
- !!int "13"
- !!int "14"
- !!int "11"
"speed": "0 ft., fly 50 ft. (hover)"
"damage_resistances": "acid; cold; fire; necrotic; thunder; bludgeoning, piercing,\
  \ slashing from nonmagical attacks"
"damage_immunities": "lightning, poison"
"condition_immunities": "[[/5. Mechanics/Rules/Conditions.md#Exhaustion|exhaustion]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Grappled|grappled]], [[/5. Mechanics/Rules/Conditions.md#Paralyzed|paralyzed]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Poisoned|poisoned]], [[/5. Mechanics/Rules/Conditions.md#Prone|prone]],\
  \ [[/5. Mechanics/Rules/Conditions.md#Restrained|restrained]], [[/5. Mechanics/Rules/Conditions.md#Unconscious|unconscious]]"
"senses": "darkvision 120 ft., passive Perception 12"
"languages": "the languages it knew in life"
"cr": "2"
"traits":
- "desc": "As a bonus action, the will-o'-wisp can target one creature it can see\
    \ within 5 feet of it that has 0 hit points and is still alive. The target must\
    \ succeed on a DC 10 Constitution saving throw against this magic or die. If the\
    \ target dies, the will-o'-wisp regains 10 (3d6) hit points."
  "name": "Consume Life"
- "desc": "The will-o'-wisp can't wear or carry anything."
  "name": "Ephemeral"
- "desc": "The will-o'-wisp can move through other creatures and objects as if they\
    \ were difficult terrain. It takes 5 (1d10) force damage if it ends its turn inside\
    \ an object."
  "name": "Incorporeal Movement"
- "desc": "The will-o'-wisp sheds bright light in a 5 to 20-foot radius and dim light\
    \ for an additional number of ft. equal to the chosen radius. The will-o'-wisp\
    \ can alter the radius as a bonus action."
  "name": "Variable Illumination"
"actions":
- "desc": "Melee Spell Attack: +4 to hit, reach 5 ft., one creature. Hit: 9 (2d8)\
    \ lightning damage."
  "name": "Shock"
- "desc": "The will-o'-wisp and its light magically become [[/5. Mechanics/Rules/Conditions.md#Invisible|invisible]]\
    \ until it attacks or uses its Consume Life, or until its [[/5. Mechanics/Rules/Conditions.md#Concentration|concentration]]\
    \ ends (as if [[/5. Mechanics/Rules/Conditions.md#Concentration|concentrating]] on\
    \ a spell)."
  "name": "Invisibility"
"source":
- "MM"
- "CoS"
- "VEoR"
"image": "5. Mechanics/Bestiary/Undead/token/will-o-wisp.webp"
```
^statblock

## Environment

forest, swamp, urban

```dataviewjs
await dv.view('monsterHarvesterTable', { current: dv.current() })
```
