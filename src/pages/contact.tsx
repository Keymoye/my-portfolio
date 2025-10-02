import { motion } from 'framer-motion';
import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function Contact() {
  const formAnim = useScrollAnimation({ threshold: 0.2 });

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = 'Invalid email format';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name as keyof FormErrors]) {
      setErrors({ ...errors, [name]: undefined });
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (!validateForm()) e.preventDefault();
    else {
      setIsSubmitting(true);
      setTimeout(() => {
        setSubmitted(true);
        setIsSubmitting(false);
        setFormData({ name: '', email: '', message: '' });
      }, 1500);
    }
  };

  return (
    <section className="min-h-screen bg-background flex items-center justify-center px-4 mx-auto">
      <motion.div
        ref={formAnim.ref as React.RefObject<HTMLDivElement>}
        className="w-full lg:max-w-2xl max-w-lg bg-foreground text-background rounded-lg shadow-lg p-8 lg:px-12"
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
          <motion.div
            className="text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-green-500 text-5xl mb-4">✓</div>
            <p className="text-green-500 font-medium text-lg">
              Thanks for reaching out! I’ll get back to you soon.
            </p>
          </motion.div>
        ) : (
          <motion.form
            onSubmit={handleSubmit}
            action="https://formspree.io/f/mqayblya"  
            method="POST"
            className="space-y-4"
            initial={{ opacity: 0 }}
            animate={formAnim.isVisible ? { opacity: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-3 py-2 rounded bg-background text-foreground border ${
                  errors.name ? 'border-red-500' : 'border-muted'
                } focus:outline-none focus:ring-2 focus:ring-primary transition-all`}
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">{errors.name}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-3 py-2 rounded bg-background text-foreground border ${
                  errors.email ? 'border-red-500' : 'border-muted'
                } focus:outline-none focus:ring-2 focus:ring-primary transition-all`}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className={`w-full px-3 py-2 rounded bg-background text-foreground border ${
                  errors.message ? 'border-red-500' : 'border-muted'
                } focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none`}
              />
              {errors.message && (
                <p className="text-red-500 text-xs mt-1">{errors.message}</p>
              )}
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary hover:bg-accent text-background font-bold py-2 px-4 rounded transition-colors disabled:opacity-50"
              whileHover={!isSubmitting ? { scale: 1.02 } : {}}
              whileTap={!isSubmitting ? { scale: 0.98 } : {}}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </motion.button>
          </motion.form>
        )}
      </motion.div>
    </section>
  );
}
