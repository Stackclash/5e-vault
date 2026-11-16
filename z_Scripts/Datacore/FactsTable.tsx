// Reusable Datacore view: edits the current note's `facts` list in place.
// One row per fact (text, learned-by-the-active-party, locked, delete) under an "Add Fact" button,
// like the vault's other list editors (DM, 2026-11-16; replaces the empty-last-row idea in Q6).
//
// Load from a note's `datacorejsx` block:
//   const { FactsTable } = await dc.require("z_Scripts/Datacore/FactsTable.tsx")
//   return function View() { return <FactsTable /> }

const { generateMetaBindInput } = await self.require.import("z_Scripts/Dataview/utils/generateMetaBindInput.js")

function buttonMarkdown(args, { style = "destructive", label = "", icon, tooltip }) {
  return [
    "```meta-bind-button",
    `style: ${style}`,
    `label: ${JSON.stringify(label)}`,
    ...(icon ? [`icon: ${icon}`] : []),
    ...(tooltip ? [`tooltip: ${tooltip}`] : []),
    "actions:",
    "  - type: js",
    "    file: z_Scripts/Meta Bind/arrayActions.js",
    "    args:",
    ...Object.entries(args).map(([k, v]) => `      ${k}: ${typeof v === "object" ? JSON.stringify(v) : v}`),
    "```",
  ].join("\n")
}

function FactsTable() {
  const note = dc.useCurrentFile()
  const sourcePath = note.$path

  const config = dc.useQuery(`@page and $name = "Configuration"`)[0]
  const campaignPath = config?.value("active_campaign")?.path ?? ""
  const campaign = dc.useQuery(`@page and $path = "${campaignPath}"`)[0]
  const partyPath = campaign?.value("party")?.path ?? ""
  const party = partyPath.split("/").pop()?.replace(/\.md$/, "") ?? ""

  const raw = note.value("facts")
  const facts = Array.isArray(raw) ? raw : []
  const md = (content) => <dc.Markdown content={content} sourcePath={sourcePath} inline={false} />
  const addButton = md(buttonMarkdown(
    { action: "add", field: "facts", template: { text: "", learned: {} } },
    { style: "primary", label: "Add Fact" }))

  const rows = facts.map((fact, i) => ({ i, fact }))
  const columns = [
    {
      id: "Fact",
      value: ({ i }) => md(`\`INPUT[textArea:facts[${i}].text]\``),
    },
    {
      id: party ? `Learned (${party})` : "Learned",
      value: ({ i }) => party
        ? md(generateMetaBindInput({
            type: "suggester",
            options: ["optionQuery(#session-journal)"],
            field: ["facts", i, "learned", party],
          }))
        : "",
    },
    {
      id: "Locked",
      width: "minimum",
      value: ({ i }) => md(`\`INPUT[toggle:facts[${i}].locked]\``),
    },
    {
      id: "",
      width: "minimum",
      value: ({ i }) => md(buttonMarkdown({ action: "moveUp", field: "facts", index: i }, { style: "default", icon: "move-up", tooltip: "Move up" })),
    },
    {
      id: " ",
      width: "minimum",
      value: ({ i }) => md(buttonMarkdown({ action: "moveDown", field: "facts", index: i }, { style: "default", icon: "move-down", tooltip: "Move down" })),
    },
    {
      id: "  ",
      width: "minimum",
      value: ({ i }) => md(buttonMarkdown({ action: "remove", field: "facts", index: i }, { icon: "x", tooltip: "Delete fact" })),
    },
  ]

  return (
    <div>
      {addButton}
      {rows.length > 0 && <dc.Table rows={rows} columns={columns} />}
    </div>
  )
}

return { FactsTable }
