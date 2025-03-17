import Comments from "@/components/Comments";
import Image from "@/components/Image";
import Post from "@/components/Post";
import Link from "next/link";

function StatusPage() {
  return (
    <div>
      <div className="flex items-center justify-between px-4 py-2">
        <div className="flex items-center gap-8">
          <Link href="/">
            <Image path="/public/icons/back.svg" width={24} height={24} alt="" />
          </Link>
          <h1 className="text-lg font-bold ">Post</h1>
        </div>
        <div className="flex gap-2 items-center">
          <h1 className="text-md rounded-full border-[1px] border-borderGray px-4 py-1">Reply</h1>
          <svg
            viewBox="0 0 24 24"
            height={24}
            width={24}
            fill="white"
            aria-hidden="true"
            className="r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-lrvibr r-m6rgpd r-z80fyv r-19wmn03"
            style={{ color: "rgb(239, 243, 244)" }}
          >
            <g>
              <path d="M14 6V3h2v8h-2V8H3V6h11zm7 2h-3.5V6H21v2zM8 16v-3h2v8H8v-3H3v-2h5zm13 2h-9.5v-2H21v2z"></path>
            </g>
          </svg>
        </div>
      </div>
      <Post type="status"/>
      <Comments />
    </div>
  );
}

export default StatusPage;
