import Carreras from "./carreras/carreras";
import Carrusel from "./carrusel/carrusel";

const Main = ({carreras})=>{
    return <main className="contenido">
        <Carrusel/>
        <section className="container">
            <Carreras carreras={carreras}/>
        </section>
    </main>
}

export default Main;