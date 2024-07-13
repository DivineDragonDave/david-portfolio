import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function Hamburger({ setToggle }) {
  const handleNavLinkClick = (path) => {
    console.log("Closing menu due to link navigation to", path);
    setToggle(false);
    // Alltid skrolla till toppen, oberoende av vilken länk som klickas
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className=" text-gray-300 absolute left-0 min-h-screen backdrop-blur-xl w-full text-[44px] py-20">
      <div className="flex flex-col justify-center text-center ">
        <Link
          to="/contact"
          onClick={() => handleNavLinkClick("/contact")}
          className=" mb-16 text-center rounded-full border-2 border-red-600 w-48 mx-auto  "
        >
          Contact
        </Link>
        <Link to="/" onClick={() => handleNavLinkClick("/")}>
          Home
        </Link>

        <HashLink to="/#work" onClick={() => handleNavLinkClick("/#work")}>
          Projects
        </HashLink>

        <Link to="/about" onClick={() => handleNavLinkClick("/about")}>
          About
        </Link>
      </div>
      <div className="flex mt-10 flex-col justify-center">
        <div className="text-center rounded-full">
          <a
            className="flex justify-center items-center w-24 mx-auto"
            href="/David R CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => handleNavLinkClick("cv")}
          >
            CV
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hamburger;
