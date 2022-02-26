const {
 MessageType,
 Presence,
 MessageOptions,
 Mimetype,
 WALocationMessage,
 WA_MESSAGE_STUB_TYPES,
 ReconnectMode,
 ProxyAgent,
 GroupSettingChange,
 waChatKey,
 mentionedJid,
 processTime,
 Browser
} = require('@adiwajshing/baileys');
const moment = require("moment-timezone");
const fs = require("fs");
const axios = require("axios");
const { color } = require("./lib/color");
const ffmpeg = require("fluent-ffmpeg");
const dialogflow = require("./dialogflow.js");
const { getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, fetchJson } = require('./lib/functions');
const { admin } = require("./admin");
const { string } = require("./admin");

module.exports = otosaka = async (client, datos) => {
 try {
  
  const settings = await admin.admin();
  const owner = settings.owner;
  const ownerNumber = owner + "@s.whatsapp.net";
  const prefix = settings.BotPrefix;
  const author = settings.author;
  const pack = settings.pack;
  const messageOfCreator = settings.message;
  
  if (!datos.hasNewMessage) return;
  datos = JSON.parse(JSON.stringify(datos)).messages[0];
		if (!datos.message) return;
		if (datos.key && datos.key.remoteJid == 'status@broadcast') return;
		if (datos.key.fromMe) return;
  global.prefix;
		global.blocked;
		const content = JSON.stringify(datos.message);
		const from = datos.key.remoteJid;
		const type = Object.keys(datos.message)[0];
		const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType;
		const time = moment.tz('America/Lima').format('DD/MM HH:mm:ss');
		const timi = moment.tz('America/Lima').add(30, 'days').calendar();
		const timu = moment.tz('America/Lima').add(20, 'days').calendar();
		message = (type === 'conversation' && datos.message.conversation.startsWith(prefix)) ? datos.message.conversation : (type == 'imageMessage') && datos.message.imageMessage.caption.startsWith(prefix) ? datos.message.imageMessage.caption : (type == 'videoMessage') && datos.message.videoMessage.caption.startsWith(prefix) ? datos.message.videoMessage.caption : (type == 'extendedTextMessage') && datos.message.extendedTextMessage.text.startsWith(prefix) ? datos.message.extendedTextMessage.text : '';
			budy = (type === 'conversation') ? datos.message.conversation : (type === 'extendedTextMessage') ? datos.message.extendedTextMessage.text : '';
		var pes = (type === 'conversation' && datos.message.conversation) ? datos.message.conversation : (type == 'imageMessage') && datos.message.imageMessage.caption ? datos.message.imageMessage.caption : (type == 'videoMessage') && datos.message.videoMessage.caption ? datos.message.videoMessage.caption : (type == 'extendedTextMessage') && datos.message.extendedTextMessage.text ? datos.message.extendedTextMessage.text : '';
 	
		const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase();
		const command = message.slice(1).trim().split(/ +/).shift().toLowerCase();
		const args = message.trim().split(/ +/).slice(1);
		const isCmd = message.startsWith(prefix);
		const tescuk = ["0@s.whatsapp.net"];
		const isGroup = from.endsWith('@g.us');
		const q = args.join(' ');
		const botNumber = client.user.jid;
		const sender = isGroup ? datos.participant : datos.key.remoteJid;
		const pushname = client.contacts[sender] != undefined ? client.contacts[sender].vname || client.contacts[sender].notify : undefined;
		const groupMetadata = isGroup ? await client.groupMetadata(from) : '';
		const groupName = isGroup ? groupMetadata.subject : '';
		const groupId = isGroup ? groupMetadata.jid : '';
		const groupMembers = isGroup ? groupMetadata.participants : '';
		const groupDesc = isGroup ? groupMetadata.desc : '';
  const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : '';
  
  /*[-- Seguridad en los comandos --]*/
  const isBotGroupAdmins = groupAdmins.includes(botNumber) || false;
		const isGroupAdmins = groupAdmins.includes(sender) || false;
		const isImage = type === 'imageMessage';
		const isUrl = (url) => {
		 return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'));
		};
		
		// Funciones 
		const reply = (texto) => {
		 client.sendMessage(from, texto, text, { quoted: datos });
		};
		const mentions = (texto, member01, id) => {
				(id == null || id == undefined || id == false) ? client.sendMessage(from, texto.trim(), extendedText, {contextInfo: {"mentionedJid": member01}}) : client.sendMessage(from, texto.trim(), extendedText, {quoted: datos, contextInfo: {"mentionedJid": member01}});
		};
		
		const isMedia = (type === 'imageMessage' || type === 'videoMessage');
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage');
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage');
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage');
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage');
		
		// Antilink
/*
  var urlReg = /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/gi;
  urls = message.match(urlReg);
  if (urls[0]) {
   for (var i = 0; i < urls.length; i++) {
    if (urls[i].icludes("wa.me")) {
     let papa = "diego es gay";
    } else {
     if (urls.length < 1) {
      text = `${urls.length} detectado: ${urls[0]}`;
     } else {
      text = `${urls.length} detectados`;
     }
     reply(text);
    }
   }
  }
  */
			
		if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mCMD\x1b[1;37m]', time, color(command), 'de', color(sender.split('@')[0]), 'args :', color(args.length));
		if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mMSG\x1b[1;37m]', time, color('Mensaje'), 'de', color(sender.split('@')[0]), 'args:', color(args.length));
		//group message
		if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mCMD\x1b[1;37m]', time, color(command), 'de', color(sender.split('@')[0]), 'en', color(groupName), 'args :', color(args.length));
		if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mMSG\x1b[1;37m]', time, color('Mensaje'), 'de', color(sender.split('@')[0]), 'en', color(groupName), 'args:', color(args.length));
	
	 if (isCmd) await client.updatePresence(from, Presence.composing);
	 await client.updatePresence(from, Presence.available);
	 await client.chatRead(from);

		switch (command) {
		 
		 case 'exec':
		  argument = message.slice(6);
		  try {
		   JSON.stringify(eval(argument));
		  } catch (e) {
		   reply(`Error: ${e}`);
		  }
    break;
   case 'menu':
    ordn = Math.floor(Math.random() * 3) + 1;
    client.sendMessage(from, fs.readFileSync(`./media/banner${ordn}.jpg`), image, {caption: string.menu(prefix)});
    break;
   case 'hidetag':
    if (!isGroup) return reply('solo en grupos');
    if (!isGroupAdmins) return reply('solo admins');
    var vuelis = message.slice(9);
    var group = await client.groupMetadata(from);
		  var member = group['participants'];
		  var mem = [];
		  member.map( async adm => {
		    mem.push(adm.id.replace('c.us', 's.whatsapp.net'));
		  });
		  var options = {
		   text: vuelis,
		   contextInfo: { mentionedJid: mem },
		   quoted: datos
	  	};
		  client.sendMessage(from, options, text);
    break;
		 case 'delete':
	  case 'd':
	   if (!isGroup) return reply('solo en grupos');
    if (!isGroupAdmins) return reply('solo admins');
		  client.deleteMessage(from, { id: datos.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true });
		  break;
		 case 'setname':
		  if (!isGroup) return reply('solo en grupos');
    if (!isGroupAdmins) return reply('solo admins');
    if (!isBotGroupAdmins) return reply('admin requerido')
    client.groupUpdateSubject(from, `${message.slice(9)}`)
    client.sendMessage(from, 'Nombre del grupo cambiando', text, {quoted: datos});
		 	break;
			case 'setdesc':
			 if (!isGroup) return reply('solo en grupos');
    if (!isGroupAdmins) return reply('solo admins');
    if (!isBotGroupAdmins) return reply('admin requerido')
   client.groupUpdateDescription(from, `${message.slice(9)}`)
   client.sendMessage(from, 'Descripción del grupo cambiado', text, {quoted: datos})
			 break;
			case 'setadmin':
			 if (!isGroup) return reply('solo en grupos');
    if (!isGroupAdmins) return reply('solo admins');
    if (!isBotGroupAdmins) return reply('admin requerido')
			 mentioned = datos.message.extendedTextMessage.contextInfo.mentionedJid
		  await groupMakeAdmin(from, mentioned)
		 	break;
		 case 'kickadmin':
		  if (!isGroup) return reply('solo en grupos');
    if (!isGroupAdmins) return reply('solo admins');
    if (!isBotGroupAdmins) return reply('admin requerido')
		  mentionded = datos.message.extendedTextMessage.contextInfo.mentionedJid
		  await client.groupDemoteAdmin(from, mentioned)
		  break;
		 case 'closegrp':
		  if (!isGroup) return reply('solo en grupos');
    if (!isGroupAdmins) return reply('solo admins');
    if (!isBotGroupAdmins) return reply('admin requerido')
		  if (args[0] === 'on') { 
     client.groupSettingChange(from, GroupSettingChange.messageSend, true)
     client.sendMessage(from, 'Ahora solo los admins pueden enviar mensajes.', text)
    }
    if (args[0] === 'off') {
     client.groupSettingChange(from, GroupSettingChange.messageSend, false)
     client.sendMessage(from, 'Ahora todos los integrantes pueden enviar mensajes', text)
    }
		  break;
		 case 'settingp':
		  if (!isGroup) return reply('solo en grupos');
    if (!isGroupAdmins) return reply('solo admins');
    if (!isBotGroupAdmins) return reply('admin requerido')
		  if (args[0] === 'off') {
     client.groupSettingChange(from, GroupSettingChange.settingsChange, true)
     client.sendMessage(from, 'Ahora solo los admins pueden cambiar los ajustes del grupo', text)
    }
    if (args[0] === 'on') {
     client.groupSettingChange(from, GroupSettingChange.settingsChange, false)
     client.sendMessage(from, 'Ahora todos los integrantes pueden cambiar los ajustes del grupo', text)
    }
		  break;
		 case 'tagall':
		  if (!isGroup) return reply('solo en grupos');
    if (!isGroupAdmins) return reply('solo admins');
		  members_id = []
		  textag = message.slice(8)
		  textag += '\n\n'
		  for (let mem of groupMembers) {
			  textag += `• @${mem.jid.split('@')[0]}\n`
				members_id.push(mem.jid)
		   }
	  	mentions(textag, members_id, true)
		  break;
		 case 'setpf':
		  if (!isGroup) return reply('solo en grupos');
    if (!isGroupAdmins) return reply('solo admins');
    if (!isBotGroupAdmins) return reply('admin requerido')
		  media = await client.downloadAndSaveMediaMessage(datos)
    await client.updateProfilePicture (from, media)
    reply('Foto de perfil del grupo cambiado.')
		  break;
		 case 'test':
		  reply(string.test(pushname))
		  break;
		 case 'add':
		  if (!isGroup) return repy('solo en grupos')
		  if (!isGroupAdmins) return reply('solo admins')
		  if (!isBotGroupAdmins) return reply('admin requerido')
		  num = message.slice(5)
		  if (args.length < 1) return reply('debes poner un número valido')
		  if (num.includes(' ')) {
		   if (num.includes('-')) {
		    num = num.replace('(', '')
		    num = num.replace(')', '').split('-').join('')
		   }
		   num = num.replace('+', '').split(' ').join('')
		  }
		  prepareNum = num + "@s.whatsapp.net"
		  client.groupAdd(from, [prepareNum])
		  break;
		 case 'ban':
		  mentioned = datos.message.extendedTextMessage.contextInfo.mentionedJid
			client.groupRemove(from, mentioned)
		  break;
		 case 'tioanime':
		  title = message.slice(10);
		  animeResult = await fetchJson(`https://api-tioanime-6otosaka9.herokuapp.com/api/tioanime?name=${title}`)
		  client.sendMessage(from, { url: animeResult.result[0].image }, image, { quoted: datos, caption: string.tioanime(animeResult) })
    
		  break;
		 default:
		  if (message.startsWith(`${prefix}${command}`)) {
		   reply(`amigo *${pushname}*, el comando *${prefix}${command}* no existe, envia *${prefix}start* para ver la lista.`);
    }
    
    if (/^>/.test(pes)) {
     let txt = pes.replace(/^>/, '');
	    let type = Function;
	   if (/await/.test(pes)) type = (async () => {}).constructor;
	   
	   let func = new type('print', 'client', 'MessageType', 'datos', 'text', 'from', 'image', 'os', 'fetch', txt);
	   console.log('[EvalF]', func.toString());
	   let output;
	   try {
	    output = await func((...args) => {
	     console.log('[EvalP]', ...args);
	     client.sendMessage(from, util.format(...args), MessageType.extendedText, {
	      quoted: datos
	    });
	    }, client, MessageType, datos, text, from, await image, os, fetch);
	    console.log('[EvalO]', output);
	    client.sendMessage(from, util.format(output), MessageType.extendedText, {
	     quoted: datos
	    });
	   } catch (e) {
	   console.error('[EvalE]', e);
	   client.sendMessage(from, util.format(e), MessageType.extendedText, {
	    quoted: datos
	   });
	     }
    }
		}
 } catch (e) {
  console.log(`Error: ${color(e, "red")}`);
 }
};