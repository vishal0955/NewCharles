import React from "react";

const CustomerSatisfactionSurvey = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-sm p-8">
          {/* Header Section */}
          <div className="mb-8">
            <h1 className="text-2xl font-semibold text-gray-800">Example Inc</h1>
            <p className="text-gray-500 mt-1">Customer satisfaction survey</p>
          </div>

          {/* Survey Form */}
          <form className="space-y-8">
            {/* Rating Section */}
            <div>
              <h2 className="text-lg text-gray-700 mb-4">How would you rate us?</h2>
              <div className="flex justify-between max-w-md">
                {[
                  { value: "1", icon: "fa-face-frown", bg: "bg-red-100", hover: "hover:bg-red-200", text: "text-red-400" },
                  { value: "2", icon: "fa-face-meh", bg: "bg-orange-100", hover: "hover:bg-orange-200", text: "text-orange-400" },
                  { value: "3", icon: "fa-face-smile", bg: "bg-yellow-100", hover: "hover:bg-yellow-200", text: "text-yellow-400" },
                  { value: "4", icon: "fa-face-smile-beam", bg: "bg-lime-100", hover: "hover:bg-lime-200", text: "text-lime-400" },
                  { value: "5", icon: "fa-face-grin-beam", bg: "bg-green-100", hover: "hover:bg-green-200", text: "text-green-400" }
                ].map((rating) => (
                  <label key={rating.value} className="cursor-pointer">
                    <input type="radio" name="rating" className="sr-only" value={rating.value} />
                    <div className={`w-12 h-12 flex items-center justify-center rounded-full ${rating.bg} ${rating.hover} transition-colors`}>
                      <i className={`fas ${rating.icon} ${rating.text} text-xl`}></i>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Textarea Section */}
            <div>
              <h2 className="text-lg text-gray-700 mb-4">What did you like most?</h2>
              <textarea
                className="w-full border border-gray-200 rounded-lg p-3 focus:ring-2 focus:ring-custom focus:border-custom"
                rows="3"
                placeholder="I enjoyed..."
              ></textarea>
            </div>

            {/* Recommendation Section */}
            <div>
              <h2 className="text-lg text-gray-700 mb-4">Would you recommend us to a friend?</h2>
              <div className="flex gap-4">
                {[
                  { value: "no", icon: "fa-thumbs-down", bg: "bg-red-100", hover: "hover:bg-red-200", text: "text-red-400" },
                  { value: "yes", icon: "fa-thumbs-up", bg: "bg-green-100", hover: "hover:bg-green-200", text: "text-green-400" }
                ].map((recommend) => (
                  <label key={recommend.value} className="cursor-pointer">
                    <input type="radio" name="recommend" className="sr-only" value={recommend.value} />
                    <div className={`w-12 h-12 flex items-center justify-center rounded-lg ${recommend.bg} ${recommend.hover} transition-colors`}>
                      <i className={`fas ${recommend.icon} ${recommend.text} text-xl`}></i>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <button type="submit" className="w-full bg-custom text-white py-3 px-6 rounded-lg hover:bg-gray-700 transition-colors">
              Send feedback
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CustomerSatisfactionSurvey;

