const Discord = require("discord.js");
var rhymes = ["Adriano Marcelano aleja ya la mano del gusano y sácate el banano del ano",
"Adriano Marcelano el tejano que cuando ve un banano se pone en cuatro para que se lo metan por el ano",
"Eriq el manatí que en la alberca me jodí",
"Carlos Daniel Estrada Estronado el que se puso bien mamado desde que la c wii r se ha esfumado",
"Paco el caco que se puso bien bellaco cuando la vio con otro caco",
"Chato el grato que cuando detecta a un bato con su olfato se le para el termostato",
"Estrada Estronado Estornudo el greñudo que a menudo le gusta el peludo por el embudo"];

module.exports.run = async (bot, message, args) => {
    //tb rhyme (random rhyme)

    let randomNumber = Math.floor((Math.random() * rhymes.length) + 1);
    let rhyme = rhymes[randomNumber];

    return message.channel.send(rhyme);
}

module.exports.help = {
    name: "rhyme"
}