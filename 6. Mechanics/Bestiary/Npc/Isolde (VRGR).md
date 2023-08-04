---
obsidianUIMode: preview
cssclass: json5e-monster
tags:
- compendium/src/5e/vrgr
- monster/size/medium
- monster/type/fey/elf
statblock: true
statblock-link: "#^statblock"
name: Isolde
ac: 19
hp: 82
hit_dice: 11d8 + 33
cr: '5'
stats: [
  18,
  18,
  16,
  14,
  12,
  16
]
source: [
  VRGR
]
aliases: ["Isolde"]
---
# Isolde
*Source: Van Richten's Guide to Ravenloft p. 86*  

Isolde was a holy warrior devoted to a pantheon of elven deities called the Seldarine. In this role, she defended the Feywild against dragons, demons, and other threats. In time, her heroics caught the eye of an archfey named Zybilna, who had forged secret pacts with some of the fiends Isolde and her companions had slain. Rather than be angry at Isolde, Zybilna was impressed by her. She enlisted a powerful fiend known only as "the Caller" to corrupt and slay all of Isolde's companions, leaving Isolde alone, bitter, and vulnerable. The insidious archfey then befriended Isolde and offered to help her forget her terrible losses. Isolde became the master of a traveling fey carnival that served as a gateway to Zybilna's domain. The carnival did what Zybilna hoped it would do: it brought comfort to Isolde and quelled her thirst for vengeance.

Zybilna and Isolde enjoyed a strong partnership for years, but as time wore on, they grew distant until their relationship finally soured. Eladrin crave change, yet Isolde felt like she was frozen in time. She wished to leave the fey carnival and pursue other dreams, but Zybilna wouldn't hear of it and secretly used [[/6. Mechanics/Spells/wish.md\|wish]] spells to make Isolde place her devotion to the carnival above her desire to leave it.

When Isolde's fey carnival crossed paths with another carnival from the Shadowfell, the eladrin found the escape she longed for. Isolde orchestrated a trade with the other carnival's owners, a pair of shadar-kai (elves native to the Shadowfell). Isolde would become the master of their carnival, and they would become the masters of hers. To appease Zybilna, this arrangement would remain in place only until the two carnivals crossed paths again.

Zybilna was intrigued enough by the shadar-kai to let Isolde go, but not without casting a spell that made Isolde forget about Zybilna and her Feywild domain, thus preventing the eladrin from divulging the archfey's secrets. As a further punishment, Zybilna sent malevolent fey creatures to hound Isolde and her Shadowfell carnival. Isolde doesn't know who is behind this petty torment, nor does she care. Her hunt for the Caller and her thirst for vengeance have become all-consuming.

```ad-statblock
title: Isolde
![[/6. Mechanics/Bestiary/Npc/Token/isolde.png#token]]
*Medium fey(elf), Any Evil Alignment*

- **Armor Class** 19 ([[/6. Mechanics/Items/scale-mail.md\|scale mail]])
- **Hit Points** `dice: 11d8 + 33|text(82)` (11d8 + 33) 
- **Speed** walk 30 ft., fly 60 ft.

|STR|DEX|CON|INT|WIS|CHA|
|:---:|:---:|:---:|:---:|:---:|:---:|
|18 (+4)|18 (+4)|16 (+3)|14 (+2)|12 (+1)|16 (+3)|

- **Proficiency Bonus** +3
- **Saving Throws** Strength +7, Constitution +6, Intelligence +5, Charisma +6
- **Skills** Deception +6, Intimidation +6, Perception +4, Stealth +7
- **Senses** darkvision 60 ft., passive Perception 14
- **Damage Resistances** cold; fire; lightning; poison; bludgeoning, piercing, slashing from nonmagical attacks
- **Languages** Abyssal, Common, Infernal
- **Challenge** 5

## Traits

***Fiendish Blessing.*** The AC of Isolde includes her Charisma bonus.

***Magic Resistance Aura.*** While holding Nepenthe, Isolde creates an aura in a 10-foot radius around her. While this aura is active, Isolde and all creatures friendly to her in the aura have advantage on saving throws against spells and other magical effects.

***Innate Spellcasting.*** Isolde's spellcasting ability is Charisma (spell save DC 14). Isolde can innately cast the following spells, requiring no material components:

**1/day**: [[/6. Mechanics/Spells/plane-shift.md\|plane shift]] (self only)

**3/day each**: [[/6. Mechanics/Spells/alter-self.md\|alter self]], [[/6. Mechanics/Spells/command.md\|command]], [[/6. Mechanics/Spells/detect-magic.md\|detect magic]]

## Actions

***Multiattack.*** Isolde makes two melee attacks or uses its Fire Ray twice.

***Nepenthe.*** *Melee Weapon Attack:* `dice: d20+10` (+10 to hit), reach 5 ft.., one target. Hit: `dice: 1d8 + 7\|avg` (`1d8 + 7`) slashing damage, or 12 (`dice: 1d10 + 7\|avg` (`1d10 + 7`)) slashing damage if used with two hands to make a melee attack. If the target is a fiend or an undead, it takes an extra 11 (`dice: 2d10\|avg` (`2d10`)) radiant damage.

***Fire Ray.*** *Ranged Spell Attack:* `dice: d20+7` (+7 to hit), range 120 ft., one target. Hit: `dice: 3d6\|avg` (`3d6`) fire damage.

***Fiendish Charm.*** One humanoid Isolde can see within 30 feet of it must succeed on a DC 14 Wisdom saving throw or be magically [[6. Mechanics/Rules/conditions.md#charmed\|charmed]] for 1 day. The [[6. Mechanics/Rules/conditions.md#charmed\|charmed]] target obeys Isolde's spoken commands. If the target suffers any harm from Isolde or another creature or receives a suicidal command from Isolde, the target can repeat the saving throw, ending the effect on itself on a success. If a target's saving throw is successful, or if the effect ends for it, the creature is immune to Isolde's Fiendish Charm for the next 24 hours.
```
^statblock