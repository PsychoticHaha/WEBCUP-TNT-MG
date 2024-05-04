import { RouterProvider, createBrowserRouter, Route } from "react-router-dom";
import LoginLayout from './../pages/Login/LoginLayout'
import SignupLayout from "../pages/SignUp/SignupLayout";
import Home from "../pages/Home/Home";

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
])
export default function Routes({ children }) {

  return (
    <RouterProvider router={router}>
      <Route element={children} />
    </RouterProvider>
  );
}