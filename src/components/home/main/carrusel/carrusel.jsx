import { useState, useEffect } from 'react';
import './carrusel.css';
const Carrusel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
        {
            img: '/img/clase.jpg',
            frase: 'frase 1'
        },{
            img: '/img/aulas.jpg',
            frase: 'frase 2'
        },{
            img: '/img/chava.jpg',
            frase: 'frase 3'
        },{
            img: '/img/campus1.jpg',
            frase: 'frase 4'
        },{
            img: '/img/campus2.jpg',
            frase: 'frase 5'
        },{
            img: '/img/campus3.jpg',
            frase: 'frase 6'
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
        <div className="containerCarrusel" style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${images[currentIndex].img})`
    }}>
        <h2>{images[currentIndex].frase}</h2>
        <i className="fa-solid fa-angles-left left" onClick={goToPrevious}></i>
        <i className="fa-solid fa-angles-right next" onClick={goToNext}></i>
    </div>
);
}

export default Carrusel;