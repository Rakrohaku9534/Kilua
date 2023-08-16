import axios from 'axios';

let handler = async (m, { conn, text }) => {
  if (!text) throw `Nyari Apa?`;

  const apiUrl = `https://api.zahwazein.xyz/animeweb/doujindesu/search?query=${text}&apikey=${global.zenzkey}`;

    const response = await axios.get(apiUrl);
    const data = response.data;

    if (data.result && data.result.length > 0) {
      const thumb = data.result[0].thumb;
      const caption = `• *Judul:* ${data.result[0].title}
• *score:* ${data.result[0].score}
• *Status:* ${data.result[0].status}
• *Link:* ${data.result[0].link}
`;

      conn.sendMessage(m.chat, { image: { url: thumb }, caption }, m);
}
}

handler.help = ['doujin'];
handler.tags = ['anime'];
handler.command = /^(doujindetail|doujind)$/i;
handler.premium = true;

export default handler;
