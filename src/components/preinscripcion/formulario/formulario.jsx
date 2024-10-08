import './formulario.css';

const Formulario = ({datos})=>{
    return <form className="formularioInscripcion">
    <h2>Rellena el formulario de preinscripción</h2>
    
    {datos.map((dato, index) => (
        <div key={index} className='datosInput'>
            <label>{dato.title}</label>
            {dato.tipo === 'select' ? (
                <select defaultValue="">
                    <option value="" disabled>Ingresa tu opción</option>
                    {dato.opciones.map((opcion, idx) => (
                        <option key={idx} value={opcion}>{opcion}</option>
                    ))}
                </select>
            ) : (<input type={dato.tipo} />)}
        </div>
    ))}
    <a href="/pagos"> Inscribirme</a>
</form>
}

export default Formulario;