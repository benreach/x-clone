import React from "react";
import Search from "./Search";
import PopularTags from "./PopularTags";
import Recommendation from "./Recommendation";
import Link from "next/link";
import Subscribe from "./Subscribe";

function RightBar() {
  return (
    <div className="pt-4 flex flex-col gap-4 sticky top-0 h-max">
      <Search />
      <Subscribe />
      <Recommendation />
      <PopularTags />

      <div className="text-textGray text-sm flex gap-x-4 flex-wrap">
        <Link href="/">Terms of Service</Link>
        <Link href="/">Privacy Policy</Link>
        <Link href="/">Cookie Policy</Link>
        <Link href="/">Accessibilty</Link>
        <Link href="/">Ads Info</Link>
        <span>© 2025 The X</span>
      </div>
    </div>
  );
}

export default RightBar;
