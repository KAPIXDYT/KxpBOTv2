const Discord = require("discord.js")
const botconfig = require("../botconfig.json");
const colours = require("../colours.json");
const superagent = require("superagent") 

module.exports.run = async (bot, message, args) =>{
    let imEmbed = new Discord.MessageEmbed()
    .setColor(colours.jasnoniebieski)
    .setTitle("**Info - Pomoc**")
    .setDescription("**Wyświetlam listę komend, które są w bocie**")
    .addField("**Dostępne Skróty:**", '\`k!p`\n`k!Pomoc`\n`k!Komendy`', true)
    .setFooter(`KxpBOTv2(beta)`)
    message.channel.send({embed: imEmbed})

    message.delete();
}



module.exports.config = {
    name: "info-pomoc",
    usage: "k!info-pomoc",
    accessableby: "Members",
    aliases: ["i-pomoc", "ip"]
}