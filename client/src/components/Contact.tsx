/**
 * Contact Section
 * Design: Minimalisme Technologique - Formulaire épuré avec liens de contact
 * Couleurs: Noir/Blanc/Bleu électrique
 */

import { Mail, Phone, Linkedin, Github, Download } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Construct mailto link
    const mailtoLink = `mailto:fideltindanahire.226@gmail.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Nom: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
  };

  const contactLinks = [
    {
      icon: Mail,
      label: 'Email',
      value: 'fideltindanahire.226@gmail.com',
      href: 'mailto:fideltindanahire.226@gmail.com',
    },
    {
      icon: Phone,
      label: 'Téléphone',
      value: '+226 57 16 05 01',
      href: 'tel:+22657160501',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/awourassibè-fidèle-tindanahire',
      href: 'https://linkedin.com/in/awourassibè-fidèle-tindanahire',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'https://github.com/LEGENIE27',
      href: 'https://github.com/LEGENIE27',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Prenons Contact</h2>
          <p className="text-lg text-gray-600">
            Intéressé par une collaboration ou une discussion ? N'hésitez pas à me contacter.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-2">
                Nom
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                placeholder="Votre nom"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                placeholder="votre@email.com"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-900 mb-2">
                Sujet
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                placeholder="Sujet de votre message"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors resize-none"
                placeholder="Votre message..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-gray-900 text-white font-medium hover:bg-gray-800 transition-colors duration-200 rounded-sm"
            >
              Envoyer le message
            </button>
          </form>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">Informations de Contact</h3>
              <div className="space-y-4">
                {contactLinks.map((contact) => {
                  const Icon = contact.icon;
                  return (
                    <a
                      key={contact.label}
                      href={contact.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-4 p-4 rounded-sm border border-gray-200 hover:border-cyan-400 hover:bg-cyan-50 transition-all duration-300 group"
                    >
                      <div className="w-10 h-10 bg-cyan-100 rounded-sm flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-500 group-hover:text-white transition-colors">
                        <Icon size={20} className="text-cyan-600 group-hover:text-white" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500">{contact.label}</p>
                        <p className="text-gray-900 font-medium">{contact.value}</p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-gray-50 p-6 rounded-sm border border-gray-200 space-y-6">
              <div>
                <h4 className="font-bold text-gray-900 mb-4">A propos</h4>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li>
                    <span className="font-medium text-cyan-600">Localisation:</span> Ouagadougou, Burkina Faso
                  </li>
                  <li>
                    <span className="font-medium text-cyan-600">Langues:</span> Francais (Courant), Anglais (Technique)
                  </li>
                
                </ul>
              </div>
              <div className="border-t border-gray-300 pt-6">
                <h4 className="font-bold text-gray-900 mb-4">Documents</h4>
                <a
                  href="/CV_Fidele_Tindanahire.pdf"
                  download="CV_Fidele_Tindanahire.pdf"
                  className="inline-flex items-center gap-2 px-4 py-3 w-full justify-center bg-cyan-600 text-white font-medium hover:bg-cyan-700 transition-colors rounded-sm"
                >
                  <Download size={18} />
                  Telecharger CV PDF
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
