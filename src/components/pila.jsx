import data from "@/api/data.json"

export default function Pila() {

    const { fotopila } = data

    return (
        <div className="max-sm:w-[500px] max-sm:m-auto">
            <h1 className="font-bold text-lg">Pila Tecnológica</h1>
            <div className="grid grid-cols-5 items-center">
                {fotopila.map(fotopila => (
                    <div className="py-3">
                        <img src={fotopila} className="border rounded-full w-16" />
                    </div>
                ))}
            </div>
        </div>
    )
}