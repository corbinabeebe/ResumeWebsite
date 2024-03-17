import { getResumeContent } from "@/utils"
import { FaCalendarCheck } from "react-icons/fa";


export function Certifications() {
  const content = JSON.parse(getResumeContent("certifications.json"))

  return (
    <>
        <div className="ml-1 font-bold text-xl">Certifications</div>
          <hr className="mr-10 mb-2"/>
          <div className="grid grid-rows-auto mb-8 mt-1">
            {content.map(item =>
            <div key={item.id}>
              <div className="m-1">
                {item.certificate}
              </div>
              <div className="m-1">
                {item.provider}
              </div>
              <div className="flex flex-row content-evenly">
                <div className="m-1"><FaCalendarCheck /></div>
                <div>{item.grant_date} - {item.expiration}</div>
              </div>
            </div>
            )}
          <div>
        </div>
      </div>
    </>
  )
}