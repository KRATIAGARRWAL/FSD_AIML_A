function register(cb) {
    //waitforthreesecond()
    setTimeout(() => {
        console.log("Registering...");
        cb();
    }, 3000)

}
function sendemail(cb) {
    setTimeout(() => {
        console.log("send mail");
        cb();
    }, 3000)
}
function Login(cb) {
    setTimeout(() => {
        console.log("Login ");
        cb();
    }, 3000)
}
function getdata(cb) {
    setTimeout(() => {
        console.log("get data");
        cb();
    }, 3000)
}
function displaydata() {
    console.log("display user data");
}
function waitforthreesecond() {
    const ms = 6000 + new Date().getTime();
    while (ms > new Date()) { }
}
register(function () {
    sendemail(function(){
        Login(function(){
            getdata(function(){
                displaydata();
            });
        });
        
    });
   
});