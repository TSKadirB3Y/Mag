const Discord = require('discord.js')
var steam = require('steam-provider')
var provider = new steam.SteamProvider();

exports.run = (client, message, args) => {
    let game = args[0]
    let steampng = "https://cdn.discordapp.com/attachments/458004691402489856/470344660364034049/steam.png"
    if (!game) return message.reply('Lütfen steamde bulunan bir oyun söyleyin. Eğer yazdığınız kelime steamde bir oyunun içinde geçiyorsa onu gösterebilir. **Örnek**: €steam-oyun-fiyat *PUBG*')
    provider.search(game).then(result => {
    provider.detail(result[0].id, "turkey", "tr").then(results => {
        console.log(results)
    const embed = new Discord.RichEmbed()
    .setAuthor('Steam Oyun Fiyatları', steampng)
  .setColor("#36393F")
    .setTitle(result[0].name)
    .addField('Oyunun IDsi', result[0].id)
    .setThumbnail(results.otherData.imageUrl)
    .addField('Türleri', results.genres)
    .addField('Fiyatı', results.priceData.initialPrice, true)
    .addField('Platformlar', results.otherData.platforms, true)
    .addField('Metacritic Puanı', results.otherData.metacriticScore, true)
    .addField('Etiketler', results.otherData.features, true)
    .addField('Geliştiriciler', results.otherData.developer, true)
    .addField('Yayımcı', results.otherData.publisher)
  .setColor("RANDOM")
    message.channel.send(embed)
    })
});
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['steam'],
  permLevel: 0
};

exports.help = {
  name: 'steam-oyun-fiyat',
  description: 'Aradağınız oyunun steamdaki fiyatına bakmanızı sağlar.',
  usage: 'steam-oyun-fiyat'
};