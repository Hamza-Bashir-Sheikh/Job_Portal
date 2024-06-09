// import React from 'react'
// const pageHeader = (title, path) => {
//   return (
//     <div className='py-24 mt-3 bg-[#FAFAFA] rounded flex item-center justify-center'>
//       <div>
//         <h2 className='text-3xl text-blue font-medium mb-1 text-center'>{title}</h2>
//         <p className='text-sm text-center'><a href="/">Home</a> / {path}</p>
//       </div>
//     </div>
//   )
// }
// export default pageHeader

import React from "react";

// Change the function to accept props
const PageHeader = ({ title, path }) => {
  // Destructure title and path from props
  return (
    <div className="py-24 mt-3 bg-[#FAFAFA] rounded flex item-center justify-center">
      <div>
        <h2 className="text-3xl text-blue font-medium mb-1 text-center">
          {title}
        </h2>
        <p className="text-sm text-center">
          <a href="/">Home</a> / {path}
        </p>
      </div>
    </div>
  );
};

export default PageHeader;
