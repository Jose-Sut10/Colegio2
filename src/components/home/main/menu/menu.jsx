import React, { useEffect } from 'react';
import "./menu.css";

const Menu = () => {

    useEffect(() => {
        const iconoClose = document.querySelector('[data-closeicon]');
        const modalActive = document.querySelector('[data-modaldesplegable]');

        const toggleMenu = () => {
            document.querySelector('[data-menudesplegable]').classList.toggle('activate');
            modalActive.classList.toggle('modalActive');
        };
        iconoClose.addEventListener('click', toggleMenu);

        return () => {
            iconoClose.removeEventListener('click', toggleMenu);
        };
    }, []);

    return (
        <section className="menu" data-menudesplegable>
            <div className="menu__container">
                <div className="menuIcono">
                    <i className="fa-solid fa-xmark" data-closeicon></i>
                </div>

                <ul className="listaNav">
                    <li>
                        <i className="fa-regular fa-square-plus"></i>
                        <a href='/'>Inicio</a>
                    </li>
                    <li>
                        <i className="fa-regular fa-square-plus"></i>
                        <a href='https'>Acerca de</a>
                    </li>
                    <li>
                        <i className="fa-regular fa-square-plus"></i>
                        <a href='/carreras'>Carreras</a>
                    </li>
                    <li>
                        <i className="fa-regular fa-square-plus"></i>
                        <a href='/actividades'>Actividades</a>
                    </li>
                    <li>
                        <i className="fa-regular fa-square-plus"></i>
                        <a href='/preinscripcion'>Inscripciones</a>
                    </li>
                    <li>
                        <i className="fa-regular fa-square-plus"></i>
                        <a href='/devs'>Equipo de desarrollo</a>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default Menu;