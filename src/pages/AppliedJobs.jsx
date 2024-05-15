import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";
import { Button } from "flowbite-react";
import toast from "react-hot-toast";

const AppliedJobs = () => {
    const { user } = useContext(AuthContext);

    const [jobs, setJobs] = useState([]);
  
    useEffect(() => {
     
      getData();
    }, [user]);
  
    const getData = async () => {
      const { data } = await axios(`${import.meta.env.VITE_API_URL}/appliedjobs/${user?.email}`);
      setJobs(data);
    };
  
 
    return (
        <div className="overflow-x-auto">
      <table className="table table-sm">
        <thead>
          <tr>
          
            <th>Name</th>
            <th>Job Title</th>
            <th>Catogery</th>
    
   
          </tr>
        </thead>
        <tbody>
          {jobs.map((job) => (
            <tr key={job._id}>
              <td>{job.name}</td>
              <td>{job.job_title}</td>
              <td>{job.category}</td>
       
             
            </tr>
          ))}
        </tbody>
        <tfoot>
        <tr>
          
          <th>Name</th>
          <th>Job Title</th>
          <th>Catogery</th>
 

        </tr>
        </tfoot>
      </table>
    </div>
    );
};

export default AppliedJobs;