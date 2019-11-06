let Button = document.querySelector('button');


var age = window.prompt("input your age :", '');
var numPerDay = window.prompt("input Day :", '');


Button.onclick = function() {
    calculateSupply();
  }



function calculateSupply() {
    var maxAge = 100;
    var totalNeeded = (numPerDay * 365) * (maxAge - age);
    var message = 'You will need ' + totalNeeded + ' cups of tea to last you until the ripe old age of ' + maxAge;
    window.prompt(message);
  }
  
  /*calculateSupply(28, 36);
  calculateSupply(28, 2.5);
  calculateSupply(28, 400);*/