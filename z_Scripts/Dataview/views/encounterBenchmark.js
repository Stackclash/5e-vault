const currentPage = input.current
const members = dv.pages('#player').filter(p => p.active && currentPage.file.path === p.party.path)
const levelTotal = members.level.array().reduce((a, b) => a + b)
const levelAverage = levelTotal / members.length
let encounterBenchmark = 0
let singleMonsterEncounterBenchmark = 0
let powerfulPartyEncounterBenchmark = 'N/A'

if (levelAverage >= 17) {
  powerfulPartyEncounterBenchmark = levelTotal
} else if (levelAverage > 10) {
  powerfulPartyEncounterBenchmark = .75 * levelTotal
}

if (levelAverage > 4) {
  encounterBenchmark = levelTotal / 2
  singleMonsterEncounterBenchmark = 1.5 * levelAverage
} else {
  encounterBenchmark = levelTotal / 4
  singleMonsterEncounterBenchmark = levelAverage
}

dv.table([], [
  ['Encounter', Math.floor(encounterBenchmark)],
  ['Single Monster', Math.floor(singleMonsterEncounterBenchmark)],
  ['Powerful Party', typeof powerfulPartyEncounterBenchmark==='string' ? powerfulPartyEncounterBenchmark : Math.floor(powerfulPartyEncounterBenchmark)]
])