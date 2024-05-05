import { useState } from "react";
import { Navigate } from "react-router-dom";
import "./../../assets/stylesheets/Login-signUp.scss";
import { toast } from "react-hot-toast";

function SignUp() {
  const [userMail, setUserMail] = useState('');
  const [pseudo, setPseudo] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [login, setLogin] = useState(false);

  const handleChangeMail = (e) => {
    setUserMail(e.target.value);
  }
  const handlePseudo = (e) => {
    setPseudo(e.target.value);
  }
  const handleChangePwd = (e) => {
    setPassword(e.target.value);
  }

  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  }

  const handleSubmit = (e) => {
    console.log('submittt');
    e.preventDefault();
    if (userMail && pseudo) {
      if (password == confirmPassword) {
        localStorage.setItem('logged', true);
        toast.success('Inscription réussie ! Vous pouvez maintenant acheter.')
        setLogin(true);
      } else {
        toast.error("Les deux mots de passe ne correspondent pas");
      }
    } else {
      setLogin(false);
    }
  }
  return (
    <div className="form-container signup">
      {login && <Navigate to="/biens" />}
      <form className="parent" onSubmit={handleSubmit}>
        <h1 className="mobile-indicator">Inscription</h1>
        <label htmlFor="pseudo">Entrez votre pseudo</label>
        <input type="text" id="pseudo" value={pseudo} onChange={handlePseudo} placeholder="ex : KEN Le King" required />
        <label htmlFor="mail">Adresse e-mail :</label>
        <input type="mail" id="mail" name="mail" value={userMail} onChange={handleChangeMail} placeholder="ex : ken.bg@ego.fr" required />
        <label htmlFor="password">Mot de passe :</label>
        <input type="password" id="password" name="password" value={password} onChange={handleChangePwd} required placeholder="Entrez mot de passe ..." />
        <label htmlFor="passConfirm">Confirmation de mot de passe :</label>
        <input type="password" id="passConfirm" name="passConfirm" value={confirmPassword} required onChange={handleConfirmPassword} placeholder="Confirmez le mot de passe" />
        <button> S&apos;inscrire</button>
      </form>
    </div>
  )
}

export default SignUp;