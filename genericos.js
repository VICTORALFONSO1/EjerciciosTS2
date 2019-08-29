/*
function echo<T>(arg: T) : T {
    return arg;
}

let a = echo<number>(1);
let b = echo<String>("Hola mundo");
*/
var Generic = /** @class */ (function () {
    function Generic() {
    }
    return Generic;
}());
var myGeneric = new Generic();
console.log(myGeneric.add = function (x, y) { return x + y; });
console.log(myGeneric.add(3, 4));
