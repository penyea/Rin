"use client";

import Script from "next/script";

export default function Adsterra() {
  return (
    <div>

      {/* Popunder */}
      <Script
        src="https://lightlyenergeticevolution.com/42/e4/b9/42e4b960a9019cd24b6f7d704220d5e0.js"
        strategy="afterInteractive"
      />


      {/* Native Banner */}
      <Script
        async
        data-cfasync="false"
        src="https://lightlyenergeticevolution.com/4e4fb4b34886bd0b9ccefd8663bd8cf5/invoke.js"
        strategy="afterInteractive"
      />

      <div id="container-4e4fb4b34886bd0b9ccefd8663bd8cf5"></div>


      {/* Smartlink */}
      <a
        href="https://lightlyenergeticevolution.com/ywa9xt5j5?key=13ceed1f3955e0f23cf447a0e0e64f5f"
        target="_blank"
      >
        Smartlink
      </a>


      {/* 468x60 */}
      <AdBlock
        keyId="262b4c103fcd51fa540fe9de0a149940"
        width={468}
        height={60}
      />


      {/* 300x250 */}
      <AdBlock
        keyId="76141def117058a2ee6c4eb90b211812"
        width={300}
        height={250}
      />


      {/* 160x600 */}
      <AdBlock
        keyId="cff874454a9cb0638cfd626004c56b85"
        width={160}
        height={600}
      />


      {/* 160x300 */}
      <AdBlock
        keyId="82a7c7c3d11cded985ea1adaa105f226"
        width={160}
        height={300}
      />


      {/* 320x50 */}
      <AdBlock
        keyId="c2fbff91e24d85454c1fc5fd739bcd86"
        width={320}
        height={50}
      />


      {/* 728x90 */}
      <AdBlock
        keyId="9a8f7e7cda176cfd31394e27113dea5b"
        width={728}
        height={90}
      />


    </div>
  );
}



function AdBlock({
  keyId,
  width,
  height,
}: {
  keyId:string;
  width:number;
  height:number;
}) {

return (

<div style={{
  margin:"20px auto",
  textAlign:"center"
}}>


<Script
id={keyId}
strategy="afterInteractive"
dangerouslySetInnerHTML={{
__html:`

atOptions = {
'key' : '${keyId}',
'format' : 'iframe',
'height' : ${height},
'width' : ${width},
'params' : {}
};

`
}}
/>


<Script
strategy="afterInteractive"
src={`https://lightlyenergeticevolution.com/${keyId}/invoke.js`}
/>


</div>

)

}
