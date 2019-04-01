const Discord = require('discord.js')
exports.run = (client, msg, args) => {
 if(msg.channel.nsfw || msg.channel.type === 'dm'){
   let embed = new Discord.RichEmbed()
   .setTitle(':underage: +18')
   .setColor("0xe2ff00")
   .setImage(("https://cdn.boob.bot/Gifs/19"+ Math.floor(Math.random() * 99 )+".gif"))
   .setFooter(`${msg.author.tag} `, msg.author.avatarURL)
   msg.channel.send(embed)
}
 else{
       msg.channel.send({embed: {
color: Math.floor(Math.random() * (0xFFFFFF + 1)),
description: ('Bu kanal NSFW(Not Safe For Work) kanalı değil!')
 }})
 }
};
 exports.conf = {
   enabled: true,
   guildOnly: false,
   aliases: ['nsfw'],
   permLevel: 0
 };

 exports.help = {
   name: 'gif',
   description: 'NSFW bir resim gösterir.',
   usage: 'gif'
 };
