import fetch from 'node-fetch'

let handler = async (m, { args, usedPrefix, text, command }) => {
  if (!text) return m.reply(`Contoh: ${command} link`)
if (!(text.includes('http://youtu') || text.includes('https://youtu'))) return m.reply('Link Anda Invalid')
    let response = await fetch(`https://api.zahwazein.xyz/downloader/youtube?apikey=zenzkey_ace5210290df&url=${text}`)
    let data = await response.json()
    let nk = data.result.getVideo.url
    let capt = `*Name:* ${data.result.title}
*Link:* ${text}
*Durasi:* ${data.result.duration}`

    conn.sendMessage(m.chat, { video: { url: nk}, caption: capt  }, m)
  }
handler.help = ['ytmp4']
handler.tags = ['tools']
handler.command = /^ytv|ytmp4?$/i
handler.limit = true
export default handler
