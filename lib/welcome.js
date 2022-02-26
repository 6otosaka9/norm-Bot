const fs = require('fs');
const { string } = require('../admin');
const { getBuffer } = require('../lib/functions');
const {
    WAConnection,
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

module.exports = welcome = async (client, member, image) => {
 const welcomeReg = JSON.parse(fs.readFileSync('./database/registers/welcome.json'));
 const isWelcome = welcomeReg.includes(member.jid);
 
 if (!isWelcome) return;
 try {
  const metadata = await client.groupMetadata(member.jid);
  if (member.action == 'add') {
   number = member.participants[0];
   try {
    perfilImage = await client.getProfilePicture(`${member.participants[0].split('@')[0]}@c.us`);
    profilePicture = await getBuffer(perfilImage);
   } catch {
    profilePicture = fs.readFileSync("./media/sin_foto.jpg");
   }
   client.sendMessage(metadata.id, profilePicture, image, {caption: "testeando"});
  }
  
  if (member.action == 'remove') {
   number = member.participants[0];
   try {
    perfilImage = await client.getProfilePicture(`${member.participants[0].split('@')[0]}@c.us`);
    profilePicture = await getBuffer(perfilImage);
   } catch {
    profilePicture = fs.readFileSync("./media/sin_foto.jpg");
   }
   client.sendMessage(metadata.id, profilePicture, image, {caption: "testeando"});
  }
 } catch (e) {console.log("Error: " + e)}
 
};