const Formulario = ({datos})=>{
    return <form className="formularioInscripcion">
        <h2>Rellena el formulario de preinscripcion</h2>
        
        {datos.map((dato, index)=>(
            <div key={index}>
                <label>{dato.title}</label>
                {dato.tipo === 'select' ? (
                    <select>
                    {dato.opciones.map((opcion, idx) => (
                    <option key={idx} value={opcion}>{opcion}</option>))}
                    </select>
                    ) : ( <input type={dato.tipo} />)}
            </div>
        ))}
    </form>
}

export default Formulario;