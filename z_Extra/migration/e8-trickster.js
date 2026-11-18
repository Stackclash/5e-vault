// E8-6b / E8-20 (DM, 2026-11-17): join the DM's split Trickster God Locked Canon bullet; add the compact fact.
// Usage: node e8-trickster.js [--dry-run]
const fs = require('fs')
const path = require('path')
const { VAULT, read, write } = require('./fm')
const dryRun = process.argv.includes('--dry-run')
const from = "- Roark's father is a Trickster God\n- bound by the gods' ancient non-interference compact The Trickster God seeks to get Roark's help and act as his mortal agent.\n"
const to = "- Roark's father is a Trickster God, bound by the gods' ancient non-interference compact; he seeks Roark's help as his mortal agent.\n"
const camp = read(path.join(VAULT, '1. DM Toolkit/Campaigns/The Hunt for Vecna.md'))
if (camp.body.split(from).length !== 2) throw new Error('split bullet not found exactly once')
camp.body = camp.body.replace(from, () => to)
write(camp, { dryRun })
console.log(`${dryRun ? '[dry] ' : ''}campaign: bullet joined`)
