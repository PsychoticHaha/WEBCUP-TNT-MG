import { useState } from "react";
import useLS from "../hooks/useLS";

function ConnectedState() {
  const [logged, setLogged] = useState(true)

  useLS('logged', false);

  const handleLogout = () => {
    setLogged(false)
    localStorage.setItem('logged', false);
  }

  return (
    <div className="top-container">
      <div className="left">
        Vous êtes connecté(e) !
      </div>
      <div className="right" onClick={handleLogout}>
        <a href={"/connexion"}> Se déconnecter </a>
      </div>
    </div>
  );
}

export default ConnectedState;