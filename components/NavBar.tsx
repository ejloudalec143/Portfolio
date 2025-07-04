'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => setMounted(true), []);

  const navItems = [
    { name: 'home', href: '/' },
    { name: 'about', href: '/about' },
    { name: 'skills', href: '/skills' },
    { name: 'projects', href: '/projects' },
    { name: 'stack', href: '/stack' },
    { name: 'contact', href: '/contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/30 backdrop-blur-md text-white shadow-lg border-b border-white/10">
      {/* EJ Logo top-left */}
      <div className="absolute top-3 left-4 text-2xl font-bold tracking-tight bg-gradient-to-r from-blue-400 to-green-300 bg-clip-text text-transparent">
        EJ
      </div>

      {/* Desktop Navigation */}
      <div className="absolute top-3 left-1/2 -translate-x-1/2 hidden sm:flex gap-6 text-base font-medium">
        {navItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`relative group capitalize font-bold ${
                isActive ? 'text-blue-400' : 'text-white'
              }`}
            >
              <span className="transition duration-300 group-hover:text-blue-400">
                {item.name}
              </span>
              <span
                className={`absolute left-0 -bottom-1 h-[2px] transition-all ${
                  isActive ? 'w-full bg-blue-400' : 'w-0 group-hover:w-full bg-blue-400'
                }`}
              />
            </Link>
          );
        })}
      </div>

      {/* Theme Toggle and Mobile Menu Button */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-end items-center">
        <div className="flex items-center gap-2">
          {mounted && (
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-full hover:bg-white/10 transition"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? (
                <Sun size={20} className="text-yellow-300" />
              ) : (
                <Moon size={20} className="text-blue-300" />
              )}
            </button>
          )}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="sm:hidden p-2 rounded-md hover:bg-white/10 transition"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="sm:hidden px-4 pb-4 space-y-3 text-base font-medium bg-black/70 backdrop-blur-md shadow-md">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`block w-full py-1 border-b border-white/10 capitalize font-bold transition ${
                  isActive ? 'text-blue-400' : 'text-white hover:text-blue-400'
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}
