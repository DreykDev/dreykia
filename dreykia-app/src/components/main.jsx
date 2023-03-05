import logo from '../images/logo.svg';
import dydJpeg from '../images/dk.jpeg'
import '../style/main.css';
import { Profile } from '../pages/Profile';

const Main = () => {
  return (
    <div className="main">
      <div className="main-content">
        <h1>
          Dreyk
        </h1>
        <div className='main_images'>
          <img src={dydJpeg} className="dydJpeg" alt='logo_image_dreykdev' />
          <img src={logo} className="App-logo" alt="logo" />
        </div>
      </div>
      <Profile/>
    </div>
  );
}

export default Main