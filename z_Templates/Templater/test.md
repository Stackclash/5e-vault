<%*
const { dump } = require('js-yaml')

const character = new tp.user.dndBeyondCharacter(118587843)
await character.initialize()

const properties = {
  obsidianUIMode: 'preview',
  statblock: true,
  name: character.name,
  level: character.level,
  ac: character.armorClass,
  hp: character.healthPoints.current,
  modifier: character.initiative,
  proficiency: character.proficiencyBonus,
  url: character.url,
  image: character.image,
  race: tp.user.find_file(character.race.fullName, '5. Mechanics/Races'),
  alignment: "character.alignment",
  description: character.description,
  passives: character.passives,
  proficiencies: character.proficiencies,
  speed: character.speeds.walk,
  defences: character.defences,
  background: character.background,
  classes: character.classes.map(function(class) {
    return {
      ...class,
      name: tp.user.find_file(class.name, '5. Mechanics/Classes'),
      subClass: tp.user.find_file(class.subClass, '5. Mechanics/Classes')
    }
  }),
  abilityScores: character.abilityScores,
  savingThrows: character.savingThrows,
  skills: character.skills,
  racialTraits: character.racialTraits,
  classFeatures: character.classFeatures,
  feats: character.feats,
  raceSpells: character.spells.race,
  classSpells: character.spells.class.map(function(classSpell) {
    return {
      ...classSpell,
      name: tp.user.find_file(classSpell.name, '5. Mechanics/Spells')
    }
  }),
  currencies: character.currencies,
  inventory: character.inventory.map(function(inv) {
    return {
      ...inv,
      name: tp.user.find_file(inv.name, '5. Mechanics/Items')
    }
  }),
  party: selectedParty,
  condition: condition,
  location: location,
  tags: ['player'],
}
-%>
<% dump(properties) %>