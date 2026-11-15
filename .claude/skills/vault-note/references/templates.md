# Editing templates

Templates live in `z_Templates/Templater/`. Note-creating templates share one pattern:

```javascript
const init = tp.user.templateInit()      // z_Scripts/Templater/templateInit.js
const fields = tp.user.formFields()      // z_Scripts/Templater/formFields.js
const { dataview, modalForm, config, path } = init.getPlugins(tp, ['requiredConfigKey'])
const data = await init.openForm(modalForm, { title: "...", fields: [...] })
await init.moveFile(tp, config.locations.myPath, data.name)
```

`config` is `1. DM Toolkit/Configuration.md` frontmatter; `config.locations.*` are folder paths.

## The NPC mirror

`z_Extra/ttrpg-convert/templates/monster.txt` has an `{#if resource.isNpc}` branch that mirrors `z_Templates/Templater/World Building/NPC.md`, so bulk-imported NPCs match hand-made ones.

**Any edit to NPC.md's frontmatter keys, infobox, sections, inputs, or buttons needs the equivalent edit in that branch.** Translate, do not paste: Qute uses `{#if}`, `{#for}`, `{resource.field}`; literal braces in the output are escaped as `\{` and `\}`. Say in your summary that both files changed. No other template has a mirror.

## Meta Bind array buttons

Use the dispatcher for any button that edits a frontmatter array:

```yaml
actions:
  - type: js
    file: z_Scripts/Meta Bind/arrayActions.js
    args: { action: add, field: items }      # add | remove | moveUp | moveDown; index for all but add
```

The older `addItem.js`, `removeItem.js`, `moveUp.js`, `moveDown.js` are still referenced by existing notes; do not use them in new buttons and do not delete them.

## Scripts by runtime

| Runtime | Path |
|---|---|
| Datacore (JSX) | `z_Scripts/Datacore/` |
| Dataview views | `z_Scripts/Dataview/views/` (called as `dv.view("views/…")`) |
| Dataview helpers | `z_Scripts/Dataview/utils/`, `data/`, `render/` |
| Node CLI | `z_Scripts/JS/` |
| Meta Bind | `z_Scripts/Meta Bind/` |
| Templater helpers | `z_Scripts/Templater/` |
| Agent index and lint | `.claude/skills/vault-lint/scripts/` |

A field rename is not done until every script, Base, and template that reads the field is updated. Grep `z_Scripts`, `z_Bases`, `z_Templates`, and note bodies for the old name first.
