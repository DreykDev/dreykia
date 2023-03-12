import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

import '../style/ButtonLog.css'


export const ButtonLogOut = () => {
  const { logout } = useAuth0();

  return (
    <button className="button" onClick={() => logout({ returnTo: window.location.origin })}>
      Logout
    </button>
  );
};



