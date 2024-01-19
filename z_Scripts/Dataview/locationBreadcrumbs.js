let currentPage = input.current,
breadcrumbs = [currentPage]

while (currentPage) {
    if (currentPage.location) {
        breadcrumbs.unshift(currentPage.location)
        currentPage = currentPage.location
        console.log(currentPage)
    } else {
        currentPage = false
    }
}