import React, { useState } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Plus, 
  MoreVertical, 
  Star, 
  Trash2, 
  List, 
  Grid
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';


const NotesList = () => {

    const navigate = useNavigate();
  const [viewMode, setViewMode] = useState('list');

  console.log(viewMode);
  
  const notes = [
    {
      id: 1,
      title: "Project Planning Meeting",
      description: "Review project timeline and assign tasks to team members...",
      priority: "Medium",
      category: "Personal",
      priorityColor: "bg-yellow-100 text-yellow-800"
    },
    {
      id: 2,
      title: "Client Presentation",
      description: "Prepare slides for tomorrow's client meeting...",
      priority: "High",
      category: "Work",
      priorityColor: "bg-red-100 text-red-800"
    },
    {
      id: 3,
      title: "Weekly Review",
      description: "Document progress and plan next week's objectives...",
      priority: "Low",
      category: "Personal",
      priorityColor: "bg-green-100 text-green-800"
    }
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-48 bg-white border-r border-gray-200 flex-shrink-0">
        <div className="flex items-center p-4">
          <div className="bg-indigo-100 rounded p-2 mr-2">
            <span className="text-indigo-600 font-bold">GD</span>
          </div>
          <h5 className="font-medium">Notes</h5>
        </div>
        
        <div className="px-4 py-2">
          <h6 className="text-gray-500 text-xs font-medium mb-2">Notes List</h6>
          <ul>
            <li className="mb-1 rounded bg-gray-900 text-white">
              <div className="flex items-center px-3 py-2">
                <div className="mr-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div className="flex-grow">All Notes</div>
              
              </div>
            </li>
            <li className="mb-1">
              <div className="flex items-center px-3 py-2">
                <div className="mr-2 text-yellow-400">
                  <Star size={16} />
                </div>
                <div>Important</div>
              </div>
            </li>
            <li className="mb-1">
              <div className="flex items-center px-3 py-2">
                <div className="mr-2 text-gray-400">
                  <Trash2 size={16} />
                </div>
                <div>Trash</div>
              </div>
            </li>
          </ul>
        </div>
        
        <div className="px-4 py-2">
          <h6 className="text-gray-500 text-xs font-medium mb-2">Tags</h6>
          <ul>
            <li className="mb-1">
              <div className="flex items-center px-3 py-2">
                <div className="mr-2">
                  <span className="inline-block w-3 h-3 rounded-full bg-blue-500"></span>
                </div>
                <div>Pending</div>
              </div>
            </li>
            <li className="mb-1">
              <div className="flex items-center px-3 py-2">
                <div className="mr-2">
                  <span className="inline-block w-3 h-3 rounded-full bg-red-500"></span>
                </div>
                <div>On Hold</div>
              </div>
            </li>
            <li className="mb-1">
              <div className="flex items-center px-3 py-2">
                <div className="mr-2">
                  <span className="inline-block w-3 h-3 rounded-full bg-yellow-500"></span>
                </div>
                <div>In Progress</div>
              </div>
            </li>
            <li className="mb-1">
              <div className="flex items-center px-3 py-2">
                <div className="mr-2">
                  <span className="inline-block w-3 h-3 rounded-full bg-green-500"></span>
                </div>
                <div>Done</div>
              </div>
            </li>
          </ul>
        </div>
        
        <div className="px-4 py-2">
          <h6 className="text-gray-500 text-xs font-medium mb-2">Priority</h6>
          <ul>
            <li className="mb-1">
              <div className="flex items-center px-3 py-2">
                <div className="mr-2">
                  <span className="inline-block w-3 h-3 rounded-full bg-yellow-500"></span>
                </div>
                <div>Medium</div>
              </div>
            </li>
            <li className="mb-1">
              <div className="flex items-center px-3 py-2">
                <div className="mr-2">
                  <span className="inline-block w-3 h-3 rounded-full bg-red-500"></span>
                </div>
                <div>High</div>
              </div>
            </li>
            <li className="mb-1">
              <div className="flex items-center px-3 py-2">
                <div className="mr-2">
                  <span className="inline-block w-3 h-3 rounded-full bg-green-500"></span>
                </div>
                <div>Low</div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="p-4">
          <div className="flex justify-between items-center mb-6">
            <div className="flex">
              <div className="relative">
                <button className="flex items-center bg-white border border-gray-300 rounded px-4 py-2 text-sm">
                  Bulk Actions
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
              <button className="bg-white border border-gray-300 rounded px-4 py-2 text-sm ml-2">Apply</button>
            </div>
            <div className="flex items-center">
              <div className="mr-2 flex border border-gray-300 rounded">
                <button 
                  className={`p-2 ${viewMode === 'list' ? 'bg-gray-900 text-white' : 'bg-white text-gray-700'}`}
                 onClick={() => setViewMode('list')}
                >
                  <List size={18} />
                </button>
                <button 
                  className={`p-2 ${viewMode === 'grid' ? 'bg-gray-900 text-white' : 'bg-white text-gray-700'}`}
                 onClick={() => setViewMode('grid')}
                >
                  <Grid size={18} />
                </button>
              </div>
              {/* <button className="bg-white border border-gray-300 rounded px-4 py-2 text-sm mr-2 flex items-center">
                <svg className="mr-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Export
              </button> */}
              <button className="bg-gray-900 text-white rounded px-4 py-2 text-sm flex items-center">
                <Plus size={16} className="mr-1" />
                Add Note
              </button>
            </div>
          </div>

          <div className="flex justify-between items-center mb-4">
            <h4 className="text-xl font-medium"> Notes</h4>
            <div className="flex">
              <button className="p-1 text-gray-400">
                <ChevronLeft size={20} />
              </button>
              <button className="p-1 text-gray-400">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
          
          {/* List View */}

          {viewMode === 'list' ? (
              <div className="space-y-4">
              {notes.map((note) => (
                <div key={note.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${note.priorityColor}`}>
                          {note.priority}
                        </span>
                      </div>
                      <button className="text-gray-400 hover:text-gray-600">
                        <MoreVertical size={16} />
                      </button>
                    </div>
                    <h5 className="font-medium mb-2">{note.title}</h5>
                    <p className="text-gray-600 text-sm">{note.description}</p>
                    <div className="flex items-center mt-4">
                      <div className="mr-2">
                        <div className="bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center">
                          <span className="text-gray-600 text-xs">JP</span>
                        </div>
                      </div>
                      <div className="flex-grow">
                        <div className="text-sm">{note.category}</div>
                      </div>
                      <div className="flex">
                        <button className="p-1 text-gray-400 hover:text-yellow-500">
                          <Star size={16} />
                        </button>
                        <button className="p-1 text-gray-400 hover:text-red-500">
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : 
          (
          <div className="space-y-4">
            {notes.map((note) => (
              <div key={note.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${note.priorityColor}`}>
                        {note.priority}
                      </span>
                    </div>
                    <button className="text-gray-400 hover:text-gray-600">
                      <MoreVertical size={16} />
                    </button>
                  </div>
                  <h5 className="font-medium mb-2">{note.title}</h5>
                  <p className="text-gray-600 text-sm">{note.description}</p>
                  <div className="flex items-center mt-4">
                    <div className="mr-2">
                      <div className="bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center">
                        <span className="text-gray-600 text-xs">JP</span>
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="text-sm">{note.category}</div>
                    </div>
                    <div className="flex">
                      <button className="p-1 text-gray-400 hover:text-yellow-500">
                        <Star size={16} />
                      </button>
                      <button className="p-1 text-gray-400 hover:text-red-500">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          )
          }
          
        </div>
      </div>
    </div>
  );
};

export default NotesList;