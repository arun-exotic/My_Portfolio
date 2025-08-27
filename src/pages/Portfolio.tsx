import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CyberCursor from '@/components/CyberCursor';
import ParticleField from '@/components/ParticleField';
import CyberNav from '@/components/CyberNav';
import TerminalTyping from '@/components/TerminalTyping';
import ProjectCard from '@/components/ProjectCard';
import ContactForm from '@/components/ContactForm';
import SocialLinks from '@/components/SocialLinks';
import { Button } from '@/components/ui/button';
import { Download, Terminal, Code, Zap } from 'lucide-react';
import cyberAvatar from '@/assets/cyber-avatar.jpg';

const Portfolio: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  // Terminal texts for the typing animation
  const terminalTexts = [
    '> CYBER_DEV.EXE',
    '> FULL_STACK_DEVELOPER',
    '> DIGITAL_ARCHITECT',
    '> CODE_WARRIOR',
  ];

  // Sample projects data
  const projects = [
    {
      title: 'Neural Network Dashboard',
      description: 'Real-time AI monitoring system with cyberpunk interface design and advanced data visualization.',
      techStack: ['React', 'TensorFlow', 'D3.js', 'WebGL'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://demo.com',
      gradient: 'primary' as const,
    },
    {
      title: 'Quantum Task Manager',
      description: 'Next-gen productivity app with holographic interface and quantum-inspired algorithms.',
      techStack: ['Next.js', 'TypeScript', 'Framer Motion', 'Supabase'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://demo.com',
      gradient: 'secondary' as const,
    },
    {
      title: 'Crypto Trading Bot',
      description: 'Automated trading system with machine learning predictions and neon-themed dashboard.',
      techStack: ['Python', 'FastAPI', 'React', 'WebSocket'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://demo.com',
      gradient: 'accent' as const,
    },
  ];

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return (
          <motion.section
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen flex items-center justify-center relative"
          >
            <div className="text-center z-10 max-w-4xl mx-auto px-4">
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 1, type: "spring", stiffness: 200 }}
                className="mb-12"
              >
                <img
                  src={cyberAvatar}
                  alt="Cyber Avatar"
                  className="w-32 h-32 md:w-48 md:h-48 mx-auto rounded-full border-4 border-primary/50 shadow-glow-primary animate-glow-pulse"
                />
              </motion.div>
              
              <div className="mb-8">
                <TerminalTyping texts={terminalTexts} className="mb-4" />
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
                  className="text-xl md:text-2xl text-foreground/80 font-mono mb-8"
                >
                  Crafting the future through <span className="glow-text-secondary">code</span> and <span className="glow-text-accent">innovation</span>
                </motion.p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <Button
                  variant="cyber"
                  size="lg"
                  onClick={() => setActiveSection('projects')}
                  className="group"
                >
                  <Zap className="group-hover:rotate-12 transition-transform" />
                  View Projects
                </Button>
                
                <Button
                  variant="terminal"
                  size="lg"
                  onClick={() => setActiveSection('contact')}
                  className="group"
                >
                  <Terminal className="group-hover:animate-pulse" />
                  Initialize Contact
                </Button>
              </motion.div>
            </div>
            
            {/* Grid background */}
            <div className="absolute inset-0 grid-bg opacity-20" />
          </motion.section>
        );

      case 'about':
        return (
          <motion.section
            key="about"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen flex items-center justify-center relative py-20"
          >
            <div className="max-w-4xl mx-auto px-4 z-10">
              <motion.h2
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-4xl md:text-6xl font-bold mb-8 glow-text font-mono"
              >
                &lt;/about_me&gt;
              </motion.h2>
              
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="space-y-6"
                >
                  <p className="text-lg text-foreground/80 leading-relaxed">
                    I'm a digital architect from the year 2089, temporarily displaced in your timeline. 
                    My mission: to build the applications that will shape tomorrow's digital landscape.
                  </p>
                  
                  <p className="text-lg text-foreground/80 leading-relaxed">
                    Specializing in neural network interfaces, quantum computing paradigms, and 
                    holographic user experiences that blur the line between reality and cyberspace.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mt-8">
                    <div className="neon-border rounded-lg p-4 bg-card/20">
                      <h3 className="text-primary font-mono font-bold mb-2">Frontend</h3>
                      <p className="text-sm text-foreground/70">React, TypeScript, Next.js, Three.js</p>
                    </div>
                    <div className="neon-border-secondary rounded-lg p-4 bg-card/20">
                      <h3 className="text-secondary font-mono font-bold mb-2">Backend</h3>
                      <p className="text-sm text-foreground/70">Node.js, Python, PostgreSQL, Redis</p>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 }}
                  className="relative"
                >
                  <div className="neon-border rounded-lg p-6 bg-card/30 backdrop-blur-sm">
                    <pre className="text-primary font-mono text-sm overflow-x-auto">
{`class CyberDeveloper {
  constructor() {
    this.skills = [
      'Full-Stack Development',
      'AI/ML Integration',
      'Cybersecurity',
      'UI/UX Design'
    ];
    this.status = 'Available';
    this.location = 'The Matrix';
  }
  
  deploy() {
    return 'Innovation Ready';
  }
}`}
                    </pre>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.section>
        );

      case 'projects':
        return (
          <motion.section
            key="projects"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen py-20 relative"
          >
            <div className="max-w-6xl mx-auto px-4 z-10 relative">
              <motion.h2
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-6xl font-bold text-center mb-16 glow-text font-mono"
              >
                &lt;/projects&gt;
              </motion.h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 100, rotateX: -30 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                  >
                    <ProjectCard {...project} />
                  </motion.div>
                ))}
              </div>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="text-center mt-12"
              >
                <Button variant="glow" size="lg" className="group">
                  <Code className="group-hover:rotate-12 transition-transform" />
                  View All Projects
                </Button>
              </motion.div>
            </div>
          </motion.section>
        );

      case 'contact':
        return (
          <motion.section
            key="contact"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen flex items-center justify-center py-20 relative"
          >
            <div className="max-w-4xl mx-auto px-4 z-10 w-full">
              <motion.h2
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-6xl font-bold text-center mb-4 glow-text font-mono"
              >
                &lt;/contact&gt;
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-center text-xl text-foreground/70 mb-16 font-mono"
              >
                Establish connection to the neural network
              </motion.p>
              
              <div className="grid md:grid-cols-2 gap-16 items-start">
                <ContactForm />
                
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="space-y-8"
                >
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-4 glow-text-secondary font-mono">
                      Connect Through The Grid
                    </h3>
                    <p className="text-foreground/70 mb-8">
                      Choose your preferred communication protocol
                    </p>
                    <SocialLinks />
                  </div>
                  
                  <div className="neon-border rounded-lg p-6 bg-card/20">
                    <h4 className="text-lg font-bold mb-4 glow-text-accent font-mono">
                      System Status
                    </h4>
                    <div className="space-y-2 font-mono text-sm">
                      <div className="flex justify-between">
                        <span>Response Time:</span>
                        <span className="text-accent">≤ 24 hours</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Availability:</span>
                        <span className="text-primary">Online</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Location:</span>
                        <span className="text-secondary">Cyberspace</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.section>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <CyberCursor />
      <ParticleField />
      <CyberNav activeSection={activeSection} onSectionChange={setActiveSection} />
      
      <AnimatePresence mode="wait">
        {renderSection()}
      </AnimatePresence>
    </div>
  );
};

export default Portfolio;