const execute = async (bosco, msg) => {
let plugins = bosco.plugins;
        let group = '';
        let download = '';
        let misc = '';
        let owner = '';
        let convert = '';
plugins.forEach((plugin) => {
            if (!plugin.isDependent) {
                if (plugin.Type === 'group')
                    group += `\n│🍁⃝❉⃟🍂 *${plugin.command}*\n│`;
                if (plugin.Type === 'download')
                    download += `\n│🍒─⃝»͓̽  *${plugin.command}*\n│`
                if (plugin.Type === 'convert')
                    convert += `\n│🌸─⃝»͓̽  *${plugin.command}*\n│`
                if (plugin.Type === 'owner')
                    owner += `\n│🦋⃝❉⃟࿔ꦿ  *${plugin.command}*\n│`
                if (plugin.Type === 'misc')
                    misc += `\n│❤️⃝➤⃟̱̱̱̱̄̄̄̄🐦 *${plugin.command}*\n│`
            }
});
let menu = `╭────────────────╮
│
│ user : 
│ bot : bot_name
│ owner : pepesir   
│ mode : public
│ version : 1.0.0
│ prefix : {handlers}
│
│     
╰────────────────╯

⬙ ɢʀᴏᴜᴩ
╭────────────────╮
│${group}
╰────────────────╯

⬘ ᴅᴏᴡɴʟᴏᴀᴅ
╭────────────────╮
│${download}
╰────────────────╯

⬙ ᴍɪꜱᴄ
╭────────────────╮
│${misc}
╰────────────────╯

⬘ ᴄᴏɴᴠᴇʀᴛ
╭────────────────╮
│${convert}
╰────────────────╯

⬙ ᴏᴡɴᴇʀ
╭────────────────╮
│${owner}
╰────────────────╯
╭────────────────╮
      ᴏɴᴄᴇ ᴀ ᴋɪɴɢ 
    ᴀʟᴡᴀʏs ᴀ ᴋɪɴɢ😌❤️
╰────────────────╯`
let button = [
        { urlButton: { displayText: `Support Group`, url: 'https://chat.whatsapp.com/BzhyWkAEU0t8oVl3s8p94m' } },
        { urlButton: { displayText: `Github`, url: 'https://github.com/pepesir' } },
        { urlButton: { displayText: `Instagram`, url: 'https://instagram.com/pepe.sir_?' } },
        { quickReplyButton: { displayText: `Help`, id: `${handlers}help` } },
        { quickReplyButton: { displayText: `Status`, id: `${handlers}status` } }
            ];
await bosco.send5ButImg(from, menu, bot_footer, bot_img, button) 
};

module.exports = {
  name: "menu", 
  command: ".menu", 
  Type: "misc", 
  isDependent: false, 
  desc: "used to display commands.", 
  execute,
};