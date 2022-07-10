let axios = require('axios')
let handler = async (m, { text }) => {
  let url = await axios('https://api.lolhuman.xyz/api/ceritahoror?apikey=86ca9a668a002cb297236c64')
  let cerhan = await url.json()
let hasil = `
*Powered By ${global.wm}*

${cerhan.data}
`.trim()

  m.reply(hasil)
}
handler.help = ['ceritahantu']
handler.tags = ['internet']
handler.command = /^ceritahantu$/i
handler.limit = true

module.exports = handler
