import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const AddLeaveForm = ({ onClose, initialData = null, mode = 'add' }) => {
  const [formData, setFormData] = useState({
    leaveType: 'Medical Leave',
    employee: 'Anthony Lewis',
    fromDate: '14 Jan 2024',
     to: "15 Jan 2024",
    noOfDays: '',
    reason: '',
    approvedStatus: 'Pending',
    paidStatus: 'Paid'
  });

  // Initialize form with data if editing
  useEffect(() => {
    if ( mode !== 'add') {
      setFormData(formData);
    }
  }, [ mode]);

  // Calculate number of days when dates change
  useEffect(() => {
    if (formData.fromDate && formData.toDate) {
      const start = new Date(formData.fromDate);
      const end = new Date(formData.toDate);
      const diffTime = Math.abs(end - start);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;
      
      setFormData(prev => ({
        ...prev,
        noOfDays: diffDays
      }));
    }
  }, [formData.fromDate, formData.toDate]);

  const handleDateChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    onClose(formData); // Pass back the updated data
  };
  const darkMode = useSelector((state) => state.theme.isDarkMode);

  const isViewOnly = mode === 'view';
  const isEditing = mode === 'edit';

  return (
    <div className="leave-form">
      {/* <h2 className="text-xl font-semibold mb-4">
        {isViewOnly ? 'View Leave' : isEditing ? 'Edit Leave' : 'Add Leave'}
      </h2> */}
      
      <form onSubmit={handleSubmit}>
        {/* Leave Type */}
        <div className="mb-4">
          <label className={`${darkMode ? "dark-mode" : null } block text-sm font-medium text-gray-700 mb-1`}>
            Leave Type
          </label>
          <select
            className={`${darkMode ? "card-dark" : "" } w-full px-3 py-2 border border-gray-300 rounded-md text-sm `}
            value={formData.leaveType}
            onChange={(e) => setFormData({...formData, leaveType: e.target.value})}
            required
            disabled={isViewOnly}
          >
            <option value="">Select Leave Type</option>
            <option value="Annual Leave">Annual Leave</option>
            <option value="Sick Leave">Sick Leave</option>
            <option value="Personal Leave">Personal Leave</option>
            <option value="Unpaid Leave">Unpaid Leave</option>
          </select>
        </div>

        {/* Employee */}
        <div className="mb-4">
          <label className={`${darkMode ? "dark-mode" : null } block text-sm font-medium text-gray-700 mb-1`}>
            Employee
          </label>
          <select
            className={`${darkMode ? "card-dark" : "bg-gray-50" } w-full px-3 py-2 border border-gray-300 rounded-md text-sm `}
            value={formData.employee}
            onChange={(e) => setFormData({...formData, employee: e.target.value})}
            required
            disabled={isViewOnly}
          >
            <option value="">Select Employee</option>
            <option value="Anthony">Anthony</option>
            <option value="Sophie">Sophie</option>
            <option value="John">John</option>
            <option value="Michael">Michael</option>
          </select>
        </div>

        {/* Date Range */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className={`${darkMode ? "dark-mode" : null } block text-sm font-medium text-gray-700 mb-1`}>
              From Date
            </label>
            <input
              type="date"
              name="fromDate"
              className= {`${darkMode ? "card-dark" : "" } w-full px-3 py-2 border border-gray-300 rounded-md text-sm `}
              value={formData.fromDate}
              onChange={handleDateChange}
              required
              disabled={isViewOnly}
            />
          </div>
          <div>
            <label className={`${darkMode ? "dark-mode" : null } block text-sm font-medium text-gray-700 mb-1`}>
              To Date
            </label>
            <input
              type="date"
              name="toDate"
              className={`${darkMode ? "card-dark" : "" } w-full px-3 py-2 border border-gray-300 rounded-md text-sm `}
              value={formData.toDate}
              onChange={handleDateChange}
              min={formData.fromDate}
              required
              disabled={isViewOnly}
            />
          </div>
        </div>

        {/* Number of Days */}
        <div className="mb-4">
          <label className={`${darkMode ? "dark-mode" : null } block text-sm font-medium text-gray-700 mb-1`}>
            Number of Days
          </label>
          <input
            type="number"
            className={`${darkMode ? "card-dark" : null } w-full px-3 py-2 border border-gray-300 rounded-md text-sm bg-gray-50`}
            value={formData.noOfDays}
            readOnly
          />
        </div>

        {/* Leave Reason */}
        <div className="mb-4">
          <label className={`${darkMode ? "dark-mode" : null } block text-sm font-medium text-gray-700 mb-1`}>
            Leave Reason
          </label>
          <textarea
            className= {`${darkMode ? "card-dark" : "bg-gray-50" } w-full px-3 py-2 border border-gray-300 rounded-md text-sm `}
            rows="3"
            value={formData.reason}
            onChange={(e) => setFormData({...formData, reason: e.target.value})}
            required
            disabled={isViewOnly}
          ></textarea>
        </div>

        {/* Status Dropdowns - Always editable for admin */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className={`${darkMode ? "dark-mode" : null } block text-sm font-medium text-gray-700 mb-1`}>
              Approved Status
            </label>
            <select
              className={`${darkMode ? "card-dark" : null } w-full px-3 py-2 border border-gray-300 rounded-md text-sm `}
              value={formData.approvedStatus}
              onChange={(e) => setFormData({...formData, approvedStatus: e.target.value})}
            >
              <option value="Pending">Pending</option>
              <option value="Approved">Approved</option>
              <option value="Rejected">Rejected</option>
            </select>
          </div>
          <div>
            <label className={`${darkMode ? "dark-mode" : null } block text-sm font-medium text-gray-700 mb-1`}>
              Paid Status
            </label>
            <select
              className={`${darkMode ? "card-dark" : null } w-full px-3 py-2 border border-gray-300 rounded-md text-sm `}
              value={formData.paidStatus}
              onChange={(e) => setFormData({...formData, paidStatus: e.target.value})}
            >
              <option value="Paid">Paid</option>
              <option value="Unpaid">Unpaid</option>
            </select>
          </div>
        </div>

        {/* Form Actions */}
        <div className="flex justify-end gap-3 mt-6">
          <button
            type="button"
            onClick={() => onClose()}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
          >
            {isViewOnly ? 'Close' : 'Cancel'}
          </button>
          {!isViewOnly && (
            <button
              type="submit"
              className="px-4 py-2 text-sm font-medium text-white bg-purple-600 rounded-md hover:bg-purple-700"
            >
              {isEditing ? 'Update Leave' : 'Add Leave'}
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default AddLeaveForm;
