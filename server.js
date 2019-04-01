//console.log(`Bir Yeni Mesaj; Mesajın Atıldığı Sunucu ${msg.guild.name} Mesajı Atan Kişi : ${msg.author.username}#${msg.author.discriminator} Mesaj: ${msg}`)
const Discord = require('discord.js');
var express = require('express');
const ytdl = require('ytdl-core');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const { GOOGLE_API_KEY } = require('./ayarlar.json');
const YouTube = require('simple-youtube-api');
const superagent = require("superagent");
const chalk = require('chalk');
const db = require('quick.db')
const fs = require('fs');
const weather = require('weather-js')
const hastebin = require('hastebin-gen');
const moment = require('moment');
const jsonfile = require('jsonfile')
require('./util/eventLoader')(client);





const youtube = new YouTube(GOOGLE_API_KEY);

const queue = new Map();

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`${message}`);
};

  client.GetSupportChannel = (member) => {
    return new Promise ((resolve,reject) => {
      try{
        let exists = fs.existsSync('./jsonlar/destek.json')
        if (exists) {
          obj = jsonfile.readFileSync('./jsonlar/destek.json')
          if (!obj[member.guild.id]) resolve(undefined);
          else resolve(obj[member.guild.id]);
        }
      } catch (ex) {
        console.error(ex);
        reject(ex)
      }
    })
  }

  client.commands = new Discord.Collection();
  client.aliases = new Discord.Collection();
  fs.readdir('./komutlar/', (err, files) => {
    if (err) console.error(err);
    log(`${files.length} komut yüklenecek.`);
    files.forEach(f => {
      let props = require(`./komutlar/${f}`);
      log(`Yüklenen komut: ${props.help.name}.`);
      client.commands.set(props.help.name, props);
      props.conf.aliases.forEach(alias => {
        client.aliases.set(alias, props.help.name);
      });
    });
  });

  client.reload = command => {
    return new Promise((resolve, reject) => {
      try {
        delete require.cache[require.resolve(`./komutlar/${command}`)];
        let cmd = require(`./komutlar/${command}`);
        client.commands.delete(command);
        client.aliases.forEach((cmd, alias) => {
          if (cmd === command) client.aliases.delete(alias);
        });
        client.commands.set(command, cmd);
        cmd.conf.aliases.forEach(alias => {
          client.aliases.set(alias, cmd.help.name);
        });
        resolve();
      } catch (e){
        reject(e);
      }
    });
  };

  client.load = command => {
    return new Promise((resolve, reject) => {
      try {
        let cmd = require(`./komutlar/${command}`);
        client.commands.set(command, cmd);
        cmd.conf.aliases.forEach(alias => {
          client.aliases.set(alias, cmd.help.name);
        });
        resolve();
      } catch (e){
        reject(e);
      }
    });
  };

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.on("message", message => {
    const dmchannel = client.channels.find("name", "dm-log");
    if (message.channel.type === "dm") {
        if (message.author.bot) return;
        dmchannel.sendMessage("", {embed: {
            color: 3447003,
            title: `Gönderen: ${message.author.tag}`,
            description: `Bota Özelden Gönderilen DM: ${message.content}`
        }})
    }
});

client.on('message', message => {
if (message.content.toLowerCase() === prefix + "zekam") {
    var sans = ["11", "15", "20", "24", "28", "31", "39", "45", "49", "54", "58", "63", "67", "77", "73", "84", "80", "83", "96", "94", "99", "Albert Einstein mısın krdşm"];
    var sonuc = sans[Math.floor((Math.random() * sans.length))];
    const embed = new Discord.RichEmbed()
    .setColor(`0xe2ff00`)
    .addField(`***___Zekan___***`, `${sonuc}`)
    return message.channel.sendEmbed(embed);
}
});

client.on('message', message => {
if (message.content.toLowerCase() === prefix + "kaçcm") {
    var sans = ["Senin Malafatın 8cm! **Ɛ========>** Hahahaha","Senin Malafatın 18cm! **Ɛ==================>** İdare Eder","Senin Malafatın 16cm! **Ɛ================>** Fazla Asılıyorsun Biraz Rahat Bırak","Senin Malafatın 12cm! **Ɛ============>** Kızlar Büyük Sever Malesef","Senin Malafatın 19cm! **Ɛ===================>** Bu Güzeldi Evlat","Senin Malafatın 8cm! **Ɛ========>** Bu Bamyaya Sinek Bile Konmaz!","Senin Malafatın 1cm! **Ɛ=>** Diyecek Birşey Bulamıyorum","Senin Malafatın 31cm! **Ɛ=================================>** Johnny Sins'i Geçtin yavaaş","Senin Malafatın 17cm! **Ɛ=================>** Yol Almalısın","Senin Malafatın 50cm! **Ɛ=========================================>** Sanırsın Dinazor Mübarek!"];
    var sonuc = sans[Math.floor((Math.random() * sans.length))];
    const embed = new Discord.RichEmbed()
    .setColor(`0xe2ff00`)
    .addField(`***___KaçCm___***`, `${sonuc}`)
    return message.channel.sendEmbed(embed);
}
});


client.on('message', msg => {
if (msg.content.toLowerCase() === prefix + "sigara") {
msg.channel.send(':smoking: :cloud::cloud::cloud:')
.then(nmsg => nmsg.edit(':smoking: :cloud::cloud::cloud:'))
.then(nmsg => nmsg.edit(':smoking: :cloud::cloud:'))
.then(nmsg => nmsg.edit(':smoking: :cloud:'))
.then(nmsg => nmsg.edit('**Sigaram bitti** | **Sigara İçmeyenler Dertlenince Ne Yapıyor?** :smoking: **Sigara Hayattır.**'));
}
});


client.on('message', message => {
if (message.content.toLowerCase() === prefix + "özlüsöz") {
    var sans = ["Affetmek geçmişi değiştirmez ama geIeceğin önünü açar","İnsanIar seninIe konuşmayı bıraktığında, arkandan konuşmaya başIarIar","Hayattan korkmayın çocuklar;iyi ve doğru bir şeyler yaptığınız zaman hayat öyle güzel ki","Mutluluğu tatmanın tek çaresi, onu paylaşmaktır.","Küçük şeylere gereğinden çok önem verenler, elinden büyük iş gelmeyenlerdir.","Bize yeni düşmanlar lazım. Eskileri hayranımız oldular.","Asla vazgeçmeyin, kaybedenler yalnızca vazgeçenlerdir.","10 kilitli kapıdan daha güvenlidir babanın evde oluşu.","Sevmek için “yürek” sürdürmek için “emek” gerek.","Bir insanın, bir insana verebileceği en güzel hediye; ona ayırabileceği zamandır."," Benim neden kardeşim yok baba  Seni görünce ikincisine cesaret edemedik.","Kendini Ne Kadar Büyük Görürsen Gör. Bende Sadece Gözümün Gördüğü Kadarsın. Ötesi yok.","Mutlu olmayı yarına bırakmak, karşıya geçmek için nehrin durmasını beklemeye benzer ve bilirsin, o nehir asla durmaz."];
    var sonuc = sans[Math.floor((Math.random() * sans.length))];
    const embed = new Discord.RichEmbed()
    .setColor(`0xe2ff00`)
    .addField(`***___BORDO'dan Anlamlı Sözler___***`, `${sonuc}`)
    return message.channel.sendEmbed(embed);
}
});

client.on("message", message => {
if (message.content.toLowerCase() === prefix + "avatarım") {
message.channel.sendEmbed(new Discord.RichEmbed()
.setDescription(`Avatarınız:`)
.setImage(`${message.author.avatarURL} `)
.setColor("0xe2ff00"));
   }
});

client.on('message', msg => {
  if (msg.content.startsWith(prefix + "sikayet")) {//sunucu kurucusuna yazdığınız mesajı gönderir.
    msg.reply("Şikayetiniz Bildirilmiştir")
    let mesaj = msg.content.substring(2 + 3);
    msg.delete();
    msg.guild.owner.send(`Şikayet Bildiren: **${msg.author.tag}** \nŞikayet: ` + mesaj);
    }
    });

client.on ('message', message => {
if (message.content === prefix + "tkm") {
    var cumleler= ['Taş.', 'Kağıt.', 'Makas.'];
    var cumle = cumleler[Math.floor(Math.random() * cumleler.length)];
    const embed = new Discord.RichEmbed()
    .setColor(`0xe2ff00`)
    .setTitle('Taş-kağıt-makas;')
    .setDescription(cumle)
    .setFooter('Mag', client.user.avatarURL)
    .setTimestamp()
    message.channel.send(embed);
        }; 
});



//Settings!
const yourID = "432099351402119198"; //Instructions on how to get this: https://redd.it/40zgse //Kendi İD'nizi Yazın
const setupCMD = "€kayıt" //İstediğiniz Komut Yapabilirsiniz örn : !kayıtol
let initialMessage = `Sunucuya Hoşgeldiniz.Hayalet Emojisine Tıklayarak Kayıt Olabilirsiniz`; //Dilediğiniz Şeyi Yazabilirsiniz
const roles = ["Üye"]; //İstediğiniz Rolü Yazabilirsiniz
const reactions = ["👻"]; //İstediğiniz Emojiyi Ekleyebilirsiniz
const botToken = "";  //Burası Boş Kalsın
                     

client.login(botToken);

//If there isn't a reaction for every role, scold the user!
if (roles.length !== reactions.length) throw "Roles list and reactions list are not the same length!";

//Function to generate the role messages, based on your settings
function generateMessages(){
    var messages = [];
    messages.push(initialMessage);
    for (let role of roles) messages.push(`Kayıt Olmak İçin **"${role}"** Emojisine Tıkla!`); //DONT CHANGE THIS
    return messages;
}


client.on("message", message => {
    if (message.author.id == yourID && message.content.toLowerCase() == setupCMD){
        var toSend = generateMessages();
        let mappedArray = [[toSend[0], false], ...toSend.slice(1).map( (message, idx) => [message, reactions[idx]])];
        for (let mapObj of mappedArray){
            message.channel.send(mapObj[0]).then( sent => {
                if (mapObj[1]){
                  sent.react(mapObj[1]);  
                } 
            });
        }
    }
})


client.on('raw', event => {
    if (event.t === 'MESSAGE_REACTION_ADD' || event.t == "MESSAGE_REACTION_REMOVE"){
        
        let channel = client.channels.get(event.d.channel_id);
        let message = channel.fetchMessage(event.d.message_id).then(msg=> {
        let user = msg.guild.members.get(event.d.user_id);
        
        if (msg.author.id == client.user.id && msg.content != initialMessage){
       
            var re = `\\*\\*"(.+)?(?="\\*\\*)`;
            var role = msg.content.match(re)[1];
        
            if (user.id != client.user.id){
                var roleObj = msg.guild.roles.find(r => r.name === role);
                var memberObj = msg.guild.members.get(user.id);
                
                if (event.t === "MESSAGE_REACTION_ADD"){
                    memberObj.addRole(roleObj)
                } else {
                    memberObj.removeRole(roleObj);
                }
            }
        }
        })
 
    }   
});

client.on('message', async message => {
  const ms = require('ms');
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  let u = message.mentions.users.first() || message.author;
  if (command === "stattemizle") {
  if (!message.guild.channels.find(channel => channel.name === "Sunucu İstatistik")) return message.channel.send(" İstatistik ayarlanmamış.")
  if (!message.member.hasPermission('ADMINISTRATOR'))
  return message.channel.send(" Yetkin bulunmuyor.");
      const a = message.guild.channels.find(channel => channel.name === "Sunucu İstatistik").delete()
      if(!a) return console.log("guildStats")
      const b = message.guild.channels.find(channel => channel.name === `Üye sayısı: ${message.guild.memberCount}`).delete()
      if(!b) return console.log("guildStatsMember")
      const c = message.guild.channels.find(channel => channel.name === `Bot sayısı: ${message.guild.members.filter(m => m.user.bot).size}`).delete()
      if(!c) return console.log("guildStatsBot")
      const d = message.guild.channels.find(channel => channel.name === `Kanal sayısı: ${message.guild.channels.size}`).delete() //|| message.guild.channels.find(channel => channel.name === `Kanal sayısı: ${message.guild.channels.size-1}`).delete() || message.guild.channels.find(channel => channel.name === `Kanal sayısı: ${message.guild.channels.size-1}`).delete() || message.guild.channels.find(channel => channel.name === `Kanal sayısı: ${message.guild.channels.size-2}`).delete()
      if(!d) return console.log("guildStatsChannel")
      message.channel.send(" Kanallar temizlendi.")
    }
  if (command === "statayarla") {
  if (message.guild.channels.find(channel => channel.name === "Sunucu İstatistik")) return message.channel.send(" Zaten istatistik ayarlanmış.")
  if (!message.member.hasPermission('ADMINISTRATOR'))
  return message.channel.send(" Yetkin bulunmuyor.");
  message.channel.send(`Kategori ve kanal kurulumu başlatılsın mı? başlatılacak ise **evet** yazınız.`)
      message.channel.awaitMessages(response => response.content === 'evet', {
        max: 1,
        time: 10000,
        errors: ['time'],
      })
    .then((collected) => {
   message.guild.createChannel('Sunucu İstatistik', 'category', [{
  id: message.guild.id,
  deny: ['CONNECT'],
  deny: ['VIEW_CHANNEL']
}]);

 message.guild.createChannel(`Üye sayısı: ${message.guild.memberCount}`, 'voice')
.then(channel =>
 channel.setParent(message.guild.channels.find(channel => channel.name === "Sunucu İstatistik")));
 message.guild.createChannel(`Bot sayısı: ${message.guild.members.filter(m => m.user.bot).size}`, 'voice')
.then(channel =>
 channel.setParent(message.guild.channels.find(channel => channel.name === "Sunucu İstatistik")));
message.guild.createChannel(`Kanal sayısı: ${message.guild.channels.size}`, 'voice')
.then(channel =>
 channel.setParent(message.guild.channels.find(channel => channel.name === "Sunucu İstatistik")));
  message.channel.send(" Sunucu paneli ayarlandı!")
        })
}
});

client.on('guildCreate', guild => {
    let channel = client.channels.get("499275327541870592")//botun girdiyi sunucuyu kanala gönderelim
    const embed = new Discord.RichEmbed()
        .setColor("GREEN")
        .setAuthor(`Giriş ${guild.name}`)
        .setThumbnail(guild.iconURL)
        .addField("Kurucu ", guild.owner.user.tag)
        .addField("Sunucu ID", guild.id, true)
        .addField("Toplam Kullanıcı", guild.memberCount, true)
        .addField("Toplam Kanal", guild.channels.size, true)
    channel.send(embed);
});
client.on('guildDelete', guild => { 
    let channel = client.channels.get("499275327541870592")//botun çıktıgı sunucuyu kanala gönderelim

    const embed = new Discord.RichEmbed()
        .setColor("RED")
        .setAuthor(`Çıkış ${guild.name}`)
        .setThumbnail(guild.iconURL)
        .addField("Kurucu", guild.owner.user.tag)
        .addField("Sunucu ID", guild.id, true)
        .addField("Toplam Kullanıcı", guild.memberCount, true)
        .addField("Toplam Kanal", guild.channels.size, true)
    channel.send(embed);
});


client.on('message', message => {
if (message.content.toLowerCase() === prefix + "s-küfür") {
    var sans = ["Ananın Amına Teletabillerin Antenlerini Sokar Göbeğindeki Televizyondan Ulusal Porno Yayını Yaparım","Ananı Özgürlük Heykelinin Yanmayan Meşalesinde Siker Şehri Duman Ederim","Ananı İkiz Kulelerinin Yedinci Katına Çıkartır Amına Uçakla Girerim","Ananın Amına Pandora Kutusu Sokar İçinden Tavşan Çıkartırım","Tokyo Drift'i İzleyip Köyde Traktörle Drift Yapmaya Çalışan Abinin Götüne Kamyonla Gireyim","Ananı Neil Amstrongla Beraber Ay'a Çıkartıp Siker Hardcore Movie Alırım","Edisonla Kanka Olur Ananı Fakir Mahallenizde Yanmayan Sokak Direğine Bağlar Sike Sike Trafoyu Patlatırım","Kilotlu Çorapla Denize Giren Kız Kardeşinin Kafasını Suya Sokup Boğulana Kadar Sikeyim","Ananı Galatasaray fenerbahçe Derbisinde Kale Yapar Hakan Şükür Gibi Santra Çizgisinden Gol Atarım"]
  var sonuc = sans[Math.floor((Math.random() * sans.length))];
    const embed = new Discord.RichEmbed()
    .setColor(`0xe2ff00`)
    .addField(`***___Mag Anlamlı Küfürler___***`, `${sonuc}`)
    return message.channel.sendEmbed(embed);
}
});

client.on('message', async msg => {




	if (msg.author.bot) return undefined;
	if (!msg.content.startsWith(prefix)) return undefined;

	const args = msg.content.split(' ');
	const searchString = args.slice(1).join(' ');
	const url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
	const serverQueue = queue.get(msg.guild.id);
	let command = msg.content.toLowerCase().split(' ')[0];
	command = command.slice(prefix.length)

	if (command === 'çal') {
		const voiceChannel = msg.member.voiceChannel;
		if (!voiceChannel) return msg.channel.send('** :mute:Müzik Çalmak İçin Bir Sesli Odaya Girmelisin**');
		const permissions = voiceChannel.permissionsFor(msg.client.user);
		if (!permissions.has('CONNECT')) {
			return msg.channel.send('**:mute:O Odaya Girme Yetkim Yok**');
		}
		if (!permissions.has('SPEAK')) {
			return msg.channel.send('**:mute:Bu Odada Konuşma Yetkim Yok**');
		}
		if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
			const playlist = await youtube.getPlaylist(url);
			const videos = await playlist.getVideos();
			for (const video of Object.values(videos)) {
				const video2 = await youtube.getVideoByID(video.id); // eslint-disable-line no-await-in-loop
				await handleVideo(video2, msg, voiceChannel, true); // eslint-disable-line no-await-in-loop
			}
			return msg.channel.send(`**✅ Oynatma Listesi: **${playlist.title}** Kuyruğa Eklendi!**`);
		} else {
			try {
				var video = await youtube.getVideo(url);
			} catch (error) {
				try {
					var videos = await youtube.searchVideos(searchString, 10);
					let index = 0;
					msg.channel.send(`
__**Müzik Seçim Listesi:**__

${videos.map(video2 => `**${++index} -** ${video2.title}`).join('\n')}

**:warning:  Lütfen 10 Saniye İçerisinde Müzik Seçiniz.Aksi Takdirde Liste İptal Olacaktır! :warning: **

**:question: 1-10 arasındaki arama sonuçlarından birini seçmek için lütfen bir değer belirtin. :warning: **
					`);
					// eslint-disable-next-line max-depth
					try {
						var response = await msg.channel.awaitMessages(msg2 => msg2.content > 0 && msg2.content < 11, {
							maxMatches: 1,
							time: 10000,
							errors: ['time']
						});
					} catch (err) {
						console.error(err);
						return msg.channel.send(':x:** Bir Değer Seçilmediği İçin Video Seçimi İptal Edilmiştir.**');
					}
					const videoIndex = parseInt(response.first().content);
					var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
				} catch (err) {
					console.error(err);
					return msg.channel.send(':x:** Aradım Ama Hiç Bir Şey Bulamadım. Üzgünüm!**');
				}
			}
			return handleVideo(video, msg, voiceChannel);
		}
	} else if (command === 'geç') {
		if (!msg.member.voiceChannel) return msg.channel.send('**:mute:Sesli Bir Odada Değilsiniz Lütfen Bir Odaya Giriniz!**');
		if (!serverQueue) return msg.channel.send(':x: **Hiç Bir Müzik Çalmamakta.**');
		serverQueue.connection.dispatcher.end('**Müziği Geçtim!**');
		return undefined;
	} else if (command === 'dur') {
		if (!msg.member.voiceChannel) return msg.channel.send('**:mute:Sesli Bir Odada Değilsiniz Lütfen Bir Odaya Giriniz!**');
		if (!serverQueue) return msg.channel.send(':x: **Hiç Bir Müzik Çalmamakta.**');
		msg.channel.send(`:stop_button: **${serverQueue.songs[0].title}** Adlı Müzik Durduruldu`);
		serverQueue.songs = [];
		serverQueue.connection.dispatcher.end('**Müzik Bitti**');
		return undefined;
	} else if (command === 'ses') {
		if (!msg.member.voiceChannel) return msg.channel.send('**:mute:Sesli Bir Odada Değilsiniz Lütfen Bir Odaya Giriniz!**');
		if (!serverQueue) return msg.channel.send(':x: **Hiç Bir Müzik Çalmamakta.**');
		if (!args[1]) return msg.channel.send(`:loud_sound: Şuanki Ses Seviyesi: **${serverQueue.volume}**`);
		serverQueue.volume = args[1];
		serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 5);
		return msg.channel.send(`:loud_sound: Ses Seviyesi Ayarlanıyor: **${args[1]}**`);
	} else if (command === 'çalan') {
		if (!serverQueue) return msg.channel.send(':x: **Çalan Müzik Bulunmamakta**');
		return msg.channel.send(`🎶 Şuanda Çalan Müzik: **${serverQueue.songs[0].title}**`);
	} else if (command === 'kuyruk') {
		if (!serverQueue) return msg.channel.send(':x: **Çalan Müzik Bulunmamakta**');
		return msg.channel.send(`
__**Müzik Listesi:**__

**:warning:  Lütfen 10 Saniye İçerisinde Müzik Seçiniz.Aksi Takdirde Liste İptal Olacaktır! :warning: **

${serverQueue.songs.map(song => `**-** ${song.title}`).join('\n')}
**Şuanda Çalan Müzik:** ${serverQueue.songs[0].title}
		`);
	} else if (command === 'duraklat') {
		if (serverQueue && serverQueue.playing) {
			serverQueue.playing = false;
			serverQueue.connection.dispatcher.pause();
			return msg.channel.send('**⏸ Müzik Senin İçin Durduruldu!**');
		}
		return msg.channel.send(':x: **Çalan Müzik Bulunmamakta**');
	} else if (command === 'devam') {
		if (serverQueue && !serverQueue.playing) {
			serverQueue.playing = true;
			serverQueue.connection.dispatcher.resume();
			return msg.channel.send('**▶ Müzik Senin İçin Devam Etmekte!**');
		}
		return msg.channel.send(':x: Çalan Müzik Bulunmamakta.');
	}

	return undefined;
});

async function handleVideo(video, msg, voiceChannel, playlist = false) {
	const serverQueue = queue.get(msg.guild.id);
	console.log(video);
	const song = {
		id: video.id,
		title: (video.title),
		url: `https://www.youtube.com/watch?v=${video.id}`
	};
	if (!serverQueue) {
		const queueConstruct = {
			textChannel: msg.channel,
			voiceChannel: voiceChannel,
			connection: null,
			songs: [],
			volume: 5,
			playing: true
		};
		queue.set(msg.guild.id, queueConstruct);

		queueConstruct.songs.push(song);

		try {
			var connection = await voiceChannel.join();
			queueConstruct.connection = connection;
			play(msg.guild, queueConstruct.songs[0]);
		} catch (error) {
			console.error(`:x: **Odaya Girememekteyim: ${error}**`);
			queue.delete(msg.guild.id);
			return msg.channel.send(`:x: **Odaya Girememekteyim: ${error}**`);
		}
	} else {
		serverQueue.songs.push(song);
		console.log(serverQueue.songs);
		if (playlist) return undefined;
		else return msg.channel.send(`✅ **${song.title}** Adlı Müzik Kuyruğa Eklendi!`);
	}
	return undefined;
}

function play(guild, song) {
	const serverQueue = queue.get(guild.id);

	if (!song) {
		serverQueue.voiceChannel.leave();
		queue.delete(guild.id);
		return;
	}
	console.log(serverQueue.songs);

	const dispatcher = serverQueue.connection.playStream(ytdl(song.url))
		.on('end', reason => {
			if (reason === ':x: **Yayın Akış Hızı Yeterli Değil.**') console.log('Müzik Bitti.');
			else console.log(reason);
			serverQueue.songs.shift();
			play(guild, serverQueue.songs[0]);
		})
		.on('error', error => console.error(error));
	dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);

	serverQueue.textChannel.send(`🎶 : **${song.title}** Adlı Müzik Başlıyor! :white_check_mark: `);
}



client.elevation = message => {
  if(!message.guild) {
	return; }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;

client.on('warn', e => {
  console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
  console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.on('guildCreate', guild => {
  const owner = guild.owner
 
  let merhaba = new Discord.RichEmbed()
  .setColor(Math.floor(Math.random() * (0xFFFFFF + 1)))
  .setAuthor(guild.name, guild.iconURL)
  .addField('**Mag  Bot sunucunuza eklendi!**', `${owner}`)
  .addField('**Mag Bot** sunucunuzdaki insanlara kolaylıklar sağlar.', `**${prefix}bilgi** yazmanız yeterlidir!`)
  .addField('**Botumuzun özelliklerini öğrenmek için**', `**${prefix}yardım** yazmanız yeterlidir!`)
  .addField('Botumuzu eklemek istiyorsanız', `**${prefix}davet** yazarak ekleyebilirsiniz.`)
  owner.send(merhaba);
});

client.on('guildCreate', guild => {
  const embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setTitle('Bir Sunucuya Katıldım;')
  .setDescription(`Bot, 》${guild.name}《 adlı sunucuya katıldı [${guild.memberCount} Üye]!`)
  .setFooter('Mag BOT', client.user.avatarURL)
  .setTimestamp()
  client.channels.get('481401459947077633').send(embed);
});

client.on('guildDelete', guild => {
  const embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setTitle('Bir Sunucudan Ayrıldım;')
  .setDescription(`Bot, 》${guild.name}《 sunucudan ayrıldı [${guild.memberCount} Üye]!`)
  .setFooter('Mag BOT', client.user.avatarURL)
  .setTimestamp()
  client.channels.get('481401459947077633').send(embed);
});


const Jimp = require('jimp');


client.on("guildMemberAdd", async member => {
const fs = require('fs');
let gc = JSON.parse(fs.readFileSync("./jsonlar/gc.json", "utf8"));
  
  const hgK = member.guild.channels.get(gc[member.guild.id].gkanal)
    if (!hgK) return;
        let username = member.user.username;
         
                        const bg = await Jimp.read("https://raw.githubusercontent.com/Serhann/sohbet-ve-oyun/master/guildAdd.png");
            const userimg = await Jimp.read(member.user.avatarURL);
            var font;
            if (member.user.tag.length < 15) font = await Jimp.loadFont(Jimp.FONT_SANS_128_WHITE);
            else if (member.user.tag.length > 15) font = await Jimp.loadFont(Jimp.FONT_SANS_64_WHITE);
            else font = await Jimp.loadFont(Jimp.FONT_SANS_32_WHITE);
            await bg.print(font, 430, 170, member.user.tag);
            await userimg.resize(362, 362);
            await bg.composite(userimg, 43, 26).write("./img/"+ member.id + ".png");
              setTimeout(function () {
                    hgK.send(new Discord.Attachment("./img/" + member.id + ".png"));
              }, 1000);
              setTimeout(function () {
                fs.unlink("./img/" + member.id + ".png");
              }, 10000);
        
    })
client.on("guildMemberRemove", async member => {
const fs = require('fs');
let gc = JSON.parse(fs.readFileSync("./jsonlar/gc.json", "utf8"));
  
  const hgK = member.guild.channels.get(gc[member.guild.id].gkanal)
    if (!hgK) return;
        let username = member.user.username;
         
                        const bg = await Jimp.read("https://raw.githubusercontent.com/Serhann/sohbet-ve-oyun/master/guildRemove.png");
            const userimg = await Jimp.read(member.user.avatarURL);
            var font;
            if (member.user.tag.length < 15) font = await Jimp.loadFont(Jimp.FONT_SANS_128_WHITE);
            else if (member.user.tag.length > 15) font = await Jimp.loadFont(Jimp.FONT_SANS_64_WHITE);
            else font = await Jimp.loadFont(Jimp.FONT_SANS_32_WHITE);
            await bg.print(font, 430, 170, member.user.tag);
            await userimg.resize(362, 362);
            await bg.composite(userimg, 43, 26).write("./img/"+ member.id + ".png");
              setTimeout(function () {
                    hgK.send(new Discord.Attachment("./img/" + member.id + ".png"));
              }, 1000);
              setTimeout(function () {
                fs.unlink("./img/" + member.id + ".png");
              }, 10000);
        
    })

client.on('guildBanAdd', async (guild, member) => {
    const fs = require('fs');
let gc = JSON.parse(fs.readFileSync("./jsonlar/log.json", "utf8"));
  
  const hgK = member.guild.channels.get(gc[member.guild.id].gkanal)
    if (!hgK) return;
  

   const embed = new Discord.RichEmbed()
	
	
	
			.setTitle('Üye yasaklandı.')
			.setAuthor(member.user.tag, member.user.avatarURL)
			.setColor("15158332")
			.setDescription(`<@!${member.user.id}>, ${member.user.tag}`)
			.setThumbnail(member.user.avatarURL)
			.setFooter(`ID: ${member.user.id}`)
			.setTimestamp();
			hgK.send({embed});

		
	})
	
	.on('guildBanRemove', async (guild, member) => {
		    const fs = require('fs');
let gc = JSON.parse(fs.readFileSync("./jsonlar/log.json", "utf8"));
  
  const hgK = member.guild.channels.get(gc[member.guild.id].gkanal)
    if (!hgK) return;
			var embed = new Discord.RichEmbed()
			.setTitle('Üyenin yasaklaması kaldırıldı.')
			.setAuthor(member.user.tag, member.user.avatarURL)
			.setColor(3447003)
			.setDescription(`<@!${member.user.id}>, ${member.user.tag}`)
			.setThumbnail(member.user.avatarURL)
			.setFooter(`ID: ${member.user.id}`)
			.setTimestamp();
			hgK.send({embed});
		
	})
	
	.on('messageDelete', async msg => {
		if (!msg.guild) return;
    const fs = require('fs');
let gc = JSON.parse(fs.readFileSync("./jsonlar/log.json", "utf8"));
  
  const hgK = await msg.guild.channels.get(gc[msg.guild.id].gkanal)
    if (!hgK) return;
			var embed = new Discord.RichEmbed()
			.setAuthor(msg.author.tag, msg.author.avatarURL)
			.setColor(15158332)
			.setDescription(`<@!${msg.author.id}> tarafından <#${msg.channel.id}> kanalına gönderilen "${msg.content}" mesajı silindi.`)
			.setFooter(`ID: ${msg.id}`)
			hgK.send({embed});
		
	})

	.on('channelCreate', async channel => {
		if (!channel.guild) return;
    const fs = require('fs');
let gc = JSON.parse(fs.readFileSync("./jsonlar/log.json", "utf8"));
  
  const hgK = channel.guild.channels.get(gc[channel.guild.id].gkanal)
    if (!hgK) return;
		
			if (channel.type === "text") {
				var embed = new Discord.RichEmbed()
				.setColor(3066993)
				.setAuthor(channel.guild.name, channel.guild.iconURL)
				.setDescription(`<#${channel.id}> kanalı oluşturuldu. _(metin kanalı)_`)
				.setFooter(`ID: ${channel.id}`)
				hgK.send({embed});
			};
			if (channel.type === "voice") {
				var embed = new Discord.RichEmbed()
				.setColor(3066993)
				.setAuthor(channel.guild.name, channel.guild.iconURL)
				.setDescription(`${channel.name} kanalı oluşturuldu. _(sesli kanal)_`)
				.setFooter(`ID: ${channel.id}`)
				hgK.send({embed});
			}
		
	})
		
	.on('channelDelete', async channel => {
		    const fs = require('fs');
let gc = JSON.parse(fs.readFileSync("./jsonlar/log.json", "utf8"));
  
  const hgK = channel.guild.channels.get(gc[channel.guild.id].gkanal)
    if (!hgK) return;
			if (channel.type === "text") {
				let embed = new Discord.RichEmbed()
				.setColor(3066993)
				.setAuthor(channel.guild.name, channel.guild.iconURL)
				.setDescription(`${channel.name} kanalı silindi. _(metin kanalı)_`)
				.setFooter(`ID: ${channel.id}`)
				hgK.send({embed});
			};
			if (channel.type === "voice") {
				let embed = new Discord.RichEmbed()
				.setColor(3066993)
				.setAuthor(channel.guild.name, channel.guild.iconURL)
				.setDescription(`${channel.name} kanalı silindi. _(sesli kanal)_`)
				.setFooter(`ID: ${channel.id}`)
				hgK.send({embed});
			}
		
	})




const GIFEncoder = require('gifencoder');

client.on("message", async message => {
  var user = message.mentions.users.first() || message.author;
    if (message.content.toLowerCase() === prefix + "trigger") {
        const options = {
            size: 256,
          
            frames: 16
        }

        message.channel.send("İşleniyor.. Lütfen bekleyiniz. ⏲").then(m => m.delete(1000));

        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        const args = message.content.split(' ').slice(1);
        let member = message.mentions.users.first()
        if (args[0] === undefined) member = message.author;
        let avatarurl = member.avatarURL;
        if (['jpg', 'jpeg', 'gif', 'png', 'webp'].some(x => args.join(' ').includes(x))) {
            avatarurl = args.join(' ').replace(/gif|webp/g, 'png');
        }
        const base = new Jimp(options.size, options.size);
        const avatar = await Jimp.read(avatarurl);
        const text = await Jimp.read('https://cdn.glitch.com/a7d3b6b8-9b7a-4aab-9ee4-1db0c07ef1eb%2Ftriggered.png?1526842782410');
        const tint = await Jimp.read('https://cdn.glitch.com/5fed2789-b430-43c5-bf1b-a8dd32d46b97%2Fred.png?1527082445373');
        avatar.resize(320, 320);
        tint.scaleToFit(base.bitmap.width, base.bitmap.height);
        tint.opacity(0.2);
        text.scaleToFit(280, 60);
        const frames = [];
        const buffers = [];
        const encoder = new GIFEncoder(options.size, options.size);
        const stream = encoder.createReadStream();
        let temp;

        stream.on('data', async buffer => await buffers.push(buffer));
        stream.on('end', async () => {
            return await message.channel.send({
                files: [{
                    name: 'notechtriggered.gif',
                    attachment: Buffer.concat(buffers)
                }]
            });
        });
        for (let i = 0; i < options.frames; i++) {
            temp = base.clone();
            if (i === 0) {
                temp.composite(avatar, -16, -16);
            } else {
                temp.composite(avatar, -32 + getRandomInt(-16, 16), -32 + getRandomInt(-16, 16));
            }
            temp.composite(tint, 0, 0);
            if (i === 0) temp.composite(text, -10, 200);
            else temp.composite(text, -12 + getRandomInt(-8, 8), 200 + getRandomInt(-0, 12));
            frames.push(temp.bitmap.data);
        }
        encoder.start();
        encoder.setRepeat(0);
        encoder.setDelay(20);
        for (const frame of frames) {
            encoder.addFrame(frame);
        }
        encoder.finish();
    }
});
const snekfetch = require('snekfetch');
let points = JSON.parse(fs.readFileSync('./xa.json', 'utf8'));
let profil = JSON.parse(fs.readFileSync("./jsonlar/profil.json", "utf8"));
let paralar = JSON.parse(fs.readFileSync("./jsonlar2/ppara.json", "utf8"));
let biyografi = JSON.parse(fs.readFileSync("./jsonlar2/pb.json", "utf8"));
var f = [];
function factorial (n) {
  if (n == 0 || n == 1)
    return 1;
  if (f[n] > 0)
    return f[n];
  return f[n] = factorial(n-1) * n;
};
function clean(text) {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;
}

client.on("message", async message => {

  let yaş;
         if (!profil[message.author.id]) {
           yaş = "Belirtilmemiş"
     }else{
     yaş = `${profil[message.author.id].gkanal}`
     }
   
  let pb;
         if (!biyografi[message.author.id]) {
           pb = "Belirtilmemiş"
     }else{
     pb = `${biyografi[message.author.id].gkanal}`
     }
    if (message.channel.type === "dm") return;

  if (message.author.bot) return;
var user = message.mentions.users.first() || message.author;
  if (!message.guild) user = message.author;

  if (!points[user.id]) points[user.id] = {
    points: 0,
    level: 0,
  };

  let userData = points[user.id];
  userData.points++;
let para = "0";
  let paracuk = "100"
  let curLevel = Math.floor(0.1 * Math.sqrt(userData.points));
  if (curLevel > userData.level) {
    var paralar = "100"
    }
  fs.writeFile('./xa.json', JSON.stringify(points), (err) => {
    if (err) console.error(err)
  })

 
  if (message.content.toLowerCase() === prefix + 'profil' || message.content.toLowerCase() === prefix + 'profile') {
const level = new Discord.RichEmbed().setTitle(`${user.username}`).setDescription(`**Seviye:** ${userData.level}\n**Puan:** ${userData.points} \n**Yaş** : ${yaş} \n**Biyografi** : ${pb}`).setColor("#ffff00").setFooter(``).setThumbnail(user.avatarURL)
message.channel.send(`:pencil: **| ${user.username} adlı kullanıcının profil kartı**`)
message.channel.send(level)
  }

});

client.on('message', message => {

  if (message.author.bot) return;
  if (!message.content.startsWith(ayarlar.json)) return;
  
  let command = message.content.split(' ')[0];
  command = command.slice(ayarlar.prefix.length);

  let args = message.content.split(' ').slice(1);
if (command === 'dbl-destekçi') {
  if(message.guild.id !== "481210247260667906") return message.reply("Bu Komutu Sadece Botun Destek Sunucusunda Kullanabilirsin")
    const DBL = require("dblapi.js");
    const dbl = new DBL(process.env.DBLToken, client);

    dbl.hasVoted(message.author.id).then(voted => {
        if (voted){
            message.channel.send("Destekçi rolün verildi.");
        client.guilds.get("481210247260667906").members.get(`${message.author.id}`).addRole(client.guilds.get("481210247260667906").roles.find('name', "Destekçi"))}
        else if (!voted) return message.reply("Bu Komutu Kullanmak İçin\nOy vermek için: https://discordbots.org/bot/461845884586557440/vote")
    });
} 
});
  client.on("guildMemberAdd", member => {
 const db = require('quick.db')  
  		    const fs = require('fs');
let gc = JSON.parse(fs.readFileSync("./otorol.json", "utf8"));
var role =  gc[member.guild.id].rol

  const rol = member.guild.roles.find('name', role);
    if (!rol) return
    member.addRole(rol);
  ;
}); 
Link: http://www.pastebin.it/1108/

client.on("message", async message => {
    let sayac = JSON.parse(fs.readFileSync("./ayarlar/sayac.json", "utf8"));
    if(sayac[message.guild.id]) {
        if(sayac[message.guild.id].sayi <= message.guild.members.size) {
            const embed = new Discord.RichEmbed()
                .setDescription(`Tebrikler ${message.guild.name}! Başarıyla ${sayac[message.guild.id].sayi} kullanıcıya ulaştık! Sayaç sıfırlandı!`)
                .setColor(ayarlar.renk)
                .setTimestamp()
            message.channel.send({embed})
            delete sayac[message.guild.id].sayi;
            delete sayac[message.guild.id];
            fs.writeFile("./ayarlar/sayac.json", JSON.stringify(sayac), (err) => {
                console.log(err)
            })
        }
    }
})



client.on("guildMemberAdd", async member => {
      const fs = require('fs');
let gc = JSON.parse(fs.readFileSync("./jsonlar/sayackanal.json", "utf8"));
  
  const hgK = member.guild.channels.get(gc[member.guild.id].gkanal)
    let sayac = JSON.parse(fs.readFileSync("./ayarlar/sayac.json", "utf8"));
    hgK.send(`:inbox_tray:** ${member.user.tag}** Katıldı ${sayac[member.guild.id].sayi} kullanıcı olmamıza son ${sayac[member.guild.id].sayi - member.guild.members.size} üye kaldı!`)
})

client.on("guildMemberRemove", async member => {
        const fs = require('fs');
let gc = JSON.parse(fs.readFileSync("./jsonlar/sayackanal.json", "utf8"));
  
  const hgK = member.guild.channels.get(gc[member.guild.id].gkanal)
    let sayac = JSON.parse(fs.readFileSync("./ayarlar/sayac.json", "utf8"));
    hgK.send(`:outbox_tray:**${member.user.tag}** Ayrıldı ${sayac[member.guild.id].sayi} kullanıcı olmamıza son ${sayac[member.guild.id].sayi - member.guild.members.size} üye kaldı!`)
})
client.login(ayarlar.token);