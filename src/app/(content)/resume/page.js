import { AboutMe } from "@/components/resume/AboutMe"
import { Experience } from "@/components/resume/Experience"
import { Summary } from "@/components/resume/Summary"
import { Certifications } from "@/components/resume/Certifications"
import { Skills } from "@/components/resume/Skills"
import { Education } from "@/components/resume/Education"


export default function Resume() {
    return (
      <>
        <div className="container">
          <div className="grid grid-cols-3 grid-rows-3 ml-2">
            <div className="col-span-3">
              <AboutMe />
            </div>
            <div className="col-span-2 mr-8 ml-4">
              <Experience />
            </div>
            <div className="col-span-1 row-span-3">
              <div>
                <Summary />
              </div>
              <div>
                <Skills />
              </div>    
              <div>
                <Certifications />
                <hr className="mr-4"/>
              </div>
            </div>
            <div className="col-span-2 row-span-1 ml-4 mr-8">
              <Education />
              
            </div>
          </div>
          
        </div>
      </>

    )
}