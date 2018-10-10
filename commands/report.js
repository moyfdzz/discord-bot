const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    //report @user reason

    let reportUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

    if (!reportUser) 
        return message.channel.send("Couldn't find user.");

    let reportReason = args.join(" ").slice(22);

    let reportEmbed = new Discord.RichEmbed()
    .setDescription("Report")
    .setColor("#66CCFF")
    .addField("Reported User", `${reportUser} with ID: ${reportUser.id}`)
    .addField("Reported By", `${message.author} with ID: ${message.author.id}`)
    .addField("Channel", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", reportReason);

    //let reportsChannel = message.guild.channels.find(`name`, "reports");
    // if (!reportsChannel) 
    //    return message.channel.send("Couldn't find reports channel.");
    //message.delete().catch(O_o => {});
    //reportsChannel.send(reportEmbed);

    return message.channel.send(reportEmbed);
}

module.exports.help = {
    name: "report"
}