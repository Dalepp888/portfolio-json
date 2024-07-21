import data from '@/api/data.json'
import Link from 'next/link'

export default function Experiences() {

  const { experience } = data
  const al = ">"

  return (
    <div className=' max-sm:w-[400px] max-sm:px-5'>
      <h1 className="font-bold text-lg">Experiencias</h1>
      {experience.map(experience => (
        <div className='max-sm:grid'>
          <div>
            <div className='flex max-sm:grid max-sm:py-3 justify-between py-3'>
              <div className='flex'>
                <div className='px-2'>
                  <img src={experience.img} className='rounded-full w-16' />
                </div>
                <div className='flex flex-col'>
                  <div className='py-1'>
                    <h3 className='max-sm:py-1 font-bold'>{experience.ocu}</h3>
                    <h3 className='text-slate-600'>{experience.name}</h3>
                  </div>
                  <Link href={experience.link} className='text-cyan-500 font-bold'>Saber màs {al}</Link>
                </div>
              </div>
              <div className='max-sm:px-20'>
                <h3 className='py-3 max-sm:py-1'>{experience.fecha}</h3>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}