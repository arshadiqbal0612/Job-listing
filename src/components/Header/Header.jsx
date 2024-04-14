


import React from "react";
import { NavLink } from "react-router-dom";
import "../Header/HeaderStyle.css";

const Header = () => {
  return (
    <div className="topnav">
      <div className="circle-container">
        <NavLink exact to="/" activeClassName="active" className="circle-link">
          Home
        </NavLink>
        <NavLink to="/jobs" activeClassName="active" className="circle-link">
          Jobs
        </NavLink>
        <NavLink to="/about" activeClassName="active" className="circle-link">
          About
        </NavLink>
      
      </div>
      <div className="company_logo">
        <h2>Find Opportunities</h2>
      </div>
      <div className="menu">
        {/* <NavLink to="/notifications" activeClassName="active">
          Notifications
        </NavLink> */}
      </div>
      <div className="profileStyle">
        <h1>A</h1>
      </div>
    </div>
  );
};

export default React.memo(Header);
