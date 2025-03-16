import React from "react";
import Image from "./Image";

function Search() {
  return (
    <div
      className="bg-inputGray py-2 px-4 flex items-center justify-start
     rounded-full border-[1px] border-borderGray"
    >
      <Image
        alt="search"
        path="/public/icons/explore.svg"
        width={16}
        height={16}
      />
      <input
        type="text"
        placeholder="Search"
        className="bg-transparent outline-none py-1 px-2 rounded-lg"
      />
    </div>
  );
}

export default Search;
