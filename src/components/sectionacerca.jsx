import data from "@/api/data.json"

export default function Acerca(){
    return(
        <div className="sm:w-max-[600px]">
            <h1 className="font-bold text-lg">Acerca de</h1>
            {data.map(data => (
                <div key={data.id}>
                    <p className='p-3'>{data.info}</p>
                </div>
            ))}
        </div>
    )
}