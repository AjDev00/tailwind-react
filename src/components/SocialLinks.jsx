import { useState } from "react";
import { FaGithub, FaMailBulk, FaFacebook, FaTwitter } from "react-icons/fa";

export default function SocialLinks() {
  return (
    <div>
      <div
        style={{
          fontSize: "18px",
        }}
        className="hidden md:flex flex-col font-vibes z-0 md:top-0 md:left-0 md:fixed md:pt-48"
      >
        <div className="flex flex-row border border-orange-300 bg-orange-300 w-28 py-2 px-2 items-center gap-4 ml-[-68px] hover:rounded-tr-md hover:rounded-br-md duration-300 cursor-pointer hover:ml-[-0px]">
          <span className="font-bold">GitHub</span>
          <div>
            <FaGithub />
          </div>
        </div>
        <div className="flex flex-row border border-orange-300 bg-orange-300 w-28 py-2 px-2 items-center gap-4 ml-[-68px] hover:rounded-tr-md hover:rounded-br-md duration-300 cursor-pointer hover:ml-[-0px]">
          <span className="font-bold">Mail</span>
          <div>
            <FaMailBulk className="ml-5" />
          </div>
        </div>
        <div className="flex flex-row border border-orange-300 bg-orange-300 w-28 py-2 px-2 items-center gap-4 ml-[-68px] hover:rounded-tr-md hover:rounded-br-md duration-300 cursor-pointer hover:ml-[-0px]">
          <span className="font-bold">Facebook</span>
          <div>
            <FaFacebook />
          </div>
        </div>
        <div className="flex flex-row border border-orange-300 bg-orange-300 w-28 py-2 px-2 items-center gap-4 ml-[-68px] hover:rounded-tr-md hover:rounded-br-md duration-300 cursor-pointer hover:ml-[-0px]">
          <span className="font-bold">Twitter</span>
          <div>
            <FaTwitter className="ml-3" />
          </div>
        </div>
      </div>
    </div>
  );
}
