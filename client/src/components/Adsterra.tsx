import { useEffect } from "react";

export default function Adsterra() {
  useEffect(() => {
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


    return () => {
      document.body.removeChild(script);
      document.body.removeChild(invoke);
    };

  }, []);


  return (
    <div
      style={{
        width:"728px",
        height:"90px",
        margin:"20px auto",
      }}
    />
  );
}
