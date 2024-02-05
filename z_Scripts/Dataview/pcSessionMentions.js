const logs = dv.pages('"3. The Party/Session Logs"').filter(p => p.file.outlinks.includes(input.current.file.link))

const mentions = []
const logDetails = logs.map(l => ({name: l.file.name, worldStartDate: l['fc-date'], worldEndDate: l['fc-end'], date: l.date}))

await Promise.all(logs.map(l => dv.io.load(l.file.path)))
  .then(logContents => {
    logContents.forEach((lc,i) => {
      let logMentions = []

      lc.split('\n').forEach(line => {
        if (new RegExp(input.current.file.name).test(line)) {
          logMentions.push(line.replace(/^\s*-*\s*/, ''))
        }
      })

      mentions.push({...logDetails[i], mentions: logMentions})

    })
    return
  })
  .then(() => {
    mentions.forEach(m => {
      dv.header(3, `${m.name} - ${m.worldStartDate}`)
      dv.list(m.mentions)
    })
  })