import Head from '@/components/head'
import Main from '@/components/main'

export default function Home() {
  return (
    <div className='w-full sm:w-max-[640px]'>
        <Head/>
      <hr className='m-5'></hr>
      <div className='p-5'>
        <Main/>
      </div>
    </div>
  )
}
