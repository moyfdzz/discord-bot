const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    //addrole @user meco

    if(!message.member.hasPermission("MANAGE_MEMBERS"))
        return message.channel.send("Sorry, you can't do that.");

    let roleMember = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

    if (!roleMember)
        return message.channel.send("Couldn't find that user!");

    let newRole = args.join(" ").slice(22);

    if (!newRole)
        return message.channel.send("Specify a role!");

    let guildRole = message.guild.roles.find(role => role.name === newRole.name);

    if (!guildRole)
        return message.channel.send("Couldn't find that role.");

    if (roleMember.roles.get(guildRole.id));
    await (roleMember.addRole(guildRole.id));

    try {
        await roleMember.send(`Congrats, you've been given the role ${guildRole.name}`)
    }catch(e) {
        message.channel.send(`Congrats ${roleMember.name}, you've been given the role ${guildRole.name}. Tried to DM you but it wasn't possible :(.)`)
    }


}

module.exports.help = {
    name: "addrole"
}