

import React, { useState } from 'react';

const CRMDashboard = () => {
  const [activeMainTab, setActiveMainTab] = useState('summary');
  const [activeSideTab, setActiveSideTab] = useState('schedule');

  const stats = [
    { title: 'CALLS', value: 0, color: 'text-purple-600' },
    { title: 'EMAILS', value: 0, color: 'text-blue-600' },
    { title: 'TO-DOS', value: 2, color: 'text-green-600' },
    { title: 'LINKEDIN', value: 0, color: 'text-yellow-600' },
    { title: 'OVERDUE', value: 173, color: 'text-red-600' },
    { title: 'DUE TOMORROW', value: 0, color: 'text-gray-600' }
  ];

  const schedule = [
    { time: '08:00', title: '2 to-do tasks' },
    { time: '11:00', title: 'Prospecting new business', type: 'success' },
    { time: '13:00', title: 'Deep Work Focus Time', type: 'info', attendees: '1 attendee' }
  ];

  const mainTabs = [
    { id: 'summary', label: 'Summary' },
    

    // { id: 'leads', label: 'Leads' },
    // { id: 'deals', label: 'Deals' },
    // { id: 'schedule', label: 'Schedule' },
    // { id: 'feed', label: 'Feed' }
  ];

  const sideTabs = [
    { id: 'schedule', label: 'Schedule' },
    { id: 'insights', label: 'Insights' },
    { id: 'feed', label: 'Feed' }
  ];

  const getBackgroundColor = (type) => {
    switch (type) {
      case 'success':
        return 'bg-green-100';
      case 'info':
        return 'bg-blue-100';
      default:
        return '';
    }
  };

  const renderTabContent = (tabId) => {
    switch (tabId) {
      case 'summary':
        return (
          <>
            <div className="mb-6">
              <div className="w-full">
                <h6 className="mb-3 font-medium">Your tasks today</h6>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                  {stats.map((stat, index) => (
                    <div key={index} className="h-full">
                      <div className="p-4 text-center rounded shadow-md h-full bg-white">
                        <h3 className={`text-xl font-bold ${stat.color}`}>{stat.value}</h3>
                        <small className="text-gray-500">{stat.title}</small>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
              <div className="lg:col-span-8">
                <div className="p-4 border rounded bg-white">
                  <h6 className="mb-3 font-medium flex items-center">
                    Guided actions
                    <span className="ml-2 inline-flex items-center justify-center w-5 h-5 text-xs font-semibold rounded-full bg-gray-200">i</span>
                  </h6>
                  <div className="flex mb-3 border rounded overflow-hidden">
                    <button className="px-3 py-2 bg-gray-100 font-medium">All actions (7)</button>
                    <button className="px-3 py-2 hover:bg-gray-50">Closing related (5)</button>
                    <button className="px-3 py-2 hover:bg-gray-50">Prospecting related (2)</button>
                  </div>
                  
                  <div className="border rounded">
                    <div className="p-4 border-b">
                      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                        <div>
                          <div className="flex items-start">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-500 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <div>
                              <strong className="font-medium">Send a follow up email to Scott Davies</strong>
                              <p className="text-gray-500 text-sm">Scott Davies opened your last email but hasn't replied yet</p>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <strong className="font-medium">Coller Capital - London</strong>
                          <p className="text-gray-500 text-sm">Support contract</p>
                          <p className="text-gray-500 text-sm">Amount: £105,460.00</p>
                          <p className="text-gray-500 text-sm">Close date: 12/12/2024</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4">
                <div className="p-4 border rounded bg-white">
                  <div className="flex justify-between items-center mb-3">
                    <div className="flex border-b">
                      {sideTabs.map(tab => (
                        <button
                          key={tab.id}
                          className={`px-3 py-2 font-medium ${activeSideTab === tab.id ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-600 hover:text-gray-800'}`}
                          onClick={() => setActiveSideTab(tab.id)}
                        >
                          {tab.label}
                        </button>
                      ))}
                    </div>
                    <div className="flex">
                      <button className="p-1 text-gray-500 hover:text-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      <button className="p-1 text-gray-500 hover:text-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <h6 className="mb-3 font-medium">Today, 25 December</h6>
                  <div>
                    {schedule.map((item, index) => (
                      <div key={index} className="mb-3">
                        <div className="flex">
                          <div className="mr-3 text-gray-500 w-12">{item.time}</div>
                          <div className={`flex-grow p-2 rounded ${getBackgroundColor(item.type)}`}>
                            <div>{item.title}</div>
                            {item.attendees && <small className="text-gray-500">{item.attendees}</small>}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      case 'leads':
        return <div className="p-4">Leads content goes here</div>;
      case 'deals':
        return <div className="p-4">Deals content goes here</div>;
      case 'schedule':
        return <div className="p-4">Schedule content goes here</div>;
      case 'feed':
        return <div className="p-4">Feed content goes here</div>;
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="mb-6">
        <div className="w-full">
          <div className="flex items-center">
            <h5 className="text-xl font-bold">Sales</h5>
            <div className="relative inline-block text-left ml-2">
              <button type="button" className="inline-flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md bg-white text-gray-700 hover:bg-gray-50 focus:outline-none">
               John Doe
                <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <div className="w-full">
          <div className="flex border-b overflow-x-auto">
            {mainTabs.map(tab => (
              <button
                key={tab.id}
                className={`px-4 py-2 font-medium whitespace-nowrap ${activeMainTab === tab.id ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-600 hover:text-gray-800'}`}
                onClick={() => setActiveMainTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {renderTabContent(activeMainTab)}
    </div>
  );
};

export default CRMDashboard;
