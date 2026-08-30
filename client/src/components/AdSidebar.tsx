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
    import { useEffect, useRef } from "react";

export default function AdSidebar(){

  const ref = useRef<HTMLDivElement>(null);

  useEffect(()=>{

    if(!ref.current) return;

    const s=document.createElement("script");

    s.src =
    "https://lightlyenergeticevolution.com/9a8f7e7cda176cfd31394e27113dea5b/invoke.js";

    s.async=true;

    ref.current.appendChild(s);


    return ()=>{
      if(ref.current){
        ref.current.innerHTML="";
      }
    };

  },[]);


  return (
    <div
      ref={ref}
      style={{
        width:"120px",
        minHeight:"600px",
        overflow:"hidden"
      }}
    />
  );

}
  );

}
