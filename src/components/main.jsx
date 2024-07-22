import Stack from "./stack";
import Projects from "./projects";
import About from "./sectionabout";
import Education from "./sectioneducation";
import Experiences from "./sectionexperience";

export default function Main(){
    return(
        <div className="w-full m-auto max-w-[700px] overflow-hidden">
            <About/>
            <hr className="my-5"></hr>
            <Experiences/>
            <hr className="my-5"></hr>
            <Projects/>
            <hr className="my-5"></hr>
            <Education/>
            <hr className="my-5"></hr>
            <Stack/>
        </div>
    )
}