import data from "@/api/data.json"

export default function Educa(){

    const {carrera, escuela, fechaesco} = data

    return(
        <div className="max-sm:w-full max-lg:px-5">
            <h1 className="font-bold text-lg">Educaciòn</h1>
                <div className='py-3'>
                    <h3>{carrera}</h3>
                    <h3>{escuela} . {fechaesco}</h3>
                </div>
        </div>
    )
}