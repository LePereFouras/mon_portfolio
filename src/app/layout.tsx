import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Messaoudi Youssef | Ingénieur Informatique & Freelance",
  description: "Portfolio de Messaoudi Youssef (Epitech) — projets web et mobile, réseau et cybersécurité, avec veille technologique.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={`${inter.className} bg-dark-bg text-gray-100`}>
        {children}
      </body>
    </html>
  );
}
