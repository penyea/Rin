import { useEffect, useRef } from "react";

export default function AdSidebar() {

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {

    if (!ref.current) return;

    const s = document.createElement("script");

    s.src =
      "https://lightlyenergeticevolution.com/9a8f7e7cda176cfd31394e27113dea5b/invoke.js";

    s.async = true;

    ref.current.appendChild(s);


  }, []);


  return (
    <div
      ref={ref}
      style={{
        width:"120px",
        height:"600px",
        overflow:"hidden"
      }}
    />
  );
}
