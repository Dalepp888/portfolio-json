import './globals.css'
import { data } from '@/api/data'


export async function generateMetadata(params) {
  const { SEO } = await data()

 const metadata = {
    title: SEO.title,
    author: SEO.author,
    keywords: SEO.keywords,
    description: SEO.description,
  }
  return metadata
}

export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  )
}
