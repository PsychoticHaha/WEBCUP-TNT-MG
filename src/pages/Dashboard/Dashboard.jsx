import { Navigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import './../../assets/stylesheets/Dashboard.scss'
import ConnectedState from "../../components/ConnectedState";
import useLS from "../../hooks/useLS";

function Dashboard() {
  const logged=useLS('logged', false);

  return (
    <div>
      {!logged && <Navigate to="/connexion" />}
      <Navbar text="Se déconnecter" />
      <div className="main-content">
        <ConnectedState />
      </div>
    </div>
  );
}

export default Dashboard;