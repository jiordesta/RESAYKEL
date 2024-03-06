import React from "react";

export default function Burger() {
  return (
    <div className="cursor-pointer hover:underline flex md:hidden">
      <div
        className="burger-menu"
        onClick={() => {
          document.querySelector(".burger-menu").classList.toggle("active");
          document.querySelector(".nav-menu").classList.toggle("active");
        }}
      >
        <div className="bar" />
        <div className="bar" />
        <div className="bar" />
      </div>
    </div>
  );
}
