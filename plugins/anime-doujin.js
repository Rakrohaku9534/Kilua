import axios from 'axios';

let handler = async (m, { conn, text }) => {
  if (!text) throw `Nyari Apa?`;

  const apiUrl = `https://api.zahwazein.xyz/animeweb/doujindesu/search?query=${text}&apikey=${global.zenzkey}`;

    const response = await axios.get(apiUrl);
    const data = response.data;

    if (data.result && data.result.length > 0) {
      let mangaList = data.result.map(manga => (
        `• *Judul:* ${manga.title}
• *score:* ${manga.score}
• *Status:* ${manga.status}
• *Link:* ${manga.link}
`
      ))
      let caption = mangaList.join("\n\n");

      // Kirim pesan dengan daftar manga
      conn.sendMessage(m.chat, { image: { url: data.result[0].thumb }, caption }, m);
    }
}

handler.help = ['doujin'];
handler.tags = ['anime'];
handler.command = /^(doujin)$/i;
handler.premium = true;

export default handler;
