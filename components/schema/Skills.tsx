import { Code, Database, Globe, Server, Zap } from "lucide-react";
import { SkillsSlider } from "./SkillsSlider";

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
export const Skills = () => {
  return (
    <section id="skills" className="relative py-16">
      <div className="md:hidden sm:flex sm:flex-col">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-sunset to-coral bg-clip-text text-transparent">
          Habilidades Técnicas
        </h2>
        <SkillsSlider />
      </div>
      <div className="hidden md:flex md:container md:mx-auto md:flex-col">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-sunset to-coral bg-clip-text text-transparent">
          Habilidades Técnicas
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skills.map((skillGroup, index) => (
            <div
              key={index}
              className="group rounded-lg overflow-hidden shadow-md hover:shadow-2xl dark:hover:shadow-electric/20 transition-all duration-500 transform hover:-translate-y-2 bg-white dark:bg-slate-800 border-0 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`h-2 bg-gradient-to-r ${skillGroup.color}`}></div>
              <div className="p-6">
                <div className="flex items-center gap-3">
                  <div
                    className={`p-2 bg-gradient-to-r ${skillGroup.color} rounded-lg text-white group-hover:scale-110 transition-transform duration-300`}
                  >
                    {skillGroup.icon}
                  </div>
                  <h3 className="text-lg font-bold group-hover:text-electric transition-colors duration-300">
                    {skillGroup.category}
                  </h3>
                </div>
                <div className="mt-4">
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="inline-flex px-2.5 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 text-gray-700 dark:text-gray-200 hover:from-electric hover:to-lavender hover:text-white transition-all duration-300 cursor-default transform hover:scale-105"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
