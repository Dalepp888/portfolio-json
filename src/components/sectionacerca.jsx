import data from "@/api/data.json"

export default function Acerca(){

    const {info} = data

    return(
        <div className="max-sm:w-[500px] max-sm:m-auto">
            <h1 className="font-bold text-lg">Acerca de</h1>
                <div>
                    <p className='py-3'>{info}</p>
                </div>
        </div>
    )
}