import React from "react";


const HelpCenter = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-custom to-custom/90">
      {/* Header */}
      <header className="w-full">
        <nav className="max-w-8xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center">
            <img
              src="https://i.ibb.co/dJ68VsWW/image.png"
              alt="Logo"
              className="h-8"
            />
          </a>
          <div className="flex items-center gap-4">
            <button className="text-white hover:text-white/80 !rounded-button px-4 py-2 border border-white/20">
              Submit a ticket
            </button>
            <button className="text-white hover:text-white/80 !rounded-button px-4 py-2 border border-white/20">
              My Tickets
            </button>
            <button className="text-white hover:text-white/80 !rounded-button px-4 py-2 border border-white/20">
              Login
            </button>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="max-w-8xl mx-auto px-6 py-12">
        {/* Search Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-8">
            How can we help you today?
          </h1>
          <div className="max-w-2xl mx-auto flex">
            <input
              type="text"
              placeholder="Enter your search term here..."
              className="w-full px-4 py-3 !rounded-button border-0 focus:ring-2 focus:ring-custom"
            />
            <button className="ml-2 bg-[#FF9F5A] text-white px-8 py-3 !rounded-button hover:bg-[#FF9F5A]/90">
              Search
            </button>
          </div>
        </div>

        {/* Help Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            { icon: "fa-laptop", title: "Solutions", text: "Learn about all our theme products and services" },
            { icon: "fa-lightbulb", title: "Discussions", text: "Have any questions? Find the answers to all of them" },
            { icon: "fa-envelope", title: "Submit a ticket", text: "Contact us through a specially prepared form" },
            { icon: "fa-comments", title: "My tickets", text: "Show the list of the tickets" },
          ].map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="text-custom mb-4">
                <i className={`fas ${item.icon} text-2xl`}></i>
              </div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Recent Articles */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-8">Recent articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "What is Breezy Themes?", text: "Explore the Breezy Themes world, learn more about us, our products, our services..." },
              { title: "What can be changed?", text: "This article will tell you about all possible changes you can make to your theme..." },
              { title: "Installation service FAQ", text: "Here is how we can help you with the installation. Questions? Our installation team..." },
            ].map((article, index) => (
              <article key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold mb-2">{article.title}</h3>
                <p className="text-gray-600">{article.text}</p>
              </article>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-auto py-8">
        <div className="max-w-8xl mx-auto px-6 text-center text-white/60">
          <p>&copy; 2024 Help Center. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HelpCenter

// Render Component in Root


// Create a React App-
// npx create-react-app help-center
// cd help-center
// npm install @fortawesome/fontawesome-free


// Configure tailwind.config.js:
// module.exports = {
//     content: ["./src/**/*.{js,jsx,ts,tsx}"],
//     theme: {
//       extend: {},
//     },
//     plugins: [],
//   };

// Add this to src/index.css:
// @tailwind base;
// @tailwind components;
// @tailwind utilities;