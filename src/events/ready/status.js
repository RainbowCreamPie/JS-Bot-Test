const { ActivityType } = require("discord.js")

module.exports = (client) => {
    let status =[
        {
            name : "JSCode Editor",
            type : ActivityType.Playing
        },
        {
            name : "GitHub",
            type : ActivityType.Watching
        },
        {
            name : "/ping",
            type : ActivityType.Watching
        },
    ]

    setInterval(() => {
        let random = Math.floor(Math.random() * status.length);
        client.user.setActivity(status[random]);
      }, 2500);
}