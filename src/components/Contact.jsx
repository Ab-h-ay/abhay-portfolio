import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github, MapPin, ExternalLink } from 'lucide-react';

export const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      value: 'gaikwadabhay869@gmail.com',
      link: 'mailto:gaikwadabhay869@gmail.com',
      color: 'text-accent-blue',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 8483857098',
      link: 'tel:+918483857098',
      color: 'text-accent-cyan',
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      value: 'linkedin.com/in/gaikwad-abhay',
      link: 'https://linkedin.com/in/gaikwad-abhay',
      color: 'text-accent-purple',
    },
    {
      icon: Github,
      title: 'GitHub',
      value: 'Ab-h-ay',
      link: 'https://github.com/Ab-h-ay',
      color: 'text-accent-blue',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Nashik, Maharashtra, India',
      link: '#',
      color: 'text-accent-cyan',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="contact" className="relative py-20">
      <div className="max-w-5xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-4 gradient-text text-center"
        >
          Get in Touch
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-gray-400 mb-16 max-w-2xl mx-auto"
        >
          I'm always interested in hearing about new projects and opportunities. Feel free to reach out!
        </motion.p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 mb-12"
        >
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <motion.a
                key={index}
                href={method.link}
                target={method.link.startsWith('http') ? '_blank' : '_self'}
                rel={method.link.startsWith('http') ? 'noopener noreferrer' : ''}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-dark-secondary rounded-lg p-6 card-glow text-center hover:bg-dark-tertiary transition-colors"
              >
                <Icon className={`${method.color} mx-auto mb-4`} size={32} />
                <h3 className="font-semibold text-white mb-2">{method.title}</h3>
                <p className="text-gray-400 text-sm break-all hover:text-accent-cyan transition-colors">
                  {method.value}
                </p>
              </motion.a>
            );
          })}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-accent-purple/20 to-accent-blue/20 border border-accent-cyan/30 rounded-lg p-8 md:p-12 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Let's Build Something Great</h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Whether you're looking to optimize your infrastructure, build scalable systems, or discuss DevOps best practices, I'd love to connect and collaborate.
          </p>
          <motion.div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="mailto:gaikwadabhay869@gmail.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary px-8 py-3 rounded-lg font-semibold text-white cursor-pointer inline-flex items-center justify-center gap-2"
            >
              <Mail size={20} />
              Send Email
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/gaikwad-abhay"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary px-8 py-3 rounded-lg font-semibold cursor-pointer inline-flex items-center justify-center gap-2"
            >
              <Linkedin size={20} />
              Connect on LinkedIn
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
