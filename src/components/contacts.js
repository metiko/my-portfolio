import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import SocialIcons from './SocialIcons';  // Adjust if path is different


function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSent(false);
    setError('');

    // Replace these values with your EmailJS credentials
    const serviceID = 'your_service_id';
    const templateID = 'your_template_id';
    const userID = 'your_user_id';

    try {
      await emailjs.send(serviceID, templateID, formData, userID);
      setIsSent(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      setError('Failed to send message. Please try again.');
      console.error('EmailJS Error:', err);
    }
  };

  return (
    <motion.section 
      id="contact"
      className="bg-light py-5"
      initial={{ opacity: 0, scale: 0.9 }} 
      animate={{ opacity: 1, scale: 1 }} 
      transition={{ duration: 1 }}
    >
      <div className="container">
        <h2 className="text-center">Contact Me</h2>
        <motion.form 
          className="mt-4"
          initial={{ y: 50, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          transition={{ duration: 1 }}
          onSubmit={handleSubmit}
        >
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input 
              type="text" 
              className="form-control" 
              id="name" 
              name="name" 
              placeholder="Your Name" 
              value={formData.name} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input 
              type="email" 
              className="form-control" 
              id="email" 
              name="email" 
              placeholder="Your Email" 
              value={formData.email} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea 
              className="form-control" 
              id="message" 
              name="message" 
              rows="4" 
              placeholder="Your Message" 
              value={formData.message} 
              onChange={handleChange} 
              required
            ></textarea>
          </div>
          <motion.button 
            type="submit" 
            className="btn btn-primary w-100"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send
          </motion.button>

          {/* Success & Error Messages */}
          {isSent && <p className="text-success mt-3">Message sent successfully!</p>}
          {error && <p className="text-danger mt-3">{error}</p>}
        </motion.form>
      </div>
    </motion.section>
  );
}

export default Contact;
