import React from "react";
import { Link } from "react-router-dom";

const Errorpage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="mockup-browser border bg-base-300 flex flex-col items-center">
        <div className="mockup-browser-toolbar">
          <div className="input">https://proportunity.com</div>
        </div>
        <div className="flex text-4xl justify-center px-4 pt-16 ">404! </div>
        <div className="flex text-2xl justify-center px-4  pb-16 pt-4">Page not Found!</div>

        <Link to = "/"><button className=" btn btn-outline flex text-2xl justify-center px-4  mb-10 ">Go to Homepage</button></Link>
      </div>
    </div>
  );
};

export default Errorpage;
