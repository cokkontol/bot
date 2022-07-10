let handler = async (m, { conn }) => {
    let rest = 'https://api.zacros.my.id/randomimg/darkjokes'
    conn.File(m.chat, rest, 'Gelap😖' , m)
}
handler.help = ['darkjokes']
handler.tags = ['internet']
handler.command = /^(darkjoke|darkjokes)$/i

module.exports = handler
