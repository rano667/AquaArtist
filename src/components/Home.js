import React from "react";
import Carosel from "./Carosel";
import Product from "./Product";
import Category from "./Category";
import Footer from "./Footer";
import "./Home.css";

const Home = () => {
  return (
    <div className="home mx-auto bg-gray-100">
      <div className="home__carosel">
        <Carosel />
      </div>

      <Category />
      <Product />
      <Footer />
    </div>
  );
};

export default Home;
