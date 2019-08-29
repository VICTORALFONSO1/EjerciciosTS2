/*
function echo<T>(arg: T) : T {
    return arg;
}

let a = echo<number>(1);
let b = echo<String>("Hola mundo");
*/
function echo(arg) {
    console.log(arg.length);
    return arg;
}
var a = echo("aaa");
var t = echo({ length: 2, name: "aa" });
var b = echo(1); // Esto no funciona
