var clc = require('cli-color');
var orange = clc.xterm(202).bgXterm(236);

//cat's are always hungry
var now = new Date();

function checkWater() {
  console.log(orange('Check your pets water and food, make sure its all fine :)'));
}

// the cat says
console.log(orange('Feed the kitties at ' + now));

//remember to check the water and food every 10min
setInterval(checkWater, 60000);
