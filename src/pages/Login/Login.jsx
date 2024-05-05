import { useRef, useState } from "react";
import { Navigate } from "react-router-dom";
import "./../../assets/stylesheets/Login-signUp.scss";
import { toast } from "react-hot-toast";


function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [login, setLogin] = useState(false);
  const checkRef = useRef();

  const handleChange = (e) => {
    setUsername(e.target.value);
  }
  const handleChangePwd = (e) => {
    setPassword(e.target.value);
  }

  const realUsername = "Fanasina";
  const realPassword = "Merveilleux";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === realUsername) {
      if (password === realPassword) {
        localStorage.setItem('logged', true)
        setLogin(true)
        toast.success("Vous êtes connecté avec succès !")
      } else {
        setLogin(false);
        toast.error('Veuillez réessayer à nouveau.')
      }
    } else {
      toast.error('Veuillez réessayer à nouveau.')
    }
  }

  const handleShow = () => {
    let input = checkRef.current;
    input.type == "text" ? input.type = "password" : input.type = "text";
  }

  return (
    <div className="form-container">
      {login && <Navigate to={"/biens"} />}
      <form className="parent" id="login-form" action="" onSubmit={handleSubmit}>
        <h1 className="mobile-indicator">Connexion</h1>
        <label htmlFor="username">Nom d&apos;utilisateur :</label>
        <input type="text" id="username" name="username" value={username} onChange={handleChange} placeholder="ex : kenlebg@ego.fr" />
        <label htmlFor="pass">Mot de passe :</label>
        <input type="password" ref={checkRef} id='pass' name="password" value={password} onChange={handleChangePwd} placeholder="Entrez votre mot de passe..." />
        <div className="check show">
          <input type="checkbox" id="show" onChange={handleShow} />
          <label htmlFor="show" className="checkbox">Afficher mot de passe</label>
        </div>
        <button>Se connecter</button>
      </form>
    </div>
  );
}

export default Login;
