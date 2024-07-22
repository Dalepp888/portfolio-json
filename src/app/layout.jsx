import './globals.css'

export const metadata = {
  title: 'Template',
  generator: "Next.js",
  author: "David",
  keywords: ["Template de portafolio", "Personalizable", "Fácil de usar", "Next.js", "Crear portafolio",
             "Easy setup", "Portafolio profesional", "Desarrolladores"],
  description: 'Crea tu portafolio profesional con nuestro template fácil de personalizar. Desarrollado con Next.js y Tailwind CSS, integra tus datos rápidamente usando JSON. Ideal para desarrolladores y diseñadores.',
}

export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  )
}
