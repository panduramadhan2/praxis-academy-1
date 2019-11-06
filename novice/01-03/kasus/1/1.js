let Button = document.querySelector('button');

var numKids = window.prompt("number of children", '');
var partner = window.prompt("partner's name", '');
var geoLocation = window.prompt("geographic location", '');
var jobTitle = window.prompt("job title", '');



Button.onclick = function() {
    tellFortune();
  }

  function tellFortune() {
    var future = 'You will be a ' + jobTitle + ' in ' + geoLocation + ' and married to ' +
   partner + ' ' + ' with ' + numKids + ' kids.';
   
   window.prompt(future);
}


//console.logtellFortune('bball player', 'spain', 'Shaq', 3);
//tellFortune('stunt double', 'Japan', 'Ryan Gosling', 3000);
//tellFortune('Elvis impersonator', 'Russia', 'The Oatmeal', 0);