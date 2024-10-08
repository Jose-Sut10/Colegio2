import './devs.css';

const MainDevs = ({datosDevs})=>{
    return <main className="mainDevs">
        <section className="containerDevs">
            <div className="descripcionDevs">
                <h2>¿quiénes somos?</h2>
                <p>Utilizando metodologías ágiles, nuestro equipo de desarrolladores full stack trabaja de manera 
                    colaborativa para entregar proyectos de alta calidad en tiempo y forma. Nuestra experiencia en 
                    todo el ciclo de desarrollo, desde el diseño hasta la implementación y el mantenimiento, nos 
                    permite garantizar la satisfacción de nuestros clientes.</p>
                
                <p>Nuestro equipo de desarrollo web full stack está compuesto por 3 profesionales con una 
                    experiencia promedio de 5 años. Dominamos tanto el front-end como el back-end, lo que 
                    nos permite crear soluciones web completas y personalizadas desde cero. Gracias a nuestra 
                    versatilidad, podemos abordar cualquier desafío tecnológico y ofrecer a nuestros clientes 
                    roductos digitales de alta calidad.</p>
            </div>


            <div className="equipoDevs">
                <h2>Conócenos</h2>
                <ul className="listaDevs">
                {datosDevs.map((dev,index)=>(
                    <li key={index} className="infoDev">
                        <div className="caja1" style={{ backgroundColor: `rgba(${dev.color})` }}>
                            <img src={dev.img} alt="" />
                        </div>
                        <div className="caja2">
                            <p className='devName'>{dev.name}</p>
                            <p className='devWork'>{dev.puesto}</p>
                        </div>
                    </li>
                ))}
                </ul>
            </div>
        </section>
    </main>
}

export default MainDevs;