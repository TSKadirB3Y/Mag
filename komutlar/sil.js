const Discord = require('discord.js');
exports.run = function(client, message, args) {
if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Bu Komutu Kullanmak İçin İzniniz Yok!");
if(!args[0]) return message.channel.send("🚫 **Lütfen Silinicek Mesaj Miktarını Yazın.!** 🚫");
message.channel.bulkDelete(args[0]).then(() => {
  message.channel.send(` **${args[0]}** Adet mesaj başarıyla silindi. ✅`).then(msg => msg.delete(5000));
})
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['süpür'],
  permLevel: 0
};

exports.help = {
  name: 'süpür',
  description: 'Belirlenen miktarda mesajı siler.',
  usage: 'süpür <silinicek mesaj sayısı>'
};