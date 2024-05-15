import React, { useCallback, useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";

const AddJob = () => {
  const [startDate, setStartDate] = useState(new Date());
  const { user } = useContext(AuthContext);
    const navigate = useNavigate()
  const handleSubmit = async e => {
    e.preventDefault();
     const form = e.target 
     const name = form.name.value 
     const email = form.email.value 
     const job_title =  form.jobTitle.value 
    const jobBannerUrl = form.jobBannerUrl.value
     const category = form.category.value 
     const description = form.description.value 
     const salary= form.salary.value 
     const postingDate = form.postingDate.value 
     const deadline = startDate

     const jobData = {
        job_title, jobBannerUrl, category, description, salary, postingDate, name, email,deadline
     }


     try{
        const {data } = await axios.post(`${import.meta.env.VITE_API_URL}/job`, jobData)
        console.log(data)
        toast.success("Job Added successfully")
        navigate('/myJobs')
     } catch (err) {
        toast.error("failed to update job. Try Again")
     }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
      <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
        <div className="text-center">
          <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Add A Job</h2>
        </div>
        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
          <div>
            <label className="text-gray-700 dark:text-gray-200" htmlFor="jobTitle">
              User Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              disabled
              defaultValue={user?.displayName}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>
          <div>
            <label className="text-gray-700 dark:text-gray-200" htmlFor="jobTitle">
              User Email
            </label>
            <input
              id="email"
              name="email"
              type="text"
              disabled
              defaultValue={user?.email}
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>
          <div>
            <label className="text-gray-700 dark:text-gray-200" htmlFor="jobTitle">
              Job Title
            </label>
            <input
              id="jobTitle"
              name="jobTitle"
              type="text"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>
          <div>
            <label className="text-gray-700 dark:text-gray-200" htmlFor="jobBannerUrl">
              Picture URL of the Job Banner
            </label>
            <input
              id="jobBannerUrl"
              name="jobBannerUrl"
              type="text"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>

          <div>
            <label className="text-gray-700 dark:text-gray-200" htmlFor="jobTitle">
              Salary Range
            </label>
            <input
              id="salary"
              name="salary"
              type="text"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>

          <div>
            <label className="text-gray-700 dark:text-gray-200" htmlFor="category">
              Job Category
            </label>
            <select
              id="category"
              name="category"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">
              <option value="On-Site">On-Site</option>
              <option value="Remote">Remote</option>
              <option value="Hybrid">Hybrid</option>
              <option value="Part-Time">Part-Time</option>
            </select>
          </div>

          <div>
            <label className="text-gray-700 dark:text-gray-200" htmlFor="jobTitle">
              Job posting date
            </label>
            <input
              id="postingDate"
              name="postingDate"
              type="text"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-gray-700 dark:text-gray-200" htmlFor="jobTitle">
              Deadline
            </label>
            <DatePicker className="border p-2 mt-2 rounded-md" selected={startDate} onChange={(date) => setStartDate(date)} />
          </div>
          <div className="w-full  sm:col-span-2">
            <label className="text-gray-700 dark:text-gray-200 w-full" htmlFor="jobTitle">
              Job Description
            </label>
            <input
              id="description"
              name="description"
              type="text"
              className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
            />
          </div>
          {/* Remaining form fields go here */}
        </div>
        {/* Additional form fields and buttons */}
        <div className="flex justify-center mt-6">
          <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
            Submit
          </button>
        </div>
      </section>
    </form>
  );
};

export default AddJob;
