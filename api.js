var okcoinautho = require("./OKCoin/OKCoinAutho.js");
var simpleokcoinautho = require("./OKCoin/SimpleOKCoinAutho.js");

const API_KEY = "ec7e8719-d39f-468c-b473-6abd8bf8c0d2";
const SECRET_KEY = "3F5A4B381253184BB3EE65E8FF038018";

var autho = new okcoinautho.OKCoinAutho(API_KEY, SECRET_KEY);
console.log(autho.getData());

var sautho = new simpleokcoinautho.SimpleOKCoinAutho(API_KEY, SECRET_KEY);
console.log(sautho.getData());
