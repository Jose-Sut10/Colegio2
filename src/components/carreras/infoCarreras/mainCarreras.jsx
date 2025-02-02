import Carrusel from '../../home/main/carrusel/carrusel';
import Ubicacion from '../../home/main/ubicacion/ubicacion';
import './mainCarreras.css';

const MainCarreras = ({datosCarreras})=>{
    const carrerasPerito = datosCarreras.filter((carrera) => carrera.name.toLowerCase().startsWith('perito'));
    const carrerasBachiller = datosCarreras.filter((carrera) => carrera.name.toLowerCase().startsWith('bachiller'));

    return (
        <main className="carreras">
            <Carrusel/>
            <section className="containerCarreras">
                <div className="opcionesCarrera">
                    <div className="carreraPerito">
                        <div>peritos</div>
                        <ul className="carrerasDisp">
                            {carrerasPerito.map((carrera, index) => (
                            <li key={index}><a href='/img/pensum.pdf' target='_blank'>{carrera.name}</a></li>))}
                        </ul>
                    </div>
                    <div className="carreraBachi">
                        <div>bachilleres</div>
                        <ul className="carrerasDisp">
                            {carrerasBachiller.map((carrera, index) => (
                            <li key={index}><a href='/img/pensum.pdf' target='_blank'>{carrera.name}</a></li>))}
                        </ul>
                    </div>
                </div>
                <Ubicacion/>    
            </section>
        </main>
);
}

export default MainCarreras;