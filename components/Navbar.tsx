"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    // Check initial scroll position
    handleScroll();
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isPublic = !pathname.startsWith("/dashboard");

  if (!isPublic) return null;

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.1)] py-4" 
          : "bg-transparent py-8"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold flex gap-1.5 items-center">
          <span className="text-blue-primary">HPIO</span>
          <span className={`transition-colors duration-500 ${
            isScrolled ? "text-black-main" : "text-white"
          }`}>
            IT O&M
          </span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8 font-medium">
          {[
            { label: "Home", href: "#hero" },
            { label: "About Us", href: "#about" },
            { label: "Works", href: "#works" },
            { label: "Structure", href: "#structure" }
          ].map((item) => (
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
          
          <Link 
            href="/login" 
            className={`px-6 py-2.5 rounded-full transition-all duration-300 font-semibold shadow-lg hover:-translate-y-0.5 ${
              isScrolled 
                ? "bg-black-main text-white hover:bg-blue-primary hover:shadow-blue-primary/30" 
                : "bg-white text-black-main hover:bg-blue-primary hover:text-white hover:shadow-blue-primary/30"
            }`}
          >
            Login
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}
