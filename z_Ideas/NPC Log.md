```meta-bind-button
label: NPC Generator
icon: user-pen
style: primary
class: ""
cssStyle: ""
backgroundImage: ""
tooltip: ""
id: NPC_Generate
hidden: false
actions:
- type: runTemplaterFile
  templateFile: z_Templates/Templater/NPC Generator.md
```

```dataview
TABLE Relevant, Gender, Race, Class, Occupation, Alignment
FROM "3-Mechanics/NPCs/NPC Generation"
WHERE contains(tags, "npc")
SORT choice(Relevant = "Y", 2, choice(Relevant = "Y/N", 1, 0)) DESC
```
