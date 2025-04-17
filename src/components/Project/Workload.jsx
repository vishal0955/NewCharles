import { useState } from 'react';
import { useSelector } from 'react-redux';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine } from 'recharts';

const Workload = () => {
  // Sample data for the chart
  const [chartData, setChartData] = useState([
    { period: '01 Apr - 04 Apr', availableCapacity: 65, assignedAllocations: 20, unassignedAllocations: 0, totalCapacity: 75 },
    { period: '07 Apr - 11 Apr', availableCapacity: 75, assignedAllocations: 0, unassignedAllocations: 0, totalCapacity: 75 },
    { period: '14 Apr - 18 Apr', availableCapacity: 75, assignedAllocations: 0, unassignedAllocations: 0, totalCapacity: 75 },
    { period: '21 Apr - 25 Apr', availableCapacity: 75, assignedAllocations: 0, unassignedAllocations: 0, totalCapacity: 75 },
    { period: '28 Apr - 02 May', availableCapacity: 75, assignedAllocations: 0, unassignedAllocations: 0, totalCapacity: 75 },
    { period: '05 May - 09 May', availableCapacity: 75, assignedAllocations: 0, unassignedAllocations: 0, totalCapacity: 75 },
    { period: '12 May - 16 May', availableCapacity: 75, assignedAllocations: 0, unassignedAllocations: 0, totalCapacity: 75 },
    { period: '19 May - 23 May', availableCapacity: 75, assignedAllocations: 0, unassignedAllocations: 0, totalCapacity: 75 },
    { period: '26 May - 30 May', availableCapacity: 75, assignedAllocations: 0, unassignedAllocations: 0, totalCapacity: 75 },
    { period: '02 Jun - 06 Jun', availableCapacity: 75, assignedAllocations: 0, unassignedAllocations: 0, totalCapacity: 75 },
    { period: '09 Jun - 13 Jun', availableCapacity: 75, assignedAllocations: 0, unassignedAllocations: 0, totalCapacity: 75 },
  ]);

  // Sample data for the allocation table
  const [resources, setResources] = useState([
    { id: '3d', role: '3D CAD', avatar: '3D', color: 'bg-purple-500' },
    { id: '2d', role: '2D CAD', avatar: '2D', color: 'bg-pink-500' },
    { id: 'admin', role: 'Administration', avatar: 'A', color: 'bg-red-500' },
    { id: 'audioc', role: 'Audio Consultant', avatar: 'AC', color: 'bg-red-500' },
    { id: 'avc', role: 'AV Consultant', avatar: 'AV', color: 'bg-red-500' },
    { id: 'avsm', role: 'AV Subject Matter Expert', avatar: 'AV', color: 'bg-red-500' },
    { id: 'avse', role: 'AV Support Engineer', avatar: 'AV', color: 'bg-red-500' },
    { id: 'ceo', role: 'CEO', avatar: 'C', color: 'bg-blue-500' },
  ]);

  // Time periods for the table
  const timePeriods = [
    { id: 'apr1', label: '03-06', month: 'Apr \'25' },
    { id: 'apr2', label: '07-11', month: 'Apr \'25' },
    { id: 'apr3', label: '10-18', month: 'Apr \'25' },
    { id: 'apr4', label: '21-25', month: 'Apr \'25' },
    { id: 'apr5', label: '28-02', month: 'Apr \'25' },
    { id: 'may1', label: '05-09', month: 'May \'25' },
    { id: 'may2', label: '12-16', month: 'May \'25' },
    { id: 'may3', label: '19-23', month: 'May \'25' },
    { id: 'may4', label: '26-30', month: 'May \'25' },
    { id: 'jun1', label: '02-06', month: 'Jun \'25' },
    { id: 'jun2', label: '09-13', month: 'Jun \'25' },
  ];

  // Allocation data - this would typically come from a backend API
  const [allocations, setAllocations] = useState({
    '3d': { 'apr1': '75%', 'apr2': '0%', 'apr3': '0%', 'apr4': '0%', 'apr5': '0%', 'may1': '0%', 'may2': '0%', 'may3': '0%', 'may4': '0%', 'jun1': '0%', 'jun2': '0%' },
    '2d': { 'apr1': 'NA', 'apr2': 'NA', 'apr3': 'NA', 'apr4': 'NA', 'apr5': 'NA', 'may1': 'NA', 'may2': 'NA', 'may3': 'NA', 'may4': 'NA', 'jun1': 'NA', 'jun2': 'NA' },
    'admin': { 'apr1': 'NA', 'apr2': 'NA', 'apr3': 'NA', 'apr4': 'NA', 'apr5': 'NA', 'may1': 'NA', 'may2': 'NA', 'may3': 'NA', 'may4': 'NA', 'jun1': 'NA', 'jun2': 'NA' },
    'audioc': { 'apr1': 'NA', 'apr2': 'NA', 'apr3': 'NA', 'apr4': 'NA', 'apr5': 'NA', 'may1': 'NA', 'may2': 'NA', 'may3': 'NA', 'may4': 'NA', 'jun1': 'NA', 'jun2': 'NA' },
    'avc': { 'apr1': 'NA', 'apr2': 'NA', 'apr3': 'NA', 'apr4': 'NA', 'apr5': 'NA', 'may1': 'NA', 'may2': 'NA', 'may3': 'NA', 'may4': 'NA', 'jun1': 'NA', 'jun2': 'NA' },
    'avsm': { 'apr1': 'NA', 'apr2': 'NA', 'apr3': 'NA', 'apr4': 'NA', 'apr5': 'NA', 'may1': 'NA', 'may2': 'NA', 'may3': 'NA', 'may4': 'NA', 'jun1': 'NA', 'jun2': 'NA' },
    'avse': { 'apr1': 'NA', 'apr2': 'NA', 'apr3': 'NA', 'apr4': 'NA', 'apr5': 'NA', 'may1': 'NA', 'may2': 'NA', 'may3': 'NA', 'may4': 'NA', 'jun1': 'NA', 'jun2': 'NA' },
    'ceo': { 'apr1': '75%', 'apr2': '0%', 'apr3': '0%', 'apr4': '0%', 'apr5': '0%', 'may1': '0%', 'may2': '0%', 'may3': '0%', 'may4': '0%', 'jun1': '0%', 'jun2': '0%' },
  });

  // Function to update allocation
  const updateAllocation = (resourceId, periodId, value) => {
    const newValue = prompt(`Update allocation for ${resourceId} during ${periodId}:`, value);
    if (newValue) {
      setAllocations(prev => ({
        ...prev,
        [resourceId]: {
          ...prev[resourceId],
          [periodId]: newValue
        }
      }));
    }
  };

  // Group time periods by month for the table header
  const groupedPeriods = timePeriods.reduce((acc, period) => {
    if (!acc[period.month]) {
      acc[period.month] = [];
    }
    acc[period.month].push(period);
    return acc;
  }, {});

  // Get background color for allocation cells
  const getAllocationCellColor = (value) => {
    if (value === 'NA') return 'bg-purple-50 text-purple-500';
    if (value === '0%') return 'bg-green-50 text-green-800';
    if (value === '75%') return 'bg-blue-500 text-white';
    return 'bg-gray-50';
  };

  const darkMode = useSelector((state) => state.theme.isDarkMode);

  return (
    <div className="flex flex-col h-full overflow-hidden">
      {/* Chart section */}
      <div className={`${darkMode ? "card-dark" : null }  p-4 shadow-sm mb-4`}>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-medium">Allocations (demand) vs Capacity (supply)</h2>
          <div className="flex space-x-4">
            <div className="flex items-center">
              <div className="w-4 h-0.5  mr-1"></div>
              <span className="text-sm ">Total capacity</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-gray-300 mr-1"></div>
              <span className="text-sm ">Holidays</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-blue-300 mr-1"></div>
              <span className="text-sm ">Available capacity</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-green-200 mr-1"></div>
              <span className="text-sm ">Unassigned allocations</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-teal-500 mr-1"></div>
              <span className="text-sm ">Assigned allocations</span>
            </div>
          </div>
        </div>
        
        <div className="w-full h-64">
          <BarChart
            width={1000}
            height={250}
            data={chartData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            barSize={25}
            barGap={0}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="period" fontSize={10} />
            <YAxis domain={[0, 100]} />
            <Tooltip />
            <ReferenceLine y={75} stroke="#666" strokeDasharray="3 3" />
            <Bar dataKey="availableCapacity" fill="#63B3ED" name="Available capacity" />
            <Bar dataKey="assignedAllocations" fill="#38B2AC" name="Assigned allocations" stackId="a" />
            <Bar dataKey="unassignedAllocations" fill="#9AE6B4" name="Unassigned allocations" stackId="a" />
          </BarChart>
        </div>
      </div>

      {/* Table section */}
      <div className={`flex-1 ${darkMode ? "card-dark" : null }  overflow-x-auto flex-grow`}>
        <table className={`flex-1 ${darkMode ? "table-dark" : null } min-w-full border-collapse`}>
          {/* Table header with month grouping */}
          <thead>
            <tr className="">
              <th className="py-2 px-4 border-b border-r font-medium  text-left w-48">Role</th>
              {Object.entries(groupedPeriods).map(([month, periods], monthIndex) => (
                <th key={month} colSpan={periods.length} className="py-2 px-4 border-b font-medium  text-center">
                  {month}
                </th>
              ))}
            </tr>
            <tr>
              <th className="py-2 px-4 border-b border-r font-medium  text-left"></th>
              {timePeriods.map(period => (
                <th key={period.id} className="py-2 px-2 border-b font-medium  text-center whitespace-nowrap w-16">
                  {period.label}
                </th>
              ))}
            </tr>
          </thead>
          
          {/* Table body */}
          <tbody className={` ${darkMode ? "table-dark" : null } `}>
            {resources.map(resource => (
              <tr key={resource.id} className="">
                <td className="py-2 px-4 border-b border-r">
                  <div className="flex items-center">
                    <div className={`w-6 h-6 rounded-full ${resource.color}  flex items-center justify-center mr-2 text-xs font-medium`}>
                      {resource.avatar}
                    </div>
                    <span>{resource.role}</span>
                  </div>
                </td>
                
                {timePeriods.map(period => (
                  <td 
                    key={`${resource.id}-${period.id}`} 
                    className={`${darkMode ? "dark-mode" : null }  py-2 px-2 border-b text-center cursor-pointer ${getAllocationCellColor(allocations[resource.id][period.id])}`}
                    onClick={() => updateAllocation(resource.id, period.id, allocations[resource.id][period.id])}
                  >
                    {allocations[resource.id][period.id]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Edit button in corner */}
      <button className="fixed bottom-6 right-6 w-12 h-12  rounded-full shadow-lg flex items-center justify-center text-white">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
      </button>
    </div>
  );
}

export default Workload;