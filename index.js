const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require('./settings.json')
const prefix = config.prefix;


bot.login("NjI2OTIyNDUxNDAxNzAzNDI0.XZCbWw.aUGBM-tNOmkETW-ZV5OFVHAXi6k")




bot.on("message" , function (message) {
  let args = message.content.trim().split(/ +/g)
     if (args[0].toLowerCase() === prefix + "help") {
  
      const embed = new Discord.RichEmbed()
      .setTitle("Catégories")
      .addField("Commandes de sécurité :oncoming_police_car:", "&helps")
      .addField("Commandes de modération :busts_in_silhouette:", "&helpm")
      .setDescription("**AVERTISSEMENT :** Ne tentez rien, nous sommes équipés d'un anti-raid et d'une liste noire.")
      .setFooter("Created by Ardahel#1791")
      .setColor("RANDOM")
      message.channel.send(embed)
      }
      })



  bot.on("message" , function (message) {
    let args = message.content.trim().split(/ +/g)
       if (args[0].toLowerCase() === prefix + "helpm") {
    
    const embed = new Discord.RichEmbed()
    .setTitle("Commandes de modération")
    .addField("Bannir un utilisateur :exclamation:", "&ban")
    .addField("Kick un utilisateur", "&kick")
    .setFooter("Created by Ardahel#1791")
    .setColor("RANDOM")
    message.channel.send(embed)
    }
    })

  bot.on("message" , function (message) {
    if(message.content.includes("Raid by")){
      message.delete();
      message.member.send("Pas de raid :D")
      console.log(`raid par ${message.author.username + "#" + message.author.discriminator}`)
    }});

    bot.on("message" , function (message) {
      if(message.content.includes("raid by")){
        message.delete();
        message.member.send("Pas de raid :D")
        console.log(`raid par ${message.author.username + "#" + message.author.discriminator}`)
      }});

bot.on("message" , function (message) {
  let args = message.content.trim().split(/ +/g)
     if (args[0].toLowerCase() === prefix + "helps") {
  
  const embed = new Discord.RichEmbed()
  .setTitle("Sécurité du serveur")
  .addField("Voir la liste noire", "&blacklist")
  .setFooter("Created by Ardahel#1791")
  .setColor("RANDOM")
  message.channel.send(embed)
  }
  })




            bot.on("message" , function (message) {
              let args = message.content.trim().split(/ +/g)
                 if (args[0].toLowerCase() === prefix + "blacklist") {
              
              const embed = new Discord.RichEmbed()
              .setTitle("Liste noire")
              .setDescription("Nous n'avons trouvé aucun utilisateur dans la blacklist.")
              .setFooter("Created by Ardahel#1791")
              .setColor("RANDOM")
              message.channel.send(embed)
              }
              })







//plusieurs questions reponses


bot.on('ready', () => {
  bot.user.setActivity("&help", {type: "WATCHING"})
  bot.user.setActivity(`${prefix}help`,)
    })
    
 console.log("Je suis prêt a apprendre");
  {};



bot.on('ready', () => {
  console.log('I am ready!');
});

//pour kick quelqun

bot.on('message', message => {
  
  if (!message.guild) return;

  
  if (message.content.startsWith('&kick')) {
    
    const user = message.mentions.users.first();
    
    if (user) {
      
      const member = message.guild.member(user);
     
      if (member) {
        
        member.kick('Optional reason that will display in the audit logs').then(() => {
        
          message.reply(`Successfully kicked ${user.tag}`);
        }).catch(err => {
          
          message.reply('Je suis incapable de kick le membre');
          
          console.error(err);
        });
      } else {
        
        message.reply('Cette utilisateur nest pas dans cette guilde');
      }
    
    } else {
      message.reply('Mentionne un utilisateur pour kick!');
    }
  }
});





// ban quelqun

bot.on('message', message => {
  
  if (!message.guild) return;

  
  if (message.content.startsWith('&ban')) {
    
    const user = message.mentions.users.first();
    
    if (user) {
      
      const member = message.guild.member(user);
      
      if (member) {
      
        member.ban({
          reason: 'Tu es mauvais !',
        }).then(() => {
          
          message.reply(`Successfully banned ${user.tag}`);
        }).catch(err => {
          
          message.reply('Je suis incapable de ban le membre');
          
          console.error(err);
        });
      } else {
        
        message.reply('Cet utilisateur ne fait pas partie de cette guilde!');
      }
    } else {
    
      message.reply('Tu dois mentionner le membre pour ban !');
    }
  }
});


