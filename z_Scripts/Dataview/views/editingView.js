const currentPage = input.current
const mode = app.workspace.getActiveFileView().currentMode.type

if (mode === "source") {
    dv.span('`INPUT[text:test]`')
} else if (mode === "preview") {
    dv.span(currentPage.test)
}