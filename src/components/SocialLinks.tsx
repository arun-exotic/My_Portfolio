import React from 'react';
import { motion } from 'framer-motion';
import { Github, Instagram, Linkedin, Mail } from 'lucide-react';

const SocialLinks: React.FC = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com',
      color: 'hover:text-primary hover:shadow-glow-primary',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com',
      color: 'hover:text-secondary hover:shadow-glow-secondary',
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://instagram.com',
      color: 'hover:text-tertiary hover:shadow-glow-tertiary',
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:contact@example.com',
      color: 'hover:text-accent hover:shadow-glow-accent',
    },
  ];

  return (
    <div className="flex items-center justify-center gap-6">
      {socialLinks.map((link, index) => {
        const Icon = link.icon;
        return (
          <motion.a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-4 rounded-full bg-card/30 border border-primary/20 text-foreground/70 transition-all duration-300 backdrop-blur-sm ${link.color}`}
            initial={{ opacity: 0, y: 50, rotate: -180 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ 
              delay: index * 0.1,
              type: "spring",
              stiffness: 200,
              damping: 10 
            }}
            whileHover={{ 
              scale: 1.2, 
              rotate: 360,
              y: -10
            }}
            whileTap={{ scale: 0.9 }}
          >
            <Icon size={24} />
          </motion.a>
        );
      })}
    </div>
  );
};

export default SocialLinks;