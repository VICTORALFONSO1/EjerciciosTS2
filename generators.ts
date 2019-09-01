/*
function* infiniteSequence() {
    var i = 0;
    while(true) {
        yield i++;
    }
}

var iterator = infiniteSequence();
while (true) {
    console.log(iterator.next());
}
*/
/*
function* idMaker() {
    let index = 0;
    while (index < 3)
        yield index++;
}
let gen = idMaker();
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
*/
/*
function* generator(){
    console.log('Execution started');
    yield 0;
    console.log('Execution resumed');
    yield 1;
    console.log('Execution resumed');
}
var iterator = generator();
console.log('Starting iteration');
console.log(iterator.next()); 
console.log(iterator.next());
console.log(iterator.next());
*/
/*
function* generator() {
    var bar = yield 'Console log';
    console.log(bar);
    yield 1;
}.
const iterator = generator();
const foo = iterator.next();
console.log(foo.value);
const nextThing = iterator.next('Un texto inyecctado');
console.log(nextThing);

*/
function* logGenerator() {
    console.log(yield);
    console.log(yield);
    console.log(yield);
}

var gen = logGenerator();

gen.next();
gen.next('pretzel'); 
gen.next('california'); 
gen.next('mayonnaise'); 