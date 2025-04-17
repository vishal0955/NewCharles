import React from "react";

const Chatbot = () => {
  return (
    <div className="font-['Inter']">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <nav className="max-w-8xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="/" className="flex items-center space-x-2">
            <img
              src="https://i.ibb.co/dJ68VsWW/image.png"
              alt="XYZ Logo"
              className="h-8"
            />
            <span className="text-custom font-semibold text-xl">XYZ</span>
          </a>

          <div className="hidden lg:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-custom">
              Home
            </a>
            <div className="relative group">
              <a href="#" className="text-gray-700 hover:text-custom flex items-center">
                Company <i className="fas fa-chevron-down ml-1 text-xs"></i>
              </a>
            </div>
            <div className="relative group">
              <a href="#" className="text-gray-700 hover:text-custom flex items-center">
                Expertise <i className="fas fa-chevron-down ml-1 text-xs"></i>
              </a>
            </div>
            <div className="relative group">
              <a href="#" className="text-gray-700 hover:text-custom flex items-center">
                Services <i className="fas fa-chevron-down ml-1 text-xs"></i>
              </a>
            </div>
            <div className="relative group">
              <a href="#" className="text-gray-700 hover:text-custom flex items-center">
                Markets <i className="fas fa-chevron-down ml-1 text-xs"></i>
              </a>
            </div>
            <a href="#" className="text-gray-700 hover:text-custom">
              Contact
            </a>
          </div>

          <button className="bg-custom text-white px-6 py-2 rounded-lg hover:bg-custom/90 transition-colors">
            Book A Consultation
          </button>
        </nav>
      </header>

      {/* Main Section */}
      <main>
        <section className="relative h-screen">
          <div className="absolute inset-0">
            <img
              src="https://creatie.ai/ai/api/search-image?query=A dramatic aerial view of London's financial district skyline featuring iconic skyscrapers like the Gherkin and Shard, captured during overcast weather with moody gray clouds, creating a sophisticated urban atmosphere perfect for a corporate hero image&width=1920&height=1080&orientation=landscape&flag=20057a55-7f59-4e27-a7ef-b0603113c8df&flag=4edf3945-8856-4d9f-9808-70c840d92a0f"
              alt="London Skyline"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gray-900/40"></div>
          </div>
          <div className="relative h-full flex items-center justify-center">
            <h1 className="text-white text-7xl font-bold tracking-wider">
              WE <span className="border-b-4 border-custom">LISTEN</span>
            </h1>
          </div>
        </section>
      </main>

      {/* Chat Widget */}
      <div className="fixed bottom-4 right-4 w-80 bg-white rounded-lg shadow-lg overflow-hidden z-50">
        <div className="p-4 bg-gray-50 border-b flex items-center space-x-2">
          <img
            src="https://i.ibb.co/dJ68VsWW/image.png"
            alt="XYZ Chat"
            className="h-6"
          />
          <span className="font-medium text-gray-700">XYZ Live chat</span>
        </div>

        <div className="p-4 bg-gray-50">
          <div className="flex items-start space-x-2 mb-4">
            <div className="bg-white p-3 rounded-lg shadow-sm">
              <p className="text-sm text-gray-700 mb-1">Hey there 👋</p>
              <p className="text-sm text-gray-700 mb-1">
                Welcome to XYZ Technology Group Ltd.
              </p>
              <p className="text-sm text-gray-700">
                My name is Ron and I am XYZ's friendly AI chat assistant 🤖
              </p>
            </div>
          </div>
          <p className="text-sm text-gray-500 mb-3">How can I help you today?</p>

          <div className="space-y-2">
            <button className="w-full text-left text-sm text-custom bg-white px-4 py-2 rounded-lg border border-gray-200 hover:border-custom transition-colors">
              Book a consultation
            </button>
            <button className="w-full text-left text-sm text-custom bg-white px-4 py-2 rounded-lg border border-gray-200 hover:border-custom transition-colors">
              Speak to sales
            </button>
            <button className="w-full text-left text-sm text-custom bg-white px-4 py-2 rounded-lg border border-gray-200 hover:border-custom transition-colors">
              Speak to support
            </button>
            <button className="w-full text-left text-sm text-custom bg-white px-4 py-2 rounded-lg border border-gray-200 hover:border-custom transition-colors">
              Request a callback
            </button>
            <button className="w-full text-left text-sm text-custom bg-white px-4 py-2 rounded-lg border border-gray-200 hover:border-custom transition-colors">
              I'm just browsing
            </button>
          </div>
        </div>

        <div className="p-4 border-t">
          <div className="relative">
            <input
              type="text"
              placeholder="Write a message"
              className="w-full pl-4 pr-10 py-2 rounded-lg border border-gray-200 focus:border-custom focus:ring-0"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 text-custom">
              <i className="fas fa-paper-plane"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
