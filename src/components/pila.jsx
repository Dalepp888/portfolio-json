import data from "@/api/data.json"

export default function Pila() {

    const { fotopila } = data

    return (
        <div className="max-sm:w-full max-sm:mx-5">
            <h1 className="font-bold text-lg">Pila Tecnológica</h1>
            <div className="grid grid-cols-5 items-center max-sm:grid-cols-2">
                {fotopila.map(fotopila => (
                    <div className="py-3">
                        <img src={fotopila} className="rounded-full w-16" />
                    </div>
                ))}
            </div>
        </div>
    )
}