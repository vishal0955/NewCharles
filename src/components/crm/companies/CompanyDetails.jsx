import React from 'react';

const CompanyDetails = () => {
  const companyData = {
    name: 'Acme Corporation',
    description: 'Technology Solutions Provider',
    email: 'contact@acme.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    stats: {
      openDeals: {
        amount: 245000,
        growth: 12,
        label: 'Open Deals'
      },
      activeProjects: {
        count: 8,
        dueThisWeek: 3,
        label: 'Active Projects'
      },
      supportTickets: {
        count: 12,
        highPriority: 4,
        label: 'Support Tickets'
      }
    },
    companyDetails: {
      industry: 'Technology',
      size: '500-1000',
      revenue: '$50M - $100M'
    },
    keyContacts: [
      { name: 'John Smith', role: 'CEO', avatar: 'JS' },
      { name: 'Sarah Johnson', role: 'CTO', avatar: 'SJ' }
    ],
    recentActivities: [
      {
        type: 'email',
        title: 'Email sent to John Smith',
        description: 'Regarding Q4 project proposal',
        time: '2 hours ago'
      },
      {
        type: 'call',
        title: 'Call with Sarah Johnson',
        description: 'Technical requirements discussion',
        time: 'Yesterday'
      },
      {
        type: 'task',
        title: 'New task created',
        description: 'Follow up on contract renewal',
        time: '2 days ago'
      }
    ],
    openDeals: [
      {
        title: 'Enterprise Software License',
        amount: 150000,
        stage: 'Negotiation',
        status: 'In Progress'
      },
      {
        title: 'Cloud Migration Project',
        amount: 95000,
        stage: 'Proposal',
        status: 'Qualified'
      }
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200">
        <div className="h-8">
          {/* <img src="path-to-logo" alt="Logo" className="h-full" /> */}
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2 text-sm font-medium text-white bg-black rounded hover:bg-gray-800">
            Customize
          </button>
          {/* <button className="px-4 py-2 text-sm font-medium text-gray-700 border border-gray-200 rounded hover:bg-gray-50">
            <i className="mr-1">⚙️</i> Settings
          </button> */}
        </div>
      </div>

      {/* Company Title Section */}
      <div className="px-6 py-6 bg-gray-50">
        <h1 className="text-2xl font-medium text-gray-900">{companyData.name}</h1>
        <p className="mt-1 text-sm text-gray-500">{companyData.description}</p>
        
        <div className="flex flex-wrap gap-2 mt-4">
          <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded hover:bg-gray-50">
            <i className="mr-2">📝</i> Note
          </button>
          <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded hover:bg-gray-50">
            <i className="mr-2">✉️</i> Email
          </button>
          <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded hover:bg-gray-50">
            <i className="mr-2">📞</i> Call
          </button>
          <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded hover:bg-gray-50">
            <i className="mr-2">📅</i> Meeting
          </button>
        </div>
      </div>

      <div className="p-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Sidebar */}
          <div className="lg:w-1/4">
            {/* Contact Information */}
            <div className="p-5 bg-white border border-gray-200 rounded-lg mb-6">
              <h2 className="text-sm font-medium text-gray-900 mb-4">Contact Information</h2>
              <div className="space-y-3">
                <div className="flex items-center text-sm text-gray-600">
                  <i className="mr-2">✉️</i>
                  <span>{companyData.email}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <i className="mr-2">📞</i>
                  <span>{companyData.phone}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <i className="mr-2">📍</i>
                  <span>{companyData.location}</span>
                </div>
              </div>
            </div>

            {/* Company Details */}
            <div className="p-5 bg-white border border-gray-200 rounded-lg mb-6">
              <h2 className="text-sm font-medium text-gray-900 mb-4">Company Details</h2>
              <div className="space-y-3">
                <div className="text-sm">
                  <span className="text-gray-500">Industry:</span>
                  <span className="ml-2 text-gray-900">{companyData.companyDetails.industry}</span>
                </div>
                <div className="text-sm">
                  <span className="text-gray-500">Size:</span>
                  <span className="ml-2 text-gray-900">{companyData.companyDetails.size}</span>
                </div>
                <div className="text-sm">
                  <span className="text-gray-500">Revenue:</span>
                  <span className="ml-2 text-gray-900">{companyData.companyDetails.revenue}</span>
                </div>
              </div>
            </div>

            {/* Key Contacts */}
            <div className="p-5 bg-white border border-gray-200 rounded-lg">
              <h2 className="text-sm font-medium text-gray-900 mb-4">Key Contacts</h2>
              <div className="space-y-4">
                {companyData.keyContacts.map((contact, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-sm text-gray-600">
                      {contact.avatar}
                    </div>
                    <div className="ml-3">
                      <div className="text-sm font-medium text-gray-900">{contact.name}</div>
                      <div className="text-xs text-gray-500">{contact.role}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            {/* Tabs */}
            <div className="border-b border-gray-200">
              <nav className="-mb-px flex">
                <a href="#overview" className="border-b-2 border-black px-6 py-4 text-sm font-medium text-black">Overview</a>
                <a href="#activities" className="px-6 py-4 text-sm font-medium text-gray-500 hover:text-gray-700">Activities</a>
                <a href="#insights" className="px-6 py-4 text-sm font-medium text-gray-500 hover:text-gray-700">AI Insights</a>
              </nav>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              {/* Open Deals */}
              <div className="p-5 bg-white border border-gray-200 rounded-lg">
                <h3 className="text-sm text-gray-500 mb-2">{companyData.stats.openDeals.label}</h3>
                <div className="text-2xl font-medium text-gray-900">
                  ${companyData.stats.openDeals.amount.toLocaleString()}
                </div>
                <div className="mt-2 text-sm text-green-600 flex items-center">
                  <i className="mr-1">↑</i>
                  {companyData.stats.openDeals.growth}% from last month
                </div>
              </div>

              {/* Active Projects */}
              <div className="p-5 bg-white border border-gray-200 rounded-lg">
                <h3 className="text-sm text-gray-500 mb-2">{companyData.stats.activeProjects.label}</h3>
                <div className="text-2xl font-medium text-gray-900">
                  {companyData.stats.activeProjects.count}
                </div>
                <div className="mt-2 text-sm text-blue-600 flex items-center">
                  <i className="mr-1">⏰</i>
                  {companyData.stats.activeProjects.dueThisWeek} due this week
                </div>
              </div>

              {/* Support Tickets */}
              <div className="p-5 bg-white border border-gray-200 rounded-lg">
                <h3 className="text-sm text-gray-500 mb-2">{companyData.stats.supportTickets.label}</h3>
                <div className="text-2xl font-medium text-gray-900">
                  {companyData.stats.supportTickets.count}
                </div>
                <div className="mt-2 text-sm text-yellow-600 flex items-center">
                  <i className="mr-1">⚠️</i>
                  {companyData.stats.supportTickets.highPriority} high priority
                </div>
              </div>
            </div>

            {/* Recent Activities */}
            <div className="mt-8">
              <h2 className="text-sm font-medium text-gray-900 mb-4">Recent Activities</h2>
              <div className="space-y-4">
                {companyData.recentActivities.map((activity, index) => (
                  <div key={index} className="flex items-start py-4 border-b border-gray-200 last:border-0">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3
                      ${activity.type === 'email' ? 'bg-blue-50 text-blue-600' :
                        activity.type === 'call' ? 'bg-green-50 text-green-600' :
                        'bg-yellow-50 text-yellow-600'}`}>
                      <i>{activity.type === 'email' ? '✉️' : activity.type === 'call' ? '📞' : '✓'}</i>
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium text-gray-900">{activity.title}</div>
                      <div className="text-sm text-gray-500">{activity.description}</div>
                      <div className="text-xs text-gray-400 mt-1">{activity.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Open Deals */}
            <div className="mt-8">
              <h2 className="text-sm font-medium text-gray-900 mb-4">Open Deals</h2>
              <div className="space-y-4">
                {companyData.openDeals.map((deal, index) => (
                  <div key={index} className="flex items-center justify-between py-4 border-b border-gray-200 last:border-0">
                    <div>
                      <div className="text-sm font-medium text-gray-900">{deal.title}</div>
                      <div className="text-sm text-gray-500 mt-1">
                        ${deal.amount.toLocaleString()} - {deal.stage}
                      </div>
                    </div>
                    <div className={`px-3 py-1 text-xs font-medium rounded-full
                      ${deal.status === 'In Progress' ? 'bg-yellow-50 text-yellow-700' : 'bg-green-50 text-green-700'}`}>
                      {deal.status}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyDetails;

