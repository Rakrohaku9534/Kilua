import uploadImage from '../lib/uploadImage.js'
import ocrapi from "ocr-space-api-wrapper"
  let handler = async (m) => {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw 'No media found'
  let media = await q.download()
  let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
  let link = await (isTele ? uploadImage : uploadFile)(media)
          
                    await conn.sendMessage(m.chat, { image: { url: `https://api.zahwazein.xyz/photoeditor/removebg?url=${link}&apikey=zenzkey_d928ce4e47d5` }, caption: 'done' }, { quoted: m})
                    }
handler.help = ['removebg'].map(v => 'reset' + v)
handler.tags = ['tools']
handler.command = /^(removebg)$/i

export default handler



