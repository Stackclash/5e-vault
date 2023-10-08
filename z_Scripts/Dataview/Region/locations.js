dv.execute(`TABLE WITHOUT ID link(file.name) AS "Name", file.frontmatter.pronounced as "Pronounced"
            FROM "4. World Almanac/Places of Interest" OR "4. World Almanac/Settlements"
            WHERE contains(file.frontmatter.region_PoI, this.file.name) OR contains(file.frontmatter.region_settlement, this.file.name)`)