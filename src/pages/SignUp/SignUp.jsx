import { useState } from "react";
import { Navigate } from "react-router-dom";
import "./../../assets/stylesheets/Login-signUp.scss";

function SignUp() {
  const [userMail, setUserMail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [login, setLogin] = useState(false);

  const handleChangeMail = (e) => {
    setUserMail(e.target.value);
  }
  const handleChangePwd = (e) => {
    setPassword(e.target.value);
  }

  const handleConfirmPassword = (e) => {
    if (password === confirmPassword) {
      setConfirmPassword(e.target.value);
    } else {
      alert("Les deux mots de passe ne correspondent pas");
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword && userMail) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  }

  return (
    <div className="form-container signup">
      {login && <Navigate to="/connexion" />}
      <form className="parent" action="" onSubmit={handleSubmit}>
        <label htmlFor="pseudo">Entrez votre pseudo</label>
        <input type="text" id="pseudo" placeholder="ex : KEN Le King" />
        <label htmlFor="mail">Adresse e-mail :</label>
        <input type="mail" id="mail" name="mail" value={userMail} onChange={handleChangeMail} placeholder="ex : ken.bg@ego.fr" />
        <label htmlFor="password">Mot de passe :</label>
        <input type="password" id="password" name="password" value={password} onChange={handleChangePwd} placeholder="Entrez mot de passe ..." />
        <label htmlFor="passConfirm">Confirmation de mot de passe :</label>
        <input type="password" id="passConfirm" name="passConfirm" value={confirmPassword} onChange={handleConfirmPassword} placeholder="Confirmez le mot de passe" />
        <button type="submit"> S&apos;inscrire</button>
      </form>
    </div>
  )
}

export default SignUp;