"use client";
import { Code, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import React from "react";

export const Header = ({ isVisible }: { isVisible: boolean }) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="relative border-b bg-white/80 dark:bg-slate-900/80 backdrop-blur-md transition-colors duration-500">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div
          className={`flex items-center space-x-2 ${
            isVisible ? "animate-slide-in-left" : "opacity-0"
          }`}
        >
          <div className="p-2 bg-gradient-to-r from-electric to-lavender rounded-lg">
            <Code className="h-6 w-6 text-white" />
          </div>
          {/* <span className="text-xl font-bold bg-gradient-to-r from-electric to-lavender bg-clip-text text-transparent">
            Mi Portafolio
          </span> */}
        </div>
        <div className="flex items-center gap-4">
          <nav
            className={`hidden md:flex space-x-6 ${
              isVisible ? "animate-slide-in-right" : "opacity-0"
            }`}
          >
            <Link
              href="#about"
              className="text-gray-500 dark:text-gray-400 hover:text-electric transition-colors duration-300"
            >
              Sobre mí
            </Link>
            <Link
              href="#experience"
              className="text-gray-500 dark:text-gray-400 hover:text-mint transition-colors duration-300"
            >
              Experiencia
            </Link>
            <Link
              href="#education"
              className="text-gray-500 dark:text-gray-400 hover:text-sunset transition-colors duration-300"
            >
              Educación
            </Link>
            <Link
              href="#projects"
              className="text-gray-500 dark:text-gray-400 hover:text-lavender transition-colors duration-300"
            >
              Proyectos
            </Link>
            <Link
              href="#contact"
              className="text-gray-500 dark:text-gray-400 hover:text-electric transition-colors duration-300"
            >
              Contacto
            </Link>
          </nav>
          {/* Theme Toggle Button */}
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-md border border-electric/20 hover:border-electric hover:bg-electric/10 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-electric/30"
              aria-label="Toggle theme"
            >
              {theme !== "dark" ? (
                <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-gray-700" />
              ) : (
                <Moon className="h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-gray-300" />
              )}
              <span className="sr-only">Toggle theme</span>
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
