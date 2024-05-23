module.exports = (tp, classes, path, spaces) => {
    return tp.user.build_yaml_list(classes.map(item => ({
        name: tp.user.find_file(item.name, path),
        subClass: tp.user.find_file(`${item.name} ${item.subClass}`, path),
        ...item
    })), spaces)
}