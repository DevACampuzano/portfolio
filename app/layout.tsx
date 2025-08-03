import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Andrés Campuzano - Desarrollador Backend",
  description: "Portfolio personal de Andrés Campuzano, desarrollador backend.",
  keywords: [
    "Desarrollador Backend",
    "Andrés Campuzano",
    "Portfolio",
    "Node.js",
    "Express",
    "MongoDB",
    "API REST",
    "Desarrollo de Software",
    "Desarrollador Full Stack",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Desarrollador Web",
    "Programador Backend",
    "Desarrollador de Aplicaciones",
    "Ingeniero de Software",
    "React Native",
    "Developer",
    "Desarrollador de Sistemas",
    "Desarrollador de Aplicaciones Web",
    "Desarrollador de Aplicaciones Backend",
    "Desarrollador de Aplicaciones Node.js",
    "Desarrollador de Aplicaciones Express",
    "Desarrollador de Aplicaciones MongoDB",
    "Desarrollador de API REST",
    "Desarrollador de Software Backend",
    "Desarrollador de Software Full Stack",
    "Desarrollador de Software Node.js",
    "Desarrollador de Software Express",
    "Desarrollador de Software MongoDB",
    "Desarrollador de Software API REST",
    "Desarrollador de Aplicaciones Backend Node.js",
    "Desarrollador de Aplicaciones Backend Express",
    "Desarrollador de Aplicaciones Backend MongoDB",
    "Desarrollador de Aplicaciones Backend API REST",
    "Desarrollador de Aplicaciones Web Node.js",
    "Desarrollador de Aplicaciones Web Express",
    "Desarrollador de Aplicaciones Web MongoDB",
    "Desarrollador de Aplicaciones Web API REST",
    "Desarrollador de Aplicaciones Backend JavaScript",
    "Desarrollador de Aplicaciones Backend TypeScript",
    "Desarrollador de Aplicaciones Web JavaScript",
    "Desarrollador de Aplicaciones Web TypeScript",
    "Desarrollador de Aplicaciones Node.js JavaScript",
    "Desarrollador de Aplicaciones Node.js TypeScript",
    "Desarrollador de Aplicaciones Express JavaScript",
    "Desarrollador de Aplicaciones Express TypeScript",
  ],
  authors: [{ name: "Andrés Campuzano" }],
  creator: "Andrés Campuzano",
  icons: {
    icon: "/icon.png",
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
