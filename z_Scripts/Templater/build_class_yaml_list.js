module.exports = (tp, classes, path, spaces) => {
    let classList = []
    classes.forEach(item => {
        classList.push({
            name: tp.user.find_file(item.name, path),
            subClass: tp.user.find_file(`${item.name} ${item.subClass}`, path),
            level: item.level
        })
    })

    return tp.user.build_yaml_list(classList, spaces)
}