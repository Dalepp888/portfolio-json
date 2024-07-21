import data from "@/api/data.json"

export default function Stack() {

    const { photostack } = data

    return (
        <div className="max-sm:w-full max-sm:mx-5">
            <h1 className="font-bold text-lg">Tech Stack</h1>
            <div className="grid grid-cols-5 items-center max-sm:grid-cols-2">
                {photostack.map(photostack => (
                    <div key={photostack} className="py-3">
                        <img src={photostack} className="rounded-full w-16" />
                    </div>
                ))}
            </div>
        </div>
    )
}