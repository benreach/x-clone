import React from "react";
import Image from "./Image";
import PostInfo from "./PostInfo";
import PostInteractions from "./PostInteractions";
import { resolve } from "path";
import { rejects } from "assert";
import { imagekit } from "@/utils";
import Video from "./Video";

interface FileDetailsResponse {
  width: number;
  height: number;
  filePath: string;
  url: string;
  fileType: string;
  customMetadata?: { sensitive: boolean };
}
async function Post() {
  const getFileDetails = async (
    fileId: string
  ): Promise<FileDetailsResponse> => {
    return new Promise((resolve, rejects) => {
      imagekit.getFileDetails(fileId, function (error, result) {
        if (error) rejects(error);
        else resolve(result as FileDetailsResponse);
      });
    });
  };

  const fileDetails = await getFileDetails("67d67732432c476416ac49f1");
  console.log(fileDetails);

  return (
    <div className="p-4 border-y-[1px] border-borderGray">
      {/* post  type */}
      <div className="flex items-center gap-2 text-sm text-textGray mb-2 font-bold">
        icon
        <span>REACH's repost</span>
      </div>
      {/* Post content */}
      <div className="flex gap-4">
        {/* avatar */}
        <div className="relative w-10 h-10 rounded-full overflow-hidden">
          <Image
            path="/public/icons/profile.svg"
            alt=""
            width={100}
            height={100}
            tr={true}
          />
        </div>
        {/* content */}
        <div className="flex-1 flex flex-col gap-2">
          <div className=" flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center gap-2">
                <h1 className="text-sm  font-bold">REACH</h1>
                <div className="relative w-4 h-4 overflow-hidden rounded-full">
                  <Image
                    path="/public/icons/verify.png"
                    alt="veryfied badge"
                    width={100}
                    height={100}
                    tr={true}
                  />
                </div>
              </div>
              <span className="text-md text-textGray">@re4chz</span>
              <span className="text-md text-textGray"> • 1 day ago</span>
            </div>
            <PostInfo />
          </div>
          {/* text && media  */}
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit.
          </p>
          <br />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit.
          </p>
          {fileDetails && fileDetails.fileType === "image" ? (
            <Image
              path={fileDetails.filePath}
              alt=""
              width={fileDetails.width}
              height={fileDetails.height}
              className={fileDetails.customMetadata?.sensitive? "blur-lg":""}
            />
          ) : (
            <Video
              path={fileDetails.filePath}
              className={fileDetails.customMetadata?.sensitive ? "blur-lg" : ""}
            />
          )}
          {/* <Image
            path="/public/general/post.jpeg"
            alt=""
            width={600}
            height={600}
            className="rounded-2xl ring-1 ring-borderGray"
          /> */}
          <PostInteractions />
        </div>
      </div>
    </div>
  );
}

export default Post;
