// import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
// import Swal from 'sweetalert2'
// import PageHeader from '../components/pageHeader';

// const JobDetails = () => {
//   const {id} = useParams();
//   const [job, setJob] = useState([]);
//   useEffect (() => {
//     fetch(`http://localhost:3000/all-jobs/${id}`).then(res => res.json()).then(data => setJob(data))
//   }, [])

//   const handleApply = async () => {
//     const { value: url } = await Swal.fire({
//       input: "url",
//       inputLabel: "URL address",
//       inputPlaceholder: "Enter the URL"
//     });
//     if (url) {
//       Swal.fire(`Entered URL: ${url}`);
//     }
//   }

//   return (
//     <div className='max-w-screen-2x1 container mx-auto xl:px-24 px-4'>
//       <PageHeader title={"Single Job Page"} path={"Single Job"}/>
//       <h2>JobDetails: {id}</h2>
//       <h1>{job.jobTitle}</h1>
//       <button className='bg-blue px-8 py-2 text-white' onClick={handleApply}>Apply Now</button>
//     </div>
//   )
// }

// export default JobDetails

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import PageHeader from '../components/pageHeader';

const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  
  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const response = await fetch(`http://localhost:3000/all-job/${id}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setJob(data);
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };
    
    fetchJobDetails();
  }, [id]);

  const handleApply = async () => {
    const { value: url } = await Swal.fire({
      input: "url",
      inputLabel: "URL address",
      inputPlaceholder: "Enter the URL"
    });
    if (url) {
      Swal.fire(`Entered URL: ${url}`);
    }
  };

  if (!job) {
    return <div>Loading...</div>;
  }

  return (
    <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4'>
      <PageHeader title={"Single Job Page"} path={"Single Job"} />
      <h2>Job Details: {id}</h2>
      <h1>{job.jobTitle}</h1>
      <button className='bg-blue px-8 py-2 text-white' onClick={handleApply}>Apply Now</button>
    </div>
  );
}

export default JobDetails;
