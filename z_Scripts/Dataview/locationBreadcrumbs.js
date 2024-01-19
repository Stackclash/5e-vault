let currentPage = input.current,
breadcrumbs = [currentPage]

while (currentPage) {
    if (currentPage.location) {
        currentPage = dv.page(currentPage.location.path)
        breadcrumbs.unshift(currentPage)
    } else {
        currentPage = false
    }
}

console.log(breadcrumbs)