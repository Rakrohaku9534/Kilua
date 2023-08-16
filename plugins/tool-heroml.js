import fetch from 'node-fetch'

let handler = async (m, { args, usedPrefix, text, command }) => {
  if (!text) return m.reply('Masukan nama hero')
    let response = await fetch(`https://api.zahwazein.xyz/information/mlherodetail?query=${text}&apikey=zenzkey_ace5210290df`)
    let data = await response.json()
    
    if (data.result) {
    let capt = `
*${data.result[0].hero_name}*
Release Date:  ${data.result[0].release_date}
Role: ${data.result[0].role}
Specialty: ${data.result[0].specialty}
Lane: ${data.result[0].lane}

Price:
${data.result[0].price.battle_point} Battle Poin
${data.result[0].price.diamond} Diamond

Resource: ${data.result[0].gameplay_info.resource}
Damage Type: ${data.result[0].gameplay_info.dmg_type}
Range Type: ${data.result[0].gameplay_info.range_type}
Durability: ${data.result[0].ratings.durability}
Offense: ${data.result[0].ratings.offense}
Control Effect: ${data.result[0].ratings.control_effect}
Difficulty: ${data.result[0].ratings.difficulty}

Background Story: ${data.result[0].background_story}
`
  conn.sendMessage(m.chat, {image: { url: data.result[0].avatar }, caption: capt}, m)
} else { let capt = "Maaf hero tersebut masih belum ada, pastikan penulisan nama hero benar"
 m.reply(capt)
}

}
handler.help = ["heroml"]
handler.tags = ["tools"]
handler.command = /^heroml?$/i
handler.limit = true
export default handler
