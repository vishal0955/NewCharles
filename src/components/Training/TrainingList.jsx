// import React, { useState } from 'react'
// import { FaEdit, FaEye, FaTrash } from 'react-icons/fa'
// import AddTraining from './AddTraining';

// const TrainingList = () => {
//     const [isModalOpen, setIsModalOpen] = useState(false);

//     const handleClose = () => {
//         setIsModalOpen(false);
//     };

//   return (
//     <div>
//   <div className="min-h-screen flex flex-col">
//     <nav className="bg-white shadow">
//       <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16">
//           <div className="flex">
//             <div className="flex-shrink-0 flex items-center">
//               <img
//                 className="h-8 w-auto"
//                 src="https://i.ibb.co/dJ68VsWW/image.png"
//                 alt="Logo"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </nav>
//     <main className="flex-1 max-w-8xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
//       <div className="flex flex-col">
//         <div className="md:w-64 flex-shrink-0"></div>
//         <div className="flex-1 w-full">
//           <div className="bg-white rounded-lg shadow">
//             <div className="px-6 py-4 border-b border-gray-200">
//               <div className="flex items-center justify-between">
//                 <h2 className="text-xl font-semibold text-gray-900">
//                   Training Programs List
//                 </h2>
//                 <div className="flex items-center space-x-4">
//                   <button className="inv-new-button" onClick={() => setIsModalOpen(true)}>
//                     <i className="fas fa-plus mr-2" />
//                     Add Training
//                   </button>
//                   <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-custom !rounded-button">
//                     <i className="fas fa-file-export mr-2" />
//                     Export
//                   </button>
//                   <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-custom !rounded-button">
//                     <i className="fas fa-print mr-2" />
//                     Print
//                   </button>
//                 </div>
//               </div>
//               <div className="mt-4">
//                 <div className="relative">
//                   <input
//                     type="text"
//                     placeholder="Search programs..."
//                     className="block w-full rounded-md border-gray-300 shadow-sm focus:border-custom focus:ring-custom pl-10"
//                   />
//                   <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                     <i className="fas fa-search text-gray-400" />
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="overflow-x-auto">
//               <table className="min-w-full divide-y divide-gray-200">
//                 <thead className="bg-gray-50">
//                   <tr>
//                     <th
//                       scope="col"
//                       className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                     >
//                       Training Name
//                     </th>
//                     <th
//                       scope="col"
//                       className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                     >
//                       Description
//                     </th>
//                     <th
//                       scope="col"
//                       className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                     >
//                       Cost
//                     </th>
//                     <th
//                       scope="col"
//                       className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                     >
//                       Dates
//                     </th>
//                     <th
//                       scope="col"
//                       className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                     >
//                       trainer
//                     </th>
//                     <th
//                       scope="col"
//                       className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                     >
//                       People
//                     </th>
//                     <th
//                       scope="col"
//                       className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                     >
//                       Actions
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody className="bg-white divide-y divide-gray-200">
//                   <tr>
//                     <td className="px-6 py-4 whitespace-nowrap">
//                       <a
//                         href="#"
//                         className="text-custom hover:text-custom-dark font-medium"
//                       >
//                         Advanced Web Development
//                       </a>
//                     </td>
//                     <td className="px-6 py-4">
//                       <p className="text-sm text-gray-900">
//                         Learn modern web development techniques including React,
//                         Node.js and MongoDB...
//                       </p>
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
//                       $999
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
//                       <div>Start: Jan 15, 2024</div>
//                       <div>End: Mar 15, 2024</div>
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm">
//                       <a
//                         href="#"
//                         className="text-custom hover:text-custom-dark"
//                       >
//                         John Smith
//                       </a>
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
//                       25/30
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm">
//                       <div className="flex space-x-2">
//                         <button className="text-blue-600 hover:text-blue-800">
//                           <FaEye /> 
//                         </button>
//                         <button className="text-green-600 hover:text-green-800" onClick={() => setIsModalOpen(true)}>
//                          <FaEdit />
//                         </button>
//                         <button className="text-red-600 hover:text-red-800">
//                        <FaTrash />
//                         </button>
//                       </div>
//                     </td>
//                   </tr>
//                   <tr>
//                     <td className="px-6 py-4 whitespace-nowrap">
//                       <a
//                         href="#"
//                         className="text-custom hover:text-custom-dark font-medium"
//                       >
//                         UX Design Fundamentals
//                       </a>
//                     </td>
//                     <td className="px-6 py-4">
//                       <p className="text-sm text-gray-900">
//                         Master the principles of user experience design and
//                         create intuitive interfaces...
//                       </p>
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
//                       $799
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
//                       <div>Start: Feb 1, 2024</div>
//                       <div>End: Apr 1, 2024</div>
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm">
//                       <a
//                         href="#"
//                         className="text-custom hover:text-custom-dark"
//                       >
//                         Sarah Johnson
//                       </a>
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
//                       18/20
//                     </td>
//                    <td className="px-6 py-4 whitespace-nowrap text-sm">
//                       <div className="flex space-x-2">
//                         <button className="text-blue-600 hover:text-blue-800">
//                           <FaEye /> 
//                         </button>
//                         <button className="text-green-600 hover:text-green-800" onClick={() => setIsModalOpen(true)}>
//                          <FaEdit />
//                         </button>
//                         <button className="text-red-600 hover:text-red-800">
//                        <FaTrash />
//                         </button>
//                       </div>
//                     </td>
//                   </tr>
//                   <tr>
//                     <td className="px-6 py-4 whitespace-nowrap">
//                       <a
//                         href="#"
//                         className="text-custom hover:text-custom-dark font-medium"
//                       >
//                         Business Analytics
//                       </a>
//                     </td>
//                     <td className="px-6 py-4">
//                       <p className="text-sm text-gray-900">
//                         Learn to analyze business data and make data-driven
//                         decisions...
//                       </p>
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
//                       $1,299
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
//                       <div>Start: Mar 1, 2024</div>
//                       <div>End: May 1, 2024</div>
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm">
//                       <a
//                         href="#"
//                         className="text-custom hover:text-custom-dark"
//                       >
//                         Michael Brown
//                       </a>
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
//                       15/25
//                     </td>
//                    <td className="px-6 py-4 whitespace-nowrap text-sm">
//                       <div className="flex space-x-2">
//                         <button className="text-blue-600 hover:text-blue-800">
//                           <FaEye /> 
//                         </button>
//                         <button className="text-green-600 hover:text-green-800" onClick={() => setIsModalOpen(true)}>
//                          <FaEdit />
//                         </button>
//                         <button className="text-red-600 hover:text-red-800">
//                        <FaTrash />
//                         </button>
//                       </div>
//                     </td>
//                   </tr>
//                 </tbody>
//               </table>
//             </div>
//             <div className="px-6 py-4 border-t border-gray-200">
//               <div className="flex items-center justify-between">
//                 <div className="flex items-center">
//                   <span className="text-sm text-gray-700">Show</span>
//                   <select className="mx-2 rounded-md border-gray-300 shadow-sm focus:border-custom focus:ring-custom !rounded-button">
//                     <option>10</option>
//                     <option>25</option>
//                     <option>50</option>
//                   </select>
//                   <span className="text-sm text-gray-700">entries</span>
//                 </div>
//                 <nav
//                   className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
//                   aria-label="Pagination"
//                 >
//                   <a
//                     href="#"
//                     className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
//                   >
//                     <span className="sr-only">Previous</span>
//                     <i className="fas fa-chevron-left" />
//                   </a>
//                   <a
//                     href="#"
//                     className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-custom hover:bg-gray-50"
//                   >
//                     1
//                   </a>
//                   <a
//                     href="#"
//                     className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
//                   >
//                     2
//                   </a>
//                   <a
//                     href="#"
//                     className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
//                   >
//                     3
//                   </a>
//                   <a
//                     href="#"
//                     className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
//                   >
//                     <span className="sr-only">Next</span>
//                     <i className="fas fa-chevron-right" />
//                   </a>
//                 </nav>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
   
//       {isModalOpen && (
//         <>
//           <div className="modal fade show d-block" role="dialog">
//             <div className="modal-dialog modal-md" role="document">
//               <div className="modal-content">
//                 <div className="modal-header">
//                   <button
//                     type="button"
//                     className="btn-close"
//                     aria-label="Close"
//                     onClick={handleClose}
//                   />
//                 </div>
//                 <div className="modal-body">
//                   <AddTraining handleClose={handleClose} />
//                 </div>
//               </div>
//             </div>
//           </div>
//           {/* Modal backdrop */}
//           <div
//             className="modal-backdrop fade show"
//             onClick={handleClose}
//           ></div>
//         </>
//       )}
//     </main>
   
//   </div>
//     </div>
//   )
// }

// export default TrainingList



import React, { useState } from 'react'
import { FaEdit, FaEye, FaTrash, FaPlus, FaFileExport, FaPrint, FaSearch, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import AddTraining from './AddTraining';


const TrainingList = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [trainings, setTrainings] = useState([
        {
            id: 1,
            name: "Advanced Web Development",
            description: "Learn modern web development techniques including React, Node.js and MongoDB.",
            cost: 999,
            startDate: "2024-01-15",
            endDate: "2024-03-15",
            trainer: "John Smith",
            capacity: 30,
            enrolled: 25
        },
        {
            id: 2,
            name: "UX Design Fundamentals",
            description: "Master the principles of user experience design and create intuitive interfaces.",
            cost: 799,
            startDate: "2024-02-01",
            endDate: "2024-04-01",
            trainer: "Sarah Johnson",
            capacity: 20,
            enrolled: 18
        },
        {
            id: 3,
            name: "Business Analytics",
            description: "Learn to analyze business data and make data-driven decisions.",
            cost: 1299,
            startDate: "2024-03-01",
            endDate: "2024-05-01",
            trainer: "Michael Brown",
            capacity: 25,
            enrolled: 15
        }
    ]);
    const [searchTerm, setSearchTerm] = useState("");
    const [editingTraining, setEditingTraining] = useState(null);
    const [entriesPerPage, setEntriesPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);

   

    const handleClose = () => {
        setIsModalOpen(false);
        setEditingTraining(null);
    };

    const handleAddTraining = (newTraining) => {
        if (editingTraining) {
            // Update existing training
            setTrainings(trainings.map(t => 
                t.id === editingTraining.id ? { ...t, ...newTraining } : t
            ));
        } else {
            // Add new training
            setTrainings([...trainings, {
                ...newTraining,
                id: Math.max(...trainings.map(t => t.id), 0) + 1
            }]);
        }
    };

    const handleEdit = (training) => {
        setEditingTraining(training);
        setIsModalOpen(true);
    };

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this training?")) {
            setTrainings(trainings.filter(t => t.id !== id));
        }
    };

    const filteredTrainings = trainings.filter(training =>
        training.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        training.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        training.trainer.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Pagination logic
    const totalPages = Math.ceil(filteredTrainings.length / entriesPerPage);
    const paginatedTrainings = filteredTrainings.slice(
        (currentPage - 1) * entriesPerPage,
        currentPage * entriesPerPage
    );

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-US', options);
    };

    return (
        <div className="min-h-screen flex flex-col">
            {/* <nav className="bg-white shadow">
                <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex">
                            <div className="flex-shrink-0 flex items-center">
                                <img
                                    className="h-8 w-auto"
                                    src="https://i.ibb.co/dJ68VsWW/image.png"
                                    alt="Logo"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </nav> */}
            <main className="flex-1 max-w-8xl w-full mx-auto px-2 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col">
                    <div className="flex-1 w-full">
                        <div className="bg-white rounded-lg shadow">
                            <div className="px-6 py-4 border-b border-gray-200">
                                <div className="flex items-center justify-between">
                                    <h2 className="text-xl font-semibold text-gray-900">
                                        Training Programs List
                                    </h2>
                                    <div className="flex items-center space-x-4">
                                        <button 
                                            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                            onClick={() => setIsModalOpen(true)}
                                        >
                                            <FaPlus className="mr-2" />
                                            Add Training
                                        </button>
                                        <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                            <FaFileExport className="mr-2" />
                                            Export
                                        </button>
                                        {/* <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                            <FaPrint className="mr-2" />
                                            Print
                                        </button> */}
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <div className="relative">
                                        <input
                                            type="text"
                                            placeholder="Search programs..."
                                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 pl-10"
                                            value={searchTerm}
                                            onChange={(e) => setSearchTerm(e.target.value)}
                                        />
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <FaSearch className="text-gray-400" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Training Name
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Description
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Cost
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Dates
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                trainer
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                People
                                            </th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                Actions
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {paginatedTrainings.length > 0 ? (
                                            paginatedTrainings.map((training) => (
                                                <tr key={training.id}>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <a
                                                            href="#"
                                                            className=" font-medium"
                                                        >
                                                            {training.name}
                                                        </a>
                                                    </td>
                                                    <td className="px-6 py-4">

                                                        <p className='text-xs'>
                                                            {training.description}
{/* 
                                                            {training.description.length > 50 ? (
                                                                <>
                                                                    {training.description.substring(0, 10)}...
                                                                    <br />
                                                                    <span style={{ color: "blue", cursor: "pointer" }} size="sm" onClick={() => handleShow(item)}>
                                                                        Read more
                                                                    </span>
                                                                </>
                                                            ) : (
                                                                training.description
                                                            )} */}
                                                         </p>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                        ${training.cost}
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                        <div>Start: {formatDate(training.startDate)}</div>
                                                        <div>End: {formatDate(training.endDate)}</div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                                                        <a
                                                   
                                                            className=""
                                                        >
                                                            {training.trainer}
                                                        </a>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                        {training.enrolled}/{training.capacity}
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                                                        <div className="flex space-x-2">
                                                            {/* <button 
                                                                className="text-blue-600 hover:text-blue-800"
                                                                title="View"
                                                            >
                                                                <FaEye /> 
                                                            </button> */}
                                                            <button 
                                                                className="text-green-600 hover:text-green-800"
                                                                title="Edit"
                                                                onClick={() => handleEdit(training)}
                                                            >
                                                                <FaEdit />
                                                            </button>
                                                            <button 
                                                                className="text-red-600 hover:text-red-800"
                                                                title="Delete"
                                                                onClick={() => handleDelete(training.id)}
                                                            >
                                                                <FaTrash />
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))
                                        ) : (
                                            <tr>
                                                <td colSpan="7" className="px-6 py-4 text-center text-gray-500">
                                                    No training programs found
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                            <div className="px-6 py-4 border-t border-gray-200">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <span className="text-sm text-gray-700">Show</span>
                                        <select 
                                            className="mx-2 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                            value={entriesPerPage}
                                            onChange={(e) => {
                                                setEntriesPerPage(Number(e.target.value));
                                                setCurrentPage(1);
                                            }}
                                        >
                                            <option value={10}>10</option>
                                            <option value={25}>25</option>
                                            <option value={50}>50</option>
                                        </select>
                                        <span className="text-sm text-gray-700">
                                            entries (Total: {filteredTrainings.length})
                                        </span>
                                    </div>
                                    <nav
                                        className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
                                        aria-label="Pagination"
                                    >
                                        <button
                                            className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50"
                                            disabled={currentPage === 1}
                                            onClick={() => setCurrentPage(currentPage - 1)}
                                        >
                                            <span className="sr-only">Previous</span>
                                            <FaChevronLeft />
                                        </button>
                                        {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                                            <button
                                                key={page}
                                                className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${
                                                    currentPage === page 
                                                        ? 'border-blue-500 bg-blue-50 text-blue-600'
                                                        : 'border-gray-300 bg-white text-gray-700 hover:bg-gray-50'
                                                }`}
                                                onClick={() => setCurrentPage(page)}
                                            >
                                                {page}
                                            </button>
                                        ))}
                                        <button
                                            className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50"
                                            disabled={currentPage === totalPages}
                                            onClick={() => setCurrentPage(currentPage + 1)}
                                        >
                                            <span className="sr-only">Next</span>
                                            <FaChevronRight />
                                        </button>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
                {isModalOpen && (
                    <div className="fixed inset-0 z-50 overflow-y-auto  ">
                        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0 w-full">
                            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                                <div 
                                    className="absolute inset-0 bg-gray-500 opacity-75"
                                    onClick={handleClose}
                                ></div>
                            </div>
                            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                    <div className="flex justify-between items-start">
                                        <h3 className="text-lg leading-6 font-medium text-gray-900">
                                            {editingTraining ? 'Edit Training' : 'Add New Training'}
                                        </h3>
                                        <button
                                            type="button"
                                            className="text-gray-400 hover:text-gray-500 focus:outline-none"
                                            onClick={handleClose}
                                        >
                                            <span className="sr-only">Close</span>
                                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                    </div>
                                    <div className="mt-4">
                                        <AddTraining 
                                            handleClose={handleClose} 
                                            handleAddTraining={handleAddTraining}
                                            training={editingTraining}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
};

export default TrainingList;



