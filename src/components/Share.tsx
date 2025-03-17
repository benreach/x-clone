"use client";
import React, { useState } from "react";
import Image from "./Image";
import NextImage from "next/image";
import { shareAction } from "@/actions";
import ImageEditor from "./ImageEditor";
import Link from "next/link";

function Share() {
  const [media, setMedia] = useState<File | null>(null);
  const [isEditor, setIsEditor] = useState(false);
  const [settings, setSettings] = useState<{
    type: "original" | "wide" | "square";
    sensitive: boolean;
  }>({
    type: "original",
    sensitive: false,
  });

  interface MediaChangeEvent extends React.ChangeEvent<HTMLInputElement> {
    target: HTMLInputElement & { files: FileList };
  }

  const handleMediaChange = (e: MediaChangeEvent) => {
    const file = e.target.files[0];
    if (file && e.target.files) {
      setMedia(file);
    }
  };

  const previewURl = media ? URL.createObjectURL(media) : null;

  console.log(media);

  return (
    <form
      className="p-4 flex gap-4"
      action={(formData) => shareAction(formData, settings)}
    >
      {/* avatars */}
      <div className="relative w-10 h-10 rounded-full overflow-hidden">
        <Link href="/re4chz">
          <Image
            alt="avatar"
            path="/public/general/avatar.png"
            width={100}
            height={100}
            tr={true}
          />
        </Link>
      </div>
      <div className="flex-1 flex flex-col gap-4">
        <input
          type="text"
          placeholder="What's happening?"
          className="bg-transparent outline-none text-inputGray text-xl"
        />
        <div className="">
          <div className="flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 100"
              width="20"
              height="20"
            >
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="white"
                stroke="black"
                strokeWidth="2"
              />

              <circle cx="35" cy="35" r="6" fill="#228B22" />
              <circle cx="65" cy="30" r="5" fill="#228B22" />
              <circle cx="45" cy="55" r="7" fill="#228B22" />
              <circle cx="55" cy="65" r="5" fill="#228B22" />

              <line
                x1="50"
                y1="5"
                x2="50"
                y2="95"
                stroke="black"
                strokeWidth="1"
              />
              <line
                x1="5"
                y1="50"
                x2="95"
                y2="50"
                stroke="black"
                strokeWidth="1"
              />
            </svg>

            <span className="text-sm">Everyone can reply</span>
          </div>
          <div className="flex  items-center justify-between flex-wrap gap-4">
            <div className="flex gap-4 flex-wrap">
              <input
                type="file"
                name="file"
                onChange={handleMediaChange}
                hidden
                id="file"
                accept="image/*, video/*"
              />
              {media?.type.startsWith("image") && previewURl && (
                <div className="relative rounded-xl overflow-hidden">
                  <NextImage
                    src={previewURl}
                    width={600}
                    height={600}
                    alt="preview"
                    className={`w-full ${
                      settings.type === "original"
                        ? "h-full object-contain"
                        : settings.type === "square"
                        ? "aspect-square object-cover"
                        : "aspect-video object-cover"
                    }`}
                  />
                  <div
                    className="absolute top-2 left-2 cursor-pointer 
                  text-white bg-gray-500 px-4 py-1 rounded-full text-sm 
                  font-bold"
                    onClick={() => setIsEditor(true)}
                  >
                    Edit
                  </div>
                  <div
                    className="absolute top-2 right-2 bg-black bg-opacity-50 text-white 
                  h-8 w-8 flex items-center justify-center rounded-full text-sm cursor-pointer font-bold"
                    onClick={() => setMedia(null)}
                  >
                    X
                  </div>
                </div>
              )}
              {media?.type.includes("video") && previewURl && (
                <div className="relative">
                  <video src={previewURl} controls />
                  <div
                    className="absolute top-2 right-2 bg-black bg-opacity-50 text-white 
                  h-8 w-8 flex items-center justify-center rounded-full text-sm cursor-pointer font-bold"
                    onClick={() => setMedia(null)}
                  >
                    X
                  </div>
                </div>
              )}
              {isEditor && previewURl && (
                <ImageEditor
                  onClose={() => setIsEditor(false)}
                  previewUrl={previewURl}
                  settings={settings}
                  setSettings={setSettings}
                />
              )}
              <label htmlFor="file">
                <Image
                  alt="avatar"
                  path="/public/icons/image.svg"
                  width={20}
                  height={20}
                  className="cursor-pointer"
                />
              </label>
              <Image
                alt="avatar"
                path="/public/icons/gif.svg"
                width={20}
                height={20}
                className="cursor-pointer"
              />
              <Image
                alt="avatar"
                path="/public/icons/poll.svg"
                width={20}
                height={20}
                className="cursor-pointer"
              />
              <Image
                alt="avatar"
                path="/public/icons/emoji.svg"
                width={20}
                height={20}
                className="cursor-pointer"
              />
              <Image
                alt="avatar"
                path="/public/icons/schedule.svg"
                width={20}
                height={20}
                className="cursor-pointer"
              />
              <Image
                alt="avatar"
                path="/public/icons/location.svg"
                width={20}
                height={20}
                className="cursor-pointer"
              />
            </div>
            <button className="bg-textGrayLight text-black px-4 p-2 rounded-full ">
              Post
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Share;
