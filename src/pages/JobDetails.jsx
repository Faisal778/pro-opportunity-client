import React from 'react';
import { useLoaderData } from 'react-router-dom';

const JobDetails = () => {


    const job = useLoaderData()
    const { _id, applicants_number, deadline, job_posting_date, recruiter_name, salary_range, job_title, category, picture_url,description } = job || {}

    console.log(_id, job_title)

    return (
        <div className="max-w-2xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800 mb-10 mx-auto">
    <img className="object-cover w-full h-64" src="https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Article" />

    <div className="p-6">
        <div>
            <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">{category}</span>
            <a href="#" className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline" tabIndex="0" role="link">{job_title}</a>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 ">{description}</p>
        </div>
        <div className='flex flex-col md:flex-row pt-4 justify-around'>
        <p className="py-1 text-sm text-gray-700 dark:text-gray-400 font-semibold">Posted On: {job_posting_date} </p>
        <p className="py-1 text-sm  text-gray-700 dark:text-gray-400 font-semibold">Deadline: {deadline}</p>
        </div>



        <div className='flex flex-col md:flex-row  justify-around'>
  
       
        <p className="py-1 text-sm text-gray-700 dark:text-gray-400 font-semibold">Salary: {salary_range} </p>
        <p className="py-1 text-sm text-gray-700 dark:text-gray-400 font-semibold">Applied Applicants: {applicants_number} </p>
        </div>


<div className=' text-center my-5'>
<button className="btn btn-sm btn-wide">Wide</button>
</div>


    </div>
</div>

    );
};

export default JobDetails;