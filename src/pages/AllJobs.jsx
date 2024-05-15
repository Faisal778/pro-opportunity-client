
import "react-tabs/style/react-tabs.css";
import { useEffect, useState } from "react";
import axios from "axios";
import JobCard from "../components/JobCard";
const AllJobs = () => {
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
      const getData = async () => {
        const { data } = await axios(`${import.meta.env.VITE_API_URL}/jobs`);
        setJobs(data);
      };
      getData();
    }, []);
    return (
        <div>
           
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobs.map((job) => (
              <JobCard key={job._id} job={job}></JobCard>
            ))}
          </div>
     
        </div>
    );
};

export default AllJobs;