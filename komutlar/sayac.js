
const Discord = require('discord.js')
const fs = require('fs')
const ayarlar = require('../ayarlar.json')
let kanal = JSON.parse(fs.readFileSync("././jsonlar/sayackanal.json", "utf8"));
exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`Bu komutu kullanabilmek için **Yönetici** iznine sahip olmalısın!`);
if(!kanal[message.guild.id]) return message.channel.send("Sayaç Kanalı Ayarlı Değil Ayarlamak İçin`€sayaç-kanal-ayarla <#kanal>`")

	if(!args[0]) {
		const embed = new Discord.RichEmbed()
			.setDescription(`Lütfen bir sayı yazın!`)
			.setColor(ayarlar.renk)
			.setTimestamp()
		message.channel.send({embed})
		return
	}
  
	let profil = JSON.parse(fs.readFileSync("./ayarlar/sayac.json", "utf8"));

	if(args[0] === "sıfırla") {
		if(!profil[message.guild.id]) {
			const embed = new Discord.RichEmbed()
				.setDescription(`Ayarlanmayan şeyi sıfırlayamazsın!`)
				.setColor(ayarlar.renk)
				.setTimestamp()
			message.channel.send({embed})
			return
		}
		delete profil[message.guild.id].sayi
		delete profil[message.guild.id]
		fs.writeFile("./ayarlar/sayac.json", JSON.stringify(profil), (err) => {
			console.log(err)
		})
		const embed = new Discord.RichEmbed()
			.setDescription(`Sayaç başarıyla sıfırlandı!`)
			.setColor(ayarlar.renk)
			.setTimestamp()
		message.channel.send({embed})
		return
	}

	if(isNaN(args[0])) {
		const embed = new Discord.RichEmbed()
			.setDescription(`Lütfen bir sayı yazın!`)
			.setColor(ayarlar.renk)
			.setTimestamp()
		message.channel.send({embed})
		return
	}

	if(args[0] <= message.guild.members.size) {
		const embed = new Discord.RichEmbed()
			.setDescription(`Lütfen sunucu sayısından [${message.guild.members.size}] daha yüksek bir değer girin!`)
			.setColor(ayarlar.renk)
			.setTimestamp()
		message.channel.send({embed})
		return
	}

	if(!profil[message.guild.id]){
		profil[message.guild.id] = {
			sayi: args[0]
		};
	}
	
	profil[message.guild.id].sayi = args[0]
	
	fs.writeFile("./ayarlar/sayac.json", JSON.stringify(profil), (err) => {
		console.log(err)
	})

	const embed = new Discord.RichEmbed()
		.setDescription(`Başarıyla sayaç **${args[0]}** olarak ayarlandı!`)
		.setColor(ayarlar.renk)
		.setTimestamp()
	message.channel.send({embed})
}

exports.conf = {
	enabled: true,
	guildOnly: true,
	aliases: ['sayaç-ayarla', 'sayac', 'sayaç'],
	permLevel: 2,
	kategori: 'yetkili'
}

exports.help = {
	name: 'sayaçayarla',
	description: 'Sayacı ayarlar.',
	usage: 'sayaçayarla [sayı/sıfırla]'
}
