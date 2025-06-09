import { Code, Database, Globe, Rocket, Server, Star, Zap } from "lucide-react";

export const AboutMe = () => (
  <section id="about" className="relative py-16 px-4">
    <div className="container mx-auto">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-electric to-lavender bg-clip-text text-transparent">
          Sobre mí
        </h2>

        {/* Main Profile Card */}
        <div className="mb-12 animate-fade-in">
          <div className="group rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl dark:hover:shadow-electric/20 transition-all duration-500 bg-gradient-to-br from-white via-blue-50/50 to-purple-50/50 dark:from-slate-800 dark:via-slate-700 dark:to-slate-600 border border-gray-100 dark:border-slate-600">
            <div className="p-8 md:p-12">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                {/* Profile Image Placeholder */}
                <div className="flex-shrink-0">
                  <div className="w-40 h-40 md:w-60 md:h-60 rounded-full bg-gradient-to-br from-electric via-lavender to-mint p-1 group-hover:scale-105 transition-transform duration-300">
                    <div className="w-full h-full rounded-full bg-white dark:bg-slate-800 flex items-center justify-center overflow-hidden">
                      <img
                        src="/profile.jpeg"
                        alt="Foto de perfil"
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                  </div>
                </div>

                {/* Profile Content */}
                <div className="flex-1 text-center lg:text-left">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-electric to-lavender bg-clip-text text-transparent">
                    Andrés Felipe Campuzano Cervantes
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    Ingeniero de Sistemas Egresado de la{" "}
                    <span className="font-semibold text-electric">
                      Universidad de la Costa (CUC)
                    </span>
                    , con amplia experiencia como desarrollador{" "}
                    <span className="font-semibold text-lavender">
                      Full Stack
                    </span>
                    . Especializado en el diseño y desarrollo de soluciones
                    tecnológicas personalizadas, tanto en aplicaciones web como
                    móviles.
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Capacidad para ofrecer soluciones eficientes, escalables y
                    orientadas a resultados, cumpliendo con altos estándares de
                    calidad. Alta adaptabilidad al trabajo en equipo,
                    metodologías ágiles y compromiso con la mejora continua en
                    el desarrollo de software.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Programming Languages */}
          <div
            className="group rounded-xl overflow-hidden shadow-md hover:shadow-xl dark:hover:shadow-electric/20 transition-all duration-500 transform hover:-translate-y-2 bg-gradient-to-br from-white to-blue-50 dark:from-slate-800 dark:to-slate-700 border-0 animate-fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="h-1 bg-gradient-to-r from-electric to-ocean"></div>
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gradient-to-r from-electric to-ocean rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <Code className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-lg font-bold text-electric">Lenguajes</h4>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-electric"></div>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">
                    Java
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-lavender"></div>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">
                    JavaScript
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-ocean"></div>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">
                    TypeScript
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-ocean"></div>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">
                    Dart
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Frontend Frameworks */}
          <div
            className="group rounded-xl overflow-hidden shadow-md hover:shadow-xl dark:hover:shadow-electric/20 transition-all duration-500 transform hover:-translate-y-2 bg-gradient-to-br from-white to-emerald-50 dark:from-slate-800 dark:to-slate-700 border-0 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="h-1 bg-gradient-to-r from-mint to-accent"></div>
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gradient-to-r from-mint to-accent rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-lg font-bold text-mint">Frontend</h4>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-mint"></div>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">
                    React.js
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent"></div>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">
                    React Native
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-black"></div>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">
                    Next.js
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-ocean"></div>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">
                    Flutter
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Backend & APIs */}
          <div
            className="group rounded-xl overflow-hidden shadow-md hover:shadow-xl dark:hover:shadow-electric/20 transition-all duration-500 transform hover:-translate-y-2 bg-gradient-to-br from-white to-amber-50 dark:from-slate-800 dark:to-slate-700 border-0 animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="h-1 bg-gradient-to-r from-sunset to-coral"></div>
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gradient-to-r from-sunset to-coral rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <Server className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-lg font-bold text-sunset">Backend</h4>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-sunset"></div>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">
                    Express.js
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-coral"></div>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">
                    Nest.js
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-coral"></div>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">
                    APIs RESTful
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-electric"></div>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">
                    Microservicios
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Databases */}
          <div
            className="group rounded-xl overflow-hidden shadow-md hover:shadow-xl dark:hover:shadow-electric/20 transition-all duration-500 transform hover:-translate-y-2 bg-gradient-to-br from-white to-purple-50 dark:from-slate-800 dark:to-slate-700 border-0 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="h-1 bg-gradient-to-r from-lavender to-electric"></div>
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gradient-to-r from-lavender to-electric rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <Database className="h-6 w-6 text-white" />
                </div>
                <h4 className="text-lg font-bold text-lavender">
                  Bases de Datos
                </h4>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-lavender"></div>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">
                    SQL
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-electric"></div>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">
                    NoSQL
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-mint"></div>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">
                    Administración
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Methodology & Values */}
        <div
          className="mt-12 animate-fade-in"
          style={{ animationDelay: "0.5s" }}
        >
          <div className="rounded-2xl overflow-hidden shadow-lg bg-gradient-to-r from-electric/5 via-lavender/5 to-mint/5 dark:from-electric/10 dark:via-lavender/10 dark:to-mint/10 border border-gray-100 dark:border-slate-600">
            <div className="p-8">
              <h4 className="text-xl font-bold text-center mb-6 bg-gradient-to-r from-electric to-mint bg-clip-text text-transparent">
                Metodología & Valores
              </h4>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="inline-flex p-3 bg-gradient-to-r from-electric to-lavender rounded-full mb-3">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <h5 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                    Metodologías Ágiles
                  </h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Adaptabilidad y trabajo en equipo
                  </p>
                </div>
                <div className="text-center">
                  <div className="inline-flex p-3 bg-gradient-to-r from-mint to-accent rounded-full mb-3">
                    <Star className="h-6 w-6 text-white" />
                  </div>
                  <h5 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                    Altos Estándares
                  </h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Calidad y excelencia en cada proyecto
                  </p>
                </div>
                <div className="text-center">
                  <div className="inline-flex p-3 bg-gradient-to-r from-sunset to-coral rounded-full mb-3">
                    <Rocket className="h-6 w-6 text-white" />
                  </div>
                  <h5 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                    Mejora Continua
                  </h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Compromiso con la innovación
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);
