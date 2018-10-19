const Discord = require("discord.js");
const superAgent = require("superagent");

module.exports.run = async (bot, message, args) => {
    let {body} = await superAgent
    .get(`https://random.dog/woof.json`);

    let dogEmbed = new Discord.RichEmbed()
    .setColor("#e1b303")
    .setTitle("Doggo")
    .setImage(body.url);

    message.channel.send(dogEmbed);
}

module.exports.help = {
    name: "doggo"
}