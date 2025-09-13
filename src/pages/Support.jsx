import React from "react";
import { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Construction from "../components/Construction";
import { Link } from "react-router-dom"; 


const Support = () => {

//   useEffect(() => {
//     // Initialize WOW.js for animations
//     if (window.WOW) {
//       new window.WOW().init();
//     }
//   }, []);

  return (
    <>
      <Header />
      <div className="container">
              <Construction />
      </div>
      <Footer />
    </>
  );
};

export default Support;
