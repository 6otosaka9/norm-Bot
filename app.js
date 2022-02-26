// Nuestras dependencias.
const { 
 WAConnection,
 MessageType
} = require("@adiwajshing/baileys");
const express = require("express")
const fs = require("fs");
const { image } = MessageType;
const moment = require("moment-timezone");
const welcome = require('./lib/welcome')
const { banner } = require("./lib/functions");
const { color } = require("./lib/color");
const otosaka = require("./6otosaka9");
const app = express();
const port = 3000

app.get('/', (req, res) => {
  res.send('bot corriendo')
})

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})

// Zona horaria Perú
const time = moment.tz('America/Lima').format("HH:mm:ss");
const client = new WAConnection();

async function join() {
 
 client.logger.level = 'warn';
 console.log(banner.string);
 
// Evento de QR
 client.on('qr', qr => {
  console.log(color(time,"yellow"),color('[','white'),color('∆','red'),color(']','white'),color('Escanea el codigo qr generado.\nY suscríbete','white'),color('YOU','red'),color('TUBE','white'),color('6otosaka9','cyan'));
 });

// Guardado de token.
 fs.existsSync('./otosaka.json') && client.loadAuthInfo('./otosaka.json');
 client.on('connecting', () => {
	 console.log(color(time,"white"),color("[ESTADO]","cyan"), "Conectando...");
 });
 client.on('open', () => {
	 console.log(color(time,"white"),color("[ESTADO]", "cyan"), "Conectado.");
});
await client.connect({timeoutMs: 30*1000});
fs.writeFileSync('./otosaka.json', JSON.stringify(client.base64EncodedAuthInfo(), null, '\t'));
}

// Subida de miembros de x grupo
async function otosa() {
	client.on('group-participants-update', async (member) => {
		await welcome(client, member, image);
	});

//  Subida de mensajes
	client.on('chat-update', async (datos) => {
		await otosaka(client , datos);
	});
}

// ejecutamos nuestras funciones.
otosa();
join();