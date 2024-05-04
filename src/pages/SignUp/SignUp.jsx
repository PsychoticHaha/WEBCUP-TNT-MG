import { useState } from "react";
import { Navigate } from "react-router-dom";

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
      alert("Les deux mots de passe ne corresponde pas");
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
    <div>
      {login && <Navigate to="/connexion" />}
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="mail" id="mail">Adresse E-mail</label>
        <input type="mail" name="mail" value={userMail} onChange={handleChangeMail} placeholder="Veuillez taper votre adresse E-mail" />
        <label htmlFor="password" id="password">Mot de passe</label>
        <input type="password" name="password" value={password} onChange={handleChangePwd} placeholder="Veuillez taper votre mot de passe" />
        <label htmlFor="password" id="passConfirm">Confirmation de mot de passe</label>
        <input type="password" name="passConfirm" value={confirmPassword} onChange={handleConfirmPassword} placeholder="Confirmer le mot de passe" />
      </form>
    </div>
  )
}

export default SignUp;