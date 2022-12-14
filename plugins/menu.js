const execute = async (bosco, msg) => {
const pushname = msg.pushName || "No Name"
let plugins = bosco.plugins;
        let group = '';
        let download = '';
        let misc = '';
        let owner = '';
        let convert = '';
        let tools = '';
plugins.forEach((plugin) => {
            if (!plugin.isDependent) {
                if (plugin.Type === 'group')
                    group += `\nโ๐โโโ๐ *${handlers}${plugin.command}*\nโ`;
                if (plugin.Type === 'download')
                    download += `\nโ๐โโยปฬฝอ  *${handlers}${plugin.command}*\nโ`
                if (plugin.Type === 'convert')
                    convert += `\nโ๐ธโโยปฬฝอ  *${handlers}${plugin.command}*\nโ`
                if (plugin.Type === 'owner')
                    owner += `\nโ๐ฆโโโเฟ๊ฆฟ  *${handlers}${plugin.command}*\nโ`
                if (plugin.Type === 'misc')
                    misc += `\nโโค๏ธโโคโฬฑฬฑฬฑฬฑฬฬฬฬ๐ฆ *${handlers}${plugin.command}*\nโ`
                if (plugin.Type === 'tools')
                    tools += `\nโ๐โโคโฬฑฬฑฬฑฬฑฬฬฬฬ๐ฆ *${handlers}${plugin.command}*\nโ`
            }
});

if (bosco.public === true){
mode = 'public'
} else {
mode = 'private'
}

let menu = `โญโโโโโโโโโโโโโโโโโฎ
โ
โ 
โ๐ญโโโ๐ *user :* ${pushname}
โ
โ๐ญโโโ๐ *bot :* ${bot_name}
โ
โ๐ญโโโ๐ *mode :* ${mode}
โ
โ๐ญโโโ๐ *version :* 1.0.0
โ
โ๐ญโโโ๐ *prefix :* ใ ${handlers} ใ
โ
โ     
โฐโโโโโโโโโโโโโโโโโฏ

โฌ ษขสแดแดแดฉ
โญโโโโโโโโโโโโโโโโโฎ
โ${group}
โฐโโโโโโโโโโโโโโโโโฏ

โฌ แดแดแดกษดสแดแดแด
โญโโโโโโโโโโโโโโโโโฎ
โ${download}
โฐโโโโโโโโโโโโโโโโโฏ

โฌ แดษช๊ฑแด
โญโโโโโโโโโโโโโโโโโฎ
โ${misc}
โฐโโโโโโโโโโโโโโโโโฏ

โฌ แดแดแดส๊ฑ
โญโโโโโโโโโโโโโโโโโฎ
โ${tools}
โฐโโโโโโโโโโโโโโโโโฏ

โฌ แดแดษดแด?แดสแด
โญโโโโโโโโโโโโโโโโโฎ
โ${convert}
โฐโโโโโโโโโโโโโโโโโฏ

โฌ แดแดกษดแดส
โญโโโโโโโโโโโโโโโโโฎ
โ${owner}
โฐโโโโโโโโโโโโโโโโโฏ
`
let button = [
        { urlButton: { displayText: `Support Group`, url: 'https://chat.whatsapp.com/BzhyWkAEU0t8oVl3s8p94m' } },
        { urlButton: { displayText: `Github`, url: 'https://github.com/pepesir' } },
        { urlButton: { displayText: `Instagram`, url: 'https://instagram.com/pepe.sir_?' } },
        { quickReplyButton: { displayText: `Help`, id: `${handlers}help` } },
        { quickReplyButton: { displayText: `Status`, id: `${handlers}status` } }
            ];
await bosco.send5ButImg(msg.key.remoteJid, menu, bot_footer, bot_img, button) 
};

module.exports = { 
  command: "menu", 
  Type: "misc", 
  isDependent: false, 
  desc: "used to display commands.", 
  execute,
};
