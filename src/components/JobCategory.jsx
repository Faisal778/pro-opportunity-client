/* eslint-disable react/prop-types */
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import JobCard from "./JobCard";

const JobCategory = ({ jobs }) => {
  return (
    <div className="container px-10 py-10 mx-auto">
      <Tabs>
        <div className="flex justify-center">
          <TabList>
            <Tab>All Jobs</Tab>
            <Tab>On-site Jobs</Tab>
            <Tab>Remote Jobs</Tab>
            <Tab>Hybrid Jobs</Tab>
            <Tab>Part-time Jobs</Tab>
          </TabList>
        </div>

        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {jobs.map((job) => (
            <JobCard key={job._id} job={job}></JobCard>
          ))}
          </div>
        </TabPanel>

        <TabPanel>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {
            jobs.filter(j => j.category ==="On-Site").map(job => (
                <JobCard key={job._id} job={job}></JobCard>
            ))
          }
            </div>
        </TabPanel>

        <TabPanel>
          
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {jobs.filter(j => j.category === 'Remote').map(job => (
                <JobCard key={job._id} job={job}></JobCard>
            ))}
          </div>
        </TabPanel>

        <TabPanel>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {jobs.filter(j=> j.category === 'Hybrid').map(job => (
                <JobCard key={job._id} job={job}></JobCard>
            ))}
          </div>
        </TabPanel>

        <TabPanel>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {
                jobs.filter(j=> j.category === 'Part-Time').map(job => (
                    <JobCard key={job._id} job={job}></JobCard>
                ))
            }
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default JobCategory;
