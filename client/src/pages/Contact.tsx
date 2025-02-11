import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { MapPin, Phone, Mail, Send, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    }, 1000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["No. 166, Colombo,", "Western Province,", "Sri Lanka"],
      color: "bg-emerald-500"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+94 123 456 789", "+94 987 654 321"],
      color: "bg-blue-500"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@moksha.com", "support@moksha.com"],
      color: "bg-amber-500"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-amber-50 via-white to-amber-50">
      <Navbar />

      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative pt-20"
      >
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1596402184320-417e7178b2cd"
            alt="Contact Hero"
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40 backdrop-blur-[2px]" />
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center text-white"
        >
          <h1 className="text-5xl font-bold mb-6">Get in Touch</h1>
          <p className="text-xl max-w-2xl mx-auto text-white/90">
            We're here to help you on your journey. Whether you have questions, need assistance,
            or want to share your thoughts, feel free to reach out.
          </p>
        </motion.div>
      </motion.div>

      {/* Contact Information Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10 mb-16">
        <div className="grid md:grid-cols-3 gap-8">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="p-8">
                <div className={`w-14 h-14 ${info.color} rounded-xl flex items-center justify-center mb-6`}>
                  <info.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{info.title}</h3>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-600">{detail}</p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="relative"
          >
            <div className="absolute -top-6 -left-6 w-20 h-20 bg-amber-500/10 rounded-full" />
            <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-amber-500/10 rounded-full" />
            <div className="relative">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Let's Start a Conversation</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Have questions about our spiritual practices or want to join our community? 
                Fill out the form, and we'll get back to you shortly. Your journey to inner 
                peace begins with a simple message.
              </p>
              <div className="flex items-center gap-6">
                <div className="h-1 w-20 bg-amber-500 rounded-full" />
                <div className="h-1 w-12 bg-amber-300 rounded-full" />
                <div className="h-1 w-6 bg-amber-200 rounded-full" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8">
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                  placeholder="john@example.com"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="How can we help you today?"
                />
              </div>

              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-amber-500 text-white py-4 rounded-xl hover:bg-amber-600 transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 font-medium text-lg flex items-center justify-center gap-2"
              >
                {loading ? (
                  'Sending...'
                ) : (
                  <>
                    Send Message
                    <Send className="h-5 w-5" />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Map Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="w-full h-[500px] mt-16"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126743.63162573094!2d79.7861641472656!3d6.921833700000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae253d10f7a7003%3A0x320b2e4d32d3838d!2sColombo%2C%20Sri%20Lanka!5e0!3m2!1sen!2sus!4v1674893753375!5m2!1sen!2sus"
          className="w-full h-full border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </motion.div>

      <Footer />
    </div>
  );
};

export default Contact;