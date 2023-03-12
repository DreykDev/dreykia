import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

import '../style/ButtonLog.css'

export const ButtonLogIn = () => {
  const { loginWithRedirect } = useAuth0();

  return <button className="button" onClick={() => loginWithRedirect({
    authorizationParams: {
    redirect_uri: window.location.origin},
  })}>Login</button>;
};