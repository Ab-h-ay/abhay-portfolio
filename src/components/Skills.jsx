import { motion } from 'framer-motion';

export const Skills = () => {
  const skillCategories = [
    {
      title: 'Cloud Platforms',
      skills: ['GCP (GKE, Compute Engine, Cloud Build)', 'AWS (EC2, RDS, Auto Scaling)', 'Cloud Armor', 'IAM', 'Pub/Sub'],
      icon: '☁️',
    },
    {
      title: 'CI/CD & Containers',
      skills: ['Jenkins', 'CloudBuild', 'GitHub Actions', 'Docker', 'Kubernetes (GKE)', 'GitOps'],
      icon: '🚀',
    },
    {
      title: 'Infrastructure as Code',
      skills: ['Terraform', 'Ansible', 'YAML', 'Configuration Management'],
      icon: '🏗️',
    },
    {
      title: 'Monitoring & Logging',
      skills: ['Prometheus', 'Grafana', 'GCP Monitoring', 'Cloud Logging', 'Custom Dashboards'],
      icon: '📊',
    },
    {
      title: 'Security',
      skills: ['RBAC', 'Cloud Endpoints', 'Mend SAST', 'On-Demand Scanning', 'GCP Security Command Center'],
      icon: '🔒',
    },
    {
      title: 'Programming & Scripting',
      skills: ['Python', 'Bash', 'Shell Scripting', 'Linux Administration', 'Git'],
      icon: '💻',
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

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="skills" className="relative py-20">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-16 gradient-text text-center"
        >
          Technical Skills
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-dark-secondary rounded-lg p-6 card-glow hover:bg-dark-tertiary transition-colors"
            >
              <div className="text-3xl mb-4">{category.icon}</div>
              <h3 className="text-xl font-bold text-accent-cyan mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <motion.span
                    key={idx}
                    whileHover={{ scale: 1.05 }}
                    className="bg-dark-primary/50 border border-accent-purple/30 text-gray-300 px-3 py-1 rounded-full text-sm hover:border-accent-blue/60 transition-colors"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
