"use client";
import {
  ChevronLeft,
  ChevronRight,
  Code,
  Database,
  Globe,
  Pause,
  Play,
  Server,
  Zap,
} from "lucide-react";
import React, { useEffect, useState } from "react";

const skills = [
  {
    category: "Lenguajes",
    items: [
      "Python",
      "Javascript",
      "Java",
      "TypeScript",
      "Dart",
      "SQL",
      "HTML",
      "CSS",
    ],
    color: "from-electric to-lavender",
    icon: <Code className="h-5 w-5" />,
  },
  {
    category: "Frameworks",
    items: [
      "Express.js",
      "Next.js",
      "Nest.js",
      "React.js",
      "React Native",
      "Node.js",
      "Flutter",
      "Spring Boot",
    ],
    color: "from-mint to-ocean",
    icon: <Server className="h-5 w-5" />,
  },
  {
    category: "Bases de Datos",
    items: [
      "PostgreSQL",
      "MongoDB",
      "MySQL",
      "MariaDB",
      "SQLite",
      "SQL Server",
      "Firebase",
      "DynamoDB",
    ],
    color: "from-sunset to-coral",
    icon: <Database className="h-5 w-5" />,
  },
  {
    category: "Cloud & DevOps",
    items: [
      "AWS",
      "Docker",
      "Kubernetes",
      "CI/CD",
      "Nginx",
      "Pm2",
      "GitHub Actions",
      "Terraform",
    ],
    color: "from-lavender to-electric",
    icon: <Globe className="h-5 w-5" />,
  },
  {
    category: "Herramientas",
    items: [
      "Git",
      "Postman",
      "Swagger",
      "Jira",
      "VS Code",
      "DBeaver",
      "Termius",
      "Obsidian",
    ],
    color: "from-ocean to-mint",
    icon: <Zap className="h-5 w-5" />,
  },
];
export function SkillsSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % skills.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [skills.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % skills.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + skills.length) % skills.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-2xl">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {skills.map((skillGroup, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <div className="mx-4">
                <div className="group rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl dark:hover:shadow-electric/20 transition-all duration-500 bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700 min-h-[400px]">
                  <div
                    className={`h-3 bg-gradient-to-r ${skillGroup.color}`}
                  ></div>

                  <div className="p-8 md:p-12">
                    <div className="text-center mb-8">
                      <div
                        className={`inline-flex p-4 bg-gradient-to-r ${skillGroup.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                      >
                        {React.cloneElement(skillGroup.icon, {
                          className: "h-12 w-12 text-white",
                        })}
                      </div>
                      <h3 className="text-3xl font-bold mb-4 group-hover:text-electric transition-colors duration-300">
                        {skillGroup.category}
                      </h3>
                      <div
                        className={`w-20 h-1 bg-gradient-to-r ${skillGroup.color} mx-auto rounded-full`}
                      ></div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {skillGroup.items.map((skill, skillIndex) => (
                        <div
                          key={skillIndex}
                          className="group/skill relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 p-2 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                          style={{ animationDelay: `${skillIndex * 0.1}s` }}
                        >
                          <div
                            className={`absolute inset-0 bg-gradient-to-r ${skillGroup.color} opacity-0 group-hover/skill:opacity-10 transition-opacity duration-300`}
                          ></div>
                          <div className="relative z-10">
                            <div
                              className={`w-3 h-3 rounded-full bg-gradient-to-r ${skillGroup.color} mb-3 group-hover/skill:scale-125 transition-transform duration-300`}
                            ></div>
                            <h4 className="font-semibold text-gray-800 dark:text-gray-200 text-sm group-hover/skill:text-electric transition-colors duration-300">
                              {skill}
                            </h4>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 text-center">
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600">
                        <div
                          className={`w-2 h-2 rounded-full bg-gradient-to-r ${skillGroup.color}`}
                        ></div>
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          {skillGroup.items.length} tecnologías
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute -left-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl border border-gray-200 dark:border-slate-600 hover:border-electric transition-all duration-300 group z-10"
        aria-label="Slide anterior"
      >
        <ChevronLeft className="h-6 w-6 text-gray-600 dark:text-gray-400 group-hover:text-electric transition-colors duration-300" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute -right-3 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl border border-gray-200 dark:border-slate-600 hover:border-electric transition-all duration-300 group z-10"
        aria-label="Slide siguiente"
      >
        <ChevronRight className="h-6 w-6 text-gray-600 dark:text-gray-400 group-hover:text-electric transition-colors duration-300" />
      </button>

      <div className="flex justify-center mt-4 gap-3">
        {skills.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-gradient-to-r from-electric to-lavender scale-125 shadow-lg"
                : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
            }`}
            aria-label={`Ir al slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="text-center mt-4">
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {currentSlide + 1} de {skills.length}
        </span>
      </div>
    </div>
  );
}
