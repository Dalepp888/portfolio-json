import data from "@/api/data.json"

export default function Projects(){
    
    const {projects} = data

    return(
        <div>
            {projects.map(project => (
                <div className="flex">
                    <img src={project.img} className="w-[200px]"/>
                    <div>
                      <h1>{project.nombre}</h1>
                      <p>{project.descripcion}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}