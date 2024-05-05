import { Navigate } from "react-router-dom";
import Navbar from "../../components/Navbar";

function Dashboard() {
  const logged = localStorage.getItem('logged');

  return (
    <div>
      {!logged && <Navigate to="/connexion"/>}
      <Navbar text="Se déconnecter" />
      <div className="main-content">
        Bienvenue, vous êtes connecté !
      </div>
    </div>
  );
}

export default Dashboard;