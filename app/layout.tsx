import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Andrés Campuzano - Desarrollador Backend",
  description:
    "Andrés Felipe Campuzano Cervantes Ingeniero de Sistemas Egresado de la Universidad de la Costa (CUC), con amplia experiencia como desarrollador Full Stack. Especializado en el diseño y desarrollo de soluciones tecnológicas personalizadas, tanto en aplicaciones web como móviles. Capacidad para ofrecer soluciones eficientes, escalables y orientadas a resultados, cumpliendo con altos estándares de calidad. Alta adaptabilidad al trabajo en equipo, metodologías ágiles y compromiso con la mejora continua en el desarrollo de software.",
  keywords: [
    "Andrés Campuzano",
    "desarrollador fullstack",
    "desarrollador web",
    "desarrollador móvil",
    "aplicaciones móviles",
    "desarrollo web",
    "frontend",
    "backend",
    "programación",
    "JavaScript",
    "React",
    "Node.js",
    "React Native",
    "desarrollo iOS",
    "desarrollo Android",
    "soluciones escalables",
    "Next.js",
    "TypeScript",
    "MongoDB",
    "MySQL",
    "Express.js",
    "API REST",
    "bases de datos",
    "Nest.js",
    "desarrollo de software",
    "automatización de procesos",
    "RPA",
    "automatización",
  ],
  authors: [{ name: "Andrés Campuzano" }],
  creator: "Andrés Campuzano",
  icons: {
    icon: "/icon.png",
  },
  openGraph: {
    url: "https://andres.campuzano.dev/",
    type: "website",
    title: "Andrés Campuzano - Desarrollador Full Stack",
    description:
      "Portfolio personal de Andrés Campuzano, desarrollador backend. Especializado en el diseño y desarrollo de soluciones tecnológicas personalizadas, tanto en aplicaciones web como móviles.",
    images: {
      url: "https://opengraph.b-cdn.net/production/images/2acae078-0dd2-4ef6-a4e6-68cb0c3c1d3c.png?token=vKjKCf62IZfbz4vwdPgaVlFP5v7uJXAIexrU_3Ajebg&height=347&width=1200&expires=33290243209",
      height: 347,
      width: 1200,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: "Andrés Campuzano - Desarrollador Full Stack",
    description:
      "Portfolio personal de Andrés Campuzano, desarrollador backend. Especializado en el diseño y desarrollo de soluciones tecnológicas personalizadas, tanto en aplicaciones web como móviles.",
    images: [
      {
        url: "https://opengraph.b-cdn.net/production/images/2acae078-0dd2-4ef6-a4e6-68cb0c3c1d3c.png?token=vKjKCf62IZfbz4vwdPgaVlFP5v7uJXAIexrU_3Ajebg&height=347&width=1200&expires=33290243209",
        width: 1200,
        height: 347,
        alt: "Andrés Campuzano - Desarrollador Full Stack",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
