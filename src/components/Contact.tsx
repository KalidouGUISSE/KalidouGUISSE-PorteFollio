import { useState } from 'react';
import { PortfolioData } from '../models/PortfolioModel';
import { Send, Mail, Phone, MapPin, Linkedin, MessageCircle, CheckCircle2 } from 'lucide-react';

interface ContactProps {
  data: PortfolioData;
  onContact: (type: string, value: string) => void;
}

export const Contact = ({ data, onContact }: ContactProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactMethods = [
    {
      icon: <Phone className="w-5 h-5" />,
      label: 'Téléphone',
      value: data.personalInfo.phone,
      action: () => onContact('phone', data.personalInfo.phone)
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Email',
      value: data.personalInfo.email,
      action: () => onContact('email', data.personalInfo.email)
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: 'Localisation',
      value: `${data.personalInfo.location}, ${data.personalInfo.country}`,
      action: null
    }
  ];

  const socialLinks = [
    {
      icon: <MessageCircle className="w-6 h-6" />,
      label: 'WhatsApp',
      color: 'bg-green-500 hover:bg-green-600',
      action: () => onContact('whatsapp', data.personalInfo.whatsapp!)
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: 'LinkedIn',
      color: 'bg-blue-600 hover:bg-blue-700',
      action: () => onContact('linkedin', data.personalInfo.linkedin!)
    }
  ];

  return (
    <section className="py-20 px-6 bg-gray-50 dark:bg-gray-900/50 relative z-10" id="contact">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Contactez-Moi
          </h2>
          <div className="h-1 w-24 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Une question ou un projet en tête ? N'hésitez pas à me contacter. Je suis toujours ouvert aux nouvelles opportunités.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8 animate-slide-in-left">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Informations de Contact
              </h3>
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <button
                    key={index}
                    onClick={method.action || undefined}
                    disabled={!method.action}
                    className={`w-full flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md ${
                      method.action ? 'hover:shadow-xl hover:-translate-y-1 cursor-pointer' : 'cursor-default'
                    } transition-all duration-300 group`}
                  >
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300">
                      {method.icon}
                    </div>
                    <div className="text-left">
                      <p className="text-sm text-gray-500 dark:text-gray-400">{method.label}</p>
                      <p className="font-semibold text-gray-900 dark:text-white">{method.value}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                Réseaux Sociaux
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <button
                    key={index}
                    onClick={social.action}
                    className={`${social.color} text-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110`}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="animate-slide-in-right">
            <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Nom complet
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-gray-900 dark:text-white"
                  placeholder="Votre nom"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-gray-900 dark:text-white"
                  placeholder="votre@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Sujet
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-gray-900 dark:text-white"
                  placeholder="Sujet de votre message"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none text-gray-900 dark:text-white"
                  placeholder="Votre message..."
                />
              </div>

              {isSubmitted ? (
                <div className="flex items-center justify-center gap-2 py-3 bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 rounded-lg">
                  <CheckCircle2 className="w-5 h-5" />
                  <span className="font-medium">Message envoyé avec succès!</span>
                </div>
              ) : (
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
                >
                  <Send className="w-5 h-5" />
                  Envoyer le message
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
