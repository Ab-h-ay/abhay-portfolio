import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

export const Projects = () => {
  const projects = [
    {
      title: 'Flight Management Application for Airline Company',
      description: 'Designed and implemented a complete deployment infrastructure for a flight management web application with automated CI/CD pipelines.',
      technologies: ['Python', 'HTML/CSS', 'JavaScript', 'MySQL', 'Jenkins', 'Docker', 'Kubernetes', 'Terraform', 'Ansible'],
      achievements: [
        'Reduced deployment time by 85%',
        'Implemented zero-downtime rolling updates',
        'Full infrastructure automation with Terraform',
        'Enterprise-grade availability',
      ],
      architecture: {
        title: 'CI/CD Pipeline Architecture',
        description: 'GitHub → Jenkins → Docker Build → Artifact Registry → Kubernetes GKE',
        details: 'Automated workflow triggered by webhooks, containerized application, managed through Kubernetes with HPA for scalability.',
      },
      image: '✈️',
      category: 'Cloud Infrastructure',
      github: '#',
      demo: '#',
    },
    {
      title: 'Cloud Infrastructure on AWS',
      description: 'Designed and deployed scalable cloud infrastructure leveraging AWS services for high availability and performance.',
      technologies: ['AWS EC2', 'RDS', 'Auto Scaling', 'Load Balancer', 'CloudFormation'],
      achievements: [
        'Built multi-AZ architecture',
        'Implemented auto-scaling groups',
        'Database optimization and backup strategy',
        'Infrastructure monitoring setup',
      ],
      architecture: {
        title: 'AWS Architecture',
        description: 'Multi-AZ deployment with Auto Scaling Groups, RDS replication, and CloudFront distribution',
        details: 'Designed for 99.99% uptime with automated failover and scaling based on demand metrics.',
      },
      image: '☁️',
      category: 'AWS',
      github: '#',
      demo: '#',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section id="projects" className="relative py-20">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-4 gradient-text text-center"
        >
          Featured Projects
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-gray-400 mb-16 max-w-2xl mx-auto"
        >
          Production-grade DevOps solutions demonstrating expertise in cloud architecture, automation, and infrastructure management.
        </motion.p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-dark-secondary rounded-lg overflow-hidden card-glow"
            >
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="text-5xl mb-4">{project.image}</div>
                    <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                    <span className="inline-block text-sm bg-accent-purple/20 border border-accent-purple/40 text-accent-purple px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>

                <p className="text-gray-300 text-lg mb-6">{project.description}</p>

                {/* Architecture Section */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="bg-dark-primary/50 border border-accent-cyan/20 rounded-lg p-6 mb-6 hover:border-accent-cyan/40 transition-colors"
                >
                  <h4 className="text-lg font-semibold text-accent-cyan mb-2">{project.architecture.title}</h4>
                  <p className="text-gray-300 mb-2 font-mono text-sm">{project.architecture.description}</p>
                  <p className="text-gray-400 text-sm">{project.architecture.details}</p>
                </motion.div>

                {/* Achievements */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-accent-blue mb-3">Key Achievements</h4>
                  <ul className="grid md:grid-cols-2 gap-2">
                    {project.achievements.map((achievement, idx) => (
                      <li key={idx} className="text-gray-300 flex items-start gap-2">
                        <span className="text-accent-cyan font-bold">✓</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-accent-purple mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-accent-purple/10 border border-accent-purple/30 text-accent-purple px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-4 border-t border-dark-tertiary/50">
                  <motion.a
                    href={project.github}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 text-accent-blue hover:text-accent-cyan transition-colors"
                  >
                    <Github size={20} />
                    View Code
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 text-accent-purple hover:text-accent-blue transition-colors"
                  >
                    <ExternalLink size={20} />
                    View Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
