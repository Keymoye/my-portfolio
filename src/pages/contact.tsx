import { motion } from 'framer-motion';
import { useState } from "react";
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Contact() {
  const formAnim = useScrollAnimation({ threshold: 0.2 });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="min-h-screen bg-background flex items-center justify-center px-4 mx-auto">
      <motion.div
        ref={formAnim.ref as React.RefObject<HTMLDivElement>}
        className="w-full lg:max-w-2xl max-w-lg bg-foreground text-background rounded-lg lg:rounded-xl shadow-lg lg:shadow-xl p-8 lg:px-12"
        initial={{ opacity: 0, scale: 0.9, y: 30 }}
        animate={formAnim.isVisible ? { opacity: 1, scale: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <motion.h2
          className="text-2xl font-bold text-primary mb-6"
          initial={{ opacity: 0, x: -20 }}
          animate={formAnim.isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Contact Me
        </motion.h2>

        {submitted ? (
          <motion.p
            className="text-green-500 font-medium"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Thanks for reaching out! I'll get back to you soon.
          </motion.p>
        ) : (
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-4"
            initial={{ opacity: 0 }}
            animate={formAnim.isVisible ? { opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={formAnim.isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 rounded bg-background text-foreground border border-muted focus:outline-none focus:ring-2 focus:ring-primary transition-all"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={formAnim.isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 rounded bg-background text-foreground border border-muted focus:outline-none focus:ring-2 focus:ring-primary transition-all"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={formAnim.isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <label htmlFor="message" className="block text-sm font-medium mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 rounded bg-background text-foreground border border-muted focus:outline-none focus:ring-2 focus:ring-primary transition-all"
              />
            </motion.div>

            <motion.button
              type="submit"
              className="w-full bg-primary hover:bg-accent text-background font-bold py-2 px-4 rounded transition-colors"
              initial={{ opacity: 0, y: 20 }}
              animate={formAnim.isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7, duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Send Message
            </motion.button>
          </motion.form>
        )}
      </motion.div>
    </section>
  );
}
