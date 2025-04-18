// import React from 'react';
// // import 'bootstrap/dist/css/bootstrap.min.css';
// import { Badge } from 'react-bootstrap';

// const FeedbackPage = () => {
//   return (
//     <div className="container mt-4">

//         <div className=' d-flex justify-content-between align-items-center mb-4'>
//             <h2 className="mb-0 font-bold size-{21px}"> Employee Feedback</h2><button className='btn btn-outline-primary' style={{height:"fit-content",marginLeft:"15px"}} onClick={() => navigate("/performance/managerfeedback")}> <i className="bi bi-arrow-left" />Back</button>
//             </div>
//       <h2>Employee Feedback Details</h2>
//       <div className="row mt-4">
//         {/* Performance Summary */}
//         <div className="col-md-6 mb-3">
//           <h5>Performance Summary</h5>
//           <p>Great performance.</p>
//           <p><strong>Date:</strong> 2024-04-10</p>
//           <p><strong>Rating:</strong> 4.5</p>
//           <p><strong>Work Quality:</strong> 5</p>
//           <p><strong>Teamwork:</strong> 4</p>
//           <p><strong>Initiative:</strong> 4</p>
//           <p><strong>Status:</strong> <Badge bg="success">Reviewed</Badge></p>
//         </div>

//         {/* Custom Fields */}
//         <div className="col-md-6 mb-3">
//           <h5>Custom Fields</h5>
//           <p><strong>Name:</strong> Nikurj Kumar</p>
//           <p><strong>Email:</strong> john.anderson@example.com</p>
//           <p><strong>Phone:</strong> +1 (555) 123-4567</p>
//           <p><strong>Organization:</strong> Tech Solutions Inc.</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FeedbackPage;



import React from 'react';

const FeedbackPage = () => {
  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Employee Feedback</h2>
        <button
          className="border border-blue-500 text-blue-500 px-4 py-2 rounded hover:bg-blue-50"
          onClick={() => navigate("/performance/managerfeedback")}
        >
          <i className="bi bi-arrow-left mr-2" />
          Back
        </button>
      </div>

      {/* Title */}
    
      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Performance Summary Card */}
        <div className="bg-white shadow-md rounded-xl p-6">
          <h5 className="text-lg font-semibold mb-3">Performance Summary</h5>
          <p>Great performance.</p>
          <p><strong>Date:</strong> 2024-04-10</p>
          <p><strong>Rating:</strong> 4.5</p>
          <p><strong>Work Quality:</strong> 5</p>
          <p><strong>Teamwork:</strong> 4</p>
          <p><strong>Initiative:</strong> 4</p>
          <p>
            <strong>Status:</strong>{" "}
            <span className="bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full inline-block">
              Reviewed
            </span>
          </p>
        </div>

        {/* Custom Fields Card */}
        <div className="bg-white shadow-md rounded-xl p-6">
          <h5 className="text-lg font-semibold mb-3">Employee Details</h5>
          <p><strong>Name:</strong> Nikurj Kumar</p>
          <p><strong>Email:</strong> john.anderson@example.com</p>
          <p><strong>Phone:</strong> +1 (555) 123-4567</p>
          <p><strong>Organization:</strong> Tech Solutions Inc.</p>
        </div>
      </div>
    </div>
  );
};

export default FeedbackPage;
