import React, { useState } from "react";
import {
  Table,
  Button,
  Form,
  Dropdown,
  Pagination,
  Row,
  Col,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import CompanyForm from "./CompanyForm";
import { useSelector } from "react-redux";

const Company = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [companies] = useState([
    {
      logo: "🔹",
      name: "TechVision Solutions",
      website: "techvision.com",
      owner: "Sarah Johnson",
      date: "Jan 15, 2024",
      phone: "+1 (555) 123-4567",
      activity: "2 hours ago",
    },
    {
      logo: "⚙️",
      name: "DataFlow Systems",
      website: "dataflow.io",
      owner: "Michael Chen",
      date: "Jan 14, 2024",
      phone: "+1 (555) 987-6543",
      activity: "1 day ago",
    },
    {
      logo: "🔹",
      name: "TechVision Solutions",
      website: "techvision.com",
      owner: "Sarah Johnson",
      date: "Jan 15, 2024",
      phone: "+1 (555) 123-4567",
      activity: "2 hours ago",
    },
    {
      logo: "⚙️",
      name: "DataFlow Systems",
      website: "dataflow.io",
      owner: "Michael Chen",
      date: "Jan 14, 2024",
      phone: "+1 (555) 987-6543",
      activity: "1 day ago",
    },
    {
      logo: "🔹",
      name: "TechVision Solutions",
      website: "techvision.com",
      owner: "Sarah Johnson",
      date: "Jan 15, 2024",
      phone: "+1 (555) 123-4567",
      activity: "2 hours ago",
    },
    {
      logo: "⚙️",
      name: "DataFlow Systems",
      website: "dataflow.io",
      owner: "Michael Chen",
      date: "Jan 14, 2024",
      phone: "+1 (555) 987-6543",
      activity: "1 day ago",
    },
    {
      logo: "🔹",
      name: "TechVision Solutions",
      website: "techvision.com",
      owner: "Sarah Johnson",
      date: "Jan 15, 2024",
      phone: "+1 (555) 123-4567",
      activity: "2 hours ago",
    },
    {
      logo: "⚙️",
      name: "DataFlow Systems",
      website: "dataflow.io",
      owner: "Michael Chen",
      date: "Jan 14, 2024",
      phone: "+1 (555) 987-6543",
      activity: "1 day ago",
    },
    {
      logo: "🔹",
      name: "TechVision Solutions",
      website: "techvision.com",
      owner: "Sarah Johnson",
      date: "Jan 15, 2024",
      phone: "+1 (555) 123-4567",
      activity: "2 hours ago",
    },
    {
      logo: "⚙️",
      name: "DataFlow Systems",
      website: "dataflow.io",
      owner: "Michael Chen",
      date: "Jan 14, 2024",
      phone: "+1 (555) 987-6543",
      activity: "1 day ago",
    },
    {
      logo: "🔹",
      name: "TechVision Solutions",
      website: "techvision.com",
      owner: "Sarah Johnson",
      date: "Jan 15, 2024",
      phone: "+1 (555) 123-4567",
      activity: "2 hours ago",
    },
    {
      logo: "⚙️",
      name: "DataFlow Systems",
      website: "dataflow.io",
      owner: "Michael Chen",
      date: "Jan 14, 2024",
      phone: "+1 (555) 987-6543",
      activity: "1 day ago",
    },
    {
      logo: "🔹",
      name: "TechVision Solutions",
      website: "techvision.com",
      owner: "Sarah Johnson",
      date: "Jan 15, 2024",
      phone: "+1 (555) 123-4567",
      activity: "2 hours ago",
    },
    {
      logo: "⚙️",
      name: "DataFlow Systems",
      website: "dataflow.io",
      owner: "Michael Chen",
      date: "Jan 14, 2024",
      phone: "+1 (555) 987-6543",
      activity: "1 day ago",
    },
    {
      logo: "🔹",
      name: "TechVision Solutions",
      website: "techvision.com",
      owner: "Sarah Johnson",
      date: "Jan 15, 2024",
      phone: "+1 (555) 123-4567",
      activity: "2 hours ago",
    },
    {
      logo: "⚙️",
      name: "DataFlow Systems",
      website: "dataflow.io",
      owner: "Michael Chen",
      date: "Jan 14, 2024",
      phone: "+1 (555) 987-6543",
      activity: "1 day ago",
    },
  ]);

  const [tasks, setTasks] = useState(companies);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  const indexOfFirstItem = (currentPage - 1) * itemsPerPage;
  const indexOfLastItem = currentPage * itemsPerPage;
  const paginatedCompanies = companies.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(companies.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleCompanyClick = () => {
    console.log("Company clicked:");
    navigate("/crm/contactdetails");
  };

  const darkMode = useSelector((state) => state.theme.isDarkMode);

  return (
    <div className="container mt-4">
      <Row className="mb-3 ">
        <div className="d-flex justify-content-between">
          <div>
            <h4>
              Companies <span className="">12,453</span>
            </h4>
          </div>
          <div className="text-md-end mt-2 mt-md-0">
            <Button
              className={`${darkMode ? "card-dark" : null} inv-new-button`}
              onClick={handleOpenModal}
            >
              <i className="bi bi-plus-lg"></i> Add New
            </Button>
          </div>
        </div>
      </Row>

      <Row className="mb-4">
        <Col xs={12}>
          <Row>
            <Col xs={12} sm={3} className="mb-3 mb-sm-0">
              <div className={`${darkMode ? "card-dark" : null} border inv-stat-box`}>
                <div className="inv-stat-content">
                  <div className="inv-stat-icon inv-stat-icon-primary">
                    <i className="fa-solid fa-building"></i>
                  </div>
                  <div>
                    <div className="inv-stat-label">All Amount Companies</div>
                    <p className="inv-stat-value">14</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={3} className="mb-3 mb-sm-0">
              <div className={`${darkMode ? "card-dark" : null} border inv-stat-box`}>
                <div className="inv-stat-content">
                  <div className="inv-stat-icon inv-stat-icon-warning">
                    <i className="fa-regular fa-building"></i>
                  </div>
                  <div>
                    <div className="inv-stat-label">Recently Added</div>
                    <p className="inv-stat-value">15</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={3} className="mb-3 mb-sm-0">
              <div className={`${darkMode ? "card-dark" : null} border inv-stat-box`}>
                <div className="inv-stat-content">
                  <div className="inv-stat-icon inv-stat-icon-danger">
                    <i className="fa-solid fa-building"></i>
                  </div>
                  <div>
                    <div className="inv-stat-label">Active Companies</div>
                    <p className="inv-stat-value">10</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={12} sm={3}>
              <div className={`${darkMode ? "card-dark" : null} border inv-stat-box`}>
                <div className="inv-stat-content">
                  <div className="inv-stat-icon inv-stat-icon-neutral">
                    <i className="fa-regular fa-building"></i>
                  </div>
                  <div>
                    <div className="inv-stat-label">Inactive Companies</div>
                    <p className="inv-stat-value">12</p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col xs={12}>
          <div className="d-flex flex-wrap gap-2 align-items-center">
            <Dropdown>
              <Dropdown.Toggle
                variant="light"
                className={`${darkMode ? "card-dark" : null} inv-filter-button`}
              >
                Company owner
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#michael">Michael Chen</Dropdown.Item>
                <Dropdown.Item href="#sarah">Sarah Johnson</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown>
              <Dropdown.Toggle
                variant="light"
                className={`${darkMode ? "card-dark" : null} inv-filter-button`}
              >
                Create date
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#today">Today</Dropdown.Item>
                <Dropdown.Item href="#yesterday">Yesterday</Dropdown.Item>
                <Dropdown.Item href="#last7">Last 7 days</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown>
              <Dropdown.Toggle
                variant="light"
                className={`${darkMode ? "card-dark" : null} inv-filter-button`}
              >
                Last activity date
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#today">Today</Dropdown.Item>
                <Dropdown.Item href="#yesterday">Yesterday</Dropdown.Item>
                <Dropdown.Item href="#last7">Last 7 days</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown>
              <Dropdown.Toggle
                variant="light"
                className={`${darkMode ? "card-dark" : null} inv-filter-button`}
              >
                Lead status
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#new">New</Dropdown.Item>
                <Dropdown.Item href="#open">Open</Dropdown.Item>
                <Dropdown.Item href="#contacted">Contacted</Dropdown.Item>
                <Dropdown.Item href="#unqualified">Unqualified</Dropdown.Item>
                <Dropdown.Item href="#closed">Closed</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </Col>
      </Row>

      <div className={`${darkMode ? "card-dark" : null} border inv-main-card`}>
        <div className="inv-card-header">
          <Row className="align-items-center">
            <Col xs={12} md={8} className="mb-3 mb-md-0">
              <div className="inv-search-wrapper">
                <i className="bi bi-search inv-search-icon" />
                <input
                  type="text"
                  className={`${
                    darkMode ? "card-dark" : null
                  } inv-search-input`}
                  placeholder="Search companies..."
                  aria-label="Search companies"
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </Col>
            <Col xs={12} md={4} className="text-md-end">
              <Button
                variant="light"
                className={`${darkMode ? "card-dark" : null} inv-filter-button`}
              >
                <i className="bi bi-funnel me-2" /> Filters
              </Button>
            </Col>
          </Row>
        </div>

        <div className="table-responsive">
          <Table hover className={`${darkMode ? "table-dark" : null} mb-0`}>
            <thead>
              <tr>
                <th>
                  <Form.Check type="checkbox" />
                </th>
                <th>Company Name</th>
                <th>Owner</th>
                <th className="d-none d-md-table-cell">Created Date</th>
                <th className="d-none d-sm-table-cell">Phone</th>
                <th className="d-none d-sm-table-cell">Last Activity</th>
              </tr>
            </thead>

            <tbody>
              {paginatedCompanies.map((companies, index) => (
                <tr key={index}>
                  <td>
                    <Form.Check type="checkbox" />
                  </td>
                  <td onClick={handleCompanyClick}>
                    {companies.logo} {companies.name} <br />
                    <small className="text-muted">{companies.website}</small>
                  </td>
                  <td>{companies.owner}</td>
                  <td className="d-none d-md-table-cell">{companies.date}</td>
                  <td className="d-none d-sm-table-cell">{companies.phone}</td>
                  <td className="d-none d-sm-table-cell">
                    {companies.activity}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>

      <div className="d-flex justify-content-between align-items-center mt-3">
        <div>
          Showing {indexOfFirstItem + 1} to{" "}
          {Math.min(indexOfLastItem, companies.length)} of {companies.length}{" "}
          entries
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

      {isModalOpen && (
        <>
          <div className="modal fade show d-block" role="dialog">
            <div className="modal-dialog modal-md" role="document">
              <div className={`${darkMode ? "dark-mode" : null }  modal-content`}>
                <div className="modal-header">
                  <button
                    type="button"
                    className="btn-close"
                    aria-label="Close"
                    onClick={handleCloseModal}
                  />
                </div>
                <div className="modal-body">
                  <CompanyForm handleClose={handleCloseModal} />
                </div>
              </div>
            </div>
          </div>
          <div
            className="modal-backdrop fade show"
            onClick={handleCloseModal}
          ></div>
        </>
      )}
    </div>
  );
};

export default Company;
