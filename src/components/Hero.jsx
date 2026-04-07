import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, Download, ArrowRight } from 'lucide-react';

export const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient circles */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-accent-purple rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{
            x: [0, 50, 0],
            y: [0, 100, 0],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent-blue rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          animate={{
            x: [0, -60, 0],
            y: [0, -80, 0],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-4 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="gradient-text">Abhay Gaikwad</span>
          </h1>
          <p className="text-2xl md:text-4xl text-accent-cyan font-semibold">
            DevOps Engineer
          </p>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          Building scalable cloud-native applications with <span className="text-accent-blue">GCP</span> & <span className="text-accent-purple">AWS</span>.
          Specializing in Kubernetes, CI/CD pipelines, Infrastructure as Code, and observability solutions.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <a
            href="/resume.pdf"
            download="Abhay_Gaikwad_Resume.pdf"
            className="btn-primary px-8 py-3 rounded-lg font-semibold text-white flex items-center justify-center gap-2 cursor-pointer"
          >
            <Download size={20} />
            Download Resume
          </a>
          <a
            href="#projects"
            className="btn-secondary px-8 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 cursor-pointer"
          >
            View Projects
            <ArrowRight size={20} />
          </a>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex gap-6 justify-center text-accent-cyan"
        >
          <motion.a
            href="mailto:gaikwadabhay869@gmail.com"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="hover:text-accent-blue transition-colors"
            title="Email"
          >
            <Mail size={24} />
          </motion.a>
          <motion.a
            href="tel:+918483857098"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="hover:text-accent-blue transition-colors"
            title="Phone"
          >
            <Phone size={24} />
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/gaikwad-abhay"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="hover:text-accent-blue transition-colors"
            title="LinkedIn"
          >
            <Linkedin size={24} />
          </motion.a>
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="hover:text-accent-blue transition-colors"
            title="GitHub"
          >
            <Github size={24} />
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Terminal cursor animation */}
      <motion.div
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        <div className="bg-dark-secondary border border-accent-cyan/40 rounded-lg p-4 font-mono text-sm w-64 md:w-80">
          <div className="text-accent-cyan mb-2">
            <span className="text-accent-purple">$</span> ./deploy
          </div>
          <div className="flex items-center gap-1 min-h-6">
            <span className="text-accent-green">▶ Deployment pipeline</span>
            <motion.div
              className="w-2 h-5 bg-accent-cyan"
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.7, repeat: Infinity }}
            />
          </div>
        </div>
        <motion.p
          className="text-xs text-accent-cyan/60 mt-4 font-semibold tracking-widest"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          SCROLL TO DEPLOY
        </motion.p>
      </motion.div>
    </section>
  );
};
