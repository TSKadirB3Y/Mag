const ms = require('ms');
const Discord = require('discord.js')
let prefix = "kn!"
exports.run = (client, message, args) => {
    if (!message.guild) {
        const ozelmesajuyari = new Discord.RichEmbed()
            .setColor("0xe2ff00")
            .setTimestamp()
            .setAuthor(message.author.username, message.author.avatarURL)
            .addField(':warning: Uyarı :warning:', '`kilit` adlı komutu özel mesajlarda kullanamazsın.:LOXYshayir:')
        return message.author.sendEmbed(ozelmesajuyari);
    }
    if (!client.lockit) client.lockit = [];
    let time = args.join(' ');
    let validUnlocks = ['release', 'unlock'];
    if (!time) return message.reply('Doğru kullanım: ' + prefix + 'kilit <süre örneğin: 2 min>');

    if (validUnlocks.includes(time)) {
        message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: null
        }).then(() => {
            message.channel.send('Kanal kilidi açıldı.:ballot_box_with_check:');
            clearTimeout(client.lockit[message.channel.id]);
            delete client.lockit[message.channel.id];
        }).catch(error => {
            console.log(error);
        });
    } else {
        message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: false
        }).then(() => {
            message.channel.send(`Kanal kilitlendi. ${ms(ms(time), { long:true })}`).then(() => {

                client.lockit[message.channel.id] = setTimeout(() => {
                    message.channel.overwritePermissions(message.guild.id, {
                        SEND_MESSAGES: null
                    }).then(message.channel.send('Kanalın kilidi açıldı.')).catch(console.error);
                    delete client.lockit[message.channel.id];
                }, ms(time));

            }).catch(error => {
                console.log(error);
            });
        });
    }
};
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['ld'],
    permLevel: 2
};

exports.help = {
    name: 'kilit',
    description: 'Kanalı istediğiniz kadar süreyle kitler.',
    usage: 'kilit <süre>'
};