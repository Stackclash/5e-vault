---
obsidianUIMode: preview
gist: "x"
condition: injured
---
**T9.** Press the button. Do both fields open pre-filled (`x`, `injured`)? Does Enter submit? After submitting with changed values, do `gist` and `condition` update?

```meta-bind-button
label: Edit gist and condition
style: primary
actions:
  - type: inlineJS
    code: |-
      const file = app.workspace.getActiveFile()
      const fm = app.metadataCache.getFileCache(file)?.frontmatter ?? {}
      const result = await app.plugins.plugins.modalforms.api.openForm({
        title: 'T9',
        fields: [
          { name: 'gist', label: 'Gist', input: { type: 'text' } },
          { name: 'condition', label: 'Condition', input: { type: 'text' } }
        ]
      }, { values: { gist: fm.gist, condition: fm.condition } })
      if (result.status !== 'ok') return
      const data = result.getData()
      await app.fileManager.processFrontMatter(file, f => { f.gist = data.gist; f.condition = data.condition })
```
