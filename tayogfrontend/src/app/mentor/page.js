import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import HeroBanner from "./HeroBanner";
import InfiniteScroll from "./InfiniteScroll";

const MentorHome = () => {
  return (
    <div className="bg-white">
      <Navbar />
      <HeroBanner />
      <InfiniteScroll />
      <Footer />
    </div>
  );
};

export default MentorHome;
