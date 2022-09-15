import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaRegEnvelope,
} from "react-icons/fa";

function Footer() {
  return (
    <div className="pt-5 border-t-2">
      <div className="flex justify-center mt-2">
        <a
          className="text-xl m-1 p-1  text-gray-800  hover:bg-gray-800 hover:text-white transition-colors duration-300 rounded-full "
          href="https://github.com/mertalikocak"
          target="blank"
        >
          <FaGithub />
          <span className="sr-only">Github</span>
        </a>
        <a
          className="text-xl m-1 p-1  text-blue-700  hover:bg-blue-700 hover:text-white transition-colors duration-300 rounded-full "
          href="https://www.linkedin.com/in/mertalikocak/"
          target="blank"
        >
          <FaLinkedin />
          <span className="sr-only">LınkedIn</span>
        </a>
        <a
          className="text-xl m-1 p-1  text-pink-600  hover:bg-pink-600 hover:text-white transition-colors duration-300 rounded-full "
          href="https://www.instagram.com/mertali_kocak/"
        >
          <FaInstagram />
          <span className="sr-only">Instagram</span>
        </a>
        <a
          className="text-xl m-1 p-1  text-green-600  hover:bg-green-600 hover:text-white transition-colors duration-300 rounded-full "
          href="mailto:mertalikocakk@gmail.com"
          target="blank"
        >
          <FaRegEnvelope />
          <span className="sr-only">Mail</span>
        </a>
      </div>
      <div className="flex justify-center mt-4">
        <p className="text-black mb-4 ">
          Made with
          <span className="mr-2" role="link" aria-label="heart">
            💜
          </span>
          by{" "}
          <a
            className="text-purple-800 hover:underline"
            href="https://www.linkedin.com/in/mertalikocak/"
            target="blank"
          >
            Mert Ali Koçak
          </a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
