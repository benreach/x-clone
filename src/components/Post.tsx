import React from "react";
import Image from "./Image";
import PostInfo from "./PostInfo";
import PostInteractions from "./PostInteractions";
import { imagekit } from "@/utils";
import Video from "./Video";
import PostDate from "./PostDate";

interface FileDetailsResponse {
  width: number;
  height: number;
  filePath: string;
  url: string;
  fileType: string;
  customMetadata?: { sensitive: boolean };
}

interface PostProps {
  type?: "status" | "comment";
}

async function Post({ type }: PostProps) {
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

  const fileDetails = await getFileDetails("67d8596c432c4764162f1f7c");
  console.log(fileDetails);

  return (
    <div className="p-4 border-y-[1px] border-borderGray">
      <div className="flex items-center gap-2 text-sm text-textGray mb-2 font-bold">
        icon
        <span>{`REACH&apos;s repost`}</span> {/* Replaced single quote */}
      </div>

      <div className={`flex gap-4 ${type === "status" ? "flex-col" : ""}`}>

        <div
          className={` ${
            type === "status" ? "hidden" : ""
          } relative w-10 h-10 rounded-full overflow-hidden `}
        >
          <Image
            path="/public/icons/profile.svg"
            alt=""
            width={100}
            height={100}
            tr={true}
          />
        </div>

        <div className={`flex-1 flex flex-col gap-4`}>
          <div className=" flex items-center justify-between gap-1">
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center gap-1">
                <h1 className="text-sm  font-bold">REACH</h1>
                <div
                  className={`relative w-4 h-4 overflow-hidden rounded-full`}
                >
                  <Image
                    path="/public/icons/verify.png"
                    alt="verified badge" 
                    width={100}
                    height={100}
                    tr={true}
                  />
                </div>
              </div>
              <span className="text-md text-textGray">@re4chz </span>
              <PostDate createdAt="2025-02-17T14:30:00Z" />
            </div>
            <PostInfo />
          </div>
          {/* text && media  */}
          <p className="">{`
            Sinn Sisamouth was a legendary Cambodian singer-songwriter, often called the "King of Khmer Music."
            His golden voice and fusion of traditional Khmer and Western styles shaped Cambodia&apos;s 1950s-70s music scene. `}
          </p>
          <p>
            He disappeared during the Khmer Rouge era, but his songs remain beloved across generations.
            His legacy lives on, influencing Cambodian artists and preserving the soul of Khmer music. 🎶
          </p>
          {fileDetails && fileDetails.fileType === "image" ? (
            <Image
              path={fileDetails.filePath}
              alt=""
              width={fileDetails.width}
              height={fileDetails.height}
              className={`rounded-xl ${fileDetails.customMetadata?.sensitive ? "blur-lg" : ""}`}
            />
          ) : (
            <Video
              path={fileDetails.filePath}
              className={fileDetails.customMetadata?.sensitive ? "blur-lg" : ""}
            />
          )}
          <PostInteractions />
        </div>
      </div>
    </div>
  );
}

export default Post;
