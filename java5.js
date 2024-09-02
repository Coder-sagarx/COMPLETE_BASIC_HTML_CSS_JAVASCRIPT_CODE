const student ={
name:"sagar singh bisht",
marks:94.2,
printmarks : function(){
    console.log("marks",this.marks);
},
};
  
const employes = {
caltax: function(){
    console.log("tax rate is 10%");
},
};

const karanarjun1={
    salary:787392,
};
const karanarjun2={
    salary:787392,
};
const karanarjun3={
    salary:787392,
};
const karanarjun4={
    salary:787392,
};
const karanarjun5={
    salary:787392,
};

karanarjun1.__proto__=employes;
karanarjun2.__proto__=employes;
karanarjun3.__proto__=employes;
karanarjun4.__proto__=employes;
karanarjun5.__proto__=employes;

class toyotacar{
    constructor(brand,m){
        console.log("parent constructor");       
        this.brand=brand;
        this.m=m;
        
    }
    start(){
    console.log("star");
    }
    stop(){
        console.log("stop");
    }
}
class car extends toyotacar{
 constructor(){
    console.log("enter ");
     super();
    console.log("exit");
 }
}
let nexon=new car();


let data="secreat data ->";
class user{
constructor(name,email){
this.name=name;
this.email=email;
}
viewdata(){
    console.log("data ->",data);
}
};
class admin extends user{
constructor(name,email){
super(name,email);
}
editdata(){
    data="some new value";
}
}

 let name=new admin("sagar singh bisgr",32);
