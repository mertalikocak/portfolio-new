import React from "react";
import ScrollIntoView from "react-scroll-into-view";
import { FaChevronDown } from "react-icons/fa";

function About() {
  return (
    <div className="max-w-4xl mt-12 mx-auto">
      <p className="text-2xl text-black md:text-4xl font-bold text-center">
        Hey👋
      </p>
      <p className="text-base sm:text-xl   text-gray-600 leadig-relaxed  mt-4 text-center">
        I am passionate web developer. I love working on front-end and I develop
        fullstack applications with NodeJS. I also love freelancing projects.
      </p>

      <ScrollIntoView selector="#tech" smooth>
        <div className="mx-auto p-16 ">
          <FaChevronDown className=" animate-bounce mx-auto text-4xl text-blue-500" />
        </div>
      </ScrollIntoView>
    </div>
  );
}

export default About;
