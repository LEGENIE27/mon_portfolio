/**
 * Experience Section
 * Design: Minimalisme Technologique - Timeline avec expériences et formations
 * Couleurs: Noir/Blanc/Bleu électrique
 */

import { Briefcase, BookOpen } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      type: 'experience',
      title: 'Jeune Talent - Développeur Full Stack',
      company: 'Orange Digital Center Burkina Faso',
      period: 'Juillet - Octobre 2025',
      description: 'Développement d\'une solution innovante (OSC 2025) avec Dashboard Django, API Node.js et Application Flutter. Collaboration en équipe agile.',
    },
    {
      type: 'experience',
      title: 'Développeur Applications Mobiles',
      company: 'Orange Digital Center Burkina Faso',
      period: 'Mars - Juin 2025',
      description: 'Conception et développement de l\'application mobile "Faso Culture" avec Flutter et Django. Gestion des données via API REST.',
    },
    {
      type: 'experience',
      title: 'Technicien Informatique',
      company: 'Freelance',
      period: 'Janvier 2023 - Aujourd\'hui',
      description: 'Maintenance préventive et corrective des ordinateurs, installation de systèmes d\'exploitation, diagnostic de pannes matérielles et logicielles. Assistance technique utilisateurs, installation et maintenance de systèmes de vidéosurveillance (CCTV), configuration de réseaux locaux, sauvegarde et sécurisation des données.',
    },
    {
      type: 'experience',
      title: 'Développeur Blockchain',
      company: 'Université Virtuelle du Burkina Faso',
      period: 'Juillet - Septembre 2024',
      description: 'Application web sécurisée par NFT. Smart Contract ERC-721 sur testnet Ethereum. Intégration MetaMask et Web3.js.',
    },
    {
      type: 'education',
      title: 'Licence 3 - Analyse de données et IA',
      company: 'Université Virtuelle du Burkina Faso',
      period: 'En cours',
      description: 'Formation spécialisée en Data Science, Machine Learning et Intelligence Artificielle.',
    },
    {
      type: 'education',
      title: 'Formation Développement Full Stack',
      company: 'Orange Digital Center',
      period: 'Mars - Juin 2025',
      description: 'Formation complète en développement web et mobile avec technologies modernes.',
    },
    {
      type: 'education',
      title: 'Python & IA pour la Data Science',
      company: 'GO AI ACADEMY',
      period: 'Juin 2024',
      description: 'Certification en Python, Machine Learning et techniques de Data Science.',
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Expérience & Formation</h2>
          <p className="text-lg text-gray-600">
            Un parcours riche en apprentissages et réalisations professionnelles.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-3xl">
          {experiences.map((item, index) => (
            <div key={`${item.title}-${index}`} className="relative pb-12 last:pb-0">
              {/* Timeline Line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-6 top-12 w-0.5 h-12 bg-gradient-to-b from-cyan-400 to-gray-200"></div>
              )}

              {/* Timeline Item */}
              <div className="flex gap-6">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-white border-2 border-cyan-400 flex items-center justify-center">
                    {item.type === 'experience' ? (
                      <Briefcase size={20} className="text-cyan-600" />
                    ) : (
                      <BookOpen size={20} className="text-cyan-600" />
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 bg-white p-6 rounded-sm border border-gray-200 hover:border-cyan-400 hover:shadow-md transition-all duration-300">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                      <p className="text-sm text-cyan-600 font-medium">{item.company}</p>
                    </div>
                    <span className="text-xs font-mono text-gray-500 whitespace-nowrap ml-4">
                      {item.period}
                    </span>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}