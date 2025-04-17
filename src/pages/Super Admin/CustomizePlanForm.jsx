import React, { useState } from "react";
// import Dealsstep from "./create-quotes/Dealsstep";
// import BuyerInfo from "./create-quotes/BuyerInfo";
import "../../components/crm/allquotes/Quotes.css";
import CustomPlanForm from "./CustomSelect.jsx/CustomSelect";
// import YourInfo from "./create-quotes/YourInfo";
// import SignaturePayment from "./create-quotes/SignaturePayment";
// import Review from "./create-quotes/Review";
const CreateQuote = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 5;

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  // Step content components
  const DealStep = () => (
    <div className="quote-section">
      <CustomPlanForm />
    </div>
  );

//   const BuyerInfoStep = () => (
//     <div className="quote-section">
//       <BuyerInfo />
//     </div>
//   );

//   const YourInfoStep = () => (
//     <div className="quote-section">
//       <YourInfo />
//     </div>
//   );

//   const Signature_Payment = () => (
//     <div className="quote-section">
//       <SignaturePayment />
//     </div>
//   );

//   const Review_q = () => (
//     <div className="quote-section">
//       <Review />
//     </div>
//   );

  // Render step content based on current step
  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return <DealStep />;
    //   case 2:
    //     return <BuyerInfoStep />;
    //   case 3:
    //     return <YourInfoStep />;
    //   case 4:
    //     return <Signature_Payment />;
    //   case 5:
    //     return <Review_q />;
      default:
        return <div>Step {currentStep} content</div>;
    }
  };

  return (
    <>
      <div className="quote-wizard">
        {/* Progress Steps */}
        <div className="quote-wizard-steps">
          {[...Array(totalSteps)].map((_, index) => (
            <div
              key={index + 1}
              className={`quote-step ${
                currentStep === index + 1 ? "active" : ""
              }`}>
              <div className="quote-step-circle">
                {currentStep > index + 1 ? (
                  <i className="bi bi-check2" />
                ) : (
                  <span className="quote-step-number">{index + 1}</span>
                )}
              </div>
              <span className="quote-step-label">
                {index === 0 && "SELECT FUNCTION"}
                {index === 1 && "BUYER INFO"}
                {index === 2 && "YOUR INFO"}
                {/* {index === 3 && "LINE ITEMS"} */}
                {index === 3 && "SIGNATURE & PAYMENT"}
                {/* {index === 5 && "TEMPLATE & DETAILS"} */}
                {index === 4 && "REVIEW"}
              </span>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="quote-wizard-content">
          {/* Left Section */}
          <div className="quote-wizard-form">{renderStepContent()}</div>

          {/* Right Section */}
          {/* <div className="quote-wizard-preview">
            <div className="quote-preview-section">
              <h2 className="quote-section-title">Quote Preview</h2>
              <div className="quote-preview-card">
                <div className="quote-preview-header">
                  <div className="quote-preview-title">
                    NEW QUOTE
                    <br />
                    <span className="quote-preview-number">
                      #JQ2M2255-25872666
                    </span>
                  </div>
                  <div className="quote-preview-logo">logo</div>
                </div>
                <div className="quote-preview-company">
                  XYZ Technology Group Ltd
                  <br />
                  123 Business Street
                  <br />
                  Suite 456
                  <br />
                  Business City, BC 12345
                </div>
              </div>
            </div>
          </div> */}
        </div>

        {/* Footer Actions */}
        <div className="quote-wizard-footer">
          <button
            className="quote-btn-back"
            onClick={handleBack}
            disabled={currentStep === 1}>
            <i className="bi bi-arrow-left" />
            Back
          </button>
          <div className="quote-step-indicator">
            Step {currentStep} of {totalSteps}
          </div>
          <div className="createquote-btn d-flex">
          <button
            className="inv-new-button"
            onClick={handleNext}
            disabled={currentStep === totalSteps}>
            Continue
            <i className="bi bi-arrow-right" />
          </button>
          <button className="btn btn-outline-primary ml-4 custom-btn">Save</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateQuote;
