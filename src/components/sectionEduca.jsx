import data from "@/api/data.json"

export default function Educa(){

    const {carrera, escuela, fechaesco} = data

    return(
        <div className="max-sm:w-[500px] max-sm:m-auto">
            <h1 className="font-bold text-lg">Educaciòn</h1>
                <div className='py-3'>
                    <h3>{carrera}</h3>
                    <h3>{escuela} . {fechaesco}</h3>
                </div>
        </div>
    )
}