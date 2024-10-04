import Carreras from "./carreras/carreras";
import Carrusel from "./carrusel/carrusel";
import './main.css'
import MisionVision from "./misionVision/info";

const Main = ({carreras})=>{
    return <main className="contenido">
        <Carrusel/>
        <section className="container">
            <Carreras carreras={carreras}/>
            <MisionVision/>
        </section>
    </main>
}

export default Main;