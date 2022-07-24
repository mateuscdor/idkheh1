const fs = require("fs");
const { exec, spawn } = require("child_process");
async function execute(bosco, msg, match) {
var quoted = msg.quoted ? msg.quoted : msg
if (isQuotedVideo || isQuotedAudio) {
let media = await bosco.downloadAndSaveMediaMessage(quoted);
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -vn ${ran}`, async (err) => {
fs.unlinkSync(media)
if (err) return reply(`_Err: ${err}_`)
let buffer453 = fs.readFileSync(ran)
bosco.sendMessage(msg.key.remoteJid, {audio: buffer453, mimetype: 'audio/mpeg'}, { quoted : msg })
fs.unlinkSync(ran)
})
} else {
reply('_Reply to video/audio_')
}
}

module.exports = { 
    command: "toaudio", 
    Type: "convert", 
    isDependent: false, 
    desc: "used to convert video/audio to audio", 
    execute,
};
