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

const days = miles => minsPerMile > 0 && hoursPerDay > 0
    ? `${Math.round(miles * minsPerMile / 60 / hoursPerDay * 10) / 10} days`
    : 'set party pace'

dv.table(['Location', 'Distance', 'Travel Time'], [...outbound, ...inbound]
    .filter(r => r.page)
    .map(r => [r.page.file.link, `${r.miles} mi.`, days(Number(r.miles))]))
