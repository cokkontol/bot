
let fetch = require('node-fetch')

let handler = async(m, { conn, text }) => {

  if (!text) return conn.reply(m.chat, 'Harap Masukan Username', m)

  await m.reply('Searching...')
    let res = await fetch(`https://api.lolhuman.xyz/api/stalktiktok/${text}?apikey=86ca9a668a002cb297236c64`)
    let json = await res.json()
    if (res.status !== 200) throw await res.text()
    if (!json.status) throw json
    let thumb = await (await fetch(json.avatarLarger)).buffer()
    let hasil = `*── 「 TIK-TOK STALK 」 ──*
▢ *Nama*: ${json.username}
▢ *Follower*: ${json.followerCount}
▢ *Following*: ${json.followingCount}
▢ *Private*: ${json.isprivate}
▢ *Id*: ${json.id}
`

    conn.sendFile(m.chat, thumb, 'tiktokstalk.jpg', hasil, m)
}
handler.help = ['tiktokstalk'].map(v => v + ' <username>')
handler.tags = ['tools']
handler.command = /^(tiktokstalk)$/i
handler.limit = true

module.exports = handler
