//basic

//for print
console.log("welcome to apna collage ");
console.log("sagar singh bisht");
console .log("ok iam fine ");
console .log("ok iam fine ");
fullname="sagar ";
age=23;
prise=99.90;
a="NULL";
b=undefined;
console.log("fullname");
iffellow="true";
console.log(iffellow);

//structure
const student={
fullname :"sagar  singh bisht",
age : 18,
cgpa : 8.5,
ispass:"true",
};
console.log(student["cgpa"]);
console.log(student["ispass"]);
console.log(student["fullname"]);
console.log(student["age"]);
student["age"]=student["age"]+1;
console.log(student["age"]);

const  profile={
    username:"sagar singh bisht",
    isfollow:"true",
    follower:123,
    following:123,
}
console.log(profile);
console.log(student);

let ok="false";

if(ok=="true"){
    console.log("right");
} 
else{
    console.log("wrong");
}
for(let i=0;i<2;i++){
    console.log(profile);
}
let ans=0;
while(ans<4){
    console.log("hee");
    ans++;
}

16>18?console.log("true"):console.log("false");

//alert("your devise is hacked");
let name=prompt("enter your number");
console.log(name);

if(name%5==0){
    console.log("true");
}
else{
    console.log("false");
}
let str="           string";
let str1=str.toUpperCase();
console.log(str1);
let str2=str1.toLowerCase();
console.log(str2);
console.log(str.trim());

let marks=["apple","banana","lichi","pich","tamato"];
let mark=["apple","banana","lichi","pich","tamato"];
console.log(marks);
let numbers=[2,3,4,5,6,6];

numbers[1]=numbers[2]+1;
console.log(numbers);
console.log(numbers.length);

marks[1]="sagar";
console.log(marks);

let num=25 
let x=prompt("guss the lotey number ->");
while(x!=num){
    console.log(x);
x=prompt("guss the lotey number ->");   
}

