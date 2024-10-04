import "./carreras.css";

const Carreras = ({carreras})=>{
    return (
        <div className="carreras">
            <h2>¿qué deseas estudiar?</h2>
            <ul className="listaCarreras">
            {carreras.map((carrera, index) =>(
                <li key={index} style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)) , url(${carrera.img})`}}>  
                    <a href='https'>{carrera.title}</a>
                </li>
            ))}
            </ul>
        </div>
    );
}

export default Carreras;