import { useEffect } from "react";

export default function AdSidebar(){

useEffect(()=>{

const s=document.createElement("script");

s.src=
"https://lightlyenergeticevolution.com/9a8f7e7cda176cfd31394e27113dea5b/invoke.js";

s.async=true;

document.body.appendChild(s);


return ()=>{
 document.body.removeChild(s);
}

},[]);


return (
<div
style={{
width:"160px",
height:"600px"
}}
/>
)

}
