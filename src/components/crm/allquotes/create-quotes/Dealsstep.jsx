import React from 'react'
import { useSelector } from 'react-redux'

const Dealsstep = () => {
  const darkMode = useSelector((state) => (state.theme.isDarkMode))
  return (
    <>
      <div className="quote-section">
      <h2 className="quote-section-title">Deal</h2>
      <p className="quote-section-desc">Associate with a deal</p>
      <p className="quote-section-info">
        Once a deal is associated with a quote in this wizard, any changes you
        make will affect both the quote and the deal.
      </p>
      <div className="quote-form-group">
        <label className="quote-form-label">create a deal</label>
          <select className={`${darkMode ? "card-dark" : null } from-select w-100 border p-3 rounded-3`}>
            <option>Create a deal</option>
            <option>#Q-2024-001</option>
            <option>#Q-2024-002</option>
            <option>#Q-2024-003</option>


          </select>
        
      </div>
    </div>
    </>
  )
}

export default Dealsstep