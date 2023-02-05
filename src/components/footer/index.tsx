import React from "react";
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";

function Footer() {
  return (
    <div className="w-full mt-20 h-40 border-t-4 border-black bg-yellow-200 flex flex-col items-center justify-center">
      <div className="font-roboSlab">
        Created by{" "}
        <a
          href="https://ashirwadshetye.com"
          target="_blank"
          rel="noreferrer"
          className="font-bold font-roboMono text-purple-800"
        >
          Ashirwad Shetye
        </a>
      </div>
      <ul className="flex w-40 justify-between text-2xl mt-5">
        <li>
          <AiFillGithub />
        </li>
        <li>
          <AiFillLinkedin />
        </li>
        <li>
          <AiFillMail />
        </li>
      </ul>
    </div>
  );
}

export default Footer;
