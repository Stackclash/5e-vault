const { getSessionsMentioningWithContent } = await self.require.import("z_Scripts/Dataview/data/sessions.js")

const currentFile = input.current.file
const sessions = await getSessionsMentioningWithContent(currentFile.path, currentFile.name)

if (sessions.length === 0) return

dv.header(2, "Session Mentions")

sessions.forEach(session => {
    dv.header(3, dv.fileLink(session.path, false, `${session.name} - ${session.worldStartDate}`))
    dv.list(session.mentions)
})