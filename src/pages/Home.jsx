import React from 'react';
import Carousal from '../components/Carousal';
import JobCategory from '../components/JobCategory';
import { useLoaderData } from 'react-router-dom';

const Home = () => {

    //used for data fatching using loader in routes. not needed in axios
    // const jobs = useLoaderData()
    // console.log(jobs)

    return (
        <div>
            <Carousal></Carousal>
            {/* <JobCategory jobs={jobs}></JobCategory> */}
            <JobCategory></JobCategory>
        </div>
    );
};

export default Home;