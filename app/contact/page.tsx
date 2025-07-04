'use client';

import Navbar from '@/components/NavBar';
import { motion } from 'framer-motion';
import { useState, ChangeEvent, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSending, setIsSending] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill out all fields.');
      return;
    }

    setIsSending(true);

    const serviceId = 'service_jfucpxr';
    const templateId = 'template_68n878m';
    const publicKey = 'qN2CWbZet1GaL-mNB';

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    try {
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      toast.success('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch {
      toast.error('Failed to send. Try again later.');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <>
      <Navbar />
      <Toaster position="top-right" />
      <div className="min-h-screen bg-[url('/bg1.jpg')] bg-cover bg-center text-white relative pt-28 px-4 sm:px-12">
        <div className="absolute inset-0 bg-black/60 z-0" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <motion.h1
            className="text-5xl sm:text-6xl font-bold text-blue-300 mb-8"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Contact Me
          </motion.h1>
          <p className="text-gray-300 text-lg mb-10">
            Got a project in mind, a question, or just want to connect? Drop a message below!
          </p>

          <form
            onSubmit={handleSubmit}
            className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 shadow-lg space-y-6 text-left"
          >
            <div>
              <label className="block text-blue-300 font-medium mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-md bg-white/20 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="block text-blue-300 font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-md bg-white/20 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="block text-blue-300 font-medium mb-1">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-2 rounded-md bg-white/20 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <button
              type="submit"
              disabled={isSending}
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-md transition duration-300 disabled:opacity-50"
            >
              {isSending ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
