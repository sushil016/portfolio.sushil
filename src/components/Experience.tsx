import React from "react";
import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      title: "DevOps Engineer Intern",
      company: "CREW ",
      duration: "January 2025 - Present",
      location: "Remote - Sydney, Australia",
      description: "Working as a DevOps Engineer Intern at a dynamic startup environment, collaborating directly with senior DevOps professionals and C-level executives to build and maintain production infrastructure across multiple cloud platforms.",
      achievements: [
        "Managed production deployments across Azure and Google Cloud Platform, creating and maintaining Docker images while pushing to Azure Container Registry and Google Artifact Registry for scalable application deployment",
        "Reduced deployment time by 70% and eliminated manual deployment errors by implementing automated deployment pipelines using GitHub Actions and ArgoCD with comprehensive manifest files",
        "Led production database migration from Google Cloud Platform to Azure ensuring zero downtime during the migration process while implementing backup and recovery strategies",
        "Implemented Redis deployment for caching and session management, developed blockchain and ML services with internal communication protocols, and deployed image/GIF moderation systems for content compliance",
        "Configured Application Gateway for URL routing and load balancing, utilized Gatekeeper and Crossplane for policy enforcement and infrastructure automation in Kubernetes clusters"
      ],
      techStack: ["Azure", "GCP", "Docker", "Kubernetes", "GitHub Actions", "ArgoCD", "Redis", "PostgreSQL"],
      type: "current"
    },
    {
      title: "Full Stack Developer Intern",
      company: "IIT Bombay",
      duration: "October 2024 - March 2025",
      location: "On-site - IIT Bombay, Powai, Mumbai",
      description: "Developed a comprehensive Procurement Management System for the Aerospace Department at IIT Bombay, serving administrators and project staff involved in research projects.",
      achievements: [
        "Built responsive React.js application with TypeScript",
        "Developed robust Node.js/Express.js backend APIs",
        "Designed comprehensive PostgreSQL database schema",
        "Reduced procurement processing time through automated workflows"
      ],
      techStack: ["React.js", "TypeScript", "Node.js", "Express.js", "PostgreSQL", "Prisma", "Docker"],
      type: "completed"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <main id="experience" className="w-full h-full py-16 bg-three">
      <div className="text-iconColor text-center text-4xl font-bold mb-12">
        {"< "}Work : Experience {"/>"}{" "}
      </div>
      
      <motion.div 
        className="max-w-6xl mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className={`relative mb-16 ${index !== experiences.length - 1 ? 'pb-16' : ''}`}
          >
            {/* Timeline line */}
            {index !== experiences.length - 1 && (
              <div className="absolute left-6 top-16 w-0.5 h-full bg-gradient-to-b from-iconColor to-transparent opacity-30 hidden md:block"></div>
            )}
            
            {/* Timeline dot */}
            <div className="absolute left-4 top-8 w-4 h-4 bg-iconColor rounded-full border-4 border-three hidden md:block"></div>
            
            <div className="md:ml-16 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/30 rounded-xl p-8 shadow-2xl hover:shadow-iconColor/10 transition-all duration-300">
              {/* Header */}
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-textColor mb-2">{exp.title}</h3>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-four">
                    <span className="font-semibold text-iconColor">{exp.company}</span>
                    <span className="hidden sm:block">•</span>
                    <span>{exp.location}</span>
                  </div>
                </div>
                <div className="mt-4 lg:mt-0">
                  <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                    exp.type === 'current' 
                      ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                      : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                  }`}>
                    {exp.duration}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-four mb-6 leading-relaxed">
                {exp.description}
              </p>

              {/* Key Achievements */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-textColor mb-4">Key Achievements</h4>
                <div className="grid gap-3">
                  {exp.achievements.map((achievement, achIndex) => (
                    <motion.div
                      key={achIndex}
                      className="flex items-start gap-3"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="w-2 h-2 bg-iconColor rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-four">{achievement}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div>
                <h4 className="text-lg font-semibold text-textColor mb-4">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {exp.techStack.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-800/60 text-iconColor border border-gray-700/50 rounded-lg text-sm font-medium hover:bg-iconColor/10 transition-colors duration-200"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </main>
  );
};

export default Experience;
