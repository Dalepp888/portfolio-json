import data from "@/api/data.json"

export default function Educa(){
    return(
        <div className="max-sm:w-[500px] max-sm:m-auto">
            <h1 className="font-bold text-lg">Educaciòn</h1>
            {data.map(data => (
                <div className='py-3' key={data.id}>
                    <h3>{data.carrera}</h3>
                    <h3>{data.escuela} . {data.fechaesco}</h3>
                </div>
            ))}
        </div>
    )
}