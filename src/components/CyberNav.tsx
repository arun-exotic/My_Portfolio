import React from 'react';
import { motion } from 'framer-motion';
import { Home, User, Briefcase, Mail, Download } from 'lucide-react';

interface CyberNavProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const CyberNav: React.FC<CyberNavProps> = ({ activeSection, onSectionChange }) => {
  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50"
    >
      <div className="flex items-center gap-2 bg-card/80 backdrop-blur-md neon-border rounded-full px-6 py-3">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <motion.button
              key={item.id}
              onClick={() => onSectionChange(item.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-mono transition-all duration-300 ${
                activeSection === item.id
                  ? 'bg-primary text-primary-foreground glow-text'
                  : 'text-foreground/70 hover:text-primary hover:bg-primary/10'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon size={16} />
              <span className="hidden sm:inline">{item.label}</span>
            </motion.button>
          );
        })}
        
        <div className="w-px h-6 bg-border mx-2" />
        
        <motion.button
          className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-mono text-accent hover:bg-accent/10 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Download size={16} />
          <span className="hidden sm:inline">Resume</span>
        </motion.button>
      </div>
    </motion.nav>
  );
};

export default CyberNav;