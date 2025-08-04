import { Award, ExternalLinkIcon, GraduationCap } from "lucide-react";
import Link from "next/link";

const courses = [
  {
    institution: "Devtalles",
    degree: "TanStack Query - Un poderoso gestor de estado asíncrono.",
    year: "2025",
    certificateImage: "/certificados/certificate-364546937.jpg",
    description:
      "TanStack Query, React.js, TypeScript, React Hooks, Tailwind CSS.",
    color: "from-[#1d1238] to-[#fff]",
    url: "https://cursos.devtalles.com/certificates/hx7gxrrwnw",
  },
  {
    institution: "Udemy",
    degree: "React PRO: Lleva tus bases al siguiente nivel",
    year: "2025",
    certificateImage:
      "/certificados/UC-699c5d38-1d8e-4c67-a5db-4f6126ee1f05.jpg",
    description:
      "PWA, Workbox, TypeScript, Storybook, TSDX, NPM, Formik, Lazyload",
    color: "from-[#a336f1] to-[#fff]",
    url: "https://www.udemy.com/certificate/UC-699c5d38-1d8e-4c67-a5db-4f6126ee1f05/",
  },
  {
    institution: "Udemy",
    degree: "Principios SOLID y Clean Code",
    year: "2024",
    certificateImage:
      "/certificados/UC-3ec90f81-9fc1-44ec-a266-9af46e1c1927.jpg",
    description:
      "Principios SOLID, Ciencias de la información, Desarrollo de software",
    color: "from-[#a336f1] to-[#fff]",
    url: "https://www.udemy.com/certificate/UC-3ec90f81-9fc1-44ec-a266-9af46e1c1927/",
  },
  {
    institution: "Udemy",
    degree: "Docker - Guía práctica de uso para desarrolladores",
    year: "2024",
    certificateImage:
      "/certificados/UC-b71ceb96-fbde-43e1-a29a-26ba4eeaeb96.jpg",
    description:
      "Docker, Kubernetes, GitHub Actions, Docker compose - multi-container applications, Repositorios privados y despliegues, Construcción de imágenes, Deployments Digital Ocean, Dockerfile y multi-stage build, Uso de imágenes, redes, volúmenes, Docker CLI",
    color: "from-[#a336f1] to-[#fff]",
    url: "https://www.udemy.com/certificate/UC-b71ceb96-fbde-43e1-a29a-26ba4eeaeb96/",
  },
  {
    institution: "Udemy",
    degree: "React: Aplicaciones en tiempo real con Socket-io",
    year: "2024",
    certificateImage:
      "/certificados/UC-d2104a87-223f-42b2-bb17-dc85ec0856f8.jpg",
    description:
      "Socket.io, Express.js, JSON Web Token (JWT), Mapbox, RXJS Subjects, MongoDB",
    color: "from-[#a336f1] to-[#fff]",
    url: "https://www.udemy.com/certificate/UC-d2104a87-223f-42b2-bb17-dc85ec0856f8/",
  },
  {
    institution: "Udemy",
    degree: "React: De cero a experto ( Hooks y MERN )",
    year: "2024",
    certificateImage:
      "/certificados/UC-de5be097-6b8c-4bf3-8dc2-7b387eb85f60.jpg",
    description:
      "React.js, material ui, context, JavaScript, TypeScript, React Hooks, Jest, Redux.js",
    color: "from-[#a336f1] to-[#fff]",
    url: "https://www.udemy.com/certificate/UC-de5be097-6b8c-4bf3-8dc2-7b387eb85f60/",
  },
  {
    institution: "Udemy",
    degree: "Node - De cero a experto",
    year: "2023",
    certificateImage:
      "/certificados/UC-41ac0ff3-335d-4530-9650-f76fe92dd892.jpg",
    description:
      "SQL, JavaScript, TypeScript, Web Services API, MongoDB, Socket.io, carga de archivos, Node.js, MySQL, Mongoose, Express.js, JSON Web Token (JWT), Sockets, REST Server",
    color: "from-[#a336f1] to-[#fff]",
    url: "https://www.udemy.com/certificate/UC-41ac0ff3-335d-4530-9650-f76fe92dd892/",
  },
  {
    institution: "Udemy",
    degree: "React Native CLI: Aplicaciones nativas para IOS y Android",
    year: "2023",
    certificateImage:
      "/certificados/UC-18db1319-dc1f-49db-be58-4f8e338a30f7.jpg",
    description:
      "TypeScript, React Native CLI, Google y Apple maps, cámara, GPS, polylines, hooks, autenticación",
    color: "from-[#a336f1] to-[#fff]",
    url: "https://www.udemy.com/certificate/UC-18db1319-dc1f-49db-be58-4f8e338a30f7/",
  },
  {
    institution: "HackerRank",
    degree: "Java (Basic)",
    year: "2022",
    certificateImage: "certificados/java-basic.png",
    description:
      "It will cover basic topics in Java language such as classes, data structures, inheritance, exception handling, etc. You are expected to be proficient in either Java 7 or Java 8.",
    color: "from-[#0e141e] to-[#14813a]",
    url: "https://www.hackerrank.com/certificates/bab928b26b9b",
  },
  {
    institution: "Udemy",
    degree: "RPA - Máster Automatización de Procesos con  UiPath",
    year: "2021",
    certificateImage:
      "/certificados/UC-f3d93438-eldb-4a9a-bdd5-fa162c0b3f04.png",
    description: "",
    color: "from-[#a336f1] to-[#fff]",
    url: "/certificados/UC-f3d93438-eldb-4a9a-bdd5-fa162c0b3f04.pdf",
  },
  {
    institution: "Certika",
    degree: "Participante: Blockchain más allá de las criptomonedas",
    year: "2024",
    certificateImage: "/certificados/certilex.png",
    description:
      "Adaptabilidad y Pensamiento Innovador, Comunicación Efectiva sobre Conceptos Técnicos, Pensamiento Crítico y Resolución de Problemas, Conciencia Ética y Responsabilidad Social.",
    color: "from-[#02898f] to-[#05b8ba]",
    url: "https://app.certika.co/certificate/ODA4OTY=",
  },
  {
    institution: "Certika",
    degree:
      "Webinar: Innovaciones en IA para la detección de retinopatía hipertensiva o diabética",
    year: "2024",
    certificateImage: "/certificados/iavisioncare.png",
    description: "",
    color: "from-[#02898f] to-[#05b8ba]",
    url: "https://app.certika.co/certificate/OTI3NzU=",
  },
];

export const Courses = () => {
  return (
    <section id="education" className="relative py-16 px-4">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-sunset to-coral bg-clip-text text-transparent">
            Cursos y Certificaciones
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses
              .sort((a, b) => parseInt(b.year) - parseInt(a.year))
              .map((course, index) => (
                <div
                  key={index}
                  className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl dark:hover:shadow-electric/20 transition-all duration-500 transform hover:-translate-y-2 bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`h-2 bg-gradient-to-r ${course.color}`}></div>

                  {/* Certificate Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={course.certificateImage || "/placeholder.svg"}
                      alt={`Certificado ${course.degree}`}
                      className="w-full h-48 object-contain group-hover:scale-105 transition-transform duration-500 p-5"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-4 right-4">
                      <div
                        className={`p-2 bg-gradient-to-r ${course.color} rounded-lg shadow-lg`}
                      >
                        <Award className="h-5 w-5 text-white" />
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <div
                        className={`p-2 bg-gradient-to-r ${course.color} rounded-lg group-hover:scale-110 transition-transform duration-300`}
                      >
                        <GraduationCap />
                      </div>
                      <span className="inline-flex px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-electric/10 to-lavender/10 text-electric border border-electric/20">
                        {course.year}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-2 group-hover:text-electric transition-colors duration-300">
                      {course.degree}
                    </h3>

                    <p className="text-electric font-semibold mb-3">
                      {course.institution}
                    </p>

                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed text-justify">
                      {course.description}
                    </p>
                    {course.url && (
                      <div className="mt-4 pt-4 border-t border-gray-100 dark:border-slate-700">
                        <Link
                          href={course.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-medium text-electric hover:text-lavender transition-colors duration-300"
                        >
                          <ExternalLinkIcon className="h-4 w-4" />
                          Ver Certificado
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};
