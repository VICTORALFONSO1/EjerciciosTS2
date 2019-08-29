function echo<T>(arg: T) : T {
    return arg;
}

let a = echo<number>(1);
let b = echo<String>("Hola mundo");