const Discord = require('discord.js');

/**
  * @param {Discord.Message} message
  * @param {Discord.Client} client
  */
module.exports.run = (message, args, client) => {
  if (!message.member.permissions.has("BAN_MEMBERS")) return message.channel.send(":x: | You need `ban members` permission");
  const user = message.mentions.users.first();
  if (!user) return message.channel.send(`:x: | You haven't mentionned any user`);
  
  args.shift();
  
  const member = message.guild.member(user);
  const reason = args.shift();
  if (!reason) return message.channel.send(`:x: | Missing a reason`);
  
  let banned = true;
  member.ban({ reason: reason }).catch(() => {banned = false});
  
  if (!banned) return message.channel.send(`:x: | ${user.tag} Wasn't banned`);
  message.channel.send(`:white_check_mark: | ${user.tag} was banned for \`\`\`${reason}\`\`\``);
};

module.exports.help = {
  name: 'ban',
  description: "Ban a member from server"
};
