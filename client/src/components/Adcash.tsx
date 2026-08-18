import { useEffect } from "react";


export default function Adcash(){

    useEffect(()=>{


        if(document.getElementById("aclib-script")){
            return;
        }


        const script=document.createElement("script");


        script.id="aclib-script";


        script.src=
        "https://acscdn.com/script/aclib.js";


        script.async=true;


        script.onload=()=>{


            try{


                if(
                    window.aclib &&
                    window.aclib.runAutoTag
                ){

                    window.aclib.runAutoTag({

                        zoneId:"ydqubl9osj"

                    });


                    console.log(
                    "Adcash initialized"
                    );

                }


            }catch(e){

                console.log(
                "Adcash error:",
                e
                );

            }


        };


        document.head.appendChild(script);



    },[]);



    return null;

}
