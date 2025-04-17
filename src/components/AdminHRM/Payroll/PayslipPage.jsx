import React from "react";
import { useParams } from "react-router-dom";

const PayslipPage = () => {
  const { id } = useParams();
  const storedData = JSON.parse(localStorage.getItem("payslipData"));
  const data = storedData && storedData.id === id ? storedData : null;
  console.log("Payslip Data:", data);
  if (!data || !data.earnings || !data.deductions) {
    return <div className="p-10 text-red-500">Payslip data incomplete.</div>;
  }

  const earnings = data?.earnings || {};
  const deductions = data?.deductions || {};

  const totalEarnings = Object.values(earnings).reduce((a, b) => a + b, 0);
  const totalDeductions = Object.values(deductions).reduce((a, b) => a + b, 0);

  const netSalary = totalEarnings - totalDeductions;

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Payslip</h1>
        <button className="bg-black text-white px-4 py-2 rounded">
          ⬇ Download
        </button>
      </div>

      <div className="bg-white p-6 shadow rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className="text-xl font-bold text-orange-600">XYZ Company</h2>
            <p>3099 Kennedy Court Framingham, MA 01702</p>
          </div>
          <div className="text-right">
            <p>
              Payslip No{" "}
              <span className="text-orange-600 font-semibold">
                #{data.payslipNo}
              </span>
            </p>
            <p>
              Salary Month: <strong>{data.salaryMonth}</strong>
            </p>
          </div>
        </div>

        <div className="flex justify-between my-4 border-t pt-4">
          <div>
            <h4 className="font-bold">From</h4>
            <p>XYZ Technologies</p>
            <p>2077 Chicago Avenue Orosi, CA 93647</p>
            <p>Email: xyztech@example.com</p>
            <p>Phone: +1 987 654 3210</p>
          </div>
          <div className="text-right">
            <h4 className="font-bold">To</h4>
            <p>{data.name}</p>
            <p>{data.designation}</p>
            <p>Email: {data.email}</p>
            <p>Phone: {data.phone}</p>
          </div>
        </div>

        <h3 className="text-center font-semibold text-lg my-4">
          Payslip for the month of {data.salaryMonth}
        </h3>

        <div className="grid grid-cols-2 gap-8">
          <div>
            <h4 className="font-semibold mb-2">Earnings</h4>
            {Object.entries(data.earnings).map(([label, amount]) => (
              <div className="flex justify-between border-b py-1" key={label}>
                <span className="capitalize">{label.replace("_", " ")}</span>
                <span>${amount}</span>
              </div>
            ))}
            <div className="flex justify-between font-bold border-t pt-2 mt-2">
              <span>Total Earnings</span>
              <span>${totalEarnings}</span>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Deductions</h4>
            {Object.entries(data.deductions).map(([label, amount]) => (
              <div className="flex justify-between border-b py-1" key={label}>
                <span>{label.toUpperCase()}</span>
                <span>${amount}</span>
              </div>
            ))}
            <div className="flex justify-between font-bold border-t pt-2 mt-2">
              <span>Total Deductions</span>
              <span>${totalDeductions}</span>
            </div>
          </div>
        </div>

        <div className="mt-4 font-medium">
          Net Salary : <strong>${netSalary}</strong> (
          <em>Three thousand six hundred only</em>)
        </div>
      </div>
    </div>
  );
};

export default PayslipPage;
