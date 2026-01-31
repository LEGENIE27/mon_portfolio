/**
 * Footer Component
 * Design: Minimalisme Technologique - Pied de page épuré
 * Couleurs: Noir/Blanc/Bleu électrique
 */

import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-sm flex items-center justify-center">
                <span className="text-white font-bold text-sm font-mono">FT</span>
              </div>
              <span className="font-bold text-white">Fidèle Tindanahire</span>
            </div>
            <p className="text-sm text-gray-400">
              Développeur Full Stack & Data Scientist passionné par l'innovation digitale.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Accueil
                </a>
              </li>
              <li>
                <a href="#skills" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Compétences
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Projets
                </a>
              </li>
              <li>
                <a href="#experience" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Expérience
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-bold text-white mb-4">Réseaux</h4>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com/in/awourassibè-fidèle-tindanahire"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-sm flex items-center justify-center hover:bg-cyan-600 transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-sm flex items-center justify-center hover:bg-cyan-600 transition-colors"
              >
                <Github size={18} />
              </a>
              <a
                href="mailto:fideltindanahire.226@gmail.com"
                className="w-10 h-10 bg-gray-800 rounded-sm flex items-center justify-center hover:bg-cyan-600 transition-colors"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
            <p>
              &copy; {currentYear} Fidèle Tindanahire. Tous droits réservés.
            </p>
            <p>
              Candidat stage de soutenance - Vista Assurance Burkina Faso
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
