import Formulario from "../formulario/formulario";
import './main.css';

const Main = ()=>{

    const datos = [
        {title: 'Ingresa tu nombre:', tipo: 'text'},
        {title: 'Ingresa tus apellidos:', tipo: 'text'},
        {title: 'Ingresa tu correo:', tipo: 'email'},
        {title: 'Ingresa tu dirección:', tipo: 'text'},
        {title: 'Ingresa tu fecha de nacimiento:', tipo: 'date'},
        {title: 'Elige tu carrera:', tipo: 'select', 
            opciones: ['Bachillerato en Diseño Web', 'Perito en Electrónica y Dispositivos Digitales',
            'Perito en Administración', 'Bachiller en Diseño Gráfico', 'Perito Contador']}
        ];

    return <main className="contenido">
        <section className="containerContenido">
            <Formulario datos={datos}/>
        </section>
    </main>
}

export default Main;