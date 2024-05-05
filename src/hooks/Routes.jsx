import { RouterProvider, createBrowserRouter, Route } from "react-router-dom";
import LoginLayout from './../pages/Login/LoginLayout'
import SignupLayout from "../pages/SignUp/SignupLayout";
import Home from "../pages/Home/Home";
import Belongs from "../pages/Belongs/Belongs";
import Test from "../../TEST/Test";
import VideoRecorder from "../pages/VideoRecorder";

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
    element: <VideoRecorder />
  },
  {
    path: "/a-propos",
    element: <SignupLayout />
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