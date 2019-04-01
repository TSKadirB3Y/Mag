const Discord = require('discord.js')
exports.run = (client, msg, args) => {
 if(msg.channel.nsfw || msg.channel.type === 'dm'){
   let embed = new Discord.RichEmbed()
   .setTitle(':underage: +18')
   .setColor("0xe2ff00")
   .setImage(("https://cdn.boob.bot/hentai/sex"+ Math.floor(Math.random() *66)+".jpg"))
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
   aliases: ['hjpg','henjpg'],
   permLevel: 0
 };

 exports.help = {
   name: 'h-jpg',
   description: 'NSFW bir resim gösterir.',
   usage: 'h-jpg'
 };