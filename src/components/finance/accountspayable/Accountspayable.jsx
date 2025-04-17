import React, { useState, useEffect } from "react";
import * as echarts from "echarts";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Accountspayable = () => {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const darkMode = useSelector((state) => (state.theme.isDarkMode))
  return (
    <div>
      <>
        {/* Hello world */}
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <header className="mb-8">
            <h1 className="text-2xl font-semibold">
              Outgoings Overview
            </h1>

            <div className="mt-4 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              {/* Left Section: Buttons */}
              <div className="flex flex-wrap gap-2 items-start">
                <div className="relative">
                  <button
                    className={`${darkMode ? "dark-mode" : null } rounded bg-primary text-white border border-gray-300 px-4 py-2 text-sm font-medium hover:bg-gray-50 flex items-center gap-2`}
                    onClick={toggleDropdown}
                  >
                    + New <i className="fas fa-chevron-down text-xs"></i>
                  </button>
                  {dropdownOpen && (
                    <div className={`${darkMode ? "dark-mode" : null } absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-10`}>
                      <ul className="py-2">
                        <li>
                          <Link
                            to="/finance/allbills"
                            className="block px-4 py-2 text-sm flex items-center gap-2"
                          >
                            <i className="fas fa-file-invoice text-gray-400"></i>{" "}
                            Bills
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/finance/creditnotes"
                            className="block px-4 py-2 text-sm flex items-center gap-2"
                          >
                            <i className="fas fa-sticky-note text-gray-400"></i>{" "}
                            Credit Note
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/finance/remittance"
                            className="block px-4 py-2 text-sm flex items-center gap-2"
                          >
                            <i className="fas fa-receipt text-gray-400"></i>{" "}
                            Remittance
                          </Link> 
                        </li>
                        <li>
                          <Link
                            to="/finance/expense"
                            className="block px-4 py-2 text-sm flex items-center gap-2"
                          >
                            <i className="fas fa-wallet text-gray-400"></i>{" "}
                            Expense
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/finance/Purchaseorder"
                            className="block px-4 py-2 text-sm flex items-center gap-2"
                          >
                            <i className="fas fa-shopping-cart text-gray-400"></i>{" "}
                            Purchase Order
                          </Link>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>

                <button className={`${darkMode ? "dark-mode" : "bg-white" } rounded bg-white border border-gray-300 px-4 py-2 text-sm font-medium  hover:bg-gray-50`}>
                  Send Statements
                </button>
                <button className={`${darkMode ? "dark-mode" : "bg-white" } rounded bg-white border border-gray-300 px-4 py-2 text-sm font-medium  hover:bg-gray-50`}>
                  Import
                </button>
              </div>

              {/* Right Section: Search */}
              <div className="relative w-full lg:w-auto">
                <input
                  type="text"
                  placeholder="Search"
                  className={`${darkMode ? "dark-mode" : "bg-white" } rounded pl-4 pr-10 py-2 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full`}
                />
                <i className="fas fa-search absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
              </div>
            </div>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <div className={`${darkMode ? "card-dark" :  "bg-white" } bg-white rounded-lg p-4 border shadow-sm`}>
              <h3 className="text-sm text-gray-500 mb-1">Total Invoice</h3>
              <p className="text-2xl font-semibold mb-2">£3,237.94</p>
              <div className="flex items-center text-green-500 text-sm">
                <i className="fas fa-arrow-up mr-1" />
                <span>32.40% from last month</span>
              </div>
            </div>

            <div className={`${darkMode ? "card-dark" :  "bg-white" } bg-white rounded-lg p-4 border shadow-sm`}>
              <h3 className="text-sm text-gray-500 mb-1">Outstanding</h3>
              <p className="text-2xl font-semibold mb-2">£3,237.94</p>
              <div className="flex items-center text-red-500 text-sm">
                <i className="fas fa-arrow-down mr-1" />
                <span>4.40% from last month</span>
              </div>
            </div>

            <div className={`${darkMode ? "card-dark" :  "bg-white" } bg-white rounded-lg p-4 border shadow-sm`}>
              <h3 className="text-sm text-gray-500 mb-1">Draft</h3>
              <p className="text-2xl font-semibold mb-2">£3,237.94</p>
              <div className="flex items-center text-green-500 text-sm">
                <i className="fas fa-arrow-up mr-1" />
                <span>12% from last month</span>
              </div>
            </div>

            <div className={`${darkMode ? "card-dark" :  "bg-white" } bg-white rounded-lg p-4 border shadow-sm`}>
              <h3 className="text-sm text-gray-500 mb-1">Total Overdue</h3>
              <p className="text-2xl font-semibold mb-2">£3,237.94</p>
              <div className="flex items-center text-red-500 text-sm">
                <i className="fas fa-arrow-down mr-1" />
                <span>15.40% from last month</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Bills You Need to Pay */}
            <div className={`${darkMode ? "card-dark" : "bg-white" } bg-white rounded-lg p-6 border shadow-sm`}>
              <h3 className="text-lg font-medium mb-4">
                Bills you need to pay
              </h3>
              <button className={`${darkMode ? "dark-mode" : "bg-white" } rounded bg-white border border-gray-300 px-4 py-2 text-sm font-medium hover:bg-gray-50 mb-4`} >
                New bill
              </button>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-sm font-medium">24</span>
                    <span className="text-sm text-gray-500 ml-2">
                      Draft bill
                    </span>
                  </div>
                  <span className="text-sm font-medium">£1234</span>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-sm font-medium">24</span>
                    <span className="text-sm text-blue-500 ml-2">
                      Awaiting payment
                    </span>
                  </div>
                  <span className="text-sm font-medium">£1234</span>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-sm font-medium">1</span>
                    <span className="text-sm text-red-500 ml-2">Overdue</span>
                  </div>
                  <span className="text-sm font-medium">£1234</span>
                </div>
              </div>
              <div id="billsChart" className="h-48 mt-4" />
              <BillsChart />
            </div>

            {/* Expense Claims */}
            <div className={`${darkMode ? "card-dark" : "bg-white" } bg-white rounded-lg p-6 border shadow-sm`}>
              <h3 className="text-lg font-medium text-blue-500 mb-4">
                Expense claims
              </h3>
              <button className={`${darkMode ? "dark-mode" : "bg-white" } rounded bg-white border border-gray-300 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-gray-50`}>
                Create new expense
              </button>
              <div className="mt-4 space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-blue-500">No drafts</span>
                  <span className="text-sm font-medium">0.00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-blue-500">
                    Nothing to review
                  </span>
                  <span className="text-sm font-medium">0.00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-blue-500">6 to pay</span>
                  <span className="text-sm font-medium">203.65</span>
                </div>
              </div>
            </div>
          </div>

          <div className={`${darkMode ? "card-dark" : "bg-white" } rounded-lg p-6 border shadow-sm mb-8`}>
            {/* Expenses Overview */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6 gap-4">
              <div>
                <h3 className="text-xl font-medium mb-1">Expenses</h3>
                <p className="text-3xl font-semibold mb-1">£1234</p>
                <div className="flex items-center text-red-500 text-sm">
                  <i className="fas fa-arrow-up mr-1" />
                  <span>133.0% from Dec 2022 – Nov 2023</span>
                </div>
              </div>
              <div className="text-left lg:text-right">
                <p className="text-gray-600 mb-1">
                  Cost of goods sold: <span className="font-medium">£1234</span>
                </p>
                <p className="text-gray-600">
                  Operating expenses: <span className="font-medium">£1234</span>
                </p>
              </div>
            </div>

            <div id="expensesChart" className="h-64" />
            <ExpensesChart />
          </div>

          {/* Supplier Stats and Top Suppliers */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className={`${darkMode ? "card-dark" : "bg-white" } bg-white rounded-lg border p-6 shadow-sm`}>
              <h3 className="text-xl font-medium mb-4">Suppliers Expenses</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className={`${darkMode ? "card-dark" : "bg-gray-50" } rounded border p-4`}>
                  <p className="text-sm text-gray-500 mb-1">Customers</p>
                  <p className="text-2xl font-semibold">200</p>
                </div>
                <div className={`${darkMode ? "card-dark" : "bg-gray-50" } rounded border p-4`}>
                  <p className="text-sm text-gray-500 mb-1">Owing</p>
                  <p className="text-2xl font-semibold">£1234</p>
                </div>
              </div>
            </div>

            <div className={`${darkMode ? "card-dark" : "bg-white" } bg-white border rounded-lg p-6 shadow-sm`}>
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-medium">Top Suppliers To Pay</h3>
                <a href="#" className="text-blue-500 text-sm">
                  All
                </a>
              </div>
              <div className="space-y-3">
                {["x", "y", "z", "a", "b"].map((client, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center bg-gray p-3 rounded"
                  >
                    <span>Client {client}</span>
                    <span className="font-medium">£123</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Cash Flow Chart */}
          <div className={`${darkMode ? "card-dark" : "bg-white" } bg-white border rounded-lg p-6 shadow-sm`}>
            <h3 className="text-xl font-medium mb-6">Total cash in and out</h3>
            <div id="cashFlowChart" className="h-64" />
            <CashFlowChart />
          </div>
        </div>
      </>
    </div>
  );

  {
    /* <>
 
  <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <header className="mb-8">
      <h1 className="text-2xl font-semibold text-gray-900">
        Outgoings Overview
      </h1>
      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="relative dropdown">
            <button className="!rounded-button bg-white border border-gray-300 px-4 py-2 text-sm font-medium hover:bg-gray-50 flex items-center gap-2">
              + New <i className="fas fa-chevron-down text-xs text-black" />
            </button>
            <div
              className="absolute top-full left-0 mt-1 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-10 hidden"
              id="new-dropdown"
            >
              <ul className="py-2">
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm flex items-center gap-2"
                  >
                    <i className="fas fa-file-invoice text-gray-400" /> Bills
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm flex items-center gap-2"
                  >
                    <i className="fas fa-sticky-note text-gray-400" /> Credit
                    Note
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm flex items-center gap-2"
                  >
                    <i className="fas fa-receipt text-gray-400" /> Remit Slip
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm flex items-center gap-2"
                  >
                    <i className="fas fa-wallet text-gray-400" /> Expense
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm flex items-center gap-2"
                  >
                    <i className="fas fa-shopping-cart text-gray-400" />{" "}
                    Purchase Order
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm border-t border-gray-200"
                  >
                    Add contact group
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <button className="!rounded-button bg-white border border-gray-300 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-gray-50">
            Send Statements
          </button>
          <button className="!rounded-button bg-white border border-gray-300 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-gray-50">
            Import
          </button>
        </div>
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="!rounded-button pl-4 pr-10 py-2 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 block w-full"
          />
          <i className="fas fa-search absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
        </div>
      </div>
    </header>
    <div className="grid grid-cols-4 gap-4 mb-8">
      <div className="bg-white rounded-lg p-4 shadow-sm">
        <h3 className="text-sm text-gray-500 mb-1">Total Invoice</h3>
        <p className="text-2xl font-semibold mb-2">$3,237.94</p>
        <div className="flex items-center text-green-500 text-sm">
          <i className="fas fa-arrow-up mr-1" />
          <span>32.40% from last month</span>
        </div>
      </div>
      <div className="bg-white rounded-lg p-4 shadow-sm">
        <h3 className="text-sm text-gray-500 mb-1">Outstanding</h3>
        <p className="text-2xl font-semibold mb-2">$3,237.94</p>
        <div className="flex items-center text-red-500 text-sm">
          <i className="fas fa-arrow-down mr-1" />
          <span>4.40% from last month</span>
        </div>
      </div>
      <div className="bg-white rounded-lg p-4 shadow-sm">
        <h3 className="text-sm text-gray-500 mb-1">Draft</h3>
        <p className="text-2xl font-semibold mb-2">$3,237.94</p>
        <div className="flex items-center text-green-500 text-sm">
          <i className="fas fa-arrow-up mr-1" />
          <span>12% from last month</span>
        </div>
      </div>
      <div className="bg-white rounded-lg p-4 shadow-sm">
        <h3 className="text-sm text-gray-500 mb-1">Total Overdue</h3>
        <p className="text-2xl font-semibold mb-2">$3,237.94</p>
        <div className="flex items-center text-red-500 text-sm">
          <i className="fas fa-arrow-down mr-1" />
          <span>15.40% from last month</span>
        </div>
      </div>
    </div>
    <div className="grid grid-cols-2 gap-8 mb-8">
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <h3 className="text-lg font-medium mb-4">Bills you need to pay</h3>
        <button className="!rounded-button bg-white border border-gray-300 px-4 py-2 text-sm font-medium hover:bg-gray-50 mb-4">
          New bill
        </button>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <span className="text-sm font-medium">24</span>
              <span className="text-sm text-gray-500 ml-2">Draft bill</span>
            </div>
            <span className="text-sm font-medium">£1234</span>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <span className="text-sm font-medium">24</span>
              <span className="text-sm text-blue-500 ml-2">
                Awaiting payment
              </span>
            </div>
            <span className="text-sm font-medium">£1234</span>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <span className="text-sm font-medium">1</span>
              <span className="text-sm text-red-500 ml-2">Overdue</span>
            </div>
            <span className="text-sm font-medium">£1234</span>
          </div>
        </div>
        <div id="billsChart" className="h-48 mt-4" />
      </div>
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <h3 className="text-lg font-medium text-blue-500 mb-4">
          Expense claims
        </h3>
        <button className="!rounded-button bg-white border border-gray-300 px-4 py-2 text-sm font-medium text-blue-500 hover:bg-gray-50">
          Create new expense
        </button>
        <div className="mt-4 space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-sm text-blue-500">No drafts</span>
            <span className="text-sm font-medium">0.00</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-blue-500">Nothing to review</span>
            <span className="text-sm font-medium">0.00</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-blue-500">6 to pay</span>
            <span className="text-sm font-medium">203.65</span>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-white rounded-lg p-6 shadow-sm mb-8">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="text-xl font-medium mb-1">Expenses</h3>
          <p className="text-3xl font-semibold mb-1">£1234</p>
          <div className="flex items-center text-red-500">
            <i className="fas fa-arrow-up mr-1" />
            <span>133.0% from Dec 2022 – Nov 2023</span>
          </div>
        </div>
        <div className="text-right">
          <p className="text-gray-600 mb-1">
            Cost of goods sold: <span className="font-medium">£1234</span>
          </p>
          <p className="text-gray-600">
            Operating expenses: <span className="font-medium">£1234</span>
          </p>
        </div>
      </div>
      <div id="expensesChart" className="h-64" />
    </div>
    <div className="grid grid-cols-2 gap-8 mb-8">
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <h3 className="text-xl font-medium mb-4">Suppliers Expenses</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-50 rounded p-4">
            <p className="text-sm text-gray-500 mb-1">Customers</p>
            <p className="text-2xl font-semibold">200</p>
          </div>
          <div className="bg-gray-50 rounded p-4">
            <p className="text-sm text-gray-500 mb-1">Owing</p>
            <p className="text-2xl font-semibold">£1234</p>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-medium">Top Suppliers To Pay</h3>
          <a href="#" className="text-blue-500 text-sm">
            All
          </a>
        </div>
        <div className="space-y-3">
          <div className="flex justify-between items-center bg-gray-50 p-3 rounded">
            <span>Client x</span>
            <span className="font-medium">£123</span>
          </div>
          <div className="flex justify-between items-center bg-gray-50 p-3 rounded">
            <span>Client y</span>
            <span className="font-medium">£123</span>
          </div>
          <div className="flex justify-between items-center bg-gray-50 p-3 rounded">
            <span>Client z</span>
            <span className="font-medium">£123</span>
          </div>
          <div className="flex justify-between items-center bg-gray-50 p-3 rounded">
            <span>Client a</span>
            <span className="font-medium">£123</span>
          </div>
          <div className="flex justify-between items-center bg-gray-50 p-3 rounded">
            <span>Client b</span>
            <span className="font-medium">£123</span>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <h3 className="text-xl font-medium mb-6">Total cash in and out</h3>
      <div id="cashFlowChart" className="h-64" />
    </div>
  </div>
</> */
  }
};

export default Accountspayable;

// components/BillsChart.jsx

function BillsChart() {
  useEffect(() => {
    const billsChart = echarts.init(document.getElementById("billsChart"));
    billsChart.setOption({
      animation: false,
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true,
      },
      xAxis: {
        type: "category",
        data: [
          "Older",
          "15-21 Dec",
          "This week",
          "29 Dec-4 Jan",
          "5-11 Jan",
          "Future",
        ],
        axisLabel: {
          fontSize: 10,
        },
      },
      yAxis: {
        type: "value",
        show: false,
      },
      series: [
        {
          data: [100, 100, 400, 100, 100, 100],
          type: "bar",
          itemStyle: {
            color: "#93C5FD",
          },
        },
      ],
    });

    // Resize chart on window resize
    const handleResize = () => billsChart.resize();
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      billsChart.dispose();
    };
  }, []);

  return <div id="billsChart" className="h-48 mt-4"></div>;
}

// components/ExpensesChart.jsx

function ExpensesChart() {
  useEffect(() => {
    const expensesChart = echarts.init(
      document.getElementById("expensesChart")
    );
    expensesChart.setOption({
      animation: false,
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true,
      },
      xAxis: {
        type: "category",
        data: ["Dec", "Feb", "Apr", "Jun", "Aug", "Oct"],
        boundaryGap: false,
      },
      yAxis: {
        type: "value",
        max: 60000,
        interval: 30000,
      },
      series: [
        {
          data: [30000, 20000, 25000, 20000, 55000, 30000],
          type: "line",
          smooth: true,
          itemStyle: {
            color: "#F97316",
          },
          areaStyle: {
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                { offset: 0, color: "rgba(249, 115, 22, 0.2)" },
                { offset: 1, color: "rgba(249, 115, 22, 0)" },
              ],
            },
          },
        },
        {
          data: [15000, 15000, 15000, 15000, 25000, 20000],
          type: "line",
          smooth: true,
          lineStyle: {
            type: "dashed",
          },
          itemStyle: {
            color: "#9CA3AF",
          },
        },
      ],
    });

    // Resize chart on window resize
    const handleResize = () => expensesChart.resize();
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      expensesChart.dispose();
    };
  }, []);

  return <div id="expensesChart" className="h-64"></div>;
}

// components/CashFlowChart.jsx

function CashFlowChart() {
  useEffect(() => {
    const cashFlowChart = echarts.init(
      document.getElementById("cashFlowChart")
    );
    cashFlowChart.setOption({
      animation: false,
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true,
      },
      xAxis: {
        type: "category",
        data: [
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: [1000, 1200, 1000, 2000, 1500, 1200],
          type: "bar",
          itemStyle: {
            color: "#93C5FD",
          },
        },
        {
          data: [800, 1000, 800, 1500, 1200, 1000],
          type: "bar",
          itemStyle: {
            color: "#E5E7EB",
          },
        },
      ],
    });

    // Resize chart on window resize
    const handleResize = () => cashFlowChart.resize();
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      cashFlowChart.dispose();
    };
  }, []);

  return <div id="cashFlowChart" className="h-64"></div>;
}
