import {
  Database,
  ExternalLink,
  Github,
  Link,
  Rocket,
  Star,
  Zap,
} from "lucide-react";

const projects = [
  {
    title: "API REST E-commerce",
    description:
      "API completa para sistema de e-commerce con autenticación JWT, gestión de productos, carrito de compras y procesamiento de pagos.",
    technologies: ["Node.js", "Express", "MongoDB", "JWT", "Stripe"],
    github: "https://github.com/usuario/ecommerce-api",
    demo: "https://api-ecommerce-demo.com",
    status: "Producción",
    color: "from-electric to-ocean",
    icon: <Rocket className="h-6 w-6" />,
  },
  {
    title: "Microservicios de Inventario",
    description:
      "Sistema de microservicios para gestión de inventario con comunicación asíncrona, caching distribuido y monitoreo.",
    technologies: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Redis",
      "Docker",
      "Kubernetes",
    ],
    github: "https://github.com/usuario/inventory-microservices",
    demo: "https://inventory-api.com",
    status: "Desarrollo",
    color: "from-mint to-accent",
    icon: <Database className="h-6 w-6" />,
  },
  {
    title: "Sistema de Notificaciones",
    description:
      "Servicio escalable de notificaciones en tiempo real con soporte para email, SMS y push notifications.",
    technologies: ["Go", "Gin", "RabbitMQ", "WebSockets", "AWS SES"],
    github: "https://github.com/usuario/notification-service",
    demo: null,
    status: "Completado",
    color: "from-sunset to-coral",
    icon: <Zap className="h-6 w-6" />,
  },
  {
    title: "API de Analytics",
    description:
      "Plataforma de analytics para procesar grandes volúmenes de datos con endpoints optimizados y dashboards en tiempo real.",
    technologies: [
      "Java",
      "Spring Boot",
      "Apache Kafka",
      "ClickHouse",
      "Grafana",
    ],
    github: "https://github.com/usuario/analytics-api",
    demo: "https://analytics-dashboard.com",
    status: "Producción",
    color: "from-lavender to-primary",
    icon: <Star className="h-6 w-6" />,
  },
];

export const Projects = () => (
  <section
    id="projects"
    className="relative py-16 px-4 bg-gradient-to-br from-slate-50/50 to-purple-50/50 dark:from-slate-900/50 dark:to-purple-950/50"
  >
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-lavender to-mint bg-clip-text text-transparent">
        Proyectos Destacados
      </h2>
      <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group h-full rounded-lg overflow-hidden shadow-md hover:shadow-2xl dark:hover:shadow-electric/20 transition-all duration-500 transform hover:-translate-y-2 bg-white dark:bg-slate-800 border-0 animate-fade-in"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>
            <div className="p-6">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-3">
                  <div
                    className={`p-2 bg-gradient-to-r ${project.color} rounded-lg text-white group-hover:scale-110 transition-transform duration-300`}
                  >
                    {project.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-electric transition-colors duration-300">
                      {project.title}
                    </h3>
                    <span
                      className={`inline-flex px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        project.status === "Producción"
                          ? "bg-gradient-to-r from-mint to-accent text-white"
                          : project.status === "Desarrollo"
                          ? "bg-gradient-to-r from-sunset to-coral text-white"
                          : "bg-gradient-to-r from-electric to-lavender text-white"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                </div>
              </div>
              <p className="text-base text-gray-600 dark:text-gray-300 mt-3">
                {project.description}
              </p>
              <div className="mt-4 space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="inline-flex px-2.5 py-0.5 rounded-full text-xs font-medium border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-electric hover:text-white hover:border-electric transition-all duration-300 cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Link
                    href={project.github}
                    target="_blank"
                    className="inline-flex items-center px-3 py-1.5 rounded-md text-sm font-medium border border-electric text-electric hover:bg-electric hover:text-white transform hover:scale-105 transition-all duration-300"
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Código
                  </Link>
                  {project.demo && (
                    <Link
                      href={project.demo}
                      target="_blank"
                      className="inline-flex items-center px-3 py-1.5 rounded-md text-sm font-medium border border-lavender text-lavender hover:bg-lavender hover:text-white transform hover:scale-105 transition-all duration-300"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
