return function PartyLocation() {
  const currentPage = dc.useCurrentFile()
  const players = dc.useQuery(
    `@page and #player and connected(${currentPage.$link}) and active`
  )
  const locations = dc.useQuery('@page and #location')

  const [location, updateLocation] = dc.useState(null)

  dc.useEffect(() => {
    if (!players.length) {
      updateLocation(null)
      return
    }

    const first = players[0].value('location')?.path
    const same = players.every(
      p => p.value('location')?.path === first
    )

    updateLocation(
      same ? players[0].value('location').toString() : null
    )
  }, [players])

  dc.useEffect(() => {
    if (!location) return
    if (!players.length) return

    players.forEach(player => {
      const tfile = app.vault.getAbstractFileByPath(player.$file)

      app.fileManager.processFrontMatter(tfile, fm => {
        // Prevent unnecessary rewrites (VERY IMPORTANT)
        if (fm.location === location) return

        fm.location = location
      })
    })
  }, [location])

  return (
    <select
      value={location ?? ''}
      onChange={e => updateLocation(e.target.value || null)}
    >
      <option value="">Different Locations</option>
      {locations.map(l => (
        <option key={l.$link.toString()} value={l.$link.toString()}>
          {l.$name}
        </option>
      ))}
    </select>
  )
}