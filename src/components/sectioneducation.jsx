import { data } from '@/api/data'

export default async function Education(){

    const {education, school, dateschool} = await data()

    return(
        <div className="max-sm:w-full max-lg:px-5">
            <h1 className="font-bold text-lg">Education</h1>
                <div className='py-3'>
                    <h3>{education}</h3>
                    <h3>{`${school} . ${dateschool}`}</h3>
                </div>
        </div>
    )
}