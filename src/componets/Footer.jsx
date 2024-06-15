import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Logo } from "../assets";

const activeClassName =
  "relative before:content-['↓'] before:text-4xl before:-top-9 before:left-1/2 before:-translate-x-1/2 before:absolute before:text-amber-400";

function Footer() {
  return (
    <footer className=" w-full z-50 grid grid-cols-2 md:grid-cols-4 border-white border-2 bg-black text-white">
      <Link
        to="/"
        className="flex align-middle border-white border-r-2 justify-center items-center col-span-1 "
      >
        <img src={Logo} alt="David Ribbfors" className="h-5 w-40 " />
      </Link>

      <Link
        to="/contact"
        className="md:col-start-4 border-white md:border-1-2 flex gap-2 items-center col-span-1 justify-center text-lg bg-#1D562D hover:bg-#00AB30 ease-in-out- duration-75 border-l-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
          />
        </svg>
        Let's talk
      </Link>

      <div className="col-span-2 md:row-start-1 md:col-start-2 border-t-2 border-white md:border-t-0 flex justify-center items-center p-4 text-center">
        &copy; 2024 David Ribbfors • Built with ReactJs • Hosted on GitHub
      </div>
    </footer>
  );
}

export default Footer;
