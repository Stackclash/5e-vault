const { generateMetaBindInput } = await self.require.import("z_Scripts/Dataview/utils/generateMetaBindInput.js")
const currentPage = input.current
const type = input.type || 'text'
const path = input.path || ''
const field = input.field
const options = input.options || []

const mode = app.workspace.getActiveFileView().currentMode.type

console.log("Editing View Mode:", mode)
console.log("Input:", input)

if (mode === "source") {
    dv.span(generateMetaBindInput({type, path, field, options}))
} else if (mode === "preview") {
    dv.span(currentPage.test)
}