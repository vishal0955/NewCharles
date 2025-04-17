// import React from 'react';

// const IndividualCandidatePage = () => {
//   return (
//     <>
//       <header className="bg-white border-b border-gray-200">
//         <nav className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex h-16 items-center justify-between">
//             <div className="flex items-center">
//               <img src="https://i.ibb.co/dJ68VsWW/image.png" alt="Logo" className="h-8 w-auto" />
//               <div className="ml-10 flex items-center space-x-8">
//                 <a href="#" className="text-gray-500 font-medium">Schedule</a>
//                 <a href="#" className="text-custom font-medium">Board</a>
//               </div>
//             </div>
//             <div className="flex items-center space-x-6">
//               <button className="text-gray-400 hover:text-gray-500">
//                 <i className="fas fa-search text-lg"></i>
//               </button>
//               <button className="text-gray-400 hover:text-gray-500 relative">
//                 <i className="fas fa-bell text-lg"></i>
//                 <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-red-500 text-xs text-white flex items-center justify-center">3</span>
//               </button>
//               <button className="flex items-center">
//                 <img src="https://creatie.ai/ai/api/search-image?query=A professional headshot of a business person in formal attire against a neutral background&width=40&height=40&orientation=squarish&flag=1ea8ce4a-cf92-48cc-aa6e-2fb1ea18a740&flag=042b1fa4-ee9d-41de-afc3-53c0c2616f4c" className="h-8 w-8 rounded-full" alt="Profile" />
//               </button>
//             </div>
//           </div>
//         </nav>
//       </header>
//       <main className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//     <div className="mb-8 flex items-start justify-between">
//       <div className="flex items-center">
//         <div className="h-16 w-16 rounded-full bg-gray-800 flex items-center justify-center text-white text-xl font-semibold">
//           WW
//         </div>
//         <div className="ml-4">
//           <h1 className="text-2xl font-semibold text-gray-900">Wade Wilson</h1>
//           <p className="text-sm text-gray-500">
//             Current stage: Problem Solving - 4/9 • Last activity at 12 Dec 2023,
//             16:00
//           </p>
//         </div>
//       </div>
//       <div className="flex space-x-4">
//         <button className="!rounded-button bg-custom px-4 py-2 text-white font-medium">
//           <i className="fas fa-calendar-alt mr-2" />
//           Schedule Interview
//         </button>
//         <button className="!rounded-button bg-white px-4 py-2 text-gray-700 font-medium border border-gray-300">
//           <i className="fas fa-exchange-alt mr-2" />
//           Change Stage
//         </button>
//         <button className="!rounded-button bg-white px-4 py-2 text-gray-700 font-medium border border-gray-300">
//           <i className="fas fa-envelope mr-2" />
//           Send Email
//         </button>
//       </div>
//     </div>
//     <div className="border-b border-gray-200 mb-8">
//       <nav className="flex space-x-8">
//         <a
//           href="#"
//           className="border-b-2 border-custom px-1 py-4 text-sm font-medium text-custom"
//         >
//           Overview
//         </a>
//         <a
//           href="#"
//           className="border-b-2 border-transparent px-1 py-4 text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300"
//         >
//           Performance
//         </a>
//         <a
//           href="#"
//           className="border-b-2 border-transparent px-1 py-4 text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300"
//         >
//           Documents (2)
//         </a>
//         <a
//           href="#"
//           className="border-b-2 border-transparent px-1 py-4 text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300"
//         >
//           Forms (2)
//         </a>
//         <a
//           href="#"
//           className="border-b-2 border-transparent px-1 py-4 text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300"
//         >
//           Emails (12)
//         </a>
//         <a
//           href="#"
//           className="border-b-2 border-transparent px-1 py-4 text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300"
//         >
//           Comments (10)
//         </a>
//         <a
//           href="#"
//           className="border-b-2 border-transparent px-1 py-4 text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300"
//         >
//           Timeline (20)
//         </a>
//       </nav>
//     </div>
//     <div className="grid grid-cols-3 gap-8">
//       <div className="col-span-2">
//         <div className="bg-white rounded-lg shadow-sm p-6">
//           <h2 className="text-lg font-medium text-gray-900 mb-6">
//             Interview Progress
//           </h2>
//           <div className="space-y-6">
//             <div className="flex items-center justify-between">
//               <div className="flex items-center">
//                 <img
//                   src="https://creatie.ai/ai/api/search-image?query=A professional headshot of a business person in formal attire against a neutral background&width=40&height=40&orientation=squarish&flag=2623b4f0-5065-482a-b046-f5705664091f&flag=19763299-4836-4fa6-9873-314faeb5c227"
//                   className="h-10 w-10 rounded-full"
//                   alt="Val Purvis"
//                 />
//                 <div className="ml-3">
//                   <p className="text-sm font-medium text-gray-900">
//                     Val Purvis
//                   </p>
//                   <p className="text-sm text-gray-500">10 days ago</p>
//                 </div>
//               </div>
//               <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
//                 Hire
//               </span>
//             </div>
//             <div className="flex items-center justify-between">
//               <div className="flex items-center">
//                 <img
//                   src="https://creatie.ai/ai/api/search-image?query=A professional headshot of a business person in formal attire against a neutral background&width=40&height=40&orientation=squarish&flag=6f7317a1-a54f-4bb3-b26e-1fa3db9d1703&flag=937270c7-62a6-47ef-80dc-1c98797db7b3"
//                   className="h-10 w-10 rounded-full"
//                   alt="Nathan Cooper"
//                 />
//                 <div className="ml-3">
//                   <p className="text-sm font-medium text-gray-900">
//                     Nathan Cooper
//                   </p>
//                   <p className="text-sm text-gray-500">6 days ago</p>
//                 </div>
//               </div>
//               <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
//                 Hire
//               </span>
//             </div>
//             <div className="flex items-center justify-between">
//               <div className="flex items-center">
//                 <img
//                   src="https://creatie.ai/ai/api/search-image?query=A professional headshot of a business person in formal attire against a neutral background&width=40&height=40&orientation=squarish&flag=3ba508c3-89c3-4c91-a707-4e87dc249f53&flag=d66716d7-dccb-426f-9f79-83152cdc4b78"
//                   className="h-10 w-10 rounded-full"
//                   alt="Jerrod Halbert"
//                 />
//                 <div className="ml-3">
//                   <p className="text-sm font-medium text-gray-900">
//                     Jerrod Halbert
//                   </p>
//                   <p className="text-sm text-gray-500">4 days ago</p>
//                 </div>
//               </div>
//               <div className="flex space-x-2">
//                 <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
//                   Intermediate
//                 </span>
//                 <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
//                   Hire
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="space-y-6">
//         <div className="bg-white rounded-lg shadow-sm p-6">
//           <h2 className="text-lg font-medium text-gray-900 mb-4">
//             Professional Links
//           </h2>
//           <div className="space-y-4">
//             <a
//               href="#"
//               className="flex items-center text-gray-600 hover:text-gray-900"
//             >
//               <i className="fab fa-linkedin text-lg mr-2" />
//               LinkedIn Profile
//               <i className="fas fa-external-link-alt ml-2 text-sm" />
//             </a>
//             <a
//               href="#"
//               className="flex items-center text-gray-600 hover:text-gray-900"
//             >
//               <i className="far fa-file-alt text-lg mr-2" />
//               Candidate CV
//               <i className="fas fa-external-link-alt ml-2 text-sm" />
//             </a>
//           </div>
//         </div>
//         <div className="bg-white rounded-lg shadow-sm p-6">
//           <div className="flex items-center justify-between mb-4">
//             <h2 className="text-lg font-medium text-gray-900">
//               Personal Details
//             </h2>
//             <button className="text-gray-400 hover:text-gray-500">
//               <i className="fas fa-pen" />
//             </button>
//           </div>
//           <div className="space-y-4">
//             <div>
//               <p className="text-sm text-gray-500">Email</p>
//               <p className="text-sm font-medium text-gray-900">
//                 wade.wilson@gmail.com
//               </p>
//             </div>
//             <div>
//               <p className="text-sm text-gray-500">Mobile</p>
//               <p className="text-sm font-medium text-gray-900">
//                 +44 1234 567 890
//               </p>
//             </div>
//             <div>
//               <p className="text-sm text-gray-500">Current Company</p>
//               <p className="text-sm font-medium text-gray-900">Facebook</p>
//             </div>
//             <div>
//               <p className="text-sm text-gray-500">Location</p>
//               <p className="text-sm font-medium text-gray-900">
//                 United Kingdom
//               </p>
//             </div>
//           </div>
//         </div>
//         <div className="bg-white rounded-lg shadow-sm p-6">
//           <div className="flex items-center justify-between mb-4">
//             <h2 className="text-lg font-medium text-gray-900">
//               Opportunity Details
//             </h2>
//             <button className="text-gray-400 hover:text-gray-500">
//               <i className="fas fa-pen" />
//             </button>
//           </div>
//           <div className="space-y-4">
//             <div>
//               <p className="text-sm text-gray-500">Position</p>
//               <p className="text-sm font-medium text-gray-900">
//                 Designer (Product)
//               </p>
//             </div>
//             <div>
//               <p className="text-sm text-gray-500">Seniority</p>
//               <p className="text-sm font-medium text-gray-900">Senior</p>
//             </div>
//             <div>
//               <p className="text-sm text-gray-500">Recruiter</p>
//               <div className="flex items-center mt-1">
//                 <img
//                   src="https://creatie.ai/ai/api/search-image?query=A professional headshot of a business person in formal attire against a neutral background&width=32&height=32&orientation=squarish&flag=b902f6c5-7821-4a65-ac5a-f5dcc43f4ff7&flag=7d8b6bb6-8f52-4730-9706-ec812f993b23"
//                   className="h-8 w-8 rounded-full"
//                   alt="Harry Peter"
//                 />
//                 <span className="ml-2 text-sm font-medium text-gray-900">
//                   Harry Peter
//                 </span>
//               </div>
//             </div>
//             <div>
//               <p className="text-sm text-gray-500">Hiring Manager</p>
//               <div className="flex items-center mt-1">
//                 <img
//                   src="https://creatie.ai/ai/api/search-image?query=A professional headshot of a business person in formal attire against a neutral background&width=32&height=32&orientation=squarish&flag=3ebacb35-9d7d-4d66-a6fc-f2b37267d5fa&flag=221694e7-9638-4bc2-9976-9b168c6c974c"
//                   className="h-8 w-8 rounded-full"
//                   alt="Keneth Conroy"
//                 />
//                 <span className="ml-2 text-sm font-medium text-gray-900">
//                   Keneth Conroy
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </main>
//     </>
//   );
// };

// export default IndividualCandidatePage;


//  <>
//   {/* Hello world */}
//   <meta charSet="UTF-8" />
//   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//   <title>Candidate Profile | ATS System</title>
//   <link
//     href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
//     rel="stylesheet"
//   />
//   <link
//     href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
//     rel="stylesheet"
//   />
//   <link
//     href="https://ai-public.creatie.ai/gen_page/tailwind-custom.css"
//     rel="stylesheet"
//   />
//   <header className="bg-white border-b border-gray-200">
//     <nav className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
//       <div className="flex h-16 items-center justify-between">
//         <div className="flex items-center">
//           <img
//             src="https://i.ibb.co/dJ68VsWW/image.png"
//             alt="Logo"
//             className="h-8 w-auto"
//           />
//           <div className="ml-10 flex items-center space-x-8">
//             <a href="#" className="text-gray-500 font-medium">
//               Schedule
//             </a>
//             <a href="#" className="text-custom font-medium">
//               Board
//             </a>
//           </div>
//         </div>
//         <div className="flex items-center space-x-6">
//           <button className="text-gray-400 hover:text-gray-500">
//             <i className="fas fa-search text-lg" />
//           </button>
//           <button className="text-gray-400 hover:text-gray-500 relative">
//             <i className="fas fa-bell text-lg" />
//             <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-red-500 text-xs text-white flex items-center justify-center">
//               3
//             </span>
//           </button>
//           <button className="flex items-center">
//             <img
//               src="https://creatie.ai/ai/api/search-image?query=A professional headshot of a business person in formal attire against a neutral background&width=40&height=40&orientation=squarish&flag=1ea8ce4a-cf92-48cc-aa6e-2fb1ea18a740&flag=042b1fa4-ee9d-41de-afc3-53c0c2616f4c"
//               className="h-8 w-8 rounded-full"
//               alt="Profile"
//             />
//           </button>
//         </div>
//       </div>
//     </nav>
//   </header>

// </>



// src/pages/IndividualCandidatePage.jsx
import React from "react";

const IndividualCandidatePage = () => {
  return (
    <>
      {/* ─────────────────────────  NAVBAR  ───────────────────────── */}
   

      {/* ─────────────────────────  MAIN  ───────────────────────── */}
      <main className="container-fluid py-4">
        {/* top section */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-start mb-4">
          {/* avatar + name */}
          <div className="d-flex align-items-center mb-3 mb-md-0">
            <div
              className="rounded-circle bg-dark text-white d-flex justify-content-center align-items-center fw-semibold"
              style={{ width: 64, height: 64 }}
            >
              WW
            </div>
            <div className="ms-3">
              <h1 className="h4 fw-semibold mb-1">Wade Wilson</h1>
              <small className="text-muted">
                Current stage: Problem Solving ‑ 4/9 • Last activity at 12 Dec 2023,
                16:00
              </small>
            </div>
          </div>

          {/* action buttons */}
          <div className="d-flex flex-wrap gap-2">
            <button className="btn btn-primary">
              <i className="fas fa-calendar-alt me-2" />
              Schedule Interview
            </button>
            <button className="btn btn-outline-secondary">
              <i className="fas fa-exchange-alt me-2" />
              Change Stage
            </button>
            <button className="btn btn-outline-secondary">
              <i className="fas fa-envelope me-2" />
              Send Email
            </button>
          </div>
        </div>

        {/* tabs */}
        <ul className="nav nav-tabs mb-4 overflow-auto flex-nowrap">
          {[
            ["Overview", true],
            ["Performance"],
            ["Documents (2)"],
            ["Forms (2)"],
            ["Emails (12)"],
            ["Comments (10)"],
            ["Timeline (20)"],
          ].map(([label, active]) => (
            <li className="nav-item" key={label}>
              <a
                href="#"
                className={`nav-link ${active ? "active text-primary" : ""}`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* grid */}
        <div className="row g-4">
          {/* ─────────── left (8/12 on lg+) ─────────── */}
          <div className="col-12 col-lg-8">
            <div className="card h-100">
              <div className="card-body">
                <h2 className="h6 fw-medium mb-4">Interview Progress</h2>

                <div className="vstack gap-4">
                  {[
                    {
                      name: "Val Purvis",
                      time: "10 days ago",
                      badge: "Hire",
                      avatar:
                        "https://creatie.ai/ai/api/search-image?query=A professional headshot&width=40&height=40",
                    },
                    {
                      name: "Nathan Cooper",
                      time: "6 days ago",
                      badge: "Hire",
                      avatar:
                        "https://creatie.ai/ai/api/search-image?query=A professional headshot&width=40&height=40",
                    },
                    {
                      name: "Jerrod Halbert",
                      time: "4 days ago",
                      badge: "Hire",
                      extra: "Intermediate",
                      avatar:
                        "https://creatie.ai/ai/api/search-image?query=A professional headshot&width=40&height=40",
                    },
                  ].map((item) => (
                    <div
                      key={item.name}
                      className="d-flex justify-content-between align-items-center"
                    >
                      <div className="d-flex align-items-center">
                        <img
                          src={item.avatar}
                          alt={item.name}
                          className="rounded-circle"
                          width={40}
                          height={40}
                        />
                        <div className="ms-3">
                          <p className="mb-0 fw-medium">{item.name}</p>
                          <small className="text-muted">{item.time}</small>
                        </div>
                      </div>

                      <div className="d-flex gap-2">
                        {item.extra && (
                          <span className="badge bg-light text-dark">
                            {item.extra}
                          </span>
                        )}
                        <span className="badge bg-success-subtle text-success">
                          {item.badge}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ─────────── right (4/12 on lg+) ─────────── */}
          <div className="col-12 col-lg-4">
            <div className="d-flex flex-column gap-4">
              {/* Professional links */}
              <div className="card">
                <div className="card-body">
                  <h2 className="h6 fw-medium mb-3">Professional Links</h2>
                  <div className="vstack gap-3">
                    <a href="#" className="text-decoration-none text-secondary">
                      <i className="fab fa-linkedin me-2" />
                      LinkedIn Profile
                      <i className="fas fa-external-link-alt ms-2 small" />
                    </a>
                    <a href="#" className="text-decoration-none text-secondary">
                      <i className="far fa-file-alt me-2" />
                      Candidate CV
                      <i className="fas fa-external-link-alt ms-2 small" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Personal details */}
              <div className="card">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h2 className="h6 fw-medium mb-0">Personal Details</h2>
                    <button className="btn btn-link text-muted p-0">
                      <i className="fas fa-pen" />
                    </button>
                  </div>
                  <div className="vstack gap-3">
                    {[
                      ["Email", "wade.wilson@gmail.com"],
                      ["Mobile", "+44 1234 567 890"],
                      ["Current Company", "Facebook"],
                      ["Location", "United Kingdom"],
                    ].map(([label, value]) => (
                      <div key={label}>
                        <small className="text-muted">{label}</small>
                        <p className="mb-0 fw-medium">{value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Opportunity details */}
              <div className="card">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h2 className="h6 fw-medium mb-0">Opportunity Details</h2>
                    <button className="btn btn-link text-muted p-0">
                      <i className="fas fa-pen" />
                    </button>
                  </div>

                  <div className="vstack gap-3">
                    {[
                      ["Position", "Designer (Product)"],
                      ["Seniority", "Senior"],
                    ].map(([label, value]) => (
                      <div key={label}>
                        <small className="text-muted">{label}</small>
                        <p className="mb-0 fw-medium">{value}</p>
                      </div>
                    ))}

                    {/* Recruiter */}
                    <div>
                      <small className="text-muted">Recruiter</small>
                      <div className="d-flex align-items-center mt-1">
                        <img
                          src="https://creatie.ai/ai/api/search-image?query=A professional headshot&width=32&height=32"
                          className="rounded-circle"
                          width={32}
                          height={32}
                          alt="Recruiter"
                        />
                        <span className="ms-2 fw-medium small">
                          Harry Peter
                        </span>
                      </div>
                    </div>

                    {/* Hiring manager */}
                    <div>
                      <small className="text-muted">Hiring Manager</small>
                      <div className="d-flex align-items-center mt-1">
                        <img
                          src="https://creatie.ai/ai/api/search-image?query=A professional headshot&width=32&height=32"
                          className="rounded-circle"
                          width={32}
                          height={32}
                          alt="Hiring Manager"
                        />
                        <span className="ms-2 fw-medium small">
                          Keneth Conroy
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* end cards stack */}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default IndividualCandidatePage;
