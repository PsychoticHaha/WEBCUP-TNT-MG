import { Navigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import './../../assets/stylesheets/Dashboard.scss'
import { useState } from "react";

function Dashboard() {
  document.title = "Acceuil";
  const [logged, setLogged] = useState(true)
  return (
    <div>
      {!logged && <Navigate to="/connexion" />}
      <Navbar text="Se déconnecter" />
      <div className="main-content">
        <h1>Que deviendra ce site quand Ken aura vendu tous ses biens ?</h1>
      </div>
    </div>
  );
}

export default Dashboard;