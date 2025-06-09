import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export const Contact = () => (
  <section
    id="contact"
    className="relative py-16 px-4 bg-gradient-to-br from-slate-50/50 to-blue-50/50 dark:from-slate-900/50 dark:to-blue-950/50"
  >
    <div className="container mx-auto text-center">
      <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-electric via-lavender to-mint bg-clip-text text-transparent">
        ¿Interesado en colaborar?
      </h2>
      <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
        Estoy disponible para proyectos freelance y oportunidades de trabajo
        remoto. ¡Hablemos sobre tu próximo proyecto!
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          href="mailto:andrescampu1@gmail.com"
          className="inline-flex items-center justify-center px-6 py-3 rounded-md font-medium text-white bg-gradient-to-r from-electric to-lavender hover:from-lavender hover:to-mint transform hover:scale-105 transition-all duration-300 animate-pulse-glow shadow-md"
        >
          <Mail className="h-5 w-5 mr-2" />
          Enviar Email
        </Link>
        <Link
          href="https://www.linkedin.com/in/andr%C3%A9s-felipe-campuzano-cervantes-8aa002206/"
          target="_blank"
          className="inline-flex items-center justify-center px-6 py-3 rounded-md font-medium text-ocean border border-ocean hover:bg-ocean hover:text-white transform hover:scale-105 transition-all duration-300 shadow-sm"
        >
          <Linkedin className="h-5 w-5 mr-2" />
          LinkedIn
        </Link>
        <Link
          href="https://github.com/devACampuzano/"
          target="_blank"
          className="inline-flex items-center justify-center px-6 py-3 rounded-md font-medium text-mint border border-mint hover:bg-mint hover:text-white transform hover:scale-105 transition-all duration-300 shadow-sm"
        >
          <Github className="h-5 w-5 mr-2" />
          GitHub
        </Link>
      </div>
    </div>
  </section>
);
