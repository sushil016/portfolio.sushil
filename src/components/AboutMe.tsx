import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { ImageAi } from "./svgs";
import { GigAi } from "./svgs";

const AboutMe = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="bg-three py-20 px-6 md:px-20 relative overflow-hidden min-h-screen flex items-center">
      {/* Enhanced Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-iconColor/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-green-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
      </div>
      
      <motion.div 
        className="max-w-7xl mx-auto relative z-10 w-full"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Section Header */}
        <motion.div className="text-center mb-20" variants={itemVariants}>
          <div className="inline-block">
            <h2 className="text-5xl md:text-7xl font-bold text-four mb-6 bg-gradient-to-r from-four via-iconColor to-neutral-400 bg-clip-text text-transparent">
              About Me
            </h2>
            
          </div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-start">
          {/* Left Column - Introduction & Agency */}
          <motion.div className="lg:col-span-2 space-y-8" variants={itemVariants}>
            {/* Hero Introduction Card */}
            <div className="bg-gradient-to-br from-gray-800/70 to-gray-900/70 backdrop-blur-lg border border-gray-600/30 rounded-3xl p-8 shadow-2xl hover:shadow-iconColor/10 transition-all duration-500 hover:border-iconColor/50">
              <div className="flex items-center gap-4 mb-6">
                <h3 className="text-3xl font-bold text-iconColor">Hello, I'm Sushil!</h3>
              </div>
              <p className="text-textColor/90 text-xl leading-relaxed">
                A passionate 3rd-year engineering student who transformed from a coding newbie in September 2023 
                to mastering <span className="text-iconColor font-bold bg-iconColor/10 px-2 py-1 rounded-lg">full-stack web development</span> and 
                <span className="text-green-400 font-bold bg-green-400/10 px-2 py-1 rounded-lg">DevOps</span>. 
                Building the future, one line of code at a time.
              </p>
            </div>

            {/* Agency Showcase */}
            <div className="bg-gradient-to-br from-iconColor/15 to-purple-500/15 backdrop-blur-lg border-2 border-iconColor/40 rounded-3xl p-8 shadow-2xl hover:shadow-iconColor/20 transition-all duration-500 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-iconColor/20 to-transparent rounded-bl-full"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div>
                    <h3 className="text-3xl font-bold text-iconColor">
                      <a 
                        href="https://lumadev.in" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-purple-400 transition-colors duration-300"
                      >
                        LumaDev.in
                      </a>
                    </h3>
                    <p className="text-iconColor/70 text-sm">Custom AI Automation Solutions | Web Development | System Integration</p>
                  </div>
                </div>
                <p className="text-textColor/90 text-lg leading-relaxed mb-6">
                  Running my own web development agency where I collaborate with clients worldwide 
                  to create exceptional digital experiences. We specialize in building custom AI automation 
                  solutions for existing projects, transforming traditional workflows into intelligent, 
                  automated systems.
                </p>
                <div className="flex flex-wrap gap-3">
                  {['AI Automation', 'Web Development', 'Custom Solutions', 'System Integration', 'DevOps'].map((service) => (
                    <span 
                      key={service}
                      className="bg-iconColor/20 text-iconColor px-4 py-2 rounded-full text-sm font-medium border border-iconColor/30 hover:bg-iconColor/30 transition-colors duration-300"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            </div>


          </motion.div>

          {/* Right Column - Active Status */}
          <motion.div className="space-y-8" variants={itemVariants}>
            {/* Simplified Active Status Card */}
            <div className="bg-gradient-to-br from-gray-800/70 to-gray-900/70 backdrop-blur-lg border border-gray-600/30 rounded-3xl p-8 shadow-2xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="relative">
                  <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
                  <div className="absolute inset-0 w-4 h-4 bg-green-500 rounded-full animate-ping opacity-75"></div>
                </div>
                <span className="text-green-400 font-bold text-2xl">Active Now</span>
              </div>
              
              <div className="space-y-4 text-textColor/90">
                <p className="text-lg">
                  Currently accepting new projects at{' '}
                  <a 
                    href="https://lumadev.in" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-iconColor font-bold hover:text-orange-400 transition-colors duration-300"
                  >
                    LumaDev.in
                  </a>
                </p>
                
                <p className="text-lg">
                   Available for web development & AI automation consulting
                </p>
                
                <p className="text-lg">
                  Ready to bring your ideas to life - let's build something amazing together!
                </p>
              </div>

              {/* CTA Button */}
              <div className="mt-8">
                <button className="w-full  hover:to-iconColor text-white font-bold py-4 px-6  transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                  Let's Build Something Amazing!
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Floating Decorative Elements */}
        <div className="absolute -bottom-10 -right-10 opacity-10 pointer-events-none">
          <Image 
            src={GigAi} 
            width={300} 
            height={300} 
            alt="Decorative illustration"
            className="object-contain animate-float"
          />
        </div>
      </motion.div>

      <style jsx>{`
        .bg-grid-pattern {
          background-image: radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px);
          background-size: 20px 20px;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default AboutMe;
