const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let botIcon = bot.user.displayAvatarURL;

        let botEmbed = new Discord.RichEmbed()
        .setDescription("My name is Flavio and I am a bot created to promote appreciation of cows along humans!")
        .setColor("#66CCFF")
        .setThumbnail(botIcon)
        .addField("Bot Name", bot.user.username)
        .addField("Created On", bot.user.createdAt);

        return message.channel.send(botEmbed);
}

module.exports.help = {
    name: "botinfo"
}