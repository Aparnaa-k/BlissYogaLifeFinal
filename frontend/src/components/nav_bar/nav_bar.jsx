import React from "react";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { useAuth0 } from "@auth0/auth0-react";
import logo from "../../assets/logo.svg";
import LoginButton from "../login_btn/login_btn";
import "./nav_bar.css";

function Navbar() {
  const { logout  } = useAuth0();

  const isHomePage = location.pathname === "/";

  return (
    <nav className={`navbar`}>
      <div className="left">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <div className={`right ${isHomePage ? "" : ""}`}>
        {isHomePage ? (
          <LoginButton />
        ) : (
          <div className="nav2" >

            <div className="logout">
              <CgProfile
                fontSize={30}
                onClick={() => {
                  logout({
                    logoutParams: {
                      returnTo: window.location.origin,
                    },
                  });
                }}
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
