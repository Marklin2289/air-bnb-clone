import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Avatar } from "@material-ui/core";
const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__icon"
          src="https://i.pinimg.com/originals/56/00/dd/5600ddbbc680a4a100e62077d90763eb.jpg"
          alt="AirBnb logo"
        />
      </Link>
      <div className="header__center">
        <input type="text" />
        <SearchIcon />
      </div>
      <div className="header__right">
        <p>Become a Host</p>
        <LanguageIcon />
        <ExpandMoreIcon />
        <Avatar />
      </div>
    </div>
  );
};

export default Header;
