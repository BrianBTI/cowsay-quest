const myInfos= require('./information.js');
const cowSay = require('cowsay');

console.log(cowSay.say({
    text: myInfos(),
    e : "oO",
	T : "U "
}));
