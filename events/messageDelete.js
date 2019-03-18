module.exports = class {
    constructor (client) {
      this.client = client;
    }
  
    async run (message) {
      debugger
      // It's good practice to ignore other bots. This also makes your bot ignore itself
      //  and not get into a spam loop (we call that "botception").
      if (message.author.bot) return;
  
      // Cancel any attempt to execute commands if the bot cannot respond to the user.
      if (!message.channel.permissionsFor(message.guild.me).missing("SEND_MESSAGES")) return;
      
      // Grab the settings for this server from the Enmap
      // If there is no guild, get default conf (DMs)
      const settings = this.client.getSettings(message.guild);
  
      // For ease of use in commands and functions, we'll attach the settings
      // to the message object, so `message.settings` is accessible.
      message.settings = settings;
  
      // If the member on a guild is invisible or not cached, fetch them.
      if (message.guild && !message.member) await message.guild.fetchMember(message.author);
  
      message.flags = [];
      while (args[0] &&args[0][0] === "-") {
        message.flags.push(args.shift().slice(1));
      }
      
    }
  };