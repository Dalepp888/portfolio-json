import Footer from '@/components/footer'
import Head from '@/components/head'
import Main from '@/components/main'

export default function Home() {
  return (
    <div className='w-full max-sm:w-[100%] max-w-full'>
        <Head/>
      <hr className='m-5'></hr>
      <div className='p-5'>
        <Main/>
      </div>
      <Footer/>
    </div>
  )
}
