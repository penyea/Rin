import { useEffect } from "react";


export default function Adsterra() {

    useEffect(() => {


        // Popunder
        const pop = document.createElement("script");
        pop.src =
            "https://lightlyenergeticevolution.com/42/e4/b9/42e4b960a9019cd24b6f7d704220d5e0.js";
        document.body.appendChild(pop);



        // Native Banner
        const native = document.createElement("script");
        native.async = true;
        native.dataset.cfasync = "false";
        native.src =
            "https://lightlyenergeticevolution.com/4e4fb4b34886bd0b9ccefd8663bd8cf5/invoke.js";

        const nativeBox = document.getElementById(
            "container-4e4fb4b34886bd0b9ccefd8663bd8cf5"
        );

        if (nativeBox) {
            nativeBox.appendChild(native);
        }



        // Smartlink
        const smart = document.createElement("script");
        smart.src =
            "https://lightlyenergeticevolution.com/d1/08/24/d10824bd20ef357a3a144c8b777e05a1.js";

        document.body.appendChild(smart);



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


        const banner = document.createElement("script");

        banner.src =
            "https://lightlyenergeticevolution.com/9a8f7e7cda176cfd31394e27113dea5b/invoke.js";


        const box = document.getElementById("adsterra-728");


        if (box) {
            box.appendChild(config);
            box.appendChild(banner);
        }



    }, []);



    return (

        <>

            <div id="container-4e4fb4b34886bd0b9ccefd8663bd8cf5"></div>


            <div
                id="adsterra-728"
                style={{
                    width:"728px",
                    height:"90px",
                    margin:"20px auto"
                }}
            />

        </>

    );
}
