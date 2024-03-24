import Navbar from "../../../components/Navbar";
import React from "react";
import SearchBanner from "./SearchBanner";
import Footer from "../../../components/Footer";

const page = () => {
  return (
    <div className="bg-white">
      <Navbar />
      <SearchBanner />
      <Footer />
    </div>
  );
};

export default page;
