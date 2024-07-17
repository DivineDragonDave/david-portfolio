import React from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

function Scroller({ link }) {
  return (
    <section>
      <Link to={link}>
        <Marquee
          pauseOnHover
          gradient={false}
          className="bg-#1D562D text-white border-t-2 border-black py-2 font-bold text-2xl md:text-4xl "
        >
          💪Let's get to work! 🤔Have a project in mind? ✍️Contact me! 💪Let's
          get to work! 🤔Have a project in mind? ✍️Contact me! 💪Let's get to
          work! 🤔Have a project in mind? ✍️Contact me!
        </Marquee>
      </Link>
    </section>
  );
}

export default Scroller;
