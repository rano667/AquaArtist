import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../image/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

const Header = () => {
  return (
    <nav className="header">
      {/* logo on the left */}
      <Link to="/">
        <img className="header__logo" src={logo} alt="The aqua artist logo" />
      </Link>
      {/* search box */}
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      {/* 2 links */}
      <div className="header__nav">
        {/* 1st Link */}
        <Link to="/login" className="header__link">
          <div className="header__option">
            <span className="header__optionFirstLine">hello,</span>
            <span className="header__optionSecondLine">Account</span>
          </div>
        </Link>
        {/* 2st Link */}
        <Link to="/order" className="header__link">
          <div className="header__option">
            <span className="header__optionFirstLine">your</span>
            <span className="header__optionSecondLine">Orders</span>
          </div>
        </Link>
        {/* Basket icon */}
        <Link to="/order" className="header__link">
          <div className="header__optionBasket">
            {/* shoping basket icon */}
            <ShoppingBasketIcon />
            {/* number of items in the basket */}
            <span className="header__optionSecondLine header__basketCount">0</span>
          </div>
        </Link>
      </div>
      

      {/* <ul className="header__links">
        <li>
        <Link to="/" className="header__logo">AquA</Link>
        </li>
        <li>
          <Link to="/">AquaArtist</Link>
        </li>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul> */}
    </nav>
  );
};

export default Header;
