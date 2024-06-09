// import React, { useState } from "react"; // Import React explicitly
// import { useForm } from "react-hook-form";
// import CreatableSelect from "react-select/creatable";

// const CreateJob = () => {
//   const [selectedOption, setSelectedOption] = useState(null);
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = (data) => {
//     data.skills = selectedOption;
//     // console.log(data);
//     fetch("http://localhost:3000/post-job", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(data),
//     })
//       .then((res) => res.json())
//       .then((result) => {
//         console.log(result);
//         if (result.acknowledged === true) {
//           alert("Job Posted Successfully!!!");
//         }
//         reset();
//       });
//     // .catch((error) => console.error("Error:", error));
//     // Add error handling
//   };

//   const options = [
//     { value: "javaScript", label: "javaScript" },
//     { value: "C++", label: "C++" },
//     { value: "HTML", label: "HTML" },
//     { value: "CSS", label: "CSS" },
//     { value: "React", label: "React" },
//     { value: "NodeJS", label: "NodeJS" },
//     { value: "MongoDB", label: "MongoDB" },
//     { value: "Redux", label: "Redux" },
//     { value: "Graphic Design", label: "Graphic Design" },
//     { value: "UI, UX Designer", label: "UI, UX Designer" },
//   ];

//   return (
//     <div className="max-w-screen-2x1 container mx-auto xl:px-24 px-4">
//       <div className="bg-[#fafafa] py-10 px-4 lg:px-16">
//         <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
//           {/* first row */}
//           <div className="create-job-flex">
//             <div className="lg:w-1/2 w-full">
//               <label className="block mb-2 text-lg">Job Title</label>
//               <input
//                 type="text"
//                 placeholder="Type your job title"
//                 // defaultValue={"Web Developer"}
//                 {...register("jobTitle")}
//                 className="create-job-input"
//               />
//             </div>
//             <div className="lg:w-1/2 w-full">
//               <label className="block mb-2 text-lg">Company Name</label>
//               <input
//                 type="text"
//                 placeholder="Ex: Microsoft"
//                 // defaultValue={"Web Developer"}
//                 {...register("companyName")}
//                 className="create-job-input"
//               />
//             </div>
//           </div>

//           {/* 2nd row */}
//           <div className="create-job-flex">
//             <div className="lg:w-1/2 w-full">
//               <label className="block mb-2 text-lg">Minimum Salary</label>
//               <input
//                 type="text"
//                 placeholder="$20k"
//                 {...register("minPrice")}
//                 className="create-job-input"
//               />
//             </div>
//             <div className="lg:w-1/2 w-full">
//               <label className="block mb-2 text-lg">Maximum Salary</label>
//               <input
//                 type="text"
//                 placeholder="$120k"
//                 {...register("maxPrice")}
//                 className="create-job-input"
//               />
//             </div>
//           </div>

//           {/* 3rd row */}
//           <div className="create-job-flex">
//             <div className="lg:w-1/2 w-full">
//               <label className="block mb-2 text-lg">Salary Type</label>
//               <select {...register("salaryType")} className="create-job-input">
//                 <option value="">Choose your salary</option>
//                 <option value="Yearly">Yearly</option>
//                 <option value="Monthly">Monthly</option>
//                 <option value="Hourly">Hourly</option>
//               </select>
//             </div>
//             <div className="lg:w-1/2 w-full">
//               <label className="block mb-2 text-lg">Job Location</label>
//               <input
//                 type="text"
//                 placeholder="Location..."
//                 {...register("jobLocation")}
//                 className="create-job-input"
//               />
//             </div>
//           </div>

//           {/* 4th row */}
//           <div className="create-job-flex">
//             <div className="lg:w-1/2 w-full">
//               <label className="block mb-2 text-lg">Job Posting Date</label>
//               <input
//                 type="date"
//                 placeholder="Posting Date"
//                 {...register("postingDate")}
//                 className="create-job-input"
//               />
//             </div>
//             <div className="lg:w-1/2 w-full">
//               <label className="block mb-2 text-lg">Experience Level</label>
//               <select
//                 {...register("experienceLevel")}
//                 className="create-job-input"
//               >
//                 <option value="">Choose your experience</option>
//                 <option value="Internship">Internship</option>
//                 <option value="Any experience">Any experience</option>
//                 <option value="Work remotely">Work remotely</option>
//               </select>
//             </div>
//           </div>

//           {/* 5th row */}
//           <div>
//             <label className="block mb-2 text-lg">Required skill sets:</label>
//             <CreatableSelect
//               defaultValue={selectedOption}
//               onChange={setSelectedOption}
//               options={options}
//               isMulti
//               className="create-job-input py-4"
//             />
//           </div>

//           {/* 6th row */}
//           <div className="create-job-flex">
//             <div className="lg:w-1/2 w-full">
//               <label className="block mb-2 text-lg">Company Logo</label>
//               <input
//                 type="url"
//                 placeholder="Past your company logo URL: https://weShare.com/img"
//                 {...register("companyLogo")}
//                 className="create-job-input"
//               />
//             </div>
//             <div className="lg:w-1/2 w-full">
//               <label className="block mb-2 text-lg">Employment Type</label>
//               <select
//                 {...register("employmentType")}
//                 className="create-job-input"
//               >
//                 <option value="">Choose your employment type</option>
//                 <option value="Full-time">Full-time</option>
//                 <option value="Part-time">Part-time</option>
//                 <option value="Temporary">Temporary</option>
//               </select>
//             </div>
//           </div>

//           {/* 7th row */}
//           <div className="w-full">
//             <label className="block mb-2 text-lg">Job description</label>
//             <textarea
//               className="w-full pl-3 py-1.5 focus:outline-none"
//               rows={6}
//               placeholder="Job Description..."
//               {...register("description")}
//             />
//           </div>

//           {/* last row */}
//           <div>
//             <label className="block mb-2 text-lg">Job Posted by:</label>
//             <input
//               type="email"
//               placeholder="Your email"
//               {...register("postedBy")}
//               className="create-job-input"
//             />
//           </div>

//           <input
//             type="submit"
//             className="block mt-12 bg-blue text-white font-semibold px-8 py-2 rounded-sm cursor-pointer"
//           />
//         </form>
//       </div>
//     </div>
//   );
// };

// export default CreateJob;

// 2nd copy

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import CreatableSelect from "react-select/creatable";

const CreateJob = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset, // Import reset from useForm
  } = useForm();

  const onSubmit = (data) => {
    data.skills = selectedOption;
    fetch("http://localhost:3000/post-job", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.acknowledged === true) {
          alert("Job Posted Successfully!!!");
          reset(); // Reset the form after successful submission
          setSelectedOption(null); // Reset the selected options in CreatableSelect
        }
      })
      .catch((error) => console.error("Error:", error)); // Add error handling
  };

  const options = [
    { value: "javaScript", label: "javaScript" },
    { value: "C++", label: "C++" },
    { value: "HTML", label: "HTML" },
    { value: "CSS", label: "CSS" },
    { value: "React", label: "React" },
    { value: "NodeJS", label: "NodeJS" },
    { value: "MongoDB", label: "MongoDB" },
    { value: "Redux", label: "Redux" },
    { value: "Graphic Design", label: "Graphic Design" },
    { value: "UI, UX Designer", label: "UI, UX Designer" },
  ];

  return (
    <div className="max-w-screen-2x1 container mx-auto xl:px-24 px-4">
      <div className="bg-[#fafafa] py-10 px-4 lg:px-16">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          
          {/* first row */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Job Title</label>
              <input
                type="text"
                placeholder="Type your job title"
                {...register("jobTitle")}
                className="create-job-input"
              />
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Company Name</label>
              <input
                type="text"
                placeholder="Ex: Microsoft"
                {...register("companyName")}
                className="create-job-input"
              />
            </div>
          </div>

          {/* 2nd row */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Minimum Salary</label>
              <input
                type="text"
                placeholder="$20k"
                {...register("minPrice")}
                className="create-job-input"
              />
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Maximum Salary</label>
              <input
                type="text"
                placeholder="$120k"
                {...register("maxPrice")}
                className="create-job-input"
              />
            </div>
          </div>

          {/* 3rd row */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Salary Type</label>
              <select {...register("salaryType")} className="create-job-input">
                <option value="">Choose your salary</option>
                <option value="Yearly">Yearly</option>
                <option value="Monthly">Monthly</option>
                <option value="Hourly">Hourly</option>
              </select>
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Job Location</label>
              <input
                type="text"
                placeholder="Location..."
                {...register("jobLocation")}
                className="create-job-input"
              />
            </div>
          </div>

          {/* 4th row */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Job Posting Date</label>
              <input
                type="date"
                placeholder="Posting Date"
                {...register("postingDate")}
                className="create-job-input"
              />
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Experience Level</label>
              <select
                {...register("experienceLevel")}
                className="create-job-input"
              >
                <option value="">Choose your experience</option>
                <option value="Internship">Internship</option>
                <option value="Any experience">Any experience</option>
                <option value="Work remotely">Work remotely</option>
              </select>
            </div>
          </div>

          {/* 5th row */}
          <div>
            <label className="block mb-2 text-lg">Required skill sets:</label>
            <CreatableSelect
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              options={options}
              isMulti
              className="create-job-input py-4"
            />
          </div>

          {/* 6th row */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Company Logo</label>
              <input
                type="url"
                placeholder="Past your company logo URL and only (73 X 73) size!"
                {...register("companyLogo")}
                className="create-job-input"
              />
            </div>
            <div className="lg:w-1/2 w-full">
              <label className="block mb-2 text-lg">Employment Type</label>
              <select
                {...register("employmentType")}
                className="create-job-input"
              >
                <option value="">Choose your employment type</option>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Temporary">Temporary</option>
              </select>
            </div>
          </div>

          {/* 7th row */}
          <div className="w-full">
            <label className="block mb-2 text-lg">Job description</label>
            <textarea
              className="w-full pl-3 py-1.5 focus:outline-none"
              rows={6}
              placeholder="Job Description..."
              {...register("description")}
            />
          </div>

          {/* last row */}
          <div>
            <label className="block mb-2 text-lg">Job Posted by:</label>
            <input
              type="email"
              placeholder="Your email"
              {...register("postedBy")}
              className="create-job-input"
            />
          </div>

          <input
            type="submit"
            className="block mt-12 bg-blue text-white font-semibold px-8 py-2 rounded-sm cursor-pointer"
          />
        </form>
      </div>
    </div>
  );
};

export default CreateJob;
