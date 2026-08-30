import { useEffect } from "react";

export default function Adsterra() {

  useEffect(() => {

    const loadAd = () => {

      const script = document.createElement("script");

      script.innerHTML = `
        atOptions = {
          'key' : '9a8f7e7cda176cfd31394e27113dea5b',
          'format' : 'iframe',
          'height' : 90,
          'width' : 728,
          'params' : {}
        };
      `;

      document.body.appendChild(script);


      const invoke = document.createElement("script");

      invoke.src =
      "https://lightlyenergeticevolution.com/9a8f7e7cda176cfd31394e27113dea5b/invoke.js";

      invoke.async = true;

      document.body.appendChild(invoke);

    };


    loadAd();


  }, []);


  return (

    <>

      {/* 左侧广告 */}

      <div
        id="adsterra-left"
        style={{
          position:"fixed",
          left:"0",
          top:"120px",
          width:"728px",
          height:"90px",
          zIndex:99999,
          transform:"rotate(-90deg)",
          transformOrigin:"left top"
        }}
      />


      {/* 右侧广告 */}

      <div
        id="adsterra-right"
        style={{
          position:"fixed",
          right:"0",
          top:"120px",
          width:"728px",
          height:"90px",
          zIndex:99999,
          transform:"rotate(90deg)",
          transformOrigin:"right top"
        }}
      />


    </>

  );

}
