import React, { useState, useEffect } from "react";

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Lyssna på scroll händelser och avgör om knappen ska visas
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        // Knappen visas efter 300px scroll
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      style={{ display: isVisible ? "inline" : "none" }}
      className="fixed bottom-4 right-2 p-2 rounded-full bg-black  text-red-600 md:w-[50px] md:h-[50px] "
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="size-8"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m4.5 15.75 7.5-7.5 7.5 7.5"
        />
      </svg>
    </button>
  );
}

export default ScrollToTopButton;
