import { motion } from 'framer-motion';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'];

  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-dark-primary/80 backdrop-blur-md border-b border-accent-purple/10"
    >
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-bold gradient-text"
        >
          Abhay
        </motion.div>

        {/* Desktop Menu */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="hidden md:flex gap-8"
        >
          {navLinks.map((link) => (
            <motion.a
              key={link}
              variants={itemVariants}
              href={`#${link.toLowerCase()}`}
              className="text-gray-300 hover:text-accent-cyan transition-colors font-medium relative group"
            >
              {link}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-accent-blue to-accent-purple group-hover:w-full transition-all duration-300"></span>
            </motion.a>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.a
          href="mailto:gaikwadabhay869@gmail.com"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:block btn-primary px-6 py-2 rounded-lg font-semibold text-white cursor-pointer"
        >
          Contact Me
        </motion.a>

        {/* Mobile Menu Button */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-accent-cyan"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        variants={{
          open: { opacity: 1, height: 'auto' },
          closed: { opacity: 0, height: 0 },
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden"
      >
        <div className="bg-dark-secondary/50 px-4 py-4 space-y-4">
          {navLinks.map((link) => (
            <motion.a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="block text-gray-300 hover:text-accent-cyan transition-colors font-medium"
            >
              {link}
            </motion.a>
          ))}
          <motion.a
            href="mailto:gaikwadabhay869@gmail.com"
            whileHover={{ scale: 1.05 }}
            className="block btn-primary px-6 py-2 rounded-lg font-semibold text-white text-center cursor-pointer"
          >
            Contact Me
          </motion.a>
        </div>
      </motion.div>
    </motion.nav>
  );
};
