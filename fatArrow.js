/*
var inc = (x)=> x+1;

function Person(age) {
    this.age = age
    this.growOld = () => {
        this.age++;
    }
}

var person = new Person(1);
setTimeout(person.growOld,1000);
setTimeout(function() { console.log(person.age); },2000);
*/
/*
class Person {
    constructor(public age:number) {}
    growOld = () => {
        this.age++;
    }
}
var person = new Person(1)
setTimeout(person.growOld,1000);
setTimeout(function() { console.log(person.age); },2000);

var growOld = person.growOld;
growOld();
*/
/*
let _self = this;
something.each(function() {
    console.log(_self);
    console.log(this);
});
*/
/*
class Adder {
    add = (b: string): string => {
        return this.a + b;
    }
}
class ExtendedAdder extends Adder {
    private superAdd = this.add;

    add = (b: string): string => {
        return this.superAdd(b);
    }
}
*/
var add = function (x) { return function (y) { return x + y; }; };
add(123)(456);
var add123 = add(123);
add123(456);
