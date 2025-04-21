import React, { useState } from "react";
import {
  FaFolder,
  FaFilePdf,
  FaFileImage,
  FaFileAlt,
  FaStar,
  FaUserCircle,
  FaFolderPlus,
  FaGoogleDrive,
  FaSearch,
  FaEllipsisV,
  FaTh,
  FaList,
  FaUpload,
  FaShare,
  FaTrash,
  FaDownload
} from "react-icons/fa";
import { useSelector } from "react-redux";

// Sidebar Component with Drive-like styling
const Sidebar = ({ onAddFolder, setActiveFolder }) => {


  const darkMode = useSelector((state) => state.theme.isDarkMode);


  return (
    <div className={`${darkMode ? "dark-mode" : null } p-3`} style={{ backgroundColor: '#f8f9fa' }}>
      <div className="d-flex align-items-center mb-4">
        <h2 className="" style={{fontSize:"30px"}}>File</h2>
      </div>
      
      <ul className="list-unstyled">
        <li className="my-2 py-2 px-3 rounded hover-bg" onClick={() => setActiveFolder(null)}>
          <div className="d-flex align-items-center">
            <FaFolder className="text-warning me-2" />
            <span className="d-none d-md-inline">My File</span>
          </div>
        </li>
        <li className="my-2 py-2 px-3 rounded hover-bg">
          <div className="d-flex align-items-center">
            <FaStar className="text-warning me-2" />
            <span className="d-none d-md-inline">Starred</span>
          </div>
        </li>
        <li className="my-2 py-2 px-3 rounded hover-bg">
          <div className="d-flex align-items-center">
            <FaTrash className="text-secondary me-2" />
            <span className="d-none d-md-inline">Trash</span>
          </div>
        </li>
        <li className="my-2 py-2 px-3 rounded hover-bg">
          <div className="d-flex align-items-center">
            <FaFilePdf className="text-danger me-2" />
            <span className="d-none d-md-inline">PDFs</span>
          </div>
        </li>
        <li className="my-2 py-2 px-3 rounded hover-bg">
          <div className="d-flex align-items-center">
            <FaFileImage className="text-success me-2" />
            <span className="d-none d-md-inline">Images</span>
          </div>
        </li>
      </ul>
    </div>
  );
};

// FileDropdown Component
const FileDropdown = ({ file, onDelete, onShare, onDownload, onStar, onMoveToFolder }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const darkMode = useSelector((state) => state.theme.isDarkMode);

  return (
    <div className="position-relative">
      <button 
        className={`${darkMode ? "dark-mode" : null } btn btn-sm `}
        onClick={() => setShowDropdown(!showDropdown)}
      >
        <FaEllipsisV size={14} />
      </button>
      
      {showDropdown && (
        <div className="dropdown-menu show" style={{ 
          position: 'absolute', 
          right: 0, 
          top: '100%',
          zIndex: 1000
        }}>
          <button className="dropdown-item" onClick={() => { onStar(file); setShowDropdown(false); }}>
            <FaStar className="me-2" /> {file.starred ? "Unstar" : "Star"}
          </button>
          <button className="dropdown-item" onClick={() => { onShare(file); setShowDropdown(false); }}>
            <FaShare className="me-2" /> Share
          </button>
          <button className="dropdown-item" onClick={() => { onDownload(file); setShowDropdown(false); }}>
            <FaDownload className="me-2" /> Download
          </button>
          <button className="dropdown-item" onClick={() => { onMoveToFolder(file); setShowDropdown(false); }}>
            <FaFolder className="me-2" /> Move to Folder
          </button>
          <div className="dropdown-divider"></div>
          <button className="dropdown-item text-danger" onClick={() => { onDelete(file); setShowDropdown(false); }}>
            <FaTrash className="me-2" /> Delete
          </button>
        </div>
      )}
    </div>
  );
};

// FolderDropdown Component
const FolderDropdown = ({ folder, onDelete, onShare, onDownload, onOpen }) => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="position-relative">
      <button 
        className="btn btn-sm btn-light position-absolute top-0 end-0 m-1"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        <FaEllipsisV size={12} />
      </button>
      
      {showDropdown && (
        <div className="dropdown-menu show" style={{ 
          position: 'absolute', 
          right: 0, 
          top: '100%',
          zIndex: 1000
        }}>
          <button className="dropdown-item" onClick={() => { onOpen(folder); setShowDropdown(false); }}>
            <FaFolder className="me-2" /> Open
          </button>
          <button className="dropdown-item" onClick={() => { onShare(folder); setShowDropdown(false); }}>
            <FaShare className="me-2" /> Share
          </button>
          <button className="dropdown-item" onClick={() => { onDownload(folder); setShowDropdown(false); }}>
            <FaDownload className="me-2" /> Download
          </button>
          <div className="dropdown-divider"></div>
          <button className="dropdown-item text-danger" onClick={() => { onDelete(folder); setShowDropdown(false); }}>
            <FaTrash className="me-2" /> Delete
          </button>
        </div>
      )}
    </div>
  );
};

// FileContent Component with Drive-like styling
const FileContent = ({ activeFolder, setActiveFolder }) => {
  const [files, setFiles] = useState([
    {
      id: 1,
      name: "Secret Document",
      size: "7.4 MB",
      type: "PDF",
      modified: "Mar 15, 2025",
      starred: true,
      folderId: 1,
      icon: <FaFilePdf className="text-danger" />,
    },
    {
      id: 2,
      name: "Rewards Program",
      size: "1.2 MB",
      type: "PDF",
      modified: "Jan 10, 2025",
      starred: false,
      folderId: 2,
      icon: <FaFilePdf className="text-danger" />,
    },
    {
      id: 3,
      name: "Vacation Photos",
      size: "1.8 MB",
      type: "Image",
      modified: "Aug 25, 2025",
      starred: false,
      folderId: 3,
      icon: <FaFileImage className="text-success" />,
    },
    {
      id: 4,
      name: "Resume",
      size: "500 KB",
      type: "Word",
      modified: "Apr 21, 2025",
      starred: false,
      folderId: null,
      icon: <FaFileAlt className="text-info" />,
    },
    {
      id: 5,
      name: "Project Notes",
      size: "2 MB",
      type: "Text",
      modified: "Oct 12, 2025",
      starred: false,
      folderId: 4,
      icon: <FaFileAlt className="text-secondary" />,
    },
  ]);

  const [folders, setFolders] = useState([
    { id: 1, name: "Personal Assets", icon: <FaFolder className="text-warning" />, count: 1, color: "bg-warning-light" },
    { id: 2, name: "Documents", icon: <FaFolder className="text-primary" />, count: 1, color: "bg-primary-light" },
    { id: 3, name: "Images", icon: <FaFolder className="text-success" />, count: 1, color: "bg-success-light" },
    { id: 4, name: "Projects", icon: <FaFolder className="text-danger" />, count: 1, color: "bg-danger-light" },
  ]);

  const [showAddFolderModal, setShowAddFolderModal] = useState(false);
  const [newFolderName, setNewFolderName] = useState("");
  const [showAddFileModal, setShowAddFileModal] = useState(false);
  const [newFileName, setNewFileName] = useState("");
  const [newFileType, setNewFileType] = useState("PDF");
  const [uploadFile, setUploadFile] = useState(null);
  const [showMoveToFolderModal, setShowMoveToFolderModal] = useState(false);
  const [fileToMove, setFileToMove] = useState(null);
  const [selectedFolderId, setSelectedFolderId] = useState(null);

  // Filter files based on active folder
  const filteredFiles = activeFolder 
    ? files.filter(file => file.folderId === activeFolder.id)
    : files.filter(file => !file.folderId);

  // Folder actions
  const handleDeleteFolder = (folder) => {
    // Remove folder and any files in it
    setFolders(folders.filter(f => f.id !== folder.id));
    setFiles(files.filter(f => f.folderId !== folder.id));
  };

  const handleShareFolder = (folder) => {
    alert(`Sharing folder: ${folder.name}`);
  };

  const handleDownloadFolder = (folder) => {
    alert(`Downloading folder: ${folder.name}`);
  };

  const handleOpenFolder = (folder) => {
    setActiveFolder(folder);
  };

  // File actions
  const handleDeleteFile = (file) => {
    setFiles(files.filter(f => f.id !== file.id));
    // Update folder count
    if (file.folderId) {
      setFolders(folders.map(folder => 
        folder.id === file.folderId 
          ? { ...folder, count: folder.count - 1 } 
          : folder
      ));
    }
  };

  const handleShareFile = (file) => {
    alert(`Sharing file: ${file.name}`);
  };

  const handleDownloadFile = (file) => {
    alert(`Downloading file: ${file.name}`);
  };

  const handleStarFile = (file) => {
    setFiles(files.map(f => 
      f.id === file.id ? { ...f, starred: !f.starred } : f
    ));
  };

  const handleMoveToFolder = (file) => {
    setFileToMove(file);
    setShowMoveToFolderModal(true);
  };

  const handleMoveToFolderSubmit = () => {
    if (!fileToMove || !selectedFolderId) return;
    
    // Update the file's folderId
    setFiles(files.map(file => 
      file.id === fileToMove.id 
        ? { ...file, folderId: selectedFolderId } 
        : file
    ));
    
    // Update folder counts
    setFolders(folders.map(folder => {
      if (folder.id === selectedFolderId) {
        return { ...folder, count: folder.count + 1 };
      }
      if (folder.id === fileToMove.folderId) {
        return { ...folder, count: folder.count - 1 };
      }
      return folder;
    }));
    
    setShowMoveToFolderModal(false);
    setFileToMove(null);
    setSelectedFolderId(null);
  };

  const handleAddFolder = () => {
    setShowAddFolderModal(true);
  };

  const handleAddFolderSubmit = (e) => {
    e.preventDefault();
    if (!newFolderName) return;
    
    const today = new Date();
    const formattedDate = today.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
    
    const newFolder = {
      id: folders.length + 1,
      name: newFolderName,
      icon: <FaFolder className="text-warning" />,
      count: 0,
      color: "bg-info-light",
      modified: formattedDate
    };
    
    setFolders([...folders, newFolder]);
    setNewFolderName("");
    setShowAddFolderModal(false);
  };

  const handleAddFileSubmit = (e) => {
    e.preventDefault();
    if (!newFileName) return;
    
    const today = new Date();
    const formattedDate = today.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
    
    const newFile = {
      id: files.length + 1,
      name: newFileName,
      size: "1.0 MB",
      type: newFileType,
      modified: formattedDate,
      starred: false,
      folderId: activeFolder ? activeFolder.id : null,
      icon: newFileType === "PDF" 
        ? <FaFilePdf className="text-danger" /> 
        : newFileType === "Image" 
          ? <FaFileImage className="text-success" /> 
          : <FaFileAlt className="text-info" />
    };
    
    setFiles([...files, newFile]);
    
    // Update folder count if added to a folder
    if (activeFolder) {
      setFolders(folders.map(folder => 
        folder.id === activeFolder.id 
          ? { ...folder, count: folder.count + 1 } 
          : folder
      ));
    }
    
    setNewFileName("");
    setShowAddFileModal(false);
  };

  const handleFileUpload = (e) => {
    e.preventDefault();
    if (!uploadFile) return;
    
    const today = new Date();
    const formattedDate = today.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
    
    const fileType = uploadFile.name.split('.').pop().toUpperCase();
    const sizeInMB = (uploadFile.size / (1024 * 1024)).toFixed(1);
    
    const newFile = {
      id: files.length + 1,
      name: uploadFile.name,
      size: `${sizeInMB} MB`,
      type: fileType,
      modified: formattedDate,
      starred: false,
      folderId: activeFolder ? activeFolder.id : null,
      icon: fileType === "PDF" 
        ? <FaFilePdf className="text-danger" /> 
        : ["JPG", "PNG", "GIF"].includes(fileType)
          ? <FaFileImage className="text-success" /> 
          : <FaFileAlt className="text-info" />
    };
    
    setFiles([...files, newFile]);
    
    // Update folder count if added to a folder
    if (activeFolder) {
      setFolders(folders.map(folder => 
        folder.id === activeFolder.id 
          ? { ...folder, count: folder.count + 1 } 
          : folder
      ));
    }
    
    setUploadFile(null);
    document.getElementById('fileUpload').value = '';
  };

  const darkMode = useSelector((state) => state.theme.isDarkMode);

  return (
    <div className="p-3">
      {/* Add Folder Modal */}
      {showAddFolderModal && (
        <div className="modal-backdrop">
          <div className="modal-content  p-4 rounded" style={{ width: '400px', maxWidth: '90%' }}>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h5>Create New Folder</h5>
              <button 
                className="btn-close" 
                onClick={() => setShowAddFolderModal(false)}
              ></button>
            </div>
            <form onSubmit={handleAddFolderSubmit}>
              <div className="mb-3">
                <label htmlFor="folderName" className="form-label">Folder Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="folderName"
                  value={newFolderName}
                  onChange={(e) => setNewFolderName(e.target.value)}
                  required
                />
              </div>
              <div className="d-flex justify-content-end">
                <button 
                  type="button" 
                  className="btn btn-secondary me-2"
                  onClick={() => setShowAddFolderModal(false)}
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">Create</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Add File Modal */}
      {showAddFileModal && (
        <div className="modal-backdrop">
          <div className="modal-content bg-white p-4 rounded" style={{ width: '400px', maxWidth: '90%' }}>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h5>Add New File</h5>
              <button 
                className="btn-close" 
                onClick={() => setShowAddFileModal(false)}
              ></button>
            </div>
            <form onSubmit={handleAddFileSubmit}>
              <div className="mb-3">
                <label htmlFor="fileName" className="form-label">File Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="fileName"
                  value={newFileName}
                  onChange={(e) => setNewFileName(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="fileType" className="form-label">File Type</label>
                <select
                  className="form-select"
                  id="fileType"
                  value={newFileType}
                  onChange={(e) => setNewFileType(e.target.value)}
                >
                  <option value="PDF">PDF</option>
                  <option value="Image">Image</option>
                  <option value="Text">Text</option>
                </select>
              </div>
              <div className="d-flex justify-content-end">
                <button 
                  type="button" 
                  className="btn btn-secondary me-2"
                  onClick={() => setShowAddFileModal(false)}
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">Add File</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Upload File Modal */}
      {uploadFile && (
        <div className="modal-backdrop">
          <div className="modal-content bg-white p-4 rounded" style={{ width: '400px', maxWidth: '90%' }}>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h5>Upload File</h5>
              <button 
                className="btn-close" 
                onClick={() => setUploadFile(null)}
              ></button>
            </div>
            <div className="mb-3">
              <p>File: {uploadFile.name}</p>
              <p>Size: {(uploadFile.size / (1024 * 1024)).toFixed(2)} MB</p>
              {activeFolder && <p>Will be added to: {activeFolder.name}</p>}
            </div>
            <div className="d-flex justify-content-end">
              <button 
                type="button" 
                className="btn btn-secondary me-2"
                onClick={() => setUploadFile(null)}
              >
                Cancel
              </button>
              <button 
                type="button" 
                className="btn btn-primary"
                onClick={handleFileUpload}
              >
                Upload
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Move to Folder Modal */}
      {showMoveToFolderModal && (
        <div className="modal-backdrop">
          <div className="modal-content bg-white p-4 rounded" style={{ width: '400px', maxWidth: '90%' }}>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h5>Move File to Folder</h5>
              <button 
                className="btn-close" 
                onClick={() => setShowMoveToFolderModal(false)}
              ></button>
            </div>
            <div className="mb-3">
              <p>Moving: {fileToMove?.name}</p>
              <label className="form-label">Select Folder:</label>
              <select
                className="form-select"
                value={selectedFolderId || ""}
                onChange={(e) => setSelectedFolderId(Number(e.target.value))}
              >
                <option value="">-- Select a folder --</option>
                {folders.map(folder => (
                  <option key={folder.id} value={folder.id}>
                    {folder.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="d-flex justify-content-end">
              <button 
                type="button" 
                className="btn btn-secondary me-2"
                onClick={() => setShowMoveToFolderModal(false)}
              >
                Cancel
              </button>
              <button 
                type="button" 
                className="btn btn-primary"
                onClick={handleMoveToFolderSubmit}
                disabled={!selectedFolderId}
              >
                Move
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Breadcrumb Navigation */}
      <nav aria-label="breadcrumb" className="mb-3">
        <ol className="breadcrumb">
          <li 
            className="breadcrumb-item" 
            style={{ cursor: 'pointer' }}
            onClick={() => setActiveFolder(null)}
          >
           
          </li>
          {activeFolder && (
            <li className="breadcrumb-item active" aria-current="page">
              {activeFolder.name}
            </li>
          )}
        </ol>
      </nav>

      {/* Header / Navbar */}
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mb-4">
        <div className="d-flex align-items-center mb-3 mb-md-0 w-100">
          <h4 className="mb-0 me-3 d-none d-md-block">
            {activeFolder ? activeFolder.name : 'My Drive'}
          </h4>
          <div className="input-group w-100" style={{ maxWidth: '400px' }}>
            <span className="input-group-text ">
              <FaSearch className=""/>
            </span>
            <input 
              type="text" 
              className="form-control" 
              placeholder="Search in Drive" 
            />
          </div>
        </div>
        <div className="d-flex w-100 w-md-auto justify-content-between justify-content-md-end">
          <button 
            className={`${darkMode ? "card-dark" : null } btn btn-light me-2 d-flex align-items-center`}
            onClick={() => setShowAddFileModal(true)}
          >
            <FaFileAlt className="me-2" /> <span className="d-none d-md-inline">New File</span>
          </button>
          <form className="me-2">
            <label htmlFor="fileUpload" className={`${darkMode ? "card-dark" : null } btn btn-light d-flex align-items-center mb-0`}>
              <FaUpload className="me-2" /> <span className="d-none d-md-inline">Upload</span>
              <input 
                type="file" 
                id="fileUpload" 
                style={{ display: 'none' }} 
                onChange={(e) => setUploadFile(e.target.files[0])}
              />
            </label>
          </form>
          <button className="btn btn-light me-2 d-none d-md-block">
            <FaTh />
          </button>
          <button className="btn btn-light d-none d-md-block">
            <FaList />
          </button>
        </div>
      </div>

      {/* Recent Folders - Only show when not inside a folder */}
      {!activeFolder && (
        <>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h5 className="mb-0">Folders</h5>
            <button 
              className= {`${darkMode ? "card-dark" : null } btn btn-primary align-items-center justify-content-center d-flex`}
              onClick={handleAddFolder}
            >
              <FaFolderPlus className="me-1" /> New
            </button>
          </div>
          <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 g-3 mb-4">
            {folders.map((folder) => (
              <div className="col" style={{width:"25%", position: "relative"}} key={folder.id}>
                <div 
                  className={`card h-100 border-0 ${folder.color} hover-shadow`}
                  onClick={() => handleOpenFolder(folder)}
                  style={{ cursor: 'pointer' }}
                >
                  <FolderDropdown 
                    folder={folder}
                    onDelete={handleDeleteFolder}
                    onShare={handleShareFolder}
                    onDownload={handleDownloadFolder}
                    onOpen={handleOpenFolder}
                  />
                  <div className="card-body text-center">
                    <div className="fs-2 mb-2">{folder.icon}</div>
                    <h6 className="card-title text-truncate">{folder.name}</h6>
                    <p className="card-text small  d-none d-md-block">
                      {folder.count} {folder.count === 1 ? 'item' : 'items'}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {/* Files Table */}
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mb-3">
        <h5 className="mb-3 mb-md-0">
          {activeFolder ? `Files in ${activeFolder.name}` : 'Files'}
        </h5>
        <div className={`${darkMode ? "dark-mode" : null } d-flex`}>
          <div className="me-3">
            <label htmlFor="sortBy" className="me-2 small d-none d-md-inline">
              Sort:
            </label>
            <select
              id="sortBy"
              className="form-select form-select-sm d-inline-block"
              style={{ width: 'auto' }}
            >
              <option>Name</option>
              <option>Modified</option>
              <option>Size</option>
              <option>Type</option>
            </select>
          </div>
        </div>
      </div>
      <div className="table-responsive">
        <table className={`${darkMode ? "table-dark" : null } table align-middle table-hover`}>
          <thead className="table-active">
            <tr>
              <th scope="col">Name</th>
              <th scope="col" className=" d-md-table-cell">Size</th>
              <th scope="col" className="d-none d-md-table-cell">Type</th>
              <th scope="col" className="d-none d-md-table-cell">Modified</th>
              <th scope="col" className="d-none d-md-table-cell">Folder</th>
              <th scope="col" className="text-center">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredFiles.map((file) => (
              <tr key={file.id}>
                <td>
                  <div className="d-flex align-items-center">
                    <span className="me-3">{file.icon}</span>
                    <span className="text-truncate" style={{maxWidth: '150px'}}>{file.name}</span>
                    {file.starred && <FaStar className="text-warning ms-2" size={14} />}
                  </div>
                </td>
                <td className=" d-none d-md-table-cell">{file.size}</td>
                <td className=" d-none d-md-table-cell">{file.type}</td>
                <td className=" d-none d-md-table-cell">{file.modified}</td>
                <td className=" d-none d-md-table-cell">
                  {file.folderId ? folders.find(f => f.id === file.folderId)?.name : 'My Drive'}
                </td>
                <td className="text-center">
                  <div className="d-flex justify-content-center">
                    <FileDropdown 
                      file={file}
                      onDelete={handleDeleteFile}
                      onShare={handleShareFile}
                      onDownload={handleDownloadFile}
                      onStar={handleStarFile}
                      onMoveToFolder={handleMoveToFolder}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mt-3">
        <div className=" small mb-2 mb-md-0">
          Showing 1 to {filteredFiles.length} of {filteredFiles.length} items
        </div>
        <nav>
          <ul className="pagination pagination-sm mb-0">
            <li className="page-item disabled">
              <button className="page-link">Previous</button>
            </li>
            <li className="page-item active">
              <button className="page-link">1</button>
            </li>
            <li className="page-item">
              <button className="page-link">2</button>
            </li>
            <li className="page-item">
              <button className="page-link">Next</button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

// Main FileManager Component
const FileManager = () => {
  const [activeFolder, setActiveFolder] = useState(null);
  const darkMode = useSelector((state) => state.theme.isDarkMode);

  return (
    <div className="container-fluid">
      <div className="row g-0">
        {/* Sidebar Column - Hidden on mobile, shown on tablet and up */}
        <div
          className="col-12 col-md-3 col-lg-2 border-end d-none d-md-block"
          style={{ minHeight: "100vh",  }}
        >
          <Sidebar onAddFolder={() => {}} setActiveFolder={setActiveFolder} />
        </div>
        {/* Main Content Column - Full width on mobile, adjusted on tablet and up */}
        <div className={`${darkMode ? "dark-mode" : null } col-12 col-md-9 col-lg-10 p-3`}>
          <FileContent activeFolder={activeFolder} setActiveFolder={setActiveFolder} />
        </div>
      </div>
    </div>
  );
};

// Add these styles to your CSS
const styles = `
  .hover-bg:hover {
    background-color: #e9ecef;
    cursor: pointer;
  }
  .hover-shadow:hover {
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
    transition: box-shadow 0.2s ease;
  }
  .bg-warning-light {
    background-color: rgba(255, 193, 7, 0.1);
  }
  .bg-primary-light {
    background-color: rgba(13, 110, 253, 0.1);
  }
  .bg-success-light {
    background-color: rgba(25, 135, 84, 0.1);
  }
  .bg-danger-light {
    background-color: rgba(220, 53, 69, 0.1);
  }
  .bg-info-light {
    background-color: rgba(13, 202, 240, 0.1);
  }
  .modal-backdrop {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.5);
    z-index: 1050;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .modal-content {
    background-color: white;
    padding: 1.5rem;
    border-radius: 0.5rem;
    
    
  }
  .dropdown-menu {
    min-width: 10rem;
  }
  .dropdown-item {
    padding: 0.25rem 1rem;
    font-size: 0.875rem;
  }
`;

export default FileManager;

// Add the styles to the head
const styleElement = document.createElement('style');
styleElement.innerHTML = styles;
document.head.appendChild(styleElement);