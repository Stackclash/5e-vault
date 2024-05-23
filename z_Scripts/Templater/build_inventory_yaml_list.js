module.exports = (tp, inventory, path, spaces) => {
    return tp.user.build_yaml_list(inventory.map(item => ({
        name: tp.user.find_file(item.name, path),
        original: item.name,
        type: item.type,
        quantity: item.quantity,
        equipped: item.equipped,
        isAttuned: item.isAttuned
    })), spaces)
}