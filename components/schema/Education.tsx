import { Award, ExternalLinkIcon, GraduationCap } from "lucide-react";
import Link from "next/link";

const education = [
  {
    institution: "Universidad de la Costa (CUC)",
    degree: "Ingeniería de Sistemas",
    year: "2023",
    certificateImage: "/certificados/Prof_Ing_Sistemas.png",
    description: "",
    color: "from-[#a2161a] to-[#c9a227]",
    url: "https://app.certika.co/badges/MTE1ODM",
  },
  {
    institution: "Universidad de la Costa (CUC)",
    degree: "Tecnologías de software para la industria 4.0",
    year: "2023",
    certificateImage: "/logo_cuc.png",
    description:
      "Next.js, React.js, Node.js, TypeScript, JavaScript, Amazon Web Services (AWS), Ubuntu",
    color: "from-[#a2161a] to-[#c9a227]",
    // url: "#",
  },
];

export const Education = () => (
  <section id="education" className="relative py-16 px-4">
    <div className="container mx-auto">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-sunset to-coral bg-clip-text text-transparent">
          Educación Profesional
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl dark:hover:shadow-electric/20 transition-all duration-500 transform hover:-translate-y-2 bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`h-2 bg-gradient-to-r ${edu.color}`}></div>

              {/* Certificate Image */}
              <div className="relative overflow-hidden">
                <img
                  src={edu.certificateImage || "/placeholder.svg"}
                  alt={`Certificado ${edu.degree}`}
                  className="w-full h-48 object-contain group-hover:scale-105 transition-transform duration-500 px-5"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4">
                  <div
                    className={`p-2 bg-gradient-to-r ${edu.color} rounded-lg shadow-lg`}
                  >
                    <Award className="h-5 w-5 text-white" />
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <div
                    className={`p-2 bg-gradient-to-r ${edu.color} rounded-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <GraduationCap />
                  </div>
                  <span className="inline-flex px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-electric/10 to-lavender/10 text-electric border border-electric/20">
                    {edu.year}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-2 group-hover:text-electric transition-colors duration-300">
                  {edu.degree}
                </h3>

                <p className="text-electric font-semibold mb-3">
                  {edu.institution}
                </p>

                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed text-justify">
                  {edu.description}
                </p>

                {edu.url && (
                  <div className="mt-4 pt-4 border-t border-gray-100 dark:border-slate-700">
                    <Link
                      href={edu.url}
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
