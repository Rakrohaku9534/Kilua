import similarity from 'similarity'
const threshold = 0.72
let handler = m => m
handler.before = async function (m) {
  let id = m.chat
  if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/Ketik.*tega/i.test(m.quoted.text)) return !0
  this.tebakgame = this.tebakgame ? this.tebakgame : {}
  if (!(id in this.tebakgame)) return m.reply('Soal itu telah berakhir')
  if (m.quoted.id == this.tebakgame[id][0].id) {
    let json = JSON.parse(JSON.stringify(this.tebakgame[id][1]))
    let isSurrender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
        
    if (isSurrender) {
            
    clearTimeout(this.tebakgame[id][3])
            
    delete this.tebakgame[id]
             
    m.reply(`Yah Menyerah😌 \n jawabanya : *${json.jawaban}*`)
 
           }
    
    // m.reply(JSON.stringify(json, null, '\t'))
    if (m.text.toLowerCase() == json.jawaban.toLowerCase().trim()) {
      global.db.data.users[m.sender].exp += this.tebakgame[id][2]
      global.db.data.users[m.sender].tiketcoin += 1
      m.reply(`*Benar!*\n+${this.tebakgame[id][2]} XP`)
      clearTimeout(this.tebakgame[id][3])
      delete this.tebakgame[id]
    } else if (similarity(m.text.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) m.reply(`*Dikit Lagi!*`)
    else if ( m.text != nyerah && m.text != menyerah) {m.reply(`*Salah!*`)
  }
  return !0
}
}
handler.exp = 0

export default handler
