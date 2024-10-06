import { useState, useEffect } from 'react';
import './carrusel.css';
const Carrusel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
    '/img/clase.jpg',
    '/img/aulas.jpg',
    '/img/chava.jpg',
    '/img/campus1.jpg',
    '/img/campus2.jpg',
    '/img/campus3.jpg'
];

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
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${images[currentIndex]})`
    }}>
        <i class="fa-solid fa-angles-left left" onClick={goToPrevious}></i>
        <i class="fa-solid fa-angles-right next" onClick={goToNext}></i>
    </div>
);
}

export default Carrusel;