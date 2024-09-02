const url="https://catfact.ninja/fact";
const f=document.querySelector("#fact");
const b=document.querySelector("#btn");

b.addEventListener("click",getdata);

const getdata = async ()=>{
    let responce= await fetch(url);
    console.log(responce);
    let data=await responce.json();
    console.log(data[0].text);
    f.innerText=data[0].text;
};
