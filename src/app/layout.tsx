import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pablo Castro | Software Developer & Optimization Specialist",
  description: "Portafolio profesional de Pablo Castro, Ingeniero en Informática enfocado en Desarrollo de Software y Optimización de Sistemas con Inteligencia Artificial aplicada a problemas del mundo real.",
  keywords: ["Desarrollo de Software", "Optimización", "Inteligencia Artificial", "SubsiMatch", "Ingeniería en Informática", "Chile", "Next.js", "Java", "Spring Boot", "TypeScript"],
  authors: [{ name: "Pablo Castro" }],
  openGraph: {
    title: "Pablo Castro | Software Developer & Optimization Specialist",
    description: "Ingeniero en Informática enfocado en Desarrollo de Software y Optimización de Sistemas con IA.",
    type: "website",
    locale: "es_CL",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${jetbrainsMono.variable} scroll-smooth h-full antialiased`}
    >
      <body className="min-h-full bg-bg-dark text-gray-200 font-sans selection:bg-neon-cyan selection:text-bg-dark flex flex-col">
        {children}
      </body>
    </html>
  );
}
