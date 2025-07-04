'use client';

import { useState } from 'react';
import Image from 'next/image';
import Navbar from '@/components/NavBar';
import { AnimatePresence, motion } from 'framer-motion';

const roles = [
  {
    title: 'Frontend Developer',
    description:
      'As a frontend developer, I craft visually engaging and highly responsive user interfaces using modern frameworks like React and libraries like Tailwind CSS. I focus on building accessible, intuitive, and pixel-perfect designs that enhance user experience across all devices and browsers. My approach ensures seamless interactivity, performance optimization, and a clean, scalable codebase aligned with best practices.',
  },
  {
    title: 'Backend Developer',
    description:
      'On the backend, I develop robust and scalable server-side systems using Node.js, Express, and PostgreSQL. I specialize in building secure RESTful APIs, managing user authentication, integrating third-party services, and optimizing performance. I ensure data integrity, system reliability, and smooth communication between frontend and backend components for a seamless application workflow.',
  },
  {
    title: 'Website Developer',
    description:
      'I design and build full-stack websites, from sleek single-page applications to complex content platforms. My development process incorporates responsive design, accessibility standards, search engine optimization (SEO), and cross-browser compatibility. I use best practices in both design and code structure to create high-performance, maintainable, and professional web solutions tailored to business or personal needs.',
  },
  {
    title: 'Mobile App Developer',
    description:
      'As a mobile developer, I create cross-platform mobile applications using React Native that feel native and deliver smooth, fast performance. I focus on mobile UI/UX principles, offline functionality, push notifications, and API integration to ensure apps are user-friendly, reliable, and capable of delivering a consistent experience on both Android and iOS platforms.',
  },
  {
    title: 'IoT Enthusiast',
    description:
      'With a passion for IoT, I build intelligent systems using devices like Raspberry Pi, sensors, and microcontrollers. I connect the physical world to the digital through real-time data collection, cloud integration, and automation using platforms such as MQTT, Firebase, and custom APIs. My IoT solutions are geared toward innovation, monitoring, smart automation, and data-driven decision-making.',
  },
  {
    title: 'Network Administrator',
    description:
      'As a network administrator, I configure, manage, and secure network infrastructure to ensure seamless connectivity and data flow across systems. I’m skilled in troubleshooting network issues, managing routers and firewalls, setting up VPNs, and enforcing cybersecurity measures. My goal is to maintain a stable, high-performance, and secure environment for business operations and digital communications.',
  },
];

export default function AboutPage() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[url('/bg1.jpg')] bg-cover bg-center bg-no-repeat text-white relative pt-32 px-4 sm:px-8">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 z-0" />

        <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center text-center">
        <div
  className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] mx-auto"
  style={{
    clipPath: 'polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%)',
    WebkitClipPath: 'polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%)',
    border: '5px solid #0ff', // neon border
    boxShadow: '0 0 20px #0ff, inset 0 0 10px #0ff',
    backgroundColor: '#1a1a1a',
    overflow: 'hidden',
  }}
>
  <Image
    src="/avatar.jpg" // Replace this with your uploaded image path
    alt="Your Avatar"
    fill
    className="object-cover scale-110"
  />
</div>

          {/* Title */}
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-blue-300">
            About Me
          </h1>
<p className="max-w-2xl mb-6 text-lg sm:text-xl text-gray-200 leading-relaxed">
  I am a passionate full-stack developer, mobile app creator, and IoT enthusiast with a strong foundation in both software and network engineering. From designing elegant interfaces to building powerful backend systems, I deliver end-to-end solutions that are modern, scalable, and efficient across web, mobile, and embedded platforms.
</p>
          {/* Role Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {roles.map((role, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`text-base px-5 py-2 rounded-full border transition font-medium ${
                  activeIndex === index
                    ? 'bg-blue-500 text-white border-blue-400'
                    : 'bg-white/10 text-gray-300 border-white/20 hover:bg-white/20'
                }`}
              >
                {role.title}
              </button>
            ))}
          </div>

          {/* Description with Animation */}
          <div className="w-full max-w-3xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="bg-white/10 border border-white/20 p-6 rounded-xl text-lg text-gray-100 leading-relaxed shadow-lg backdrop-blur-md"
              >
                {roles[activeIndex].description}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </>
  );
}
