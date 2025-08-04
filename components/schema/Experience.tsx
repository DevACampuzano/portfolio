import {
  Building2,
  Calendar,
  CheckCircle,
  Star,
  Target,
  Trophy,
} from "lucide-react";
import Link from "next/link";

function getElapsedTime(startDate: string, endDate: string = "presente") {
  // Asume formato "Mes Año" en español, ej: "Junio 2022"
  const monthsES = [
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "septiembre",
    "octubre",
    "noviembre",
    "diciembre",
  ];

  function parseDate(dateStr: string) {
    const [mesStr, añoStr] = dateStr.toLowerCase().split(" ");
    const month = monthsES.indexOf(mesStr);
    const year = parseInt(añoStr, 10);
    if (month === -1 || isNaN(year)) return null;
    return new Date(year, month, 1);
  }

  const start = parseDate(startDate);
  const end =
    endDate && endDate.toLowerCase() !== "presente"
      ? parseDate(endDate)
      : new Date();

  if (!start || !end) return "";

  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth();

  if (months < 0) {
    years--;
    months += 12;
  }

  let durationStr = "";
  if (years > 0) {
    durationStr += years === 1 ? "1 año" : `${years} años`;
  }
  if (months > 0) {
    durationStr += years > 0 ? ` ${months} meses` : `${months} meses`;
  }
  if (years > 2 && months === 0) {
    durationStr = `${years}+ años`;
  }

  return durationStr;
}

const workExperience = [
  {
    company: "Fundación IDI",
    position: "Senior Full Stack Developer",
    startDate: "Junio 2022",
    endDate: "Presente",
    duration: getElapsedTime("Junio 2022"),
    link: "https://fundacionidi.edu.co/",
    technologies: [
      "TypeScript",
      "React.js",
      "React Native",
      "Flutter",
      "MUI",
      "Semantic UI",
      "Node.js",
      "Express.js",
      "GraphQL",
      "Sequelize",
      "MySQL",
      "Docker",
      "Linux",
      "PM2",
      "GIT",
      "GitHub Actions",
      "NGINX",
      "AWS",
      "Unity 2D",
      "Unity 3D",
      "C#",
      "Vuforia",
    ],
    functions: [
      "Desarrollo de servicios backend utilizando Express.js.",
      "Creación de interfaces web con React.js, empleando Material-UI, componentes reutilizables y buenas prácticas de diseño.",
      "Desarrollo de aplicaciones móviles con React Native y/o Flutter, adaptadas a los requerimientos del cliente.",
      "Preparación y publicación de aplicaciones móviles en App Store y Google Play Store.",
      "Aplicación de buenas prácticas de desarrollo en proyectos asignados y personales.",
      "Implementación de CI/CD con GitHub Actions y despliegue en AWS.",
    ],
    achievements: [
      "Completé varios proyectos exitosamente utilizando diferentes stacks tecnológicos y adaptándolos a las necesidades específicas del cliente.",
      "Aprendí Unity de forma autodidacta para llevar a cabo un proyecto de realidad aumentada, ampliando mi conocimiento más allá del stack tradicional.",
      "He profundizado mi dominio en distintas tecnologías mediante proyectos personales enfocados en resolver problemas reales.",
    ],
    color: "from-[#33405b] to-[#b3d9da]",
  },
  {
    company: "Asoandes",
    position: "Monitor",
    startDate: "Septiembre 2024",
    endDate: "Presente",
    duration: getElapsedTime("Septiembre 2024"),
    link: "https://www.asoandes.org/",
    technologies: [],
    functions: [
      "Apoyo integral en la implementación de procesos formativos del programa de habilidades digitales, dentro del marco del proyecto Talento Tech del MinTIC.",
      "Asistencia a los profesores antes, durante y después de las clases.",
      "Soporte técnico y pedagógico a través de la plataforma educativa.",
      "Verificación continua del cumplimiento del plan de estudios.",
      "Elaboración de informes semanales sobre el progreso y calidad del programa.",
    ],
    achievements: [
      "Contribuí a la mejora de la experiencia educativa mediante la implementación y optimización de estrategias innovadoras de aprendizaje.",
      "Aseguré la calidad del programa formativo mediante seguimiento estructurado y reportes avalados por la coordinación del proyecto.",
      "Apoyé de manera efectiva el cumplimiento de los objetivos del programa Talento Tech, orientado al fortalecimiento de habilidades digitales en poblaciones beneficiarias del MinTIC.",
    ],
    color: "from-[#4796b3] to-[#ad1c28]",
  },
  {
    company: "CoderLabs",
    position: "Full Stack Developer",
    startDate: "Marzo 2024",
    endDate: "Febrero 2025",
    duration: getElapsedTime("Marzo 2024", "Febrero 2025"),
    link: "https://www.coderlabs.co/",
    technologies: [
      "TypeScript",
      "React.js",
      "Next.js",
      "React Native",
      "MUI",
      "Node.js",
      "Bun.js",
      "Nest",
      "Express.js",
      "GraphQL",
      "Sequelize",
      "MySQL",
      "MongoDB",
      "Docker",
      "Linux",
      "PM2",
      "GIT",
      "GitHub Actions",
      "NGINX",
      "AWS",
    ],
    functions: [
      "Desarrollo de interfaces de usuario dinámicas con componentes reutilizables y mantenibles utilizando Material-UI (MUI).",
      "Implementación de APIs y servicios backend eficientes usando Express para aplicaciones simples y Nest.js para arquitecturas más complejas y modulares.",
      "Diseño y administración de bases de datos NoSQL (MongoDB) y SQL (MySQL).",
      "Configuración y gestión de servicios en la nube en AWS, incluyendo EC2, RDS, S3, entre otros.",
    ],
    achievements: [
      "Construí interfaces altamente reutilizables, mejorando la mantenibilidad del frontend y reduciendo el tiempo de desarrollo en nuevos módulos.",
      "Implementé arquitecturas backend escalables con Nest.js, facilitando la organización del código y el crecimiento modular de las aplicaciones.",
      "Diseñé esquemas de base de datos eficientes que optimizaron el rendimiento y la consulta de datos tanto en entornos relacionales como no relacionales.",
      "Automaticé y gestioné exitosamente entornos en la nube, mejorando la disponibilidad y escalabilidad de las aplicaciones desplegadas.",
    ],
    color: "from-[#f3a44d] to-[#232323]",
  },
  {
    company: "InnoGrowth / ContentCraft",
    position: "Backend Developer",
    startDate: "Diciembre 2023",
    endDate: "Julio 2024",
    duration: getElapsedTime("Diciembre 2023", "Julio 2024"),
    link: "https://www.innogrowth.co/",
    technologies: [
      "TypeScript",
      "Node.js",
      "Bun.js",
      "Nest",
      "Express.js",
      "GraphQL",
      "Sequelize",
      "MySQL",
      "MongoDB",
      "Docker",
      "Linux",
      "PM2",
      "GIT",
      "GitHub Actions",
      "NGINX",
      "AWS",
    ],
    functions: [
      "Configuración y mantenimiento de entornos de desarrollo y producción mediante Docker Compose.",
      "Administración y configuración de servidores Linux.",
      "Gestión y monitoreo de aplicaciones Node.js en producción utilizando PM2.",
    ],
    achievements: [
      "Impulsé la adopción de Bun.js como alternativa a Node.js en tareas específicas, logrando una optimización significativa del rendimiento en ciertas aplicaciones.",
      "Estandaricé el uso de Docker Compose, facilitando la replicación de entornos y mejorando la eficiencia en el ciclo de desarrollo.",
      "Mejoré la estabilidad y control de aplicaciones productivas mediante la implementación efectiva de PM2 en servidores Linux.",
    ],
    color: "from-[#fff] to-[#a46bff]",
  },
  {
    company: "Hypersoft.co",
    position: "Web Developer",
    startDate: "Julio 2021",
    endDate: "Junio 2022",
    duration: getElapsedTime("Julio 2021", "Junio 2022"),
    link: "https://hypersoft.co/",
    technologies: ["Java EE", "UIPath", "C#", "MySQL", "PostgreSQL", "AWS"],
    functions: [
      "Migración de servicios a nuevas tecnologías como Java y AngularJS para adaptarse a los requerimientos de distintos proyectos.",
      "Automatización de procesos internos mediante UIPath, orientada a la eficiencia operativa.",
      "Optimización de la lógica de aplicaciones internas para mejorar su rendimiento y mantenibilidad.",
      "Generación de informes de datos relacionados con solicitudes de clientes y proyectos en curso.",
    ],
    achievements: [
      "Lideré exitosamente la migración tecnológica de servicios clave, modernizando la infraestructura y mejorando la estabilidad de los proyectos.",
      "Automaticé procesos repetitivos, reduciendo tiempos de ejecución y errores manuales, mediante la implementación de robots con UIPath.",
      "Contribuí a la mejora del rendimiento de aplicaciones internas al optimizar su lógica y estructura.",
      "Generé reportes de datos que facilitaron la toma de decisiones en relación con las solicitudes de clientes, mejorando la visibilidad del estado de los proyectos.",
    ],
    color: "from-[#00122a] via-[#00b4d8] to-[#fff]",
  },
  {
    company: "Megamas S.A.S",
    position: "Auxiliar de Sistemas",
    startDate: "Diciembre 2020",
    endDate: "Julio 2021",
    duration: getElapsedTime("Diciembre 2020", "Julio 2021"),
    link: "https://megamas.co/content/23-quienes-somos",
    technologies: ["C#", "Microsoft SQL Server", "SQLite", "Android", "Java"],
    functions: [
      "Apoyo en diversos proyectos asignados al Director de Sistemas de Información, relacionados con los servicios de la empresa.",
      "Desarrollo de aplicaciones utilizando C# y SQL Server, alineadas a las necesidades operativas de la empresa.",
      "Mantenimiento preventivo del software utilizado internamente para asegurar su correcto funcionamiento.",
    ],
    achievements: [
      "Contribuí activamente al desarrollo de soluciones internas mediante la creación de aplicaciones personalizadas que optimizaron procesos empresariales.",
      "Aseguré la continuidad operativa del software mediante tareas de mantenimiento preventivo, reduciendo incidencias técnicas.",
      "Apoyé de forma efectiva en proyectos clave del área de Sistemas de Información, mejorando la eficiencia y el soporte tecnológico de la empresa.",
    ],
    color: "from-[#ff5000] to-[#003097]",
  },
];

export const Experience = () => (
  <section
    id="experience"
    className="relative py-16 px-4 bg-gradient-to-br from-slate-50/50 to-blue-50/50 dark:from-slate-900/50 dark:to-blue-950/50"
  >
    <div className="container mx-auto">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-mint to-ocean bg-clip-text text-transparent">
          Experiencia Laboral
        </h2>

        <div className="space-y-8">
          {workExperience.map((job, index) => (
            <div
              key={index}
              className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl dark:hover:shadow-electric/20 transition-all duration-500 bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`h-2 bg-gradient-to-r ${job.color}`}></div>
              <div className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  {/* Company Info */}
                  <div className="lg:w-1/3">
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className={`p-3 bg-gradient-to-r ${job.color} rounded-lg group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Building2 className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <Link
                          href={job.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                            {job.company}
                          </h3>
                        </Link>

                        <p className="text-lg font-semibold text-electric">
                          {job.position}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                        <Calendar className="h-4 w-4" />
                        <span className="text-sm">
                          {job.startDate} - {job.endDate}
                        </span>
                      </div>
                      <div className="inline-flex px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-electric/10 to-lavender/10 text-electric border border-electric/20">
                        {job.duration}
                      </div>
                    </div>

                    {/* Technologies */}
                    {job.technologies.length > 0 && (
                      <div className="mt-6">
                        <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                          Tecnologías Utilizadas
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {job.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="inline-flex px-2.5 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 text-gray-700 dark:text-gray-200 hover:from-electric hover:to-lavender hover:text-white transition-all duration-300 cursor-default"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Job Details */}
                  <div className="lg:w-2/3">
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Functions */}
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4 flex items-center gap-2">
                          <Target className="h-5 w-5 text-electric" />
                          Funciones Principales
                        </h4>
                        <ul className="space-y-2">
                          {job.functions.map((func, funcIndex) => (
                            <li
                              key={funcIndex}
                              className="flex items-start gap-2 text-gray-600 dark:text-gray-400"
                            >
                              <CheckCircle className="h-4 w-4 text-mint mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-justify">
                                {func}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Achievements */}
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4 flex items-center gap-2">
                          <Trophy className="h-5 w-5 text-sunset" />
                          Logros Destacados
                        </h4>
                        <ul className="space-y-2">
                          {job.achievements.map((achievement, achIndex) => (
                            <li
                              key={achIndex}
                              className="flex items-start gap-2 text-gray-600 dark:text-gray-400"
                            >
                              <Star className="h-4 w-4 text-sunset mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-justify">
                                {achievement}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
