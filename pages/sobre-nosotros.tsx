import Layout from '../components/layout'
import Image from 'next/image'
import { Button } from "@/components/ui/button"

export default function SobreNosotros() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">Sobre Nosotros</h1>
        
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Nuestra Historia</h2>
          <p className="mb-4">I4 Sistemas fue fundada en [año] con la misión de ayudar a las empresas a aprovechar el poder de la nube. Desde entonces, hemos crecido hasta convertirnos en un líder en soluciones de migración y optimización en la nube.</p>
          <Image src="/placeholder.svg?height=300&width=600" alt="Equipo de I4 Sistemas" width={600} height={300} className="rounded-lg shadow-md" />
        </section>

        <section className="mb-12" id="cultura">
          <h2 className="text-3xl font-semibold mb-4">Nuestra Cultura</h2>
          <p className="mb-4">En I4 Sistemas, creemos en la innovación, la colaboración y el aprendizaje continuo. Nuestro equipo está compuesto por expertos apasionados por la tecnología y comprometidos con el éxito de nuestros clientes.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-semibold mb-2">Innovación</h3>
              <p>Siempre buscamos nuevas formas de mejorar y optimizar nuestras soluciones.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-semibold mb-2">Colaboración</h3>
              <p>Trabajamos en equipo para ofrecer los mejores resultados a nuestros clientes.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-semibold mb-2">Excelencia</h3>
              <p>Nos esforzamos por superar las expectativas en todo lo que hacemos.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Nuestro Equipo</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Ana García", role: "CEO", image: "/placeholder.svg?height=200&width=200" },
              { name: "Carlos Rodríguez", role: "CTO", image: "/placeholder.svg?height=200&width=200" },
              { name: "Laura Martínez", role: "Directora de Operaciones", image: "/placeholder.svg?height=200&width=200" },
            ].map((member, index) => (
              <div key={index} className="text-center">
                <Image src={member.image} alt={member.name} width={200} height={200} className="rounded-full mx-auto mb-4" />
                <h3 className="font-semibold">{member.name}</h3>
                <p>{member.role}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="text-center">
          <Button className="bg-green-600 hover:bg-green-700 text-white">Únete a Nuestro Equipo</Button>
        </div>
      </div>
    </Layout>
  )
}