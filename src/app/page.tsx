"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Menu,
  X,
  Code2,
  Server,
  ShieldCheck,
  ChevronRight,
  ChevronDown
} from 'lucide-react';
import Chatbot from '@/components/Chatbot';

// --- DATA ---
const projects = [
  {
    title: "Xtreme Coaching",
    description: "Plateforme de coaching sportif en ligne proposant des programmes d'entraînement personnalisés et un suivi nutritionnel complet.",
    image: "/xtreme_coaching.png",
    link: "https://xtreme-coaching.vercel.app/",
    tags: ["Next.js", "Tailwind", "Freelance"]
  },
  {
    title: "HTM Auto Loc",
    description: "Service de location de véhicules simplifié permettant de consulter la flotte et de réserver facilement un véhicule.",
    image: "/htm_auto_loc.png",
    link: "https://htm-auto-loc.vercel.app/",
    tags: ["React", "Vite", "Booking"]
  },
  {
    title: "HTM Coaching",
    description: "Plateforme dédiée au développement personnel offrant des outils et un accompagnement quotidien.",
    image: "/htm_coaching.png",
    link: "https://htm-coaching.vercel.app/",
    tags: ["Next.js", "AI", "Design"]
  },
  {
    title: "Hopital Sejour",
    description: "Projet de gestion hospitalière permettant de suivre les séjours des patients et la disponibilité des lits. PHP/MySQL.",
    image: "/page_acceuille_hopitalsej.png",
    link: "https://github.com/LePereFouras/Hopitalsejour",
    tags: ["PHP", "MySQL", "Epitech"]
  },
  {
    title: "Application Mobile Hopital",
    description: "Application mobile React Native pour les soignants, accès rapide aux informations patients en temps réel.",
    image: "/projet2.png",
    link: "https://github.com/vvshadow/hpmobileyz",
    tags: ["React Native", "Mobile"]
  }
];

const skills = [
  { name: "Frontend", level: 95, icon: <Code2 size={20} />, items: ["React", "Next.js", "Tailwind", "JS/TS"] },
  { name: "Backend", level: 85, icon: <Server size={20} />, items: ["PHP", "Symfony", "Node.js", "SQL"] },
  { name: "Systèmes & Réseaux", level: 80, icon: <ShieldCheck size={20} />, items: ["Linux", "IoT", "Cybersécurité"] },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState('all');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-dark-bg selection:bg-primary/30">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-secondary/80 backdrop-blur-md py-4 border-b border-white/5' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold text-primary tracking-tighter"
          >
            M.Y
          </motion.div>

          <div className="hidden md:flex gap-8 items-center">
            {['Accueil', 'Projets', 'Compétences', 'Contact'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium hover:text-primary transition-colors">
                {item}
              </a>
            ))}
            <a href="/cv_nv_messaoudi_youssef.pdf" target="_blank" className="bg-primary hover:bg-primary/80 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-lg shadow-primary/20">
              Mon CV
            </a>
          </div>

          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="accueil" className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,_#2563EB_0%,_transparent_50%)]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-semibold tracking-widest text-sm uppercase mb-4 block">Développeur Full-Stack & Freelance</span>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Bonjour, je suis <br />
              <span className="text-gradient">Messaoudi Youssef</span>
            </h1>
            <p className="text-gray-400 text-lg mb-8 max-w-lg leading-relaxed">
              Étudiant à Epitech MSc, passionné par l&apos;innovation logicielle,
              le développement d&apos;interfaces modernes et la sécurité des systèmes.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#projets" className="bg-primary hover:bg-primary/80 text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-2 transition-all group">
                Voir mes travaux <ChevronRight className="group-hover:translate-x-1 transition-transform" />
              </a>
              <div className="flex gap-4 items-center px-4">
                <a href="https://github.com/LePereFouras" className="text-gray-400 hover:text-white transition-colors"><Github size={24} /></a>
                <a href="https://www.linkedin.com/in/youssef-m-a67a81234/" className="text-gray-400 hover:text-white transition-colors"><Linkedin size={24} /></a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden border-2 border-white/5 shadow-2xl">
              <Image
                src="/photo_de_profil.JPG"
                alt="Messaoudi Youssef"
                width={500}
                height={500}
                className="w-full object-cover"
              />
            </div>
            <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-[50%] -z-10" />
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projets" className="py-24 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Mes Réalisations</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-[#1e293b]/50 border border-white/5 rounded-3xl overflow-hidden hover:border-primary/50 transition-all"
              >
                <div className="h-52 overflow-hidden relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary to-transparent opacity-60" />
                </div>

                <div className="p-6">
                  <div className="flex gap-2 mb-4">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] uppercase font-bold tracking-wider px-2 py-1 bg-primary/10 text-primary rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-gray-400 text-sm line-clamp-2 mb-6">
                    {project.description}
                  </p>
                  <a
                    href={project.link}
                    target="_blank"
                    className="flex items-center gap-2 text-sm font-semibold text-white group/link"
                  >
                    Détails du projet <ExternalLink size={16} className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="compétences" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Expertise Technique</h2>
              <p className="text-gray-400 mb-10 leading-relaxed">
                Au cours de mon cursus à Epitech et de mes expériences professionnelles,
                j&apos;ai développé une polyvalence sur l&apos;ensemble de la stack technologique,
                du design d&apos;interface à l&apos;infrastructure sécurisée.
              </p>
              <div className="space-y-8">
                {skills.map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center gap-3">
                        <span className="text-primary">{skill.icon}</span>
                        <span className="font-bold">{skill.name}</span>
                      </div>
                      <span className="text-sm font-medium text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="h-full bg-primary"
                      />
                    </div>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {skill.items.map(item => (
                        <span key={item} className="text-[11px] text-gray-400 bg-white/5 px-2 py-0.5 rounded border border-white/5">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-primary/10 border border-primary/20 p-8 rounded-3xl text-center">
                <div className="text-4xl font-bold text-primary mb-2">3+</div>
                <div className="text-sm text-gray-400">Années d&apos;expérience</div>
              </div>
              <div className="bg-white/5 border border-white/10 p-8 rounded-3xl text-center mt-8">
                <div className="text-4xl font-bold text-white mb-2">15+</div>
                <div className="text-sm text-gray-400">Projets livrés</div>
              </div>
              <div className="bg-white/5 border border-white/10 p-8 rounded-3xl text-center">
                <div className="text-4xl font-bold text-white mb-2">100%</div>
                <div className="text-sm text-gray-400">Passion</div>
              </div>
              <div className="bg-primary/10 border border-primary/20 p-8 rounded-3xl text-center mt-8">
                <div className="text-4xl font-bold text-primary mb-2">Master</div>
                <div className="text-sm text-gray-400">En cours (Epitech)</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GitHub Activity Section */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">Activité Open Source</h2>
          <div className="p-8 bg-[#1e293b]/50 border border-white/5 rounded-[32px] overflow-hidden">
            <div className="overflow-x-auto">
              <img
                src="https://ghchart.rshah.org/2563EB/LePereFouras"
                alt="GitHub Chart"
                className="min-w-[800px] mx-auto filter drop-shadow(0 0 10px rgba(37,99,235,0.3))"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">On travaille ensemble ?</h2>
          <p className="text-gray-400 mb-10 max-w-xl mx-auto">
            Toujours ouvert pour de nouvelles opportunités de projets passionnants
            ou pour discuter de technologies.
          </p>
          <div className="flex justify-center gap-6 mb-16">
            <a href="mailto:contact@messaoudi.me" className="p-4 bg-white/5 rounded-2xl hover:bg-primary transition-all text-white group">
              <Mail />
            </a>
            <a href="https://linkedin.com" className="p-4 bg-white/5 rounded-2xl hover:bg-primary transition-all text-white">
              <Linkedin />
            </a>
            <a href="https://t.me/lrncorp" className="p-4 bg-white/5 rounded-2xl hover:bg-primary transition-all text-white">
              <ChevronRight />
            </a>
          </div>
          <p className="text-sm text-gray-600 font-medium tracking-widest uppercase">
            &copy; 2026 Messaoudi Youssef. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Chatbot overlay */}
      <Chatbot />
    </div>
  );
}
