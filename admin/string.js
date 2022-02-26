const fs = require("fs");

const m = '```';
const n = '*';
const c = '_';
const menu = JSON.parse(fs.readFileSync("./admin/string.json"));

exports.menu = (prefix) => {
 var menuList = `MENU
comandos: ${menu.menuPrin.length}

╭──╼╸ꪶ 🪀𝑮𝑹𝑼𝑷𝑶𝑺🪀 ꫂ\n`;
 for (let menuPrep of menu.menuPrin) {
  menuList += `*├🪀⃟〪⃨⃛⃕⁃❱▹ ${m}${prefix}${menuPrep}\n`;
	}
 return `
${menuList}
Test`;
};
exports.test = (pushname) => {
 return `${pushname}`;
};

exports.tioanime = (animeResult) => {
 return `
 titulo: ${animeResult.result[0].title}
 descripción: ${animeResult.result[0].description}
 tipo: ${animeResult.result[0].type}
 estado: ${animeResult.result[0].status}
 año: ${animeResult.result[0].year}
 episodios: ${animeResult.result[0].episodes}
 enlace: ${animeResult.result[0].url}
`;
};