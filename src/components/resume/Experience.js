import { getResumeContent } from "@/utils"
import { FaCalendarCheck } from "react-icons/fa";



export function Experience() {
  const content =  JSON.parse(getResumeContent("experience.json"));

  return (
    <>
      <div className="ml-1 font-bold text-xl">Experience</div>
      <hr className="mr-10 mb-2"/>
        <div className="grid grid-rows-auto">
          {content.map(item =>
            <div className="mb-4" key={item.id}>
              <div className="text-xl text-slate-400 m-1 ">
                {item.role}
              </div>
              <div className="text-white m-1"> 
                {item.company}
              </div>
              {/* <div className="grid grid-flow-col">  */}
                <div className="flex flex-row content-evenly">
                  <div className="m-1">
                    <FaCalendarCheck />
                  </div>
                  <div>
                    {item.start_date} - {item.end_date}
                  </div>
                </div>
              {/* </div> */}
                <ul className="list-inside list-disc">
                {item.bullet_points.map(bulletItem => 
                  <li key={bulletItem.id} className="m-2">
                    {bulletItem.bullet}
                  </li>
                  )}
                </ul>
            </div>
            )}
          <div>
          </div>
        </div>
    </>
  )
}