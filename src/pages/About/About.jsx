import React from "react";
import { socials } from "../../data";
import { Hero, Pdf } from "../../assets";
import Scroller from "../../componets/Scroller";
import Contact from "../../componets/Contact";

function About() {
  return (
    <>
      <section className=" text-white py-12 border-x-2 border-white ">
        <div className=" container mx-auto px-4 grid gap-8 lg:grid-cols-2 ">
          <div>
            <h1 className="text-4xl lg:text-5xl xl:text-7xl font-bold mb-4">
              My story
            </h1>
            <p className="mb-2 text-lg ">
              I am a 33-year-old programmer who has recently completed a
              year-long course in programming. With a newfound passion for
              technology in all its forms, I am eager to transition into a
              programming role where I can further develop my skills and
              contribute to innovative projects. As a lifelong gamer, my
              interest in technology extends to gaming—excluding first-person
              shooters, I enjoy a wide range of game genres.
            </p>
            <p className="mb-4 text-lg">
              Been together with my wife for twelve years and married for five,
              we share our home with a cherished 5-year-old Keeshond, who is
              very much a part of our family. My personal and professional
              experiences have equipped me with a unique perspective that I am
              excited to bring to my future role in the tech industry.
            </p>

            <div className="flex justify-center items-center flex-col mt-12 mb-8">
              <h1 className=" text-5xl mb-4">My CV</h1>
              <a
                className="flex justify-center items-center  w-28 mx-auto"
                href="/public/David R CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="h-28 w-28" src={Pdf} alt="" />
              </a>
              <p>Click to open </p>
            </div>
            <div className=" flex justify-center items-center text-lg font-bold">
              Find me on:
            </div>
            <div className="mb-8 flex justify-center items-center ">
              <ul className="flex gap-6">
                {socials.map((item, index) => (
                  <li key={index}>
                    <a
                      target="_blank"
                      href={item.link}
                      rel="noopener noreferrer"
                      className="py-2 flex flex-col md:flex-row gap-2 items-center justify-center"
                    >
                      {item.name}
                      <img
                        src={item.icon}
                        alt={item.alt}
                        width="25px"
                        height="25px"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <img
              className=" border-white border-2 rounded-xl md:h-[700px]  md:ml-56 "
              src={Hero}
              alt="David Ribbfors"
            />
          </div>
        </div>
      </section>
      <Scroller
        text={
          "✨ Let´s get to work! ✨ Have a project in mind? ✨ Contact me!✨ Let´s get to work! ✨ Have a project in mind? ✨ Contact me!✨ Let´s get to work! ✨ Have a project in mind? ✨ Contact me!"
        }
        link="/contact"
      />
      <Contact />
    </>
  );
}

export default About;
