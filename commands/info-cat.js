const Discord = require("discord.js")
const botconfig = require("../botconfig.json");
const colours = require("../colours.json");
const superagent = require("superagent") 

module.exports.run = async (bot, message, args) =>{
    let imEmbed = new Discord.MessageEmbed()
    .setColor(colours.jasnoniebieski)
    .setTitle("**Info - cat**")
    .addField("**Sposób użycia:**", '\`k!cat`\n', true)
    .addField("**Dostępne skróty:**", '\`k!c`\n`k!kot`\n`k!koteczek`', true)
    .setDescription("**Pokazuję losowe zdjęcie kota!**")
    .setFooter(`KxpBOTv2(beta)`)
    message.channel.send({embed: imEmbed})

    message.delete();
}



module.exports.config = {
    name: "info-cat",
    usage: "k!info-cat",
    accessableby: "Members",
    aliases: ["i-cat", "ic"]
}