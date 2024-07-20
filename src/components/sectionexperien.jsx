import data from'@/api/data.json'

export default function Experiences(){

  const {experience} = data

    return(
        <div className='max-sm:w-[550px] max-sm:m-auto'>
            <h1 className="font-bold text-lg">Experiencias</h1>
            {experience.map(experience => (
            <div className='max-sm:grid'>
                <div>
                    <div className='flex max-sm:grid max-sm:py-3 justify-between'>
                      <div>
                        <h3 className='py-3 max-sm:py-1'>{experience.name}</h3>
                      </div>
                      <div>
                        <h3 className='py-3 max-sm:py-1'>{experience.fecha}</h3>
                      </div>
                    </div>

                    <div className='flex max-sm:grid max-sm:py-3 justify-between'>
                      <div>
                        <h3 className='py-3 max-sm:py-1'>{}</h3>
                      </div>
                      <div>
                        <h3 className='py-3 max-sm:py-1'>{}</h3>
                      </div>
                    </div>

                    <div className='flex max-sm:grid max-sm:py-3 justify-between'>
                      <div>
                        <h3 className='py-3 max-sm:py-1'>{}</h3>
                      </div>
                      <div>
                        <h3 className='py-3 max-sm:py-1'>{}</h3>
                      </div>
                    </div>

                    <div className='flex justify-between max-sm:grid max-sm:py-3'>
                      <div>
                        <h3 className='py-3 max-sm:py-1'>{}</h3>
                      </div>
                      <div>
                        <h3 className='py-3 max-sm:py-1'>{}</h3>
                      </div>
                    </div>
                </div>
            </div>
        ))}
        </div>
    )
}