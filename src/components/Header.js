import React from "react";
import "./Header.css";

const Heading = () => {
  return (
    <div className="header">
      <h1 class="head">Frontend Mentor Showcase</h1>
      <p>
        Solutions by{" "}
        <a
          className="git"
          href="https://github.com/tintindas"
          rel="noopener nofollow noreferrer"
          target="_blank"
        >
          tintindas
        </a>
      </p>
    </div>
  );
};

export default Heading;
