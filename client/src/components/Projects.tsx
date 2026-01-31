/**
 * Projects Section
 * Design: Minimalisme Technologique - Cards avec images et descriptions
 * Couleurs: Noir/Blanc/Bleu électrique
 * Classement: Portfolio, Chatbot bancaire, Faso culture, Blockchain
 */

import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Portfolio Personnel',
      period: 'Janvier 2026',
      company: 'Projet Personnel',
      description:
        'Portfolio professionnel moderne et minimaliste présentant mes compétences, projets et expériences. Interface épurée avec design technologique, navigation fluide et responsive. Intégration de fonctionnalités interactives et téléchargement de CV directement depuis le site.',
      technologies: ['React 19', 'TypeScript', 'Tailwind CSS 4', 'Vite', 'shadcn/ui'],
      link: 'https://legenie-portfolio.vercel.app',
      github: 'https://github.com/LEGENIE27/mon_portfolio',
    },
    {
      title: 'Chatbot Bancaire Intelligent',
      period: 'Septembre - Décembre 2025',
      company: 'Université Virtuelle du Burkina Faso',
      description:
        'Assistant bancaire intelligent adapté au contexte burkinabé avec détection de fraude avancée. Interface conversationnelle en français permettant la consultation de solde, gestion de carte bancaire et alertes de sécurité. Montants en FCFA et numéros burkinabés pour expérience utilisateur contextuelle.',
      technologies: ['Flask', 'MongoDB', 'spaCy', 'NLP', 'Python', 'JavaScript'],
      link: '#',
      github: 'https://github.com/LEGENIE27/chatbot_bancaire',
    },
    {
      title: 'Application Mobile Faso Culture',
      period: 'Mars - Juin 2025',
      company: 'Orange Digital Center',
      description:
        'Application mobile complète avec Flutter et Django. Gestion des données culturelles via API REST. Interface utilisateur intuitive et performante.',
      technologies: ['Flutter', 'Dart', 'Django', 'REST API', 'UI/UX'],
      link: '',
      github: 'https://github.com/LEGENIE27/Faso_Culture',
    },
    {
      title: 'Application Web Sécurisée par NFT',
      period: 'Juillet - Septembre 2024',
      company: 'Université Virtuelle du Burkina Faso',
      description:
        'Application web avec Smart Contract ERC-721 sur testnet Ethereum. Intégration MetaMask et Web3.js. Exploration de la technologie blockchain.',
      technologies: ['Solidity', 'Web3.js', 'Ethereum', 'NFT', 'MetaMask'],
      link: 'https://receptive-song.surge.sh/',
      github: 'https://github.com/LEGENIE27/Sept',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Projets Professionnels</h2>
          <p className="text-lg text-gray-600">
            Des solutions innovantes mettant en avant expertise technique et créativité.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group border border-gray-200 rounded-sm overflow-hidden hover:border-cyan-400 hover:shadow-lg transition-all duration-300"
            >
              <div className="grid md:grid-cols-3 gap-0">
                {/* Content */}
                <div className="md:col-span-2 p-8">
                  {/* Header */}
                  <div className="mb-4">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 group-hover:text-cyan-600 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-sm text-gray-500 mt-1">{project.company}</p>
                      </div>
                      <span className="text-xs font-mono text-gray-500 whitespace-nowrap ml-4">
                        {project.period}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 mb-4 leading-relaxed">{project.description}</p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="inline-block px-3 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-sm group-hover:bg-cyan-100 group-hover:text-cyan-700 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    {project.link !== '#' && project.link !== '' && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-cyan-600 hover:text-cyan-700 transition-colors"
                      >
                        Voir le projet
                        <ExternalLink size={16} />
                      </a>
                    )}
                    {project.github !== '#' && project.github !== '' && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
                      >
                        <Github size={16} />
                        Code
                      </a>
                    )}
                  </div>
                </div>

                {/* Visual Accent */}
                <div className="hidden md:block bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
                  <div className="absolute inset-0 opacity-20">
                    <img
                      src="/images/project-accent.png"
                      alt="Project visual"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl font-bold text-cyan-500/20 font-mono">
                        {String(index + 1).padStart(2, '0')}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}