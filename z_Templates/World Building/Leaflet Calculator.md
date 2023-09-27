<%*
const fs = require('fs')
const path = require('path')

let images = tp.user.get_all_files(path.join(app.vault.adapter.getBasePath(), "z_Assets"))
let selectedImage = await tp.system.suggester(images, images, false, "PlaceholderImage.png")

const stats = fs.statSync(path.resolve(app.vault.adapter.getBasePath(), "z_Assets", selectedImage))
-%>
Width: <% stats.width %>
Height: <% stats.height %>
<% console.log(stats) %>