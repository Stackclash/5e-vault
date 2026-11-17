<%*
let templateError = false
let properties = {}
let yaml
try {
  const path = require('path')
  yaml = await self.require.import('https://esm.sh/js-yaml')
  const dataview = app.plugins.getPlugin("dataview")
  const modalForm = app.plugins.getPlugin('modalforms')

  if (tp.config.run_mode !== 0) {
    throw new Error('This template can only be used to create new files.')
  }

  if (!modalForm || !modalForm.api) {
    throw new Error('Modal Forms plugin is not available')
  }

  if (!dataview || !dataview.api) {
    throw new Error('Dataview plugin is not available')
  }

  const config = dataview.api.page('Configuration')

  if (!config || !config.locations || !config.locations.players || !config.locations.parties) {
    throw new Error('Configuration for file locations is not set up correctly')
  }

  const result = await modalForm.api.openForm({
    title: "Character Setup",
    name: "character-setup",
    fields: [
      {
        name: 'party',
        label: 'Party',
        description: 'What party is this character a part of?',
        isRequired: true,
        input: {
          type: 'dataview',
          query: 'dv.pages(\'"' + config.locations.parties + '"\').file.name'
        }
      },
      {
        name: 'dndbeyond',
        label: 'DnD Beyond',
        description: 'Paste D&D Beyond character url or id here',
        input: {
          type: 'text',
          hiddent: false
        }
      }
    ]
  })

  const data = result.getData()

  let dndBeyondId
  if (isNaN(data.dndbeyond)) {
    dndBeyondId = data.dndbeyond.match(/\d+$/)[0]
  } else {
    dndBeyondId = data.dndbeyond
  }
  const character = new tp.user.dndBeyondCharacter(dndBeyondId)
  await character.initialize()

  await tp.file.move(path.posix.join(config.locations.players, character.name))

  properties = {
    obsidianUIMode: 'preview',
    statblock: true,
    active: true,
    name: character.name,
    tagline: '',
    level: character.level,
    ac: character.armorClass,
    hp: character.healthPoints.current,
    modifier: character.initiative,
    proficiency: character.proficiencyBonus,
    url: character.url,
    image: character.image,
    race: await tp.user.find_file(character.race.fullName, '5. Mechanics/Races'),
    alignment: character.alignment,
    description: character.description,
    passives: character.passives,
    proficiencies: character.proficiencies,
    speed: character.speeds.walk,
    defences: character.defences,
    background: character.background,
    classes: await Promise.all(character.classes.map(async function(characterClass) {
      return {
        ...characterClass,
        name: await tp.user.find_file(characterClass.name, '5. Mechanics/Classes'),
        subClass: await tp.user.find_file(characterClass.subClass, '5. Mechanics/Classes')
      }
    })),
    abilityScores: character.abilityScores,
    savingThrows: character.savingThrows,
    skills: character.skills,
    racialTraits: character.racialTraits,
    classFeatures: character.classFeatures,
    feats: character.feats,
    raceSpells: character.spells.race,
    classSpells: character.spells.class,
    featSpells: character.spells.feat,
    currencies: character.currencies,
    inventory: await Promise.all(character.inventory.map(async function(inv) {
      return {
        ...inv,
        name: await tp.user.find_file(inv.name, '5. Mechanics/Items')
      }
    })),
    condition: 'healthy',
    tags: ['player'],
  }
  const selectedParty = dataview.api.page(data.party)
  properties.party = `[[${selectedParty.file.path}|${selectedParty.file.name}]]`

} catch (e) {
  templateError = e.message
  console.error(e)
  new tp.obsidian.Notice(e.message, 5000)
}
-%>
<%* if (!templateError) { -%>
---
<%*
  tR += yaml.dump(tp.user.dndBeyondCharacter.toFrontmatter(properties))
-%>
---
> [!infobox]
> `$="[![Char Image](" + dv.current().image + ")](" + dv.current().url + ")"`
> ###### Bio
>  |
>  ---|---|
> **Level** | `$=dv.current().level` |
> **Party** | `INPUT[suggester(optionQuery(#party)):party]` |
> **Location** | `INPUT[suggester(optionQuery(#location)):location]` |

## `$=[dv.current().alignment, dv.current().race, dv.current().classes[0].name].join(' ')` `BUTTON[updateDnDBeyond]`
> [!gist]
> `INPUT[text(placeholder(Tagline)):tagline]`
```meta-bind-button
style: primary
label: Update From DnD Beyond
id: updateDnDBeyond
hidden: true
actions:
  - type: inlineJS
    code: |-
      const dndBeyondCharacter = await self.require.import('z_Scripts/Templater/dndBeyondCharacter.js')
      const activeFile = app.workspace.getActiveFile()
      const dndBeyondId = app.metadataCache.getFileCache(activeFile).frontmatter.url.match(/\d+$/)[0]
      const character = new dndBeyondCharacter(dndBeyondId)
      await character.initialize()
      const frontmatter = await character.generateFrontMatter()
      await app.fileManager.processFrontMatter(activeFile, (fm) => {
        for (const k of dndBeyondCharacter.LEGACY_KEYS) delete fm[k]
        Object.assign(fm, frontmatter)
      })
      new Notice(`Updated ${character.name} from D&D Beyond`)
```

```meta-bind
INPUT[select(class(tabbed), option(Sheet), option(Skills), option(Features), option(Class Features), option(Spells), option(Inventory), option(Story), option(Player-Facing), option(DM)):memory^tab]
```
> [!tabbed-box]
> > [!tab|no-t] Sheet
> > > [!infobox|n-th center wm-tl]
> > > ### Status
> > > |||||||
> > > |:---:|:---:|:---:|:---:|:---:|:---:|
> > > | **Party** | `INPUT[suggester(optionQuery(#party)):party]` | **Condition** | `INPUT[inlineSelect(option(healthy),option(injured),option(dead)):condition]` | **Location** | `INPUT[suggester(optionQuery(#location)):location]` |
> >
> > > [!infobox|left clear n-th]
> > > 
> > > |||
> > > |:---:|:---:|
> > > | **Health Points** | `$=dv.current().hp` |
> > > | **Armor Class** | `$=dv.current().ac` |
> > > | **Initiative** | `$=dv.current().modifier` |
> > > | **Speed** | `$=dv.current().speed` |
> >
> > > [!statblocks|columns]
> > > 
> > >> [!blank]
> > >> ## Ability Scores
> > >> ||| Mod ||| Mod |
> > >> |:---:|:---:|:---:|:---:|:---:|:---:|
> > >> | **Strength** | `$=dv.current().ability_scores.strength.value` | `$=dv.current().ability_scores.strength.modifier` | **Intelligence** | `$=dv.current().ability_scores.intelligence.value` | `$=dv.current().ability_scores.intelligence.modifier` |
> > >> | **Dexterity** | `$=dv.current().ability_scores.dexterity.value` | `$=dv.current().ability_scores.dexterity.modifier` | **Wisdom** | `$=dv.current().ability_scores.wisdom.value` | `$=dv.current().ability_scores.wisdom.modifier` |
> > >> | **Constitution** | `$=dv.current().ability_scores.constitution.value` | `$=dv.current().ability_scores.constitution.modifier` | **Charisma** | `$=dv.current().ability_scores.charisma.value` | `$=dv.current().ability_scores.charisma.modifier` |
> > >
> > >> [!blank]
> > >> ## Saving Throws
> > >> || Prof ||| Prof ||
> > >> |:---:|:---:|:---:|:---:|:---:|:---:|
> > >> | **Strength** | `$=dv.current().saving_throws.strength.proficiency ? '✅' : '❌'` | `$=dv.current().saving_throws.strength.value` | **Intelligence** | `$=dv.current().saving_throws.intelligence.proficiency ? '✅' : '❌'` | `$=dv.current().saving_throws.intelligence.value` |
> > >> | **Dexterity** | `$=dv.current().saving_throws.dexterity.proficiency ? '✅' : '❌'` | `$=dv.current().saving_throws.dexterity.value` | **Wisdom** | `$=dv.current().saving_throws.wisdom.proficiency ? '✅' : '❌'` | `$=dv.current().saving_throws.wisdom.value` |
> > >> | **Constitution** | `$=dv.current().saving_throws.constitution.proficiency ? '✅' : '❌'` | `$=dv.current().saving_throws.constitution.value` | **Charisma** | `$=dv.current().saving_throws.charisma.proficiency ? '✅' : '❌'` | `$=dv.current().saving_throws.charisma.value` |
> > >> **Notes**: `$=dv.current().saving_throws.notes`
> >
> > > [!infobox|center wm-tl]
> > > ## Defences
> > > | **Imunities** | **Resistances** |
> > > |:---:|:---:|
> > > | `$=dv.current().defences.immunities.length > 0 ? dv.current().defences.immunities : ""` | `$=dv.current().defences.resistances.length > 0 ? dv.current().defences.resistances : ""` |
>
> > [!tab|no-t] Skills
> > > [!infobox|wfull]
> > > ## Skills
> > > || **Prof** | **Exp** ||| **Prof** | **Exp** ||
> > > |:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
> > > | **Acrobatics (Dex)** | `$=dv.current().skills.acrobatics.proficiency ? '✅' : '❌'` | `$=dv.current().skills.acrobatics.expertise ? '✅' : '❌'` | `$=dv.current().skills.acrobatics.value` | **Medicine (Wis)** | `$=dv.current().skills.medicine.proficiency ? '✅' : '❌'` | `$=dv.current().skills.medicine.expertise ? '✅' : '❌'` | `$=dv.current().skills.medicine.value` |
> > > | **Animal Handling (Wis)** | `$=dv.current().skills.animal_handling.proficiency ? '✅' : '❌'` | `$=dv.current().skills.animal_handling.expertise ? '✅' : '❌'` | `$=dv.current().skills.animal_handling.value` | **Nature (Int)** | `$=dv.current().skills.nature.proficiency ? '✅' : '❌'` | `$=dv.current().skills.nature.expertise ? '✅' : '❌'` | `$=dv.current().skills.nature.value` |
> > > | **Arcana (Int)** | `$=dv.current().skills.arcana.proficiency ? '✅' : '❌'` | `$=dv.current().skills.arcana.expertise ? '✅' : '❌'` | `$=dv.current().skills.arcana.value` | **Perception (Wis)** | `$=dv.current().skills.perception.proficiency ? '✅' : '❌'` | `$=dv.current().skills.perception.expertise ? '✅' : '❌'` | `$=dv.current().skills.perception.value` |
> > > | **Athletics (Str)** | `$=dv.current().skills.athletics.proficiency ? '✅' : '❌'` | `$=dv.current().skills.athletics.expertise ? '✅' : '❌'` | `$=dv.current().skills.athletics.value` | **Performance (Cha)** | `$=dv.current().skills.performance.proficiency ? '✅' : '❌'` | `$=dv.current().skills.performance.expertise ? '✅' : '❌'` | `$=dv.current().skills.performance.value` |
> > > | **Deception (Cha)** | `$=dv.current().skills.deception.proficiency ? '✅' : '❌'` | `$=dv.current().skills.deception.expertise ? '✅' : '❌'` | `$=dv.current().skills.deception.value` | **Persuasion (Cha)** | `$=dv.current().skills.persuasion.proficiency ? '✅' : '❌'` | `$=dv.current().skills.persuasion.expertise ? '✅' : '❌'` | `$=dv.current().skills.persuasion.value` |
> > > | **History (Int)** | `$=dv.current().skills.history.proficiency ? '✅' : '❌'` | `$=dv.current().skills.history.expertise ? '✅' : '❌'` | `$=dv.current().skills.history.value` | **Religion (Int)** | `$=dv.current().skills.religion.proficiency ? '✅' : '❌'` | `$=dv.current().skills.religion.expertise ? '✅' : '❌'` | `$=dv.current().skills.religion.value` |
> > > | **Insight (Wis)** | `$=dv.current().skills.insight.proficiency ? '✅' : '❌'` | `$=dv.current().skills.insight.expertise ? '✅' : '❌'` | `$=dv.current().skills.insight.value` | **Sleight of Hand (Dex)** | `$=dv.current().skills.sleight_of_hand.proficiency ? '✅' : '❌'` | `$=dv.current().skills.sleight_of_hand.expertise ? '✅' : '❌'` | `$=dv.current().skills.sleight_of_hand.value` |
> > > | **Intimidation (Cha)** | `$=dv.current().skills.intimidation.proficiency ? '✅' : '❌'` | `$=dv.current().skills.intimidation.expertise ? '✅' : '❌'` | `$=dv.current().skills.intimidation.value` | **Stealth (Dex)** | `$=dv.current().skills.stealth.proficiency ? '✅' : '❌'` | `$=dv.current().skills.stealth.expertise ? '✅' : '❌'` | `$=dv.current().skills.stealth.value` |
> > > | **Investigation (Int)** | `$=dv.current().skills.investigation.proficiency ? '✅' : '❌'` | `$=dv.current().skills.investigation.expertise ? '✅' : '❌'` | `$=dv.current().skills.investigation.value` | **Survival (Wis)** | `$=dv.current().skills.survival.proficiency ? '✅' : '❌'` | `$=dv.current().skills.survival.expertise ? '✅' : '❌'` | `$=dv.current().skills.survival.value` |
> >
> > > [!infobox|left n-th]
> > > ## Passive Skills
> > > |||
> > > |:---:|:---:|
> > > | **Perception** | `$=dv.current().passives.perception` |
> > > | **Investigation** | `$=dv.current().passives.investigation` |
> > > | **Insight** | `$=dv.current().passives.insight` |
>
> > [!tab|no-t] Features
> > > [!cards|dataview wfull]
> > > ## Classes
> > > ```dataview
> > > TABLE WITHOUT ID "Class: " + classes.name AS Name, "SubClass: " + classes.subclass, "Level: " + classes.level AS Level
> > > FLATTEN classes
> > > WHERE this.file.name = file.name
> > > ```
> >
> > > [!cards|dataview wfull]
> > > ## Racial Traits
> > > ```dataview
> > > TABLE WITHOUT ID "**"+racial_traits.name+"**" AS Name, racial_traits.description AS Description
> > > FLATTEN racial_traits
> > > WHERE this.file.name = file.name
> > > ```
> >
> > > [!cards|dataview wfull]
> > > ## Feats
> > > ```dataview
> > > TABLE WITHOUT ID "**"+feats.name+"**",
> > > feats.description
> > > FLATTEN feats
> > > WHERE this.file.name = file.name
> > > ```
>
> > [!tab|no-t] Class Features
> > > [!cards|dataview wfull]
> > > ## Class Features
> > > ```dataview
> > > TABLE WITHOUT ID "**"+class_features.name+"**",
> > > class_features.description
> > > FLATTEN class_features
> > > WHERE this.file.name = file.name
> > > ```
>
> > [!tab|no-t] Spells
> > ```dataviewjs
> > const result = []
> > const spellLevels = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
> > const casterClasses = dv.current().class_spells ?? []
> > casterClasses.map((classSpellConfig, classIndex) => {
> >   const classSpellLevels = spellLevels.filter(level => classSpellConfig.spell_slots.max[level-1] > 0 || level === 0)
> >   dv.header(3, classSpellConfig.name)
> >   classSpellLevels.forEach(level => {
> >     let levelText = ''
> >     levelText += `>> ### ${level === 0 ? `Cantrips` : `Level ${level}`}\n`
> >     if (level > 0) {
> >       const totalSlots = classSpellConfig.spell_slots.max[level-1]
> >       const usedSlots = classSpellConfig.spell_slots.used[level-1]
> >       levelText += `>> ${`<input type="checkbox" disabled=true checked=true/>`.repeat(usedSlots)}${`<input type="checkbox" disabled=true/>`.repeat(totalSlots-usedSlots)}\n>>\n`
> >     }
> >     levelText += `>> ${classSpellConfig.spells.filter(spell => spell.level === (level)).map(spell => spell.name).join(`\n>>\n>> `)}`
> >     result.push(levelText)
> >   })
> > })
> > dv.paragraph(`> [!cards|wfull]\n${result.join(`\n>\n`)}`)
> > for (const [title, list] of [['Race spells', dv.current().race_spells], ['Feat spells', dv.current().feat_spells]]) {
> >   if (Array.isArray(list) && list.length) {
> >     dv.header(3, title)
> >     dv.list(list.map(sp => `${sp.name} (${sp.level === 0 ? 'cantrip' : 'level ' + sp.level})`))
> >   }
> > }
> > ```
>
> > [!tab|no-t] Inventory
> > ## Weapons
> > ```dataviewjs
> > const weapons = dv.current().inventory.filter(inv => inv.type === 'Weapon')
> >
> > dv.table([
> >   'Name',
> >   'Equipped',
> >   'Attuned',
> >   'One Handed Damage',
> >   'Two Handed Damage',
> >   'Range',
> >   'Damage Type'
> >   ], weapons.map(inv => {
> >   return [
> >     inv.name,
> >     inv.equipped ? '✅' : '❌',
> >     inv.attuned ? '✅' : '❌',
> >     dv.page(inv.name.path)['one-hand-damage'],
> >     dv.page(inv.name.path)['two-hand-damage'],
> >     dv.page(inv.name.path).range,
> >     inv.damage_type
> >   ]
> > }))
> > ```
> >
> > ## Armor
> > ```dataviewjs
> > const armor = dv.current().inventory.filter(inv => inv.type === 'Armor')
> >
> > dv.table(['Name', 'Equipped', 'Attuned', 'Armor Class'], armor.map(inv => {
> >   return [
> >     inv.name,
> >     inv.equipped ? '✅' : '❌',
> >     inv.attuned ? '✅' : '❌',
> >     dv.page(inv.name.path).armorClass || inv.armor_class]
> > }))
> > ```
> >
> > <!-- Group by rarity? -->
> > > [!cards|dataview 4 wfull]
> > > ## Inventory
> > > ```dataview
> > > TABLE WITHOUT ID "**"+inventory.name+"**",
> > > "Quantity: "+inventory.quantity
> > > FLATTEN inventory
> > > WHERE this.file.name = file.name
> > > AND inventory.type != "Armor"
> > > AND inventory.type != "Weapon"
> > > ```
>
> > [!tab|no-t] Story
> > > [!infobox|center n-th wm-tl]
> > > ## Description
> > > |||
> > > |:---:|:---:|:---:|:---:|:---:|:---:|
> > > | **Race** | `$=dv.current().race` | **Height** | `$=dv.current().description.height` | **Skin** | `$=dv.current().description.skin` |
> > > | **Gender** | `$=dv.current().description.gender` | **Weight** | `$=dv.current().description.weight` | **Hair** | `$=dv.current().description.hair` |
> > > | **Age** | `$=dv.current().description.age` | **Size** | `$=dv.current().description.size` | **Eyes** | `$=dv.current().description.eyes` |
> >
> > ## Background (`$=dv.current().background.background.name`)
> > `$=dv.current().background.background.description`
> > ## Backstory
> > `$=dv.current().background.backstory`
> > ## Organization
> > `$=dv.current().background.organizations`
> > ## Allies
> > `$=dv.current().background.allies`
> > ## Enemies
> > `$=dv.current().background.enemies`
> >
> > ## Additional Notes From Players
> > `$=dv.current().background.notes`
>
<% tp.file.include("[[z_Templates/Partials/Player-Facing]]") %>
>
> > [!dm] DM
> > `BUTTON[edit-dm-notes]`
> > ## DM Notes

```meta-bind-button
label: Edit DM Notes
icon: pencil
style: default
id: edit-dm-notes
hidden: true
actions:
  - type: js
    file: z_Scripts/Meta Bind/editSection.js
    args:
      heading: DM Notes
      prefix: "> > "
```
```meta-bind-button
label: ""
icon: maximize-2
tooltip: Edit Summary in a larger window
style: default
id: pop-summary
hidden: true
actions:
  - type: js
    file: z_Scripts/Meta Bind/popOutEditor.js
    args:
      field: summary
      label: Summary
```
<%* } else { -%>


> [!Error] Error Executing Template
> <% templateError %>


<%* } -%>