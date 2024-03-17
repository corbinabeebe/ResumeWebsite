
import { getResumeContent } from "@/utils"


export function Skills() {
  const content = JSON.parse(getResumeContent("skills.json"))

  return (
    <>
        <div className="ml-1 font-bold text-xl">Skills</div>
          <hr className="mr-10 mb-2"/>
          <div className="grid grid-rows-auto mb-8 mt-1">
            {content.map(item =>
            <div className="m-1" key={item.id}>
              {item.skill}
            </div>
            )}
          <div>
        </div>
      </div>
    </>
  )
}