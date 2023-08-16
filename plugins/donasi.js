let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let pay = 'https://telegra.ph/file/c1ed6cb50d533d70d0245.jpg'
let sewa = `
╭─❀ SEWA ❀─╮
┊ • 1 Minggu: 3K
┊ • 1 Bulan: 10K
┠─❀ PREMIUM ❀─┨
┊ • 1 Bulan: 5k
╰───❀───╯
┌─❀ Donasi & Payment ❀─┐
│ • Dana: [${global.pdana}]
│ • Pulsa: [${global.ppulsa}]
│ • Gopay: [${global.pgopay}]
❏──❀──❏
`
conn.sendMessage(m.chat, { image: { url: pay }, caption: sewa}, m)

}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^donasi|sewa$/i

export default handler
