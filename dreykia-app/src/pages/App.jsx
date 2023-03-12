import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";


import NavBar from '../components/navBar.jsx'
import Body from './Body.jsx'
import LogIn from './LogIn.jsx'
import Profile from './Profile.jsx'

const App = () => {

  const { isAuthenticated } = useAuth0()

  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Body />}/>
          {isAuthenticated ? (
            <>
            <Route path="/" element={<Body />} />
            <Route path="/profile" element={<Profile />} />
            </>
          ) : (
            <Route path="/login" element={<LogIn/>}/>
          )}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;