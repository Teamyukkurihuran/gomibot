const discord = require("discord.js");
const client = new discord.Client();

client.on("message", message => {
  if (message.author.id == client.user.id || message.author.bot) {
    return;
  }

  if (message.content.match(/gome!help/)) {
    //sendMsg(message.channel.id, text);
    message.channel.send({
      embed: {
        title: "ゴミbot | help",
        description:
          "やっほー。 ボクの名前はゴミbot、機能はついていないよ、だってゴミbotだもんw",
        fields: [
          {
            name: "gome!help",
            value: "今表示してるやつだよ"
          },
        ]
      }
    });
    return;
  }
  if (message.content.match(/削除して/)) {
    let text = "なにをですか?";
    sendMsg(message.channel.id, text);
    return;
  }
});
if (process.env.DISCORD_BOT_TOKEN == undefined) {
  console.log("DISCORD_BOT_TOKENが設定されていません。");
  process.exit(0);
}

client.login(process.env.DISCORD_BOT_TOKEN);

function sendReply(message, text) {
  message
    .reply(text)
    .then(console.log("リプライ送信: " + text))
    .catch(console.error);
}

function sendMsg(channelId, text, option = {}) {
  client.channels
    .get(channelId)
    .send(text, option)
    .then(console.log("メッセージ送信: " + text + JSON.stringify(option)))
    .catch(console.error);
}
