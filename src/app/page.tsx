"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
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
  ChevronDown,
  Send,
  FileText
} from 'lucide-react';
import Chatbot from '@/components/Chatbot';

// --- DATA ---
const projects = [
  {
    title: "Xtreme Coaching",
    description: "Plateforme de coaching sportif en ligne proposant des programmes d'entraînement personnalisés et un suivi nutritionnel complet.",
    image: "/xtreme_coaching.png",
    link: "https://xtreme-coaching.vercel.app/",
    tags: ["Next.js", "Tailwind", "Freelance"],
    docs: []
  },
  {
    title: "HTM Auto Loc",
    description: "Service de location de véhicules simplifié permettant de consulter la flotte et de réserver facilement un véhicule.",
    image: "/htm_auto_loc.png",
    link: "https://htm-auto-loc.vercel.app/",
    tags: ["React", "Vite", "Booking"],
    docs: []
  },
  {
    title: "HTM Coaching",
    description: "Plateforme dédiée au développement personnel offrant des outils et un accompagnement quotidien.",
    image: "/htm_coaching.png",
    link: "https://htm-coaching.vercel.app/",
    tags: ["Next.js", "AI", "Design"],
    docs: []
  },
  {
    title: "Hopital Sejour",
    description: "Projet de gestion hospitalière permettant de suivre les séjours des patients et la disponibilité des lits. PHP/MySQL.",
    image: "/page_acceuille_hopitalsej.png",
    link: "https://s5-5471.nuage-peda.fr/Hopitalsejour/hopitalsej/public/index.php/login",
    tags: ["PHP", "MySQL", "Epitech"],
    docs: [
      { label: "Doc Utilisateur", url: "https://www.dropbox.com/scl/fi/f3jkwqqjw7ycqzx3jqs30/doc_utilisateur_hopitalSej.pdf?rlkey=vbq7e5e3f02vaa0h8w6ck66ev&e=1&st=fgt637tm&dl=0" },
      { label: "GLPI", url: "http://146.59.199.251:8080/front/central.php" },
      { label: "GitHub", url: "https://github.com/LePereFouras/Hopitalsejour" }
    ]
  },
  {
    title: "App Mobile Hopital",
    description: "Application mobile React Native pour les soignants, accès rapide aux informations patients en temps réel.",
    image: "/projet2.png",
    link: "https://github.com/vvshadow/hpmobileyz",
    tags: ["React Native", "Mobile"],
    docs: [
      { label: "Doc Utilisateur", url: "https://www.dropbox.com/scl/fi/f3jkwqqjw7ycqzx3jqs30/doc_utilisateur_hopitalSej.pdf?rlkey=vbq7e5e3f02vaa0h8w6ck66ev&e=1&st=fgt637tm&dl=0" },
      { label: "GitHub", url: "https://github.com/vvshadow/hpmobileyz" }
    ]
  },
  {
    title: "Site Association Pongiste",
    description: "Gestion des membres et inscriptions aux tournois pour une association de tennis de table.",
    image: "/page_acceuille_pongiste.png",
    link: "http://192.168.1.34/",
    tags: ["Web", "Asso"],
    docs: [
      { label: "Rapport Mission", url: "https://www.dropbox.com/scl/fi/8injmmpzbpckm3t9sy2kt/Rapport-de-Mission-_-Infrastructure-Informatique-pour-notre-Association.pdf?rlkey=arnpy0n1qdr3gtdgypqwghc0g&e=1&st=wfa84y2p&dl=0" },
      { label: "Doc Technique", url: "https://www.dropbox.com/preview/documentation_technique_association_pongiste.pdf?context=standalone_preview&role=personal" }
    ]
  },
  {
    title: "Falcon Marketing",
    description: "Site vitrine moderne pour une agence de marketing digital (SEO, Ads).",
    image: "/page_acceuille_falcon.png",
    link: "https://falconmarketing.fr/",
    tags: ["Marketing", "SEO"],
    docs: [
      { label: "GitHub", url: "https://github.com/Yannis-Alouache/falcon-marketing" }
    ]
  },
  {
    title: "Script d'Affectation",
    description: "Script Python automatisant la configuration réseau et l'attribution d'IP.",
    image: "/code_python2.png",
    link: "https://www.dropbox.com/scl/fi/ikd6fkr87s15h55n6xjw3/Code_Pyhton.png?rlkey=9gfhmjcy99qbhenk8hiwhr8rz&e=1&st=z1ozf0qf&dl=0",
    tags: ["Python", "Réseau"],
    docs: [
      { label: "Doc Technique", url: "https://www.dropbox.com/scl/fi/sdfrphgmyaib3dczq9z2j/doc_technique_script.pdf?rlkey=izan97ykfidsc69x6idw7q3j8&st=18csu83v&dl=0" }
    ]
  },
  {
    title: "Classics Nutrition",
    description: "E-commerce spécialisé dans la vente de compléments alimentaires sportifs.",
    image: "/site_classicsnutrition.png",
    link: "https://classicsnutrition.com",
    tags: ["Shopify", "E-commerce"],
    docs: [
      { label: "Doc Technique", url: "/Documentation Technique – Classics Nutrition.pdf" }
    ]
  },
  {
    title: "LRN SHOP",
    description: "Boutique en ligne multi-catégories optimisée pour le mobile.",
    image: "/lrnshop_eu.png",
    link: "https://lrnshop.eu",
    tags: ["E-commerce", "Fluid"],
    docs: [
      { label: "Doc Technique", url: "/Documentation Technique – LRN SHOP.pdf" }
    ]
  },
  {
    title: "Installation Raspberry Pi",
    description: "Serveur domestique sécurisé pour hébergement de services locaux et cloud perso.",
    image: "/raspberry_pi2.png",
    link: "https://www.dropbox.com/scl/fi/mg3pz1fwpdd83xs157xi5/doc_technique_raspberry_pi.pdf?rlkey=9tf74wb306gcl3nobs59i91z9&e=1&st=ori2wa3c&dl=0",
    tags: ["IoT", "Linux"],
    docs: [
      { label: "Fiche Besoin", url: "https://www.dropbox.com/scl/fi/wvq0cs7o7yvc6ussof2i3/fiche_besoin_raspberry_pi.pdf?rlkey=snn5gd7ue973tyfn9onkmntp6&st=ysphw1ic&dl=0" }
    ]
  }
];

const timeline = [
  { date: "01 Nov 2024", title: "IBM Heron II dévoilé", description: "Processeur Heron II de 156 qubits avec performances améliorées.", type: "Quantum" },
  { date: "03 Nov 2024", title: "Premiers L-couplers", description: "Interconnexion de plusieurs puces quantiques via L-couplers.", type: "Innovation" },
  { date: "08 Mai 2025", title: "Résultats IonQ T1 2025", description: "Chiffre d'affaires en hausse pour le leader de l'ion piégé.", type: "Finance" }
];

const allSkills = [
  { name: "HTML", info: "Structures web sémantiques et accessibles.", icon: "https://cdn-icons-png.flaticon.com/512/732/732212.png" },
  { name: "CSS", info: "Designs responsives, animations et mises en page complexes.", icon: "https://cdn-icons-png.flaticon.com/512/732/732190.png" },
  { name: "Bootstrap", info: "Interfaces rapides et professionnelles.", icon: "https://cdn-icons-png.flaticon.com/512/5968/5968672.png" },
  { name: "JavaScript", info: "Fonctionnalités interactives et dynamiques.", icon: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png" },
  { name: "Java", info: "POO et applications desktop robustes.", icon: "https://cdn-icons-png.flaticon.com/512/226/226777.png" },
  { name: "React", info: "Interfaces modernes avec composants réutilisables.", icon: "https://cdn-icons-png.flaticon.com/512/1126/1126012.png" },
  { name: "PHP", info: "Développement back-end dynamique.", icon: "https://cdn-icons-png.flaticon.com/512/5968/5968332.png" },
  { name: "SQL", info: "Conception et optimisation de bases relationnelles.", icon: "https://cdn-icons-png.flaticon.com/512/29/29165.png" },
  { name: "Python", info: "Scripting, automatisation et analyse.", icon: "https://cdn-icons-png.flaticon.com/512/5968/5968286.png" },
  { name: "Symfony", info: "Framework PHP pour applications robustes.", icon: "https://symfony.com/logos/symfony_black_03.png" },
  { name: "Tailwind", info: "Styling utility-first moderne.", icon: "https://images.seeklogo.com/logo-png/35/1/tailwind-css-logo-png_seeklogo-354675.png" },
  { name: "MongoDB", info: "Bases de données NoSQL flexibles.", icon: "https://www.mongodb.com/assets/images/global/leaf.png" }
];

export default function Home() {
  const [activeProject, setActiveProject] = useState<any>(null);
  const [activeSkill, setActiveSkill] = useState<any>(null);
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
            {['Accueil', 'Projets', 'Compétences', 'Veille', 'Contact'].map((item) => (
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
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-primary font-semibold tracking-widest text-sm uppercase mb-4 block">Ingénieur Informatique / Freelance</span>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Bonjour, je suis <br />
              <span className="text-gradient uppercase">Messaoudi Youssef</span>
            </h1>
            <p className="text-gray-400 text-lg mb-8 max-w-lg leading-relaxed">
              Étudiant à Epitech MSc, spécialisé dans le développement full-stack,
              le réseau et la cybersécurité. Transformons vos idées en solutions numériques.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#projets" className="bg-primary hover:bg-primary/80 text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-2 transition-all shadow-xl shadow-primary/20">
                Explorer mes projets <ChevronRight size={20} />
              </a>
              <div className="flex gap-4 items-center px-4">
                <a href="https://github.com/LePereFouras" className="text-gray-400 hover:text-white transition-colors" target="_blank"><Github size={24} /></a>
                <a href="https://www.linkedin.com/in/youssef-m-a67a81234/" className="text-gray-400 hover:text-white transition-colors" target="_blank"><Linkedin size={24} /></a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative justify-self-center md:justify-self-end"
          >
            <div className="relative z-10 rounded-full overflow-hidden border-4 border-primary shadow-2xl w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
              <Image src="/photo_de_profil.JPG" alt="Messaoudi Youssef" fill className="object-cover" />
            </div>
            <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full -z-10 animate-pulse" />
          </motion.div>
        </div>
      </section>

      {/* Skills Section (Restored Card Logic) */}
      <section id="compétences" className="py-24 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Mes Compétences</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Découvrez mon expertise technique. Cliquez sur une carte pour en savoir plus.</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {allSkills.map((skill, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05, translateY: -5 }}
                onClick={() => setActiveSkill(skill)}
                className="bg-white/5 border border-white/5 p-6 rounded-[2rem] flex flex-col items-center justify-center cursor-pointer hover:border-primary/50 transition-all aspect-square text-center group"
              >
                <div className="relative w-12 h-12 mb-4">
                  <Image src={skill.icon} alt={skill.name} fill className="object-contain group-hover:drop-shadow-[0_0_8px_rgba(37,99,235,0.6)]" />
                </div>
                <span className="text-sm font-bold opacity-80 group-hover:opacity-100">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section (Restored Docs/Buttons) */}
      <section id="projets" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 uppercase">Mes Réalisations</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group relative bg-[#1e293b]/30 border border-white/5 rounded-3xl overflow-hidden hover:border-primary/50 transition-all flex flex-col"
              >
                <div className="h-52 overflow-hidden relative">
                  <Image src={project.image} alt={project.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 to-transparent" />
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold mb-2 text-primary">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-6 flex-1">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.docs.map((doc: any, i) => (
                      <a
                        key={i}
                        href={doc.url}
                        target="_blank"
                        className="text-[10px] px-3 py-1.5 bg-white/5 hover:bg-primary/20 border border-white/10 rounded-lg flex items-center gap-1.5 transition-colors"
                      >
                        <FileText size={12} /> {doc.label}
                      </a>
                    ))}
                  </div>

                  <div className="flex gap-3 mt-auto pt-4 border-t border-white/5">
                    <a href={project.link} target="_blank" className="flex-1 bg-primary/20 hover:bg-primary text-white text-center py-2.5 rounded-xl text-xs font-bold transition-all border border-primary/20 flex items-center justify-center gap-2 group/btn">
                      Visiter <ExternalLink size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                    <button
                      onClick={() => setActiveProject(project)}
                      className="flex-1 border border-white/10 hover:border-primary/50 py-2.5 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 bg-white/5"
                    >
                      Détails <ChevronDown size={14} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Veille Technologique (Restored Timeline & Telegram) */}
      <section id="veille" className="py-24 bg-secondary/10 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 uppercase">Veille Technologique</h2>
            <p className="text-gray-400 italic font-medium -mt-2 tracking-widest text-xs uppercase">Informatique Quantique & Trends</p>
          </div>

          <div className="relative">
            <div className="absolute left-[19px] top-0 bottom-0 w-0.5 bg-primary/30" />
            <div className="space-y-12">
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="relative pl-12 group"
                >
                  <div className="absolute left-0 w-10 h-10 bg-dark-bg border-4 border-primary rounded-full flex items-center justify-center z-10 group-hover:scale-110 transition-transform">
                    <div className="w-2 h-2 bg-primary rounded-full animate-ping" />
                  </div>
                  <div className="bg-white/5 border border-white/5 p-6 rounded-2xl hover:border-primary/30 transition-all">
                    <span className="text-primary font-bold text-xs tracking-tighter block mb-1 uppercase">{item.date}</span>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mt-16 flex flex-col sm:flex-row justify-center items-center gap-4">
            <a href="https://www.dropbox.com/scl/fi/o1kfj5ol1n7lbhj9lvloa/Veille_techno_doc.pdf?rlkey=t09igbf5aoknwcblqw8epaa8g&e=1&st=mdff7jnd&dl=0" target="_blank" className="bg-primary/10 border border-primary/20 text-white px-8 py-3.5 rounded-2xl text-sm font-bold hover:bg-primary transition-all flex items-center gap-2">
              <FileText size={18} /> Documentation de Veille
            </a>
            <a href="https://t.me/lrncorp" target="_blank" className="bg-[#0088cc] text-white px-8 py-3.5 rounded-2xl text-sm font-bold hover:bg-[#24a1de] transition-all flex items-center gap-2 shadow-lg shadow-[#0088cc]/20 group">
              <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /> Canal Telegram
            </a>
          </div>
        </div>
      </section>

      {/* GitHub Activity */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12 uppercase tracking-tight">Mon activité GitHub</h2>
          <div className="p-8 bg-white/5 border border-white/5 rounded-[3rem] overflow-hidden">
            <div className="overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-primary">
              <img src="https://ghchart.rshah.org/2563EB/LePereFouras" alt="GitHub Chart" className="min-w-[800px] mx-auto filter drop-shadow(0 0 10px rgba(37,99,235,0.4))" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section (Restored Email Action) */}
      <section id="contact" className="py-24 bg-secondary/5">
        <div className="max-w-xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-2 uppercase">Contact</h2>
            <p className="text-gray-400">Une question ? Un projet ? Échangeons maintenant.</p>
          </div>

          <div className="bg-white/5 border border-white/10 p-10 rounded-[2.5rem] shadow-2xl">
            <form action="https://formspree.io/f/xovewkzo" method="POST" className="space-y-6">
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 ml-1">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full bg-dark-bg border border-white/10 rounded-2xl p-4 text-sm focus:outline-none focus:border-primary transition-all text-white placeholder-gray-600"
                  placeholder="votre-email@exemple.com"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 ml-1">Message</label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  className="w-full bg-dark-bg border border-white/10 rounded-2xl p-4 text-sm focus:outline-none focus:border-primary transition-all text-white placeholder-gray-600 resize-none"
                  placeholder="Décrivez votre projet..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary/80 py-4 rounded-2xl font-bold text-sm text-white transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-2 group"
              >
                Envoyer le message <Send size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>

            <div className="mt-8 text-center border-t border-white/5 pt-8 flex flex-col gap-2">
              <span className="text-[10px] uppercase font-bold text-gray-500 tracking-widest">Email direct</span>
              <a href="mailto:lrn_corp@protpn.me" className="text-primary font-bold hover:underline">lrn_corp@protpn.me</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-primary font-bold text-2xl tracking-tighter">M.Y</div>
          <p className="text-xs text-gray-500 font-medium tracking-widest uppercase">&copy; 2026 Copyright all rights reserved</p>
          <div className="flex gap-4">
            <a href="https://www.linkedin.com/in/youssef-m-a67a81234/" className="p-3 bg-white/5 rounded-xl hover:bg-primary transition-all group">
              <Linkedin size={20} className="text-white group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>
      </footer>

      {/* MODALS */}
      <AnimatePresence>
        {activeProject && (
          <div className="fixed inset-0 z-[10000] flex items-center justify-center p-6">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setActiveProject(null)} className="absolute inset-0 bg-dark-bg/90 backdrop-blur-xl" />
            <motion.div initial={{ scale: 0.9, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.9, opacity: 0, y: 20 }} className="relative bg-[#1e293b] border border-white/10 p-8 rounded-[2rem] max-w-lg w-full shadow-2xl overflow-hidden">
              <button onClick={() => setActiveProject(null)} className="absolute top-6 right-6 text-gray-400 hover:text-white"><X size={24} /></button>
              <div className="text-primary text-[10px] uppercase font-bold tracking-widest mb-2">Détails du projet</div>
              <h3 className="text-3xl font-bold mb-6 text-white">{activeProject.title}</h3>
              <p className="text-gray-400 leading-relaxed mb-8">{activeProject.description}</p>
              <div className="flex gap-4">
                <a href={activeProject.link} target="_blank" className="flex-1 bg-primary py-3 rounded-2xl text-center font-bold text-sm shadow-xl shadow-primary/30">Visiter maintenant</a>
              </div>
            </motion.div>
          </div>
        )}

        {activeSkill && (
          <div className="fixed inset-0 z-[10000] flex items-center justify-center p-6">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setActiveSkill(null)} className="absolute inset-0 bg-dark-bg/90 backdrop-blur-xl" />
            <motion.div initial={{ scale: 0.9, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.9, opacity: 0, y: 20 }} className="relative bg-[#1e293b] border border-white/10 p-8 rounded-[2rem] max-w-sm w-full shadow-2xl text-center">
              <button onClick={() => setActiveSkill(null)} className="absolute top-6 right-6 text-gray-400 hover:text-white"><X size={24} /></button>
              <div className="w-20 h-20 mx-auto mb-6 relative">
                <Image src={activeSkill.icon} alt={activeSkill.name} fill className="object-contain" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-primary uppercase">{activeSkill.name}</h3>
              <p className="text-gray-200 leading-relaxed">{activeSkill.info}</p>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Chatbot />
    </div>
  );
}
