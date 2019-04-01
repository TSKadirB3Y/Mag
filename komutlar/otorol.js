const Discord = require('discord.js')
const fs = require('fs');
const db = require('quick.db')
let kanal = JSON.parse(fs.readFileSync("./././otorol.json", "utf8"));
module.exports.run = async (client, message, args) => {
if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`Bu komutu kullanabilmek için **Yönetici** iznine sahip olmalısın!`);
  
  
let rol = args.slice(0).join('+');
  if(!rol) return message.channel.send("Lütfen Oto-Rol Yapmak İstediğiniz Rolü Yazınız")
  db.set(`otorol_${message.guild.id}`,rol)
       if(!kanal[message.guild.id]){
      
        kanal[message.guild.id] = {
            rol: rol
        };
      }
    fs.writeFile("./././otorol.json", JSON.stringify(kanal), (err) => {
        console.log(err)
    })
  message.channel.send(`:white_check_mark: Otorol **${rol}** olarak ayarlandı`)
  
}
    
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['otorol-ayarla'],
    permLevel: `Yönetici izni gerekiyor.`
}

exports.help = {
    name: 'oto-rol',
    category: 'ayarlar',
    description: 'Giriş çıkış kanalını ayarlar.',
    usage: 'r?giriş-çıkış-ayarla <#kanal>'
}