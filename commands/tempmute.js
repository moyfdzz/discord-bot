const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {
    //tbtempmute @xd 1s/m/h/d

    let muteUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

    if (!muteUser)
        return message.channel.send("Couldn't find user.");

    if (muteUser.hasPermission("MUTE_MEMBERS"))
        return message.channel.send("Can't mute them!");

    let muteRole = message.guild.roles.find(role => role.name === "muted");

    if (!muteRole) { //Create role if there's no mute role
        try {
            muteRole = await message.guild.createRole({
                name: "muted",
                color: "#000000",
                permissions:[]
            })
            
            message.guild.channels.forEach(async (channel, id) => { //Goes through each server's channel with name and id
                await channel.overwritePermissions(muteRole, {
                    SEND_MESSAGES: false,
                    ADD_REACTIONS: false,
                });
            });
        }catch(e) {
            console.log(e.stack);
        }
    } //End of mute role

    let muteTime = args[1];

    if (!muteTime)
        return message.channel.send("You didn't specify a time!");
    
    await(muteUser.addRole(muteRole.id));
    message.channel.send(`${muteUser} has been muted for ${ms(ms(muteTime))}`); //Cast to send it as s/m/h/d

    setTimeout(function() {
        muteUser.removeRole(muteRole.id);
        message.channel.send(`${muteUser} has been unmuted!`);
    }, ms(muteTime));
}

module.exports.help = {
    name: "tempmute"
}