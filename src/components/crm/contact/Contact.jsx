import React, { useState } from "react";
import ContactForm from "./ContactForm";
import { useNavigate } from "react-router-dom";
import { Pagination } from "react-bootstrap";
import { use } from "react";
import { useSelector } from "react-redux";

const ContactsList = () => {
  const [expand, setExpand] = useState(false);
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

  const handleCLick = () => {
    console.log("clicked");
    navigate("/crm/contactdetails");
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
    document.body.classList.add("modal-open");
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    document.body.classList.remove("modal-open");//Remove modal-open class
  };

 
  const [contacts] = useState([
    {
      id: 1,
      name: "Nikurj Kumar",
      //  initials: 'NK',
      email: "nikurj@example.com",
      jobTitle: "—",
      phoneNumber: "+91 ",
      companyName: "—",
    },
    {
      id: 2,
      name: "Nikurj Kumar",
      //  initials: 'NK',
      email: "nikurj@example.com",
      jobTitle: "—",
      phoneNumber: "+91 ",
      companyName: "—",
    },
    {
      id: 3,
      name: "Nikurj Kumar",
      //  initials: 'NK',
      email: "nikurj@example.com",
      jobTitle: "—",
      phoneNumber: "+91 ",
      companyName: "—",
    },
    {
      id: 4,
      name: "Nikurj Kumar",
      //  initials: 'NK',
      email: "nikurj@example.com",
      jobTitle: "—",
      phoneNumber: "+91 ",
      companyName: "—",
    },
    {
      id: 5,
      name: "Nikurj Kumar",
      //  initials: 'NK',
      email: "nikurj@example.com",
      jobTitle: "—",
      phoneNumber: "+91 ",
      companyName: "—",
    },
    {
      id: 6,
      name: "Nikurj Kumar",
      //  initials: 'NK',
      email: "nikurj@example.com",
      jobTitle: "—",
      phoneNumber: "+91 ",
      companyName: "—",
    },
    {
      id: 7,
      name: "Nikurj Kumar",
      //  initials: 'NK',
      email: "nikurj@example.com",
      jobTitle: "—",
      phoneNumber: "+91 ",
      companyName: "—",
    },
    {
      id: 8,
      name: "Nikurj Kumar",
      //  initials: 'NK',
      email: "nikurj@example.com",
      jobTitle: "—",
      phoneNumber: "+91 ",
      companyName: "—",
    },
    {
      id: 9,
      name: "Nikurj Kumar",
      //  initials: 'NK',
      email: "nikurj@example.com",
      jobTitle: "—",
      phoneNumber: "+91 ",
      companyName: "—",
    },
    {
      id: 10,
      name: "Nikurj Kumar",
      //  initials: 'NK',
      email: "nikurj@example.com",
      jobTitle: "—",
      phoneNumber: "+91 ",
      companyName: "—",
    },
    {
      id: 11,
      name: "Nikurj Kumar",
      //  initials: 'NK',
      email: "nikurj@example.com",
      jobTitle: "—",
      phoneNumber: "+91 ",
      companyName: "—",
    },
    {
      id: 12,
      name: "Nikurj Kumar",
      //  initials: 'NK',
      email: "nikurj@example.com",
      jobTitle: "—",
      phoneNumber: "+91 ",
      companyName: "—",
    },
    {
      id: 13,
      name: "Nikurj Kumar",
      //  initials: 'NK',
      email: "nikurj@example.com",
      jobTitle: "—",
      phoneNumber: "+91 ",
      companyName: "—",
    },
    {
      id: 14,
      name: "Nikurj Kumar",
      //  initials: 'NK',
      email: "nikurj@example.com",
      jobTitle: "—",
      phoneNumber: "+91 ",
      companyName: "—",
    },
    {
      id: 15,
      name: "Nikurj Kumar",
      //  initials: 'NK',
      email: "nikurj@example.com",
      jobTitle: "—",
      phoneNumber: "+91 ",
      companyName: "—",
    },

  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  const indexOfFirstItem = (currentPage - 1) * itemsPerPage;
  const indexOfLastItem = currentPage * itemsPerPage;
  const paginatedContacts = contacts.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(contacts.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

 
  const [selectedView, setSelectedView] = useState("all-contacts");
  const [selectedFilters, setSelectedFilters] = useState([]);

  const views = [
    { id: "all-contacts", name: "All contacts", count: 0 },
    { id: "open-opportunities", name: "Open opportunities", count: 0 },
    { id: "need-followup", name: "Need follow up", count: 0 },
    { id: "in-progress", name: "In progress", count: 0 },
    {
      id: "recently-assigned",
      name: "My recently assigned contacts",
      count: 0,
    },
  ];

  const handleFilterChange = (filterId) => {
    if (selectedFilters.includes(filterId)) {
      setSelectedFilters(selectedFilters.filter((id) => id !== filterId));
    } else {
      setSelectedFilters([...selectedFilters, filterId]);
    }
  };
  const darkMode = useSelector((state) => state.theme.isDarkMode);
  console.log(darkMode);

  return (
    <div className="container-fluid px-3 px-md-4 py-3">
      <div className="d-flex   justify-content-between mb-4 gap-2 gap-md-0">
        <div className=" align-items-center">
          <h4 className="mb-0 me-2">Contacts</h4>
          {/* <span className="text-muted small">24700 records</span> */}
        </div>
        
          <div className="dropdown order-sm-1 d-flex gap-1">
            <button
              className="inv-filter-button dropdown-toggle w-100"
              type="button"
              data-bs-toggle="dropdown"
            >
              Actions
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#import">
                  Import
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#export">
                  Export
                </a>
              </li>
            </ul>
            <button className="inv-new-button order-sm-2 w-100" onClick={handleOpenModal}>
            + Create
          </button>
          </div>
          
          
        
      </div>
      
      {/* Metrics Cards */}
      <div className="row g-3 mb-4">
        <div className="col-12 col-sm-6 col-md-3">
          <div className={`${darkMode ? "card-dark" : null } inv-stat-box h-100 `}>
            <div className="inv-stat-content">
              <div className="inv-stat-icon inv-stat-icon-primary">
                <i className="fa-solid fa-address-book"></i>
              </div>
              <div>
                <div className="inv-stat-label">Total Number Of Contact</div>
                <p className="inv-stat-value">2.18M</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-3">
          <div className={`${darkMode ? "card-dark" : null } inv-stat-box h-100 `}>
            <div className="inv-stat-content">
              <div className="inv-stat-icon inv-stat-icon-warning">
                <i className="fa-solid fa-address-card"></i>
              </div>
              <div>
                <div className="inv-stat-label">Not Contacted</div>
                <p className="inv-stat-value">618.02K</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-3">
          <div className={`${darkMode ? "card-dark" : null } inv-stat-box h-100 `}>
            <div className="inv-stat-content">
              <div className="inv-stat-icon inv-stat-icon-danger">
                <i className="fa-solid fa-id-card-clip"></i>
              </div>
              <div>
                <div className="inv-stat-label">New Contact This Month</div>
                <p className="inv-stat-value">990.58K</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-3">
          <div className={`${darkMode ? "card-dark" : null } inv-stat-box h-100 `}>
            <div className="inv-stat-content">
              <div className="inv-stat-icon inv-stat-icon-neutral">
                <i className="fa-solid fa-id-card"></i>
              </div>
              <div>
                <div className="inv-stat-label">New Recurring Contact</div>
                <p className="inv-stat-value">201.02K</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Views */}
      <div className="d-flex flex-wrap gap-2 mb-3">
        {views.map((view) => (
          <button
            key={view.id}
            className={`${darkMode ? "card-dark" : null } btn btn-sm ${
              selectedView === view.id
                ? "inv-new-button text-white active"
                : "inv-filter-button text-dark"
            }`}
            onClick={() => setSelectedView(view.id)}
          >
            {view.name}
          </button>
        ))}
        <button className="btn btn-sm btn-outline-primary rounded-3 px-3 px-sm-4">
          All Views
        </button>
      </div>

      {/* Filters */}
      <div className={`${darkMode ? "dark-mode" : null } card inv-main-card mb-4 `}>
        <div className="card-body">
          <div className="row g-2 mb-3">
            <div className="col-12 col-md-6 col-lg-3">
              <div className="inv-search-wrapper">
                <i className="bi bi-search inv-search-icon" />
                <input
                  type="text"
                  className={`${darkMode ? "dark-mode" : null } inv-search-input h-11`}
                  placeholder="Search Contacts..."
                  aria-label="Search Contacts"
                />
              </div>
            </div>
            <div className="col-6 col-md-3 col-lg-2">
              <div className="dropdown">
                <button
                  className={`${darkMode ? "dark-mode" : null } inv-filter-button dropdown-toggle w-100 text-start`}
                  type="button"
                  data-bs-toggle="dropdown"
                >
                  Contact owner
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#michael">
                      John Doe
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#sarah">
                      Jane Smith
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-6 col-md-3 col-lg-2">
              <div className="dropdown">
                <button
                  className={`${darkMode ? "dark-mode" : null } inv-filter-button dropdown-toggle w-100 text-start`}
                  type="button"
                  data-bs-toggle="dropdown"
                >
                  Create date
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#michael">
                      Today
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#sarah">
                      Yesterday
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#sarah">
                      Last 7 days
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-6 col-md-3 col-lg-2">
              <div className="dropdown">
                <button
                  className={`${darkMode ? "dark-mode" : null } inv-filter-button dropdown-toggle w-100 text-start`}
                  type="button"
                  data-bs-toggle="dropdown"
                >
                  Last activity date
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#michael">
                      Today
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#sarah">
                      Yesterday
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#sarah">
                      Last 7 days
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-6 col-md-3 col-lg-2">
              <div className="dropdown">
                <button
                  className={`${darkMode ? "dark-mode" : null } inv-filter-button dropdown-toggle w-100 text-start`}
                  type="button"
                  data-bs-toggle="dropdown"
                >
                  Lead status
                </button>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#michael">
                      New
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#sarah">
                      Open
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#sarah">
                      Contacted
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#sarah">
                      Unqualified
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#sarah">
                      Closed
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="table-responsive">
            <table className={`${darkMode ? "table-dark" : null } table inv-table`}>
              <thead >
                <tr className={`${darkMode ? "dark-mode" : null }`}>
                  <th style={{ width: "20px" }}>
                    <input
                      type="checkbox"
                      className="inv-checkbox"
                      id="selectAll"
                    />
                  </th>
                  <th>Name</th>
                  <th className="d-none d-md-table-cell">Email</th>
                  <th className="d-none d-sm-table-cell">Phone Number</th>
                  <th className="d-none d-lg-table-cell">Company Name</th>
                  <th className="d-none d-xl-table-cell">Lead Status</th>
                  <th className="d-none d-xl-table-cell">Lifecycle Stage</th>
                  <th className="d-none d-xl-table-cell">Source</th>
                  <th className="d-none d-xl-table-cell">Contact Owner</th>
                </tr>
              </thead>
              <tbody>
                {paginatedContacts.map((contact) => (
                  <tr key={contact.id} onClick={handleCLick}>
                    <td>
                      <input type="checkbox" className="form-check-input" />
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <div className="contact-avatar me-2">
                          {contact.initials}
                        </div>
                        <span className="d-inline-block text-truncate" style={{maxWidth: '150px'}}>
                          {contact.name}
                        </span>
                      </div>
                    </td>
                    <td className="d-none d-md-table-cell">
                      <span className="d-inline-block text-truncate" style={{maxWidth: '150px'}}>
                        {contact.email}
                      </span>
                    </td>
                    <td className="d-none d-sm-table-cell">{contact.phoneNumber}</td>
                    <td className="d-none d-lg-table-cell">{contact.companyName}</td>
                    <td className="d-none d-xl-table-cell">{contact.leadStatus}</td>
                    <td className="d-none d-xl-table-cell">{contact.lifecycleStage}</td>
                    <td className="d-none d-xl-table-cell">{contact.source}</td>
                    <td className="d-none d-xl-table-cell">{contact.contactOwner}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-between align-items-center mt-3">
        <div>
          Showing {indexOfFirstItem + 1} to{" "}
          {Math.min(indexOfLastItem, contacts.length)} of {contacts.length} entries
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
              <div className={`${darkMode ? "dark-mode" : "border-none" } modal-content`}>
                <div className={`${darkMode ? "dark-mode" : null } modal-header`}>
                  <button
                    type="button"
                    className="btn-close"
                    aria-label="Close"
                    onClick={handleCloseModal}
                  />
                </div>
                <div className={`${darkMode ? "dark-mode" : null } modal-body`}>
                  <ContactForm handleclose={handleCloseModal} />
                </div>
              </div>
            </div>
          </div>
          {/* Modal backdrop */}
          <div
            className="modal-backdrop fade show"
            onClick={handleCloseModal}
          ></div>
        </>
      )}
    </div>
  );
};

export default ContactsList;