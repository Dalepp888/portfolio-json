import data from '@/api/data.json'
import Link from 'next/link'

export default function Head() {

    const { name, user, date, cv, networks, profile, cover } = data

    return (
        <div>
            <div>
                <img src={cover} className="w-screen h-[40vh] top-0 max-sm:w-screen max-sm:h-[40vh]" />
            </div>
            <div className='m-auto w-[300px] py-20 text-center max-sm:w-[300px] max-sm:m-auto'>
                <div className='w-full flex justify-center items-center relative'>
                    <img src={profile} className="bottom-10 w-20 h-20 rounded-full absolute" />
                </div>
                <div className=''>
                    <h1 className='text-xl pb-2 font-semibold'>{name}</h1>
                    <h3 className='text-slate-600 pb-2 text-sm'>{user} . Created {date}</h3>
                    <div className='flex justify-center pb-2'>
                        {networks.map(network => (
                            <Link key={network.link} href={network.link} className='rounded-full overflow-hidden w-6 h-6'>
                                <img src={network.photo} className='w-6 h-6 object-cover' />
                            </Link>
                        ))}
                    </div>
                    <Link href={cv} className='text-cyan-500 font-bold pb-2'>Descargar CV</Link>
                </div>
            </div>
        </div>
    )
}