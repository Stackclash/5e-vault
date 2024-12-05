---
relationships: []
---
# Required Plugins
- Dataview (to build the mermaid diagram)
- Templater (to add and remove relationships easily)
- Meta Bind (to make the buttons work and call the templates)

# How to Use
1. Update the `Add Relationship` template to pull the list of NPCs (see templates on where to edit)
2. Place `Add Relationship` and `Remove Relationship` in your Templater template folder
3. Place `npcRelationships.js` in your Dataview scripts folder
4. That's it

# How it Works
The buttons call the `insert-templater` command and insert the text to select the correct template. Just hit `Enter` after clicking the button.
It will display 2 input menus. The first is to select the NPC to add a relationship with and the second is to select the type of relationship.
Adding a relationship also adds the opposite relationship to the NPC you create the relationship with. And removing the relationship also removes it from the associated NPC.
ie. You add a relationship on Bob to denote he is the son of Fred. Fred will get the relationship of father to Bob. This configuration is handled in the `Add Relationship` template.
The template also looks at the `sex` frontmatter of the connected NPC. If it doesn't exist it'll ask you to clarify which one to use. ie. Fred being either father or mother of Bob

## Relationships
`BUTTON[add-relationship,remove-relationship]`
```meta-bind-button
style: primary
label: Add Relationship
id: add-relationship
hidden: true
actions:
  - type: command
    command: templater-obsidian:insert-templater
  - type: input
    str: "Add Relationship"
```
```meta-bind-button
style: destructive
label: Remove Relationship
id: remove-relationship
hidden: true
actions:
  - type: command
    command: templater-obsidian:insert-templater
  - type: input
    str: "Remove Relationship"
```

`$=await dv.view("npcRelationships", { current: dv.current() })`