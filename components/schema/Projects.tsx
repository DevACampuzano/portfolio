import { ExternalLink, Github, Globe, Smartphone } from "lucide-react";

const projects = [
  {
    title: "CatBreeds",
    description:
      "Aplicación móvil desarrollada con React Native para explorar razas de gatos, ver características detalladas y buscar razas específicas usando TheCatAPI.",
    technologies: ["React Native", "TypeScript", "TheCatAPI"],
    github: "https://github.com/DevACampuzano/CatBreeds",
    demo: null,
    status: "Completado",
    color: "from-lavender to-primary",
    icon: <Smartphone className="h-6 w-6" />,
  },
  {
    title: "Fitzone",
    description:
      "Una aplicación móvil para la gestión de clases de fitness y reservas de gimnasio, desarrollada con React Native con un sistema de push notifications.",
    technologies: [
      "React Native",
      "TypeScript",
      "Node.js",
      "Express.js",
      "Mysql",
    ],
    github: [
      "https://github.com/DevACampuzano/Fitzone",
      "https://github.com/DevACampuzano/Fitzone_Backend",
    ],
    demo: null,
    status: "Completado",
    color: "from-sunset to-coral",
    icon: <Smartphone className="h-6 w-6" />,
  },
  {
    title: "Maps-App",
    description:
      "Aplicación web desarrollada con React y TypeScript para visualización de mapas interactivos utilizando la API de Mapbox.",
    technologies: ["React", "TypeScript", "Mapbox API"],
    github: "https://github.com/DevACampuzano/maps-app",
    demo: "https://maps-app-acampuzanodev.netlify.app/",
    status: "Producción",
    color: "from-[#000] to-[#fff]",
    icon: <Globe className="h-6 w-6" />,
  },
  {
    title: "Rick and Morty App",
    description:
      "Aplicación web desarrollada con React y JavaScript para visualizar personajes de la serie Rick and Morty utilizando la API de Rick and Morty. Desarrollada durante una clase impartida en Talento Tech Oriente.",
    technologies: ["React", "JavaScript", "Rick and Morty API", "MUI"],
    github: "https://github.com/DevACampuzano/Rick_and_Morty_App",
    demo: "https://talentotech-rick-and-morty.netlify.app/",
    status: "Producción",
    color: "from-[#242424] to-[#0a6fc7]",
    icon: <Globe className="h-6 w-6" />,
  },
  {
    title: "Dragon Ball App",
    description:
      "Aplicación web desarrollada con React y JavaScript para visualizar personajes de la serie Dragon Ball utilizando la API de Dragon Ball. Desarrollada durante una clase impartida en Talento Tech Oriente.",
    technologies: ["React", "JavaScript", "Dragon Ball API", "MUI"],
    github: "https://github.com/DevACampuzano/dragon-ball",
    demo: "https://dragon-ball-talento-tech.netlify.app/",
    status: "Producción",
    color: "from-[#101214] to-[#ed6c03]",
    icon: <Globe className="h-6 w-6" />,
  },
  {
    title: "Pokedex",
    description:
      "Aplicación web desarrollada con React y TypeScript para visualizar personajes de la serie Dragon Ball utilizando Poke API. Desarrollada durante una clase impartida en Talento Tech Oriente.",
    technologies: ["React", "TypeScript", "Poke API", "MUI"],
    github: [
      "https://github.com/DevACampuzano/pokedex",
      "https://github.com/DevACampuzano/pokedex-api",
    ],
    demo: "https://pokedex-talento-tech-oriente.netlify.app/",

    status: "Producción",
    color: "from-[#253237] to-[#222222]",
    icon: <Globe className="h-6 w-6" />,
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
              <p className="text-base text-gray-600 dark:text-gray-300 mt-3 text-justify">
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
                  {typeof project.github === "string" ? (
                    <a
                      href={project.github}
                      target="_blank"
                      className="rounded-md text-sm font-medium border border-electric text-electric hover:bg-electric hover:text-white transform hover:scale-105 transition-all duration-300 p-1"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  ) : (
                    project.github.map((url, index) => (
                      <a
                        key={index}
                        href={url}
                        target="_blank"
                        className="rounded-md text-sm font-medium border border-electric text-electric hover:bg-electric hover:text-white transform hover:scale-105 transition-all duration-300 p-1"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                    ))
                  )}

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      className="rounded-md text-sm font-medium border border-lavender text-lavender hover:bg-lavender hover:text-white transform hover:scale-105 transition-all duration-300 p-1"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
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
