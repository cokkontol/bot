let fetch = require('node-fetch')
let handler = async (m, { text }) => {
  let url = await fetch('https://x-restapi.herokuapp.com/api/random-cehor?apikey=BETA')
  let cerpen = await url.json()
let hasil = `
*Powered By ${global.wm}*

${cerpen.data}
`.trim()

  m.reply(hasil)
}
handler.help = ['ceritahantu']
handler.tags = ['internet']
handler.command = /^ceritahantu$/i
handler.limit = true

module.exports = handler
