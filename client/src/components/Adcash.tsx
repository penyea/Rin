import { useEffect } from "react";

declare global {
  interface Window {
    aclib: any;
  }
}


export default function Adcash(){

useEffect(()=>{


const timer=setTimeout(()=>{


try{


const s=document.createElement("script");


s.src="https://acscdn.com/script/aclib.js";


s.onload=()=>{


if(window.aclib){


window.aclib.runAutoTag({

zoneId:"adyvzgalio"

});


console.log("Adcash OK");


}


};


document.head.appendChild(s);


}catch(e){

console.log(e);

}


},3000);



return ()=>clearTimeout(timer);


},[]);



return null;

}
