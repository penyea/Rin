import { useEffect } from "react";


export default function Adsterra() {

useEffect(()=>{

const scripts = [
"https://lightlyenergeticevolution.com/42/e4/b9/42e4b960a9019cd24b6f7d704220d5e0.js",
"https://lightlyenergeticevolution.com/4e4fb4b34886bd0b9ccefd8663bd8cf5/invoke.js"
];


scripts.forEach(src=>{

const script=document.createElement("script");

script.src=src;
script.async=true;

document.body.appendChild(script);

});


},[]);


return (

<div>


<div id="container-4e4fb4b34886bd0b9ccefd8663bd8cf5"/>


<Banner
keyId="262b4c103fcd51fa540fe9de0a149940"
width={468}
height={60}
/>


<Banner
keyId="76141def117058a2ee6c4eb90b211812"
width={300}
height={250}
/>


<Banner
keyId="cff874454a9cb0638cfd626004c56b85"
width={160}
height={600}
/>


<Banner
keyId="82a7c7c3d11cded985ea1adaa105f226"
width={160}
height={300}
/>


<Banner
keyId="c2fbff91e24d85454c1fc5fd739bcd86"
width={320}
height={50}
/>


<Banner
keyId="9a8f7e7cda176cfd31394e27113dea5b"
width={728}
height={90}
/>


</div>

)

}



function Banner({
keyId,
width,
height
}:{
keyId:string,
width:number,
height:number
}){


useEffect(()=>{


const config=document.createElement("script");

config.innerHTML=`

atOptions = {
'key' : '${keyId}',
'format' : 'iframe',
'height' : ${height},
'width' : ${width},
'params' : {}
};

`;

document.body.appendChild(config);



const script=document.createElement("script");

script.src=
`https://lightlyenergeticevolution.com/${keyId}/invoke.js`;

document.body.appendChild(script);



},[]);



return <div />;

}
