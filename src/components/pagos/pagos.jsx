import Footer from '../home/footer/footer';
import Header from '../home/header/header';
import Menu from '../home/main/menu/menu';
import Modal from '../home/main/menu/modal';
import MainPagos from './main/mainPagos';

const Pagos = () =>{
    return <div className="App">
        <Modal/>
        <Menu/>
        <Header/>
        <MainPagos/>
        <Footer/>
    </div>
}

export default Pagos;