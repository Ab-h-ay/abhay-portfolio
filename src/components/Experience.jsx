import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

export const Experience = () => {
  const experiences = [
    {
      company: 'Triarq Health LLP',
      position: 'DevOps Engineer',
      location: 'Nashik, Maharashtra',
      duration: 'July 2025 - Ongoing',
      duties: [
        'Built and optimised CI/CD pipelines (CloudBuild, GitHub Actions, Jenkins), reducing deployment time by 30%',
        'Deployed and managed containerised microservices on GKE (Kubernetes) with HPA and zero-downtime updates',
        'Automated infrastructure using Terraform (Infrastructure as Code), improving consistency across environments',
        'Implemented observability stack (Prometheus, Grafana, Cloud Monitoring) with custom dashboards and alerting, cutting MTTD by 20%',
        'Integrated security tools (Mend SAST, Wiz, On-Demand Scan) for vulnerability scanning and compliance',
        'Built and maintained hardened Docker images, implementing minimal base images, vulnerability patching, and secure configurations',
      ],
    },
    {
      company: 'Diproma Infotech',
      position: 'Cloud Computing Intern',
      location: 'Nashik, Maharashtra',
      duration: 'March 2023 - April 2023',
      duties: [
        'Designed and deployed cloud-based applications on AWS (EC2, RDS, Auto-Scaling)',
        'Architected solutions for high availability and scalability',
        'Collaborated with cross-functional teams to implement and optimise cloud infrastructure',
        'Improved system reliability and resource efficiency',
      ],
    },
  ];

  const certifications = [
    {
      title: 'AWS Cloud Computing Training',
      issuer: 'Ethans Tech, Pune',
      year: '2024',
    },
    {
      title: 'DevOps Training',
      issuer: 'Ethans Tech, Pune',
      year: '2024',
    },
    {
      title: 'Linux Administration Training',
      issuer: 'SevenMentors, Pune',
      year: '2023',
    },
    {
      title: 'CCNA Training',
      issuer: 'SevenMentors, Pune',
      year: '2023',
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

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="experience" className="relative py-20">
      <div className="max-w-5xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold mb-16 gradient-text"
        >
          Experience & Education
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Experience Timeline */}
          <div>
            <h3 className="text-2xl font-bold text-accent-cyan mb-8 flex items-center gap-2">
              <Briefcase size={28} />
              Professional Experience
            </h3>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-dark-secondary rounded-lg p-6 card-glow border-l-4 border-accent-purple"
                >
                  <div className="mb-4">
                    <h4 className="text-xl font-bold text-white">{exp.position}</h4>
                    <p className="text-accent-blue font-semibold">{exp.company}</p>
                  </div>

                  <div className="flex flex-col gap-2 mb-4 text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      {exp.duration}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      {exp.location}
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.duties.map((duty, idx) => (
                      <li key={idx} className="text-gray-300 text-sm flex gap-2">
                        <span className="text-accent-cyan flex-shrink-0">▸</span>
                        <span>{duty}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Education & Certifications */}
          <div>
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-accent-cyan mb-8">Education</h3>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-dark-secondary rounded-lg p-6 card-glow border-l-4 border-accent-blue"
              >
                <h4 className="text-xl font-bold text-white mb-2">Bachelor of Engineering</h4>
                <p className="text-accent-blue font-semibold mb-2">Computer Engineering</p>
                <p className="text-gray-400 mb-4">MET Bhujbhal Knowledge City, Nashik, Maharashtra</p>
                <div className="space-y-2">
                  <div className="flex justify-between text-gray-300">
                    <span>Duration:</span>
                    <span className="font-semibold">2020 - 2024</span>
                  </div>
                  <div className="flex justify-between text-gray-300">
                    <span>CGPA:</span>
                    <span className="font-semibold text-accent-cyan">8.28</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-2xl font-bold text-accent-cyan mb-8">Certifications</h3>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-3"
              >
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="bg-dark-secondary rounded-lg p-4 card-glow"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-semibold text-white text-sm">{cert.title}</p>
                        <p className="text-gray-400 text-xs">{cert.issuer}</p>
                      </div>
                      <span className="text-accent-purple text-xs font-semibold">{cert.year}</span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
