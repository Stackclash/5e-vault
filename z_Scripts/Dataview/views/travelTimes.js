// Routes touching this location (stored on either end), with travel time at the active party's pace.
const current = input.current
const targetPath = r => r?.to?.path ?? r?.to
const config = dv.page('Configuration')
const party = dv.page(dv.page(config?.active_campaign)?.party)
const minsPerMile = Number(party?.travel_calc)
const hoursPerDay = Number(party?.travel_hours_per_day)

const outbound = (current.routes || []).map(r => ({ page: dv.page(targetPath(r)), miles: r.miles }))
const inbound = dv.pages('#location')
    .where(p => p.file.path !== current.file.path)
    .flatMap(p => (p.routes || [])
        .filter(r => dv.page(targetPath(r))?.file.path === current.file.path)
        .map(r => ({ page: p, miles: r.miles })))
    .array()

const round1 = n => Math.round(n * 10) / 10
const days = miles => {
    if (!(minsPerMile > 0 && hoursPerDay > 0)) return 'set party pace'
    const hours = miles * minsPerMile / 60
    return hours < hoursPerDay ? `${round1(hours)} hours` : `${round1(hours / hoursPerDay)} days`
}

dv.table(['Location', 'Distance', 'Travel Time'], [...outbound, ...inbound]
    .filter(r => r.page)
    .map(r => [r.page.file.link, `${r.miles} mi.`, days(Number(r.miles))]))
