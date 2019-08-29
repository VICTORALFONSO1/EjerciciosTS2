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
function validateEntity(e) {
}
function processEntity(e) {
    validateEntity(e);
    var s = e.name;
}
