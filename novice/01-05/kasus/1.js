var arr = [1,2,3,4];
var arr2 = [1,1,1,2];

var squares = arr.map((a, i) => a + arr2[i]);

console.log(squares);