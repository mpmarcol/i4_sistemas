import Layout from '../components/layout'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Servicios() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">Nuestros Servicios</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Migración a la Nube", description: "Traslade sus aplicaciones y datos a la nube de manera eficiente y segura." },
            { title: "Optimización de Infraestructura", description: "Mejore el rendimiento y reduzca costos de su infraestructura en la nube." },
            { title: "Desarrollo de Aplicaciones Cloud-Native", description: "Cree aplicaciones modernas diseñadas específicamente para la nube." },
            { title: "Seguridad en la Nube", description: "Proteja sus datos y aplicaciones con nuestras soluciones de seguridad avanzadas." },
            { title: "Gestión de Datos en la Nube", description: "Administre y analice sus datos de manera eficiente en la nube." },
            { title: "Soporte y Mantenimiento", description: "Obtenga asistencia continua para sus sistemas en la nube." },
          ].map((service, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{service.description}</p>
                <Button className="mt-4">Más información</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  )
}