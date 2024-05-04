import { RouterProvider, createBrowserRouter, Route } from "react-router-dom";
import App from "./../App";
import LoginLayout from './../pages/Login/LoginLayout'
import SignUp from './../pages/SignUp/SignUp'
import Navbar from "../components/Navbar";
import SignupLayout from "../pages/SignUp/SignupLayout";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: "/connexion",
    element: <LoginLayout />
  },
  {
    path: "/inscription",
    element: <SignupLayout />
  },
  {
    path: "/signup",
    element: <SignUp />
  },
  {
    path: 'navbar',
    element: <Navbar />
  }
])
export default function Routes({ children }) {

  return (
    <RouterProvider router={router}>
      <Route element={children} />
    </RouterProvider>
  );
}