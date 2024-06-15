import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
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
import { portfolioData } from "../../data";
import ScrollToTopButton from "../../componets/ScrollToTopButton";
import Contact from "../../componets/Contact";

function Home() {
  return (
    <div className="border-black border-x-2">
      <section className="py-10 lg:py-22 ">
        <div className="container mx-auto gap-8 px-4 flex flex-col md:flex-row items-center">
          <div className=" mt-16 md:flex-1 md:order-2">
            <picture className="flex drop-shadow-[10px_-10px_0_rgba(107,27,27,42)] border-black rounded-tl-[350px] overflow-auto">
              <img
                className="max-w-full h-auto max-h-[800px] sm:max-w-[350px] md:max-w-[500px]"
                src={Hero}
                alt="David Ribbfors"
              />
            </picture>
          </div>
          <div className="md:flex-1">
            <h2 className=" text-white text-lg md:text-xl font-bold uppercase">
              hi 👋 i'm David{" "}
            </h2>

            <h1 className=" text-white text-4xl lg:text-5xl xl:text-6xl font-bold mb-4">
              Devoloper<span className="text-#AB0000">.</span>
            </h1>

            <p className=" text-white text-lg max-w-xl mb-6">
              Hello, my name is David. I have recently completed my training as
              a Web Developer. I hope that my portfolio, showcasing the projects
              I have created, demonstrates my skills and potential as a valuable
              addition to your team. I look forward to the possibility of
              working with you.
            </p>

            <div className="flex items-baseline gap-4 ">
              <HashLink
                className="px-6 py-4 rounded-md bg-#AB0000 hover:bg-#6B1B1B text-white"
                to="#work"
              >
                Projects
              </HashLink>

              <Link
                className=" PX-6 py-4 rounderd-md text-white flex gap-2  "
                to="/contact"
              >
                Let's talk
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
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Scroller
        text={
          "✨ Let's get to work! ✨ Have a project in mind? ✨ Contac me!✨ Let's get to work! ✨ Have a project in mind? ✨ Contact me!✨ Let's get to work! ✨ Have a project in mind? ✨ Contac me!"
        }
        link="/contact"
      />

      <section
        id="work"
        className="relative px-4 pb-12 border-t-2 border-black "
      >
        <div
          className="absolute inset-0 bg-fixed brightness-50 saturate-150"
          style={{ backgroundImage: `url(${Portfolio})` }}
        ></div>

        <div className="relative container mx-auto">
          <div className="text-white text-center py-12">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-4">
              PROJECTS
            </h1>
            <p className="max-w-xl mx-auto text-lg">
              Here is a collection of all the projects I have developed. Some
              were completed during my studies at Techover, while others were
              independently undertaken as inspiration struck. ✍️
            </p>
          </div>

          <div className=" pr:[-150px] grid justify-items-center md:grid-cols-2 gap-8 mb-28 ">
            {portfolioData.map((item, index) => (
              <a
                href={item.link}
                key={index}
                target="_blank"
                rel="noopener noreferrer"
                className="md:even:pt-12 ease-in-out duration-75 hover:translate-y-[-4px] hover:drop-shadow-[10px_8px_0_rgba(0,0,0,1)]"
              >
                <div className="h-[250px] md:h-[650px] max-w-[550px] overflow-hidden border-2 border-black rounded-xl bg-black">
                  <img
                    className="h-full w-full object-cover"
                    src={item.thumbnail}
                    alt={item.alt}
                    loading="lazy"
                  />
                </div>

                <div className="relative bg-white border-x-2 border-black border-b-2 rounded-bl-xl rounded-br-xl mx-4 p-4 text-lg flex justify-center max-w-[520px] items-center">
                  <div className="flex flex-col justify-center items-center">
                    <span className="font-bold">{item.title}</span>
                    <span className="text-zinc-400">{item.category}</span>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="absolute right-4 size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                    />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
      <ScrollToTopButton />

      <section className="  text-white border-black border-t-2 px-4 py-12 ">
        <div className="  container mx-auto ">
          <div className=" text-center py-12">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-4">
              SERVICES
            </h1>
            <p className="max-w-xl mx-auto text-lg">
              I have trained in HTML, CSS, JavaScript, Node.js, MongoDB and
              react.js. These are the core services I offer, but I am also eager
              to learn other programming languages and useful skills in the
              field of software development.
            </p>
          </div>

          <div className=" py-12  grid lg:grid-cols-4 ">
            <div className=" ml-10 text-center ">
              <h3 className=" text-3xl font-bold mb-4 ">Web Developer</h3>
              <p className=" flex justify-center mb-12 text-lg ">
                I have recently started developing websites, employing React and
                JavaScript for a few of my projects. I thoroughly enjoy working
                with these technologies and am dedicated to continually
                improving my web development skills.
              </p>

              <h3 className=" text-3xl font-bold mb-4 ">Web Designer</h3>
              <p className=" mb-4 text-lg">
                While I have a basic understanding of UX/UI design, I believe my
                work is competent. You can review the designs in my other
                projects as well as here in my portfolio to see my design
                capabilities.
              </p>
            </div>

            <div
              className="mx-auto rounded-full flex justify-center items-center mb-12 md:mb-0 col-span-2 h-[300px] w-[300px] md:h-[500px] md:w-[500px] relative"
              style={{ backgroundImage: `url(${Portfolio})` }}
            >
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center w-full h-full">
                <img
                  className="h-14 w-14 md:h-24 md:w-24 absolute transition-all duration-500 ease-in-out md:ml-[150px] "
                  style={{
                    transform: "rotate(0deg) translateX(120px) rotate(0deg)",
                  }}
                  src={Css}
                  alt="css icon"
                />
                <img
                  className="h-14 w-14 md:h-24 md:w-24 absolute transition-all duration-500 ease-in-out md:ml-[100px] md:mt-[100px]"
                  style={{
                    transform: "rotate(45deg) translateX(120px) rotate(-45deg)",
                  }}
                  src={Git}
                  alt="git icon"
                />
                <img
                  className="h-12 w-12 md:h-20 md:w-20 absolute transition-all duration-500 ease-in-out md:mt-[100px]"
                  style={{
                    transform: "rotate(90deg) translateX(120px) rotate(-90deg)",
                  }}
                  src={Javascript}
                  alt="javascript icon"
                />
                <img
                  className="h-14 w-14 md:h-24 md:w-24 absolute transition-all duration-500 ease-in-out md:mr-[100px] md:mt-[100px]"
                  style={{
                    transform:
                      "rotate(135deg) translateX(120px) rotate(-135deg)",
                  }}
                  src={Html}
                  alt="html icon"
                />
                <img
                  className="h-14 w-14 md:h-24 md:w-24 absolute transition-all duration-500 ease-in-out md:mr-[150px]"
                  style={{
                    transform:
                      "rotate(180deg) translateX(120px) rotate(-180deg)",
                  }}
                  src={Mongo}
                  alt="mongoDB icon"
                />
                <img
                  className="h-14 w-14 md:h-24 md:w-24 absolute transition-all duration-500 ease-in-out md:mr-[100px] md:mb-[100px]"
                  style={{
                    transform:
                      "rotate(225deg) translateX(120px) rotate(-225deg)",
                  }}
                  src={Node}
                  alt="Node icon"
                />
                <img
                  className="h-14 w-14 md:h-24 md:w-24 absolute transition-all duration-500 ease-in-out md:mb-[150px]"
                  style={{
                    transform:
                      "rotate(270deg) translateX(120px) rotate(-270deg)",
                  }}
                  src={Reacticon}
                  alt="react icon"
                />
                <img
                  className="h-14 w-14 md:h-24 md:w-24 absolute transition-all duration-500 ease-in-out md:mb-[100px] md:-mr-[100px]"
                  style={{
                    transform:
                      "rotate(315deg) translateX(120px) rotate(-315deg)",
                  }}
                  src={Tail}
                  alt="tailwind icon"
                />
              </div>
            </div>

            <div className="text-center ml-10">
              <h3 className=" text-3xl font-bold mb-4 ">React</h3>
              <p className=" mb-8 text-lg">
                While I have not used these skills in many projects yet, and am
                not highly skilled at the moment, I am continuously learning and
                hope to grow further with your team, should you consider me. As
                you can see from this portfolio, and also from my contributions
                to other projects like my country app and my Spotify clone, I am
                proficient in these areas.
              </p>

              <h3 className=" text-3xl font-bold mb-4 ">
                HTML, CSS and javascript
              </h3>
              <p className=" mb-8 text-lg">
                I have completed numerous projects using these skills, and they
                have all functioned well. If you would prefer that I focus
                solely on these areas, I am comfortable with that, as I find it
                enjoyable and straightforward to work in this capacity.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Contact />
    </div>
  );
}

export default Home;
