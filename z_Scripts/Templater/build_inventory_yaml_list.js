module.exports = (tp, inventory, path, spaces) => {
    return tp.user.build_yaml_list(inventory.map(item => ({
        name: tp.user.find_file(item.name, path),
        ...item
    })), spaces)
}