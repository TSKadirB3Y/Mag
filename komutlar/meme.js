const Discord = require('discord.js') 
exports.run = (client, msg, args) => {
  if(msg.channel.nsfw || msg.channel.type ==='dm'){
    let embed = new Discord.RichEmbed()
    .setColor("0xe2ff00")
    .setAuthor('Wauw Olumsuz Örnek')
    .setImage(("http://media.oboobs.ru/boobs_preview/0"+ Math.floor(Math.random() * (8317 - 1011) + 1011)+".jpg"))
    msg.channel.send(embed)

}
  else{
        msg.channel.send({embed: {
 color: Math.floor(Math.random() * (0xFFFFFF + 1)),
 description: ('âš ï¸Bu kanal `nsfw` kanalÄ± deÄŸil.EÄŸer bÃ¶yle bi yazÄ± kanalÄ± yoksa oluÅŸturabilirsin!')
 }})
 }
};
 exports.conf = {
   enabled: true,
   guildOnly: false,
   aliases: ['boobs'],
   permLevel: 0
 };

 exports.help = {
   name: 'meme',
   description: ' bir resim gösterir.',
   usage: 'meme'
 };