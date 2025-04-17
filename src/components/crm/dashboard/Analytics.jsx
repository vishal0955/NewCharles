
import React from "react";
import { useSelector } from "react-redux";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, Tooltip, Legend, CartesianGrid, ResponsiveContainer } from "recharts";

const data = [
  { name: "Oct 2024", pipeline: 10000, bestCase: 5000, commit: 7000, closed: 8000 },
  { name: "Nov 2024", pipeline: 20000, bestCase: 15000, commit: 12000, closed: 14000 },
  { name: "Dec 2024", pipeline: 40000, bestCase: 25000, commit: 22000, closed: 18000 },
];

const Analytics = () => {



  const darkMode = useSelector((state) => state.theme.isDarkMode);

  return (
    <div className= "p-6  min-h-screen">
      <h2 className="text-xl font-semibold mb-4">Sales</h2>

      <div className=" grid md:grid-cols-2 gap-6">
        {/* Forecast Won This Month */}
        <div className={`${darkMode ? "card-dark" : null } p-4 rounded-xl shadow-lg`}>
          <h3 className="text-lg font-semibold mb-2">Forecast Won This Month</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="pipeline" fill="#3b82f6" name="Pipeline" />
              <Bar dataKey="bestCase" fill="#22c55e" name="Best Case" />
              <Bar dataKey="commit" fill="#facc15" name="Commit" />
              <Bar dataKey="closed" fill="#ef4444" name="Closed Won" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Forecast Revenue This Month */}
        <div className={`${darkMode ? "card-dark" : null } p-4 rounded-xl shadow-lg`}>
          <h3 className="text-lg font-semibold mb-2">Forecast Revenue This Month</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="pipeline" fill="#6366f1" name="Revenue" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Deal Closed Totals vs Goal */}
        <div className={`${darkMode ? "card-dark" : null } p-4 rounded-xl shadow-lg`}>
          <h3 className="text-lg font-semibold mb-2">Deal Closed Totals vs. Goal</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="pipeline" stroke="#2563eb" name="Revenue Goal" />
              <Line type="monotone" dataKey="closed" stroke="#dc2626" name="Closed Amount" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Deals Created */}
        <div className={`${darkMode ? "card-dark" : null } p-4 rounded-xl shadow-lg`}>
          <h3 className="text-lg font-semibold mb-2">Deals Created</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart layout="vertical" data={data}>
              <XAxis type="number" />
              <YAxis dataKey="name" type="category" />
              <Tooltip />
              <Legend />
              <Bar dataKey="pipeline" fill="#6366f1" name="Deals" />
              <Bar dataKey="closed" fill="#ef4444" name="Closed Deals" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Analytics;

