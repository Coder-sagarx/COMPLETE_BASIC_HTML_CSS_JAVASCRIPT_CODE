//arrays

let heroes=["viduat","thor","ironman","vicky","hritick","vijay"];
for(let i of heroes){
    console.log(i);
}
let arr=[23,34,56,76,87,98];
let index=0;
for(let i of arr){
    let offer=i/10;
    arr[index++]=i-offer;

}
for(i of arr){
    console.log(i);
}
arr.push(234);

for(i of arr){
    console.log(i);
}
arr.pop();
arr.pop();
for(i of arr){
    console.log(i);
}
console.log(arr.concat(heroes));
let ok=arr.slice(2,5);
console.log(ok);
 arr.splice(3,4,54,56,87,98);
console.log(arr);

