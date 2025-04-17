import React, { useState } from "react";
import ActivityTab from "../deals/tabs/ActivityTab";
import NotesTab from "../deals/tabs/NotesTab";
import EmailsTab from "../deals/tabs/EmailsTab";
import CallsTab from "../deals/tabs/CallsTab";
import TasksTab from "../deals/tabs/TasksTab";
import MeetingsTab from "../deals/tabs/MeetingsTab";
import AboutContactForm from "./AboutContactForm";
import ContactForm from "./ContactForm";
import CreateDealModal from "../deals/ADdDealForm";
import { Link } from "react-router-dom";
import { Button, Accordion, Dropdown } from "react-bootstrap";
import {
  FaChevronRight,
  FaChevronDown,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { useSelector } from "react-redux";

const ContactDetailPage = () => {
  const [activeTab, setActiveTab] = useState("Activity");
  const [filterDate, setFilterDate] = useState("1/5/26");
  const [activities, setActivities] = useState([
    {
      id: 1,
      type: "status_change",
      content: "Deal moved to Qualified by Integration.",
      date: "16 Dec 2024 at 13:10 GMT",
    },
    {
      id: 2,
      type: "creation",
      content: "This deal was created",
      date: "16 Dec 2024 at 13:10 GMT",
    },
  ]);

  const menuItems = [
    {
      title: "Companies (1)",
      content: (
        <div>
          <div className="d-flex align-items-center mb-2">
            <span className="badge bg-primary me-2">Primary</span>
            <span className="fw-bold">zohoinvoice.com</span>
          </div>
          <div className="d-flex align-items-center">
            <a
              href="https://sender.zohoinvoice.com"
              className="text-decoration-none text-info"
              target="_blank"
              rel="noopener noreferrer"
            >
              sender.zohoinvoice.com <FaExternalLinkAlt className="ms-1" />
            </a>
          </div>
          <p className="mt-2 mb-0">Phone: --</p>
        </div>
      ),
    },
    {
      title: "Contact (0)",
      content: (
        <div>
          <div className="d-flex align-items-center mb-2">
            <span className="fw-bold">
              See the people associated with this record.
            </span>
          </div>
        </div>
      ),
    },
    {
      title: "Leads (0)",
      content: (
        <div>
          <div className="d-flex align-items-center mb-2">
            <span className="badge bg-primary me-2">Primary</span>
            <span className="fw-bold">zohoinvoice.com</span>
          </div>
          <div className="d-flex align-items-center">
            <a
              href="https://sender.zohoinvoice.com"
              className="text-decoration-none text-info"
              target="_blank"
              rel="noopener noreferrer"
            >
              sender.zohoinvoice.com <FaExternalLinkAlt className="ms-1" />
            </a>
          </div>
          <p className="mt-2 mb-0">Phone: --</p>
        </div>
      ),
    },

    {
      title: "Deals (0)",
      content: (
        <div>
          <div className="d-flex align-items-center mb-2">
            <span className="fw-bold">
              Track the revenue opportunities associated with this record.
            </span>
          </div>
        </div>
      ),
    },

    {
      title: "Tickets (2)",
      content: (
        <div>
          <div className="d-flex align-items-center mb-2">
            <span className="fw-bold">
              Track the customer requests associated with this record.
            </span>
          </div>
        </div>
      ),
    },
    {
      title: "Invoice (0)",
      content: (
        <div>
          <div className="d-flex align-items-center mb-2">
            <span className="fw-bold">
              Send your customer a request for payment and associate it with
              this record.
            </span>
          </div>
          <div className="d-flex align-items-center">
            <button
              style={{
                border: "none",
                background: "none",
                color: "blue",
                cursor: "pointer",
              }}
            >
              Set up Payment
            </button>
          </div>
        </div>
      ),
      dropdown: (
        <Dropdown>
          <Dropdown.Toggle
            variant="link"
            className="p-0 text-secondary fw-bold"
          >
            Add
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#">Action</Dropdown.Item>
            <Dropdown.Item href="#">Another action</Dropdown.Item>
            <Dropdown.Item href="#">Something else here</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      ),
    },

    {
      title: "Health Score",
      content: (
        <div>
          <div className="d-flex align-items-center mb-2">
            <span className="fw-bold">
              See the people associated with this record.
            </span>
          </div>
        </div>
      ),
    },

    {
      title: "Lead Score",
      content: (
        <div>
          <div className="d-flex align-items-center mb-2">
            <span className="fw-bold">
              See the people associated with this record.
            </span>
          </div>
        </div>
      ),
    },
    {
      title: "Payment (0)",
      content: (
        <div>
          <div className="d-flex align-items-center mb-2">
            <span className="fw-bold">
              Give customers a fast, flexible way to pay. Add a payment link to
              accept a payment and associate it with this record.
            </span>
          </div>
          <div className="d-flex align-items-center justify-content-center borderlessed">
            <button>set up Payment</button>
          </div>
        </div>
      ),
    },

    {
      title: 'Payment {""}',
      content: (
        <div>
          <div className="d-flex align-items-center mb-2">
            <span className="fw-bold">
              Automate subscription management and recurring billing from this
              record.
            </span>
          </div>
        </div>
      ),
      dropdown: (
        <Dropdown>
          <Dropdown.Toggle
            variant="link"
            className="p-0 text-secondary fw-bold"
          >
            Add
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#">Action</Dropdown.Item>
            <Dropdown.Item href="#">Another action</Dropdown.Item>
            <Dropdown.Item href="#">Something else here</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      ),
    },
  ];

  const tabs = ["Activity", "Notes", "Emails", "Tasks", "Meetings"];

  const tabComponents = {
    Activity: ActivityTab,
    Notes: NotesTab,
    Emails: EmailsTab,
    // 'Calls': CallsTab,
    Tasks: TasksTab,
    Meetings: MeetingsTab,
  };

  const CurrentTabComponent = tabComponents[activeTab];

  const contactData = {
    name: "Nikunj",
    company: "zoho.com",
    email: "message-service@sender.zoho.com",
    formData: {
      email: "nikunj.zoho@gmail.com",
      phone: "",
      company: "",
      leadStatus: "",
      lifecycleStage: "Lead",
      buyingRole: "",
      contactOwner: "",
    },
  };

  const [isContactModalOpen, setIsModalContactOpen] = useState(false);
  const handleOpenModal = () => {
    setIsModalContactOpen(true);
    document.body.classList.add("modal-open");
  };

  const handleCloseModal = () => {
    setIsModalContactOpen(false);
    document.body.classList.remove("modal-open"); //Remove modal-open class
  };
  const darkMode = useSelector((state) => state.theme.isDarkMode);
  const [isCreateDealModalOpen, setIsCreateDealModalOpen] = useState(false);

  // Function to handle the creation of a new deal
  const handleCreateDeal = (dealData) => {
    // Handle the new deal data here
    console.log("New deal:", dealData);
    setIsCreateDealModalOpen(false);
  };

  // Function to add a new deal
  const addNewDeal = () => {
    setIsCreateDealModalOpen(true);
  };

  return (
    <div className="w-full">
      {/* Header */}
      <div className="flex justify-between items-center p-4 border-b">
        <div>
          <Link
            to="/crm/customers"
            className="text-gray-800 hover:text-gray-600 flex items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Contacts
          </Link>
        </div>
        <div className="flex gap-2">
          <button className="inv-filter-button">Actions</button>
          <button className="inv-new-button">Customize record</button>
        </div>
      </div>

      <div className="row">
        {/* Left Sidebar */}
        <div className="col-md-3 p-4 border-r">
          <div className="mb-6 text-center">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-2xl">{contactData.name[0]}</span>
            </div>
            <h5 className="font-medium">{contactData.name}</h5>
            <p className="text-sm text-gray-500">{contactData.company}</p>
            <p className="text-sm text-gray-500 mb-4">{contactData.email}</p>

            <div className="flex justify-center gap-3 mb-4">
              <button className=" p-2 rounded-full hover:bg-gray-100">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
              </button>
              <button className="p-2 rounded-full hover:bg-gray-100">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </button>
              <button className="p-2 rounded-full hover:bg-gray-100">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </button>
              <button className="p-2 rounded-full hover:bg-gray-100">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </button>
              <button className="p-2 rounded-full hover:bg-gray-100">
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* About Contact Form */}
          <div className="border rounded-lg mb-4">
            <AboutContactForm data={contactData.formData} />
          </div>
        </div>

        {/* Middle Section - Activities */}
        <div className={`${darkMode ? "dark-mode " : null} col-md-6 bg-white rounded-lg shadow`}>
          {/* Tabs */}
          <div className="border-b">
            <div className="">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  className={`px-4 py-2 text-sm font-medium ${
                    activeTab === tab
                      ? "text-blue-600 border-b-2 border-blue-600"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Search and Filter */}
          <div className="p-4 border-b">
            <div className=" gap-4">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Search activities"
                 className={`${darkMode ? "dark-mode " : null} w-full px-3 py-2 border rounded-lg`} />
              </div>
              <div className="flex gap-2 mt-2">
                <button className={`${darkMode ? "dark-mode " : null} px-3 py-2 border rounded-lg text-sm flex items-center gap-2`}>
                  Filter activity
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <button className={`${darkMode ? "dark-mode " : null} px-3 py-2 border rounded-lg text-sm flex items-center gap-2`}>
                  All users
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <button className={`${darkMode ? "dark-mode " : null} px-3 py-2 border rounded-lg text-sm flex items-center gap-2`}>
                  All teams
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Tab Content */}
          <CurrentTabComponent activities={activities} />
        </div>

        {/* Right Sidebar */}
        <div className="col-md-3 p-4 border-l">
          <Accordion defaultActiveKey="0">
            {menuItems.map((item, index) => (
              <Accordion.Item eventKey={index.toString()} key={index}>
                <Accordion.Header>
                  <div className="d-flex align-items-center w-100">
                    {/* Dropdown Icon Start Me */}
                   {/* <FaChevronRight className="me-2" style={{ color: "blue" }} />  */}
                    <div className="flex-grow-1">{item.title}</div>
                    <Button variant="link" className="p-0 text-info text-decoration-none">
                      + Add
                    </Button>
                  </div>
                </Accordion.Header>
                <Accordion.Body>{item.content}</Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </div>
      </div>

      {isContactModalOpen && (
        <>
          <div className="modal fade show d-block" role="dialog">
            <div className="modal-dialog modal-md" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <button
                    type="button"
                    className="btn-close"
                    aria-label="Close"
                    onClick={handleCloseModal}
                  />
                </div>
                <div className="modal-body">
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

      <CreateDealModal
        isOpen={isCreateDealModalOpen}
        onClose={() => setIsCreateDealModalOpen(false)}
        onSubmit={handleCreateDeal}
      />
    </div>
  );
};

export default ContactDetailPage;
