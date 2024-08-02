app.fileManager.processFrontMatter(context.file, (fm) => {
    console.log(fm[context.args.field])
    fm[context.args.field].splice(context.args.index, 1)
})