import Link from "next/link";
import React from "react";
import Image from "./Image";

function PopularTags() {
  return (
    <div className="flex flex-col gap-4 border-[1px] border-borderGray rounded-xl px-4 py-2 cursor-pointer">
      <h1 className="font-bold text-xl ">What's happening?</h1>
      <div className="flex flex-col">
        <div className="flex justify-between items-center">
          <span className="text-textGray  text-sm">Music · Trending</span>
          <Image
            path="/public/icons/infoMore.svg"
            alt=""
            width={16}
            height={16}
          />
        </div>
        <span className="font-bold text-white">#Benjamin</span>
        <span className="text-textGray text-sm">13K posts</span>
      </div>
      <div className="flex flex-col">
        <div className="flex justify-between items-center">
          <span className="text-textGray  text-sm">Music · Trending</span>
          <Image
            path="/public/icons/infoMore.svg"
            alt=""
            width={16}
            height={16}
          />
        </div>
        <span className="font-bold text-white">#Nancy</span>
        <span className="text-textGray text-sm">13K posts</span>
      </div>
      <div className="flex flex-col">
        <div className="flex justify-between items-center">
          <span className="text-textGray  text-sm">Music · Trending</span>
          <Image
            path="/public/icons/infoMore.svg"
            alt=""
            width={16}
            height={16}
          />
        </div>
        <span className="font-bold text-white">#KeremBürsin</span>
        <span className="text-textGray text-sm">13K posts</span>
      </div>
      <div className="flex flex-col">
        <div className="flex justify-between items-center">
          <span className="text-textGray  text-sm">Music · Trending</span>
          <Image
            path="/public/icons/infoMore.svg"
            alt=""
            width={16}
            height={16}
          />
        </div>
        <span className="font-bold text-white">#Cambodia</span>
        <span className="text-textGray text-sm">100M posts</span>
      </div>
      <div className="flex flex-col">
        <div className="flex justify-between items-center">
          <span className="text-textGray  text-sm">Music · Trending</span>
          <Image
            path="/public/icons/infoMore.svg"
            alt=""
            width={16}
            height={16}
          />
        </div>
        <span className="font-bold text-white">#AngkorWat</span>
        <span className="text-textGray text-sm">13K posts</span>
      </div>
      <Link href="/" className="text-blue-400">
        Show More
      </Link>
    </div>
  );
}

export default PopularTags;
