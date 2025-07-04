'use client';

import Navbar from '@/components/NavBar';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const techStack = {
  Frontend: [
    { name: 'React', icon: '/icons/react.png' },
    { name: 'React Native', icon: '/icons/react.png' },
    { name: 'Expo', icon: '/icons/expo.svg' },
    { name: 'TailwindCSS', icon: '/icons/tailwind.png' },
  ],
  Backend: [
    { name: 'Node.js', icon: '/icons/node-js.svg' },
    { name: 'Express', icon: '/icons/express-js.png' },
    { name: 'Flask', icon: '/icons/flask.svg' },
  ],
  Database: [
    { name: 'PostgreSQL', icon: '/icons/postgresql.png' },
    { name: 'Firebase', icon: '/icons/firebase.png' },
  ],
  AI_ML: [
    { name: 'YOLOv8', icon: '/icons/yolov.svg' },
    { name: 'OpenCV', icon: '/icons/opencv.svg' },
    { name: 'TensorFlow Lite', icon: '/icons/tensorflow.png' },
  ],
  Hardware: [
    { name: 'Raspberry Pi 4', icon: '/icons/raspberrypi.svg' },
    { name: 'Pixhawk 4', icon: '/icons/pixhawk.png' },
    { name: 'GPS Module', icon: '/icons/gps.svg' },
    { name: 'Thermal Camera', icon: '/icons/thermal.webp' },
  ],
  DevOps: [
    { name: 'Vercel', icon: '/icons/vercel.svg' },
    { name: 'GitHub', icon: '/icons/github.svg' },
  ],
};

const categories = ['All', ...Object.keys(techStack)];

export default function StackPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[url('/bg1.jpg')] bg-cover bg-center text-white pt-28 px-4 sm:px-12 relative">
        <div className="absolute inset-0 bg-black/60 z-0" />
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-blue-300 mb-6">Tech Stack & Tools</h1>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg mb-8">
            Technologies I use for building responsive web/mobile apps, autonomous drones, AI models, and IoT systems.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition duration-300 border ${
                  selectedCategory === cat
                    ? 'bg-blue-400 text-white border-blue-400'
                    : 'bg-white text-blue-500 border-white hover:bg-blue-300 hover:text-white'
                }`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Tech Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 text-left">
            {Object.entries(techStack)
              .filter(([cat]) => selectedCategory === 'All' || selectedCategory === cat)
              .map(([category, tools], i) => (
                <motion.div
                  key={category}
                  className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl shadow-lg p-6"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-2xl font-bold text-blue-400 mb-4">{category}</h2>
                  <ul className="space-y-3">
                    {tools.map((tool) => (
                      <li key={tool.name} className="flex items-center space-x-3 text-lg text-gray-100">
                        <Image src={tool.icon} alt={tool.name} width={24} height={24} />
                        <span>{tool.name}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}
