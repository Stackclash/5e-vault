app.fileManager.processFrontMatter(context.file, (fm) => {
    console.log(context)
    fm[context.args.field].splice(context.args.index, 1)
})