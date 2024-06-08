<%*
if (tp.config.run_mode !== 1) {
    tR += "This template can only be inserted"
} else {
    selectedCondition = await tp.system.suggester(['healthy', 'injured', 'dead'], ['healthy', 'injured', 'dead'], false, `What condition is ${tp.config.active_file.basename}?`)
    app.fileManager.processFrontMatter(tp.config.active_file, (fm) => {
        fm.condiiton = selectedCondtion
    })
}
-%>