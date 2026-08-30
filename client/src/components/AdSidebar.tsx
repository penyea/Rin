import { useEffect, useRef } from "react";

export default function AdSidebar() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const script = document.createElement("script");

    script.src =
      "https://lightlyenergeticevolution.com/9a8f7e7cda176cfd31394e27113dea5b/invoke.js";

    script.async = true;

    ref.current.appendChild(script);

    return () => {
      if (ref.current) {
        ref.current.innerHTML = "";
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      style={{
        width: "120px",
        height: "600px",
      }}
    />
  );
}
