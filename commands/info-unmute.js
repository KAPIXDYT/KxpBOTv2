const Discord = require("discord.js")
const botconfig = require("../botconfig.json");
const colours = require("../colours.json");
const superagent = require("superagent") 

module.exports.run = async (bot, message, args) =>{
    let imEmbed = new Discord.MessageEmbed()
    .setColor(colours.jasnoniebieski)
    .setTitle("**Info - Unmute**")
    .addField("**Sposób użycia:**", '\`k!unmute <@member>`\n', true)
    .addField("**Dostępne skróty:**", '\`k!unm`', true)
    .setDescription("**Odciszam oznaczonego użytkownika!**")
    .setFooter(`KxpBOTv2(beta)`)
    message.channel.send({embed: imEmbed})

    message.delete();
}



module.exports.config = {
    name: "info-unmute",
    usage: "k!info-unmute",
    accessableby: "Members",
    aliases: ["i-unmute", "iu"]
}