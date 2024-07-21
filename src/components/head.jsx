import data from '@/api/data.json'
import Link from 'next/link'

export default function Head() {

    const { name, user, fecha, cv, redes, perfil, portada } = data

    return (
        <div className="">
            <div className=''>
                <img src={portada} alt="foto de portada" className="w-screen h-[40vh] top-0 max-sm:w-screen max-sm:h-[40vh]" />
            </div>
            <div className='m-auto w-[300px] py-20 text-center max-sm:w-[300px] max-sm:m-auto'>
                <div className='w-full flex justify-center items-center relative'>
                    <img src={perfil} alt="foto de portada" className="border bottom-10 w-20 h-20 rounded-full absolute" />
                </div>
                <div className=''>
                    <h1 className='text-xl pb-2 font-semibold'>{name}</h1>
                    <h3 className='text-slate-600 pb-2 text-sm'>{user} . Creada {fecha}</h3>
                    <div className='flex justify-center pb-2'>
                        {redes.map(red => (
                            <Link href={red.link} className='rounded-full overflow-hidden w-6 h-6'>
                                <img src={red.foto} className='w-full h-full object-cover' />
                            </Link>
                        ))}
                    </div>
                    <Link href={cv} className='text-cyan-500 font-bold pb-2'>Descargar CV</Link>
                </div>
            </div>
        </div>
    )
}