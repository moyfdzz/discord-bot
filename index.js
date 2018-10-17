const botConfig = require("./botConfig.json");
const tokenFile = require("./token.json");
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => { //Read commands files from the commands folder
    if (err) 
        console.log(err);

    let jsfile = files.filter(f => f.split(".").pop() === "js")

    if (jsfile.length <= 0) {
        console.log("Couldn't find commands.");
        
        return;
    }

    jsfile.forEach((f, i) => {
        let props = require(`./commands/${f}`);
        console.log(`${f} loaded!`);
        bot.commands.set(props.help.name, props);
    });
})

bot.on("ready", async () => { //Sets the activity that the bot is doing
    console.log(`${bot.user.username} is online!`);
    bot.user.setActivity("Club Penguin");
});

bot.on("message", async message => {
    if (message.author.bot)
        return;

    if (message.channel.type === "dm")
        return;

    let prefix = botConfig.prefix;
    let messageArray = message.content.split(" ");

    //Starts War's example in TSC Discord Server (allows space between prefix and command)
    let args = message.content.slice(prefix.length).trim().split(/ +/g);
    let cmd = args.shift().toLowerCase();

    try{
        bot.commands.get(cmd).run(bot, message, args)
    }catch(err){
        return;
    }
    //Ends War's example

    let lowerCase = messageArray[1].toLowerCase();

    if (cmd === `${prefix}` && lowerCase === "gracias") {
        return message.channel.send("De nada");
    }

    if (cmd === `${prefix}?`) {
        return message.channel.send("tb tú?");
    }

    if (cmd === `${prefix}` && lowerCase === "ok") {
        return message.channel.send("ok");
    }

    let commandFile = bot.commands.get(cmd.slice(prefix.length));
    
    if (commandFile)
        commandFile.run(bot, message, args);
});

bot.login(tokenFile.token);