function validate(){
var kendaraan = document.getElementById('kendaraan').value;

var kendaraanRGEX = /^[a-zA-z]{1,2}\s?\d{1,4}\s?[a-zA-Z]{1,3}$/;

var kendaraanResult = kendaraanRGEX.test(kendaraan);

if(kendaraanResult == false)
{
alert('Ini bukan nomer kendaraan indo');
return false;
}
 
alert('Ini kendaraan indo')
  return true;
}
