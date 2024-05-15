import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import Signin from "../pages/Authentication/Signin";
import Signup from "../pages/Authentication/Signup";
import JobDetails from "../pages/JobDetails";
import AllJobs from "../pages/AllJobs";
import AppliedJobs from "../pages/AppliedJobs";
import AddJob from "../pages/AddJob";
import MyJobs from "../pages/MyJobs" ;
import Blogs from "../pages/Blogs";
import Errorpage from "../pages/Errorpage";
import UpdateJob from "../pages/UpdateJob";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        index: true,
        element: <Home />,
       // loader: ()=> fetch(`${import.meta.env.VITE_API_URL}/jobs`), used axios, so this one is not needed
      },
      {
        path: "signin",
        element: <Signin />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path:"job/:id",
        element: <PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
        loader: ({params}) => fetch(`${import.meta.env.VITE_API_URL}/job/${params.id}`),
      },
      {
        path:"allJobs/job/:id",
        element: <PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
        loader: ({params}) => fetch(`${import.meta.env.VITE_API_URL}/job/${params.id}`),
      },
      {
        path:"/update/:id",
        element: <PrivateRoute><UpdateJob></UpdateJob></PrivateRoute>,
        loader: ({params}) => fetch(`${import.meta.env.VITE_API_URL}/job/${params.id}`),
      },
      {
        path: "/allJobs",
        element: <AllJobs></AllJobs>,
      },
      {
        path:'appliedJobs',
        element:<PrivateRoute> <AppliedJobs></AppliedJobs></PrivateRoute>,
      },
      {
        path: 'addJob',
        element: <PrivateRoute><AddJob></AddJob></PrivateRoute>,
      },
      {
        path: 'myJobs',
        element: <PrivateRoute><MyJobs></MyJobs></PrivateRoute>,
      },
      {
        path: 'blog',
        element: <Blogs></Blogs>,
      },

     
     


    ],
  },
]);

export default router;
