import data from'@/api/data.json'

export default function Experiences(){
    return(
        <div className='max-sm:w-[550px] max-sm:m-auto'>
            <h1 className="font-bold text-lg">Experiencias</h1>
            {data.map(data => (
            <div className='max-sm:grid' key={data.id}>
                <div>
                    <div className='flex max-sm:grid max-sm:py-3 justify-between'>
                      <div>
                        <h3 className='py-3 max-sm:py-1'>{data.experience1}</h3>
                      </div>
                      <div>
                        <h3 className='py-3 max-sm:py-1'>{data.fecha1}</h3>
                      </div>
                    </div>

                    <div className='flex max-sm:grid max-sm:py-3 justify-between'>
                      <div>
                        <h3 className='py-3 max-sm:py-1'>{data.experience2}</h3>
                      </div>
                      <div>
                        <h3 className='py-3 max-sm:py-1'>{data.fecha2}</h3>
                      </div>
                    </div>

                    <div className='flex max-sm:grid max-sm:py-3 justify-between'>
                      <div>
                        <h3 className='py-3 max-sm:py-1'>{data.experience3}</h3>
                      </div>
                      <div>
                        <h3 className='py-3 max-sm:py-1'>{data.fecha3}</h3>
                      </div>
                    </div>

                    <div className='flex justify-between max-sm:grid max-sm:py-3'>
                      <div>
                        <h3 className='py-3 max-sm:py-1'>{data.experience4}</h3>
                      </div>
                      <div>
                        <h3 className='py-3 max-sm:py-1'>{data.fecha4}</h3>
                      </div>
                    </div>
                </div>
            </div>
        ))}
        </div>
    )
}