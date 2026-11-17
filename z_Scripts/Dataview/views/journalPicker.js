// Session Prep: Journal picker limited to this prep's campaign (its Session Prep/<Campaign>/ folder)
// and that campaign's party, newest first. A party can carry on into a new campaign, and a campaign
// can be rerun with a new party, so both filters apply.
// Usage: `$=await dv.view('views/journalPicker', {current: dv.current()})`
const { getLinkPath } = await self.require.import("z_Scripts/Dataview/utils/helpers.js")
const { generateMetaBindInput } = await self.require.import("z_Scripts/Dataview/utils/generateMetaBindInput.js")

const config = dv.page("Configuration")
const trim = p => String(p ?? "").replace(/\/+$/, "")
const campaignName = input.current.file.folder.split("/").pop()
const campaign = dv.pages(`"${trim(config?.locations?.campaigns)}"`).where(c => c.file.name === campaignName).first()
const partyPath = getLinkPath(campaign?.party)

// Meta Bind single-quoted argument: escape backslashes and single quotes (journal titles carry apostrophes).
const quote = s => `'${String(s).replace(/\\/g, "\\\\").replace(/'/g, "\\'")}'`
const journals = campaign && partyPath
    ? dv.pages(`"${trim(config?.locations?.journals)}/${campaignName}"`)
        .where(j => getLinkPath(j.party) === partyPath)
        .sort(j => Number(j.session_number) || 0, "desc")
        .array()
    : []

dv.span(generateMetaBindInput({
    type: "suggester",
    options: journals.map(j => `option(${quote(`[[${j.file.path}|${j.file.name}]]`)}, ${quote(j.file.name)})`),
    field: "journal",
}))
