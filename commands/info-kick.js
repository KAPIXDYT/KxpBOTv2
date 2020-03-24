const Discord = require("discord.js")
const botconfig = require("../botconfig.json");
const colours = require("../colours.json");
const superagent = require("superagent") 

module.exports.run = async (bot, message, args) =>{
    let imEmbed = new Discord.MessageEmbed()
    .setColor(colours.jasnoniebieski)
    .setTitle("**Info - Kick**")
    .addField("**Sposób użycia:**", '\`k!kick <@member> <powod>`\n', true)
    .addField("**Dostępne skróty:**", '\n`k!k`', true)
    .setDescription("**Wyrzucam oznaczonego użytkownika!**")
    .setFooter(`KxpBOTv2(beta)`)
    message.channel.send({embed: imEmbed})

    message.delete();
}



module.exports.config = {
    name: "info-kick",
    usage: "k!info-kick",
    accessableby: "Members",
    aliases: ["i-kick", "ik"]
}