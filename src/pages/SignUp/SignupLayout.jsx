import Navbar from "../../components/Navbar";
import SignUp from "./SignUp"

function SignupLayout() {
  return (
    <div className='main'>
      <Navbar text="Aller se connecter" link="/connexion" />

      <div className="content">
        <div className="left">
          <div className="icon"></div>
          <div className="text">
            <h1>KEN | INSCRIPTION</h1>
            <p>Inscrivez-vous pour faire des économies sur vos achats.</p>
          </div>
        </div>
        <div className="right">
          <SignUp />
        </div>
      </div>
    </div>
  );
}

export default SignupLayout;