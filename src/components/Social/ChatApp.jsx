import React, { useState } from "react";
import { useSelector } from "react-redux";

const ChatApp = () => {
  const [activeTab, setActiveTab] = useState("allChats");
  const [activeContact, setActiveContact] = useState("Mr richard");
  const [message, setMessage] = useState("hi");

  const contacts = [
    { id: 1, name: "gautam Bairagi" },
    { id: 2, name: "Mr. David" },
    { id: 3, name: "Mr richard" },
    { id: 4, name: "Rehan Mulani" },
    { id: 5, name: "Mr chris" },
  ];

  const handleSendMessage = (e) => {
    e.preventDefault();
    console.log("Sending message:", message);
    setMessage("");
  };

  const darkMode = useSelector((state) => state.theme.isDarkMode);

  return (
    <div className="container-fluid p-0">
      <div className="row g-0">
        {/* Sidebar */}
        <div
          className={`${darkMode ? "dark-mode" : null } col-md-3 col-12`}
          style={{
            
            borderRight: "1px solid #dee2e6",
            //   height: '100%',
            padding: 0,
            maxWidth: "300px",
          }}>
          {/* Tabs Navigation */}
          <div
          className={`${darkMode ? "dark-mode" : null }`}
            style={{
              display: "flex",
           
            }}>
            <div
            
              onClick={() => setActiveTab("allChats")}
              style={{
                backgroundColor:
                  activeTab === "allChats" ? "#004869" : "#ffffff",
                color: activeTab === "allChats" ? "white" : "#212529",
                border: "none",
                padding: "10px 15px",
                width: "120px",
                textAlign: "center",
                fontWeight: 500,
                cursor: "pointer",
                
              }}>
              All Chats
            </div>
            <div
              onClick={() => setActiveTab("favorites")}
              style={{
                backgroundColor:
                  activeTab === "favorites" ? "#004869" : "#ffffff",
                color: activeTab === "favorites" ? "white" : "#212529",
                border: "none",
                padding: "10px 15px",
                width: "120px",
                textAlign: "center",
                fontWeight: 500,
                cursor: "pointer",
              }}>
              Favorites
            </div>
          </div>

          {/* Search Box */}
          <div
            style={{
              padding: "10px",
              backgroundColor: "#ffffff",
            }}>
            <input
              type="text"
              placeholder="Search"
              style={{
                borderRadius: "5px",
                border: "1px solid #ced4da",
                padding: "8px 12px",
                width: "100%",
              }}
            />
          </div>

          {/* Contact List */}
          <div
            style={{
              overflowY: "auto",
              height: "calc(100% - 100px)",
            }}>
            {contacts.map((contact) => (
              <div
                key={contact.id}
                onClick={() => setActiveContact(contact.name)}
                style={{
                  padding: "10px 15px",
                  borderBottom: "1px solid #f5f5f5",
                  cursor: "pointer",
                  backgroundColor:
                    activeContact === contact.name ? "#004869" : "#ffffff",
                  color: activeContact === contact.name ? "white" : "#000000",
                  display: "flex",
                  alignItems: "center",
                }}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      overflow: "hidden",
                      backgroundColor:
                        activeContact === contact.name ? "white" : "#f0f0f0",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#004869",
                      fontWeight: "bold",
                      marginRight: "12px",
                    }}>
                    <div
                      style={{
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}>
                      {contact.name.charAt(0)}
                    </div>
                  </div>
                  <div
                    style={{
                      fontWeight: 500,
                    }}>
                    {contact.name}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Chat Area */}
        <div
          className="col-md-9 col-12"
          style={{
            backgroundColor: "#ffffff",
            height: "100%",
            padding: 0,
            borderLeft: "3px solid #005a87",
          }}>
          {/* Chat Header */}
          <div
            style={{
              borderBottom: "1px solid #dee2e6",
              padding: "15px",
              backgroundColor: "#ffffff",
            }}>
            <h5
              style={{
                margin: 0,
                color: "#004869",
                fontWeight: 500,
              }}>
              Chat with {activeContact}
            </h5>
          </div>

          {/* Chat Messages Area */}
          <div
            style={{
              height: "calc(100% - 80px)",
              overflowY: "auto",
              padding: "15px",
              backgroundColor: "#ffffff",
            }}>
            {/* Messages would appear here */}
          </div>

          {/* Chat Input Area */}
          <div
            style={{
              borderTop: "1px solid #dee2e6",
              padding: "15px",
              backgroundColor: "#ffffff",
              position: "absolute",
              bottom: 0,
              width: "-webkit-fill-available",
            }}>
            <form
              onSubmit={handleSendMessage}
              style={{
                display: "flex",
                alignItems: "center",
              }}>
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                style={{
                  flexGrow: 1,
                  marginRight: "10px",
                  border: "1px solid #ced4da",
                  borderRadius: "5px",
                  padding: "8px 12px",
                }}
              />
              <button
                type="submit"
                style={{
                  backgroundColor: "#004869",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  padding: "8px 20px",
                  cursor: "pointer",
                }}>
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatApp;
