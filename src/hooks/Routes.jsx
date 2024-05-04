import { RouterProvider, createBrowserRouter, Route } from "react-router-dom";
import App from "./../App";
import Login from './../pages/Login/Login'
import SignUp from './../pages/SignUp/SignUp'
import Navbar from "../components/Navbar";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />
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