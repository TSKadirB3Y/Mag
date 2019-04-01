const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const fs = require("fs");
exports.run = (client, message, params) => {
var Random = [
'**Donarak**',
'**Kafaya Tek Kurşun Yiyerek**',
'**Gaz İle Zehirlenerek**',
'**Boğularak**',
'**Yüksekten Düşerek**',
'**Elektrik Çarpmasına Maruz Kalarak**',
'**Asılarak**',
'**Kafan Kesilerek**',
'**Kalp Krizi Geçirerek**',
'**Yanarak**'
];
var sözver = Math.floor(Math.random()*Random.length);
const söz = new Discord.RichEmbed()
.setDescription(`${Random[sözver]}`)
.setColor(0xe2ff00)
.setTimestamp()
message.channel.send(söz)
};
exports.conf = {
enabled: true,
guildOnly: false,
aliases: [],
permLevel: 0
};

exports.help = {
name: 'ölümüm',
description: 'Nasıl Öleceğim',
usage: 'ölümüm'
};