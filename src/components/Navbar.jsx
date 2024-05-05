import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './../assets/stylesheets/navbar.scss';
import Caddy from "./Caddy";

function Navbar({ text = "Se connecter", link = "/connexion" }) {
  const [logged, setLogged] = useState(false)

  useEffect(() => {
    if (localStorage.getItem('logged') == true) {
      setLogged(true)
    } else {
      setLogged(false);
    }
  }, [logged])

  return (
    <>
      <header>
        <div className="wrapper">
          <Link className="logo-container" to={"/"}>
            <div className="logo"></div>
          </Link>
          <nav>
            <Link to={"/"}>
              <div className="text">
                Acceuil
              </div>
              <span></span>
            </Link>
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
            <Link to={"/a-propos"}>
              <div className="text">
                À propos
              </div>
              <span></span>
            </Link>
          </nav>


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
          <BurgerMenu MobileMenu={<MobileMenu />} />
        </div>
      </header>
      <MobileMenu />
    </>
  );
}
function MobileMenu({ cssClass = "mobile-menu" }) {
  return (
    <div className={cssClass}>
      <Link to="/vente-live" className="link">Ventes en live</Link>
      <Link to="/biens" className="link">Mes biens</Link>
      <Link to="/a-propos" className="link">À propos</Link>
    </div>
  )
}

function BurgerMenu() {

  const [burgerClass, setClassName] = useState('hamburger-menu');

  const handleBurger = () => {
    const MobileMenu = document.querySelector('.mobile-menu');
    const Css = MobileMenu.classList;
    Css.contains('show') ? Css.remove('show') : Css.add('show');
    burgerClass == "hamburger-menu" ? setClassName('hamburger-menu clicked') : setClassName('hamburger-menu');
  }

  return (
    <div className={burgerClass} onClick={handleBurger}>
      <div className="top bar"></div>
      <div className="middle bar"></div>
      <div className="bottom bar"></div>
    </div>
  )
}
export default Navbar;