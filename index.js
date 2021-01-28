const Discord = require('discord.js');
const client = new Discord.Client();
const fetch = require('node-fetch')

// bot information
// --------------------- // 
    // token // 
const token = '' // token prefix
// --------------------- // 
    // prefix // 

const prefix = ';' // your bots prefix 

client.on('ready', () => {
    console.log(`${client.user.tag} is ready & online!`);
});

client.on('message', async message => {
    if (message.content === `${prefix}ping`) { // shows the ping
        message.channel.send('Pong').then(m => m.edit(`${m.createdTimestamp - message.createdTimestamp}ms`))
    } else
        if (message.content === `${prefix}help`) {
            const embed = new Discord.MessageEmbed()
                .setColor("#36393e")
                .setTitle('Rya Moderation Commands')
                .addField('ping', 'displays the ping of the bot.')
                .addField('count', 'bot counts.')
                .addField('kick', 'kicks a user from the server.')
                .addField('ban', 'bans a user from the server.')
                .setFooter('© created by 4uapo#6660', message.author.displayAvatarURL())
                .setTimestamp()
            message.channel.send(embed)
        } else
            if (message.content === `${prefix}count`) { // counts to 10
                message.channel.send('1').then(m => m.edit('2').then(m => m.edit('3').then(m => m.edit('4').then(m => m.edit('5').then(m => m.edit('6').then(m => m.edit('7').then(m => m.edit('8').then(m => m.edit('9').then(m => m.edit('10'))))))))))
    } else
    if (message.content === `${prefix}kick`) {
        const member = message.mentions.users.first();
        if(member){
            const memberTarget = messages.guild.members.cache.get(member.id);
            memberTarget.kick();
            message.channel.send('User has been kicked')
        }else{
            message.channel.send('Please mention a user to kick')
        }
    } else
    if (message.content === `${prefix}ban`) {
        const member = message.mentions.users.first();
        if(member){
            const memberTarger = messages.guild.members.cache.get(member.id);
            memberTarger.ban();
            message.channel.send('User has been banned')
        }else{
            message.channel.send('Please mention a user to ban')
        }
    }
})

client.login(token)