import Layout from '../components/layout'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function LandingPage() {
  return (
    <Layout>
      <section className="relative bg-white py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="carousel">
            <Image src="/hero-image-1.jpg" alt="Hero Image 1" layout="fill" objectFit="cover" className="carousel-image" />
            <Image src="/hero-image-2.jpg" alt="Hero Image 2" layout="fill" objectFit="cover" className="carousel-image" />
            <Image src="/hero-image-3.jpg" alt="Hero Image 3" layout="fill" objectFit="cover" className="carousel-image" />
            <Image src="/hero-image-4.jpg" alt="Hero Image 4" layout="fill" objectFit="cover" className="carousel-image" />
            <Image src="/hero-image-5.jpg" alt="Hero Image 5" layout="fill" objectFit="cover" className="carousel-image" />
          </div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col items-start">
            <div className="max-w-2xl mb-10 bg-white/80 p-6 rounded-lg">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">Servicios de migración a la nube</h1>
              <p className="text-xl text-gray-600 mb-8">Ayudamos a las empresas a modernizar su infraestructura y mejorar la eficiencia empresarial mediante la migración de la informática local a la nube.</p>
            </div>
          </div>
          <div className="flex justify-end">
            <Button className="bg-green-600 hover:bg-green-700 text-white">Ponte en contacto</Button>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center transition-all duration-300 ease-in-out hover:text-blue-400/25">Lo que Obtienes de la Nube</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Gastos Reducidos", description: "Ahorra hasta un 35% en costos operativos." },
              { title: "Mayor Seguridad de Datos", description: "Protección mejorada para tus datos confidenciales." },
              { title: "Integración Perfecta", description: "Integra fácilmente herramientas útiles." },
              { title: "Mayor Agilidad", description: "Escala sin problemas y aumenta la eficiencia." },
              { title: "Optimización de Costos", description: "Herramientas para optimizar el gasto de acuerdo con los recursos reales." },
              { title: "Sin Interrupciones Comerciales", description: "Migración sin problemas garantizando el rendimiento habitual." },
            ].map((benefit, index) => (
              <Card key={index} className="bg-blue-400/25 group hover:shadow-lg transition-shadow duration-600">
                <CardContent className="p-6 h-48 relative overflow-hidden">
                  <div className="absolute inset-0 flex p-4 items-center justify-center transition-all duration-600 
                    ease-in-out  group-hover:items-start group-hover:justify-start">
                    <h3 className="text-2xl font-semibold text-center group-hover:text-left transition-all duration-600 ease-in-out">{benefit.title}</h3>
                  </div>
                  <div className="absolute bottom-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-600 ease-in-out">
                    <p className="text-lg text-gray-600 text-right">{benefit.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-cyan-100/15 to-green-100/40">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Nuestros Casos de Éxito</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Proyecto A", logo: "/placeholder.svg?height=100&width=100", description: "Descripción breve del proyecto A y sus resultados." },
              { name: "Proyecto B", logo: "/placeholder.svg?height=100&width=100", description: "Descripción breve del proyecto B y sus resultados." },
              { name: "Proyecto C", logo: "/placeholder.svg?height=100&width=100", description: "Descripción breve del proyecto C y sus resultados." },
            ].map((project, index) => (
              <Card key={index} className="bg-white group hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 h-48 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 ease-in-out group-hover:opacity-20">
                    <Image src={project.logo} alt={`${project.name} Logo`} width={100} height={100} />
                  </div>
                  <div className="absolute inset-0 flex flex-col justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                    <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <Button variant="outline" className="text-green-600 border-green-600 hover:bg-green-600 hover:text-white">Ver Caso completo</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 px-4 mb-8 md:mb-0">
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-6">Somos un Socio Google Cloud Premier</h2>
                <p className="text-xl text-gray-600 mb-8">I4 Sistemas ha brindado soluciones en Google Cloud Platform durante más de ocho años.</p>
                <div className="flex justify-center items-center space-x-8 mb-8">
                  <Image src="/placeholder.svg?height=50&width=200" alt="Google Cloud Logo" width={200} height={50} />
                  <Image src="/logo.png" alt="I4 Sistemas Logo" width={50} height={50} />
                </div>
                <Button className="bg-green-600 hover:bg-green-700 text-white">Contáctanos</Button>
              </div>
            </div>
            <div className="md:w-1/2 px-4">
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-6">Somos un Socio Google Cloud Premier</h2>
                <p className="text-xl text-gray-600 mb-8">I4 Sistemas ha brindado soluciones en Google Cloud Platform durante más de ocho años.</p>
                <div className="flex justify-center items-center space-x-8 mb-8">
                  <Image src="/placeholder.svg?height=50&width=200" alt="Google Cloud Logo" width={200} height={50} />
                  <Image src="/logo.png" alt="I4 Sistemas Logo" width={50} height={50} />
                </div>
                <Button className="bg-green-600 hover:bg-green-700 text-white">Contáctanos</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx global>{`
        @keyframes carouselAnimation {
          0%, 20% {
            opacity: 1;
          }
          25%, 95% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
        .carousel {
          position: relative;
          width: 100%;
          height: 100%;
        }
        .carousel-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0;
          animation: carouselAnimation 15s infinite;
        }
        .carousel-image:nth-child(1) { animation-delay: 0s; }
        .carousel-image:nth-child(2) { animation-delay: 3s; }
        .carousel-image:nth-child(3) { animation-delay: 6s; }
        .carousel-image:nth-child(4) { animation-delay: 9s; }
        .carousel-image:nth-child(5) { animation-delay: 12s; }
      `}</style>
    </Layout>
  )
}