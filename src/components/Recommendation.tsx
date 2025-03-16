import React from "react";
import IndividualProfile from "./IndividualProfile";
import Link from "next/link";

function Recommendation() {
  return (
    <div className="flex flex-col gap-4 border-[1px] border-borderGray rounded-xl px-4 py-2">
      <h1 className="text-xl font-bold py-4">Who to follow</h1>
      <div className="flex flex-col gap-4">
        <IndividualProfile />
        <IndividualProfile />
        <IndividualProfile />
      </div>
      <Link href="/" className="text-blue-400 text-start text-md">Show more</Link>
    </div>
  );
}

export default Recommendation;
