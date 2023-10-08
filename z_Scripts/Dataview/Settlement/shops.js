dv.execute(`TABLE WITHOUT ID link(file.name) as "Name", file.frontmatter.items as "Items"
            FROM "4. World Almanac/Shops"
            WHERE contains(file.frontmatter.location, this.file.name)`)