import { getResumeContent } from "@/utils"






export function Summary() {
  const content = JSON.parse(getResumeContent("summary.json"))

  return (
    <>
      <div className="container">
        <div className="ml-1 font-bold text-xl">Summary</div>
          <hr className="mr-10"/>
          <div className="grid grid-rows-1 mb-8 mt-1">
            {content.map(item =>
            <div>
              {item.summary}
            </div>
            )}
          <div>
        </div>
      </div>
    </div>
    </>
  )
}