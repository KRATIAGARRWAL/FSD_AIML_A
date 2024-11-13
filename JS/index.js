const mySet=new Set();
mySet.add(24);
mySet.add(21);
mySet.add(12);
mySet.add(24);
mySet.add(21);
console.log(mySet);

const num=[1,2,3,4,5,6];
const a1=num.reduce((n,s)=>{
    return (n+s)
})
console.lo