const Discord = require("discord.js");
const rhymesFiles = require("./assets/rhymes.json")

module.exports.run = async (bot, message, args) => {
    //tb rima (random rhyme)

    let randomNumber = Math.floor((Math.random() * 7) + 1);
    let rhyme = " ";

    return message.channel.send(rhyme);
}

module.exports.help = {
    name: "rima"
}