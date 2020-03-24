const Discord = require("discord.js")
const botconfig = require("../botconfig.json");
const colours = require("../colours.json");
const superagent = require("superagent") 

module.exports.run = async (bot, message, args) =>{
    let imEmbed = new Discord.MessageEmbed()
    .setColor(colours.jasnoniebieski)
    .setTitle("**Info - dog**")
    .addField("**Sposób użycia:**", '\`k!dog`\n', true)
    .addField("**Dostępne skróty:**", '\`k!d`\n`k!piesek`\n`k!pies`\n`k!psiur`', true)
    .setDescription("**Pokazuję losowe zdjęcie psa!**")
    .setFooter(`KxpBOTv2(beta)`)
    message.channel.send({embed: imEmbed})

    message.delete();
}



module.exports.config = {
    name: "info-dog",
    usage: "k!info-dog",
    accessableby: "Members",
    aliases: ["i-dog", "id"]
}