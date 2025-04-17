import React from 'react'
import { useNavigate } from 'react-router-dom';

const Candidate = () => {
  const navigate = useNavigate();
  return (
    <div>
        <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Candidates Grid</title>
  <link
    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
    rel="stylesheet"
  />
  <link
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
    rel="stylesheet"
  />
  <link
    href="https://ai-public.creatie.ai/gen_page/tailwind-custom.css"
    rel="stylesheet"
  />
  <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <div className="mb-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Candidates</h1>
          <nav className="flex mt-2" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2">
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-500 hover:text-gray-700"
                >
                  Administration
                </a>
              </li>
              <li className="flex items-center">
                <i className="fas fa-chevron-right text-gray-400 text-xs mx-2" />
                <span className="text-sm text-gray-700">Candidates Grid</span>
              </li>
            </ol>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          {/* <div className="flex items-center space-x-2 bg-white rounded-md shadow-sm border border-gray-200 p-1">
            <button className="p-2 text-gray-400 hover:text-gray-600">
              <i className="fas fa-list" />
            </button>
            <button className="p-2 text-custom bg-gray-100 rounded-md">
              <i className="fas fa-grid-2" />
            </button>
          </div> */}
          <button className="!rounded-button inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
            Export <i className="fas fa-chevron-down ml-2" />
          </button>
        </div>
      </div>
    </div>
    <div className="bg-white rounded-lg shadow mb-6">
      <div className="p-4 flex flex-wrap items-center gap-4">
        <div className="flex-1 min-w-[240px]">
          <div className="relative">
            <input
              type="text"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-custom focus:border-custom"
              placeholder="03/12/2025 - 03/18/2025"
            />
            <i className="fas fa-calendar absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>
        </div>
        <div className="flex-1 min-w-[200px]">
          <select className="w-full border-gray-300 rounded-md focus:ring-custom focus:border-custom">
            <option>Select Role</option>
            <option>Accountant</option>
            <option>Technician</option>
            <option>Developer</option>
          </select>
        </div>
        <div className="flex-1 min-w-[200px]">
          <select className="w-full border-gray-400 ring-custom rounded-md focus:ring-custom focus:border-custom">
            <option>Select Status</option>
            <option>New</option>
            <option>Scheduled</option>
            <option>Interviewed</option>
          </select>
        </div>
        <div className="flex-1 min-w-[200px]">
          <select className="w-full border-gray-300 rounded-md focus:ring-custom focus:border-custom">
            <option>Sort By: Last 7 Days</option>
            <option>Newest First</option>
            <option>Oldest First</option>
          </select>
        </div>
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="bg-white rounded-lg shadow p-6 pointer-cursor" onClick={() => navigate("/recruitment/individualcandidatepage")}>
        <div className="flex items-center space-x-4 mb-6">
          <img
            src="https://creatie.ai/ai/api/search-image?query=A professional headshot of a businessman in a light blue shirt against a neutral background, looking confident and approachable&width=80&height=80&orientation=squarish&flag=39173e97-629f-40a7-a305-17db3eab63d2"
            className="w-16 h-16 rounded-full object-cover"
            alt="Harold Gaynor"
          />
          <div>
            <div className="flex items-center">
              <h3 className="text-lg font-medium text-gray-900">
                Harold Gaynor
              </h3>
              <span className="ml-2 text-sm text-gray-500">Cand-001</span>
            </div>
            <p className="text-gray-500">harold@example.com</p>
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex justify-between">
            <span className="text-gray-500">Applied Role</span>
            <span className="font-medium text-gray-900">Accountant</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Applied Date</span>
            <span className="font-medium text-gray-900">12 Sep 2024</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-500">Status</span>
            <span className="px-3 py-1 text-sm font-medium bg-purple-100 text-purple-800 rounded-full">
              New
            </span>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center space-x-4 mb-6">
          <img
            src="https://creatie.ai/ai/api/search-image?query=A professional headshot of a businesswoman in a beige blazer against a neutral background, looking confident and friendly&width=80&height=80&orientation=squarish&flag=f7e5fd79-e971-4cd5-8eb2-1096957465bb"
            className="w-16 h-16 rounded-full object-cover"
            alt="Sandra Ornellas"
          />
          <div>
            <div className="flex items-center">
              <h3 className="text-lg font-medium text-gray-900">
                Sandra Ornellas
              </h3>
              <span className="ml-2 text-sm text-gray-500">Cand-002</span>
            </div>
            <p className="text-gray-500">sandra@example.com</p>
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex justify-between">
            <span className="text-gray-500">Applied Role</span>
            <span className="font-medium text-gray-900">Accountant</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Applied Date</span>
            <span className="font-medium text-gray-900">12 Sep 2024</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-500">Status</span>
            <span className="px-3 py-1 text-sm font-medium bg-pink-100 text-pink-800 rounded-full">
              Scheduled
            </span>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center space-x-4 mb-6">
          <img
            src="https://creatie.ai/ai/api/search-image?query=A professional headshot of a businessman in a dark suit against a neutral background, looking professional and trustworthy&width=80&height=80&orientation=squarish&flag=c01fdb8a-f868-4669-86ec-fe9772a2e1b5"
            className="w-16 h-16 rounded-full object-cover"
            alt="John Harris"
          />
          <div>
            <div className="flex items-center">
              <h3 className="text-lg font-medium text-gray-900">John Harris</h3>
              <span className="ml-2 text-sm text-gray-500">Cand-003</span>
            </div>
            <p className="text-gray-500">john@example.com</p>
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex justify-between">
            <span className="text-gray-500">Applied Role</span>
            <span className="font-medium text-gray-900">Technician</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Applied Date</span>
            <span className="font-medium text-gray-900">12 Sep 2024</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-gray-500">Status</span>
            <span className="px-3 py-1 text-sm font-medium bg-blue-100 text-blue-800 rounded-full">
              Interviewed
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</>
    </div>
  )
}

export default Candidate