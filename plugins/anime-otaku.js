import axios from 'axios';

let handler = async (m, { conn, text }) => {
  if (!text) throw `Nyari Apa?`;

  const apiUrl = `https://api.zahwazein.xyz/animeweb/otakudesu/search?query=${text}&apikey=${global.zenzkey}`;

    const response = await axios.get(apiUrl);
    const data = response.data;

    if (data.result && data.result.length > 0) {
      let mangaList = data.result.map(manga => (
        `• *Judul:* ${manga.title}
• *Genres:* ${manga.genres}
• *Status:* ${manga.status}
• *Rating:* ${manga.rating}
• *Link:* ${manga.url}`
      )
)
      let caption = mangaList.join("\n\n");

      // Kirim pesan dengan daftar manga
      conn.sendMessage(m.chat, { image: { url: data.result[0].image }, caption }, m);
    }
}
handler.help = ['otakudesu']
handler.tags = ['anime']
handler.command = /^(otakudesu)$/i
handler.limit = true

export default handler
