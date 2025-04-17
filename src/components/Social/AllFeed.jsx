import React, { useState } from "react";
import { useSelector } from "react-redux";

const AllFeed = ({ bookmarked, handleBookmarkClick }) => {
  console.log("bok ", bookmarked);

  const darkMode = useSelector((state) => state.theme.isDarkMode);

  return (
    <>
      <div className="row">
        <div className="col-md-7">
          <div className="flex-1 w-full">
            <div className={`${darkMode ? "card-dark" : null } rounded-lg p-4 mb-6`}>
              <div className="flex items-start gap-4">
                <img
                  src="https://creatie.ai/ai/api/search-image?query=professional headshot of a business person on white background&width=40&height=40&orientation=squarish&flag=48858035-c22c-4978-b5f4-8ff0f4f72dba"
                  className="w-10 h-10 rounded-full"
                  alt="User"
                />
                <div className="flex-1">
                  <textarea
                    className={`${darkMode ? "card-dark" : null } w-full border-0 focus:ring-0 resize-none`}
                    rows={3}
                    placeholder="What's on your mind?"
                    defaultValue={""}
                  />
                  <div className="flex items-center justify-between mt-4 border-t pt-4">
                    <div className="flex gap-4">
                      <button className="text-gray-500 hover:text-gray-700">
                        <i className="far fa-image" />
                      </button>
                      <button className="text-gray-500 hover:text-gray-700">
                        <i className="far fa-video" />
                      </button>
                      <button className="text-gray-500 hover:text-gray-700">
                        <i className="far fa-file" />
                      </button>
                      <button className="text-gray-500 hover:text-gray-700">
                        <i className="far fa-smile" />
                      </button>
                    </div>
                    <button className="bg-custom text-white !rounded-button px-6 py-2">
                      Share Post
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className={`${darkMode ? "card-dark" : null } rounded-lg p-4 mb-6`}>
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">Popular Channels</h3>
                <div className="flex gap-2">
                  <button className="text-gray-400 hover:text-gray-600">
                    <i className="fas fa-chevron-left" />
                  </button>
                  <button className="text-gray-400 hover:text-gray-600">
                    <i className="fas fa-chevron-right" />
                  </button>
                </div>
              </div>
              <div className="flex gap-4 overflow-x-auto pb-2">
                <a href="#" className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white">
                    <i className="fab fa-facebook-f" />
                  </div>
                </a>
                <a href="#" className="flex-shrink-0">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white">
                    <i className="fab fa-discord" />
                  </div>
                </a>
                <a href="#" className="flex-shrink-0">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white">
                    <i className="fab fa-spotify" />
                  </div>
                </a>
                <a href="#" className="flex-shrink-0">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white">
                    <i className="fab fa-twitch" />
                  </div>
                </a>
                <a href="#" className="flex-shrink-0">
                  <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white">
                    <i className="fab fa-youtube" />
                  </div>
                </a>
              </div>
            </div>
            <div className="space-y-6">
              <div
                className={`${darkMode ? "card-dark" : null } rounded-lg p-6`}
                style={{ boxShadow: "rgba(17, 17, 26, 0.1) 0px 0px 16px" }}>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <img
                      src="https://creatie.ai/ai/api/search-image?query=professional headshot of a business person on white background&width=40&height=40&orientation=squarish&flag=2c7180fa-11bb-42d2-9443-a299ae434b58"
                      className="w-10 h-10 rounded-full"
                      alt="User"
                    />
                    <div className="ml-3">
                      <h4 className="font-semibold">John Smith</h4>
                      <p className="text-sm ">
                        United Kingdom • 1h ago
                      </p>
                    </div>
                  </div>
                  <button className="">
                    <i className="fas fa-ellipsis-h" />
                  </button>
                </div>
                <p className="mb-4">
                  Believe in yourself and all that you are. Know that there is
                  something inside you that is greater than any obstacle.
                  #MotivationMonday #Inspiration ✨
                </p>
                <img
                  src="https://creatie.ai/ai/api/search-image?query=A red target with arrows hitting bullseye on orange background, representing success and achievement&width=600&height=400&orientation=landscape&flag=b42b550a-70ab-45db-8e46-3f4825cc5c59"
                  className="w-full rounded-lg mb-4"
                  alt="Post"
                />
                <div className="flex items-center justify-between">
                  <div className="flex gap-4">
                    <button className="flex items-center gap-2  hover:text-gray-700">
                      <i className="far fa-heart" />
                      <span>2.5K</span>
                    </button>
                    <button className="flex items-center gap-2  hover:text-gray-700">
                      <i className="far fa-comment" />
                      <span>48</span>
                    </button>
                    <button className="flex items-center gap-2 hover:text-gray-700">
                      <i className="far fa-share-square" />
                      <span>Share</span>
                    </button>
                  </div>
                  <button
                    className={`text-gray-500 hover:text-gray-700 ${
                      bookmarked ? "text-black" : ""
                    }`}
                    onClick={handleBookmarkClick}>
                    <i
                      className={`far ${
                        bookmarked ? "fa-solid fa-bookmark" : "fa-bookmark"
                      }`}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Right Sidebar - Hidden on mobile, shown on lg screens */}
        <div className="col-md-5">
          <div className="hidden lg:block w-full lg:w-80 flex-shrink-0">
            <div className={`${darkMode ? "card-dark" : null } rounded-lg p-6 mb-6`}>
              <div className="flex items-center justify-between mb-6">
                <div className="flex gap-4">
                  <button className="bg-custom !rounded-button px-4 py-2">
                    General
                  </button>
                  <button className="text-gray-500 hover:text-gray-700">
                    Primary
                  </button>
                </div>
                <button className="text-gray-400">
                  <i className="fas fa-cog" />
                </button>
              </div>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img
                      src="https://creatie.ai/ai/api/search-image?query=professional headshot of a business person on white background&width=40&height=40&orientation=squarish&flag=0ad761f2-8e8b-4c6c-aaee-d7561230d64e"
                      className="w-10 h-10 rounded-full"
                      alt="User"
                    />
                    <div className="ml-3">
                      <h4 className="font-semibold">Anthony Lewis</h4>
                      <p className="text-sm text-gray-500">United States</p>
                    </div>
                  </div>
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img
                      src="https://creatie.ai/ai/api/search-image?query=professional headshot of a business person on white background&width=40&height=40&orientation=squarish&flag=57052aba-58dc-403a-8aa4-a040f98f6a2a"
                      className="w-10 h-10 rounded-full"
                      alt="User"
                    />
                    <div className="ml-3">
                      <h4 className="font-semibold">Harvey Smith</h4>
                      <p className="text-sm text-gray-500">Brazil</p>
                    </div>
                  </div>
                  <div className="w-2 h-2 bg-gray-300 rounded-full" />
                </div>
              </div>
              <button className="w-full text-custom font-medium mt-6">
                View All
              </button>
            </div>
            <div className={`${darkMode ? "card-dark" : null } rounded-lg p-6`}>
              <h3 className="font-semibold mb-6">Saved Feeds</h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-yellow-500 rounded-lg flex items-center justify-center text-white">
                    <i className="fas fa-heartbeat" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium mb-1">World Health</h4>
                    <p className="text-sm text-gray-500">
                      Retail investor party continues even as...
                    </p>
                  </div>
                  <button className="text-yellow-500">
                    <i className="fas fa-star" />
                  </button>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center text-white">
                    <i className="fas fa-microchip" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium mb-1">T3 Tech</h4>
                    <p className="text-sm text-gray-500">
                      iPad Air (2020) vs Samsung Galaxy Tab...
                    </p>
                  </div>
                  <button className="text-yellow-500">
                    <i className="fas fa-star" />
                  </button>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center text-white">
                    <i className="fas fa-camera" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium mb-1">Fstoppers</h4>
                    <p className="text-sm text-gray-500">
                      Beyond capital gains tax! Top 50 stock...
                    </p>
                  </div>
                  <button className="text-yellow-500">
                    <i className="fas fa-star" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllFeed;
