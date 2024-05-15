import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";
import { Button } from "flowbite-react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const MyJobs = () => {
  const { user } = useContext(AuthContext);

  const [jobs, setJobs] = useState([]);

  useEffect(() => {
   
    getData();
  }, [user]);

  const getData = async () => {
    const { data } = await axios(`${import.meta.env.VITE_API_URL}/jobs/${user?.email}`);
    setJobs(data);
  };

 const handleDelete = async id => {
    try {
        const {data} = await axios.delete(`${import.meta.env.VITE_API_URL}/job/${id}`)
        toast.success("Data deleted successfully")
        getData()
    } catch (err){
        toast.error(err.message)
    }

  }
  return (
    <div className="overflow-x-auto">
      <table className="table table-sm">
        <thead>
          <tr>
          
            <th>Name</th>
            <th>Job Title</th>
            <th>Catogery</th>
            <th>Deadline</th>
            <th><button>Update</button></th>
            <th><button>Delete</button></th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job) => (
            <tr key={job._id}>
              <td>{job.name}</td>
              <td>{job.job_title}</td>
              <td>{job.category}</td>
              <td>{new Date(job.deadline).toLocaleDateString()}</td>
             <Link to = {`/update/${job._id}`}>  <td><button  className=" btn btn-xs btn-success">Update</button></td></Link>
            <td><button onClick={(() => handleDelete(job._id))} className="btn btn-xs btn-error">Delete</button></td>
             
            </tr>
          ))}
        </tbody>
        <tfoot>
        <tr>
          
          <th>Name</th>
          <th>Job Title</th>
          <th>Catogery</th>
          <th>Deadline</th>
          <th><button>Update</button></th>
          <th><button>Delete</button></th>
        </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default MyJobs;
