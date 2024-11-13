const myPromise =new Promise(
    (resolve,reject)=>{
        console.log("executed promise");
        resolve("Success");
    }
);
myPromise.then((msg)=>{
    console.log(msg);
}).catch((err)=>{
    console.log(err);
}).finally(()=>{
    console.log("Finally executed");
})

