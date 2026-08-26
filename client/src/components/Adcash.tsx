import { useEffect } from "react";

declare global {
  interface Window {
    aclib: any;
  }
}

export default function Adcash() {
  useEffect(() => {
    const script = document.createElement("script");

    script.id = "aclib";
    script.type = "text/javascript";
    script.src = "//acscdn.com/script/aclib.js";

    script.onload = () => {
      if (window.aclib) {
        window.aclib.runAutoTag({
          zoneId: "tnw1yxrz9d",
        });
      }
    };

    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return null;
}
