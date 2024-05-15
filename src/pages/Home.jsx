import React from 'react';
import Carousal from '../components/Carousal';
import JobCategory from '../components/JobCategory';
import { useLoaderData } from 'react-router-dom';

const Home = () => {

    const jobs = useLoaderData()
    console.log(jobs)

    return (
        <div>
            <Carousal></Carousal>
            <JobCategory jobs={jobs}></JobCategory>
        </div>
    );
};

export default Home;