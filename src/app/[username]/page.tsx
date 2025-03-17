import Feed from "@/components/Feed";
import Image from "@/components/Image";
import Link from "next/link";

function UserPage() {
  return (
    <div className="">
      <div
        className="flex items-center gap-8 sticky top-0 backdrop-blur-md p-4  z-10  
      bg-[#00000084] opacity"
      >
        <Link href="/">
          <Image
            path="/public/icons/back.svg"
            alt="back"
            width={20}
            height={20}
          />
        </Link>
        <h1 className="font-bold text-lg">REACH</h1>
      </div>
      {/* Info */}
      <div>
        {/* Cover && avatar */}
        <div className="relative w-full">
          <div className="w-full aspect-[3/1]  relative">
            <Image
              alt=""
              path="/public/general/cover.jpg"
              width={600}
              height={200}
              tr={true}
            />
          </div>
          <div
            className="w-1/5 aspect-square 
          rounded-full overflow-hidden border-4 border-black
           bg-gray-300 absolute left-4 -translate-y-1/2"
          >
            <Image
              alt=""
              path="/public/general/avatar.png"
              width={100}
              height={100}
              tr={true}
            />
          </div>
        </div>
        <div className="flex w-full items-center justify-end gap-2 p-2">
          <div
            className="w-9 h-9 flex items-center justify-center rounded-full 
          border-[1px] border-gray-500 cursor-pointer"
          >
            <Image
              alt=""
              path="/public/icons/more.svg"
              width={20}
              height={20}
            />
          </div>
          <div
            className="w-9 h-9 flex items-center justify-center rounded-full 
          border-[1px] border-gray-500 cursor-pointer"
          >
            <Image
              alt=""
              path="/public/icons/explore.svg"
              width={20}
              height={20}
            />
          </div>
          <div
            className="w-9 h-9 flex items-center justify-center rounded-full 
          border-[1px] border-gray-500 cursor-pointer"
          >
            <Image
              alt=""
              path="/public/icons/notification.svg"
              width={20}
              height={20}
            />
          </div>
          <div
            className="w-9 h-9 flex items-center justify-center rounded-full 
          border-[1px] border-gray-500 cursor-pointer"
          >
            <Image
              alt=""
              path="/public/icons/profile.svg"
              width={20}
              height={20}
            />
          </div>
          <button
            className="text-sm font-bold bg-pink-500 rounded-full 
          py-2 px-4"
          >
            Subscribe
          </button>
        </div>
      </div>
      <div className="py-4 px-4 flex flex-col gap-4">
        <div className="flex flex-col ">
          <div className="flex gap-1 items-center ">
            <h1 className="text-lg font-bold ">REACH</h1>
            <Image
              path="public/icons/verify.png"
              width={15}
              height={15}
              alt="verify badge"
            />
          </div>
          <span className="text-textGray text-sm">@re4chz</span>
        </div>
        <div className="flex gap-2 items-center">
          <svg
            fill="gray"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 610.398 610.398"
            xmlSpace="preserve"
            width={20}
            height={20}
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <g>
                <g>
                  <path d="M159.567,0h-15.329c-1.956,0-3.811,0.411-5.608,0.995c-8.979,2.912-15.616,12.498-15.616,23.997v10.552v27.009v14.052 c0,2.611,0.435,5.078,1.066,7.44c2.702,10.146,10.653,17.552,20.158,17.552h15.329c11.724,0,21.224-11.188,21.224-24.992V62.553 V35.544V24.992C180.791,11.188,171.291,0,159.567,0z"></path>
                  <path d="M461.288,0h-15.329c-11.724,0-21.224,11.188-21.224,24.992v10.552v27.009v14.052c0,13.804,9.5,24.992,21.224,24.992 h15.329c11.724,0,21.224-11.188,21.224-24.992V62.553V35.544V24.992C482.507,11.188,473.007,0,461.288,0z"></path>
                  <path d="M539.586,62.553h-37.954v14.052c0,24.327-18.102,44.117-40.349,44.117h-15.329c-22.247,0-40.349-19.79-40.349-44.117 V62.553H199.916v14.052c0,24.327-18.102,44.117-40.349,44.117h-15.329c-22.248,0-40.349-19.79-40.349-44.117V62.553H70.818 c-21.066,0-38.15,16.017-38.15,35.764v476.318c0,19.784,17.083,35.764,38.15,35.764h468.763c21.085,0,38.149-15.984,38.149-35.764 V98.322C577.735,78.575,560.671,62.553,539.586,62.553z M527.757,557.9l-446.502-0.172V173.717h446.502V557.9z"></path>
                  <path d="M353.017,266.258h117.428c10.193,0,18.437-10.179,18.437-22.759s-8.248-22.759-18.437-22.759H353.017 c-10.193,0-18.437,10.179-18.437,22.759C334.58,256.074,342.823,266.258,353.017,266.258z"></path>
                  <path d="M353.017,348.467h117.428c10.193,0,18.437-10.179,18.437-22.759c0-12.579-8.248-22.758-18.437-22.758H353.017 c-10.193,0-18.437,10.179-18.437,22.758C334.58,338.288,342.823,348.467,353.017,348.467z"></path>
                  <path d="M353.017,430.676h117.428c10.193,0,18.437-10.18,18.437-22.759s-8.248-22.759-18.437-22.759H353.017 c-10.193,0-18.437,10.18-18.437,22.759S342.823,430.676,353.017,430.676z"></path>
                  <path d="M353.017,512.89h117.428c10.193,0,18.437-10.18,18.437-22.759c0-12.58-8.248-22.759-18.437-22.759H353.017 c-10.193,0-18.437,10.179-18.437,22.759C334.58,502.71,342.823,512.89,353.017,512.89z"></path>
                  <path d="M145.032,266.258H262.46c10.193,0,18.436-10.179,18.436-22.759s-8.248-22.759-18.436-22.759H145.032 c-10.194,0-18.437,10.179-18.437,22.759C126.596,256.074,134.838,266.258,145.032,266.258z"></path>
                  <path d="M145.032,348.467H262.46c10.193,0,18.436-10.179,18.436-22.759c0-12.579-8.248-22.758-18.436-22.758H145.032 c-10.194,0-18.437,10.179-18.437,22.758C126.596,338.288,134.838,348.467,145.032,348.467z"></path>
                  <path d="M145.032,430.676H262.46c10.193,0,18.436-10.18,18.436-22.759s-8.248-22.759-18.436-22.759H145.032 c-10.194,0-18.437,10.18-18.437,22.759S134.838,430.676,145.032,430.676z"></path>
                  <path d="M145.032,512.89H262.46c10.193,0,18.436-10.18,18.436-22.759c0-12.58-8.248-22.759-18.436-22.759H145.032 c-10.194,0-18.437,10.179-18.437,22.759C126.596,502.71,134.838,512.89,145.032,512.89z"></path>
                </g>
              </g>
            </g>
          </svg>
          <span className="text-textGray text-md">Joined June 2009</span>
        </div>
        <div className="flex gap-4">
          <p className="text-textGray text-sm">
            <span className="text-white">1087</span> Following
          </p>
          <p className="text-textGray text-sm">
            <span className="text-white">219.8M </span>Followers
          </p>
        </div>
      </div>
      <div>

      </div>
      <Feed />
    </div>
  );
}

export default UserPage;
