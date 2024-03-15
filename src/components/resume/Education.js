import { getResumeContent } from "@/utils"
import { FaCalendarCheck } from "react-icons/fa";



export function Education() {
  const content =  JSON.parse(getResumeContent("education.json"));

  return (
    <>
      <div className="container">
      <div className="ml-1 font-bold text-xl">Education</div>
      <hr className="mr-10"/>
        <div className="grid grid-rows-2">
          {content.map(item =>
            <div key={item.id}>
              <div className="m-1">
                {item.degree}
              </div>
              <div className="text-white m-1"> 
                {item.school}
              </div>
              <div className="flex flex-row content-evenly">
                <div className="m-1">
                  <FaCalendarCheck />
                </div>
                <div>
                  {item.graduation_date}
                </div>
              </div>
            </div>
            )}

          <div>
            
          </div>

        </div>
      </div>
    </>
    
  )
}