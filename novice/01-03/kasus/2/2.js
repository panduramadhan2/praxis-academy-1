let Button = document.querySelector('button');


var age = window.prompt("input your age :", '');



Button.onclick = function() {
    calculateDogAge();
  }


function calculateDogAge() {
    var dogYears = 7*age;
    window.prompt("Your doggie is " + dogYears + " years old in dog years!");
}

//calculateDogAge(1);
//calculateDogAge(0.5);
//calculateDogAge(12);