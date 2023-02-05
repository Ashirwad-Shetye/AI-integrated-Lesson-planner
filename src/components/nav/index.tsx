import React from "react";
import { BsAsterisk } from "react-icons/bs";

function Nav() {
  return (
    <div className="bg-yellow-200 w-full fixed h-16 flex items-center justify-between border-b-4 border-black z-50">
      <div className="mx-4 md:mx-10">
        <BsAsterisk className="text-3xl" />
      </div>
      <div className="mx-4 md:mx-10 flex space-x-4 md:space-x-10 font-roboMono text-lg">
        <div>planner</div>
        <div>contact</div>
      </div>
    </div>
  );
}

export default Nav;
