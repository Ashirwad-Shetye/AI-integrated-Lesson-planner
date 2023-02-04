import React from "react";
import { BsAsterisk } from "react-icons/bs";

function Nav() {
  return (
    <div className="bg-yellow-200 h-16 flex items-center justify-between border-b-4 border-black">
      <div className="mx-10">
        <BsAsterisk className="text-3xl" />
      </div>
      <div className="mx-10 font-roboMono text-lg">contact</div>
    </div>
  );
}

export default Nav;
