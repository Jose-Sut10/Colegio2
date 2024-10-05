const FormularioPagos = ({datos, datosTarjeta})=>{
    return <div className="container mt-5">
    
    <div className="row">
        <div className="col-md-6">
            <form className="formularioPagos">
                <h2>Rellena los datos de pago</h2>

                {datos.map((dato,index)=>(
                    <div className="datosInput">
                        <label>{dato.title}</label>
                        <input type={dato.tipo} id={dato.id} className="form-control"/>
                    </div>
                ))}
                <a href="https">Pagar mi U</a>
            </form>
        </div>

            <div className="col-md-6 d-flex justify-content-center align-items-center">
                <div className="card-container">
                    <div className="card" id="card">
                        <div className="front">
                            <div className="card-logo">
                                <img src="/img/visa.png" alt="" width="60"/>
                            </div>
                            {datosTarjeta.map((datoTarjeta,index)=>(
                                <div className={datoTarjeta.clase}> {datoTarjeta.title}</div>
                            ))}
                        </div>

                        <div className="back">
                            <div className="magnetic-strip"></div>
                            <div className="cvc">CVC</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default FormularioPagos;