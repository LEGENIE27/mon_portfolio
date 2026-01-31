/**
 * Hero Section
 * Design: Minimalisme Technologique - Image de fond avec circuits bleus, texte épuré
 * Couleurs: Noir/Blanc/Bleu électrique
 */

import { ArrowRight, Download } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(/images/hero-bg.png)',
          backgroundAttachment: 'fixed',
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 max-w-3xl">
        <div className="space-y-6">
          {/* Subtitle */}
          <div className="inline-block">
            <span className="text-sm font-mono text-cyan-600 font-medium">
              Développeur Full Stack & Data Scientist
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
            Fidèle Tindanahire
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl leading-relaxed">
            Je transforme les idées en solutions digitales innovantes. Spécialisé en développement Full Stack, 
            intelligence artificielle et blockchain pour l'inclusion financière en Afrique.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-900 text-white font-medium hover:bg-gray-800 transition-colors duration-200 rounded-sm group"
            >
              Voir mes projets
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/CV_Fidele_Tindanahire.pdf"
              download="CV_Fidele_Tindanahire.pdf"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-gray-900 text-gray-900 font-medium hover:bg-gray-50 transition-colors duration-200 rounded-sm"
            >
              <Download size={18} />
              Telecharger CV
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-cyan-500 text-cyan-600 font-medium hover:bg-cyan-50 transition-colors duration-200 rounded-sm"
            >
              Contactez-moi
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-12 border-t border-gray-300">
            <div>
              <div className="text-3xl font-bold text-cyan-600">3+</div>
              <p className="text-sm text-gray-600 mt-1">Années d'expérience</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-cyan-600">10+</div>
              <p className="text-sm text-gray-600 mt-1">Projets réalisés</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-cyan-600">5</div>
              <p className="text-sm text-gray-600 mt-1">Domaines clés</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
