const Discord = require('discord.js');

exports.run = (client, message, args) => {
	 let blockedChars = args.join(' ').toLowerCase().
    replace(/q/g, 'ｑ').
	replace(/w/g, 'ω').
	replace(/e/g, 'ε').
	replace(/r/g, 'Ʀ').
	replace(/t/g, '†').
	replace(/y/g, 'ψ').
	replace(/u/g, 'u').
	replace(/i/g, 'ɨ').
	replace(/o/g, 'ø').
	replace(/p/g, 'ρ').
	replace(/a/g, 'α').
	replace(/s/g, '$').
	replace(/d/g, 'δ').
	replace(/f/g, 'Ŧ').
	replace(/g/g, 'ʛ').
	replace(/h/g, 'ԋ').
	replace(/k/g, 'κ').
	replace(/j/g, 'נ').
	replace(/l/g, 'Ł').
	replace(/z/g, 'z').
	replace(/x/g, 'א').
	replace(/c/g, 'ƈ').
	replace(/v/g, 'υ').
	replace(/b/g, 'в').
	replace(/n/g, 'π').
	replace(/m/g, 'ʍ').
    replace(/1/g, '１').
    replace(/2/g, '2 ').
    replace(/3/g, 'ɝ').
    replace(/4/g, '４').
    replace(/5/g, ' ƽ').
    replace(/6/g, '6').
    replace(/7/g, '７').
    replace(/8/g, 'Ȣ').
    replace(/9/g, 'ף').
	replace(/ü/g, 'u').
	replace(/ğ/g, 'ʛ').
	replace(/ı/g, 'ɨ').
	replace(/ç/g, 'ƈ').
	replace(/ş/g, '$').
	replace(/ö/g, 'ø').
    replace(/0/g, '0');
	let mesaj = args.slice(0).join(' ');
	if (mesaj.length < 1) return message.channel.send(':no_entry: Duyuru yapabilmek için komuttan sonra birşey yazman gerekiyor...');
    return message.channel.send(blockedChars).catch(e => {
    client.log.error(e);
  });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['input'],
  permLevel: 0
};

exports.help = {
  name: 'inputtranspa',
  description: 'Güzel bir yazı stili ile herşey daha güzel...',
  usage: 'input'
};
