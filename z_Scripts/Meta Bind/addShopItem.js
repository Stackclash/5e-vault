/**
 * Meta Bind button action: add a single item to a note's frontmatter array by
 * searching a folder in a fuzzy popup.
 *
 * Opens an Obsidian FuzzySuggestModal focused on the markdown files under
 * `folder`, and appends the chosen file to the `field` frontmatter array as a
 * wikilink (`[[path|name]]`) — the same format `generateShopInventory.js` uses.
 * This replaces the long `inlineListSuggester` INPUT on shop notes.
 *
 * Usage in meta-bind-button actions:
 *   - type: js
 *     file: z_Scripts/Meta Bind/addShopItem.js
 *     args:
 *       field: items                 # frontmatter array to append to (default: items)
 *       folder: 5. Mechanics/Items   # folder to search (default: 5. Mechanics/Items)
 */

const { FuzzySuggestModal } = require("obsidian")

const field = context.args.field || "items"
const folder = (context.args.folder || "5. Mechanics/Items").replace(/\/$/, "")

const files = app.vault
    .getMarkdownFiles()
    .filter((f) => f.path.startsWith(folder + "/"))
    .sort((a, b) => a.basename.localeCompare(b.basename))

class ItemSuggestModal extends FuzzySuggestModal {
    getItems() {
        return files
    }
    getItemText(file) {
        return file.basename
    }
    onChooseItem(file) {
        app.fileManager.processFrontMatter(context.file, (fm) => {
            if (!Array.isArray(fm[field])) fm[field] = fm[field] ? [fm[field]] : []
            const link = `[[${file.path}|${file.basename}]]`
            if (!fm[field].includes(link)) fm[field].push(link)
        })
    }
}

const modal = new ItemSuggestModal(app)
modal.setPlaceholder(`Add item from ${folder}`)
modal.open()
