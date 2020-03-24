const Discord = require("discord.js")
const botconfig = require("../botconfig.json");
const colours = require("../colours.json");
const superagent = require("superagent") 

module.exports.run = async (bot, message, args) =>{
    let imEmbed = new Discord.MessageEmbed()
    .setColor(colours.jasnoniebieski)
    .setTitle("**Info - Mute**")
    .addField("**Sposób użycia:**", '\`k!mute <@member>`\n', true)
    .addField("**Dostępne Skróty:**", '\`k!m`', true)
    .setDescription("**Mutuję oznaczonego użytkownika!**")
    .setFooter(`KxpBOTv2(beta)`)
    message.channel.send({embed: imEmbed})

    message.delete();
}



module.exports.config = {
    name: "info-mute",
    usage: "k!info-mute",
    accessableby: "Members",
    aliases: ["i-mute", "im"]
}