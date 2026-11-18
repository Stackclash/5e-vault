<%*
const id = "obsidian-dice-roller"
const plugin = app.plugins.plugins[id]
tR += `T7 diagnostics: enabled=${app.plugins.enabledPlugins.has(id)}, loaded=${!!plugin}, version=${plugin?.manifest?.version ?? "-"}, window.DiceRoller=${typeof window.DiceRoller}, plugin.api=${typeof plugin?.api}\n`
const api = window.DiceRoller ?? plugin?.api
if (api) {
  try {
    const roller = await api.getRoller("[[Npc Mannerisms#^npc-mannerisms]]", tp.file.path(true))
    await roller.roll()
    tR += "T7 rolled: " + roller.result
  } catch (e) {
    tR += "T7 roll failed: " + e.message
  }
}
%>
