import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import Signin from "../pages/Authentication/Signin";
import Signup from "../pages/Authentication/Signup";
import JobDetails from "../pages/JobDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
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
        loader: ({params}) => fetch(`${import.meta.env.ViTE_API_URL}/jobs/${params.id}`),
      },

    ],
  },
]);

export default router;
