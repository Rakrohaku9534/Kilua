import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'

let handler = async (m) => {
 if (`${global.xzn}` == 'fahrul') return m.reply('Apikey belum dipasang, silakan ambil apikey dari situs https://xzn.wtf')
let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw 'No media found'
  let media = await q.download()
  let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
  let link = await (isTele ? uploadImage : uploadFile)(media)

    let response = `https://xzn.wtf/api/toanime?url=${link}&apikey=${global.xzn}`
    if ( response.status == 400 ) { m.reply('Tidak terdeteksi wajah')
   }
    m.reply('proses')
    if ( response ) {
 conn.sendMessage(m.chat, {image: { url: response}, caption: 'UwU'}, m)
 }
}

handler.command = ["turnmeanime", "drawme"];
handler.help = ["jadianime", "toanime"];
handler.tags = ["ai"];
handler.command = ["jadianime", "toanime"];
export default handler;
