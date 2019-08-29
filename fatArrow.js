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
var _self = this;
something.each(function () {
    console.log(_self);
    console.log(this);
});
