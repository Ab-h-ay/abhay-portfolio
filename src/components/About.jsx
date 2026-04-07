import { motion } from 'framer-motion';

export const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section id="about" className="relative py-20">
      <div className="max-w-5xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-12 gradient-text"
        >
          About Me
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 items-center"
        >
          <motion.div variants={itemVariants} className="space-y-4">
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm a <span className="text-accent-blue font-semibold">DevOps Engineer</span> with 1+ years of hands-on experience building and optimizing cloud infrastructure.
              With a strong foundation in both Google Cloud Platform (GCP) and Amazon Web Services (AWS), I specialize in designing scalable, secure, and highly available systems.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              My expertise spans across containerization, orchestration, CI/CD automation, and Infrastructure as Code.
              I'm passionate about improving system reliability, reducing deployment friction, and implementing monitoring solutions that provide real-time insights.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Currently, I'm working at <span className="text-accent-purple font-semibold">Triarq Health LLP</span> where I've optimized CI/CD pipelines, reduced deployment times by 30%, and built comprehensive observability stacks.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-dark-secondary rounded-lg p-8 card-glow"
          >
            <h3 className="text-2xl font-bold text-accent-cyan mb-6">Key Highlights</h3>
            <div className="space-y-4">
              <div>
                <p className="text-accent-blue font-semibold mb-2">🎓 Education</p>
                <p className="text-gray-400">B.E. Computer Engineering, MET Bhujbhal Knowledge City (CGPA: 8.28)</p>
              </div>
              <div>
                <p className="text-accent-blue font-semibold mb-2">💼 Experience</p>
                <p className="text-gray-400">1+ years in production environments managing critical infrastructure</p>
              </div>
              <div>
                <p className="text-accent-blue font-semibold mb-2">🔧 Focus Areas</p>
                <p className="text-gray-400">Cloud-native architectures, Container orchestration, Reliability engineering</p>
              </div>
              <div>
                <p className="text-accent-blue font-semibold mb-2">📍 Location</p>
                <p className="text-gray-400">Nashik, Maharashtra, India</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
