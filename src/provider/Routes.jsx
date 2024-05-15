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
        element: <JobDetails></JobDetails>,
        loader: ({params}) => fetch(`${import.meta.env.VITE_API_URL}/job/${params.id}`),
      },
      {
        path:"allJobs/job/:id",
        element: <JobDetails></JobDetails>,
        loader: ({params}) => fetch(`${import.meta.env.VITE_API_URL}/job/${params.id}`),
      },
      {
        path:"/update/:id",
        element: <UpdateJob></UpdateJob>,
        loader: ({params}) => fetch(`${import.meta.env.VITE_API_URL}/job/${params.id}`),
      },
      {
        path: "/allJobs",
        element: <AllJobs></AllJobs>,
      },
      {
        path:'appliedJobs',
        element: <AppliedJobs></AppliedJobs>,
      },
      {
        path: 'addJob',
        element: <AddJob></AddJob>,
      },
      {
        path: 'myJobs',
        element: <MyJobs></MyJobs>,
      },
      {
        path: 'blog',
        element: <Blogs></Blogs>,
      },

     
     


    ],
  },
]);

export default router;
