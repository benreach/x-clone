import React from "react";

function Subscribe() {
  return (
    <div className="flex flex-col gap-2 py-2 px-4 border-[1px] border-borderGray rounded-xl">
      <h1 className="text-xl text-white font-bold">Subscribe to Premeium</h1>
      <p className="text-sm ">Subscribe to unlock new features and if eligible, receive a share of revenue.</p>
      <button className="w-[120px] text-md bg-blue-500 font-bold text-center py-2 px-4 rounded-full">Subscribe</button>
    </div>
  );
}

export default Subscribe;
