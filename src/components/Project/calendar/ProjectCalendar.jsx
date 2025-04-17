import { useState, useRef } from 'react';
import AddNewProject from '../AddNewProject';
import ResourceTimelineCalendar from '../../ResourceTimlineCalendar';

const ProjectCalendar = () => {
  const [showForm, setShowForm] = useState(false);
  const calendarRef = useRef(null);

  const handleProjectSubmit = (eventData) => {
    // Add event to calendar
    calendarRef.current.getApi().addEvent({
      title: eventData.projectName,
      start: eventData.startDate,
      end: eventData.endDate,
      description: eventData.description,
      resourceId: 'r1' // Default resource
    });
    
    setShowForm(false);
  };

  return (
    <div className="container-fluid">
      <div className="d-flex justify-content-end mb-3">
        <button 
          className="btn btn-primary"
          onClick={() => setShowForm(true)}
        >
          Add New Project
        </button>
      </div>

      <ResourceTimelineCalendar ref={calendarRef} />

      {showForm && (
        <div className="modal fade show" style={{ display: 'block' }}>
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add New Project</h5>
                <button 
                  type="button" 
                  className="btn-close"
                  onClick={() => setShowForm(false)}
                ></button>
              </div>
              <div className="modal-body">
                <AddNewProject onSubmit={handleProjectSubmit} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCalendar;