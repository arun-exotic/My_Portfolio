import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Zap } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  gradient: 'primary' | 'secondary' | 'accent';
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  techStack,
  githubUrl,
  liveUrl,
  gradient
}) => {
  const gradientClasses = {
    primary: 'from-primary/20 to-secondary/20 border-primary/30',
    secondary: 'from-secondary/20 to-tertiary/20 border-secondary/30',
    accent: 'from-accent/20 to-primary/20 border-accent/30'
  };

  return (
    <motion.div
      className={`group relative overflow-hidden rounded-lg bg-gradient-to-br ${gradientClasses[gradient]} border backdrop-blur-sm`}
      whileHover={{ scale: 1.02, rotateY: 5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20" />
      
      <div className="relative p-6 h-full flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold glow-text">{title}</h3>
          <div className="flex items-center gap-2">
            {githubUrl && (
              <motion.a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-card/50 text-foreground/70 hover:text-primary hover:bg-primary/10 transition-all"
                whileHover={{ scale: 1.1, rotate: 360 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github size={16} />
              </motion.a>
            )}
            {liveUrl && (
              <motion.a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-card/50 text-foreground/70 hover:text-accent hover:bg-accent/10 transition-all"
                whileHover={{ scale: 1.1, rotate: -360 }}
                whileTap={{ scale: 0.9 }}
              >
                <ExternalLink size={16} />
              </motion.a>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-foreground/80 mb-4 flex-grow leading-relaxed">
          {description}
        </p>

        {/* Tech Stack */}
        <div className="space-y-3">
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="px-3 py-1 text-xs font-mono bg-muted/30 text-primary rounded-full neon-border"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Hover effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        />
        
        {/* Glowing corner */}
        <motion.div
          className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}
        />
      </div>
    </motion.div>
  );
};

export default ProjectCard;