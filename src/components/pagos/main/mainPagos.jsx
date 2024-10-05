import FormularioPagos from "../formulario/formularioPagos";

const MainPagos = ()=>{
    const datos = [
        {title: 'Número de tarjeta:', tipo: 'text', id: 'cardNumber'},
        {title: 'Nombre del titular:', tipo: 'text', id: 'cardName'},
        {title: 'Fecha de Expiración (MM/YY):', tipo: 'email', id:'expiryDate'},
        {title: 'CVC:', tipo: 'text', id: 'cvc'}
        ];

    return <main className="contenido">
        <section className="containerContenido">
            <FormularioPagos datos={datos}/>
        </section>
    </main>
}

export default MainPagos;