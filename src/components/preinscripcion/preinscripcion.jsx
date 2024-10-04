import Footer from "../home/footer/footer";
import Header from "../home/header/header";
import Menu from "../home/main/menu/menu";
import Modal from "../home/main/menu/modal";
import Main from "./main/main";

const Preincripcion = ()=>{

    return <div className="App">
        <Modal/>
        <Menu/>
        <Header/>
        <Main/>
        <Footer/>
    </div>
}

export default Preincripcion;