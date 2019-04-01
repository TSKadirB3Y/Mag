const db = require('quick.db')
const Discord = require('discord.js')

exports.run = async (bot, message, args) => {
  if (!args[0]) return message.channel.send('aç yada kapat yazmalısın! Örnek: küfür-engel aç')
  if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('`SUNUCUYU_YÖNET` yetkisine sahip olmalısın!')
 
  if (args[0] == 'aç') {
    db.updateText(`kufur_${message.guild.id}`, 'acik').then(i => {
      message.channel.send(':white_check_mark: Reklam Engel başarıyla açıldı! Üyeleri Yasakla yetkisine sahip olanların reklamları engellenmicektir.')
    })
  }
  if (args[0] == 'kapat') {
    db.updateText(`kufur_${message.guild.id}`, 'kapali').then(i => {
      message.channel.send(':white_check_mark: Reklam Engel başarıyla kapatıldı! Artık herkes reklam yapabilir.')
    })
  }

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['reklamengelle'],
  permLevel: 0
};

exports.help = {
  name: 'r-engelle',
  description: '[Admin Komutu]',
  usage: 'r-engelle'
};