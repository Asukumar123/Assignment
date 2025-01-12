import React from 'react';

const Header = () => {
  return (
    <header className="hero position-relative mb-4 header">
      <img
        alt="Banner image showing a group of computer engineers working on a project"
        className="w-100 img-fluid hero-image"
        src="../Rectangle 2-1.png"
      />
      <div className="hero-content position-absolute bottom-0 text-white p-5 ms-5">
        <h1>Computer Engineering</h1>
        <p>142,765 Computer Engineers follow this</p>
      </div>
    </header>
  );
};

export default Header;