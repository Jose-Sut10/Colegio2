import Footer from "../home/footer/footer";
import Header from "../home/header/header";
import Menu from "../home/main/menu/menu";
import Modal from "../home/main/menu/modal";
import MainDevs from "./mainDesarrolladores/mainDesarrollo";
const Devs = ()=>{

    const datosDevs = [
        {
            img: '/img/angelica.jpg',
            name : "Angelica Lucia Samayoa Perez",
            puesto: 'Diseñadora UI/UX',
            color: '219, 110, 191',
            redes: [{
                ig: '',
                fb: 'https://www.facebook.com/angelica.samayoa.77?mibextid=ZbWKwL',
                wsp: 'https://wa.me/50242903315?text=Hola!, quisiera saber más información acerca de usted y su trabajo.'
            }],
            recorrido: [
                {title: 'fa-solid fa-laptop-code', cantidad: '40'},
                {title: "fa-solid fa-user-plus", cantidad: '500'},
                {title: 'fa-regular fa-comments', cantidad: '99'} 
            ],
            colorVista: '#efb2e2'
        },
        {
            img: '/img/jose.jpg',
            name: "José Domingo Sut Salvador",
            puesto: 'Desarrollador Front End',
            color: '87, 194, 120',
            redes: [{
                ig: '',
                fb: 'https://www.facebook.com/jos.sut10?mibextid=kFxxJD',
                wsp: 'https://wa.me/50257408182?text=Hola!, quisiera saber más información acerca de usted y su trabajo.'
            }],
            recorrido: [
                {title: 'fa-solid fa-laptop-code', cantidad: '40'},
                {title: "fa-solid fa-user-plus", cantidad: '500'},
                {title: 'fa-regular fa-comments', cantidad: '99'} 
            ],
            colorVista: '#aee5bf'
        },
        {
            img: '/img/fredy.jpg',
            name: 'Fredy Romero Martínez Felipe',
            puesto: 'Desarrollador Back End',
            color: '130, 207, 250',
            redes: [{
                ig: '',
                fb: '',
                wsp: 'https://wa.me/50241106991?text=Hola!, quisiera saber más información acerca de usted y su trabajo.'
            }],
            recorrido: [
                {title: 'fa-solid fa-laptop-code', cantidad: '40'},
                {title: "fa-solid fa-user-plus", cantidad: '500'},
                {title: 'fa-regular fa-comments', cantidad: '99'} 
            ],
            colorVista: '#c3e8ff'
        },
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