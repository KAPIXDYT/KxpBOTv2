const Discord = require("discord.js")
const botconfig = require("../botconfig.json");
const colours = require("../colours.json");
const superagent = require("superagent")


module.exports.run = async (bot, message, args) => {
    let iuEmbed = new Discord.MessageEmbed()
    .setColor(colours.jasnoniebieski)
    .setTitle("**Info - Uptime**")
    .addField("**Sposób użycia:**", '`\n`k!uptime`\n`', true)
    .addField("**Dostępne Skróty:**", '`\n`k!up`\n`k!u`\n`', true)
    .setDescription("**Pokazuję przez ile: dni, godzin, minut oraz sekund bot jest online!**")
    .setFooter(`KxpBOTv2(beta)`)
    message.channel.send(iuEmbed)
    message.delete()
}



module.exports.config = {
    name: "info-uptime",
    usage: "k!info-uptime",
    accessableby: "Members",
    aliases: ["i-u"]
}