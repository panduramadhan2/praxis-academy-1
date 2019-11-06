let celButton = document.getElementById('CEL');

var celsius = window.prompt("input your Celcius :", '');

celButton.onclick = function() {
    celsiusToFahrenheit();
  }



function celsiusToFahrenheit() {
    var celsiusInF = (celsius*9)/5 + 32;
    window.prompt(celsius + '°C is ' + celsiusInF + '°F');
  }


  let farButton = document.getElementById('FAR');

farButton.onclick = function() {
    fahrenheitToCelsius();
  }

  var fahrenheit = window.prompt("input your Farenheit :", '');


  
  function fahrenheitToCelsius() {
    var fahrenheitInC = ((fahrenheit - 32)*5)/9;
    window.prompt(fahrenheit + '°F is ' + fahrenheitInC + '°C');
  }

  //ATUR DUA BUAH BUTTON UNTUK MASING2 MENGHASILKAN CONVERTER DARI FARENHAIT KE CELCIUS DAN SEBALIKNYA