import { data } from '@/api/data'
import Image from 'next/image'

export default async function Stack() {

    const { photostack } = await data()

    return (
        <div className="max-sm:w-full max-sm:mx-5">
            <h1 className="font-bold text-lg">Tech Stack</h1>
            <div className="grid grid-cols-5 items-center max-sm:grid-cols-2">
                {photostack.map(photostack => (
                    <div key={photostack} className="py-3">
                        <Image src={photostack} className="rounded-full" width={48} height={48} />
                    </div>
                ))}
            </div>
        </div>
    )
}