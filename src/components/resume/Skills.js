
import { getResumeContent } from "@/utils"


export function Skills() {
  const content = JSON.parse(getResumeContent("skills.json"))

  return (
    <>
      <div className="container">
        <div className="ml-1 font-bold text-xl">Skills</div>
          <hr className="mr-10"/>
          <div className="grid grid-rows-1 mb-8 mt-1">
            {content.map(item =>
            <div key={item.id}>
              {item.skill}
            </div>
            )}
          <div>
        </div>
      </div>
    </div>
    </>
  )
}