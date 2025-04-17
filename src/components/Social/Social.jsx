import React, { useState } from "react";
import AllFeed from "./AllFeed";
import ChatApp from "./ChatApp";
import { useSelector } from "react-redux";

const Social = () => {
  // State to manage bookmarks
  const [bookmarked, setBookmarked] = useState(false);
  const [bookmarkCount, setBookmarkCount] = useState(0);
  const [activeTab, setActiveTab] = useState("allFeeds");

  // Event handler for bookmark click
  const handleBookmarkClick = () => {
    setBookmarked(!bookmarked);
    setBookmarkCount(bookmarked ? bookmarkCount - 1 : bookmarkCount + 1);
  };


  const darkMode = useSelector((state) => state.theme.isDarkMode);

  return (
    <div className="max-w-8xl mx-auto px-4 py-6">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Sidebar - Hidden on mobile, shown on lg screens */}
        <div className="col-md-3">
          <div className="hidden lg:block w-full lg:w-72 flex-shrink-0">
            {/* Profile Card */}
            <div
              className=" rounded-lg p-6 mb-6"
              style={{
                boxShadow:
                  "rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset",
              }}>
              <div className="text-center">
                <img
                  src="https://creatie.ai/ai/api/search-image?query=professional headshot of a business person on white background&width=80&height=80&orientation=squarish&flag=3032fcfb-87df-4be1-96a4-c0a7a27f5187"
                  className="w-20 h-20 rounded-full mx-auto mb-3"
                  alt="Profile"
                />
                <h2 className="font-semibold text-lg">James Wilson</h2>
                <p className="text-gray-500 text-sm mb-4">@jameswilson</p>
                <div className="flex justify-center gap-8 mb-4">
                  <div className="text-center">
                    <div className="font-semibold">89K</div>
                    <div className="text-sm text-gray-500">Followers</div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold">45</div>
                    <div className="text-sm text-gray-500">Following</div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold">45</div>
                    <div className="text-sm text-gray-500">Posts</div>
                  </div>
                </div>
                <button className="w-full bg-blue-600 text-white rounded-lg py-2 px-4 font-medium hover:bg-blue-700 transition-colors">
                  Create Post
                </button>
              </div>
            </div>

            {/* Navigation Tabs */}
            <nav
              className=" rounded-lg p-2 mb-6"
              style={{
                boxShadow:
                  "rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset",
              }}>
              <div className="flex flex-col space-y-1">
                <button
                  className={`flex items-center px-4 py-3 rounded-lg transition-colors ${
                    activeTab === "allFeeds"
                      ? "text-blue-600 bg-blue-50"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                  onClick={() => setActiveTab("allFeeds")}>
                  <i className="fas fa-stream w-5" />
                  <span className="ml-3">All Feeds</span>
                </button>

                <button
                  className={`flex items-center px-4 py-3 rounded-lg transition-colors ${
                    activeTab === "explore"
                      ? "text-blue-600 bg-blue-50"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                  onClick={() => setActiveTab("explore")}>
                  <i className="fas fa-compass w-5" />
                  <span className="ml-3">Explore</span>
                </button>

                <button
                  className={`flex items-center px-4 py-3 rounded-lg transition-colors ${
                    activeTab === "messages"
                      ? "text-blue-600 bg-blue-50"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                  onClick={() => setActiveTab("messages")}>
                  <i className="fas fa-envelope w-5" />
                  <span className="ml-3">Messages</span>
                  <span className="ml-auto bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                    3
                  </span>
                </button>

                <button
                  className={`flex items-center px-4 py-3 rounded-lg transition-colors ${
                    activeTab === "bookmark"
                      ? "text-blue-600 bg-blue-50"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                  onClick={() => setActiveTab("bookmark")}>
                  <i className="fas fa-bookmark w-5" />
                  <span className="ml-3">Bookmark</span>
                  <span className="ml-auto bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                    {bookmarkCount}
                  </span>
                </button>

                <button
                  className={`flex items-center px-4 py-3 rounded-lg transition-colors ${
                    activeTab === "profile"
                      ? "text-blue-600 bg-blue-50"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                  onClick={() => setActiveTab("profile")}>
                  <i className="fas fa-user w-5" />
                  <span className="ml-3">Profile</span>
                </button>
              </div>
            </nav>

            {/* Liked Pages */}
            <div
              className=" rounded-lg p-4"
              style={{
                boxShadow:
                  "rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset",
              }}>
              <h3 className="font-semibold mb-4">Pages You Liked</h3>
              <div className="space-y-4">
                <button
                  className={`flex items-center w-full p-2 rounded-lg transition-colors ${
                    activeTab === "dribbble"
                      ? "text-blue-600 bg-blue-50"
                      : "hover:bg-gray-50"
                  }`}
                  onClick={() => setActiveTab("dribbble")}>
                  <div className="w-8 h-8 bg-pink-500 rounded-lg flex items-center justify-center text-white">
                    <i className="fab fa-dribbble" />
                  </div>
                  <span className="ml-3">Dribbble</span>
                </button>

                <button
                  className={`flex items-center w-full p-2 rounded-lg transition-colors ${
                    activeTab === "designs"
                      ? "text-blue-600 bg-blue-50"
                      : "hover:bg-gray-50"
                  }`}
                  onClick={() => setActiveTab("designs")}>
                  <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center text-white">
                    <i className="fas fa-paint-brush" />
                  </div>
                  <span className="ml-3">UI/UX Designs</span>
                </button>

                <button
                  className={`flex items-center w-full p-2 rounded-lg transition-colors ${
                    activeTab === "figma"
                      ? "text-blue-600 bg-blue-50"
                      : "hover:bg-gray-50"
                  }`}
                  onClick={() => setActiveTab("figma")}>
                  <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center text-white">
                    <i className="fab fa-figma" />
                  </div>
                  <span className="ml-3">Figma Update</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Main Content - Full width on mobile, flex-1 on larger screens */}
        <div className="col-md-9">
          {/* Tab Content Display (Example) */}
          <div className={`${darkMode ? "dark-mode" : null } mt-4 p-4  rounded-lg`}>
            {activeTab === "allFeeds" && (
              <div>
                {" "}
                <AllFeed bookmarked={bookmarked} handleBookmarkClick={handleBookmarkClick}/>
              </div>
            )}
            {activeTab === "explore" && <div>Explore Content</div>}
            {/* {activeTab === "messages" && <div> <ChatApp /> </div>} */}
            {activeTab === "bookmark" && (
              <p>Bookmark Content ({bookmarkCount} items)</p>
            )}
            {activeTab === "profile" && <div>Profile Content</div>}
            {activeTab === "dribbble" && <p>Dribbble Page Content</p>}
            {activeTab === "designs" && <div>UI/UX Designs Content</div>}
            {activeTab === "figma" && <div>Figma Updates Content</div>}
          </div>
        </div>


      </div>
    </div>
  );
};

export default Social;
