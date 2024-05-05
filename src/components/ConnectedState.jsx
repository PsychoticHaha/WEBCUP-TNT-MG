// import { useState, useEffect } from "react";

// function ConnectedState() {
//   const [logged, setLogged] = useState(localStorage.getItem('logged') || false);

//   useEffect(() => {
//     localStorage.setItem('logged', logged); // Stocker les données dans localStorage
//   }, [logged]);

//   const handleLogout = () => {
//     setLogged(false)
//     localStorage.setItem('logged', false);
//   }

//   return (
//     <div className="top-container">
//       <div className="left">
//         Vous êtes connecté(e) !
//       </div>
//       <div className="right" onClick={handleLogout}>
//         <a href={"/connexion"}> Se déconnecter </a>
//       </div>
//     </div>
//   );
// }

// export default ConnectedState;