import { Rocket, Star, Zap } from "lucide-react";

export const Methodology = () => (
  <div className="mt-12 animate-fade-in" style={{ animationDelay: "0.5s" }}>
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
);
