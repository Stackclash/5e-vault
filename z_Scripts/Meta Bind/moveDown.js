app.fileManager.processFrontMatter(context.file, (fm) => {
    // move array item down
    const field = context.args.field
    const index = context.args.index
    if (index < fm[field].length - 1) {
        const item = fm[field][index]
        fm[field].splice(index, 1)
        fm[field].splice(index + 1, 0, item)
    }
})