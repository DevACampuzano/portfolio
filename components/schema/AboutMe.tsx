import { Skills } from "./Skills";
import { Methodology } from "./Methodology";

export const AboutMe = () => (
  <section id="about" className="relative py-16 px-4">
    <div className="container mx-auto">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-electric to-lavender bg-clip-text text-transparent">
          Sobre mí
        </h2>

        <div className="mb-12 animate-fade-in">
          <div className="group rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl dark:hover:shadow-electric/20 transition-all duration-500 bg-gradient-to-br from-white via-blue-50/50 to-purple-50/50 dark:from-slate-800 dark:via-slate-700 dark:to-slate-600 border border-gray-100 dark:border-slate-600">
            <div className="p-8 md:p-12">
              <div className="flex flex-col lg:flex-row items-center gap-8">
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
        <Skills />
        <Methodology />
      </div>
    </div>
  </section>
);
