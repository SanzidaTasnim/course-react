import React from 'react';
import logo from './../../logo.png';
import './Header.css';

const Header = () => {
   return (
      <div>
         <div className="header-logo">
            <img src={logo} alt="logo" />
         </div>
         <nav className="header-nav">
            <a href="/courses">Courses</a>
            <a href="/WhyTraining">Why Training Center</a>
            <a href="/studentSuccess">Student Success</a>
            <a href="/signIn">Sign In</a>
            <button>Get Started</button>
         </nav>
      </div>
   );
};

export default Header;