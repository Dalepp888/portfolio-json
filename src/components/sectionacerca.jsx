import data from "@/api/data.json"

export default function Acerca(){
    return(
        <div className="max-sm:w-[500px] max-sm:m-auto">
            <h1 className="font-bold text-lg">Acerca de</h1>
            {data.map(data => (
                <div key={data.id}>
                    <p className='py-3'>{data.info}</p>
                </div>
            ))}
        </div>
    )
}