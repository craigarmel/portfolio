"use client";

import React, { useState, useEffect } from 'react';
import { ChevronDown, Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Code, Briefcase, GraduationCap, User, Star, Calendar, Globe } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState(false);
  type Particle = {
    id: number;
    left: number;
    top: number;
    animationDelay: number;
    animationDuration: number;
  };
  const [particles, setParticles] = useState<Particle[]>([]);

  // Générer les particules côté client uniquement
  useEffect(() => {
    setIsVisible(true);
    const generatedParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      animationDelay: Math.random() * 2,
      animationDuration: 2 + Math.random() * 2
    }));
    setParticles(generatedParticles);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
  };

  const experiences = [
    {
      title: "Développeur Fullstack - Stage Expercem",
      location: "PARIS",
      period: "À partir de Juin 2024",
      description: "Refonte d'un site e-commerce avec architecture moderne et interface optimisée",
      details: ["Développement du système de gestion produits/commandes avec MongoDB"],
      tech: ["React", "TypeScript", "MongoDB", "Développement full-stack"]
    },
    {
      title: "Développeur Frontend - Stage Maisons du Monde",
      location: "Paris",
      period: "Juillet 2024",
      description: "Optimisation de l'accessibilité du site avec Vue.js",
      details: ["Amélioration de 50% du score d'audit RGAA"],
      tech: ["RGAA", "ARIA", "Vue.js", "TailwindCSS", "Tsx"]
    },
    {
      title: "Développeur Frontend - Hackathon LCL",
      location: "Paris",
      period: "Septembre 2024",
      description: "Conception et réalisation d'une interface intuitive pour le chatbot LCL",
      details: ["Exploitation de Colab Enterprise, BigQuery et python pour l'analyse avancée"],
      tech: ["Google Cloud", "BigQuery", "SQL", "Next.js", "JavaScript"]
    }
  ];

  const projects = [
    {
      title: "Dockyard Website",
      location: "Portsmouth - UK",
      period: "Mai 2025",
      description: "Refonte complète d'un site piraté avec architecture sécurisée",
      details: ["Développement d'un moteur de recherche pour explorer les archives"],
      tech: ["JWT", "MongoDB", "Express.js", "React.js", "Vite", "TailwindCSS"]
    },
    {
      title: "Ziggla Booking Website",
      location: "Paris",
      period: "Avril 2025",
      description: "Intégration de la réservation via compte Google",
      details: ["Architecture Micro-service API Gateway"],
      tech: ["React", "JavaScript", "ExpressJS", "NodeJS", "MongoDB", "Google APIs"]
    },
    {
      title: "Docx - Éditeur Collaboratif",
      location: "EFREI - Paris",
      period: "Février 2025",
      description: "Développement d'un éditeur collaboratif de texte en ligne",
      details: ["Édition en temps réel et partage de session"],
      tech: ["React", "Node.js", "WebSocket", "ExpressJS"]
    }
  ];

  const skills = {
    languages: ["CSS", "HTML", "JavaScript", "SQL", "Python", "Java", "PHP", "Kotlin", "TypeScript"],
    frameworks: ["Express.js", "React", "Vue.js", "TailwindCSS", "Next.js", "Angular"],
    technologies: ["GitHub", "Google Cloud", "BigQuery", "MongoDB", "PostgreSQL", "MySQL", "Node.js", "AWS", "Docker"],
    tools: ["Figma", "Visual Studio Code", "IntelliJ", "Postman"]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
        <div className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
          <a href="#"><img src="favicon.ico" alt="" /></a>
        </div>
        <div className="hidden md:flex space-x-8">
          {['hero', 'about', 'experience', 'projects', 'skills', 'contact'].map((section) => (
          <button
            key={section}
            onClick={() => scrollToSection(section)}
            className={`capitalize transition-all duration-300 hover:text-pink-400 ${
            activeSection === section ? 'text-pink-400' : 'text-white/80'
            }`}
          >
            {section === 'hero' ? 'Accueil' : section === 'about' ? 'À propos' : section === 'experience' ? 'Expériences' : section === 'projects' ? 'Projets' : section === 'skills' ? 'Compétences' : 'Contact'}
          </button>
          ))}
        </div>
        </div>
      </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20"></div>
      <div className="absolute inset-0">
          {particles.map((particle) => (
            <div
              key={particle.id}
              className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse"
              style={{
                left: `${particle.left}%`,
                top: `${particle.top}%`,
                animationDelay: `${particle.animationDelay}s`,
                animationDuration: `${particle.animationDuration}s`
              }}
            />
          ))}
        </div>

      <div className={`relative z-10 w-full max-w-7xl h-auto mx-auto px-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Layout Mobile - Colonne */}
        <div className="relative top-30 left-25% right-25% flex-col items-center text-center md:hidden">
        {/* Photo Mobile */}
        <div className="mb-8">
          <div className="relative group">
          <div className="absolute -inset-6 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 rounded-full blur-xl opacity-60 group-hover:opacity-80 transition-all duration-1000 animate-pulse"></div>
          <div className="relative w-48 h-48">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/30 via-purple-500/30 to-cyan-500/30 rounded-full"></div>
            <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/20 shadow-2xl">
            <img 
              src="craig-profile.png" 
              alt="Craig Armel"
              className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
              style={{
              filter: 'drop-shadow(0 0 20px rgba(168, 85, 247, 0.4))'
              }}
            />
            </div>
          </div>
          </div>
        </div>

        {/* Contenu Mobile */}
        <h1 className="text-4xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
          Craig Armel
        </h1>
        <h2 className="text-xl sm:text-2xl mb-6 text-white/90 font-light">
          Développeur Fullstack
        </h2>
        <p className="text-lg sm:text-xl mb-8 text-white/80 max-w-2xl leading-relaxed">
          Étudiant à l'EFREI, je développe des solutions qui répondent à de vrais besoins. 
          Je recherche une équipe ambitieuse pour construire des applications à impact.
        </p>

        {/* Logos Mobile */}
        <div className="mb-8">
          <p className="text-base text-white/70 mb-6">Expérience avec :</p>
          <div className="flex justify-center items-center gap-4 flex-wrap">
          <div className="group">
            <img 
            src="/efrei.png" 
            alt="EFREI"
            className="h-10 opacity-80 hover:opacity-100 transition-all duration-300 transform group-hover:scale-110 filter brightness-0 invert"
            />
          </div>
          <div className="group">
            <img 
            src="/expercem.png" 
            alt="Expercem"
            className="h-10 opacity-80 hover:opacity-100 transition-all duration-300 transform group-hover:scale-110 filter"
            />
          </div>
          <div className="group">
            <img 
            src="/mdm.png" 
            alt="Maisons du Monde"
            className="h-10 opacity-80 hover:opacity-100 transition-all duration-300 transform group-hover:scale-110 filter brightness-0 invert"
            />
          </div>
          <div className="group">
            <img 
            src="/lcl.png" 
            alt="LCL"
            className="h-10 opacity-80 hover:opacity-100 transition-all duration-300 transform group-hover:scale-110 filter"
            />
          </div>
          <div className="group">
            <img 
            src="/ecam.png" 
            alt="ECAM LaSalle"
            className="h-10 opacity-80 hover:opacity-100 transition-all duration-300 transform group-hover:scale-110 filter brightness-0 invert"
            />
          </div>
          </div>
        </div>

        {/* Boutons Mobile */}
        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
          <button
          onClick={() => scrollToSection('projects')}
          className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full font-semibold hover:from-pink-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
          Voir mes projets
          </button>
          <button
          onClick={() => scrollToSection('contact')}
          className="px-6 py-3 border-2 border-white/30 rounded-full font-semibold hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
          >
          Me contacter
          </button>
        </div>
        </div>

        {/* Layout Desktop - Split Screen */}
        <div className="hidden md:grid md:grid-cols-2 md:gap-12 md:items-center md:min-h-[80vh]">
        {/* Contenu Texte Desktop - Gauche */}
        <div className="flex flex-col justify-center">
          <h1 className="text-6xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
          Craig Armel
          </h1>
          <h2 className="text-3xl lg:text-4xl mb-8 text-white/90 font-light">
          Développeur Fullstack
          </h2>
          <p className="text-xl lg:text-2xl mb-12 text-white/80 leading-relaxed">
          Étudiant à l'EFREI, je développe des solutions qui répondent à de vrais besoins. 
          Je recherche une équipe ambitieuse pour construire des applications à impact.
          </p>

          {/* Logos Desktop */}
          <div className="mb-12">
          <p className="text-lg text-white/70 mb-8">Expérience avec :</p>
          <div className="flex items-center gap-8 lg:gap-12 flex-wrap">
            <div className="group">
            <img 
              src="/efrei.png" 
              alt="EFREI"
              className="h-12 lg:h-16 opacity-80 hover:opacity-100 transition-all duration-300 transform group-hover:scale-110 filter brightness-0 invert"
            />
            </div>
            <div className="group">
            <img 
              src="/expercem.png" 
              alt="Expercem"
              className="h-12 lg:h-16 opacity-80 hover:opacity-100 transition-all duration-300 transform group-hover:scale-110 filter "
            />
            </div>
            <div className="group">
            <img 
              src="/mdm.png" 
              alt="Maisons du Monde"
              className="h-12 lg:h-16 opacity-80 hover:opacity-100 transition-all duration-300 transform group-hover:scale-110 filter brightness-0 invert"
            />
            </div>
            <div className="group">
            <img 
              src="/lcl.png" 
              alt="LCL"
              className="h-12 lg:h-16 opacity-80 hover:opacity-100 transition-all duration-300 transform group-hover:scale-110 filter"
            />
            </div>
          </div>
          </div>

          {/* Boutons Desktop */}
          <div className="flex gap-6">
          <button
            onClick={() => scrollToSection('projects')}
            className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full font-semibold hover:from-pink-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Voir mes projets
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="px-8 py-4 border-2 border-white/30 rounded-full font-semibold hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
          >
            Me contacter
          </button>
          </div>
        </div>

        {/* Photo Desktop - Droite */}
        <div className="flex justify-center items-center">
          <div className="relative group">
          <div className="absolute -inset-12 bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition-all duration-1000 animate-pulse"></div>
          <div className="absolute -inset-8 bg-gradient-to-br from-purple-600 via-pink-500 to-cyan-500 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-all duration-1000"></div>
          
          <div className="relative w-80 h-80 lg:w-96 lg:h-96">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/30 via-purple-500/30 to-cyan-500/30 rounded-full"></div>
            <div className="absolute inset-3 bg-gradient-to-tr from-purple-600/20 via-pink-600/20 to-blue-600/20 rounded-full"></div>
            
            <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/20 shadow-2xl">
            <img 
              src="craig-profile.png" 
              alt="Craig Armel"
              className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
              style={{
              filter: 'drop-shadow(0 0 30px rgba(168, 85, 247, 0.4))'
              }}
            />
            </div>
            
            {/* Éléments décoratifs */}
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full animate-bounce" style={{animationDelay: '0s'}}></div>
            <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
            <div className="absolute top-4 -left-4 w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse"></div>
            <div className="absolute bottom-4 -right-4 w-5 h-5 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
          </div>
          </div>
        </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} className="text-white/60" />
      </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white/5 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            À Propos
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <User className="w-12 h-12 text-pink-400 mb-4" />
                <h3 className="text-2xl font-bold mb-4">Recherche d'Alternance</h3>
                <p className="text-white/80 leading-relaxed">
                  Je recherche une alternance pour septembre 2025 avec un rythme de 
                  1 semaine en entreprise / 2 semaines à l'école sur 12 mois.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <GraduationCap className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-2xl font-bold mb-4">Formation</h3>
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold">École d'Ingénieur Informatique - EFREI</p>
                    <p className="text-white/80">Bachelor Ingénierie & Numérique (2023-2026)</p>
                  </div>
                  <div>
                    <p className="font-semibold">École d'Ingénieur Mécanique - ECAM LaSalle</p>
                    <p className="text-white/80">ECAM Engineering (2022-2023)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            Expériences Professionnelles
          </h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div className="flex items-center gap-4">
                    {/* Logo de l'entreprise */}
                    <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center p-2">
                      {index === 0 && <img src="/expercem.png" alt="Expercem" className="w-full h-full object-contain filter" />}
                      {index === 1 && <img src="/mdm.png" alt="Maisons du Monde" className="w-full h-full object-contain filter brightness-0 " />}
                      {index === 2 && <img src="/lcl.png" alt="LCL" className="w-full h-full object-contain filter" />}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-pink-400 mb-2">{exp.title}</h3>
                      <div className="flex items-center gap-4 text-white/80">
                        <span className="flex items-center gap-1">
                          <MapPin size={16} />
                          {exp.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar size={16} />
                          {exp.period}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-white/90 mb-4">{exp.description}</p>
                {exp.details.map((detail, i) => (
                  <p key={i} className="text-white/80 mb-4">• {detail}</p>
                ))}
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full text-sm border border-white/20">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white/5 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            Projets Personnels
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
                <Code className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-bold text-pink-400 mb-2">{project.title}</h3>
                <div className="flex items-center gap-2 text-white/80 mb-4">
                  <MapPin size={14} />
                  <span className="text-sm">{project.location} • {project.period}</span>
                </div>
                <p className="text-white/90 mb-4">{project.description}</p>
                {project.details.map((detail, i) => (
                  <p key={i} className="text-white/80 mb-4 text-sm">• {detail}</p>
                ))}
                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 3).map((tech, i) => (
                    <span key={i} className="px-2 py-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full text-xs border border-white/20">
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-2 py-1 bg-white/10 rounded-full text-xs border border-white/20">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            Compétences Techniques
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <h3 className="text-xl font-bold text-pink-400 mb-6">Langages</h3>
              <div className="space-y-3">
                {skills.languages.map((skill, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <Star size={16} className="text-yellow-400" />
                    <span className="text-white/90">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <h3 className="text-xl font-bold text-purple-400 mb-6">Frameworks</h3>
              <div className="space-y-3">
                {skills.frameworks.map((skill, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <Star size={16} className="text-yellow-400" />
                    <span className="text-white/90">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <h3 className="text-xl font-bold text-cyan-400 mb-6">Technologies</h3>
              <div className="space-y-3">
                {skills.technologies.slice(0, 6).map((skill, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <Star size={16} className="text-yellow-400" />
                    <span className="text-white/90">{skill}</span>
                  </div>
                ))}
                <div className="text-white/60 text-sm">+{skills.technologies.length - 6} autres</div>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <h3 className="text-xl font-bold text-green-400 mb-6">Outils</h3>
              <div className="space-y-3">
                {skills.tools.map((skill, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <Star size={16} className="text-yellow-400" />
                    <span className="text-white/90">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white/5 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            Me Contacter
          </h2>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-12 border border-white/20">
            <p className="text-xl text-white/90 mb-12">
              Intéressé par mon profil ? N'hésitez pas à me contacter pour discuter d'opportunités d'alternance !
            </p>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="flex items-center justify-center gap-4 p-6 bg-white/10 rounded-xl">
                <Mail className="w-6 h-6 text-pink-400" />
                <span className="text-white/90">craigarmel01@gmail.com</span>
              </div>
              <div className="flex items-center justify-center gap-4 p-6 bg-white/10 rounded-xl">
                <Phone className="w-6 h-6 text-purple-400" />
                <span className="text-white/90">+33 7 67 57 31 16</span>
              </div>
            </div>
            <div className="flex justify-center gap-6">
              <a href="https://www.linkedin.com/in/craig-armel/" target="_blank" rel="noopener noreferrer" className="p-4 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full hover:from-pink-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-110">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://github.com/craigarmel" target="_blank" rel="noopener noreferrer" className="p-4 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-110">
                <Github className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-white/60">
            © 2025 Craig Armel. Développé avec ❤️ et Next.js
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;