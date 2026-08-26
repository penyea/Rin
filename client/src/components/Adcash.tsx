import { useEffect } from "react";

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
  }, []);

  return null;
}
