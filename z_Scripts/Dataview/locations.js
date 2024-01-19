const pages = dv.pages('"4. World Almanac"').groupBy(p => p.file.folder.split('/').slice(-1))//.where(p => p.location ? p.location == input.current.file.link : false).groupBy(p => p.folder.split('/').slice(-1))
console.log(pages.length)
for (let group of pages) {
    console.log(group)
    // dv.header(3, group.key)
    // dv.table(["Name", "Pronounced"],
    //     group.rows.map(p => p.name, p.pronounced)
    // )
}