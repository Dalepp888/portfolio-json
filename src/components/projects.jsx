import data from "@/api/data.json"
import Link from "next/link"

export default function Projects() {

    const { projects } = data

    return (
        <div>
            {projects.map(project => (
                <Link key={project.link} href={project.link}>
                    <div className="flex py-5 hover:shadow-md rounded-md">
                        <img src={project.img} className="w-[150px] p-2" />
                        <div className="px-3 flex justify-center flex-col">
                            <h1 className="font-bold text-pretty text">{project.nombre}</h1>
                            <p>{project.descripcion}</p>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    )
}