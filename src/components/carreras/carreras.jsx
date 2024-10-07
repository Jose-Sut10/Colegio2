import Footer from '../home/footer/footer';
import Header from '../home/header/header';
import Menu from '../home/main/menu/menu';
import Modal from '../home/main/menu/modal';
import MainCarreras from './infoCarreras/mainCarreras';

const CarrerasDisponibles = ()=>{

    const datosCarreras = [
            {name: 'Perito Contador' },{name: 'Perito en Administración' },
            {name: 'Perito en Electrónica y Dispositivos Digitales' },
            {name: 'Bachiller en Desarrollo Web' },{name: 'Bachiller en Diseño Gráfico' }];
    
    return <div className="App">
        <Modal/>
        <Menu/>
        <Header/>
        <MainCarreras datosCarreras={datosCarreras}/>
        <Footer/>
    </div>
}

export default CarrerasDisponibles;