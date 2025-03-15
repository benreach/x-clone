
import Link from "next/link";
import React from "react";
import Image from "./Image";

const menuList = [
  {
    id: 1,
    name: "Homepage",
    link: "/",
    icon: "home.svg",
  },
  {
    id: 2,
    name: "Explore",
    link: "/explore",
    icon: "explore.svg",
  },
  {
    id: 3,
    name: "Notification",
    link: "/",
    icon: "notification.svg",
  },
  {
    id: 4,
    name: "Messages",
    link: "/",
    icon: "message.svg",
  },
  {
    id: 5,
    name: "Bookmarks",
    link: "/",
    icon: "bookmark.svg",
  },
  {
    id: 6,
    name: "Jobs",
    link: "/",
    icon: "job.svg",
  },
  {
    id: 7,
    name: "Communities",
    link: "/",
    icon: "community.svg",
  },
  {
    id: 8,
    name: "Premium",
    link: "/",
    icon: "logo.svg",
  },
  {
    id: 9,
    name: "Profile",
    link: "/",
    icon: "profile.svg",
  },
  {
    id: 10,
    name: "More",
    link: "/",
    icon: "more.svg",
  },
];

const LeftBar = () => {
  return (
    <div className="h-screen sticky top-0 flex flex-col justify-between pt-2 pb-8">
      {/* logo menu button */}
      <div className=" flex flex-col items-center xxl:items-start">
        <Link href="/" className="p-2 rounded-full hover:bg-[#181818]">
          <Image
            path="/public/icons/logo.svg"
            alt="logo"
            width={26.25}
            height={26.25}
          />
        </Link>
        {/* MENU LIST */}
        <div className="flex flex-col gap-4">
          {menuList.map((menu) => (
            <Link
              key={menu.id}
              href={menu.link}
              className="p-2 rounded-full hover:bg-[#181818] flex items-center gap-4"
            >
              <Image
                path={`/public/icons/${menu.icon}`}
                alt={menu.name}
                width={26.25}
                height={26.25}
              />
              <span className="hidden xxl:inline">{menu.name}</span>
            </Link>
          ))}
        </div>
        {/* button */}
        <Link href="" className="bg-white p-3 rounded-full mt-4 xxl:hidden">
          <Image path="/public/icons/post.svg" alt="tweet" width={24} height={24} />
        </Link>
        <Link href="" className="hidden xxl:block mt-4">
          <button className="bg-[#1da1f2] text-white px-12 py-2 rounded-full font-bold">
            Tweet
          </button>
        </Link>
      </div>
      {/* user */}
      <div className="flex items-center justify-center xxl:justify-between">
        <div className="flex gap-2 items-center justify-center">
          <div className="w-10 h-10 relative overflow-hidden rounded-full">
            <Image path="/public/icons/profile.svg" alt="" width={100} height={100} tr={true}/>
          </div>
          <div className="hidden xxl:flex flex-col items-start">
            <div className="flex gap-1 items-center">
              <h1 className="font-bold text-sm">REACH</h1>
              <Image path="/public/icons/verify.png" alt="VERIFY BADGE" width={15} height={15} className="object-contain"/>
            </div>
            <p className="text-gray-500 text-sm">@re4chz</p>
          </div>
        </div>
        <div className="hidden xxl:block cursor-pointer font-bold">
          ...
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
