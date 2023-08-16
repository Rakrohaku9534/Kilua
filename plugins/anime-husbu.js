import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let husbu = `https://api.zahwazein.xyz/randomanime/husbu?apikey=zenzkey_1ec92f71d3bb`
	conn.sendMessage(m.chat, { image: { url: husbu }, caption: 'Bang?' }, m)
}
handler.command = /^(husbu)$/i
handler.tags = ['anime']
handler.help = ['husbu']
handler.limit = true
export default handler
