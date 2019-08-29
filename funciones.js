//setTimeout(() => {
//    console.log(this);
//},2000);
/*
function padLeft(value: string, padding: string | number){
    if(typeof padding === "number"){
        return Array(padding + 1).join(" ") + value;
    }

    if(typeof padding === "string") {
        return Array(padding.length + 1).join(" ") + value;
    }

    throw new Error(`Expected String or number, got '${padding}' `);
}

console.log(padLeft("hello", "aaa"));
console.log(padLeft("hello", 5));
console.log(padLeft("hello", true));
*/
/*
function validateEntity(e: Entity?) {

}

function processEntity(e: Entity?) {
    validateEntity(e);
    let s = e!.name;
}
*/
var x = function (a) { return 0; };
var y = function (b, s) { return 0; };
y = x;
x = y;
var x1 = function () { return ({ name: 'Alice' }); };
var y1 = function () { return ({ name: 'Alice', location: 'Seattle' }); };
x1 = y1;
y1 = x1;
