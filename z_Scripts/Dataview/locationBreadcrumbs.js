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

breadcrumbs = breadcrumbs.map(b => `[[${b.file.path}|${b.file.name}]]`).join(' > ')
console.log(typeof breadcrumbs)

dv.span(breadcrumbs)