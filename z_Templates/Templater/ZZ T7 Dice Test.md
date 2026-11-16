<%*
const api = window.DiceRoller
if (!api) { tR += "T7: dice roller API not found" } else {
  const roller = await api.getRoller("[[Npc Mannerisms#^npc-mannerisms]]", tp.file.path(true))
  await roller.roll()
  tR += "T7 rolled: " + roller.result
}
%>
