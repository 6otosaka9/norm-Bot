const fetch = require("node-fetch");
const { fetchJson } = require("../lib/functions");
const fs = require("fs");
const settsAux = JSON.parse(fs.readFileSync("./admin/admin.json"));
exports.admin = async () => {
const adminM = "https://raw.githubusercontent.com/6otosaka9/tioanime/master/admin/admin.json";
try {
 admin = await fetchJson(adminM);
} catch (e) {
 const {
  owner,
  BotPrefix,
  author,
  pack,
  message
 } = settsAux;
adminLoaded = {
 "owner": owner,
 "BotPrefix": BotPrefix,
 "author": author,
 "pack": pack,
"message": message
};
 admin = adminLoaded
}
return admin;
};