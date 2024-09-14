import React, { useState, useEffect } from "react";
import { portfolioData } from "../../data";
import { HiArrowDown, HiArrowUp } from "react-icons/hi";

function Projects() {
  const [visibleProjects, setVisibleProjects] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const limit = showAll ? portfolioData.length : 3;
    setVisibleProjects(portfolioData.slice(0, limit));
  }, [showAll]);

  const renderWords = (text) => {
    const words = text.split(" ");
    const groupedWords = [];

    for (let i = 0; i < words.length; i += 3) {
      const group = words.slice(i, i + 3);
      groupedWords.push(group.join(" "));
    }

    return groupedWords.map((group, idx) => (
      <div key={idx} className="flex flex-wrap justify-start items-center mt-2">
        {group.split(" ").map((word, index) => (
          <span
            className="border-[2px] md:border-4 border-black my-1 mx-1 p-1 md:p-2 rounded-xl"
            key={index}
          >
            {word}
          </span>
        ))}
      </div>
    ));
  };

  return (
    <section id="work" className="container w-[98%] h-full mx-auto">
      <div className="flex flex-col">
        <div className="text-white text-center py-12">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-2">
            PROJECTS
          </h1>
          <p className="max-w-xl mx-auto text-lg">
            Here is a collection of all the projects I have developed. Some were
            completed during my studies at Techover, while others were
            independently undertaken as inspiration struck. ✍️
          </p>
        </div>

        <div className="container overflow-hidden mx-auto flex flex-col items-center gap-8">
          {visibleProjects.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl overflow-hidden mb-2 ease-in-out duration-75 drop-shadow-[10px_8px_0_rgba(0,0,0,1)]"
            >
              <div
                className={`flex flex-col md:${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                } mx-auto w-[95%] md:w-full h-[500px] border-2 border-black rounded-2xl overflow-hidden`}
              >
                <img
                  className="h-full w-full md:w-auto object-cover "
                  src={item.thumbnail}
                  alt={item.alt}
                  loading="lazy"
                />
                <div className="w-full md:w-[450px] h-full p-4 text-white bg-[#331A1A] flex flex-col items-center justify-center">
                  <span className="font-bold">{item.title}</span>
                  <span className="text-zinc-400">{item.category}</span>
                  <div className="mt-4">{renderWords(item.teknik)}</div>
                  <div className="flex gap-8">
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="hover:bg-#00AB30 border-2 border-red-600 rounded-full p-2 mt-1">
                        Demo
                      </button>
                    </a>
                    {item.link2 && (
                      <a
                        href={item.link2}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="hover:bg-#00AB30 border-2 border-red-600 rounded-full p-2 mt-1">
                          GitHub Code
                        </button>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {portfolioData.length > 4 && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="mx-auto mt-6 text-center bg-#1D562D text-white py-2 px-4 rounded-full hover:bg-#00AB30"
          >
            {showAll ? "Show Less" : "Show More"}
            {showAll ? (
              <HiArrowUp className="mx-auto mt-1" />
            ) : (
              <HiArrowDown className="mx-auto mt-1" />
            )}
          </button>
        )}
      </div>
    </section>
  );
}

export default Projects;
