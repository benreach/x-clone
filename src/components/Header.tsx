"use client";

import { useState } from "react";

function Header() {
  const [activeTab, setActiveTab] = useState("forYou");

  return (
    <div className="flex text-textGray font-bold border-b-[1px] border-borderGray sticky top-0 z-20 bg-black bg-opacity-80 backdrop-blur-sm">
      <button
        onClick={() => setActiveTab("forYou")}
        className={`w-1/2 text-center py-3 relative transition-all hover:bg-borderGray text-white
        `}
      >
        For You
        {activeTab === "forYou" && (
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[3px] w-1/4 px-2 bg-iconBlue rounded-full"></span>
        )}
      </button>

      <button
        onClick={() => setActiveTab("following")}
        className={`w-1/2 text-center py-3 relative transition-all hover:bg-borderGray text-white`}
      >
        Following
        {activeTab === "following" && (
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[3px] w-1/4 px-2 bg-iconBlue rounded-full"></span>
        )}
      </button>
    </div>
  );
}

export default Header;
