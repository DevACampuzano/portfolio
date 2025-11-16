"use client";
// import Link from "next/link";
import React from "react";

export const Hero = ({ isVisible }: { isVisible: boolean }) => (
  <section className="relative py-20 px-4 overflow-hidden">
    <div className="container mx-auto text-center relative z-10">
      <div className="max-w-4xl mx-auto">
        <div className={`${isVisible ? "animate-bounce-in" : "opacity-0"}`}>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-electric via-lavender to-mint bg-clip-text text-transparent">
              Desarrollador Full Stack
            </span>
            <span className="block bg-gradient-to-r from-sunset via-coral to-electric bg-clip-text text-transparent">
              Especializado en APIs
            </span>
          </h1>
        </div>
        <p
          className={`text-xl text-gray-600 dark:text-gray-300 mb-8 ${isVisible ? "animate-fade-in" : "opacity-0"
            }`}
          style={{ animationDelay: "0.3s" }}
        >
          Creo sistemas robustos, escalables y eficientes. Especializado en
          arquitecturas de microservicios, APIs RESTful y soluciones
          cloud-native.
        </p>
      </div>
    </div>
  </section>
);
