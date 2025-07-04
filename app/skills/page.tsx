'use client';

import Navbar from '@/components/NavBar';
import { motion } from 'framer-motion';

const skills = {
  Frontend: ['React', 'Tailwind CSS', 'Next.js', 'JavaScript', 'HTML5', 'CSS3'],
  Backend: ['Node.js', 'Express', 'Firebase', 'PostgreSQL', 'MongoDB', 'REST APIs'],
  Tools: ['Git', 'GitHub', 'Postman', 'Figma', 'Vercel', 'Docker'],
  Mobile: ['React Native', 'Expo', 'Android Studio'],
  IoT: ['Raspberry Pi', 'Arduino', 'MQTT', 'LoRa', 'Sensors'],
};

const categoryColors: Record<string, string> = {
  Frontend: 'from-blue-400 to-blue-600',
  Backend: 'from-green-400 to-green-600',
  Tools: 'from-yellow-400 to-yellow-600',
  Mobile: 'from-pink-400 to-pink-600',
  IoT: 'from-purple-400 to-purple-600',
};

export default function SkillsPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[url('/bg1.jpg')] bg-cover bg-center bg-no-repeat text-white relative pt-28 px-4 sm:px-12">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 z-0" />

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto text-center">
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-300 mb-4"
          >
            My Skills
          </motion.h1>

          {/* Divider */}
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-blue-400 to-green-300 rounded-full mb-12" />

          {/* Grid of Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, items], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white/10 hover:bg-white/20 transition duration-300 backdrop-blur-xl border border-white/20 p-6 rounded-2xl shadow-xl hover:shadow-blue-500/30 hover:scale-[1.03]"
              >
                {/* Gradient Badge */}
                <div className={`inline-block px-4 py-1 text-sm font-semibold rounded-full bg-gradient-to-r ${categoryColors[category]} text-white mb-5`}>
                  {category}
                </div>

                <ul className="space-y-2 text-gray-200 text-lg text-left">
                  {items.map((skill) => (
                    <li
                      key={skill}
                      className="hover:text-blue-300 transition duration-200"
                    >
                      • {skill}
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
