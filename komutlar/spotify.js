const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {



    let google = args.slice(0).join('+');

        let link = `https://open.spotify.com/search/results/` + google;
        if(!link)return message.reply("Hata !")
  if(!google) return message.reply("**Lütfen Ne Aratacağımı Yaz**")
        let embed = new Discord.RichEmbed()
	
    .setColor("0xe2ff00")
    .setTimestamp()
    
	.addField("Kelime:", `${args.slice(0).join(' ')}`)
	.addField('Link:', `${link}`)
.setFooter('Mag | Spotify Arama Sistemi')	
          
	message.channel.send(embed);

  
}



exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['s-arama'],
  permLevel: 0
};

exports.help = {
  name: 's-arama',
  description: 'Bot sunucudan ayrılır.',
  usage: 'ayrıl'
};
