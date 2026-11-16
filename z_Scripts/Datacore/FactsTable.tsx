// Reusable Datacore view: edits the current note's `facts` list in place.
// One row per fact (text, learned-by-the-active-party, locked, delete), and always one empty
// last row: typing into it creates the next fact (04 Expansion Q6). No "Add Fact" button.
//
// Load from a note's `datacorejsx` block:
//   const { FactsTable } = await dc.require("z_Scripts/Datacore/FactsTable.tsx")
//   return function View() { return <FactsTable /> }

const { generateMetaBindInput } = await self.require.import("z_Scripts/Dataview/utils/generateMetaBindInput.js")

function buttonMarkdown(args, icon, tooltip) {
  return [
    "```meta-bind-button",
    "style: destructive",
    'label: ""',
    `icon: ${icon}`,
    `tooltip: ${tooltip}`,
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
  const md = (content) => <dc.Markdown content={content} sourcePath={sourcePath} inline={false} />

  // A note without a facts list yet: one button creates it (the empty-row binding needs an array).
  if (!Array.isArray(raw)) {
    return md(buttonMarkdown({ action: "add", field: "facts", template: { text: "", learned: {} } }, "plus", "Start a facts list"))
  }

  const rows = [...raw.map((fact, i) => ({ i, fact })), { i: raw.length, fact: null }]
  const columns = [
    {
      id: "Fact",
      value: ({ i }) => md(`\`INPUT[textArea(placeholder(${i === raw.length ? "New fact…" : "Fact"})):facts[${i}].text]\``),
    },
    {
      id: party ? `Learned (${party})` : "Learned",
      value: ({ i, fact }) => fact && party
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
      value: ({ i, fact }) => (fact ? md(`\`INPUT[toggle:facts[${i}].locked]\``) : ""),
    },
    {
      id: "",
      width: "minimum",
      value: ({ i, fact }) => (fact ? md(buttonMarkdown({ action: "remove", field: "facts", index: i }, "x", "Delete fact")) : ""),
    },
  ]

  return <dc.Table rows={rows} columns={columns} />
}

return { FactsTable }
