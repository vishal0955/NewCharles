import { useState } from 'react';
import { Bell, FileText, Download, Link, Edit, Eye, Plus, ExternalLink } from 'lucide-react';

export default function Utilities() {
  const [activeTab, setActiveTab] = useState('quickLinks');
  const [notifications, setNotifications] = useState([
    { id: 1, message: "Daily report generated", time: "2 min ago", read: false },
    { id: 2, message: "New utility task assigned", time: "1 hour ago", read: false },
    { id: 3, message: "Export completed successfully", time: "3 hours ago", read: true }
  ]);
  
  const quickLinks = [
    { id: 1, title: "Operations Dashboard", description: "Daily operations overview", category: "Operations" },
    { id: 2, title: "Inventory Status", description: "Current stock levels", category: "Inventory" },
    { id: 3, title: "Task Manager", description: "Manage daily tasks", category: "Operations" },
    { id: 4, title: "Reports Center", description: "Access all reports", category: "Reports" }
  ];

  const markAllAsRead = () => {
    setNotifications(notifications.map(notification => ({ ...notification, read: true })));
  };

  return (
    <div className="container-fluid p-0">
      <div className="card shadow border-0">
        <div className="card-header bg-white p-3 d-flex justify-content-between align-items-center">
          <h5 className="m-0 fw-bold text-primary">Utilities Panel</h5>
          <div className="d-flex gap-2">
            <button className="btn btn-sm btn-outline-primary d-flex align-items-center gap-1">
              <Plus size={16} /> Add
            </button>
            <div className="dropdown">
              <button className="btn btn-sm btn-outline-secondary dropdown-toggle d-flex align-items-center gap-1" type="button" id="exportDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                <Download size={16} /> Export
              </button>
              <ul className="dropdown-menu shadow-sm border-0" aria-labelledby="exportDropdown">
                <li><a className="dropdown-item" href="#"><FileText size={14} className="me-2" /> PDF</a></li>
                <li><a className="dropdown-item" href="#"><FileText size={14} className="me-2" /> Excel</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="card-body p-0">
          <ul className="nav nav-tabs nav-fill border-bottom">
            <li className="nav-item">
              <button 
                className={`nav-link ${activeTab === 'quickLinks' ? 'active fw-medium' : ''} border-0 rounded-0 py-3`} 
                onClick={() => setActiveTab('quickLinks')}
              >
                <span className="d-flex align-items-center justify-content-center gap-2">
                  <Link size={18} /> Quick Links
                </span>
              </button>
            </li>
            <li className="nav-item position-relative">
              <button 
                className={`nav-link ${activeTab === 'notifications' ? 'active fw-medium' : ''} border-0 rounded-0 py-3`} 
                onClick={() => setActiveTab('notifications')}
              >
                <span className="d-flex align-items-center justify-content-center gap-2">
                  <Bell size={18} /> Notifications
                  {notifications.some(n => !n.read) && (
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                      {notifications.filter(n => !n.read).length}
                    </span>
                  )}
                </span>
              </button>
            </li>
          </ul>
          
          <div className="p-3">
            {activeTab === 'quickLinks' && (
              <div className="row g-3">
                {quickLinks.map(link => (
                  <div key={link.id} className="col-lg-6 col-xl-3 col-md-6 col-sm-12">
                    <div className="card h-100 border-0 shadow-sm hover-shadow transition-all">
                      <div className="card-body p-3">
                        <div className="d-flex justify-content-between mb-2">
                          <span className="badge bg-light text-dark">{link.category}</span>
                          <div className="btn-group">
                            <button className="btn btn-sm btn-link text-primary p-0" title="Edit">
                              <Edit size={14} />
                            </button>
                            <button className="btn btn-sm btn-link text-primary p-0 ms-2" title="View">
                              <Eye size={14} />
                            </button>
                          </div>
                        </div>
                        <h6 className="card-title mb-1">{link.title}</h6>
                        <p className="card-text small text-muted mb-2">{link.description}</p>
                        <a href="#" className="btn btn-sm btn-outline-primary d-flex align-items-center justify-content-center gap-1 w-100 mt-2">
                          <ExternalLink size={14} /> Open
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            
            {activeTab === 'notifications' && (
              <div>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h6 className="m-0">Recent Notifications</h6>
                  <button 
                    className="btn btn-sm btn-link text-decoration-none" 
                    onClick={markAllAsRead}
                    disabled={!notifications.some(n => !n.read)}
                  >
                    Mark all as read
                  </button>
                </div>
                <div className="list-group">
                  {notifications.map(notification => (
                    <div 
                      key={notification.id} 
                      className={`list-group-item border-0 border-bottom rounded-0 p-3 ${!notification.read ? 'bg-light' : ''}`}
                    >
                      <div className="d-flex justify-content-between">
                        <div>
                          <div className="d-flex align-items-center gap-2">
                            {!notification.read && <div className="bg-primary rounded-circle" style={{ width: '8px', height: '8px' }}></div>}
                            <p className="mb-1">{notification.message}</p>
                          </div>
                          <small className="text-muted">{notification.time}</small>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        
        <div className="card-footer bg-white p-3">
          <div className="d-flex justify-content-between align-items-center">
            <small className="text-muted">Notes & Utilities Module</small>
            <div className="d-flex gap-2">
              <button className="btn btn-sm btn-link text-decoration-none p-0">Help</button>
              <span className="text-muted mx-1">|</span>
              <button className="btn btn-sm btn-link text-decoration-none p-0">Settings</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}