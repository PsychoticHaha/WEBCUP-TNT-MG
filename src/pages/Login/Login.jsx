import { useState } from "react";
import { Navigate } from "react-router-dom";
import "./../../assets/stylesheets/Login-signUp.scss";
import Navbar from "../../components/Navbar";

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [login, setLogin] = useState(false);

  const handleChange = (e) => {
    setUsername(e.target.value);
  }
  const handleChangePwd = (e) => {
    setPassword(e.target.value);
  }

  const realUsername = "Randy";
  const realPassword = "Mdp12345";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === realUsername) {
      if (password === realPassword) {
        setLogin(true)
      } else {
        setLogin(false);
      }
    }
  }
  return (
    <div>
      {login && <Navigate to={"/dashbord"} />}
      <Navbar />
      <form className="parent" id="login-form" action="" onSubmit={handleSubmit}>
        <label htmlFor="username">Nom :</label>
        <input type="text" name="username" value={username} onChange={handleChange} />
        <label htmlFor="pass">Mot de passe :</label>
        <input type="text" name="password" value={password} onChange={handleChangePwd} />
        <button>Se connecter</button>
      </form>
    </div>
  );
}

export default Login;

// JS TSOTRA
// const loginForm = document.getElementById('login-form');
// loginForm.addEventListener('submit', (e)=>{handleSubmit(e)})

// function handleSubmit(e) {
//   const usernameInput = document.querySelector('#username');
//   const usernameValue = usernameInput.value;
//   const passwordInput = document.querySelector('#password');
//   const passwordValue = passwordInput.value;
//   e.preventDefault();
//   if (username === realUsername) {
//     password === realPassword ? setLogin(true) : setLogin(false);
//   }

// }