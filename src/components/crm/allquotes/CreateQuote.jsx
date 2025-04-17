import React, { useState } from "react";
import Dealsstep from "./create-quotes/Dealsstep";
import BuyerInfo from "./create-quotes/BuyerInfo";
import "./Quotes.css";
import YourInfo from "./create-quotes/YourInfo";
import SignaturePayment from "./create-quotes/SignaturePayment";
import Review from "./create-quotes/Review";
import ReviewLineItem from "./create-quotes/ReviewLineItem";
import QuoteTemplateInterface from "./create-quotes/QuoteTemplateInterface";
import QuoteNotification from "./create-quotes/QuoteNotification";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const CreateQuote = ({ close }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [showPopup, setShowPopup] = useState(false);
  const totalSteps = 7;

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

  const handleCreate = () => {
    setShowPopup(true);

  };

  const closePopup = () => {
    setShowPopup(false);
    close();

  };

  // Step content components
  const DealStep = () => (
    <div className="quote-section">
      <Dealsstep />
    </div>
  );

  const BuyerInfoStep = () => (
    <div className="quote-section">
      <BuyerInfo />
    </div>
  );

  const YourInfoStep = () => (
    <div className="quote-section">
      <YourInfo />
    </div>
  );

  const Review_lineitem = () => (
    <div className="quote-section">
      <ReviewLineItem />
    </div>
  );

  const Signature_Payment = () => (
    <div className="quote-section">
      <SignaturePayment />
    </div>
  );

  const Quote_Templatet = () => (
    <div className="quote-section">
      <QuoteTemplateInterface />
    </div>
  );

  const Review_q = () => (
    <div className="quote-section">
      <Review />
    </div>
  );

  // Render step content based on current step
  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return <DealStep />;
      case 2:
        return <BuyerInfoStep />;
      case 3:
        return <YourInfoStep />;
      case 4:
        return <Review_lineitem />;
      case 5:
        return <Signature_Payment />;
      case 6:
        return <Quote_Templatet />;
      case 7:
        return <Review_q />;
      default:
        return <div>Step {currentStep} content</div>;
    }
  };

  const darkMode = useSelector((state) => (state.theme.isDarkMode))

  return (
    <>
      <div className={`${darkMode ? "card-dark" : null } quote-wizard`}>
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
                {index === 0 && "DEAL"}
                {index === 1 && "BUYER INFO"}
                {index === 2 && "YOUR INFO"}
                {index === 3 && "LINE ITEMS"}
                {index === 4 && "SIGNATURE & PAYMENT"}
                {index === 5 && "TEMPLATE & DETAILS"}
                {index === 6 && "REVIEW"}
              </span>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="quote-wizard-content">
          {/* Left Section */}
          <div className={`${darkMode ? "card-dark" : null } quote-wizard-form `}>{renderStepContent()}</div>

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
        <div className= {`${darkMode ? "card-dark" : null } quote-wizard-footer `}>
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
            {currentStep < totalSteps ? (
              <button className="inv-new-button" onClick={handleNext}>
                Continue
                <i className="bi bi-arrow-right" />
              </button>
            ) : (
              <Link to="/crm/quotes" >
              <button type="submit" className="inv-new-button" onClick={handleCreate}>
                Create
                <i className="bi bi-check-circle" />
              </button>
              </Link>
            )}
            <button className="btn btn-outline-primary ml-4 custom-btn">
              Save
            </button>
          </div>
        </div>
      </div>

      {/* Popup when quote is created */}
      {showPopup && (
        <div className="quote-popup-overlay">
          <div className="quote-popup">
            <div className="quote-popup-content">
              <QuoteNotification />
            </div>
            <div className="quote-popup-actions">
              <button className="quote-email-btn">
                Write email with quote
              </button>
              <button className="quote-close-btn" onClick={closePopup}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CreateQuote;