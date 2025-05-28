`BUTTON[NPC_Generate]`

```dataview
TABLE Relevant, Gender, Race, Class, Occupation, Alignment
FROM "3-Mechanics/NPCs/NPC Generation"
WHERE contains(tags, "npc")
SORT choice(Relevant = "Y", 2, choice(Relevant = "Y/N", 1, 0)) DESC
```
