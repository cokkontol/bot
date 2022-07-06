let handler = async m => m.reply(`
*------- DONATE  -------*
Hai kak  
Kalian bisa mendukung saya agar bot ini tetap up to date dengan cara donasi
Berapapun donasi kalian akan sangat berarti 
Thanks!

GcBOT: https://tinyurl.com/2cdj7axy
Saweria: https://tinyurl.com/2db6yyff
Trakteer: https://tinyurl.com/23fmydua
Gopay: https://tinyurl.com/28qon2kn
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
