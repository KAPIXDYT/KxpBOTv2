const Discord = require("discord.js")
const botconfig = require("../botconfig.json");
const colours = require("../colours.json");
const superagent = require("superagent") 

module.exports.run = async (bot, message, args) =>{
    let imEmbed = new Discord.MessageEmbed()
    .setColor(colours.jasnoniebieski)
    .setTitle("**Info - ServerInfo**")
    .addField("**Sposób użycia:**", '\`k!serverinfo`\n', true)
    .addField("**Dostępne Skróty:**", '\`k!si`\n`k!serverdsc`\n`k!sinfo`', true)
    .setDescription("**Pokazują informację o twoim serwerze!**")
    .setFooter(`KxpBOTv2(beta)`)
    message.channel.send({embed: imEmbed})
    
    message.delete();
}



module.exports.config = {
    name: "info-serverinfo",
    usage: "k!info-serverinfo",
    accessableby: "Members",
    aliases: ["i-serverinfo", "is", "i-si"]
}