// import React, { useState } from "react";
// import { useSelector } from "react-redux";

// const PayoutForm = ({ handleClose, editData }) => {
//   const darkMode = useSelector((state) => state.theme?.isDarkMode) || false;
  
//   const [formData, setFormData] = useState(
//     editData || {
//       recipientName: "",
//       recipientType: "employee",
//       amount: "",
//       paymentMethod: "bank",
//       accountNumber: "",
//       bankName: "",
//       routingNumber: "",
//       frequency: "monthly",
//       payoutDate: "",
//       notes: "",
//     }
//   );

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Process form submission here
//     console.log("Form submitted:", formData);
//     // Close modal after submission
//     handleClose();
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div className="row g-3">
//         <div className="col-12">
//           <h5 className="mb-3">Recipient Information</h5>
//         </div>
        
//         <div className="col-md-6">
//           <label htmlFor="recipientName" className="form-label">
//             Recipient Name*
//           </label>
//           <input
//             type="text"
//             className={`form-control ${darkMode ? "dark-mode" : ""}`}
//             id="recipientName"
//             name="recipientName"
//             value={formData.recipientName}
//             onChange={handleChange}
//             required
//           />
//         </div>
        
//         <div className="col-md-6">
//           <label htmlFor="recipientType" className="form-label">
//             Recipient Type
//           </label>
//           <select
//             className={`form-select ${darkMode ? "dark-mode" : ""}`}
//             id="recipientType"
//             name="recipientType"
//             value={formData.recipientType}
//             onChange={handleChange}
//           >
//             <option value="employee">Employee</option>
//             <option value="vendor">Vendor</option>
//             <option value="contractor">Contractor</option>
//             <option value="other">Other</option>
//           </select>
//         </div>
        
//         <div className="col-md-6">
//           <label htmlFor="amount" className="form-label">
//             Amount*
//           </label>
//           <div className="input-group">
//             <span className="input-group-text">$</span>
//             <input
//               type="number"
//               step="0.01"
//               className={`form-control ${darkMode ? "dark-mode" : ""}`}
//               id="amount"
//               name="amount"
//               value={formData.amount}
//               onChange={handleChange}
//               required
//             />
//           </div>
//         </div>
        
//         <div className="col-md-6">
//           <label htmlFor="frequency" className="form-label">
//             Frequency
//           </label>
//           <select
//             className={`form-select ${darkMode ? "dark-mode" : ""}`}
//             id="frequency"
//             name="frequency"
//             value={formData.frequency}
//             onChange={handleChange}
//           >
//             <option value="one-time">One-time</option>
//             <option value="weekly">Weekly</option>
//             <option value="bi-weekly">Bi-weekly</option>
//             <option value="monthly">Monthly</option>
//             <option value="quarterly">Quarterly</option>
//             <option value="annually">Annually</option>
//           </select>
//         </div>
        
//         <div className="col-12">
//           <hr />
//           <h5 className="mb-3">Payment Method</h5>
//         </div>
        
//         <div className="col-md-6">
//           <label htmlFor="paymentMethod" className="form-label">
//             Payment Method*
//           </label>
//           <select
//             className={`form-select ${darkMode ? "dark-mode" : ""}`}
//             id="paymentMethod"
//             name="paymentMethod"
//             value={formData.paymentMethod}
//             onChange={handleChange}
//             required
//           >
//             <option value="bank">Bank Transfer</option>
//             <option value="direct">Direct Deposit</option>
//             <option value="check">Check</option>
//             <option value="cash">Cash</option>
//             <option value="paypal">PayPal</option>
//           </select>
//         </div>
        
//         <div className="col-md-6">
//           <label htmlFor="payoutDate" className="form-label">
//             Payout Date*
//           </label>
//           <input
//             type="date"
//             className={`form-control ${darkMode ? "dark-mode" : ""}`}
//             id="payoutDate"
//             name="payoutDate"
//             value={formData.payoutDate}
//             onChange={handleChange}
//             required
//           />
//         </div>
        
//         {(formData.paymentMethod === "bank" || formData.paymentMethod === "direct") && (
//           <>
//             <div className="col-md-6">
//               <label htmlFor="bankName" className="form-label">
//                 Bank Name*
//               </label>
//               <input
//                 type="text"
//                 className={`form-control ${darkMode ? "dark-mode" : ""}`}
//                 id="bankName"
//                 name="bankName"
//                 value={formData.bankName}
//                 onChange={handleChange}
//                 required={formData.paymentMethod === "bank" || formData.paymentMethod === "direct"}
//               />
//             </div>
            
//             <div className="col-md-6">
//               <label htmlFor="accountNumber" className="form-label">
//                 Account Number*
//               </label>
//               <input
//                 type="text"
//                 className={`form-control ${darkMode ? "dark-mode" : ""}`}
//                 id="accountNumber"
//                 name="accountNumber"
//                 value={formData.accountNumber}
//                 onChange={handleChange}
//                 required={formData.paymentMethod === "bank" || formData.paymentMethod === "direct"}
//               />
//             </div>
            
//             <div className="col-md-6">
//               <label htmlFor="routingNumber" className="form-label">
//                 Routing Number*
//               </label>
//               <input
//                 type="text"
//                 className={`form-control ${darkMode ? "dark-mode" : ""}`}
//                 id="routingNumber"
//                 name="routingNumber"
//                 value={formData.routingNumber}
//                 onChange={handleChange}
//                 required={formData.paymentMethod === "bank" || formData.paymentMethod === "direct"}
//               />
//             </div>
//           </>
//         )}
        
//         {formData.paymentMethod === "check" && (
//           <div className="col-md-6">
//             <label htmlFor="mailAddress" className="form-label">
//               Mailing Address*
//             </label>
//             <textarea
//               className={`form-control ${darkMode ? "dark-mode" : ""}`}
//               id="mailAddress"
//               name="mailAddress"
//               rows="3"
//               value={formData.mailAddress || ""}
//               onChange={handleChange}
//               required={formData.paymentMethod === "check"}
//             ></textarea>
//           </div>
//         )}
        
//         {formData.paymentMethod === "paypal" && (
//           <div className="col-md-6">
//             <label htmlFor="paypalEmail" className="form-label">
//               PayPal Email*
//             </label>
//             <input
//               type="email"
//               className={`form-control ${darkMode ? "dark-mode" : ""}`}
//               id="paypalEmail"
//               name="paypalEmail"
//               value={formData.paypalEmail || ""}
//               onChange={handleChange}
//               required={formData.paymentMethod === "paypal"}
//             />
//           </div>
//         )}
        
//         <div className="col-12">
//           <label htmlFor="notes" className="form-label">
//             Notes
//           </label>
//           <textarea
//             className={`form-control ${darkMode ? "dark-mode" : ""}`}
//             id="notes"
//             name="notes"
//             rows="3"
//             value={formData.notes}
//             onChange={handleChange}
//           ></textarea>
//         </div>
        
        

//         {/* Existing input fields ... */}

//         <div className="col-12">
//           <label htmlFor="notes" className="form-label">
//             Notes
//           </label>
//           <textarea
//             className={`form-control ${darkMode ? "dark-mode" : ""}`}
//             id="notes"
//             name="notes"
//             rows="3"
//             value={formData.notes}
//             onChange={handleChange}
//           ></textarea>
//         </div>

//         <div className="col-12">
//           <div className="form-check">
//             <input
//               className="form-check-input"
//               type="checkbox"
//               id="confirmDetails"
//               name="confirmDetails"
//               checked={formData.confirmDetails || false}
//               onChange={handleChange}
//               required
//             />
//             <label className="form-check-label" htmlFor="confirmDetails">
//               I confirm that the above payout details are accurate.
//             </label>
//           </div>
//         </div>

//         <div className="col-12 d-flex justify-content-end mt-3">
//           <button type="button" className="btn btn-secondary me-2" onClick={handleClose}>
//             Cancel
//           </button>
//           <button type="submit" className="btn btn-primary">
//             Submit Payout
//           </button>
//         </div>
//       </div>
//     </form>
//   );
// };

// export default PayoutForm;

import React, { useState } from "react";
import { useSelector } from "react-redux";

const PayoutForm = ({ handleClose, editData }) => {
  const darkMode = useSelector((state) => state.theme?.isDarkMode) || false;

  const [formData, setFormData] = useState(
    {
      recipientName: "",
      recipientType: "employee",
      amount: "",
      paymentMethod: "bank",
      accountNumber: "",
      bankName: "",
      routingNumber: "",
      frequency: "monthly",
      payoutDate: "",
      notes: "",
      mailAddress: "",
      Email: "",
      confirmed: false,
    }
  );

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    handleClose(); // Call parent function to close the modal/dialog
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row g-3">
        <div className="col-12">
          <h5 className="mb-3">Recipient Information</h5>
        </div>

        <div className="col-md-6">
          <label htmlFor="recipientName" className="form-label">
            Recipient Name*
          </label>
          <input
            type="text"
            className={`form-control ${darkMode ? "dark-mode" : null}`}
            id="recipientName"
            name="recipientName"
            value={formData.recipientName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-md-6">
          <label htmlFor="recipientType" className="form-label">
            Recipient Type
          </label>
          <select
            className={`form-select ${darkMode ? "dark-mode" : ""}`}
            id="recipientType"
            name="recipientType"
            value={formData.recipientType}
            onChange={handleChange}
          >
            <option value="employee">Employee</option>
            <option value="vendor">Vendor</option>
            <option value="contractor">Contractor</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="col-md-6">
          <label htmlFor="amount" className="form-label">
            Amount*
          </label>
          <div className="input-group">
            <span className="input-group-text">$</span>
            <input
              type="number"
              step="0.01"
              className={`form-control ${darkMode ? "dark-mode" : ""}`}
              id="amount"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="col-md-6">
          <label htmlFor="frequency" className="form-label">
            Frequency
          </label>
          <select
            className={`form-select ${darkMode ? "dark-mode" : ""}`}
            id="frequency"
            name="frequency"
            value={formData.frequency}
            onChange={handleChange}
          >
            <option value="one-time">One-time</option>
            <option value="weekly">Weekly</option>
            <option value="bi-weekly">Bi-weekly</option>
            <option value="monthly">Monthly</option>
            <option value="quarterly">Quarterly</option>
            <option value="annually">Annually</option>
          </select>
        </div>

        <div className="col-12">
          <hr />
          <h5 className="mb-3">Payment Method</h5>
        </div>

        <div className="col-md-6">
          <label htmlFor="paymentMethod" className="form-label">
            Payment Method*
          </label>
          <select
            className={`form-select ${darkMode ? "dark-mode" : ""}`}
            id="paymentMethod"
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChange}
            required
          >
            <option value="bank">Bank Transfer</option>
            <option value="direct">Direct Deposit</option>
            <option value="check">Check</option>
            <option value="cash">Cash</option>
            <option value="paypal">PayPal</option>
          </select>
        </div>

        <div className="col-md-6">
          <label htmlFor="payoutDate" className="form-label">
            Payout Date*
          </label>
          <input
            type="date"
            className={`form-control ${darkMode ? "dark-mode" : ""}`}
            id="payoutDate"
            name="payoutDate"
            value={formData.payoutDate}
            onChange={handleChange}
            required
          />
        </div>

        {(formData.paymentMethod === "bank" ||
          formData.paymentMethod === "direct") && (
          <>
            <div className="col-md-6">
              <label htmlFor="bankName" className="form-label">
                Bank Name*
              </label>
              <input
                type="text"
                className={`form-control ${darkMode ? "dark-mode" : ""}`}
                id="bankName"
                name="bankName"
                value={formData.bankName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-md-6">
              <label htmlFor="accountNumber" className="form-label">
                Account Number*
              </label>
              <input
                type="text"
                className={`form-control ${darkMode ? "dark-mode" : ""}`}
                id="accountNumber"
                name="accountNumber"
                value={formData.accountNumber}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-md-6">
              <label htmlFor="routingNumber" className="form-label">
                Routing Number*
              </label>
              <input
                type="text"
                className={`form-control ${darkMode ? "dark-mode" : ""}`}
                id="routingNumber"
                name="routingNumber"
                value={formData.routingNumber}
                onChange={handleChange}
                required
              />
            </div>
          </>
        )}

        {formData.paymentMethod === "check" && (
          <div className="col-md-6">
            <label htmlFor="mailAddress" className="form-label">
              Mailing Address*
            </label>
            <textarea
              className={`form-control ${darkMode ? "dark-mode" : ""}`}
              id="mailAddress"
              name="mailAddress"
              rows="3"
              value={formData.mailAddress}
              onChange={handleChange}
              required
            ></textarea>
          </div>
        )}

    
          <div className="col-md-6">
            <label htmlFor="Email" className="form-label">
               Email*
            </label>
            <input
              type="email"
              className={`form-control ${darkMode ? "dark-mode" : ""}`}
              id="Email"
              name="Email"
              value={formData.Email}
              onChange={handleChange}
              required
            />
          </div>
        

        <div className="col-12">
          <label htmlFor="notes" className="form-label">
            Notes
          </label>
          <textarea
            className={`form-control ${darkMode ? "dark-mode" : ""}`}
            id="notes"
            name="notes"
            rows="3"
            value={formData.notes}
            onChange={handleChange}
          ></textarea>
        </div>

        <div className="col-12">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="confirmed"
              name="confirmed"
              checked={formData.confirmed}
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="confirmed">
              I confirm that the information provided is accurate.*
            </label>
          </div>
        </div>

        <div className="col-12 d-flex justify-content-end mt-3">
          <button type="button" className="btn btn-secondary me-2" onClick={handleClose}>
            Cancel
          </button>
          <button type="submit" className="btn btn-primary" disabled={!formData.confirmed}>
            {editData ? "Update Payout" : "Submit Payout"}
          </button>
        </div>
      </div>
    </form>
  );
};

export default PayoutForm;




// const PayoutForm = () => {
//   return (
//     <div>PAyoutForm</div>
//   )
// }

// export default PayoutForm

