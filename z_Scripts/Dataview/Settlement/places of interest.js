dv.execute(`TABLE WITHOUT ID link(file.name) AS "Name", file.frontmatter.pronounced as "Pronounced"
            FROM "4. World Almanac/Places of Interest"
            WHERE contains(file.frontmatter.settlement_PoI, this.file.name)`)