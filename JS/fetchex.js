const data=fetch("https://api.github.com/users/ashishvirgo");
data.then((data1)=>{
    return data1.json();
}).then((res)=>{
    console.log(res);
})