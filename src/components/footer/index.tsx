import React from "react";
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";

function Footer() {
  return (
    <div className="w-full mt-20 h-40 border-t-4 border-black bg-yellow-200 flex flex-col items-center justify-center">
      <div className="font-roboSlab flex space-x-2">
        <h1>Created by</h1>
        <a
          href="https://ashirwadshetye.com"
          target="_blank"
          rel="noopener, noreferrer"
          className="font-bold font-roboMono text-purple-900 hover:scale-110 duration-200"
        >
          Ashirwad Shetye
        </a>
      </div>
      <div className="flex w-40 text-purple-900 justify-between text-2xl mt-5">
        <a
          href="https://github.com/Ashirwad-Shetye"
          target="_blank"
          rel="noopener, noreferrer"
          className="hover:scale-125 duration-200"
        >
          <AiFillGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/ashirwadshetye/"
          target="_blank"
          rel="noopener, noreferrer"
          className="hover:scale-125 duration-200"
        >
          <AiFillLinkedin />
        </a>
        <a
          href="mailto:ashirwadpramodshetye@gmail.com"
          target="_blank"
          rel="noopener, noreferrer"
          className="hover:scale-125 duration-200"
        >
          <AiFillMail />
        </a>
      </div>
    </div>
  );
}

export default Footer;
