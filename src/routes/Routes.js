import Register from '../loginSetup/Register.jsx';
import {Courses, Home} from '../pages/index.js'

const routes = [
  {
    element: <Home/>,
    path: "/",
    protected: false,
  },
  {
    element: <Courses/>,
    path: "/courses",
    protected: true,
  },
  // {
  //   element: "payment",
  //   path: "/payment",
  //   protected: true,
  // },
  {
    element: <Register/>,
    path: "/register",
    protected: true,
  },
  {
    element: <Register/>,
    path: "/register",
    protected: true,
  },
];


export default routes;