/*
var obj = {x: 1, y:2, z: 3};
console.log(obj.x);

var { x, y, z} = obj;
console.log(x);
*/
/*
var array = [1, 2, 3];
console.log(array[0]);

var [x, y, z] = array;
console.log(x);
*/
var array = [1, 2, 3, 4];
var x = array[0], y = array[1], rest = array.slice(2);
console.log(x, y, rest);
