import data from'@/api/data.json'

export default function Experiences(){
    return(
        <div>
            <h1 className="font-bold text-lg">Experiencias</h1>
            {data.map(data => (
            <div className='flex justify-between' key={data.id}>
                <div>
                    <h3 className='p-3'>{data.experience1}</h3>
                    <h3 className='p-3'>{data.experience2}</h3>
                    <h3 className='p-3'>{data.experience3}</h3>
                    <h3 className='p-3'>{data.experience4}</h3>
                </div>
                <div>
                    <h3 className='p-3'>{data.fecha1}</h3>
                    <h3 className='p-3'>{data.fecha2}</h3>
                    <h3 className='p-3'>{data.fecha3}</h3>
                    <h3 className='p-3'>{data.fecha4}</h3>
                </div>
            </div>
        ))}
        </div>
    )
}