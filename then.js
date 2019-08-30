/*
const promise = new Promise((resolve, reject) => {
    resolve(123);
});
promise.then((res) => {
    console.log('I get called: ', res === 123);
});
promise.catch((err) => {

});
*/
var promise = new Promise(function (resolve, reject) {
    reject(new Error("Algo malo a pasado"));
});
promise.then(function (res) {
});
promise["catch"](function (err) {
    console.log('Tengo una llamada: ', err.message);
});
