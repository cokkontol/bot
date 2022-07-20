let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
  let pepe = 'https://telegra.ph/file/dc9479a9c1c43f26d0b78.jpg'
  let baper = await fetch(pepe).then(a => a.buffer())

  let arietube = '628895377665@s.whatsapp.net'
  let a = await conn.profilePictureUrl(conn.user.jid, 'image').catch((_) => "https://telegra.ph/file/dc9479a9c1c43f26d0b78.jpg")
  let b = await conn.profilePictureUrl(owner[0]+'@s.whatsapp.net', 'image').catch((_) => "https://telegra.ph/file/dc9479a9c1c43f26d0b78.jpg")
  let c = pickRandom([a, b])
  let d = await fetch(c).then(a => a.buffer())
  let prepare = await require('@adiwajshing/baileys').generateWAMessageFromContent(m.key.remoteJid,{listMessage:{
  title: `${await conn.getName(conn.user.jid)}`,
  description: `Hai ${conn.getName(m.sender)} Mau Sewa?
*SEWA BOT*
┏━━〔 ıll LIST HARGA llı 〕━
┃⌬ CEK KATALOG OWNER
┗━━━━━━━━━━━━━㉿
┏━━〔 ıll KELEBIHAN llı 〕━
◎ BOT ON 24 JAM NONSTOP
◎ FITUR BANYAK
◎ FAST RESPON
◎ DAN LAIN LAIN
◎ MINAT? HUBUNGI OWNER
┗━━━━━━━━━━━━━
*© ${conn.user.name}*
`,
  buttonText: 'Harga Sesuai Pasaran',
  listType: 2,
  productListInfo: {
  productSections: [{
  title:'Klik untuk order',
  products:[{productId:'5545685175454876'}]}],
  headerImage: { productId: '5545685175454876',
  jpegThumbnail: baper },
  businessOwnerJid: `628895377665@s.whatsapp.net`
  },
  footerText: 'XyRa BOT MD',
  }},{})
  conn.relayMessage(prepare.key.remoteJid,prepare.message,{messageId:prepare.key.id})
  const data = global.owner.filter(([id, isCreator]) => id && isCreator)
  conn.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)

}
handler.help = ['sewa']
handler.tags = ['main']
handler.command = /^(sewa)$/i

module.exports = handler

function pickRandom(list) {
        return list[Math.floor(Math.random() * list.length)]
    }
