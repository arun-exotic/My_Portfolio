import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, User, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="max-w-lg mx-auto"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="relative group"
        >
          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary/50 group-focus-within:text-primary transition-colors" size={18} />
          <Input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="pl-12 bg-card/50 border-primary/30 text-foreground placeholder:text-muted-foreground focus:border-primary focus:shadow-glow-primary neon-border"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="relative group"
        >
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-primary/50 group-focus-within:text-primary transition-colors" size={18} />
          <Input
            type="email"
            name="email"
            placeholder="your.email@example.com"
            value={formData.email}
            onChange={handleChange}
            required
            className="pl-12 bg-card/50 border-primary/30 text-foreground placeholder:text-muted-foreground focus:border-primary focus:shadow-glow-primary neon-border"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="relative group"
        >
          <MessageCircle className="absolute left-3 top-4 text-primary/50 group-focus-within:text-primary transition-colors" size={18} />
          <Textarea
            name="message"
            placeholder="Your message..."
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className="pl-12 resize-none bg-card/50 border-primary/30 text-foreground placeholder:text-muted-foreground focus:border-primary focus:shadow-glow-primary neon-border"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Button
            type="submit"
            variant="neon"
            size="lg"
            className="w-full group"
          >
            <Send className="group-hover:rotate-12 transition-transform" size={18} />
            Send Message
          </Button>
        </motion.div>
      </form>
    </motion.div>
  );
};

export default ContactForm;