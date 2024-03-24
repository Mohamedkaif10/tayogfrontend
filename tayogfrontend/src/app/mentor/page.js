import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import HeroBanner from "./HeroBanner";
import InfiniteScroll from "./InfiniteScroll";
import Disciplines from "./Disciplines";
import TopInstitutes from "./TopInstitutes";
import Bannering from "./Bannering";
import Empowering from "./Empowering";
import Evidence from "./Evidence";
import Quotation from "./Quotation";

const MentorHome = () => {
  return (
    <div className="bg-white">
      <Navbar />
      <HeroBanner />
      <InfiniteScroll />
      <Disciplines />
      <TopInstitutes />
      <Bannering />
      <Empowering />
      <Evidence />
      <Quotation />
      <Footer />
    </div>
  );
};

export default MentorHome;
