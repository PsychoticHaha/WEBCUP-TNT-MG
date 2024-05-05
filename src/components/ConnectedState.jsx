import useLS from "../hooks/useLS";

function ConnectedState() {

  useLS('logged', false);
  
  const handleLogout = () => {
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