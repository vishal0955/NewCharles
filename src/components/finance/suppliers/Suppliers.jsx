import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Pagination } from "react-bootstrap";
import { useSelector } from "react-redux";

const Suppliers = () => {

  const darkMode = useSelector((state) => (state.theme.isDarkMode))

  const initialTasks = [
    {
      id: 1,
      supplierName: "Tech Solutions Ltd",
      owner: "John Smith",
      createDate: "23 Dec 2024 17:24 GMT",
      phoneNumber: "+1 234 567 8900",
      lastActivityDate: "23 Dec 2024 17:40 GMT",
      avatar: "https://i.ibb.co/dJ68VsWW/image.png",
    },
    {
      id: 2,
      supplierName: "Global Supplies Inc",
      owner: "Sarah Johnson",
      createDate: "22 Dec 2024 09:15 GMT",
      phoneNumber: "+1 987 654 3210",
      lastActivityDate: "22 Dec 2024 15:30 GMT",
      avatar: "https://i.ibb.co/dJ68VsWW/image.png",
    },
    {
      id: 3,
      supplierName: "Tech Solutions Ltd",
      owner: "John Smith",
      createDate: "23 Dec 2024 17:24 GMT",
      phoneNumber: "+1 234 567 8900",
      lastActivityDate: "23 Dec 2024 17:40 GMT",
      avatar: "https://i.ibb.co/dJ68VsWW/image.png",
    },
    {
      id: 4,
      supplierName: "Global Supplies Inc",
      owner: "Sarah Johnson",
      createDate: "22 Dec 2024 09:15 GMT",
      phoneNumber: "+1 987 654 3210",
      lastActivityDate: "22 Dec 2024 15:30 GMT",
      avatar: "https://i.ibb.co/dJ68VsWW/image.png",
    },
    {
      id: 5,
      supplierName: "Tech Solutions Ltd",
      owner: "John Smith",
      createDate: "23 Dec 2024 17:24 GMT",
      phoneNumber: "+1 234 567 8900",
      lastActivityDate: "23 Dec 2024 17:40 GMT",
      avatar: "https://i.ibb.co/dJ68VsWW/image.png",
    },
    // {
    //   id: ,
    //   supplierName: "Global Supplies Inc",
    //   owner: "Sarah Johnson",
    //   createDate: "22 Dec 2024 09:15 GMT",
    //   phoneNumber: "+1 987 654 3210",
    //   lastActivityDate: "22 Dec 2024 15:30 GMT",
    //   avatar: "https://i.ibb.co/dJ68VsWW/image.png",
    // },
    {
      id: 6,
      supplierName: "Tech Solutions Ltd",
      owner: "John Smith",
      createDate: "23 Dec 2024 17:24 GMT",
      phoneNumber: "+1 234 567 8900",
      lastActivityDate: "23 Dec 2024 17:40 GMT",
      avatar: "https://i.ibb.co/dJ68VsWW/image.png",
    },
    {
      id: 7,
      supplierName: "Global Supplies Inc",
      owner: "Sarah Johnson",
      createDate: "22 Dec 2024 09:15 GMT",
      phoneNumber: "+1 987 654 3210",
      lastActivityDate: "22 Dec 2024 15:30 GMT",
      avatar: "https://i.ibb.co/dJ68VsWW/image.png",
    },
    {
      id: 8,
      supplierName: "Tech Solutions Ltd",
      owner: "John Smith",
      createDate: "23 Dec 2024 17:24 GMT",
      phoneNumber: "+1 234 567 8900",
      lastActivityDate: "23 Dec 2024 17:40 GMT",
      avatar: "https://i.ibb.co/dJ68VsWW/image.png",
    },
    {
      id: 9,
      supplierName: "Global Supplies Inc",
      owner: "Sarah Johnson",
      createDate: "22 Dec 2024 09:15 GMT",
      phoneNumber: "+1 987 654 3210",
      lastActivityDate: "22 Dec 2024 15:30 GMT",
      avatar: "https://i.ibb.co/dJ68VsWW/image.png",
    },
    {
      id: 10,
      supplierName: "Tech Solutions Ltd",
      owner: "John Smith",
      createDate: "23 Dec 2024 17:24 GMT",
      phoneNumber: "+1 234 567 8900",
      lastActivityDate: "23 Dec 2024 17:40 GMT",
      avatar: "https://i.ibb.co/dJ68VsWW/image.png",
    },
    {
      id: 11,
      supplierName: "Global Supplies Inc",
      owner: "Sarah Johnson",
      createDate: "22 Dec 2024 09:15 GMT",
      phoneNumber: "+1 987 654 3210",
      lastActivityDate: "22 Dec 2024 15:30 GMT",
      avatar: "https://i.ibb.co/dJ68VsWW/image.png",
    },
    {
      id: 12,
      supplierName: "Tech Solutions Ltd",
      owner: "John Smith",
      createDate: "23 Dec 2024 17:24 GMT",
      phoneNumber: "+1 234 567 8900",
      lastActivityDate: "23 Dec 2024 17:40 GMT",
      avatar: "https://i.ibb.co/dJ68VsWW/image.png",
    },
    {
      id: 13,
      supplierName: "Global Supplies Inc",
      owner: "Sarah Johnson",
      createDate: "22 Dec 2024 09:15 GMT",
      phoneNumber: "+1 987 654 3210",
      lastActivityDate: "22 Dec 2024 15:30 GMT",
      avatar: "https://i.ibb.co/dJ68VsWW/image.png",
    },
    {
      id: 14,
      supplierName: "Tech Solutions Ltd",
      owner: "John Smith",
      createDate: "23 Dec 2024 17:24 GMT",
      phoneNumber: "+1 234 567 8900",
      lastActivityDate: "23 Dec 2024 17:40 GMT",
      avatar: "https://i.ibb.co/dJ68VsWW/image.png",
    },
    {
      id: 15,
      supplierName: "Global Supplies Inc",
      owner: "Sarah Johnson",
      createDate: "22 Dec 2024 09:15 GMT",
      phoneNumber: "+1 987 654 3210",
      lastActivityDate: "22 Dec 2024 15:30 GMT",
      avatar: "https://i.ibb.co/dJ68VsWW/image.png",
    },
    // Add more suppliers here if needed
  ];

  const [tasks, setTasks] = useState(initialTasks);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  const indexOfFirstItem = (currentPage - 1) * itemsPerPage;
  const indexOfLastItem = currentPage * itemsPerPage;
  const paginatedDesignations = tasks.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(tasks.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="min-h-screen">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="py-4">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4">
              <h1 className="text-2xl font-semibold">Suppliers</h1>
              <span className="text-gray-500 text-sm">13,613 records</span>
            </div>
            <div className="flex flex-wrap gap-2 sm:gap-3 justify-end w-full">
              <button className={`${darkMode ? "card-dark" : "bg-white" } rounded w-full sm:w-auto !rounded-button px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 hover:bg-gray-50`}>
                See Target Accounts
              </button>
              <button className={`${darkMode ? "card-dark" : "bg-white" } rounded w-full sm:w-auto !rounded-button px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 hover:bg-gray-50`}>
                Data Quality
              </button>
              <div className="relative w-full sm:w-auto">
                <button className={`${darkMode ? "card-dark" : "bg-white" } rounded w-full !rounded-button px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 hover:bg-gray-50`}>
                  Actions <i className="fas fa-chevron-down ml-2" />
                </button>
              </div>
              <button className={`${darkMode ? "card-dark" : "bg-white" } rounded w-full sm:w-auto !rounded-button px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 hover:bg-gray-50`}>
                <i className="fas fa-file-import mr-2" />
                Import
              </button>
              <Link to="/finance/createsupplier" className="w-full sm:w-auto">
                <button className="w-full rounded !rounded-button px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-500">
                  <i className="fas fa-plus mr-2" />
                  Create supplier
                </button>
              </Link>
            </div>
          </div>
        </header>

        <div className={`${darkMode ? "card-dark" : "bg-white" } mt-4 bg-white rounded shadow`}>
          <div className="border-b border-gray-200 px-4 py-3">
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 gap-2">
              <button className="w-full sm:w-auto px-4 py-2 text-sm font-medium border-b-2 border-custom">
                All suppliers
              </button>
              <button className="w-full sm:w-auto px-4 py-2 text-sm font-medium hover:text-gray-700">
                My suppliers
              </button>
              <button className={`${darkMode ? "card-dark" : "bg-white" } w-full sm:w-auto rounded px-4 py-2 text-sm font-medium text-custom bg-blue-50 hover:bg-blue-100 !rounded-button`}>
                Add view (2/50)
              </button>
              <button className="w-full sm:w-auto px-4 py-2 text-sm font-medium text-custom hover:text-custom/90">
                All Views
              </button>
            </div>
          </div>

          <div className="px-4 py-3 border-b border-gray-200">
            <div className="flex flex-wrap gap-3 items-center">
              <div className="relative w-full sm:w-auto">
                <button className={`${darkMode ? "card-dark" : "bg-white" } w-full sm:w-auto !rounded-button text-sm font-medium text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 px-4 py-2 rounded`}>
                  Supplier owner <i className="fas fa-chevron-down ml-2" />
                </button>
              </div>
              <div className="relative w-full sm:w-auto">
                <button className={`${darkMode ? "card-dark" : "bg-white" } w-full sm:w-auto !rounded-button text-sm font-medium text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 px-4 py-2 rounded`}>
                  Create date <i className="fas fa-chevron-down ml-2" />
                </button>
              </div>
              <div className="relative w-full sm:w-auto">
                <button className={`${darkMode ? "card-dark" : "bg-white" } w-full sm:w-auto !rounded-button text-sm font-medium text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 px-4 py-2 rounded`}>
                  Last activity date <i className="fas fa-chevron-down ml-2" />
                </button>
              </div>
              <div className="relative w-full sm:w-auto">
                <button className={`${darkMode ? "card-dark" : "bg-white" } w-full sm:w-auto !rounded-button text-sm font-medium text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 px-4 py-2 rounded`}>
                  Lead status <i className="fas fa-chevron-down ml-2" />
                </button>
              </div>
              <div className="w-full sm:w-auto">
                <button className={`${darkMode ? "card-dark" : "bg-white" } w-full sm:w-auto !rounded-button text-sm font-medium text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 px-4 py-2 rounded`}>
                  More <i className="fas fa-plus ml-2" />
                </button>
              </div>
              <div className="w-full sm:w-auto">
                <button className={`${darkMode ? "card-dark" : "bg-white" } w-full sm:w-auto !rounded-button text-sm font-medium text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 px-4 py-2 rounded`}>
                  Advanced filters
                </button>
              </div>
            </div>
          </div>

          <div className="px-4 py-3 border-b border-gray-200">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              {/* Search Input */}
              <div className="relative w-full sm:max-w-sm">
                <input
                  type="text"
                  placeholder="Search name, phone, or email"
                  className={`${darkMode ? "card-dark" : "bg-white" } w-full pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-md focus:ring-custom focus:border-custom`}
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <i className="fas fa-search text-gray-400" />
                </div>
              </div>

              {/* Button Actions */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-3 w-full sm:w-auto">
                <button className={`${darkMode ? "card-dark" : "bg-white" } w-full sm:w-auto !rounded-button px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 rounded`}>
                  <i className="fas fa-file-alt mr-2" />
                  Create report
                </button>
                <button className={`${darkMode ? "card-dark" : "bg-white" } w-full sm:w-auto !rounded-button px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 rounded`}>
                  <i className="fas fa-file-export mr-2" />
                  Export
                </button>
                <button className={`${darkMode ? "card-dark" : "bg-white" } w-full sm:w-auto !rounded-button px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 rounded`}>
                  <i className="fas fa-columns mr-2" />
                  Edit columns
                </button>
              </div>
            </div>
          </div>

          {/* Suppliers Table */}
          <div className="overflow-x-auto">
            <table className={`${darkMode ? "table-dark" : "bg-white" } min-w-full divide-y divide-gray-200`}>
              <thead>
                <tr>
                  <th scope="col" className="w-12 px-6 py-3">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 text-custom focus:ring-custom"
                    />
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                  >
                    Supplier name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                  >
                    Supplier owner
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                  >
                    Create date (GMT)
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                  >
                    Phone number
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                  >
                    Last activity date (GMT)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {paginatedDesignations.map((supplier) => (
                  <tr key={supplier.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 text-custom focus:ring-custom"
                      />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <img
                            className="h-10 w-10 rounded-full"
                            src={supplier.avatar}
                            alt="avatar"
                          />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium">
                            {supplier.supplierName}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-8 w-8">
                          <img
                            className="h-8 w-8 rounded-full"
                            src={supplier.avatar}
                            alt="avatar"
                          />
                        </div>
                        <div className="ml-3">
                          <div className="text-sm font-medium">
                            {supplier.owner}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      {supplier.createDate}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      {supplier.phoneNumber}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      {supplier.lastActivityDate}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination */}
        <div className="d-flex justify-content-between align-items-center mt-3">
          <div>
            Showing {indexOfFirstItem + 1} to{" "}
            {Math.min(indexOfLastItem, tasks.length)} of {tasks.length} entries
          </div>
          <Pagination>
            <Pagination.Prev
              disabled={currentPage === 1}
              onClick={() => handlePageChange(currentPage - 1)}
            />
            {Array.from({ length: totalPages }, (_, index) => (
              <Pagination.Item
                key={index}
                active={index + 1 === currentPage}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </Pagination.Item>
            ))}
            <Pagination.Next
              disabled={currentPage === totalPages}
              onClick={() => handlePageChange(currentPage + 1)}
            />
          </Pagination>
        </div>
      </div>
    </div>
  );
};

export default Suppliers;
