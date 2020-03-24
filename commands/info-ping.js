const Discord = require("discord.js")
const botconfig = require("../botconfig.json");
const colours = require("../colours.json");
const superagent = require("superagent")

module.exports.run = async (bot, message, args) => {
    let ipEmbed = new Discord.MessageEmbed()
    .setColor(colours.aqua)
    .setTitle("**Info - Ping**")
    .addField("**Sposób użycia:**", '`\n`**k!ping**\n', true)
    .addField("**Dostępne skróty:**", '`\n`**k!pong**\n', true)
    .setDescription("**Pokazuję aktualny ping bota oraz API**")
    .setFooter(`KxpBOTv2(beta)`)

    message.channel.send(ipEmbed)
    message.delete()
}



module.exports.config = {
    name: "info-ping",
    usage: "k!info-ping",
    accessableby: "Members",
    aliases: ["i-p"]
}