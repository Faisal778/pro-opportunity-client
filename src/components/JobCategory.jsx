/* eslint-disable react/prop-types */
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import JobCard from "./JobCard";
import { useEffect, useState } from "react";
import axios from "axios";

const JobCategory = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios(`${import.meta.env.VITE_API_URL}/jobs`);
      setJobs(data);
    };
    getData();
  }, []);
  return (
    <div className="container px-5 py-10 my-10 mx-auto ">
      <Tabs>
        <div className="flex bg-gray-800 rounded-lg py-4 btn-neutral justify-center flex-col md:flex-row">
          <TabList className=" px-10 ">
            <Tab>All Jobs</Tab>
            <Tab>On-Site Jobs</Tab>
            <Tab>Remote Jobs</Tab>
            <Tab>Hybrid Jobs</Tab>
            <Tab>Part-time Jobs</Tab>
          </TabList>
        </div>

        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobs.map((job) => (
              <JobCard key={job._id} job={job}></JobCard>
            ))}
          </div>
        </TabPanel>

        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobs
              .filter((j) => j.category === "On-Site")
              .map((job) => (
                <JobCard key={job._id} job={job}></JobCard>
              ))}
          </div>
        </TabPanel>

        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobs
              .filter((j) => j.category === "Remote")
              .map((job) => (
                <JobCard key={job._id} job={job}></JobCard>
              ))}
          </div>
        </TabPanel>

        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobs
              .filter((j) => j.category === "Hybrid")
              .map((job) => (
                <JobCard key={job._id} job={job}></JobCard>
              ))}
          </div>
        </TabPanel>

        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobs
              .filter((j) => j.category === "Part-Time")
              .map((job) => (
                <JobCard key={job._id} job={job}></JobCard>
              ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default JobCategory;
