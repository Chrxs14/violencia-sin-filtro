import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { nav } from "../../data.js";

function DemoHeader() {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const scrollMe = () => {
      window.scrollY > 50 ? setIsActive(true) : setIsActive(false);
    };
    window.addEventListener("scroll", scrollMe);
  });

  return (
    <header
      className={`border-b border-black sticky top-0 z-50 ${
        isActive ? "bg-white" : "bg-banner"
      } transition-all duration-500`}
    >
      <div className="size h-[70px] flex items-center justify-between">
        <Link>
          <img className="h-[3rem] " src="src/assets/logo.jpeg" alt="" />
        </Link>
        <div className="flex items-center gap-5">
          <div className="hidden text-sm sm:flex items-center gap-5">
            {nav.map((link, i) => (
              <Link to={link.path}> {link.title} </Link>
            ))}
          </div>
          <div className="relative">
            <button className="hidder text-sm sm:flex items-center gap-5">
              Sign In
            </button>
          </div>
          <button
            className={`text-white rounded-full px-3 p-2 text-sm font-medium
            ${isActive ? "bg-green-700" : "bg-black"}`}
          >
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
}

export default DemoHeader;
