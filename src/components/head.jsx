import data from'@/api/data.json'

export default function Head(){

    const {name, algo, fecha} = data

    return(
        <div className="">
            <div className=''>
              <img src="/logos-u.png" alt="foto de portada" className="w-screen h-[40vh] top-0 max-sm:w-screen max-sm:h-[40vh]"/> 
            </div>
            <div className='m-auto w-[300px] py-20 max-sm:w-[300px] max-sm:m-auto relative'>
            <img src="/logos-p.png" alt="foto de portada" className="border rounded-full w-32 absolute top-0 left-1/2"/>
                    <div>
                        <h1 className='text-xl'>{name}</h1>
                        <h3 className='text-slate-600'>{algo} . Creada {fecha}</h3>
                    </div>
            </div>
        </div>
    )
}