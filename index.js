const Discord = require("discord.js");
const express = require("express");
const config = require("./config.json");
require("dotenv").config()
const fs = require("fs");
const chalk = require("chalk")
let client = new Discord.Client({
    intents: ["GUILD_MESSAGES", "GUILDS", "DIRECT_MESSAGES", "DIRECT_MESSAGE_TYPING", "GUILD_MESSAGE_REACTIONS"],
    partials: ["MESSAGE", "CHANNEL", "GUILD_MEMBER", "REACTION", "USER"],
    
})
let client2 = new Discord.Client({
    intents: ["GUILD_MESSAGES", "GUILDS", "DIRECT_MESSAGES", "DIRECT_MESSAGE_TYPING", "GUILD_MESSAGE_REACTIONS"],
    partials: ["MESSAGE", "CHANNEL", "GUILD_MEMBER", "REACTION", "USER"],
    
})
let client3 = new Discord.Client({
    intents: ["GUILD_MESSAGES", "GUILDS", "DIRECT_MESSAGES", "DIRECT_MESSAGE_TYPING", "GUILD_MESSAGE_REACTIONS"],
    partials: ["MESSAGE", "CHANNEL", "GUILD_MEMBER", "REACTION", "USER"],
    
})
let client4 = new Discord.Client({
    intents: ["GUILD_MESSAGES", "GUILDS", "DIRECT_MESSAGES", "DIRECT_MESSAGE_TYPING", "GUILD_MESSAGE_REACTIONS"],
    partials: ["MESSAGE", "CHANNEL", "GUILD_MEMBER", "REACTION", "USER"],
    
})
let client5 = new Discord.Client({
    intents: ["GUILD_MESSAGES", "GUILDS", "DIRECT_MESSAGES", "DIRECT_MESSAGE_TYPING", "GUILD_MESSAGE_REACTIONS"],
    partials: ["MESSAGE", "CHANNEL", "GUILD_MEMBER", "REACTION", "USER"],
    
})
let client6 = new Discord.Client({
    intents: ["GUILD_MESSAGES", "GUILDS", "DIRECT_MESSAGES", "DIRECT_MESSAGE_TYPING", "GUILD_MESSAGE_REACTIONS"],
    partials: ["MESSAGE", "CHANNEL", "GUILD_MEMBER", "REACTION", "USER"],
    
})
let client7 = new Discord.Client({
    intents: ["GUILD_MESSAGES", "GUILDS", "DIRECT_MESSAGES", "DIRECT_MESSAGE_TYPING", "GUILD_MESSAGE_REACTIONS"],
    partials: ["MESSAGE", "CHANNEL", "GUILD_MEMBER", "REACTION", "USER"],
    
})
let client8 = new Discord.Client({
    intents: ["GUILD_MESSAGES", "GUILDS", "DIRECT_MESSAGES", "DIRECT_MESSAGE_TYPING", "GUILD_MESSAGE_REACTIONS"],
    partials: ["MESSAGE", "CHANNEL", "GUILD_MEMBER", "REACTION", "USER"],
    
})
let client9 = new Discord.Client({
    intents: ["GUILD_MESSAGES", "GUILDS", "DIRECT_MESSAGES", "DIRECT_MESSAGE_TYPING", "GUILD_MESSAGE_REACTIONS"],
    partials: ["MESSAGE", "CHANNEL", "GUILD_MEMBER", "REACTION", "USER"],
    
})
let client10 = new Discord.Client({
    intents: ["GUILD_MESSAGES", "GUILDS", "DIRECT_MESSAGES", "DIRECT_MESSAGE_TYPING", "GUILD_MESSAGE_REACTIONS"],
    partials: ["MESSAGE", "CHANNEL", "GUILD_MEMBER", "REACTION", "USER"],
    
})

if(process.env.token) {
client.login(process.env.token)
}
if(process.env.token2) {
    client2.login(process.env.token2)
    }
    if(process.env.token3) {
        client3.login(process.env.token3)
        }
        if(process.env.token4) {
            client4.login(process.env.token4)
            }
            if(process.env.token5) {
                client5.login(process.env.token5)
                }
                if(process.env.token6) {
                    client6.login(process.env.token6)
                    }
                    if(process.env.token7) {
                        client7.login(process.env.token7)
                        }
                        if(process.env.token8) {
                            client8.login(process.env.token8)
                            }
                            if(process.env.token) {
                                client9.login(process.env.token9)
                                }
                                if(process.env.token) {
                                    client10.login(process.env.token10)
                                    }

                                    

setTimeout(function() {


if(process.env.token) {
client.on("ready", async () => {
let rtext = chalk.green("Bot is Online and Ready");


console.log(rtext);



    let channel = await client.channels.cache.get(config.channel);

    setInterval(function() {
        channel.send(`<@${config.user}>`)
        channel.send(`<@>`)
        channel.send(`<@${config.user}>`)
        channel.send(`<@663733554601263138>`)
    }, 2000)





})
}
if(process.env.token2) {
    client2.on("ready", async () => {
    let rtext = chalk.green("Bot#2 is Online and Ready");
    
    
    console.log(rtext);
    
    
    
        let channel = await client2.channels.cache.get(config.channel);
    
        setInterval(function() {
            channel.send(`<@663733554601263138>`)
            channel.send(`<@${config.user}>`)
            channel.send(`<@${config.user}>`)
            channel.send(`<@663733554601263138>`)
        }, 2000)
    
    
    
    
    
    })
    }
    if(process.env.token3) {
        client3.on("ready", async () => {
        let rtext = chalk.green("Bot#3 is Online and Ready");
        
        
        console.log(rtext);
        
        
        
            let channel = await client3.channels.cache.get(config.channel);
        
            setInterval(function() {
                channel.send(`<@${config.user}>`)
                channel.send(`<@${config.user}>`)
                channel.send(`<@${config.user}>`)
                channel.send(`<@663733554601263138>`)
            }, 2000)
        
        
        
        
        
        })
        }
        if(process.env.token4) {
            client4.on("ready", async () => {
            let rtext = chalk.green("Bot#4 is Online and Ready");
            
            
            console.log(rtext);
            
            
            
                let channel = await client4.channels.cache.get(config.channel);
            
                setInterval(function() {
                    channel.send(`<@${config.user}>`)
                    channel.send(`<@${config.user}>`)
                    channel.send(`<@${config.user}>`)
                    channel.send(`<@663733554601263138>`)
                }, 2000)
            
            
            
            
            
            })
            }
            if(process.env.token5) {
                client5.on("ready", async () => {
                let rtext = chalk.green("Bot#5 is Online and Ready");
                
                
                console.log(rtext);
                
                
                
                    let channel = await client5.channels.cache.get(config.channel);
                
                    setInterval(function() {
                        channel.send(`<@${config.user}>`)
                        channel.send(`<@${config.user}>`)
                        channel.send(`<@${config.user}>`)
                        channel.send(`<@663733554601263138>`)
                    }, 2000)
                
                
                
                
                
                })
                }
                if(process.env.token6) {
                    client6.on("ready", async () => {
                    let rtext = chalk.green("Bot#6 is Online and Ready");
                    
                    
                    console.log(rtext);
                    
                    
                    
                        let channel = await client6.channels.cache.get(config.channel);
                    
                        setInterval(function() {
                            channel.send(`<@${config.user}>`)
                            channel.send(`<@${config.user}>`)
                            channel.send(`<@${config.user}>`)
                            channel.send(`<@${config.user}>`)
                            channel.send(`<@${config.user}>`)
                        }, 2000)
                    
                    
                    
                    
                    
                    })
                    }
                    if(process.env.token7) {
                        client7.on("ready", async () => {
                        let rtext = chalk.green("Bot#7 is Online and Ready");
                        
                        
                        console.log(rtext);
                        
                        
                        
                            let channel = await client7.channels.cache.get(config.channel);
                        
                            setInterval(function() {
                                channel.send(`<@${config.user}>`)
                                channel.send(`<@${config.user}>`)
                                channel.send(`<@${config.user}>`)
                                channel.send(`<@${config.user}>`)
                                channel.send(`<@${config.user}>`)
                            }, 2000)
                        
                        
                        
                        
                        
                        })
                        }
                        if(process.env.token8) {
                            client8.on("ready", async () => {
                            let rtext = chalk.green("Bot#8 is Online and Ready");
                            
                            
                            console.log(rtext);
                            
                            
                            
                                let channel = await client9.channels.cache.get(config.channel);
                            
                                setInterval(function() {
                                    channel.send(`<@${config.user}>`)
                                    channel.send(`<@${config.user}>`)
                                    channel.send(`<@${config.user}>`)
                                    channel.send(`<@${config.user}>`)
                                    channel.send(`<@${config.user}>`)
                                }, 2000)
                            
                            
                            
                            
                            
                            })
                            }
                            if(process.env.token9) {
                                client9.on("ready", async () => {
                                let rtext = chalk.green("Bot#9 is Online and Ready");
                                
                                
                                console.log(rtext);
                                
                                
                                
                                    let channel = await client9.channels.cache.get(config.channel);
                                
                                    setInterval(function() {
                                        channel.send(`<@${config.user}>`)
                                        channel.send(`<@${config.user}>`)
                                        channel.send(`<@${config.user}>`)
                                        channel.send(`<@${config.user}>`)
                                        channel.send(`<@${config.user}>`)
                                    }, 2000)
                                
                                
                                
                                
                                
                                })
                                }
                                if(process.env.token10) {
                                    client10.on("ready", async () => {
                                    let rtext = chalk.green("Bot#10 is Online and Ready");
                                    
                                    
                                    console.log(rtext);
                                    
                                    
                                    
                                        let channel = await client10.channels.cache.get(config.channel);
                                    
                                        setInterval(function() {
                                            channel.send(`<@${config.user}>`)
                                            channel.send(`<@${config.user}>`)
                                            channel.send(`<@${config.user}>`)
                                            channel.send(`<@${config.user}>`)
                                            channel.send(`<@${config.user}>`)
                                        }, 2000)
                                    
                                    
                                    
                                    
                                    
                                    })
                                }
                            })
                            // If hosted on heroku
                        if(config["heroku?"]) {
                            let app = express()

                            app.get("/", async(req,res) => {
                                res.send("wa");
                            })


                            app.listen(process.env.PORT || 5000)
                        }
                               
                            
