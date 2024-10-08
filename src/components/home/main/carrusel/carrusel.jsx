import { useState, useEffect } from 'react';
import './carrusel.css';

const Carrusel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
        {
            img: '/img/fr/1.jpg',
            frase1: 'Bienvenido',
            frase2: 'Descubre más de nuestras carreras'
        },{
            img: '/img/fr/2.jpg',
            frase1: 'Explora el futuro',
            frase2: 'Información y oportunidades a tu alcance'
        },{
            img: '/img/fr/3.jpg',
            frase1: 'Estrategias tecnológicas',
            frase2: 'Avanzamos hacia el futuro'
        }];

useEffect(() => {
    const intervalId = setInterval(() => {setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);}, 6000);

    return () => clearInterval(intervalId);}, [images.length]);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    return (
        <div className="containerCarrusel" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${images[currentIndex].img})`
    }}>
        <i className="fa-solid fa-angles-left left" onClick={goToPrevious}></i>
        <i className="fa-solid fa-angles-right next" onClick={goToNext}></i>
        <div className="dialogo">
            <h2>{images[currentIndex].frase1}</h2>
            <h3>{images[currentIndex].frase2}</h3>
            <a href="https">Mas información</a>
        </div>
    </div>
);
}

export default Carrusel;