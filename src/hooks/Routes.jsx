import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from './../pages/Login/Login'
import SignUp from './../pages/Login/SignUp'

const router = createBrowserRouter({
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
)
function Routes({ children }) {
  return (
    <RouterProvider router={router}>
      {children}
    </RouterProvider>
  );
}

export default Routes;