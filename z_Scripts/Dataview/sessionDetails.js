const { getRememberItems } = await self.require.import("z_Scripts/Dataview/data/sessions.js")
const { capitalize } = await self.require.import("z_Scripts/Dataview/utils/helpers.js")

const getText = item =>
    item.text.replace("#remember", "") + " " + dv.sectionLink(item.link.path, item.link.subpath, false, "Go To")

const getKey = key => capitalize(key.replace("#", ""))

const details = getRememberItems().reduce((acc, t) => {
    t.tags.forEach(tag => {
        if (!tag.includes("remember") && !acc.some(a => a.key === getKey(tag))) {
            acc.push({ key: getKey(tag), rows: [getText(t)] })
        } else if (!tag.includes("remember") && acc.some(a => a.key === getKey(tag))) {
            acc.find(a => a.key === getKey(tag)).rows.push(getText(t))
        } else {
            if (acc.some(a => a.key === "")) {
                acc.find(a => a.key === "").rows.push(getText(t))
            } else {
                acc.push({ key: "", rows: [getText(t)] })
            }
        }
    })
    return acc
}, [])

details.forEach(d => {
    if (d.key) dv.header(2, d.key)
    dv.list(d.rows)
})