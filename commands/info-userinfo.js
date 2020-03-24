const Discord = require("discord.js")
const botconfig = require("../botconfig.json");
const colours = require("../colours.json");
const superagent = require("superagent") 

module.exports.run = async (bot, message, args) =>{
    let imEmbed = new Discord.MessageEmbed()
    .setColor(colours.jasnoniebieski)
    .setTitle("**Info - UserInfo**")
    .addField("**Sposób użycia:**", '\`k!userinfo`\n', true)
    .addField("**Dostępne skróty:**", '\`k!user`\n`k!ui`', true)
    .setDescription("**Pokazuję informację o tobie!**")
    .setFooter(`KxpBOTv2(beta)`)
    message.channel.send({embed: imEmbed})
    
    
    message.delete();
}



module.exports.config = {
    name: "info-userinfo",
    usage: "k!info-userinfo",
    accessableby: "Members",
    aliases: ["i-userinfo", "i-ui"]
}