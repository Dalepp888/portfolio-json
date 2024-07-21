import data from "@/api/data.json"
import Image from "next/image"
import Link from "next/link"

export default function Projects() {

    const { projects } = data

    return (
        <div className="flex flex-row flex-wrap p-1">
            {projects.map(project => (
                <Link key={project.link} href={project.link}>
                    <div className="flex max-lg:max-w-[300px] py-5 hover:shadow-md rounded-md max-lg:flex-col max-lg:">
                        <Image src={project.img} className="p-2 flex max-lg:px-5 max-lg:flex max-lg:m-auto" width={200} height={200}/>
                        <div className="px-3 flex  justify-center flex-col max-sm:w-[300px] max-lg:px-5">
                            <h1 className="font-bold text">{project.nombre}</h1>
                            <p>{project.descripcion}</p>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    )
}