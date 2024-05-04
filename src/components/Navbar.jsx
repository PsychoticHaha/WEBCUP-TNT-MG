import { useState } from "react";
import { Link } from "react-router-dom";
import './../assets/stylesheets/navbar.scss';
import Caddy from "./Caddy";

function Navbar({ text = "S'identifier", link = "/connexion" }) {
  const [logged] = useState(localStorage.getItem('logged'));

  return (
    <header>
      <div className="wrapper">
        <nav>
          <Link to={"/vente-live"}>
            <div className="text">
              Ventes en live
            </div>
            <span></span>
          </Link>
          <Link to={"/biens"}>
            <div className="text">
              Mes biens
            </div>
            <span></span>
          </Link>
          <Link to={"/about"}>
            <div className="text">
              À propos
            </div>
            <span></span>
          </Link>
        </nav>
        <Link className="logo-container" to={"/"}>
          <div className="logo"></div>
        </Link>

        {/* IF LOGGED IN,  SHOW CADDY BUTTON */}
        {logged &&
          <div className="caddy-container">
            <Caddy />
          </div>
        }
        {/* IF NOT LOGGED IN,  SHOW LOGIN BUTTON */}
        {!logged &&
          <div className="login-btn">
            <Link to={link}>
              <div className="text login">{text}</div>
              <span className="login"></span>
            </Link>
          </div>
        }
      </div>
    </header>
  );
}

export default Navbar;