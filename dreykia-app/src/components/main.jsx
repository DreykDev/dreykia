import dydJpeg from '../images/dk.jpeg';
import '../style/main.css';

const Main = () => {
  return (
    <div className="main">
      <div className="main-content">
        <h1>
          Dreykia
        </h1>
        <div className='main_images'>
          <img src={dydJpeg} className="dydJpeg" alt="logo" />
        </div>
        <p className='intro-text'>
        Dreyk es una aplicación diseñada para hacer nuestra vida más fácil y segura. Con habilidades que se adaptan a las necesidades de la familia, Dreyk puede enviar alertas y notificaciones cuando alguien llega a casa o al trabajo, o incluso cuando alguien sale de una zona segura. Pero eso es solo el comienzo: con el tiempo, Dreyk aprenderá tus patrones y preferencias, y podrá hacer recomendaciones personalizadas para mejorar el día a día. Además, estoy trabajando en la integración de tecnologías avanzadas de inteligencia artificial para hacer que Dreyk sea aún más útil y poderoso en el futuro. En resumen, Dreyk es nuestro asistente personal para el hogar y la familia, y estoy emocionados de que lo pueda llegar a ser.
        </p>
      </div>
    </div>
  );
}

export default Main