import Navbar from "../../components/Navbar";
import ConnectedState from "../../components/ConnectedState";
import './../../assets/stylesheets/VideoFanasina.scss'
import useLS from "../../hooks/useLS";

function Live() {

  document.title = "Vente en Live | KEN"
  const logged=useLS('logged', false);
  return (
    <>
      <Navbar />
      {logged && <ConnectedState />}
      <div className="video-container">
        <h3>
          <svg fill="#000000" height="20px" width="20px" version="1.1" viewBox="0 0 489.418 489.418"><g id="SVGRepo_bgCarrier"></g><g id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M244.709,389.496c18.736,0,34.332-14.355,35.91-33.026l24.359-290.927c1.418-16.873-4.303-33.553-15.756-46.011 C277.783,7.09,261.629,0,244.709,0s-33.074,7.09-44.514,19.532C188.74,31.99,183.022,48.67,184.44,65.543l24.359,290.927 C210.377,375.141,225.973,389.496,244.709,389.496z"></path> <path d="M244.709,410.908c-21.684,0-39.256,17.571-39.256,39.256c0,21.683,17.572,39.254,39.256,39.254 s39.256-17.571,39.256-39.254C283.965,428.479,266.393,410.908,244.709,410.908z"></path> </g> </g></svg>
          Désolé, pas de Vente en Live aujourd&apos;hui
        </h3>
        <video controls src=""></video>
      </div>
    </>
  );
}

export default Live;