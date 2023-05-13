import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Bookings from "../Pages/Bookings/Bookings";
import Orders from "../Pages/Orders/Orders";
import PrivetRoutes from "./PrivetRoutes";

  const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/signup',
          element:<Register></Register>
        },
        {
          path:'/booking',
          element:<PrivetRoutes><Orders></Orders></PrivetRoutes>
        },
        {
          path:'/bookings/:id',
          element:<Bookings></Bookings>,
          loader:({params})=>fetch(`http://localhost:4000/services/${params.id}`),
        }
      ]
    },
  ]);

  export default router;