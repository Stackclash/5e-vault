// Renders the Meta Bind input for one note field, as Configuration.note_fields defines it for the note's type.
// Usage in a template: `$=await dv.view('utils/noteFieldInput', {current: dv.current(), field: 'gender'})`
const { noteType, fieldsFor, inputMarkdown } = await self.require.import("z_Scripts/Dataview/utils/noteFields.js")
const { getLinkPath } = await self.require.import("z_Scripts/Dataview/utils/helpers.js")

const config = dv.page("Configuration")
const type = input.type ?? noteType(input.current?.file?.tags)
const entry = fieldsFor(config, type).find(e => e.field === input.field)
if (!entry) {
    dv.span(`\`INPUT[text:${input.field}]\``)
} else {
    const party = dv.page(getLinkPath(dv.page(getLinkPath(config?.active_campaign) ?? "")?.party) ?? "")?.file.name ?? ""
    dv.span(inputMarkdown(config, entry, party))
}
