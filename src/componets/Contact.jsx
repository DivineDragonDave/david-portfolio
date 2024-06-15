import React from "react";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <section className=" px-4 bg-#1D562D hover:bg-#00AB30 text-white border-t-2 ease-in-out duration-150 cursor-pointer ">
      <Link to="/contact">
        <div className=" container mx-auto md:flex gap-8 py-24 ">
          <div className="flex-col item-center">
            <h2 className=" text-4xl">Have a project in mind?</h2>
            <h1 className=" text-4xl lg:text-5xl xl:text-7xl font-bold">
              Let's get to work.
            </h1>
          </div>
          <div className="text-xl font-bold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-16"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
              />
            </svg>
          </div>
        </div>
      </Link>
    </section>
  );
}

export default Contact;
