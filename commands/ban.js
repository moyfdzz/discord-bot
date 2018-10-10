const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    //ban @user reason

    let banUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

    if (!banUser) 
        return message.channel.send("Couldn't find user.");

    let banReason = args.join(" ").slice(22);

    if (!message.member.hasPermission("BAN_MEMBERS"))
        return  message.channel.send("Sorry, can't do that friend.");

    if (banUser.hasPermission("BAN_MEMBERS"))
        return message.channel.send("That person can't be banned.");

    let banEmbed = new Discord.RichEmbed()
    .setDescription("~Ban~")
    .setColor("#66CCFF")
    .addField("Banned User", `${banUser} with ID: ${banUser.id}`)
    .addField("Banned By", `${message.author} with ID: ${message.author.id}`)
    .addField("Banned In", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", banReason);

    // let banChannel = message.guild.channels.find(`name`, "bans");
    // if (!banChannel)
    //     return message.channel.send("Couldn't find bans channel.");
    
    message.guild.member(banUser).ban(banReason);

    return message.channel.send(banEmbed);
}

module.exports.help = {
    name: "ban"
}