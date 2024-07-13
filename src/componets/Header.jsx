import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Logo } from "../assets";
import { HashLink } from "react-router-hash-link";
import { HiBars3, HiXMark } from "react-icons/hi2";
import Hamburger from "./Hamburger";

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

function Header() {
  const [toggle, setToggle] = useState(false);
  const location = useLocation();

  const handleNavLinkClick = (path) => {
    if (location.pathname === path) {
      scrollToTop();
    }
    setToggle(false);
  };
  return (
    <header>
      <div className=" hidden fixed top-0 left-0 w-full z-50 md:grid md:grid-cols-4 bg-black text-white">
        <Link
          to="/"
          onClick={() => handleNavLinkClick("/")}
          className="flex align-middle  justify-center items-center col-span-1"
        >
          <img src={Logo} alt="David Ribbfors" className="h-5 w-40" />
        </Link>

        <div className="md:col-start-4  flex gap-2 items-center col-span-1 justify-center text-lg ease-in-out- duration-75">
          <Link className="border-2 px-4 rounded-full" to="/contact">
            Contact
          </Link>
          <div className="text-center border-2 rounded-full">
            <a
              className="flex justify-center items-center w-28 mx-auto"
              href="/David R CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              CV
            </a>
          </div>
        </div>

        <nav className="col-span-2 md:row-start-1 md:col-start-2  md:border-t-0 flex justify-center items-center">
          <ul className="flex gap-6 overflow-auto snap-always p-2 text-lg">
            <li>
              <NavLink to="/" onClick={() => handleNavLinkClick("/")}>
                Home
              </NavLink>
            </li>

            <li>
              <HashLink
                to="/#work"
                onClick={() => handleNavLinkClick("/#work")}
              >
                Projects
              </HashLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
          </ul>
        </nav>
      </div>

      <div className="fixed top-0 z-50 w-full flex justify-between items-center md:hidden bg-black ">
        <Link className="ml-2" to="/" onClick={() => handleNavLinkClick("/")}>
          <img src={Logo} alt="Logotyp" className="h-auto max-w-[80%]" />
        </Link>
        <div className="mr-2">
          {" "}
          {!toggle ? (
            <HiBars3
              onClick={() => setToggle(!toggle)}
              className="text-white text-[36px]"
            />
          ) : (
            <HiXMark
              onClick={() => setToggle(!toggle)}
              className="text-white text-[36px]"
            />
          )}
          {toggle && <Hamburger handleNavLinkClick={handleNavLinkClick} />}
          {toggle && <Hamburger setToggle={setToggle} />}
        </div>
      </div>
    </header>
  );
}

export default Header;
