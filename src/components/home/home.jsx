import Header from "./header/header";
import Menu from "./main/menu/menu";
import Modal from "./main/menu/modal";

const Home = ()=>{
    return <div className="App">
            <Modal/>
            <Menu/>
            <Header/>
        </div>
}

export default Home;