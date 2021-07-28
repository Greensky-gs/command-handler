const Discord = require('discord.js');

/**
  * @param {Discord.Message} message
  * @param {Discord.Client} client
  */
module.exports.run = (message, args, client) => {
  let user = message.mentions.users.first() || client.users.fetch(args[0]) || message.author;
  
  return message.channel.send(`Here's the avatar of ${user.tag} : ${user.displayAvatarURL({dynamic: true, size: 4096 })}`);
};

module.exports.help = {
  name: 'avatar',
  description: "Display the avatar of someone in server"
};
