import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <div>
      <div className="dashboard-container">
  <div className="sidebar">
    <div className="logo"><img src="../../assets/WhatsApp Image 2025-02-19 at 6.04.03 PM.jpeg" className="img-fluid w-100" alt /></div>
    <ul className="nav-links">
      <li><Link to="dashboard"><i className="fas fa-tachometer-alt" /> Dashboard </Link></li>
      <li><Link to="plans_package"><i className="fas fa-box" /> Plans Package</Link></li>
      <li>< Link to="user_info"><i className="fas fa-user" /> User Info</Link></li>
      <li>< Link to="order_plan"><i className="fas fa-shopping-cart" /> Order Plan</Link></li>
      <li>< Link to="plan_request"><i className="fas fa-clipboard-list" /> Plan Requests</Link></li>
      <li>< Link to="settings"><i className="fas fa-cog" /> Settings</Link></li>
    </ul>
  </div>
  <div className="main-content" id="main-content">
    <div className="section header">
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <i className="fas fa-search" />
      </div>
      <div className="user-profile">
        <div className="username">Superadmin</div>
        <a href="#" id="logout-btn" className="logout-btn">Logout</a>
      </div>
    </div>
    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
      <router-outlet />
    </div>
  </div>
</div>
    </div>
  )
}

export default Sidebar
