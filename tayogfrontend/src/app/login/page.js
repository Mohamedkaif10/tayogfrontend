import Footer from "@/components/Footer";
import Login from "@/components/Login";
import Navbar from "@/components/Navbar";
import React from "react";

const LoginPage = () => {
  return (
    <div className="bg-white">
      <Navbar />
      <Login />
      <Footer />
    </div>
  );
};

export default LoginPage;
