import { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { Bell, Download, Filter, Calendar, FileText, Users, TrendingUp, DollarSign, Briefcase, Award } from 'lucide-react';
import { useSelector } from 'react-redux';

// Sample data for charts
const departmentPerformance = [
  { name: 'Sales', value: 85, target: 90 },
  { name: 'Marketing', value: 75, target: 80 },
  { name: 'Development', value: 92, target: 85 },
  { name: 'Customer Support', value: 88, target: 85 },
  { name: 'HR', value: 78, target: 80 },
];

const monthlyTrendData = [
  { month: 'Jan', performance: 65, target: 70 },
  { month: 'Feb', performance: 68, target: 70 },
  { month: 'Mar', performance: 72, target: 75 },
  { month: 'Apr', performance: 75, target: 75 },
  { month: 'May', performance: 80, target: 80 },
  { month: 'Jun', performance: 85, target: 80 },
  { month: 'Jul', performance: 87, target: 85 },
  { month: 'Aug', performance: 88, target: 85 },
  { month: 'Sep', performance: 90, target: 90 },
];

const projectPerformanceData = [
  { name: 'Website Redesign', completed: 85, target: 100 },
  { name: 'Mobile App', completed: 65, target: 100 },
  { name: 'CRM Implementation', completed: 92, target: 100 },
  { name: 'Marketing Campaign', completed: 78, target: 100 },
];

const topPerformers = [
  { id: 1, name: 'John Doe', department: 'Sales', rating: 95, achievement: 'Exceeded targets by 25%' },
  { id: 2, name: 'Jane Smith', department: 'Development', rating: 92, achievement: 'Completed 3 projects ahead of schedule' },
  { id: 3, name: 'Mike Johnson', department: 'Marketing', rating: 90, achievement: 'Led successful product launch campaign' },
  { id: 4, name: 'Sarah Williams', department: 'Customer Support', rating: 89, achievement: '98% customer satisfaction rate' },
];

const recentNotifications = [
  { id: 1, message: 'Sales team exceeded monthly target by 15%', time: '2 hours ago', type: 'success' },
  { id: 2, message: 'Development team completed project ahead of schedule', time: '5 hours ago', type: 'success' },
  { id: 3, message: 'Marketing team performance dropped by 5%', time: '1 day ago', type: 'warning' },
  { id: 4, message: 'HR department needs to improve onboarding process', time: '2 days ago', type: 'danger' },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];

export default function PerformanceDashboard() {
  const [dateRange, setDateRange] = useState('monthly');
  const [showNotifications, setShowNotifications] = useState(false);

   const darkMode = useSelector((state) => state.theme.isDarkMode);
  
  const handleDateRangeChange = (range) => {
    setDateRange(range);
  };
  
  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };
  
  return (
    <div className="container-fluid p-4">
      {/* Header */}
      <div className="row align-items-center mb-4">
        <div className="col-md-6">
          <h1 className="fw-bold">Performance Overview</h1>

        </div>
        <div className="col-md-6">
          <div className="d-flex justify-content-md-end gap-2">
            {/* <div className="dropdown">
              <button className="btn btn-outline-secondary dropdown-toggle" type="button" id="dateRangeDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                <Calendar size={16} className="me-2" />
                {dateRange.charAt(0).toUpperCase() + dateRange.slice(1)}
              </button>
              <ul className="dropdown-menu" aria-labelledby="dateRangeDropdown">
                <li><button className="dropdown-item" onClick={() => handleDateRangeChange('daily')}>Daily</button></li>
                <li><button className="dropdown-item" onClick={() => handleDateRangeChange('weekly')}>Weekly</button></li>
                <li><button className="dropdown-item" onClick={() => handleDateRangeChange('monthly')}>Monthly</button></li>
                <li><button className="dropdown-item" onClick={() => handleDateRangeChange('quarterly')}>Quarterly</button></li>
                <li><button className="dropdown-item" onClick={() => handleDateRangeChange('yearly')}>Yearly</button></li>
              </ul>
            </div> */}
            
           
            
            <div className="dropdown">
              <button className="btn btn-outline-secondary" type="button" id="exportDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                <Download size={16} className="me-2" />
                Export
              </button>
              <ul className="dropdown-menu" aria-labelledby="exportDropdown">
                <li><button className="dropdown-item">Export as PDF</button></li>
                <li><button className="dropdown-item">Export as Excel</button></li>
          
              </ul>
            </div>
            
   
          </div>
        </div>
      </div>
      
      {/* Notifications Panel */}
      {showNotifications && (
        <div className="row mb-4">
          <div className="col-12">
            <div className="card shadow-sm">
              <div className="card-header bg-light">
                <h5 className="mb-0">Recent Notifications</h5>
              </div>
              <div className="card-body p-0">
                <ul className="list-group list-group-flush">
                  {recentNotifications.map(notification => (
                    <li key={notification.id} className="list-group-item d-flex justify-content-between align-items-center">
                      <div>
                        <span className={`badge bg-${notification.type} me-2`}>&nbsp;</span>
                        {notification.message}
                        <small className="d-block ">{notification.time}</small>
                      </div>
                      <button className="btn btn-sm btn-outline-secondary">View</button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Summary Cards */}
      <div className="row mb-4">
        <div className="col-md-3 col-sm-6 mb-3 mb-md-0">
          <div className= { `${darkMode ? 'card-dark' : 'bg-white'} card shadow-sm h-100 `}>
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h6 className="mb-0 ">Overall Performance</h6>
                <div className="bg-primary bg-opacity-10 p-2 rounded-circle">
                  <TrendingUp size={20} className="text-primary" />
                </div>
              </div>
              <h2 className="mb-0 fw-bold">83%</h2>
              <p className="text-success mb-0"><small>↑ 5% from last period</small></p>
            </div>
          </div>
        </div>
        
        <div className="col-md-3 col-sm-6 mb-3 mb-md-0">
          <div className={ `${darkMode ? 'card-dark' : 'bg-white'}  card shadow-sm h-100`}>
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h6 className="mb-0 ">Projects On Track</h6>
                <div className="bg-success bg-opacity-10 p-2 rounded-circle">
                  <Briefcase size={20} className="text-success" />
                </div>
              </div>
              <h2 className="mb-0 fw-bold">75%</h2>
              <p className="text-success mb-0"><small>↑ 3% from last period</small></p>
            </div>
          </div>
        </div>
        
        <div className="col-md-3 col-sm-6 mb-3 mb-md-0">
          <div className={ `${darkMode ? 'card-dark' : 'bg-white'}  card shadow-sm h-100`}>
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h6 className="mb-0 ">Employee Satisfaction</h6>
                <div className="bg-warning bg-opacity-10 p-2 rounded-circle">
                  <Users size={20} className="text-warning" />
                </div>
              </div>
              <h2 className="mb-0 fw-bold">79%</h2>
              <p className="text-danger mb-0"><small>↓ 2% from last period</small></p>
            </div>
          </div>
        </div>
        
        <div className="col-md-3 col-sm-6">
          <div className={ `${darkMode ? 'card-dark' : 'bg-white'}  card shadow-sm h-100`}>
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h6 className="mb-0 ">Revenue Growth</h6>
                <div className="bg-info bg-opacity-10 p-2 rounded-circle">
                  <DollarSign size={20} className="text-info" />
                </div>
              </div>
              <h2 className="mb-0 fw-bold">12%</h2>
              <p className="text-success mb-0"><small>↑ 4% from last period</small></p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Charts Section */}
      <div className="row mb-4">
        <div className="col-lg-8 mb-4 mb-lg-0">
          <div className={ `${darkMode ? 'card-dark' : 'bg-white'}  card shadow-sm h-100`}>
            <div className="card-header ">
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="mb-0">Performance Trends</h5>
                <div className="btn-group btn-group-sm">
                  <button type="button" className="btn btn-outline-secondary active">Monthly</button>
                  <button type="button" className="btn btn-outline-secondary">Quarterly</button>
                  <button type="button" className="btn btn-outline-secondary">Yearly</button>
                </div>
              </div>
            </div>
            <div className="card-body">
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={monthlyTrendData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="performance" stroke="#8884d8" activeDot={{ r: 8 }} name="Performance" />
                  <Line type="monotone" dataKey="target" stroke="#82ca9d" strokeDasharray="5 5" name="Target" />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
        
        <div className="col-lg-4">
          <div className={ `${darkMode ? 'card-dark' : 'bg-white'}  card shadow-sm h-100`}>
            <div className="card-header ">
              <h5 className="mb-0">Department Performance</h5>
            </div>
            <div className="card-body">
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={departmentPerformance}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    nameKey="name"
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  >
                    {departmentPerformance.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
      
      {/* Project Performance & Top Performers */}
      <div className="row mb-4">
        <div className="col-lg-7 mb-4 mb-lg-0">
          <div className={ `${darkMode ? 'card-dark' : 'bg-white'}  card shadow-sm h-100`}>
            <div className="card-header ">
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="mb-0">Project Performance</h5>
                <button className="btn btn-sm btn-outline-primary">View All Projects</button>
              </div>
            </div>
            <div className="card-body">
              <ResponsiveContainer width="100%" height={250}>
                <BarChart
                  data={projectPerformanceData}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="completed" name="Completed %" fill="#8884d8" />
                  <Bar dataKey="target" name="Target %" fill="#82ca9d" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
        
        <div className="col-lg-5">
          <div className={ `${darkMode ? 'card-dark' : 'bg-white'}  card shadow-sm h-100`}>
            <div className="card-header ">
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="mb-0">Top Performers</h5>
                <button className="btn btn-sm btn-outline-primary">View All</button>
              </div>
            </div>
            <div className="card-body p-0">
              <div className="table-responsive">
                <table className={ `${darkMode ? 'table-dark' : 'table-light'}  table table-hover`}>
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Department</th>
                      <th>Rating</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {topPerformers.map(performer => (
                      <tr key={performer.id}>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="bg-primary bg-opacity-10 text-primary rounded-circle p-2 me-2">
                              <Award size={16} />
                            </div>
                            {performer.name}
                          </div>
                        </td>
                        <td>{performer.department}</td>
                        <td>
                          <div className="d-flex align-items-center">
                            <div className="progress flex-grow-1" style={{ height: '8px' }}>
                              <div 
                                className="progress-bar bg-success" 
                                role="progressbar" 
                                style={{ width: `${performer.rating}%` }}
                                aria-valuenow={performer.rating} 
                                aria-valuemin="0" 
                                aria-valuemax="100"
                              ></div>
                            </div>
                            <span className="ms-2">{performer.rating}%</span>
                          </div>
                        </td>
                        <td>
                          <button className="btn btn-sm btn-outline-secondary">Details</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Related Modules Integration */}
      <div className="row">
        <div className="col-12 mb-4">
          <div className="card shadow-sm">
            <div className={`${darkMode ? "dark-mode" : "" } card-header `}>
              <ul className="nav nav-tabs card-header-tabs">
                <li className="nav-item">
                  <a className={`${darkMode ? "card-dark" : "" } nav-link active `} href="#">Integrated Overview</a>
                </li>
                
               </ul>
            </div>
            <div className={`${darkMode ? "dark-mode" : "" } card-body `}>
              <div className="row g-4">
                <div className="col-md-4">
                  <div className="border rounded p-3">
                    <div className="d-flex align-items-center mb-3">
                      <div className="bg-primary bg-opacity-10 p-2 rounded-circle me-3">
                        <DollarSign size={20} className="text-primary" />
                      </div>
                      <h6 className="mb-0">Sales Performance</h6>
                    </div>
                    <h4 className="mb-1">$1.25M <small className="text-success">↑ 12%</small></h4>
                    <p className=" small mb-0">Revenue this quarter</p>
                    <hr />
                    <div className="d-flex justify-content-between">
                      <small>Target: $1.5M</small>
                      {/* <button className="btn btn-sm btn-link p-0">View Details</button> */}
                    </div>
                  </div>
                </div>
                
                <div className="col-md-4">
                  <div className="border rounded p-3">
                    <div className="d-flex align-items-center mb-3">
                      <div className="bg-success bg-opacity-10 p-2 rounded-circle me-3">
                        <Users size={20} className="text-success" />
                      </div>
                      <h6 className="mb-0">HR Metrics</h6>
                    </div>
                    <h4 className="mb-1">95% <small className="text-success">↑ 3%</small></h4>
                    <p className=" small mb-0">Employee retention rate</p>
                    <hr />
                    <div className="d-flex justify-content-between">
                      <small>Target: 97%</small>
                      {/* <button className="btn btn-sm btn-link p-0">View Details</button> */}
                    </div>
                  </div>
                </div>
                
                <div className="col-md-4">
                  <div className="border rounded p-3">
                    <div className="d-flex align-items-center mb-3">
                      <div className="bg-warning bg-opacity-10 p-2 rounded-circle me-3">
                        <Briefcase size={20} className="text-warning" />
                      </div>
                      <h6 className="mb-0">Project Status</h6>
                    </div>
                    <h4 className="mb-1">8 <small className="text-warning">/ 10</small></h4>
                    <p className=" small mb-0">Projects on track</p>
                    <hr />
                    <div className="d-flex justify-content-between">
                      <small>2 Projects delayed</small>
                      {/* <button className="btn btn-sm btn-link p-0">View Details</button> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}