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
                <div className="carreraPerito">
                    <div>peritos</div>
                    <ul className="listaCarreras">
                        {carrerasPerito.map((carrera, index) => (
                        <li key={index}>{carrera.name}</li>))}
                    </ul>
                </div>
                <div className="carreraBachi">
                    <div>bachilleres</div>
                    <ul className="listaCarreras">
                        {carrerasBachiller.map((carrera, index) => (
                        <li key={index}>{carrera.name}</li>))}
                    </ul>
                </div>
                <Ubicacion/>    
            </section>
        </main>
);
}

export default MainCarreras;