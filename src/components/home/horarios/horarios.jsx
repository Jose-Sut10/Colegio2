import React, { useEffect } from 'react';
import './horarios.css';

const Horarios = () => {

  useEffect(() => {
    // Selecciona todos los elementos que tengan la clase 'fade-in-section'
    const faders = document.querySelectorAll('.fade-in-section');

    // Opciones para el IntersectionObserver:
    const appearOptions = {
      // El threshold (umbral) es del 10%, lo que significa que el efecto se activará cuando el 10% del elemento esté visible
      threshold: 0.1,
      // Agrega un margen inferior de -50px para activar el efecto justo antes de que el elemento sea completamente visible
      rootMargin: '0px 0px -50px 0px'
    };

    // Define el IntersectionObserver, que observará cuando los elementos seleccionados entren en la vista del usuario
    const appearOnScroll = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        // Si el elemento no está intersectando (visible en el viewport), simplemente se salta al siguiente
        if (!entry.isIntersecting) {
          return;
        } else {
          // Si está visible, añade la clase 'visible' al elemento para activar el efecto CSS
          entry.target.classList.add('visible');
          // Deja de observar este elemento para que la animación solo ocurra una vez
          observer.unobserve(entry.target);
        }
      });
    }, appearOptions);

    // Aplica el observador a cada uno de los elementos que tienen la clase 'fade-in-section'
    faders.forEach(fader => {
      appearOnScroll.observe(fader);
    });

    // Cleanup function to unobserve all elements when the component unmounts
    return () => {
      faders.forEach(fader => {
        appearOnScroll.unobserve(fader);
      });
    };
  }, []);

  return (
    <section className="fade-in-section">
      <div className="container marketing">
        <div className="row">
          <div className="col-lg-4">
            <img className="imgHorario" src="/img/fr/news-paper-svgrepo-com.svg" alt="News Paper Icon"/>
            <h2>Evaluación de Adminición</h2>
            <p>Lunes a viernes 7:00 a 14:00 horas</p>
            <p><a className="btn btn-secondary" href="FormExam.html" role="button">Pagar »</a></p>
          </div>
          <div className="col-lg-4">
            <img className="imgHorario" src="/img/fr/cash-svgrepo-com.svg" alt="Cash Icon"/>
            <h2>Primer ingreso</h2>
            <p>Pagar Inscripción</p>
            <p><a className="btn btn-secondary" href="/pagos" role="button">Pagar »</a></p>
          </div>
          <div className="col-lg-4">
            <img className="imgHorario" src="/img/fr/cash-svgrepo-com.svg" alt="Cash Icon"/>
            <h2>Reingreso</h2>
            <p>Pagar reingreso</p>
            <p><a className="btn btn-secondary" href="FormReInsc.html" role="button">Pagar »</a></p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Horarios;
