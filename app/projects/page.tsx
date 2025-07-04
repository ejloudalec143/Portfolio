'use client';

import Navbar from '@/components/NavBar';
import { useState } from 'react';
import { motion } from 'framer-motion';
import ReactPlayer from 'react-player/lazy';
import '../flip.css';

const droneVideos = [
  { videoUrl: 'https://www.youtube.com/shorts/FFdUvFZZS-I' },
  { videoUrl: 'https://www.youtube.com/shorts/J3HNFWZwz2Q' },
  { videoUrl: 'https://www.youtube.com/shorts/eQttZsdxSsg' },
  { videoUrl: 'https://www.youtube.com/shorts/s9FmI_prPG8' },
  { videoUrl: 'https://www.youtube.com/shorts/TmogJdL2g4U' },
  { videoUrl: 'https://www.youtube.com/shorts/CqBHYW9vFcE' },
];

const plannerVideos = [
  { videoUrl: 'https://www.youtube.com/watch?v=sb03LigWwP4&t=27s' },
  { videoUrl: 'https://www.youtube.com/watch?v=W2yn_wWQ940' },
];

export default function ProjectsPage() {
  const [flippedStates, setFlippedStates] = useState({
    drone: false,
    planner: false,
  });

  const toggleFlip = (key: 'drone' | 'planner') => {
    setFlippedStates((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const closeFlip = (key: 'drone' | 'planner') => {
    setFlippedStates((prev) => ({ ...prev, [key]: false }));
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[url('/bg1.jpg')] bg-cover bg-center bg-no-repeat text-white relative pt-28 px-4 sm:px-12">
        <div className="absolute inset-0 bg-black/60 z-0" />

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-blue-300 mb-12">
            My Projects
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Drone Project Card */}
            <motion.div
              className="flip-card cursor-pointer"
              onClick={() => toggleFlip('drone')}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div
                className={`flip-card-inner ${
                  flippedStates.drone ? 'flipped' : ''
                }`}
              >
                <div className="flip-card-front bg-cover bg-center bg-[url('/drone-project.jpg')] p-8 rounded-xl shadow-lg flex flex-col justify-center items-center h-[420px] border border-white/20 backdrop-blur-md hover:scale-105 transition-all">
                  <div className="bg-black/60 p-6 rounded-xl text-center">
                    <h2 className="text-3xl font-bold text-blue-400 mb-4">
                      Autonomous IoT Drone Project
                    </h2>
                    <p className="text-gray-100 max-w-md">
                      This smart drone system aids in disaster response by
                      autonomously mapping affected areas, detecting survivors
                      using thermal imaging, and sending real-time alerts via
                      IoT.
                    </p>
                    <p className="mt-3 text-sm text-blue-300 opacity-80 animate-pulse">
                      Tap to flip and view demo videos
                    </p>
                  </div>
                </div>

                <div className="flip-card-back bg-white/10 backdrop-blur-lg border border-white/20 p-4 sm:p-6 rounded-xl shadow-lg overflow-y-auto h-[420px] relative">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      closeFlip('drone');
                    }}
                    className="absolute top-2 right-3 text-sm text-white bg-black/40 hover:bg-black/70 rounded-full px-2 py-1 z-10"
                  >
                    ✕
                  </button>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                    {droneVideos.map((video, i) => (
                      <div key={i} className="bg-black/30 p-2 rounded-md">
                        <div className="aspect-video">
                          <ReactPlayer
                            url={video.videoUrl}
                            width="100%"
                            height="100%"
                            controls
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Financial Goal Planner Project Card */}
            <motion.div
              className="flip-card cursor-pointer"
              onClick={() => toggleFlip('planner')}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div
                className={`flip-card-inner ${
                  flippedStates.planner ? 'flipped' : ''
                }`}
              >
                <div className="flip-card-front bg-cover bg-center bg-[url('/goalplanner.jpg')] p-8 rounded-xl shadow-lg flex flex-col justify-center items-center h-[420px] border border-white/20 backdrop-blur-md hover:scale-105 transition-all">
                  <div className="bg-black/60 p-6 rounded-xl text-center">
                    <h2 className="text-3xl font-bold text-blue-400 mb-4">
                      Financial Goal Planner
                    </h2>
                    <p className="text-gray-100 max-w-md">
                      A mobile app that helps users track, manage, and achieve
                      financial goals using savings targets and budget
                      reminders.
                    </p>
                    <p className="mt-3 text-sm text-blue-300 opacity-80 animate-pulse">
                      Tap to flip and view app demo
                    </p>
                  </div>
                </div>

                <div className="flip-card-back bg-white/10 backdrop-blur-lg border border-white/20 p-4 sm:p-6 rounded-xl shadow-lg overflow-y-auto h-[420px] relative">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      closeFlip('planner');
                    }}
                    className="absolute top-2 right-3 text-sm text-white bg-black/40 hover:bg-black/70 rounded-full px-2 py-1 z-10"
                  >
                    ✕
                  </button>
                  <div className="grid grid-cols-1 gap-4 mt-4">
                    {plannerVideos.map((video, i) => (
                      <div key={i} className="bg-black/30 p-2 rounded-md">
                        <div className="aspect-video">
                          <ReactPlayer
                            url={video.videoUrl}
                            width="100%"
                            height="100%"
                            controls
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
