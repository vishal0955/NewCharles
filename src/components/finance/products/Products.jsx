import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Dropdown, Pagination } from "react-bootstrap";
import { useSelector } from "react-redux";

const Products = () => {
  const [products] = React.useState([
    {
      name: "Administration Per Hour",
      sku: "ADMINISTRATION-HOUR",
      date: "6 Dec 2024 15:46 GMT",
    },
    {
      name: "[ControlLabs] Commissioning Hour",
      sku: "Commissioning-Hour",
      date: "6 Dec 2024 12:04 GMT",
    },
    {
      name: "Control & Automation Consultant",
      sku: "Control-Automation-Consultant",
      date: "6 Dec 2024 10:49 GMT",
    },
    {
      name: "Administration Per Hour",
      sku: "ADMINISTRATION-HOUR",
      date: "6 Dec 2024 15:46 GMT",
    },
    {
      name: "[ControlLabs] Commissioning Hour",
      sku: "Commissioning-Hour",
      date: "6 Dec 2024 12:04 GMT",
    },
    {
      name: "Control & Automation Consultant",
      sku: "Control-Automation-Consultant",
      date: "6 Dec 2024 10:49 GMT",
    },
    {
      name: "Administration Per Hour",
      sku: "ADMINISTRATION-HOUR",
      date: "6 Dec 2024 15:46 GMT",
    },
    {
      name: "[ControlLabs] Commissioning Hour",
      sku: "Commissioning-Hour",
      date: "6 Dec 2024 12:04 GMT",
    },
    {
      name: "Control & Automation Consultant",
      sku: "Control-Automation-Consultant",
      date: "6 Dec 2024 10:49 GMT",
    },
    {
      name: "Administration Per Hour",
      sku: "ADMINISTRATION-HOUR",
      date: "6 Dec 2024 15:46 GMT",
    },
    {
      name: "[ControlLabs] Commissioning Hour",
      sku: "Commissioning-Hour",
      date: "6 Dec 2024 12:04 GMT",
    },
    {
      name: "Control & Automation Consultant",
      sku: "Control-Automation-Consultant",
      date: "6 Dec 2024 10:49 GMT",
    },
    {
      name: "Administration Per Hour",
      sku: "ADMINISTRATION-HOUR",
      date: "6 Dec 2024 15:46 GMT",
    },
    {
      name: "[ControlLabs] Commissioning Hour",
      sku: "Commissioning-Hour",
      date: "6 Dec 2024 12:04 GMT",
    },
    {
      name: "Control & Automation Consultant",
      sku: "Control-Automation-Consultant",
      date: "6 Dec 2024 10:49 GMT",
    },
    {
      name: "Administration Per Hour",
      sku: "ADMINISTRATION-HOUR",
      date: "6 Dec 2024 15:46 GMT",
    },
    {
      name: "[ControlLabs] Commissioning Hour",
      sku: "Commissioning-Hour",
      date: "6 Dec 2024 12:04 GMT",
    },
    {
      name: "Control & Automation Consultant",
      sku: "Control-Automation-Consultant",
      date: "6 Dec 2024 10:49 GMT",
    },
    {
      name: "Administration Per Hour",
      sku: "ADMINISTRATION-HOUR",
      date: "6 Dec 2024 15:46 GMT",
    },
    {
      name: "[ControlLabs] Commissioning Hour",
      sku: "Commissioning-Hour",
      date: "6 Dec 2024 12:04 GMT",
    },
    {
      name: "Control & Automation Consultant",
      sku: "Control-Automation-Consultant",
      date: "6 Dec 2024 10:49 GMT",
    },
    {
      name: "Administration Per Hour",
      sku: "ADMINISTRATION-HOUR",
      date: "6 Dec 2024 15:46 GMT",
    },
    {
      name: "[ControlLabs] Commissioning Hour",
      sku: "Commissioning-Hour",
      date: "6 Dec 2024 12:04 GMT",
    },
    {
      name: "Control & Automation Consultant",
      sku: "Control-Automation-Consultant",
      date: "6 Dec 2024 10:49 GMT",
    },
  ]);

  const [tasks, setTasks] = useState(products);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  const indexOfFirstItem = (currentPage - 1) * itemsPerPage;
  const indexOfLastItem = currentPage * itemsPerPage;
  const paginatedDesignations = tasks.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(tasks.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const darkMode = useSelector((state) => (state.theme.isDarkMode))
  return (
    <div className="conatiner">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-6">
            {/* Left: Dropdown + Record Count */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 gap-2">
              <div className="relative">
                <button className={`${darkMode ? "dark-mode" : "bg-white" } inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded hover:bg-gray-50`}>
                  Products
                  <i className="fas fa-chevron-down ml-2 text-xs" />
                </button>
              </div>
              <span className="text-sm text-gray-500">60 records</span>
            </div>

            {/* Right: Actions */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-3 gap-2">
              <button className={`${darkMode ? "dark-mode" : "bg-white" } inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded hover:bg-gray-50`}>
                Actions
                <i className="fas fa-chevron-down ml-2 text-xs" />
              </button>
              <button className={`${darkMode ? "dark-mode" : "bg-white" } inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded hover:bg-gray-50`}>
                <i className="fas fa-file-import mr-2" />
                Import
              </button>
              <Link to="/finance/createproduct">
                <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded">
                  <i className="fas fa-plus mr-2" />
                  Create product
                </button>
              </Link>
            </div>
          </div>

          <Row className="mb-4">
            <Col xs={12}>
              <Row className="g-3">
                <Col xs={12} sm={6} md={3}>
                  <div className="inv-stat-box p-3 border rounded text-center d-flex gap-2">
                    <div className="inv-stat-icon inv-stat-icon-primary mb-2">
                      <i
                        className="bi bi-currency-pound"
                        style={{ fontSize: "1.5rem" }}
                      />
                    </div>
                    <div>
                      <div className="inv-stat-label">Total Products</div>
                      <p className="inv-stat-value mb-0">£1.18M</p>
                    </div>
                  </div>
                </Col>
                <Col xs={12} sm={6} md={3}>
                  <div className="inv-stat-box p-3 border rounded text-center d-flex gap-2">
                    <div className="inv-stat-icon inv-stat-icon-warning mb-2">
                      <i
                        className="bi bi-clock"
                        style={{ fontSize: "1.5rem" }}
                      />
                    </div>
                    <div>
                      <div className="inv-stat-label">Product selling</div>
                      <p className="inv-stat-value mb-0">£616.62K</p>
                    </div>
                  </div>
                </Col>
                <Col xs={12} sm={6} md={3}>
                  <div className="inv-stat-box p-3 border rounded text-center d-flex gap-2">
                    <div className="inv-stat-icon inv-stat-icon-danger mb-2">
                      <i
                        className="bi bi-x-circle-fill"
                        style={{ fontSize: "1.5rem" }}
                      />
                    </div>
                    <div>
                      <div className="inv-stat-label">
                        Recently Selling Product
                      </div>
                      <p className="inv-stat-value mb-0">£590.58K</p>
                    </div>
                  </div>
                </Col>
                <Col xs={12} sm={6} md={3}>
                  <div className="inv-stat-box p-3 border rounded text-center d-flex gap-2">
                    <div className="inv-stat-icon inv-stat-icon-neutral mb-2">
                      <i
                        className="bi bi-plus-circle-fill"
                        style={{ fontSize: "1.5rem" }}
                      />
                    </div>
                    <div>
                      <div className="inv-stat-label">
                        Total Amount of Product
                      </div>
                      <p className="inv-stat-value mb-0">£201.02K</p>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>

          <div className={`${darkMode ? "card-dark" : "bg-white" } bg-white border shadow rounded-lg`}>
            {/* Filter Header */}
            <div className="border-b border-gray-200 px-4 py-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex flex-wrap items-center gap-2">
                  <button className={`${darkMode ? "dark-mode" : "bg-white" } inline-flex items-center px-3 py-1.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded hover:bg-gray-50`}>
                    All products
                    <i className="fas fa-times ml-2 text-xs" />
                  </button>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search..."
                      className={`${darkMode ? "dark-mode" : "bg-white" } w-60 pl-3 pr-10 py-1.5 text-sm border-gray-300 rounded focus:ring-custom focus:border-custom`}
                    />
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <button className="text-custom hover:text-custom/90 text-sm font-medium">
                    Add view (2/50)
                  </button>
                  <button className="text-custom hover:text-custom/90 text-sm font-medium">
                    All Views
                  </button>
                </div>
              </div>
            </div>

            {/* Sorting & Search */}
            <div className="border-b border-gray-200 px-4 py-4">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <div className="flex flex-wrap items-center gap-3">
                  <button className={`${darkMode ? "dark-mode" : "bg-white" } inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded hover:bg-gray-50`}>
                    Create date
                    <i className="fas fa-chevron-down ml-2 text-xs" />
                  </button>
                  <button className={`${darkMode ? "dark-mode" : "bg-white" } inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded hover:bg-gray-50`}>
                    <i className="fas fa-plus mr-2" />
                    More
                  </button>
                  <button className={`${darkMode ? "dark-mode" : "bg-white" } inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded hover:bg-gray-50`}>
                    <i className="fas fa-filter mr-2" />
                    Advanced filters
                  </button>
                </div>

                <div className="relative w-full sm:w-64">
                  <input
                    type="text"
                    placeholder="Search name, description..."
                    className={`${darkMode ? "dark-mode" : "bg-white" } w-full pl-3 pr-10 py-2 text-sm border border-gray-300 rounded focus:ring-custom focus:border-custom`}
                  />
                  <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                    <i className="fas fa-search text-gray-400" />
                  </div>
                </div>
              </div>
            </div>

            {/* Table Section */}
            <div className={`${darkMode ? "dark-mode" : null } overflow-x-auto`}>
              <table className={`${darkMode ? "table-dark" : null } min-w-full divide-y `}>
                <thead>
                  <tr>
                    <th className="w-12 px-6 py-3">
                      <input
                        type="checkbox"
                        className="rounded border-gray-300 text-custom focus:ring-custom"
                      />
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Name <i className="fas fa-sort ml-1" />
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      SKU <i className="fas fa-sort ml-1" />
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Create Date (GMT) <i className="fas fa-sort ml-1" />
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {paginatedDesignations.map((products) => (
                    <tr key={products.id}>
                      <td className="">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          style={{ marginLeft: "20px" }}
                        />
                      </td>
                      <td className="d-none d-sm-table-cell p-3">
                        {products.name}
                      </td>

                      <td className="d-none d-sm-table-cell">{products.sku}</td>
                      <td className="d-none d-sm-table-cell">
                        {products.date}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="d-flex justify-content-between align-items-center mt-3 mb-3">
              <div style={{ marginLeft: "20px", marginBottom: "10px" }}>
                Showing {indexOfFirstItem + 1} to{" "}
                {Math.min(indexOfLastItem, products.length)} of{" "}
                {products.length} entries
              </div>
              <Pagination style={{ marginRight: "20px", marginBottom: "10px" }}>
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
      </div>
    </div>
  );
};

export default Products;
