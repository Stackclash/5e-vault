---
obsidianUIMode: preview
coins_copper: 1000
coins_silver: 500
coins_electrum: 1
coins_gold: 0
coins_platinum: 0
party_size: 5
---

# Amount
 
| Type     | Input                         | Copper                       | Silver                      | Electrum                   | Gold                       | Platinum                   |
| -------- | ----------------------------- | ---------------------------- | --------------------------- | -------------------------- | -------------------------- | -------------------------- |
| Copper   | `INPUT[number:coins_copper]`   | `VIEW[{coins_copper}]`        | `VIEW[{coins_copper}/10]`    | `VIEW[{coins_copper}/50]`   | `VIEW[{coins_copper}/100]`  | `VIEW[{coins_copper}/1000]` |
| Silver   | `INPUT[number:coins_silver]`   | `VIEW[{coins_silver}*10]`     | `VIEW[{coins_silver}]`       | `VIEW[{coins_silver}/5]`    | `VIEW[{coins_silver}/10]`   | `VIEW[{coins_silver}/100]`  |
| Electrum | `INPUT[number:coins_electrum]` | `VIEW[{coins_electrum}*50]`   | `VIEW[{coins_electrum}*5]`   | `VIEW[{coins_electrum}]`    | `VIEW[{coins_electrum}/2]`  | `VIEW[{coins_electrum}/20]` |
| Gold     | `INPUT[number:coins_gold]`     | `VIEW[{coins_gold}*100]`      | `VIEW[{coins_gold}*10]`      | `VIEW[{coins_gold}*2]`      | `VIEW[{coins_gold}]`        | `VIEW[{coins_gold}/10]`     |
| Platinum | `INPUT[number:coins_platinum]` | `VIEW[{coins_platinum}*1000]` | `VIEW[{coins_platinum}*100]` | `VIEW[{coins_platinum}*20]` | `VIEW[{coins_platinum}*10]` | `VIEW[{coins_platinum}]`    |
 
 ## Total Converted Value
 
 Party Size: `INPUT[number:party_size]`  
 
| Type     | Total                                                                                                           | Total Per Player                                                                                                            |
| -------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| Copper   | `VIEW[{coins_copper}+({coins_silver}*10)+({coins_electrum}*50)+({coins_gold}*100)+({coins_platinum}*1000)]`          | `VIEW[({coins_copper}+({coins_silver}*10)+({coins_electrum}*50)+({coins_gold}*100)+({coins_platinum}*1000))/{party_size}]`        |
| Silver   | `VIEW[(({coins_copper}+({coins_silver}*10)+({coins_electrum}*50)+({coins_gold}*100)+({coins_platinum}*1000))/10)]`   | `VIEW[(({coins_copper}+({coins_silver}*10)+({coins_electrum}*50)+({coins_gold}*100)+({coins_platinum}*1000))/10)/{party_size}]`   |
| Electrum | `VIEW[(({coins_copper}+({coins_silver}*10)+({coins_electrum}*50)+({coins_gold}*100)+({coins_platinum}*1000))/50)]`   | `VIEW[(({coins_copper}+({coins_silver}*10)+({coins_electrum}*50)+({coins_gold}*100)+({coins_platinum}*1000))/50)/{party_size}]`   |
| Gold     | `VIEW[(({coins_copper}+({coins_silver}*10)+({coins_electrum}*50)+({coins_gold}*100)+({coins_platinum}*1000))/100)]`  | `VIEW[(({coins_copper}+({coins_silver}*10)+({coins_electrum}*50)+({coins_gold}*100)+({coins_platinum}*1000))/100)/{party_size}]`  |
| Platinum | `VIEW[(({coins_copper}+({coins_silver}*10)+({coins_electrum}*50)+({coins_gold}*100)+({coins_platinum}*1000))/1000)]` | `VIEW[(({coins_copper}+({coins_silver}*10)+({coins_electrum}*50)+({coins_gold}*100)+({coins_platinum}*1000))/1000)/{party_size}]` |