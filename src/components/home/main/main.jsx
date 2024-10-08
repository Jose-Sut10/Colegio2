import Horarios from "../horarios/horarios";
import Carreras from "./carreras/carreras";
import Carrusel from "./carrusel/carrusel";
import './main.css'
import MisionVision from "./misionVision/info";
import Ubicacion from "./ubicacion/ubicacion";

const Main = ({carreras})=>{
    return <main className="contenido">
        <Carrusel/>
        <section className="container">
            <Horarios/>
            <Carreras carreras={carreras}/>
            <MisionVision/>
            <Ubicacion/>
        </section>
    </main>
}

export default Main;