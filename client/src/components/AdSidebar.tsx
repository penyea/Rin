import { useEffect } from "react";

export default function AdSidebar(){

  useEffect(()=>{

    const container = document.getElementById("adsterra-sidebar");

    if (!container) return;


    const s = document.createElement("script");

    s.src =
      "https://lightlyenergeticevolution.com/9a8f7e7cda176cfd31394e27113dea5b/invoke.js";

    s.async = true;


    container.appendChild(s);


    return ()=>{
      container.removeChild(s);
    };


  },[]);


  return (
    <div
      id="adsterra-sidebar"
      style={{
        width:"160px",
        height:"600px",
      }}
    />
  );

}
