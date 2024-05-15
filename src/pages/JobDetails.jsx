import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import axios from "axios";
import toast from "react-hot-toast";

const JobDetails = () => {
  const { user } = useContext(AuthContext);
  const job = useLoaderData();
  const { _id, applicants_number, deadline, job_posting_date, recruiter_name, salary_range, job_title, category, picture_url, description, recruiter_email } = job || {};

  const handleApplyNow = async e => {
    // same recruiter and applicant validation.
    if (user?.email === recruiter_email) return toast.error("You can't aplly on your own post"
    )

    e.preventDefault()
    const form = e.target 
    const jobId = _id
    const name = form.username.value 
    const email = form.email.value 
    const resume = form.resume.value 

    const applyData = {
        jobId,  name, email, job_title, deadline, category, recruiter_email, resume
    }

    try{
        const{data} = await axios.post(`${import.meta.env.VITE_API_URL}/appliedResumes`, applyData)
        console.log(data)
        document.getElementById("my_modal_3").close();
        toast.success("Applied for the job successfully")

    }catch(err){
        console.log(err)
    }

}

  return (
    <div className="max-w-2xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800 mb-10 mx-auto">
   <img
    className="object-cover w-full h-64"
    src={picture_url ? picture_url : "https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"}
    alt={"Job Banner"}
/>


      <div className="p-6">
        <div>
          <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">{category}</span>
          <a
            href="#"
            className="block mt-2 text-xl font-semibold text-gray-800 transition-colors duration-300 transform dark:text-white hover:text-gray-600 hover:underline"
            tabIndex="0"
            role="link">
            {job_title}
          </a>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 ">{description}</p>
        </div>
        <div className="flex flex-col md:flex-row pt-4 justify-around">
          <p className="py-1 text-sm text-gray-700 dark:text-gray-400 font-semibold">Posted On: {job_posting_date} </p>
          <p className="py-1 text-sm  text-gray-700 dark:text-gray-400 font-semibold">Deadline: {deadline}</p>
        </div>

        <div className="flex flex-col md:flex-row  justify-around">
          <p className="py-1 text-sm text-gray-700 dark:text-gray-400 font-semibold">Salary: {salary_range} </p>
          <p className="py-1 text-sm text-gray-700 dark:text-gray-400 font-semibold">Applied Applicants: {applicants_number} </p>
        </div>

        {/* <div className=' text-center my-5'>
<button className="btn btn-sm btn-wide">Wide</button>
</div> */}
        {/* You can open the modal using document.getElementById('ID').showModal() method */}
        <div className="text-center">
          <button className="btn btn-sm mt-4 btn-wide bg-blue-300" onClick={() => document.getElementById("my_modal_3").showModal()}>
            Apply Now
          </button>
        </div>
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
            <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
              <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">Account settings</h2>

              <form onSubmit={handleApplyNow}>
                <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                  <div>
                    <label className="text-gray-700 dark:text-gray-200" htmlFor="username">
                      Username
                    </label>
                    <input
                      id="username"
                      name = "username"
                      defaultValue={user?.displayName}
                      type="text"
                      className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                    />
                  </div>

                  <div>
                    <label className="text-gray-700 dark:text-gray-200" htmlFor="emailAddress">
                      Email Address
                    </label>
                    <input
                      id="emailAddress"
                      name = "email"
                      type="email"
                      defaultValue={user?.email}
                      className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                    />
                  </div>

                  <div>
                    <label className="text-gray-700 dark:text-gray-200" htmlFor="resume_link">
                      Resume Link
                    </label>
                    <input
                      id="resume"
                      type="text"
                      name="resume"
                      required 
                      className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                    />
                  </div>
                </div>

                <div className="flex justify-center mt-6">
                
                  <button className=" px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                    Submit
                  </button>
                 
                </div>
              </form>
            </section>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default JobDetails;
