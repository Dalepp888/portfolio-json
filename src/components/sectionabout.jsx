import { data } from '@/api/data'

export default async function About(){

    const {info} = await data()

    return(
        <div className="max-lg:max-w-[350px] max-lg:px-5">
            <h1 className="font-bold text-lg">About</h1>
                <div>
                    <p className='py-3'>{info}</p>
                </div>
        </div>
    )
}