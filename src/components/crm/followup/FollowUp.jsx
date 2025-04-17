import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

const contacts = Array(10).fill({
  name: 'Nikurj Kumar',
  email: 'nikurj@example.com',
  phone: '+91',
  company: '—',
  followUpDate: '22 Sept 2023'
});

const FollowUp = () => {
  return (
    <div className="container-fluid p-4 bg-light" style={{ minHeight: '100vh' }}>
      {/* Header Cards */}
      <div className="row mb-4">
        <div className="col-md-3 mb-2">
          <div className="card text-white bg-primary h-100">
            <div className="card-body">
              <h6>Total Number Of Follow Up</h6>
              <h4>2.18M</h4>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-2">
          <div className="card text-white bg-warning h-100">
            <div className="card-body">
              <h6>No Follow Up</h6>
              <h4>618.02K</h4>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-2">
          <div className="card text-white bg-danger h-100">
            <div className="card-body">
              <h6>New Follow Up This Month</h6>
              <h4>990.58K</h4>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-2">
          <div className="card text-white bg-secondary h-100">
            <div className="card-body">
              <h6>New Recurring Follow Up</h6>
              <h4>201.02K</h4>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="mb-3">
        <button className="btn btn-outline-secondary me-2">All Follow Up</button>
        <button className="btn btn-outline-secondary me-2">Open Follow Up</button>
        <button className="btn btn-primary me-2">Need Follow Up</button>
        <button className="btn btn-outline-secondary me-2">In progress</button>
        <button className="btn btn-outline-secondary me-2">My recently assigned Follow Up</button>
        <button className="btn btn-outline-primary">All Views</button>
      </div>

      {/* Table Filters */}
      <div className="row mb-3 g-2">
        <div className="col-md-3">
          <input className="form-control" placeholder="Search Follow Up..." />
        </div>
        <div className="col-md-2">
          <select className="form-select">
            <option>Follow Up owner</option>
          </select>
        </div>
        <div className="col-md-2">
          <select className="form-select">
            <option>Create date</option>
          </select>
        </div>
        <div className="col-md-2">
          <select className="form-select">
            <option>Last activity date</option>
          </select>
        </div>
        <div className="col-md-2">
          <select className="form-select">
            <option>Lead status</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="table-responsive">
        <table className="table table-bordered table-hover bg-white">
          <thead className="table-light">
            <tr>
              <th scope="col"><input type="checkbox" /></th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Company Name</th>
              <th>Follow Up Date</th>
              <th>Lead Status</th>
              <th>Lifecycle Stage</th>
              <th>Source</th>
              <th>Contact Owner</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact, index) => (
              <tr key={index}>
                <td><input type="checkbox" /></td>
                <td>{contact.name}</td>
                <td>{contact.email}</td>
                <td>{contact.phone}</td>
                <td>{contact.company}</td>
                <td>{contact.followUpDate}</td>
                <td>—</td>
                <td>—</td>
                <td>—</td>
                <td>—</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="d-flex justify-content-between align-items-center">
        <p className="mb-0">Showing 1 to 10 of 15 entries</p>
        <nav>
          <ul className="pagination mb-0">
            <li className="page-item disabled">
              <span className="page-link">&lt;</span>
            </li>
            <li className="page-item active">
              <span className="page-link">1</span>
            </li>
            <li className="page-item">
              <span className="page-link">2</span>
            </li>
            <li className="page-item">
              <span className="page-link">&gt;</span>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default FollowUp;