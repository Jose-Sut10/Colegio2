import FormularioPagos from "../formulario/formularioPagos";

const MainPagos = ()=>{
    const datos = [
        {title: 'Número de tarjeta:', tipo: 'text', id: 'cardNumber'},
        {title: 'Nombre del titular:', tipo: 'text', id: 'cardName'},
        {title: 'Fecha de Expiración (MM/YY):', tipo: 'email', id:'expiryDate'},
        {title: 'CVC:', tipo: 'text', id: 'cvc'}
        ];

    const datosTarjeta = [
        {title: '', clase: 'card-chip'},
        {title: '#### #### ####', clase: 'card-number'},
        {title: 'Nombre del Titular', clase: 'card-name'},
        {title: 'MM/YY', clase: 'card-expiry'}
    ];

    return <main className="contenido">
        <section className="containerContenido">
            <FormularioPagos datos={datos} datosTarjeta={datosTarjeta}/>
        </section>
    </main>
}

export default MainPagos;