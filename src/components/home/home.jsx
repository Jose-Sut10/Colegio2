import Footer from "./footer/footer";
import Header from "./header/header";
import Main from "./main/main";
import Menu from "./main/menu/menu";
import Modal from "./main/menu/modal";

const Home = ()=>{
    const carreras = [
        { img: '/img/preinscripcion.jpg', title: 'Preinscribete' },
        { img: '/img/contador.jpg', title: 'Perito Contador' },
        { img: '/img/electronica.jpg', title: 'Perito en Electrónica y Dispositivos Digitales' },
        { img: '/img/admon.jpg', title: 'Perito en Administración' },
        { img: '/img/web.jpg', title: 'Bachiller en Desarrollo Web' },
        { img: '/img/diseño.jpg', title: 'Bachiller en Diseño Gráfico' }
    ];

    return <div className="App">
            <Modal/>
            <Menu/>
            <Header/>
            <Main carreras={carreras}/>
            <Footer/>
        </div>
}

export default Home;