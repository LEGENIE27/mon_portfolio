/**
 * Skills Section
 * Design: Minimalisme Technologique - Cards avec icônes et visualisation
 * Couleurs: Noir/Blanc/Bleu électrique
 */

import { Code2, Database, Zap, BarChart3, Shield } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Développement Mobile',
      icon: Code2,
      skills: ['Flutter', 'Dart', 'UI/UX Design'],
      description: 'Applications mobiles intuitives et performantes',
    },
    {
      title: 'Backend & API',
      icon: Database,
      skills: ['Django', 'Node.js/Express', 'REST API', 'Laravel'],
      description: 'Architectures robustes et scalables',
    },
    {
      title: 'Analyse de Données & IA',
      icon: BarChart3,
      skills: ['Python', 'Machine Learning', 'NLP', 'Data Science'],
      description: 'Modélisation prédictive et insights',
    },
    {
      title: 'Blockchain & Sécurité',
      icon: Shield,
      skills: ['Solidity', 'Smart Contracts', 'Web3.js', 'NFT'],
      description: 'Solutions sécurisées et décentralisées',
    },
    {
      title: 'Outils & Méthodes',
      icon: Zap,
      skills: ['Git/GitHub', 'Agile', 'Postman', 'Linux'],
      description: 'Développement collaboratif et efficace',
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Compétences Techniques</h2>
          <p className="text-lg text-gray-600">
            Une palette diversifiée de technologies pour transformer vos idées en réalité.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className="bg-white p-6 rounded-sm border border-gray-200 hover:border-cyan-400 hover:shadow-lg transition-all duration-300 group"
              >
                {/* Icon */}
                <div className="w-12 h-12 bg-cyan-100 rounded-sm flex items-center justify-center mb-4 group-hover:bg-cyan-500 group-hover:text-white transition-colors">
                  <Icon size={24} className="text-cyan-600 group-hover:text-white" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-900 mb-2">{category.title}</h3>

                {/* Description */}
                <p className="text-sm text-gray-600 mb-4">{category.description}</p>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-block px-3 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-sm group-hover:bg-cyan-100 group-hover:text-cyan-700 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Skills Visual */}
        <div className="mt-20 relative">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-sm overflow-hidden">
            <img
              src="/images/skills-visual.png"
              alt="Skills Visualization"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
