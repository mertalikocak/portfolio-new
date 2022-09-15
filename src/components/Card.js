import mert from "../images/mert.png";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaRegEnvelope,
} from "react-icons/fa";

function Card() {
  return (
    <div className="w-full">
      <div className="flex flex-col justify-center max-w-sm mx-auto bg-white shadow-xl rounded-xl p-5 ">
        <div>
          <img
            className="w-36 mx-auto shadow-xl rounded-full p-1 drop-shadow-sm"
            src={mert}
            alt="mertali"
          />
        </div>
        <div className="text-center mt-5">
          <p className="text-xl sm:text-3xl text-gray-900 font-medium">
            Mert Ali Koçak
          </p>
          <p className="text-sm sm:text-base text-gray-900 pt-4 pb-8 px-5 w-auto inline-block border-b-2">
            Frontend Developer / Computer Engineer
          </p>
          <div className="flex items-center justify-center mt-6">
            <a
              className="text-3xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800  hover:bg-gray-800 hover:text-white transition-colors duration-300 rounded-full "
              href="https://github.com/mertalikocak"
              target="blank"
            >
              <FaGithub />
              <span className="sr-only">Github</span>
            </a>
            <a
              className="text-3xl m-1 p-1 sm:m-2 sm:p-2 text-blue-700  hover:bg-blue-700 hover:text-white transition-colors duration-300 rounded-full "
              href="https://www.linkedin.com/in/mertalikocak/"
              target="blank"
            >
              <FaLinkedin />
              <span className="sr-only">LınkedIn</span>
            </a>
            <a
              className="text-3xl m-1 p-1 sm:m-2 sm:p-2 text-pink-600  hover:bg-pink-600 hover:text-white transition-colors duration-300 rounded-full "
              href="https://www.instagram.com/mertali_kocak/"
              target="blank"
            >
              <FaInstagram />
              <span className="sr-only">Instagram</span>
            </a>
            <a
              className="text-3xl m-1 p-1 sm:m-2 sm:p-2 text-green-600  hover:bg-green-600 hover:text-white transition-colors duration-300 rounded-full "
              href="mailto:mertalikocakk@gmail.com"
              target="blank"
            >
              <FaRegEnvelope />
              <span className="sr-only">Mail</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
