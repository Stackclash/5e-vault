/**
 * Shared template initialization module for Templater templates.
 * Extracts common boilerplate: plugin validation, config loading, modal form handling.
 *
 * Usage in a Templater template:
 *   const init = tp.user.templateInit()
 *   const { dataview, modalForm, config, path } = init.getPlugins(tp, ['preps', 'parties'])
 *   const data = await init.openForm(modalForm, { title: "Setup", fields: [...] })
 *   await init.moveFile(tp, config.locations.preps, data.name)
 */

/**
 * Validates that required Obsidian plugins are loaded and returns them.
 * @param {object} tp - Templater object
 * @param {string[]} requiredConfigPaths - Config location keys to validate (e.g., ['preps', 'parties'])
 * @param {object} [options] - Options
 * @param {boolean} [options.requireModalForms=true] - Whether to require Modal Forms plugin
 * @returns {{ dataview: object, modalForm: object|null, config: object, path: object }}
 */
function getPlugins(tp, requiredConfigPaths = [], options = {}) {
    const { requireModalForms = true } = options
    const path = require('path')

    if (tp.config.run_mode !== 0) {
        throw new Error('This template can only be used to create new files.')
    }

    const dataview = app.plugins.getPlugin("dataview")
    if (!dataview || !dataview.api) {
        throw new Error('Dataview plugin is not available')
    }

    let modalForm = null
    if (requireModalForms) {
        modalForm = app.plugins.getPlugin('modalforms')
        if (!modalForm || !modalForm.api) {
            throw new Error('Modal Forms plugin is not available')
        }
    }

    const config = dataview.api.page('Configuration')
    if (!config || !config.locations) {
        throw new Error('Configuration for file locations is not set up correctly')
    }

    for (const key of requiredConfigPaths) {
        if (!config.locations[key]) {
            throw new Error(`Configuration for file locations is not set up correctly (missing: ${key})`)
        }
    }

    return {
        dataview: dataview.api,
        modalForm: modalForm ? modalForm.api : null,
        config,
        path
    }
}

/**
 * Opens a modal form and returns the submitted data. Throws if cancelled.
 * @param {object} modalFormApi - The Modal Forms API object
 * @param {object} formConfig - Form configuration (title, fields, etc.)
 * @returns {Promise<object>} - The form data
 */
async function openForm(modalFormApi, formConfig) {
    const result = await modalFormApi.openForm(formConfig)

    if (result.status === 'cancelled') {
        throw new Error('Modal was Cancelled')
    }

    return result.getData()
}

/**
 * Moves the current template file to the target location.
 * @param {object} tp - Templater object
 * @param {string} basePath - Base directory path
 * @param {string} fileName - Target file name
 */
async function moveFile(tp, basePath, fileName) {
    const path = require('path')
    await tp.file.move(
        path.posix.join(basePath, fileName),
        tp.file.find_tfile(tp.file.title)
    )
}

module.exports = function() { return { getPlugins, openForm, moveFile } }
