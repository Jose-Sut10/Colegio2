import Footer from "../home/footer/footer";
import Header from "../home/header/header";
import Menu from "../home/main/menu/menu";
import Modal from "../home/main/menu/modal";
import MainDevs from "./mainDesarrolladores/mainDesarrollo";

const Devs = ()=>{

    const datosDevs = [
        {
            img: '',
            name: 'José Domingo Sut Salvador',
            puesto: 'Desarrollador Front End',
            color: '130, 207, 250, 0.6'
        },{
            img: '',
            name: 'Fredy Romero Martínez Felipe',
            puesto: 'Desarrollador Back End',
            color: '87, 194, 120, 0.6'

        },
        {
            img: '/img/angelica.jpg',
            name : "Angelica Lucia Samayoa Perez",
            puesto: 'Diseñadora UI/UX',
            color: '219, 110, 191, 0.6'
        }
    ];

    return <div className="App">
        <Modal/>
        <Menu/>
        <Header/>
        <MainDevs datosDevs={datosDevs}/>
        <Footer/>
    </div>
}

export default Devs;