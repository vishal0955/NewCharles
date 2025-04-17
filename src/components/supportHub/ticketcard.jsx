import React from "react";
import { Accordion, Button } from "react-bootstrap";
// import "@fortawesome/fontawesome-free/css/all.min.css";

const TicketCard = () => {
  return (
    <div className="bg-gray-50 h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <button className="text-gray-500 hover:text-gray-700">
                <i className="fas fa-arrow-left"></i>
              </button>
              <div className="ml-4 flex items-center">
                <i className="far fa-envelope text-gray-400 mr-2"></i>
                <span className="text-gray-900 font-medium">test</span>
                <span className="mx-2 text-gray-500">|</span>
                <span className="text-gray-600">John Doe from XYZ</span>
                <span className="ml-2 text-gray-400">#577709G115</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="!rounded-button bg-red-100 text-red-600 px-3 py-1.5 text-sm font-medium">
                Reply overdue
              </button>
              <button className="!rounded-button bg-gray-100 text-gray-700 px-3 py-1.5 text-sm font-medium">
                Actions <i className="fas fa-chevron-down ml-1"></i>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex">
        {/* Sidebar */}
        {/* <aside className="w-64 border-r border-gray-200 bg-white">
          <div className="p-4">
            <div className="flex items-center space-x-2">
              <i className="fas fa-folder text-gray-400"></i>
              <span className="font-medium">Marketing - All open (1)</span>
            </div>
            <div className="mt-4">
              <div className="bg-gray-50 p-3 rounded-lg">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-custom rounded-full flex-shrink-0"></div>
                  <div className="ml-3">
                    <div className="text-sm font-medium">test</div>
                    <div className="text-xs text-gray-500">John Doe</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </aside> */}

        {/* Ticket Content */}
        <div className="flex-1 flex">
          <div className="flex-1 overflow-auto">
            <div className="p-6">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-custom rounded-full"></div>
                    <div className="ml-3">
                      <div className="text-sm font-medium">John Doe</div>
                      <div className="text-xs text-gray-500">13:29</div>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    {["reply", "forward", "ellipsis-v"].map((icon, index) => (
                      <button key={index} className="text-gray-400 hover:text-gray-600">
                        <i className={`fas fa-${icon}`}></i>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Email Content */}
                <div className="prose max-w-none">
                  <p>test</p>
                  <p>Kind regards,</p>
                  <div className="mt-8 border-t pt-4">
                    <div className="text-sm">
                      <p className="font-medium">John Doe</p>
                      <p className="text-gray-600">Managing Director, XYZ Technology Group Ltd</p>
                      <div className="mt-4 space-y-1 text-gray-500">
                        <p>Email: John Doe.price@XYZ.global</p>
                        <p>Mobile: +1234567890</p>
                        <p>Website: www.XYZ.co.uk</p>
                      </div>
                      <div className="mt-4 flex space-x-4">
                        {["whatsapp", "linkedin", "facebook", "twitter", "instagram", "youtube"].map((icon, index) => (
                          <a key={index} href="#" className="text-gray-400 hover:text-gray-600">
                            <i className={`fab fa-${icon}`}></i>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Reply Section */}
              <div className="mt-6">
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
                  <div className="flex items-center space-x-2 mb-4">
                    {["Email", "Comment"].map((label, index) => (
                      <button key={index} className="!rounded-button bg-gray-100 text-gray-700 px-3 py-1.5 text-sm font-medium">
                        {label} {label === "Email" && <i className="fas fa-chevron-down ml-1"></i>}
                      </button>
                    ))}
                  </div>
                  <div className="relative">
                    <div className="flex items-center border-b border-gray-200 pb-2">
                      <div className="flex-1">
                        <input type="text" placeholder="To: John Doe" className="w-full border-0 focus:ring-0 text-sm"/>
                      </div>
                    </div>
                    <textarea rows="4" className="mt-2 w-full border-0 focus:ring-0 text-sm" placeholder="Write a message. Press '/' to highlight text to access AI commands."></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Ticket Details Sidebar */}
          <aside className="w-80 border-l border-gray-200 bg-white">
            <div className="p-4">
              <div className="mb-6">
                <div className="text-sm font-medium mb-2">Ticket owner</div>
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-custom rounded-full"></div>
                  <span className="ml-2 text-sm">Yvonne Osawa</span>
                </div>
              </div>

              <div className="mb-6">
                <div className="text-sm font-medium mb-2">Pipeline</div>
                <div className="text-sm text-custom">Marketing Pipeline</div>
              </div>

              {/* Ticket Actions */}
              <div className="space-y-4">
      <Accordion defaultActiveKey="0">
        {["Ticket Summary", "About this ticket", "Contacts (1)", "Companies (1)", "Deals (0)", "Tasks (0)", "Attachments", "Tickets (0)"].map((text, index) => (
          <Accordion.Item eventKey={String(index)} key={index}>
            <Accordion.Header>
              <div className="flex items-center justify-between w-full">
                <div className="text-sm font-medium">{text}</div>
                {text === "Tasks (0)" ? (
                  <button className="!rounded-button bg-custom text-white px-3 py-1 text-xs">Create task</button>
                ) : (
                  <button className="text-custom text-sm">{text.includes("(0)") ? "+ Add" : "Actions"}</button>
                )}
              </div>
            </Accordion.Header>
            <Accordion.Body>
              {/* You can add additional content here for each section */}
              {text === "Ticket Summary" && <div>Ticket details content...</div>}
              {text === "About this ticket" && <div>About this ticket content...</div>}
              {text === "Contacts (1)" && <div>Contact details...</div>}
              {text === "Companies (1)" && <div>Company details...</div>}
              {text === "Deals (0)" && <div>Deals section content...</div>}
              {text === "Tasks (0)" && <div>Task details content...</div>}
              {text === "Attachments" && <div>Attachment details...</div>}
              {text === "Tickets (0)" && <div>Tickets content...</div>}
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default TicketCard;
