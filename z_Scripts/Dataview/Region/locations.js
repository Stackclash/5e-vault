console.log(dv.current())
const poi = dv.pages('"4. World Almanac/Places of Interest"')
const settlemtnts = dv.pages('"4. World Almanac/Settlements"')
dv.execute(`TABLE WITHOUT ID link(file.name) AS "Name", file.folder as "Type", file.frontmatter.pronounced as "Pronounced"
            FROM "4. World Almanac/Places of Interest" OR "4. World Almanac/Settlements"
            WHERE contains(file.frontmatter.region_PoI, this.file.name) OR contains(file.frontmatter.region_settlement, this.file.name)`)