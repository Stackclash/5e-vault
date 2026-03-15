// Location data queries. Returns plain objects, never renders.
// Retrieves the Dataview API internally — do not pass dv as a parameter.

const { getLinkPath } = await self.require.import("z_Scripts/Dataview/utils/helpers.js")

/**
 * Get location pages, optionally filtered by parent location path.
 * Results are sorted by name.
 * @param {Object} [options]
 * @param {string} [options.parentPath] - Only return locations whose `location` field points here
 */
export function getLocations({ parentPath } = {}) {
    const dv = app.plugins.getPlugin("dataview").api
    let pages = dv.pages("#location")
    if (parentPath) {
        pages = pages.where(p => getLinkPath(p.location) === parentPath)
    }
    return pages
        .sort(p => p.file.name)
        .map(p => ({
            link: p.file.link,
            name: p.file.name,
            path: p.file.path,
            folder: p.file.folder,
            location: p.location,
            pronounced: p.pronounced,
        }))
        .array()
}

/**
 * Recursively collect all descendant location file paths for a given location.
 * Returns a flat array of vault-relative paths (excludes the location itself).
 * @param {string} locationPath - Vault-relative path of the parent location
 */
export function getChildLocationPaths(locationPath) {
    const dv = app.plugins.getPlugin("dataview").api

    function getDirectChildPaths(path) {
        return dv.pages("#location")
            .where(p => getLinkPath(p.location) === path)
            .map(p => p.file.path)
            .array()
    }

    let paths = getDirectChildPaths(locationPath)
    let prevLength = 0

    do {
        prevLength = paths.length
        const children = paths.flatMap(p => getDirectChildPaths(p))
        paths = [...new Set([...paths, ...children])]
    } while (paths.length !== prevLength)

    return paths
}

/**
 * Build a breadcrumb chain from root to the page at filePath.
 * Returns an array of { name, path, link } objects ordered root → current page.
 * @param {string} filePath - Vault-relative path of the starting page
 */
export function getLocationBreadcrumbs(filePath) {
    const dv = app.plugins.getPlugin("dataview").api
    let currentPage = dv.page(filePath)
    if (!currentPage) return []

    const breadcrumbs = [{
        name: currentPage.file.name,
        path: currentPage.file.path,
        link: currentPage.file.link,
    }]

    while (currentPage && currentPage.location) {
        const parentPath = getLinkPath(currentPage.location)
        if (!parentPath) break
        currentPage = dv.page(parentPath)
        if (currentPage) {
            breadcrumbs.unshift({
                name: currentPage.file.name,
                path: currentPage.file.path,
                link: currentPage.file.link,
            })
        } else {
            break
        }
    }

    return breadcrumbs
}

/** Get all location pages sorted by name. Useful for dropdowns and selectors. */
export function getAllLocations() {
    const dv = app.plugins.getPlugin("dataview").api
    return dv.pages("#location")
        .sort(l => l.file.name)
        .map(l => ({
            link: l.file.link,
            name: l.file.name,
            path: l.file.path,
        }))
        .array()
}
