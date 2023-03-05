import dydJpeg from '../images/dk.jpeg';
import '../style/main.css';
import { Profile } from './Profile';

const Main = () => {
  return (
    <div className="main">
      <header className="main-content">
        <h1>
          dreyk
        </h1>
        <div className='main_images'>
          <img src={dydJpeg} className="dydJpeg" alt="logo" />
        </div>
      </header>
      <Profile/>
    </div>
  );
}

export default Main