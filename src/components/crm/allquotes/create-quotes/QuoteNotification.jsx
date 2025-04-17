import React from "react";

const QuoteNotification = () => {
  const handleCopyLink = () => {
    const linkText = document.getElementById("quote-link");
    if (linkText) {
      linkText.select();
      document.execCommand("copy");
    }
  };

  return (
    <>
      <div className="quote-popup-icon">
        <img
          src="/assets/images/quote-created-icon.svg"
          alt="Quote Created"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src =
              "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHJlY3Qgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIHJ4PSI1MCIgZmlsbD0iI0YyRjdGRiIvPgogIDxwYXRoIGQ9Ik02NS4zMzMzIDM4LjMzMzNINzMuMzMzM0M3NC44NDc4IDM4LjMzMzMgNzYuMzAxIDM4LjkyOTkgNzcuMzYzNyA0MC4wMDI3Qzc4LjQyNjQgNDEuMDc1NCA3OS4wMTY3IDQyLjU0NSA3OS4wMTY3IDQ0LjA3NTlWNjguMzg5MUM3OS4wMTY3IDY5LjkyIDc4LjQyNjQgNzEuMzg5NiA3Ny4zNjM3IDcyLjQ2MjNDNzYuMzAxIDczLjUzNSA3NC44NDc4IDc0LjEzMTcgNzMuMzMzMyA3NC4xMzE3SDI2LjY2NjdDMjUuMTUyMiA3NC4xMzE3IDIzLjY5OSA3My41MzUgMjIuNjM2MyA3Mi40NjIzQzIxLjU3MzYgNzEuMzg5NiAyMC45ODMzIDY5LjkyIDIwLjk4MzMgNjguMzg5MVY0NC4wNzU5QzIwLjk4MzMgNDIuNTQ1IDIxLjU3MzYgNDEuMDc1NCAyMi42MzYzIDQwLjAwMjdDMjMuNjk5IDM4LjkyOTkgMjUuMTUyMiAzOC4zMzMzIDI2LjY2NjcgMzguMzMzM0gzNC42NjY3IiBzdHJva2U9IiM2ODkyRkYiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+CiAgPHBhdGggZD0iTTY1LjMzMzMgMjcuNzM2NUg1MFYzOC4zMzMySDAiIHN0cm9rZT0iIzY4OTJGRiIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KICA8cGF0aCBkPSJNMzQuNjY2NyAyNy43MzY1SDUwVjM4LjMzMzJIMCIgc3Ryb2tlPSIjNjg5MkZGIiBzdHJva2Utd2lkdGg9IjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgogIDxwYXRoIGQ9Ik0zNC42NjY3IDM4LjMzMzJWNDRDMzQuNjY2NyA0Ny4wODcgMzUuODk1OCA0OS4wNDc1IDM4LjMzMzMgNTAuNjg0OEM0MC43NzA4IDUyLjMyMiA0My44Njk1IDUyLjk5OTggNDcuNSA1Mi45OTk4QzUxLjEzMDUgNTIuOTk5OCA1NC4yMjkyIDUyLjMyMiA1Ni42NjY3IDUwLjY4NDhDNTkuMTA0MiA0OS4wNDc1IDYwLjMzMzMgNDcuMDg3IDYwLjMzMzMgNDRWMzguMzMzMk0zNC42NjY3IDU2LjI5MDRWNjIuNzU4OE02NSA1Ni4yOTA0VjYyLjc1ODgiIHN0cm9rZT0iIzY4OTJGRiIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+Cg==";
          }}
        />
      </div>
      <h3 className="quote-popup-title">
        A web page for your quote has been created
      </h3>
      <p className="quote-popup-text">
        Copy the web page link below to share with prospects or choose to write
        an email with the quote included. You can access any of your active
        quotes from the deal page.
      </p>
      <div className="quote-link-container">
        <input
          id="quote-link"
          type="text"
          className="quote-link-input"
          value="https://email.xyz.global/ZyGeRcxZY8"
          readOnly
        />
        <button className="quote-copy-btn" onClick={handleCopyLink}>
          Copy
        </button>
      </div>
    </>
  );
};

export default QuoteNotification;
