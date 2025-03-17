

import Feed from "@/components/Feed";
import Header from "@/components/Header";
import Share from "@/components/Share";

const Homepage = () => {
  return (
    <div className="py-2">
      <Header />
      <Share />
      <Feed />
    </div>
  );
};

export default Homepage;
