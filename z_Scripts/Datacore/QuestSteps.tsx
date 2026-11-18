// Reusable Datacore view: edits the current quest's `steps` list in place (campaign-schemas step shape).
// Columns: completed for the active party, step text, status, outcome, reorder, delete. All list edits go
// through arrayActions.js; an "Add Step" button sits above the table, like the vault's other list editors.
//
// Load from a quest's `datacorejsx` block:
//   const { QuestSteps } = await dc.require("z_Scripts/Datacore/QuestSteps.tsx")
//   return function View() { return <QuestSteps /> }

const { generateMetaBindInput } = await self.require.import("z_Scripts/Dataview/utils/generateMetaBindInput.js")

const STATUSES = ["planned", "played", "skipped", "void"]

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

function QuestSteps() {
  const note = dc.useCurrentFile()
  const sourcePath = note.$path

  const config = dc.useQuery(`@page and $name = "Configuration"`)[0]
  const campaignPath = config?.value("active_campaign")?.path ?? ""
  const campaign = dc.useQuery(`@page and $path = "${campaignPath}"`)[0]
  const partyPath = campaign?.value("party")?.path ?? ""
  const party = partyPath.split("/").pop()?.replace(/\.md$/, "") ?? ""

  const raw = note.value("steps")
  const steps = Array.isArray(raw) ? raw : []
  const md = (content) => <dc.Markdown content={content} sourcePath={sourcePath} inline={false} />
  const addButton = md(buttonMarkdown(
    { action: "add", field: "steps", template: { text: "", status: "planned", outcome: "" } },
    { style: "primary", label: "Add Step" }))

  const columns = [
    {
      id: "Done",
      width: "minimum",
      value: ({ i }) => (party ? md(generateMetaBindInput({ type: "toggle", field: ["steps", i, "completed", party] })) : ""),
    },
    { id: "Step", value: ({ i }) => md(`\`INPUT[textArea:steps[${i}].text]\``) },
    {
      id: "Status",
      width: "minimum",
      value: ({ i }) => md(`\`INPUT[inlineSelect(${STATUSES.map(s => `option(${s})`).join(", ")}):steps[${i}].status]\``),
    },
    { id: "Outcome", value: ({ i }) => md(`\`INPUT[textArea:steps[${i}].outcome]\``) },
    {
      id: "",
      width: "minimum",
      value: ({ i }) => md(buttonMarkdown({ action: "moveUp", field: "steps", index: i }, { style: "default", icon: "move-up", tooltip: "Move up" })),
    },
    {
      id: " ",
      width: "minimum",
      value: ({ i }) => md(buttonMarkdown({ action: "moveDown", field: "steps", index: i }, { style: "default", icon: "move-down", tooltip: "Move down" })),
    },
    {
      id: "  ",
      width: "minimum",
      value: ({ i }) => md(buttonMarkdown({ action: "remove", field: "steps", index: i }, { icon: "x", tooltip: "Delete step" })),
    },
  ]

  return (
    <div>
      {addButton}
      {steps.length > 0 && <dc.Table rows={steps.map((step, i) => ({ i, step }))} columns={columns} />}
    </div>
  )
}

return { QuestSteps }
