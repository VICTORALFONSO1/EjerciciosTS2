/*
Promise.reject(new Error('something bad happened'))
    .then((res) => {
        console.log(res);
        return 456;
    })
    .catch((err) => {
        console.log(err.message);
        return Promise.resolve(123);
    })
    .then((res) => {
        console.log(res);
    })

Promise.resolve(123)
    .then((res) => {
        throw new Error('something bad happened')
        return 456;
    })
    .then((res) => {
        console.log(res);
        return Promise.resolve(789);
    })
    .catch((err) => {
        console.log(err.message);
    })
*/
/*
function iReturnPromiseAfter1Second():Promise<string> {
    return new Promise((resolve)=>{
        setTimeout(()=>resolve("Hello world!"),1000);
    });
}

Promise.resolve(123)
    .then((res)=>{
        return iReturnPromiseAfter1Second();
    })
    .then((res)=>{
        console.log(res);
    });
*/
/*
loadJSONAsync('good.json')
    .then(function (val) { console.log(val); })
    .catch(function (err) {
        console.log('good.json error', err.message);
    })

    .then(function () {
        return loadJSONAsync('absent.json');
    })
    .then(function (val) { console.log(val); })
    .catch(function (err) {
        console.log('absent.json error', err.message);
    })

    .then(function () {
        return loadJSONAsync('bad.json');
    })
    .then(function (val) { console.log(val); })
    .catch(function (err) {
        console.log('bad.json error', err.message);
    });
*/
function loadItem(id: number): Promise<{id: number}> {
    return new Promise((resolve)=>{
        console.log('loading item', id);
        setTimeout(() => {
            resolve({ id: id });
        },1000);
    });
}

let item1, item2;
loadItem(1)
    .then((res) => {
        item1 = res;
        return loadItem(2);
    })
    .then((res) => {
        item2 = res;
        console.log('done');
    });

Promise.all([loadItem(1),loadItem(2)])
    .then((res) => {
        [item1,item2] = res;
        console.log('done')
    });