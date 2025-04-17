import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const InsideFormModal = ({ 
  title, 
  isOpen, 
  onClose, 
  onSubmit, 
  formFields,
  initialData = {},
  submitButtonText = 'Submit'
}) => {
  const [formData, setFormData] = useState({});

  // Initialize form data when modal opens or initialData changes
  useEffect(() => {
    if (isOpen) {
      setFormData(initialData);
    }
  }, [isOpen, initialData]);
  const darkMode = useSelector((state) => state.theme.isDarkMode);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    onClose();
  };

  if (!isOpen) return null;
 
   


  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className={`${darkMode ? "dark-mode" : "bg-white" } rounded-lg w-full max-w-md`}>
        {/* Modal Header */}
        <div className="flex justify-between items-center px-4 py-3 border-b">
          <h5 className="text-lg font-semibold">{title}</h5>
          <button 
            type="button"
            onClick={onClose}
            className="text-gray-400 hover:text-gray-500"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4">
          <form onSubmit={handleSubmit} id="modalForm">
            {formFields.map((field, index) => (
              <div key={index} className="mb-4">
                <label className="block text-sm font-medium  mb-1">
                  {field.label}
                  {field.required && <span className="text-red-500 ml-1">*</span>}
                </label>
                {field.type === 'select' ? (
                  <select
                    name={field.name}
                    value={formData[field.name] }
                    onChange={(e) => setFormData(prev => ({
                      ...prev,
                      [field.name]: e.target.value
                    }))}
                    required={field.required}
                    className={`${darkMode ? "dark-mode" : null } w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  >
                    <option value="">{field.placeholder || 'Select'}</option>
                    {field.options?.map((option, i) => (
                      <option key={i} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    type={field.type}
                    name={field.name}
                    value={formData[field.name] }
                    onChange={(e) => setFormData(prev => ({
                      ...prev,
                      [field.name]: e.target.value
                    }))}
                    placeholder={field.placeholder}
                    required={field.required}
                    className= {`${darkMode ? "dark-mode" : null } w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  />
                )}
              </div>
            ))}
          </form>
        </div>

        {/* Modal Footer */}
        <div className="flex justify-end gap-2 px-4 py-3 border-t">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            form="modalForm"
            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
          >
            {submitButtonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default InsideFormModal;

