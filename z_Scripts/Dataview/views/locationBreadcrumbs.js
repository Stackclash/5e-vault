const { getLocationBreadcrumbs } = await self.require.import("z_Scripts/Dataview/data/locations.js")

const breadcrumbs = getLocationBreadcrumbs(input.current.file.path)
const breadcrumbText = breadcrumbs.map(b => `[[${b.path}|${b.name}]]`).join(" > ")

dv.span(breadcrumbText)