const Discord = require("discord.js")
const botconfig = require("../botconfig.json");
const colours = require("../colours.json");
const superagent = require("superagent")

module.exports.run = async (bot, message, args) => {
    let irEmbed = new Discord.MessageEmbed()
    .setColor(colours.zielony)
    .setTitle("**Info - Report**")
    .addField("**Sposób użycia:**", '`\n`k!report #channel <@Member> <powod>`\n`', true)
    .addField("**Dostępne Skróty:**", '`\n`k!r`\n`', true)
    .setDescription("**Po wpisaniu:** `k!r #channel @member powod` **Wysyłam na oznaczony kanał autora komendy, osobę oznaczoną oraz powód!**", true)
    .setFooter(`KxpBOTv2(beta)`)

    message.channel.send(irEmbed)
    message.delete()
}



module.exports.config = {
    name: "info-report",
    usage: "k!info-report",
    accessableby: "Members",
    aliases: ["ir", "i-r",]
}