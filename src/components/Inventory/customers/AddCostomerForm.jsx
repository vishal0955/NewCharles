import React from 'react'

const AddCostomerForm = () => {
  return (
    <>
    <form>
  <div className="mb-3">
    <label htmlFor="customerName" className="form-label">
      Customer Name
    </label>
    <input type="text" className="form-control" id="customerName" required="" />
  </div>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">
      Email Address
    </label>
    <input type="email" className="form-control" id="email" required="" />
  </div>
  <div className="mb-3">
    <label htmlFor="phone" className="form-label">
      Phone Number
    </label>
    <input type="tel" className="form-control" id="phone" required="" />
  </div>
  <div className="mb-3">
    <label htmlFor="address" className="form-label">
      Address
    </label>
    <textarea
      className="form-control"
      id="address"
      rows={3}
      required=""
      defaultValue={""}
    />
  </div>
  <div className="mb-3">
    <label htmlFor="dob" className="form-label">
      Date of Birth
    </label>
    <input type="date" className="form-control" id="dob" required="" />
  </div>
  <div className="mb-3">
    <label htmlFor="customerType" className="form-label">
      Customer Type
    </label>
    <select className="form-select" id="customerType" required="">
      <option value="" disabled="" selected="">
        Select Customer Type
      </option>
      <option value="individual">Individual</option>
      <option value="business">Business</option>
    </select>
  </div>
  <button type="submit" className="btn btn-primary">
    Add Customer
  </button>
</form>


    </>
  )
}

export default AddCostomerForm