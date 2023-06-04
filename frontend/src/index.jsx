import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";




ReactDOM.render(
  <BrowserRouter>
    <Auth0Provider
      domain="blissyogalife.us.auth0.com"
      clientId="bSoUxC4N5Gk9OddHkzurXK2yevFvEO85"
      authorizationParams={{
        redirect_uri: window.location.origin + "/mainpage" 
      }}
    >
      <App />
    </Auth0Provider>
  </BrowserRouter>,
  document.getElementById("root")
);