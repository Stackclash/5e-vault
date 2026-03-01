/**
 * Reusable form field definitions for Modal Forms.
 * Each function returns a field config object ready for use in modalForm.openForm().
 *
 * Usage:
 *   const fields = tp.user.formFields()
 *   const form = { title: "NPC", fields: [fields.name("NPC Name"), fields.alignment(), fields.location(dv)] }
 */

/** Text input for a name field */
function name(label = "Name", description = "") {
    return {
        name: "name",
        label,
        description: description || `Name of ${label}`,
        isRequired: true,
        input: { type: "text" }
    }
}

/** Select input for alignment */
function alignment() {
    const options = [
        'Lawful Good', 'Neutral Good', 'Chaotic Good',
        'Lawful Neutral', 'Neutral', 'Chaotic Neutral',
        'Lawful Evil', 'Neutral Evil', 'Chaotic Evil'
    ]
    return {
        name: "alignment",
        label: "Alignment",
        description: "Alignment",
        isRequired: true,
        input: {
            type: "select",
            options: options.map(a => ({ label: a, value: a })),
            source: "fixed"
        }
    }
}

/** Select input for gender */
function gender() {
    return {
        name: "gender",
        label: "Gender",
        description: "Gender",
        isRequired: true,
        input: {
            type: "select",
            options: [
                { label: 'male', value: 'male' },
                { label: 'female', value: 'female' }
            ],
            source: "fixed"
        }
    }
}

/** Number input for age */
function age() {
    return {
        name: "age",
        label: "Age",
        description: "Age",
        isRequired: true,
        input: { type: "number" }
    }
}

/** Textarea input */
function textArea(fieldName, label, description, required = false) {
    return {
        name: fieldName,
        label,
        description: description || label,
        isRequired: required,
        input: { type: "textarea" }
    }
}

/** Date picker input */
function date(label = "Date", description = "Date", required = false) {
    return {
        name: "date",
        label,
        description,
        isRequired: required,
        input: { type: "date", hidden: false }
    }
}

/**
 * Select input populated from a Dataview query (pages with a tag).
 * @param {object} dv - Dataview API
 * @param {string} fieldName - Form field name
 * @param {string} label - Display label
 * @param {string} tag - Tag to query (e.g., '#location')
 * @param {string} [description] - Field description
 */
function tagSelect(dv, fieldName, label, tag, description) {
    const pages = dv.pages(tag).sort(p => p.file.name, 'asc').array()
    return {
        name: fieldName,
        label,
        description: description || label,
        isRequired: true,
        input: {
            type: "select",
            options: pages.map(p => ({ label: p.file.name, value: p.file.link.toString() })),
            source: "fixed"
        }
    }
}

/**
 * Multi-select input populated from a Dataview query.
 * @param {object} dv - Dataview API
 * @param {string} fieldName - Form field name
 * @param {string} label - Display label
 * @param {string} tag - Tag to query (e.g., '#npc')
 * @param {string} [description] - Field description
 */
function tagMultiSelect(dv, fieldName, label, tag, description) {
    const pages = dv.pages(tag).sort(p => p.file.name, 'asc').array()
    return {
        name: fieldName,
        label,
        description: description || label,
        isRequired: true,
        input: {
            type: "multiselect",
            source: "fixed",
            multi_select_options: pages.map(p => p.file.name)
        }
    }
}

/**
 * Select input populated from a Dataview folder query.
 * @param {object} dv - Dataview API
 * @param {string} fieldName - Form field name
 * @param {string} label - Display label
 * @param {string} folderPath - Folder path to query
 * @param {string} [description] - Field description
 */
function folderSelect(dv, fieldName, label, folderPath, description) {
    return {
        name: fieldName,
        label,
        description: description || label,
        isRequired: true,
        input: {
            type: "dataview",
            query: `dv.pages('"${folderPath}"').file.name`
        }
    }
}

module.exports = {
    name, alignment, gender, age, textArea, date,
    tagSelect, tagMultiSelect, folderSelect
}
