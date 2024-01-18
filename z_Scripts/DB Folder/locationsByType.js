function locationsByType(dv, locations) {
    const files = []
    for (location of locations) {
        files.concat(dv.pages(`4. World Almanac/${location}`))
    }

    console.log(files.map(f => {
        return {
            value: f.file.name,
            label: f.file.name,
            color: 'red'
        }
    }))

    return files.map(f => {
        return {
            value: f.file.name,
            label: f.file.name,
            color: 'red'
        }
    })
}

module.exports = locationsByType