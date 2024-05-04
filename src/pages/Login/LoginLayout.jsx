import Navbar from '../../components/Navbar';
import Login from './Login';
import './../../assets/stylesheets/Login-Layout.scss'

function LoginLayout() {
  document.title = "Connexion | Site de KEN"
  return (
    <div className='main'>
      <Navbar text="Aller s'inscrire"  link="/inscription" />
      <div className="content">
        <div className="left">
          <div className="icon"></div>
          <div className="text">
            <h1>KEN | CONNEXION</h1>
            <p>Connectez-vous pour faire de supers achats.</p>
          </div>
        </div>
        <div className="right">
          <Login />
        </div>
      </div>
    </div>
  );
}

export default LoginLayout;