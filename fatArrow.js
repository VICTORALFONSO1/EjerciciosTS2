var inc = function (x) { return x + 1; };
function Person(age) {
    this.age = age;
    this.growOld = function () {
        this.age++;
    };
}
var person = new Person(1);
setTimeout(person.growOld, 1000);
setTimeout(function () { console.log(person.age); }, 2000);
