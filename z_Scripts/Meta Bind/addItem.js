app.fileManager.processFrontMatter(context.file, (fm) => {
    fm[context.args.field].push({})
})