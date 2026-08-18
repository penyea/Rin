import { useEffect } from "react";

import { AppProviders } from "./app/providers";
import { AppRoutes } from "./app/routes";
import { useAppBootstrap } from "./app/use-app-bootstrap";


function Adcash(){

  useEffect(()=>{


    if(document.getElementById("aclib-script")){
      return;
    }


    const script = document.createElement("script");


    script.id = "aclib-script";


    script.src =
      "https://acscdn.com/script/aclib.js";


    script.async = true;


    script.onload = ()=>{


      try{


        if(
          window.aclib &&
          typeof window.aclib.runAutoTag === "function"
        ){


          window.aclib.runAutoTag({

            zoneId:"ydqubl9osj"

          });


          console.log(
            "Adcash initialized"
          );


        }


      }catch(error){


        console.log(
          "Adcash error:",
          error
        );


      }


    };


    document.head.appendChild(script);



  },[]);



  return null;

}



function App() {


  const { config, profile } = useAppBootstrap();



  return (

    <>

      <Adcash />


      <AppProviders 
        config={config} 
        profile={profile}
      >

        <AppRoutes />

      </AppProviders>


    </>

  )

}


export default App;
