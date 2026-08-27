import { useEffect } from "react";


function loadAdsterra(
  id: string,
  key: string,
  width: number,
  height: number
) {

  useEffect(() => {

    const container = document.getElementById(id);

    if (!container) return;


    // 防止重复加载
    if (container.dataset.loaded) return;

    container.dataset.loaded = "true";


    const config = document.createElement("script");

    config.innerHTML = `
      atOptions = {
        'key' : '${key}',
        'format' : 'iframe',
        'height' : ${height},
        'width' : ${width},
        'params' : {}
      };
    `;


    const script = document.createElement("script");

    script.src =
      `https://lightlyenergeticevolution.com/${key}/invoke.js`;

    script.async = true;


    container.appendChild(config);

    container.appendChild(script);


  }, [id,key,width,height]);

}



function Banner({
  id,
  keyId,
  width,
  height
}:{
  id:string;
  keyId:string;
  width:number;
  height:number;
}){


  loadAdsterra(
    id,
    keyId,
    width,
    height
  );


  return (

    <div
      id={id}
      style={{
        margin:"20px auto",
        textAlign:"center",
        minHeight:`${height}px`
      }}
    />

  );

}



export default function Adsterra(){


return (

<div>


{/* Popunder */}
<script
src="https://lightlyenergeticevolution.com/42/e4/b9/42e4b960a9019cd24b6f7d704220d5e0.js"
/>



{/* Native Banner */}

<script
async
data-cfasync="false"
src="https://lightlyenergeticevolution.com/4e4fb4b34886bd0b9ccefd8663bd8cf5/invoke.js"
/>


<div
id="container-4e4fb4b34886bd0b9ccefd8663bd8cf5"
/>



{/* Smartlink */}

<a
href="https://lightlyenergeticevolution.com/ywa9xt5j5?key=13ceed1f3955e0f23cf447a0e0e64f5f"
target="_blank"
rel="noreferrer"
>
Smartlink
</a>



{/* 468x60 */}

<Banner

id="adsterra-468"

keyId="262b4c103fcd51fa540fe9de0a149940"

width={468}

height={60}

/>



{/* 300x250 */}

<Banner

id="adsterra-300"

keyId="76141def117058a2ee6c4eb90b211812"

width={300}

height={250}

/>



{/* 160x600 */}

<Banner

id="adsterra-160x600"

keyId="cff874454a9cb0638cfd626004c56b85"

width={160}

height={600}

/>



{/* 160x300 */}

<Banner

id="adsterra-160x300"

keyId="82a7c7d3d11cded985ea1adaa105f226"

width={160}

height={300}

/>



{/* 320x50 */}

<Banner

id="adsterra-320"

keyId="c2fbff91e24d85454c1fc5fd739bcd86"

width={320}

height={50}

/>



{/* 728x90 */}

<Banner

id="adsterra-728"

keyId="9a8f7e7cda176cfd31394e27113dea5b"

width={728}

height={90}

/>



</div>

)

}
