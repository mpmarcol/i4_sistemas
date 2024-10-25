import { ReactNode } from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-green-100/40 to-cyan-100/15">
      <header className="bg-blue-400/25 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/">
            <Image src="/logo.png" alt="I4 Sistemas Logo" width={50} height={50} />
          </Link>
          <nav>
            <ul className="flex space-x-4">
              <li><Link href="/servicios" className="text-gray-600 hover:text-green-600">Servicios</Link></li>
              <li><Link href="/recursos" className="text-gray-600 hover:text-green-600">Recursos</Link></li>
              <li><Link href="/sobre-nosotros" className="text-gray-600 hover:text-green-600">Sobre Nosotros</Link></li>
              <li><Link href="/contacto" className="text-gray-600 hover:text-green-600">Contáctanos</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-blue-400/50 text-green-800 py-10">
        <div className="container mx-auto px-4">
          <div className="flex justify-between">
            <div>
              <h3 className="text-lg font-semibold mb-4">Sobre nosotros</h3>
              <ul className="space-y-2">
                <li><Link href="/sobre-nosotros" className="hover:text-green-500">Quienes somos</Link></li>
                <li><Link href="/sobre-nosotros#cultura" className="hover:text-green-500">Cultura</Link></li>
                <li><Link href="/casos-de-exito" className="hover:text-green-500">Casos de Éxito</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contacto</h3>
              <p>Email: info@i4sistemas.com</p>
              <p>Teléfono: +1 234 567 8900</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p>&copy; {new Date().getFullYear()} I4 Sistemas. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}