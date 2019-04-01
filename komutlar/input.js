const Discord = require('discord.js');

exports.run = (client, message, args) => {
	 let blockedChars = args.join(' ').toLowerCase().
    replace(/q/g, 'ｑ').
	replace(/w/g, 'ｗ').
	replace(/e/g, 'ｅ').
	replace(/r/g, 'ｒ').
	replace(/t/g, 'ｔ').
	replace(/y/g, 'ｙ').
	replace(/u/g, 'ｕ').
	replace(/i/g, 'ｉ').
	replace(/o/g, 'ｏ').
	replace(/p/g, 'ｐ').
	replace(/a/g, 'ａ').
	replace(/s/g, 'ｓ').
	replace(/d/g, 'ｄ').
	replace(/f/g, 'ｆ').
	replace(/g/g, 'ｇ').
	replace(/h/g, 'ｈ').
	replace(/k/g, 'ｋ').
	replace(/j/g, 'ｊ').
	replace(/l/g, 'ｌ').
	replace(/z/g, 'ｚ').
	replace(/x/g, 'ｘ').
	replace(/c/g, 'ｃ').
	replace(/v/g, 'ｖ').
	replace(/b/g, 'ｂ').
	replace(/n/g, 'ｎ').
	replace(/m/g, 'ｍ').
    replace(/1/g, '１').
    replace(/2/g, '２').
    replace(/3/g, '３').
    replace(/4/g, '４').
    replace(/5/g, '５').
    replace(/6/g, '６').
    replace(/7/g, '７').
    replace(/8/g, '８').
    replace(/9/g, '９').
	replace(/ü/g, 'ｕ').
	replace(/ğ/g, 'ｇ').
	replace(/ı/g, 'ｉ').
	replace(/ç/g, 'ｃ').
	replace(/ş/g, 'ｓ').
	replace(/ö/g, 'ｏ').
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
  aliases: ['transpa'],
  permLevel: 0
};

exports.help = {
  name: 'inputtranspa',
  description: 'Güzel bir yazı stili ile herşey daha güzel...',
  usage: 'inputtranspa'
};
