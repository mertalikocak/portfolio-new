import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaJs } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import ScrollIntoView from "react-scroll-into-view";
import { FaChevronDown } from "react-icons/fa";

function Skills() {
  return (
    <div className="max-w-4xl mx-auto text-center py-12 md:py-24" id="tech">
      <p className="text-2xl text-black sm:text-4xl font-bold">Tech I Use 💻</p>
      <div className="flex flex-wrap justify-center pt-2">
        <div className="flex flex-col w-40 p-10 m-4 overflow-hidden bg-white shadow-2xl rounded-xl">
          <FaHtml5 className="mx-auto text-5xl text-orange-600" />
          <p className="mt-6 text-xl sm:text-2xl font-semibold text-center text-gray-600">
            HTML5
          </p>
        </div>
        <div className="flex flex-col w-40 p-10 m-4 overflow-hidden bg-white shadow-2xl rounded-xl">
          <FaCss3Alt className="mx-auto text-5xl text-blue-700" />
          <p className="mt-6 text-xl sm:text-2xl font-semibold text-center text-gray-600">
            CSS3
          </p>
        </div>
        <div className="flex flex-col w-40 py-10 m-4 overflow-hidden bg-white shadow-2xl rounded-xl">
          <FaJs className="mx-auto text-5xl text-yellow-400 bg-black" />
          <p className="mt-6 text-xl sm:text-2xl font-semibold text-center text-gray-600">
            JavaScript
          </p>
        </div>
        <div className="flex flex-col w-40 py-10 m-4 overflow-hidden bg-white shadow-2xl rounded-xl">
          <FaReact className="mx-auto text-5xl text-blue-600 " />
          <p className="mt-6 text-xl sm:text-2xl font-semibold text-center text-gray-600">
            React JS
          </p>
        </div>
        <div className="flex flex-col w-40 py-10 m-4 overflow-hidden bg-white shadow-2xl rounded-xl">
          <SiTailwindcss className="mx-auto text-5xl text-blue-500 " />
          <p className="mt-6 text-xl sm:text-2xl font-semibold text-center text-gray-600">
            Tailwind
          </p>
        </div>
        <div className="flex flex-col w-40 py-10 m-4 overflow-hidden bg-white shadow-2xl rounded-xl">
          <FaNodeJs className="mx-auto text-5xl text-green-700 " />
          <p className="mt-6 text-xl sm:text-2xl text-gray-600 font-semibold text-center">
            Node JS
          </p>
        </div>
      </div>
      <ScrollIntoView selector="#contact" smooth>
        <div className="mx-auto p-16 ">
          <FaChevronDown className=" animate-bounce mx-auto text-4xl text-blue-500" />
        </div>
      </ScrollIntoView>
    </div>
  );
}

export default Skills;
