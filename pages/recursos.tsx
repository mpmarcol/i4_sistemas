import Layout from '../components/layout'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Recursos() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">Recursos</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Guías y Tutoriales", description: "Aprenda a utilizar las tecnologías en la nube con nuestras guías paso a paso." },
            { title: "Webinars", description: "Participe en nuestros seminarios web sobre las últimas tendencias en tecnología cloud." },
            { title: "Casos de Estudio", description: "Descubra cómo otras empresas han tenido éxito con nuestras soluciones." },
            { title: "Blog", description: "Lea nuestros artículos sobre las mejores prácticas y novedades en la industria." },
            { title: "Documentación Técnica", description: "Acceda a documentación detallada sobre nuestros servicios y soluciones." },
            { title: "Comunidad", description: "Únase a nuestra comunidad de desarrolladores y expertos en la nube." },
          ].map((resource, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{resource.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{resource.description}</p>
                <Button className="mt-4">Acceder</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  )
}