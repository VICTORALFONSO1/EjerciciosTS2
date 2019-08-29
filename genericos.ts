/*
function echo<T>(arg: T) : T {
    return arg;
}

let a = echo<number>(1);
let b = echo<String>("Hola mundo");
*/

/*
class Generic<T> {
    add: (X: T, y:T) => T;
}

let myGeneric = new Generic<number>();

console.log(myGeneric.add = function (x,y) {return x + y});
console.log(myGeneric.add(3,4)); */

interface withLength {
    length: number;
}

function echo<T extends withLength>(arg: T ): T {
    console.log(arg.length);
    return arg;
}

let a = echo("aaa");
let t = echo({length: 2, name: "aa"});

let b = echo(1); // Esto no funciona