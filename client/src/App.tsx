import Adcash from "./components/Adcash";


function App() {

const { config, profile } = useAppBootstrap();


return (

<>

<Adcash />

<AppProviders config={config} profile={profile}>

<AppRoutes />

</AppProviders>


</>

)

}
