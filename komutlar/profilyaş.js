const Discord = require('discord.js')
const fs = require('fs');
var ayarlar = require('../ayarlar.json');
let kanal = JSON.parse(fs.readFileSync("././jsonlar/profil.json", "utf8"));

exports.run = async (client, message, args) => {


    const secenekler = args.slice(0).join(' ');
  
 
  
    if (secenekler.lenght < 1) {
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
          .setTitle(`» Yanlış Kullanım!`)
          .addField(`Doğru Kullanım`, `${ayarlar.prefix}profil-yaş  <yaş>`)
        message.channel.send({embed})
        return
    }
      if(!kanal[message.guild.id]){
      
        kanal[message.author.id] = {
            gkanal: secenekler
        };
      }
    fs.writeFile("././jsonlar/profil.json", JSON.stringify(kanal), (err) => {
        console.log(err)
    })
  
message.reply("Yaşınız Belirlendi Birkaç Saniye İçinde Sisteme Yansıyacaktır").then(message => {
      console.log(` Bot yeniden başlatılıyor...`)
      process.exit(1);
    }).catch(console.error)

}
    
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['yaş', 'pyaş'],
    permLevel: `Yönetici izni gerekiyor.`
}

exports.help = {
    name: 'profil-yaş',
    category: 'ayarlar',
    description: 'Giriş çıkış kanalını ayarlar.',
    usage: 'pyaşs <#kanal>'
}