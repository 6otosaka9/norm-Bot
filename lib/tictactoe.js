const fs = require("fs");

const dataTtt = JSON.parse(fs.readFileSync("../admin/tictactoe.json"));
console.log(dataTtt)