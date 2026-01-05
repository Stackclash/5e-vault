const travelTimes = input.current.travel || []

dv.table(['Location', 'Distance', 'Travel Time'], travelTimes.map(t => [dv.page(t[0]).file.link, `${t[1]} mi.`, `\`VIEW[round((${t[1]}* {Travel#TravelCalc}) / 60 / {Travel#HoursPerDay}, 1)]\` days`]))