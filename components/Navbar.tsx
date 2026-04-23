"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/#about" },
  { label: "Works", href: "/#works" },
  { label: "Structure", href: "/#structure" },
  { label: "Our Story", href: "/our-story" }
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    handleScroll();
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mencegah scroll pada background ketika sidebar aktif
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ease-out ${
          isScrolled 
            ? "bg-white/95 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.1)] py-4" 
            : "bg-transparent py-6 md:py-8"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between relative">
          <Link href="/" className="text-2xl font-bold flex gap-1.5 items-center">
            <span className="text-blue-primary">HPIO</span>
            <span className={`transition-colors duration-500 ${
              isScrolled ? "text-black-main" : "text-white"
            }`}>
              IT O&M
            </span>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 font-medium">
            {navItems.map((item) => (
              <Link 
                key={item.label}
                href={item.href} 
                className={`transition-colors duration-300 ${
                  isScrolled 
                    ? "text-zinc-600 hover:text-blue-dark" 
                    : "text-zinc-300 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Hamburger Button */}
          <button 
            className="md:hidden p-2 -mr-2"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open Mobile Menu"
          >
            <Menu size={28} className={`transition-colors duration-300 ${
              isScrolled ? "text-black-main" : "text-white"
            }`} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Sidebar Overlay (Outside nav to escape Z-Index stacking constraints) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[110] md:hidden"
            />
            
            {/* Sidebar Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="fixed top-0 right-0 bottom-0 w-[80vw] max-w-[320px] bg-white z-[120] flex flex-col shadow-2xl md:hidden"
            >
              {/* Sidebar Header */}
              <div className="flex items-center justify-end p-6 border-b border-zinc-100">
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 bg-zinc-100 rounded-full text-zinc-500 hover:text-black-main transition-colors"
                  aria-label="Close Mobile Menu"
                >
                  <X size={20} />
                </button>
              </div>
              
              {/* Sidebar Links */}
              <div className="flex flex-col p-8 gap-8 overflow-y-auto">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-xl font-bold text-zinc-800 hover:text-blue-primary transition-colors flex items-center justify-between group"
                  >
                    <span>{item.label}</span>
                    <span className="text-blue-primary opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                      →
                    </span>
                  </Link>
                ))}
              </div>
              
              {/* Sidebar Footer */}
              <div className="mt-auto p-8 border-t border-zinc-100">
                <p className="text-sm font-semibold text-zinc-400">
                  HPIO IT O&M Dept.
                </p>
                <p className="text-xs text-zinc-500 mt-1">Sistem Komunikasi Terpadu</p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
