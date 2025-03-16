import React from "react";
import Image from "./Image";

function IndividualProfile({}) {
  return (
    <div className="flex flex-row items-center justify-between">
      <div className="flex items-center">
        <Image
          path="/public/icons/profile.svg"
          alt="avatar"
          width={50}
          height={50}
        />
        <div className="flex flex-col">
          <div className="flex  items-center gap-1">
            <h1 className="text-sm font-bold">REACH</h1>
            <Image
              path="/public/icons/verify.png"
              alt="verify badge"
              width={15}
              height={15}
            />
          </div>
          <span className="text-sm">@re4chz</span>
        </div>
      </div>
      <button className="bg-white text-sm text-black font-bold  py-1 px-4 rounded-full">
        Follow
      </button>
    </div>
  );
}

export default IndividualProfile;
