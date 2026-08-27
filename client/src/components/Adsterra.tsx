import { useEffect } from "react";
import Script from "next/script";


export default function Adsterra() {

  useEffect(() => {

    // 728x90 Banner
    const config = document.createElement("script");

    config.innerHTML = `
      atOptions = {
        'key' : '9a8f7e7cda176cfd31394e27113dea5b',
        'format' : 'iframe',
        'height' : 90,
        'width' : 728,
        'params' : {}
      };
    `;


    const script = document.createElement("script");

    script.src =
      "https://lightlyenergeticevolution.com/9a8f7e7cda176cfd31394e27113dea5b/invoke.js";

    script.async = true;


    const box = document.getElementById("adsterra-728");

    if (box && !box.dataset.loaded) {

      box.dataset.loaded = "true";

      box.appendChild(config);
      box.appendChild(script);

    }


  }, []);



  return (

    <>

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


      <div id="container-4e4fb4b34886bd0b9ccefd8663bd8cf5" />


      {/* Smartlink */}
      <script
        src="https://lightlyenergeticevolution.com/d1/08/24/d10824bd20ef357a3a144c8b777e05a1.js"
      />


      {/* 728x90 Banner */}
      <div
        id="adsterra-728"
        style={{
          width:"728px",
          height:"90px",
          margin:"20px auto",
          textAlign:"center"
        }}
      />


    </>

  );

}
