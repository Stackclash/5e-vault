const { getPlayers } = await self.require.import("z_Scripts/Dataview/data/players.js")
const { renderTable } = await self.require.import("z_Scripts/Dataview/render/tables.js")

const currentPath = input.current.file.path
const members = getPlayers({ partyPath: currentPath, activeOnly: true })
const levelTotal = members.reduce((sum, m) => sum + (m.level || 0), 0)
const levelAverage = members.length > 0 ? levelTotal / members.length : 0

let encounterBenchmark = 0
let singleMonsterEncounterBenchmark = 0
let powerfulPartyEncounterBenchmark = "N/A"

if (levelAverage >= 17) {
    powerfulPartyEncounterBenchmark = levelTotal
} else if (levelAverage > 10) {
    powerfulPartyEncounterBenchmark = Math.floor(0.75 * levelTotal)
}

if (levelAverage > 4) {
    encounterBenchmark = levelTotal / 2
    singleMonsterEncounterBenchmark = 1.5 * levelAverage
} else {
    encounterBenchmark = levelTotal / 4
    singleMonsterEncounterBenchmark = levelAverage
}

renderTable(dv.container, [], [
    ["Encounter", Math.floor(encounterBenchmark)],
    ["Single Monster", Math.floor(singleMonsterEncounterBenchmark)],
    ["Powerful Party", typeof powerfulPartyEncounterBenchmark === "string"
        ? powerfulPartyEncounterBenchmark
        : Math.floor(powerfulPartyEncounterBenchmark)],
])