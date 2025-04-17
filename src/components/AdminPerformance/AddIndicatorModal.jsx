import React, { useState } from "react";

const performanceCategories = [
  {
    title: "Skill Development",
    fields: ["Communication Skills", "Time Management", "Adaptability"],
  },
  {
    title: "Technical Knowledge",
    fields: [
      "Tool/Software Proficiency",
      "Data Interpretation",
      "Task Accuracy",
    ],
  },
  {
    title: "Support & Customer Handling",
    fields: ["Response Time", "Problem Solving", "Customer Satisfaction"],
  },
  {
    title: "Marketing Performance",
    fields: [
      "Leads or Conversions",
      "Campaign Innovation",
      "Engagement Growth",
    ],
  },
  {
    title: "Management & Leadership",
    fields: ["Task Delegation", "Deadline Adherence", "Team Handling"],
  },
  {
    title: "Creativity & Innovation",
    fields: [
      "Idea Contribution",
      "Design/Content Uniqueness",
      "A/B Testing Usage",
    ],
  },
  {
    title: "Discipline & Attitude",
    fields: ["Punctuality", "Responsibility", "Professional Behavior"],
  },
  {
    title: "Sales & Outreach",
    fields: ["Client Acquisition", "Follow-Up Rate", "Deal Closure Efficiency"],
  },
  {
    title: "Learning & Improvement",
    fields: [
      "New Skills Learned",
      "Feedback Acceptance",
      "Self-Training Efforts",
    ],
  },
  {
    title: "Team Collaboration",
    fields: [
      "Cross-Team Coordination",
      "Participation in Meetings",
      "Peer Support",
    ],
  },
];

const AddIndicatorModal = ({ isOpen, onClose }) => {
  const [visibleCount, setVisibleCount] = useState(3);
  const [formValues, setFormValues] = useState({});

  const handleChange = (field, value) => {
    setFormValues({ ...formValues, [field]: value });
  };

  const allFields = performanceCategories.flatMap((cat) =>
    cat.fields.map((f) => ({ category: cat.title, label: f }))
  );

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-gray-500 bg-opacity-30 flex items-center justify-center">
      <div className="bg-white w-full max-w-4xl p-6 rounded-lg shadow-lg overflow-y-auto max-h-[90vh]">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Add New Indicator</h2>
          <button onClick={onClose} className="text-xl font-bold">
            ×
          </button>
        </div>

         <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium">Name</label>
          <select
            name="name"
            // value={formData.name}
            // onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          >
            <option value="">Select Employee</option>
            <option value="Wade Wilson">Wade Wilson</option>
            <option value="Leona">Leona</option>
            <option value="Stephen Peralt">Stephen Peralt</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium">Department</label>
          <select
            name="department"
            // value={formData.department}
            // onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          >
            <option value="">Select</option>
            <option value="Designing">Designing</option>
            <option value="Developer">Developer</option>
            <option value="DevOps">DevOps</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium">Approved By</label>
          <select
            name="approvedBy"
            // value={formData.approvedBy}
            // onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          >
            <option value="">Select</option>
            <option value="Doglas Martini">Doglas Martini</option>
            <option value="Leona">Leona</option>
            <option value="Stephen Peralt">Stephen Peralt</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium">Created Date</label>
          <input
            type="date"
            name="createdDate"
            // value={formData.createdDate}
            // onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
        </div>
      </div>

        {/* Render fields grouped by category */}
        {performanceCategories.map((category, catIdx) => {
          const visibleFields = category.fields.filter((_, idx) => {
            const overallIndex = allFields.findIndex(
              (f) => f.label === category.fields[idx]
            );
            return overallIndex < visibleCount;
          });

          if (visibleFields.length === 0) return null;

          return (
            <div key={catIdx} className="mb-6">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">
                {category.title}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {visibleFields.map((label, idx) => (
                  <div key={idx}>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      {label}
                    </label>
                    <select
                      value={formValues[label] || ""}
                      onChange={(e) => handleChange(label, e.target.value)}
                      className="w-full border rounded px-3 py-2"
                    >
                      <option value="">Select</option>
                      {Array.from({ length: 10 }, (_, i) => (
                        <option key={i + 1} value={i + 1}>
                          {i + 1}
                        </option>
                      ))}
                    </select>
                  </div>
                ))}
              </div>
            </div>
          );
        })}

        {/* Add more fields button */}
        {visibleCount < allFields.length && (
          <button
            onClick={() => setVisibleCount((prev) => prev + 3)}
            className="mt-4 text-blue-600 hover:text-blue-800 flex items-center"
          >
            <span className="text-xl mr-1">+</span> Add More
          </button>
        )}

        <div className="mt-6 flex justify-end space-x-3">
          <button
            onClick={onClose}
            className="px-4 py-2 border rounded hover:bg-gray-100"
          >
            Cancel
          </button>
          <button className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600">
            Add Indicator
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddIndicatorModal;
