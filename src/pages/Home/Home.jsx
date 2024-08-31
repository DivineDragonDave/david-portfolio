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
      <section className="md:h-[calc(100vh-100px)] flex justify-center items-center">
        <div className="container mx-auto gap-16 flex flex-col md:flex-row-reverse items-center text-center md:text-left">
          <div className="flex-1">
            <picture className="flex justify-end w-full">
              <img
                className="w-full md:max-w-none md:w-[50%] lg:w-[95%] h-auto"
                src={Hero}
                alt="David Ribbfors"
              />
            </picture>
          </div>
          <div className="md:flex-1">
            <h1 className="text-white text-4xl lg:text-8xl xl:text-10xl font-bold mb-6">
              I am a web developer<span className="text-#AB0000">.</span>
            </h1>

            <p className="text-white text-2xl max-w-2xl mb-16">
              Hello, my name is David. I have recently completed my training as
              a Web Developer. I hope that my portfolio, showcasing the projects
              I have created, demonstrates my skills and potential as a valuable
              addition to your team. I look forward to the possibility of
              working with you.
            </p>
            <div className="drop-shadow-[10px_8px_0_rgba(0,0,0,1)] mb-4 mx-auto w-[350px] md:w-auto flex container bg-#1D562D py-2 px-2 rounded-3xl">
              <div className="grid grid-cols-2 mt-6 text-white text-[15px] ml-1 md:mr-32 md:text-2xl">
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
                className="rounded-full mb-2 flex items-center h-[150px] md:h-[300px] w-[150px] md:w-[300px] relative hover:animate-rotate"
                style={{ backgroundImage: `url(${Portfolio})` }}
              >
                <div className="flex items-center justify-center w-full h-full">
                  <img
                    className="h-9 w-9 md:h-16 md:w-16 absolute transition-all duration-500 ease-in-out transform translate-x-14 md:translate-x-28"
                    src={Css}
                    alt="css icon"
                  />

                  <img
                    className="h-9 w-9 md:h-16 md:w-16 absolute transition-all duration-500 ease-in-out transform translate-x-11 translate-y-11 md:translate-x-20 md:translate-y-20"
                    src={Git}
                    alt="git icon"
                  />
                  <img
                    className="h-7 w-7 md:h-12 md:w-12 absolute transition-all duration-500 ease-in-out transform translate-x-0 translate-y-14 md:translate-x-2 md:translate-y-28"
                    src={Javascript}
                    alt="javascript icon"
                  />
                  <img
                    className="h-8 w-8 md:h-16 md:w-16 absolute transition-all duration-500 ease-in-out transform translate-x-[-46px] translate-y-10 md:translate-x-[-80px] md:translate-y-20"
                    src={Html}
                    alt="html icon"
                  />
                  <img
                    className="h-9 w-9 md:h-16 md:w-16 absolute transition-all duration-500 ease-in-out transform translate-x-[-58px] translate-y-0 md:translate-x-[-100px] md:translate-y-0"
                    src={Mongo}
                    alt="mongoDB icon"
                  />
                  <img
                    className="h-11 w-11 md:h-20 md:w-20 absolute transition-all duration-500 ease-in-out transform translate-x-[-46px] translate-y-[-42px] md:translate-x-[-80px] md:translate-y-[-70px]"
                    src={Node}
                    alt="Node icon"
                  />
                  <img
                    className="h-9 w-9 md:h-16 md:w-16 absolute transition-all duration-500 ease-in-out transform translate-x-0 translate-y-[-56px] md:translate-x-0 md:translate-y-[-110px]"
                    src={Reacticon}
                    alt="react icon"
                  />
                  <img
                    className="h-9 w-9 md:h-16 md:w-16 absolute transition-all duration-500 ease-in-out transform translate-x-11 translate-y-[-40px] md:translate-x-20 md:translate-y-[-70px]"
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
