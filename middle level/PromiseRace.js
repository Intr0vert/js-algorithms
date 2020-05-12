let promiseRace = function(promises) {
    return new Promise((resolve, reject) => {
        promises.forEach((promise, index) => {
            promise.then((value) => {
                resolve(value);
            }).catch((error) => {
                reject(error);
            });
        });
    });
}

let promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, "Promise1 done");
});


let promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 300, "Promise2 done");
});

let promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 800, "Promise3 done");
});


let promise4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 200, "Promise4 done");
});

let result = promiseRace([promise1, promise2, promise3, promise4]);

result
    .then(arr => {
        console.log(arr);
    });