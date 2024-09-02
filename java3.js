//function method

function add(x,y){
    return x+y;
}
let a=10;
b=20;
let sum=add(a,b);
console.log(sum);

const arrowsum=(a,b)=>{
return a+b;
}
const arrowmul=(a,b)=>{
    return a*b;
    }
let x=arrowsum(28,90);
 console.log(x);

 let y=arrowmul(28,90);
 console.log(y);

 let nums=[2,40,6,8,10,20,15,30];

 nums.map((n) => {
    console.log(n*n);
 });

  let evenarr=nums.filter((val)=>{
    return val>=10;
  })
console.log(evenarr);

const large=nums.reduce((pre,cur)=>{
    return pre>cur?pre:cur;
})
console.log(large);

let marks=[90,91,89,79,83,94,99,89];
let higestmarks=marks.filter((val)=>{
    return val>=90;
})
console.log(higestmarks);
let number=prompt("enter a number ->");
let insert=[];
for(let i=0;i<number;i++){
insert[i]=i+1;
}
 
console.log(insert);

let sum1=insert.reduce((res,cur)=>{
return  res*cur;
})
console.log(sum1);

