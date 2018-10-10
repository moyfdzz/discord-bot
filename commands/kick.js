const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    //kick @user reason

    let banUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

    if (!banUser) 
        return message.channel.send("Couldn't find user.");

    let banReason = args.join(" ").slice(22);

    if (!message.member.hasPermission("KICK_MEMBERS"))
        return  message.channel.send("Sorry, can't do that friend.");

    if (banUser.hasPermission("KICK_MEMBERS"))
        return message.channel.send("That person can't be kicked.");

    let kickEmbed = new Discord.RichEmbed()
    .setDescription("~Kick~")
    .setColor("#66CCFF")
    .addField("Kicked User", `${banUser} with ID: ${banUser.id}`)
    .addField("Kicked By", `${message.author} with ID: ${message.author.id}`)
    .addField("Kicked In", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", banReason);

    // let kickChannel = message.guild.channels.find(`name`, "incidents");
    // if (!kickChannel)
    //     return message.channel.send("Couldn't find incidents channel.");

    message.guild.member(banUser).kick(banReason)

    return message.channel.send(kickEmbed);
}

module.exports.help = {
    name: "kick"
}