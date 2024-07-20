import Pila from "./pila";
import Acerca from "./sectionacerca";
import Educa from "./sectionEduca";
import Experiences from "./sectionexperien";

export default function Main(){
    return(
        <div className="w-[700px] m-auto sm:w-max-[600px]">
            <Acerca/>
            <hr className="my-5"></hr>
            <Experiences/>
            <hr className="my-5"></hr>
            <Educa/>
            <hr className="my-5"></hr>
            <Pila/>
        </div>
    )
}