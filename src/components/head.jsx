import data from'@/api/data.json'

export default function Head(){
    return(
        <div className="">
            <div className=''>
              <img src="/logos-u.png" alt="foto de portada" className="w-screen h-[40vh] top-0 sm:w-screen sm:h-[40vh]"/>
              <img src="/logos-p.png" alt="foto de portada" className="border rounded-full w-32 absolute top-48 left-1/2"/> 
            </div>
            <div className='m-auto w-[300px] py-20'>
                {data.map(data => (
                    <div key={data.id}>
                        <h1 className='text-xl'>{data.name}</h1>
                        <h3 className='text-slate-600'>{data.algo} . Creada {data.fecha}</h3>
                    </div>
                ))}
            </div>
        </div>
    )
}