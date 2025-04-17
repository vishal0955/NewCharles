import React, { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Plus,
  MoreVertical,
  Star,
  Trash2,
  List,
  Grid,
} from "lucide-react";
import { FaStar, FaTrash, FaEllipsisV, FaPlus, FaFile } from "react-icons/fa";
import AddNotePopup from "./AddNoteForm";
import { useSelector } from "react-redux";
import InternalNotes from "./InternalNotes";

const NotesGrid = () => {
  const darkMode = useSelector((state) => state.theme.isDarkMode);

  const [active, setActive] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState("list");
  const [showAddFolder, setShowAddFolder] = useState(false);
  const [isAddNoteOpen, setIsAddNoteOpen] = useState(false);
  const [folderName, setFolderName] = useState("");
  const [addedFolders, setAddedFolders] = useState([]);
  const [showAddTag, setShowAddTag] = useState(false);
  const [tagName, setTagName] = useState("");
  const [addedTags, setAddedTags] = useState([]);

  const [notes, setNotes] = useState([
    {
      id: 1,
      title: "Project Planning Meeting",
      description:
        "Review project timeline and assign tasks to team members...",
      priority: "Medium",
      category: "Personal",
      starred: false,
    },
    {
      id: 2,
      title: "Client Presentation",
      description: "Prepare slides for tomorrow's client meeting...",
      priority: "High",
      category: "Work",
      starred: false,
    },
    {
      id: 3,
      title: "Weekly Review",
      description: "Document progress and plan next week's objectives...",
      priority: "Low",
      category: "Personal",
      starred: false,
    },
    {
      id: 4,
      title: "Client Follow-up",
      description: "Follow up with client regarding feedback...",
      priority: "High",
      category: "Work",
      starred: false,
    },
    {
      id: 5,
      title: "Team Building",
      description: "Plan team building activities for next quarter...",
      priority: "Medium",
      category: "Personal",
      starred: false,
    },
  ]);

  const [categories] = useState([
    { id: "all", name: "All Notes", count: notes.length, icon: "sticky" },
    { id: "important", name: "Starred", icon: "star" },
    { id: "internalnotes", name: "Internal Notes", icon: "file-text" },
    { id: "trash", name: "Trash", icon: "trash" },
  ]);

  const [tags] = useState([
    { id: "pending", name: "Pending", color: "bg-blue-500" },
    { id: "on-hold", name: "On Hold", color: "bg-red-500" },
    { id: "in-progress", name: "In Progress", color: "bg-yellow-500" },
    { id: "done", name: "Done", color: "bg-green-500" },
  ]);

  const [priorities] = useState([
    { id: "medium", name: "Medium", color: "bg-yellow-500" },
    { id: "high", name: "High", color: "bg-red-500" },
    { id: "low", name: "Low", color: "bg-green-500" },
  ]);

  // Handlers
  const handleOpenAddNote = () => setIsAddNoteOpen(true);
  const handleCloseAddNote = () => setIsAddNoteOpen(false);

  const handleSaveNote = (newNote) => {
    setNotes((prevNotes) => [
      ...prevNotes,
      {
        id: Date.now(),
        ...newNote,
      },
    ]);
  };

  const handleDeleteNote = (id) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };

  const handleToggleStar = (id) => {
    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === id ? { ...note, starred: !note.starred } : note
      )
    );
  };

  const handlePlusClicked = () => setShowAddTag(true);
  const handleTagNameChange = (e) => setTagName(e.target.value);

  const handleAddTag = () => {
    if (!tagName.trim()) return;
    const newTag = {
      id: Date.now(),
      name: tagName,
      color: "bg-blue-500",
    };
    setAddedTags([...addedTags, newTag]);
    setTagName("");
    setShowAddTag(false);
  };

  const handleRemoveTag = (id) => {
    setAddedTags(addedTags.filter((tag) => tag.id !== id));
  };

  const handlePlusClick = () => setShowAddFolder(true);
  const handleFolderNameChange = (e) => setFolderName(e.target.value);

  const handleAddFolder = () => {
    if (!folderName.trim()) return;
    const newFolder = {
      id: Date.now(),
      name: folderName,
      color: "bg-blue-500",
    };
    setAddedFolders([...addedFolders, newFolder]);
    setFolderName("");
    setShowAddFolder(false);
  };

  const handleRemoveFolder = (id) => {
    setAddedFolders(addedFolders.filter((folder) => folder.id !== id));
  };

  const getPriorityClasses = (priority) => {
    switch (priority) {
      case "High":
        return "bg-red-100 text-red-700";
      case "Medium":
        return "bg-yellow-100 text-yellow-700";
      case "Low":
        return "bg-green-100 text-green-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const lowerCaseSearch = searchTerm.toLowerCase();

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredNotes = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(lowerCaseSearch) ||
      note.description.toLowerCase().includes(lowerCaseSearch)
  );

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Sidebar - Collapsible on mobile */}
      <div className="w-full md:w-64 border-r border-gray-200 flex-shrink-0 shadow-xs">
        <div className="flex items-center px-3 py-4">
          <div className="bg-indigo-100 rounded p-2 mr-2"></div>
          <h5 className="font-medium">Notes</h5>
        </div>

        <div className="px-3 py-2">
          <h6 className="text-gray-500 text-xs font-medium mb-2">Notes List</h6>
          <ul>
            {categories.map((category) => (
              <li
                key={category.id}
                className={`mb-1 rounded ${
                  category.id === "all" ? "bg-gray-900 text-white" : ""
                }`}
                onClick={() => setActive(category.id)}
              >
                <div className="flex items-center px-3 py-2">
                  <div className="mr-2">
                    {category.id === "all" && (
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                        />
                      </svg>
                    )}
                    {category.id === "important" && (
                      <svg
                        className="w-4 h-4 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    )}
                    {category.id === "trash" && (
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    )}

                    {category.id === "internalnotes" && <FaFile />}
                  </div>
                  <div className="flex-grow">{category.name}</div>
                  {category.id === "all" && (
                    <div className="text-xs bg-gray-700 text-white px-2 py-1 rounded">
                      {category.count}
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="px-4 py-2">
          <h6 className="text-gray-500 text-xs font-medium mb-2 flex justify-between">
            Tags
            <FaPlus className="cursor-pointer" onClick={handlePlusClicked} />
          </h6>

          <ul>
            {tags.map((tag) => (
              <li key={tag.id} className="mb-1">
                <div className="flex items-center px-3 py-2">
                  <div className="mr-2">
                    <span
                      className={`inline-block w-3 h-3 rounded-full ${tag.color}`}
                    ></span>
                  </div>
                  <div>{tag.name}</div>
                </div>
              </li>
            ))}

            {addedTags.map((tag) => (
              <li
                key={tag.id}
                className="mb-1 flex items-center justify-between bg-gray-200 p-2 rounded"
                style={{ margin: "10px" }}
              >
                <div className="flex items-center">
                  <span
                    className={`inline-block w-3 h-3 rounded-full ${tag.color} mr-2`}
                  ></span>
                  <div>{tag.name}</div>
                </div>
                <FaTrash
                  className="text-red-500 cursor-pointer"
                  onClick={() => handleRemoveTag(tag.id)}
                />
              </li>
            ))}
          </ul>

          {showAddTag && (
            <div className="mt-3 px-3 py-2 bg-gray-100 border rounded-md">
              <input
                type="text"
                className={`${
                  darkMode ? "dark-mode" : "bg-white"
                } border p-2 w-full rounded-md `}
                placeholder="Enter tag name"
                value={tagName}
                onChange={handleTagNameChange}
              />
              <button
                className="mt-2 bg-blue-500 text-white rounded-md w-full "
                onClick={handleAddTag}
              >
                Add Tag
              </button>
            </div>
          )}
        </div>

        <div className="px-4 py-2">
          <h6 className="text-gray-500 text-xs font-medium mb-2 flex justify-between">
            Priority
            <FaPlus className="cursor-pointer" onClick={handlePlusClick} />
          </h6>

          <ul>
            {priorities.map((priority) => (
              <li
                key={priority.id}
                className="mb-1 flex items-center justify-between"
              >
                <div className="flex items-center">
                  <i className="fa-solid fa-folder text-gray-600 mr-2"></i>
                  <div>{priority.name}</div>
                </div>
                <div
                  className={`inline-block w-3 h-3 rounded-full ${priority.color}`}
                ></div>
              </li>
            ))}

            {addedFolders.map((folder) => (
              <li
                key={folder.id}
                className="mb-1 flex items-center justify-between bg-gray-200  rounded"
                style={{ margin: "0px -13px", padding: "8px 13px" }}
              >
                <div className="flex items-center">
                  <i className="fa-solid fa-folder text-blue-600 mr-2"></i>
                  <div>{folder.name}</div>
                </div>
                <div className="flex items-center">
                  <FaTrash
                    className="text-red-500 cursor-pointer mr-2"
                    onClick={() => handleRemoveFolder(folder.id)}
                  />
                  <div
                    className={`inline-block w-3 h-3 rounded-full ${folder.color} `}
                  ></div>
                </div>
              </li>
            ))}
          </ul>

          {showAddFolder && (
            <div className="mt-3 px-3 py-2 bg-gray-100 border rounded-md">
              <input
                type="text"
                className="border p-2 w-full rounded-md"
                placeholder="Enter folder name"
                value={folderName}
                onChange={handleFolderNameChange}
              />
              <button
                className="mt-2 bg-blue-500 text-white p-2 rounded-md w-full"
                onClick={handleAddFolder}
              >
                Add Folder
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="flex-1 overflow-auto">
        {active === "internalnotes" ? (
          <InternalNotes />
        ) : (
          <div className="p-4 md:p-6">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3 mb-6">
              {/* Left side: Bulk Actions + Apply */}
              <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
                <div className="relative ">
                  <button className="flex items-center justify-between w-full  border border-gray-300 rounded px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500">
                    Bulk Actions
                    {/* <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg> */}
                  </button>
                </div>
                <button className=" border border-gray-300 rounded  text-sm w-full">
                  Apply
                </button>
              </div>

              {/* Right side: View toggle + Add Note */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 w-full md:w-auto">
                <div className="inv-search-wrapper">
                  <i className="bi bi-search inv-search-icon" />
                  <input
                    type="text"
                    className="inv-search-input h-11"
                    placeholder="Search Notes..."
                    aria-label="Search Notes"
                    value={searchTerm}
                    onChange={handleSearch}
                  />
                </div>
                <div className="flex border border-gray-300 rounded w-full sm:w-auto">
                  <button
                    className={`p-2 flex-1 ${
                      viewMode === "list"
                        ? "bg-gray-900 text-white"
                        : "bg-white text-gray-700"
                    }`}
                    onClick={() => setViewMode("list")}
                  >
                    <List size={18} />
                  </button>
                  <button
                    className={`p-2 flex-1 ${
                      viewMode === "grid"
                        ? "bg-gray-900 text-white"
                        : "bg-white text-gray-700"
                    }`}
                    onClick={() => setViewMode("grid")}
                  >
                    <Grid size={18} />
                  </button>
                </div>

                <button
                  className={`${
                    darkMode ? "text-white bg-indigo-800 border" : null
                  } rounded px-4 py-2 text-sm flex items-center justify-center w-full sm:w-auto`}
                  onClick={handleOpenAddNote}
                >
                  <Plus size={16} className="mr-1" />
                  Add Note
                </button>
              </div>
            </div>

            <h4 className="text-xl font-medium mb-4">Important Notes</h4>

            {viewMode === "list" ? (
              <div className="space-y-4">
                {notes.map((note) => (
                  <div
                    key={note.id}
                    className={`${
                      darkMode ? "card-dark" : "bg-white"
                    } rounded-lg shadow-sm overflow-hidden`}
                  >
                    <div className="p-4">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityClasses(
                              note.priority
                            )}`}
                          >
                            {note.priority}
                          </span>
                        </div>
                        <button className="text-gray-400 hover:text-gray-600">
                          <MoreVertical size={16} />
                        </button>
                      </div>

                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-2 gap-2">
                        <h5 className="font-medium">{note.title}</h5>
                        <div className="flex items-center gap-3">
                          <div className="bg-gray-200 rounded-full w-8 h-8 flex items-center justify-center">
                            <span className="text-gray-600 text-xs">JP</span>
                          </div>
                          <div className="text-sm">{note.category}</div>
                          <div className="flex">
                            <button
                              className="p-1 text-gray-400 hover:text-yellow-500"
                              onClick={() => handleToggleStar(note.id)}
                            >
                              <Star
                                size={16}
                                className={
                                  note.starred
                                    ? "text-yellow-500 fill-yellow-500"
                                    : ""
                                }
                              />
                            </button>
                            <button
                              className="p-1 text-gray-400 hover:text-red-500"
                              onClick={() => handleDeleteNote(note.id)}
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm mt-2">
                        {note.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredNotes.map((note) => (
                  <div
                    key={note.id}
                    className={`${
                      darkMode ? "dark-mode" : "bg-white"
                    } rounded-lg shadow-sm overflow-hidden border border-gray-200`}
                  >
                    <div className="p-4">
                      <div
                        className={`${
                          darkMode ? "dark-mode" : "bg-white"
                        } flex justify-between items-center mb-3 `}
                      >
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityClasses(
                            note.priority
                          )}`}
                        >
                          {note.priority}
                        </span>
                        <button className="text-gray-400 hover:text-gray-600">
                          <FaEllipsisV className="w-4 h-4" />
                        </button>
                      </div>
                      <h5 className="font-medium mb-2">{note.title}</h5>
                      <p className="text-gray-600 text-sm">
                        {note.description}
                      </p>
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
                          <button
                            className="p-1 text-gray-400 hover:text-yellow-500"
                            onClick={() => handleToggleStar(note.id)}
                          >
                            <FaStar
                              className={`w-4 h-4 ${
                                note.starred ? "text-yellow-500" : ""
                              }`}
                            />
                          </button>
                          <button
                            className="p-1 text-gray-400 hover:text-red-500"
                            onClick={() => handleDeleteNote(note.id)}
                          >
                            <FaTrash className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Main Content */}

      <AddNotePopup
        isOpen={isAddNoteOpen}
        onClose={handleCloseAddNote}
        onSave={handleSaveNote}
      />
    </div>
  );
};

export default NotesGrid;
