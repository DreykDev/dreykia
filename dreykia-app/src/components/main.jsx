import logo from '../images/logo.svg';
import '../style/App.css';
import { Profile } from './Profile';

const Main = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          **{process.env.REACT_APP_DOMAIN}**
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Profile/>
    </div>
  );
}

export default Main