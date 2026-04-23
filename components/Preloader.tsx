"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Menggunakan durasi 2.5 detik untuk animasi teks yang solid dan padat.
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            scale: 1.05,
            filter: "blur(10px)",
          }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#010609] overflow-hidden"
        >
          {/* Subtle Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30rem] h-[30rem] md:w-[40rem] md:h-[40rem] bg-blue-primary/10 rounded-full blur-[120px] pointer-events-none" />

          <motion.div
            initial={{ scale: 0.9, opacity: 0, filter: "blur(10px)" }}
            animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative flex flex-col items-center z-10"
          >
            {/* Premium Typographic Logo */}
            <motion.h1 
              initial={{ letterSpacing: "0em", opacity: 0, filter: "blur(20px)", y: 30 }}
              animate={{ letterSpacing: "0.25em", opacity: 1, filter: "blur(0px)", y: 0 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl md:text-8xl font-black text-white mb-2 ml-[0.25em]"
            >
              HPIO
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, filter: "blur(10px)", y: -10 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
              className="text-blue-primary text-sm md:text-base font-bold tracking-[0.4em] uppercase drop-shadow-[0_0_8px_rgba(86,196,189,0.5)] ml-[0.4em]"
            >
              IT Operations & Maintenance
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
