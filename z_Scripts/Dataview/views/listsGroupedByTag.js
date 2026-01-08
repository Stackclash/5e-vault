const searchTag = input.searchTag
const listTag = input.listTag

const groups = new Map()
groups.set('empty', [])
const text = []
const pages = dv.pages(searchTag)
pages.forEach(page => {
  page.file.lists.where(t => t.text.includes(listTag)).forEach(t => text.push(t.text.replace(listTag,'') + `| ${dv.fileLink(page.file.path, false, 'Jump To')}`))
})

text.forEach(t => {
  const tags = t.match(/#[a-zA-Z]+/g)
  if (tags) {
    tags.forEach(tag => {
      const cleansedTag = t.replace(tag,'')
      if (!groups.has(tag)) {
        groups.set(tag, [cleansedTag])
      } else {
        groups.set(tag, groups.get(tag).concat(cleansedTag))
      }
    })
  } else {
    groups.set('empty', groups.get('empty').concat(t))
  }
})

Array.from(groups)
.sort((a, b) => {
  if (a[0] === 'empty') {
    return -1
  } else if (b[0] === 'empty') {
    return 1
  } else {
    return a[0] - b[0]
  }
})
.forEach((value) => {
  if (value[0] !== 'empty') {
    const cleansedHeader = value[0].replace('#', '')
    dv.header(3, cleansedHeader.charAt(0).toUpperCase() + cleansedHeader.slice(1))
  }
  dv.list(value[1])
})