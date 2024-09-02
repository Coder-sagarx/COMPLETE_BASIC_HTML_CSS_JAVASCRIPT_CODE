async function hello(){
console.log("hello");
}

async function getdata(data){
     return new Promise((resolve,reject)=>{
      setTimeout(() => {
        console.log("data ->",data);
        resolve("success");
      }, 2000);
     });
}
async function getalldata(){
    console.log("fettiching data  1.....");
    await getdata(1);
    console.log("fettiching data  2.....");
    await getdata(2);
    console.log("fettiching data  3.....");
    await getdata(3);
}
(getalldata)();