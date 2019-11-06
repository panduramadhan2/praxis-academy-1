let Button = document.querySelector('button');


var radius = window.prompt("input radius :", '');


Button.onclick = function() {
    calcGeometry();
  }


function calcGeometry() {
    var circumference = Math.PI * 2*radius;
    var area = Math.PI * radius*radius;
    window.prompt("The circumference is " + circumference);
    window.prompt("The area is " + area);
  }