import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socials = [
    { icon: Mail, link: 'mailto:gaikwadabhay869@gmail.com', label: 'Email' },
    { icon: Linkedin, link: 'https://linkedin.com/in/gaikwad-abhay', label: 'LinkedIn' },
    { icon: Github, link: 'https://github.com', label: 'GitHub' },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-dark-secondary/50 border-t border-accent-purple/10"
    >
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold gradient-text mb-4">Abhay Gaikwad</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              DevOps Engineer specializing in cloud-native infrastructure, Kubernetes, and CI/CD automation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-accent-cyan mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="text-gray-400 hover:text-accent-blue transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-accent-blue transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#experience" className="text-gray-400 hover:text-accent-blue transition-colors">
                  Experience
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-accent-blue transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold text-accent-cyan mb-4">Connect</h4>
            <div className="flex gap-4">
              {socials.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 rounded-circle bg-dark-primary flex items-center justify-center text-accent-cyan hover:text-accent-blue transition-colors"
                    title={social.label}
                  >
                    <Icon size={20} />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-dark-tertiary/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>
              © {currentYear} Abhay Gaikwad. All rights reserved.
            </p>
            <div className="flex items-center gap-2">
              Made with
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Heart size={16} className="text-accent-purple" />
              </motion.span>
              using React & Tailwind CSS
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};
