import React, { useState } from "react";
import { useSelector } from "react-redux";

const ProjectCard = () => {
  const darkMode = useSelector((state) => state.theme.isDarkMode);

  const [formData, setFormData] = useState({
    projectName: "",
    clientName: " ",
    projectGoal: "",
    status: "",
    priority: "",
    comments: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    // You can also dispatch this data or send it to backend here
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`${darkMode ? "card-dark" : null} bg-gray-100 font-sans min-h-screen rounded flex flex-col`}
    >
      <main className="flex-1 relative">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Form Left Section */}
            <div className="w-full">
              {/* New Project Form */}
              <div className={`${darkMode ? "card-dark" : null} bg-white rounded-lg shadow mb-8`}>
                <div className="p-6 space-y-6">
                  <div>
                    <label className="block text-sm font-medium">Project Name</label>
                    <input
                      type="text"
                      name="projectName"
                      value={formData.projectName}
                      onChange={handleChange}
                      className={`${darkMode ? "card-dark" : null} mt-1 block w-full rounded-md border shadow-sm p-3 focus:border-custom focus:ring-custom sm:text-sm`}
                      placeholder="Enter project name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium">Client Name</label>
                    <input
                      type="text"
                      name="clientName"
                      value={formData.clientName}
                      onChange={handleChange}
                      className={`${darkMode ? "card-dark" : null} mt-1 block w-full rounded-md border shadow-sm p-3 focus:border-custom focus:ring-custom sm:text-sm`}
                    />
                  </div>
                  <div>
  <label className="block text-sm font-medium mb-1">
    Assign Members
  </label>
  <input
    type="text"
    className="w-full border px-3 py-2 rounded"
    // value={newProject.aseanMembers}
    onChange={(e) =>
      setNewProject({ ...newProject, aseanMembers: e.target.value })
    }
  />
</div>

                  <div>
                    <label className="block text-sm font-medium">Project Goal</label>
                    <textarea
                      name="projectGoal"
                      rows="3"
                      value={formData.projectGoal}
                      onChange={handleChange}
                      className={`${darkMode ? "card-dark" : null} mt-1 block w-full rounded-md border p-3 shadow-sm focus:border-custom focus:ring-custom sm:text-sm`}
                      placeholder="Enter project goals"
                    />
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className={`${darkMode ? "card-dark" : "bg-white"} bg-white rounded-lg shadow`}>
                <div className="border-b border-gray-200">
                  <nav className="-mb-px flex">
                    <span className="border-custom text-custom w-1/4 py-4 px-1 text-center border-b-2 font-medium text-sm">
                      Details
                    </span>
                  </nav>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-sm font-medium">Status</label>
                      <select
                        name="status"
                        value={formData.status}
                        onChange={handleChange}
                        className={`${darkMode ? "card-dark" : null} mt-1 block w-full rounded-md border-gray-300 p-3 shadow-sm focus:border-custom focus:ring-custom sm:text-sm border`}
                      >
                        <option>Planning</option>
                        <option>In Progress</option>
                        <option>Completed</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium">Priority</label>
                      <select
                        name="priority"
                        value={formData.priority}
                        onChange={handleChange}
                        className={`${darkMode ? "card-dark" : null} mt-1 block w-full rounded-md border-gray-300 p-3 shadow-sm focus:border-custom focus:ring-custom sm:text-sm border`}
                      >
                        <option>Normal</option>
                        <option>High</option>
                        <option>Low</option>
                      </select>
                    </div>
                  </div>

                  {/* Comments Section */}
                  <div className="mt-6">
                    <label className="block text-sm font-medium">Comments</label>
                    <div className="mt-2">
                      <textarea
                        name="comments"
                        rows="3"
                        value={formData.comments}
                        onChange={handleChange}
                        className={`${darkMode ? "card-dark" : null} block w-full rounded-md border-gray-300 p-3 shadow-sm focus:border-custom focus:ring-custom sm:text-sm border`}
                        placeholder="Add a comment..."
                      />
                      <div className="mt-3 flex justify-end">
                        <button
                          type="submit"
                          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm bg-custom hover:bg-custom focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-custom"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End of Left Form Section */}
          </div>
        </div>
      </main>
    </form>
  );
};

export default ProjectCard;
