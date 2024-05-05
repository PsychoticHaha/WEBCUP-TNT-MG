import { RouterProvider, createBrowserRouter, Route } from "react-router-dom";
import LoginLayout from './../pages/Login/LoginLayout'
import SignupLayout from "../pages/SignUp/SignupLayout";
import Home from "../pages/Home/Home";
import Belongs from "../pages/Belongs/Belongs";
import Test from "../../TEST/Test";
import Live from "../pages/Live/Live";
import Dashboard from "../pages/Dashboard/Dashboard";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
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
    path: "/biens",
    element: <Belongs />
  },
  {
    path: "/vente-live",
    element: <Live />
  },
  {
    path: "/a-propos",
    element: <SignupLayout />
  },
  {
    path: "/dashboard",
    element: <Dashboard />
  },
  {
    path: "/test",
    element: <Test />
  },
])
export default function Routes({ children }) {

  return (
    <RouterProvider router={router}>
      <Route element={children} />
    </RouterProvider>
  );
}