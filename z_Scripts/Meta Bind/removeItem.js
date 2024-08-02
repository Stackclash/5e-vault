app.fileManager.processFrontMatter(context.file, (fm) => {
    fm[context.args.field].splice(context.args.index, 1)
})