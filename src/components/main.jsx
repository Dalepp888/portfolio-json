import Pila from "./pila";
import Projects from "./projects";
import Acerca from "./sectionacerca";
import Educa from "./sectionEduca";
import Experiences from "./sectionexperien";

export default function Main(){
    return(
        <div className="w-full m-auto max-w-[700px] overflow-hidden">
            <Acerca/>
            <hr className="my-5"></hr>
            <Experiences/>
            <hr className="my-5"></hr>
            <Projects/>
            <hr className="my-5"></hr>
            <Educa/>
            <hr className="my-5"></hr>
            <Pila/>
        </div>
    )
}