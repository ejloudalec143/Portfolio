'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "@/components/NavBar";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="relative min-h-screen flex items-center px-6 py-20 sm:px-16 bg-[url('/bg1.jpg')] bg-cover bg-center bg-no-repeat text-white font-sans">
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 z-0" />

        <main className="relative z-10 flex flex-col-reverse sm:flex-row items-center justify-between w-full max-w-7xl mx-auto gap-12">
          {/* Left Side – Text */}
          <div className="text-center sm:text-left sm:w-1/2">
            <h1 className="text-4xl sm:text-6xl font-bold mb-4 leading-tight tracking-tight drop-shadow-md">
              Hey, it&apos;s me <span className="text-blue-400">EJ Loudale M. Cañete</span>
            </h1>

            <h2 className="text-xl sm:text-3xl text-gray-300 mb-4 tracking-wide drop-shadow-sm">
              And I&apos;m a{" "}
              <span className="text-blue-400 font-semibold">
                <Typewriter
                  words={[
                    "Frontend Developer",
                    "Backend Developer",
                    "Website Developer",
                    "Mobile App Dev",
                    "IoT Enthusiast",
                    "Network Engineer",
                  ]}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={60}
                  deleteSpeed={40}
                  delaySpeed={1500}
                />
              </span>
            </h2>

            <p className="text-base sm:text-lg text-gray-300 mb-6 max-w-lg drop-shadow-sm leading-relaxed">
              I build high-performance web and mobile apps, automate systems
              with IoT, and design resilient network solutions. Whether it&apos;s
              frontend, backend, or infrastructure, I deliver full-stack
              solutions that work beautifully.
            </p>

            {/* Social Icons and Resume Button */}
            <div className="flex flex-col items-center sm:items-start mt-4 gap-4">
              <div className="flex gap-4">
                {/* Facebook */}
                <a
                  href="https://www.facebook.com/ej.loudale.canete.2025?mibextid=ZbWKwL"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-blue-500 hover:bg-blue-600 rounded-full transition transform hover:scale-110 shadow-lg"
                >
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 320 512">
                    <path d="M279.14 288l14.22-92.66h-88.91V117.27c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S270.43 0 240.29 0c-73.22 0-121 44.38-121 124.72v70.62H89.09V288h30.24v224h92.61V288z"/>
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-blue-700 hover:bg-blue-800 rounded-full transition transform hover:scale-110 shadow-lg"
                >
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 448 512">
                    <path d="M100.28 448H7.4V148.9h92.88zm-46.44-340a53.53 53.53 0 1153.52-53.52 53.52 53.52 0 01-53.52 53.52zM447.9 448h-92.4V302.4c0-34.7-12.4-58.4-43.4-58.4-23.7 0-37.8 15.9-44 31.3-2.3 5.5-2.8 13.1-2.8 20.8V448h-92.4s1.2-269.6 0-297.1h92.4v42.1c12.3-19 34.4-46.1 83.6-46.1 61 0 106.8 39.8 106.8 125.3V448z"/>
                  </svg>
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/ejloudalec143"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800 hover:bg-gray-900 rounded-full transition transform hover:scale-110 shadow-lg"
                >
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 496 512">
                    <path d="M165.9 397.4c0 2-2.3 3.7-5.2 3.7-3.3 0-5.2-1.6-5.2-3.7 0-2 2.3-3.7 5.2-3.7 3 .1 5.2 1.7 5.2 3.7zm-33.3-10.8c-.7 1.6-2.6 2.3-4.1 1.6-1.7-.7-2.4-2.6-1.7-4.2.7-1.7 2.6-2.4 4.2-1.7 1.6.8 2.4 2.7 1.6 4.3zm44.8-1.7c-1.1 1.5-3.4 1.3-5-.3-1.7-1.6-2-4.1-.6-5.6 1.2-1.6 3.4-1.4 5.1.3 1.6 1.5 2 4.1.5 5.6zm80.4-74.3c-11.4 0-20.6-9.2-20.6-20.6 0-11.4 9.2-20.6 20.6-20.6 11.4 0 20.6 9.2 20.6 20.6 0 11.4-9.2 20.6-20.6 20.6zM248 8C111 8 0 119 0 256c0 109.2 70.7 201.8 168.9 234.4 12.4 2.3 16.9-5.4 16.9-12v-45.7c-68.7 15-83.3-33.1-83.3-33.1-11.3-28.7-27.6-36.4-27.6-36.4-22.6-15.4 1.7-15.1 1.7-15.1 25 1.7 38.1 25.7 38.1 25.7 22.2 38.1 58.2 27.1 72.4 20.7 2.2-16.1 8.7-27.1 15.8-33.3-54.9-6.2-112.7-27.5-112.7-122.5 0-27 9.6-49 25.4-66.3-2.5-6.3-11-31.6 2.4-65.9 0 0 20.8-6.6 68.1 25.2 19.8-5.5 41-8.2 62.1-8.3 21.1.1 42.3 2.8 62.1 8.3 47.3-31.8 68-25.2 68-25.2 13.4 34.3 4.9 59.6 2.4 65.9 15.8 17.3 25.3 39.3 25.3 66.3 0 95.3-57.9 116.2-113 122.3 9 7.7 17 23 17 46.4v68.9c0 6.6 4.4 14.4 17 12C425.3 457.8 496 365.2 496 256 496 119 385 8 248 8z"/>
                  </svg>
                </a>
              </div>

              {/* Download Resume Button */}
              <a
                href="/EJRESUME.pdf"
                download
                className="mt-4 inline-block bg-white text-black font-semibold py-2 px-6 rounded-full hover:bg-blue-500 hover:text-white transition duration-300 shadow-md"
              >
                Download Resume
              </a>
            </div>
          </div>

          {/* Right Side – Animated Hexagon Avatar */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{
              y: [0, -15, 0],
              scale: [0.95, 1, 0.95],
              boxShadow: [
                "0 0 25px rgba(59,130,246,0.6)",
                "0 0 30px rgba(139,92,246,0.6)",
                "0 0 25px rgba(16,185,129,0.6)",
                "0 0 25px rgba(59,130,246,0.6)",
              ],
              opacity: 1,
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative sm:w-1/2 flex justify-center overflow-visible"
          >
            <div
              className="w-[520px] h-[520px] relative shadow-2xl"
              style={{
                clipPath:
                  "polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%)",
                WebkitClipPath:
                  "polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%)",
                border: "4px solid white",
                boxShadow: "0 0 0 4px #3b82f6",
                overflow: "hidden",
              }}
            >
              <Image
                src="/avatar.jpg"
                alt="EJ Loudale M. Canete"
                fill
                className="object-cover scale-110"
              />
            </div>
          </motion.div>
        </main>
      </div>
    </>
  );
}
