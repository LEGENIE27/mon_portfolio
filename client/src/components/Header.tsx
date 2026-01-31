/**
 * Header Component
 * Design: Minimalisme Technologique - Navigation sticky avec logo et liens épurés
 * Couleurs: Noir/Blanc/Bleu électrique
 */

import { useState } from 'react';
import { Menu, X, Download } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Accueil', href: '#home' },
    { label: 'Compétences', href: '#skills' },
    { label: 'Projets', href: '#projects' },
    { label: 'Expérience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-sm flex items-center justify-center">
            <span className="text-white font-bold text-sm font-mono">FT</span>
          </div>
          <span className="text-sm font-mono font-bold text-gray-900 hidden sm:inline">Fidèle</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-gray-700 hover:text-cyan-500 transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="/CV_Fidele_Tindanahire.pdf"
            download="CV_Fidele_Tindanahire.pdf"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-900 border border-gray-300 hover:border-cyan-500 hover:text-cyan-600 transition-colors duration-200 rounded-sm"
            title="Télécharger mon CV en PDF"
          >
            <Download size={16} />
            CV
          </a>
          <a
            href="#contact"
            className="px-4 py-2 text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 transition-colors duration-200 rounded-sm"
          >
            Contactez-moi
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-gray-900 hover:text-cyan-500 transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white border-b border-gray-200 py-4">
          <div className="container flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-gray-700 hover:text-cyan-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="/CV_Fidele_Tindanahire.pdf"
              download="CV_Fidele_Tindanahire.pdf"
              className="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-gray-900 border border-gray-300 hover:border-cyan-500 hover:text-cyan-600 transition-colors rounded-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              <Download size={16} />
              Télécharger CV
            </a>
            <a
              href="#contact"
              className="px-4 py-2 text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 transition-colors rounded-sm text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Contactez-moi
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
