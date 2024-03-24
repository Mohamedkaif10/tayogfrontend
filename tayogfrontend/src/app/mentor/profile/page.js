import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import EachProfile from "./EachProfile";

const MentorProfile = () => {
  return (
    <div className="bg-white text-orange-blue">
      <Navbar />
      <EachProfile />
      <Footer />
    </div>
  );
};

export default MentorProfile;
