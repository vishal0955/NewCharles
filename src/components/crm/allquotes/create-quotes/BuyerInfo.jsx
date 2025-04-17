import React from 'react'
import { useSelector } from 'react-redux'

const BuyerInfo = () => {
  const darkMode = useSelector((state) => (state.theme.isDarkMode))
  return (
    <div className={`${darkMode ? "dark-mode" : null } quote-container`}>
  <div className="quote-content">
    {/* Left Section */}
    <div className="quote-form-section">
      {/* <div className="quote-section-group">
        <h2 className="quote-section-title">Deal Information</h2>
        <div className="quote-form-group">
          <label className="quote-label">Select Deal</label>
          <div className="quote-select-wrapper">
            <select className="quote-select">
              <option>Select existing deal...</option>
            </select>
          </div>
          <button className="quote-create-deal">
            <i className="bi bi-plus" /> Create New Deal
          </button>
        </div>
      </div> */}
      <div className="quote-section-group">
        <h2 className= "quote-section-title">Buyer Information</h2>
        <div className="quote-form-group">
          <label className="quote-label">Contact</label>
          <div className="quote-select-wrapper">
            <select className={`${darkMode ? "dark-mode" : null } quote-select`}>
              <option>John Smith - john@company.com</option>
            </select>
          </div>
          <button className="quote-add-contact">
            <i className="bi bi-plus" /> Add another contact
          </button>
        </div>
        <div className="quote-form-group">
          <label className="quote-label">Company</label>
          <div className="quote-select-wrapper">
            <select className={`${darkMode ? "dark-mode" : null } quote-select`}>
              <option>Acme Corporation</option>
            </select>
          </div>
        </div>
        <div className="quote-include-section">
          <label className="quote-label">Include in quote</label>
          <div className="quote-checkbox-group">
            <label className="quote-checkbox">
              <input type="checkbox" defaultChecked="" />
              <span className="quote-checkbox-text">Contact information</span>
            </label>
            <label className="quote-checkbox">
              <input type="checkbox" defaultChecked="" />
              <span className="quote-checkbox-text">Company details</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default BuyerInfo