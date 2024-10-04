import { useEffect } from "react";
import "./header.css";

const Header = ()=>{
    useEffect(()=>{
        const iconoMenu = document.querySelector('[data-iconomenu]');
        const modalActive = document.querySelector('[data-modaldesplegable]');

        const toggleMenu = () => {
            document.querySelector('[data-menudesplegable]').classList.toggle('activate');
            modalActive.classList.toggle('modalActive');
        };
        iconoMenu.addEventListener('click', toggleMenu);
        return ()=>{
            iconoMenu.removeEventListener('click',toggleMenu)
        }
    }, []);

    return <header className="encabezado">
        <section className="encabezadoContainer">
            <div className="navegacion">
                <i className="fa-solid fa-bars" data-iconomenu></i>
                <img src="/img/logo.png" alt="Logo Colegio"/>
                <i className="fa-solid fa-magnifying-glass"></i>
            </div>
        </section>
    </header>
}

export default Header;