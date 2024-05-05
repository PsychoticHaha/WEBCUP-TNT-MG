import { Navigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import './../../assets/stylesheets/Dashboard.scss'
import { useState } from "react";

function Dashboard() {
  const [logged, setLogged] = useState(true)
  return (
    <div>
      {!logged && <Navigate to="/connexion" />}
      <Navbar text="Se déconnecter" />
      <div className="main-content">
        {/* <DigitalPad/> */}
      </div>
    </div>
  );
}

export default Dashboard;