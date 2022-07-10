let handler = async (m, { conn, command }) => {
let kntol = `https://zahirr-web.herokuapp.com/api/random/meme?apikey=zahirgans`
    conn.sendFile(m.chat, kntol, 'Nih', `.${command}`) 
}
handler.help = ['meme']
handler.tags = ['internet']
handler.command = /^(meme)$/i

module.exports = handler
