console.log("one");
console.log("two");

function hello(){
    console.log("hello")
}
setTimeout(hello,2000);  //set timeout
setTimeout(()=>{
 console.log("hellolo world");
},4000);
 

function sum(a,b){
console.log("sum is ->",a+b);
}

function calculator(a,b,sumcallback){
sum(a,b,);
}
calculator(6,8,sum);

let age=19;
if(age>20){
if(age>70){
    console.log("old");
}
else{
    console.log("adult");
}
}
else {
    console.log("child");
}

function getdata(data,getnextdata){
    setTimeout(() => {
        console.log("data ->",data);
        if(getnextdata){
            getnextdata();
        }
    }, 2000);
}
 //callback hell
getdata(1,()=>{
    console.log("getting data 2 .......");
    getdata(2,()=>{
        console.log("getting data 3 .......");
        getdata(3,()=>{
            console.log("getting data 4 .......");
            getdata(4);
        });
    });
});

