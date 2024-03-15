import { getResumeContent } from "@/utils"
import { FaLinkedin } from "react-icons/fa6";
import { FaSquarePhoneFlip } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { HiAtSymbol } from "react-icons/hi";
import { FaSquareGithub } from "react-icons/fa6";
import { PiLinkSimpleBreakFill } from "react-icons/pi";

export function AboutMe() {
  const aboutMeContent = JSON.parse(getResumeContent("aboutme.json"));

  return (

    <div className="container bg-black " >
      <div className="font-bold text-3xl m-2">{aboutMeContent.name}</div>
      <div className="font-bold text-xl m-2">{aboutMeContent.role}</div>
      <div className="grid grid-rows-2 grid-flow-col gap-1 mb-2">
        <div className="flex flex-row content-evenly">
          <div className="m-1">
            <FaSquarePhoneFlip />
          </div>
          <div>
            {aboutMeContent.phone_number}
          </div>          
        </div>
        <div className="flex flex-row content-evenly">
          <div className="m-1">
            <FaLocationDot />
          </div>
          <div>
            {aboutMeContent.location}
          </div>
        </div>
        <div className="flex flex-row content-evenly">
          <div className="m-1">
            <HiAtSymbol />
          </div>
          <div>
            {aboutMeContent.email}
          </div>
        </div>
        <div className="flex flex-row content-evenly">
          <div className="m-1">
            <PiLinkSimpleBreakFill />
          </div>
          <div>
            {aboutMeContent.website}
          </div>
        </div>
        <div className="flex flex-row content-evenly">
          <div className="m-1">
            <FaLinkedin />
          </div>
          <div>
            {aboutMeContent.linkedIn}
          </div>
        </div>
        <div className="flex flex-row content-evenly">
          <div className="m-1">
            <FaSquareGithub />
          </div>
          <div>
            {aboutMeContent.github}
          </div>
        </div>
      </div>
    </div>
  )
}