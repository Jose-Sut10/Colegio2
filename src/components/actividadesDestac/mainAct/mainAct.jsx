import './mainAct.css';
import Carrusel from '../../home/main/carrusel/carrusel';

const MainAct = ({datosActiv})=>{
    return <main className="contenidoAct">
        <Carrusel/>
        <section className="containerAct">
            <ul className="listaAct">
                {datosActiv.map((item,index)=>(
                    <li key={index} className='itemAct'>
                        <div className='imgFondo' style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${item.img})`}}> </div>
                        <div className="informacionItem">
                            <h2>{item.title}</h2>
                            <p>{item.descripcion}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    </main>
}

export default MainAct;