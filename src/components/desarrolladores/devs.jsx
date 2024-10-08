import Footer from "../home/footer/footer";
import Header from "../home/header/header";
import Menu from "../home/main/menu/menu";
import Modal from "../home/main/menu/modal";
import MainDevs from "./mainDesarrolladores/mainDesarrollo";
const Devs = ()=>{

    const datosDevs = [
        {
            img: '/img/jose.jpg',
            name: 'José Domingo Sut Salvador',
            puesto: 'Desarrollador Front End',
            color: '87, 194, 120',
            redes: [{
                ig: '',
                fb: 'https://www.facebook.com/jos.sut10?mibextid=kFxxJD',
                wsp: '+50257408182'
            }],
            recorrido: [
                {title: 'fa-solid fa-laptop-code', cantidad: '40'},
                {title: "fa-solid fa-user-plus", cantidad: '500'},
                {title: 'fa-regular fa-comments', cantidad: '99'} 
            ],
            colorVista: '#aee5bf'
        },{
            img: '',
            name: 'Fredy Romero Martínez Felipe',
            puesto: 'Desarrollador Back End',
            color: '130, 207, 250',
            redes: [{
                ig: '',
                fb: '',
                wsp: '+50241106991'
            }],
            recorrido: [
                {title: 'fa-solid fa-laptop-code', cantidad: '40'},
                {title: "fa-solid fa-user-plus", cantidad: '500'},
                {title: 'fa-regular fa-comments', cantidad: '99'} 
            ],
            colorVista: '#c3e8ff'
        },
        {
            img: '/img/angelica.jpg',
            name : "Angelica Lucia Samayoa Perez",
            puesto: 'Diseñadora UI/UX',
            color: '219, 110, 191',
            redes: [{
                ig: '',
                fb: 'https://www.facebook.com/angelica.samayoa.77?mibextid=ZbWKwL',
                wsp: '+50242903315'
            }],
            recorrido: [
                {title: 'fa-solid fa-laptop-code', cantidad: '40'},
                {title: "fa-solid fa-user-plus", cantidad: '500'},
                {title: 'fa-regular fa-comments', cantidad: '99'} 
            ],
            colorVista: '#efb2e2'
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