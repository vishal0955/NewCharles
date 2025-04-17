

import { useState, useEffect } from 'react';
import { FaArrowLeft, FaSearch, FaChevronDown } from 'react-icons/fa';

const AddTraining = ({ onClose }) => {
  const [formData, setFormData] = useState({
    trainingName: '',
    trainer: '',
    trainingCost: '',
    employees: [],
    description: '',
    startDate: '',
    endDate: '',
  });

  const trainers  = [
    {id:1, name:"John Smith"},
    {id:2, name:"Jane Doe"},
    {id:3, name:"John Doe"}
    
]

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    onClose(formData);
  };

  const calculateDuration = () => {
    if (formData.startDate && formData.endDate) {
      const start = new Date(formData.startDate);
      const end = new Date(formData.endDate);
      const diffTime = Math.abs(end - start);
      return Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;
    }
    return '';
  };

  return (
    <div className=" ">
      <div className="max-w-4xl mx-auto">
        {/* <div className="mb-6 flex items-center">
          <button 
            onClick={() => onClose()} 
            className="text-gray-600 hover:text-gray-900 mr-4"
          >
            <FaArrowLeft />
          </button>
          <h2 className="text-xl font-semibold">Add Training</h2>
        </div> */}

        <div className="bg-white  rounded-lg ">
          <form onSubmit={handleSubmit}>
            {/* Training Name */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Training Name
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                placeholder="Enter training name"
                value={formData.trainingName}
                onChange={(e) => setFormData({...formData, trainingName: e.target.value})}
                required
              />
            </div>

            {/* Trainer */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Trainer
              </label>
              <div className="relative">
                {/* <input
                  type="text"
                  className="w-full px-3 py-2 pl-10 border border-gray-300 rounded-md text-sm"
                  placeholder="Search trainer"
                  value={formData.trainer}
                  onChange={(e) => setFormData({...formData, trainer: e.target.value})}
                  required
                /> */}
                <select 
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                value={formData.trainer}
                onChange={(e) => setFormData({...formData, trainer: e.target.value})}
                required
                >
                  <option value="">Select Trainer</option>
                  {trainers.map((trainer) => (
                    <option key={trainer.id} value={trainer.name}>{trainer.name}</option>
                  ))}
                  </select>
                {/* <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" /> */}
              </div>
            </div>

            {/* Training Cost */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Training Cost
              </label>
              <div className="relative">
                <input
                  type="number"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                  placeholder="Enter training cost"
                  value={formData.trainingCost}
                  onChange={(e) => setFormData({...formData, trainingCost: e.target.value})}
                  required
                />
              </div>
            </div>

            {/* Employees */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Employees
              </label>
              <div className="relative">
                <select
                  multiple
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                  value={formData.employees}
                  onChange={(e) => setFormData({
                    ...formData, 
                    employees: Array.from(e.target.selectedOptions, option => option.value)
                  })}
                  size={3}
                >
                  <option value="1">Anthony</option>
                  <option value="2">John</option>
                  <option value="3">Jane</option>
                </select>
                <FaChevronDown className="absolute right-3 top-3 text-gray-400" />
              </div>
              <p className="text-xs text-gray-500 mt-1">
                Select multiple employees by holding Ctrl (Windows) or Cmd (Mac)
              </p>
            </div>

            {/* Description */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Training Description
              </label>
              <textarea
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                rows="4"
                placeholder="Enter training description"
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
                required
              ></textarea>
            </div>

            {/* Date Range */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Start Date
                </label>
                <input
                  type="date"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                  value={formData.startDate}
                  onChange={(e) => setFormData({...formData, startDate: e.target.value})}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  End Date
                </label>
                <input
                  type="date"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
                  value={formData.endDate}
                  min={formData.startDate}
                  onChange={(e) => setFormData({...formData, endDate: e.target.value})}
                  required
                />
              </div>
            </div>

            {/* Duration (calculated) */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Duration (Days)
              </label>
              <input
                type="number"
                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm bg-gray-50"
                value={calculateDuration()}
                readOnly
              />
            </div>

            {/* Form Actions */}
            <div className="flex justify-end gap-3 mt-6 pt-6 border-t">
              <button
                type="button"
                onClick={() => onClose()}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 text-sm font-medium text-white bg-purple-600 rounded-md hover:bg-purple-700"
              >
                Add Training
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddTraining;
