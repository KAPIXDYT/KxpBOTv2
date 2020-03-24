const Discord = require("discord.js")
const botconfig = require("../botconfig.json");
const colours = require("../colours.json");
const superagent = require("superagent") 

module.exports.run = async (bot, message, args) =>{
    let imEmbed = new Discord.MessageEmbed()
    .setColor(colours.jasnoniebieski)
    .setTitle("**Info - Ban**")
    .addField("**Sposób użycia:**", '\`k!ban <@member> <powod>`\n', true)
    .addField("**Dostępne skróty:**", '\`k!b`', true)
    .setDescription("**Banuję oznaczonego użytkownika!**")
    .setFooter(`KxpBOTv2(beta)`)
    message.channel.send({embed: imEmbed})

    message.delete();
}



module.exports.config = {
    name: "info-ban",
    usage: "k!info ban",
    accessableby: "Members",
    aliases: ["i-ban", "ib"]
}