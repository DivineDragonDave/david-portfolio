import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import {
  Hero,
  Portfolio,
  Css,
  Git,
  Javascript,
  Html,
  Mongo,
  Node,
  Reacticon,
  Tail,
} from "../../assets";
import Scroller from "../../componets/Scroller";
import Projects from "../Projects/Projects";
import ScrollToTopButton from "../../componets/ScrollToTopButton";

function Home() {
  return (
    <div>
      <section>
        <div className="container md:pt-10 mx-auto gap-8 flex flex-col  md:flex-row-reverse items-center text-center md:text-left">
          <div className="mt-8   flex-1 ">
            <picture className=" flex justify-end  overflow-auto">
              <img
                className="h-auto max-w-[300px] md:max-w-[500px]"
                src={Hero}
                alt="David Ribbfors"
              />
            </picture>
          </div>
          <div className="md:flex-1">
            <h1 className="text-white  text-4xl lg:text-5xl xl:text-6xl font-bold mb-4">
              I am a developer<span className="text-#AB0000">.</span>
            </h1>

            <p className="text-white text-lg max-w-xl mb-8">
              Hello, my name is David. I have recently completed my training as
              a Web Developer. I hope that my portfolio, showcasing the projects
              I have created, demonstrates my skills and potential as a valuable
              addition to your team. I look forward to the possibility of
              working with you.
            </p>
            <div className=" drop-shadow-[10px_8px_0_rgba(0,0,0,1)] mb-4  mx-auto w-[350px] md:w-auto flex container  bg-#1D562D py-2 px-2 rounded-3xl ">
              <div className="grid grid-cols-2 mt-6 text-white text-[11px]  ml-2 md:mr-32  md:text-2xl">
                <p className="flex mx-1 text-center">• React</p>
                <p className="flex mx-1 text-center">• Tailwind</p>
                <p className="flex mx-1 text-center">• CSS</p>
                <p className="flex mx-1 text-center">• JavaScript</p>
                <p className="flex mx-1 text-center">• Git</p>
                <p className="flex mx-1 text-center">• MongoDB</p>
                <p className="flex mx-1 text-center">• HTML</p>
                <p className="flex mx-1 text-center">• Node.js</p>
              </div>
              <div
                className="rounded-full mb-2 flex items-center h-[180px] md:h-[300px] w-[180px] md:w-[300px] relative hover:animate-rotate "
                style={{ backgroundImage: `url(${Portfolio})` }}
              >
                <div className=" flex items-center justify-center w-full h-full ">
                  <img
                    className="h-10 w-10 md:h-16 md:w-16 absolute transition-all duration-500 ease-in-out transform  translate-x-16 md:translate-x-28"
                    src={Css}
                    alt="css icon"
                  />

                  <img
                    className="h-10 w-10 md:h-16 md:w-16 absolute transition-all duration-500 ease-in-out transform   translate-x-12 translate-y-12 md:translate-x-20  md:translate-y-20 "
                    src={Git}
                    alt="git icon"
                  />
                  <img
                    className="h-8 w-8 md:h-12 md:w-12  absolute transition-all duration-500 ease-in-out transform   translate-x-0 translate-y-16  md:translate-x-2 md:translate-y-28 "
                    src={Javascript}
                    alt="javascript icon"
                  />
                  <img
                    className="h-10 w-10 md:h-16 md:w-16 absolute transition-all duration-500 ease-in-out transform  translate-x-[-50px] translate-y-12 md:translate-x-[-80px] md:translate-y-20 "
                    src={Html}
                    alt="html icon"
                  />
                  <img
                    className="h-10 w-10 md:h-16 md:w-16  absolute transition-all duration-500 ease-in-out transform  translate-x-[-60px] translate-y-0 md:translate-x-[-100px] md:translate-y-0 "
                    src={Mongo}
                    alt="mongoDB icon"
                  />
                  <img
                    className="h-12 w-12 md:h-20 md:w-20  absolute transition-all duration-500 ease-in-out transform  translate-x-[-50px] translate-y-[-45px] md:translate-x-[-80px] md:translate-y-[-70px] "
                    src={Node}
                    alt="Node icon"
                  />
                  <img
                    className="h-10 w-10 md:h-16 md:w-16 absolute transition-all duration-500 ease-in-out transform  translate-x-0 translate-y-[-60px] md:translate-x-0 md:translate-y-[-110px]"
                    src={Reacticon}
                    alt="react icon"
                  />
                  <img
                    className="h-10 w-10 md:h-16 md:w-16  absolute transition-all duration-500 ease-in-out transform translate-x-12 translate-y-[-45px] md:translate-x-20 md:translate-y-[-70px] "
                    src={Tail}
                    alt="tailwind icon"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Scroller link="/contact" />
      <section id="work">
        <Projects />
      </section>
      <ScrollToTopButton />
    </div>
  );
}

export default Home;
