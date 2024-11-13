function register(resolve){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Register End");
        resolve();
    },3000);
});
}

function sendmail(resolve){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("email send");
        resolve();
    },2000);
});
}

function login(resolve){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("login end");
        resolve();
    },2000);
});
}

function getdata(resolve){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("get your data");
        resolve();
    },2000);
});
}

function displaydata(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("display your data");
            resolve();
        },2000);
    });
}


register().then(login).then(sendmail).then(getdata).then(displaydata).catch(()=>{
    console.log("error");
});
console.log("work other application");