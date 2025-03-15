import Feed from "@/components/Feed";
import Share from "@/components/Share";
import Link from "next/link";

const Homepage = () => {
  return (
    <div className="">
      <div className="flex justify-around text-textGray font-bold border-b-[1px] border-borderGray ">
        <Link
          href="/"
          className="pb-3 flex items-center border-b-4 border-iconBlue"
        >
          For You
        </Link>
        <Link href="/" className="hidden xsm:block pb-3 flex items-center">
          Following
        </Link>
        <Link href="/" className="hidden lg:block pb-3 flex items-center">
          ReactJs
        </Link>
        <Link href="/" className="hidden lg:block pb-3 flex items-center">
          MongoDb
        </Link>
        <Link href="/" className=" hidden lg:block pb-3 flex items-center">
          CSS
        </Link>
      </div>
      <Share />
      <Feed />
    </div>
  );
};

export default Homepage;
