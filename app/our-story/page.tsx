"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { ImageCarousel } from "@/components/ui/ImageCarousel";
import { getData } from "@/services/fetchData";
import { getStorageUrl } from "@/lib/utils";

// Data Sejarah Proyek Departemen
const fallbackStories = [
  {
    year: "Februari 2023",
    title: "Inisiasi Departemen IT O&M",
    description: "Departemen IT Operations & Maintenance HPIO secara resmi dibentuk untuk memastikan seluruh sistem teknologi informasi fungsional utama pada jalur transportasi Kereta Cepat Jakarta - Bandung beroperasi dengan aman, andal, dan minim gangguan.",
    documentation: [
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop", // Meeting/Server room logic
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop"
    ]
  },
  {
    year: "Agustus 2023",
    title: "Pemasangan Server Inti & Jaringan Stasiun",
    description: "Mengeksekusi pemasangan arsitektur jaringan berbasis fiber optik yang membentang dari Stasiun Halim hingga Tegalluar. Melibatkan integrasi perangkat keras kelas enterprise (Switches, Routers, dan Mainframes).",
    documentation: [
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop", // Server rack
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2070&auto=format&fit=crop" // Network cables
    ]
  },
  {
    year: "November 2023",
    title: "Live Uji Coba Operasional IT",
    description: "Keberhasilan uji coba (*commissioning testing*) secara paralel pertama kali untuk seluruh sistem persinyalan, gerbang *ticketing*, dan sistem CCTV keamanan stasiun tanpa ada gangguan berarti (Zero-Downtime).",
    documentation: [
      "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop", // Tech working
      "https://images.unsplash.com/photo-1664575602276-acd073f104c1?q=80&w=2070&auto=format&fit=crop"
    ]
  },
  {
    year: "Maret 2024",
    title: "Penerapan HPIO Command Center",
    description: "Peluncuran tahap pertama markas komando atau pusat pemantauan *real-time* IT. Dari layar raksasa ini, seluruh anomali pada sistem dapat dilacak dan teknisi dapat diterjunkan ke titik koordinat masalah dalam hitungan menit.",
    documentation: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop", // Data screens
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2012&auto=format&fit=crop" // Presentation/monitoring
    ]
  }
];

export default function OurStoryPage() {
  const [storiesData, setStoriesData] = useState<any>(null);

  // Fetch stories from API
  getData("api/get-stories", setStoriesData);

  // Map API data if available, otherwise use fallback
  const displayStories = storiesData?.stories?.length > 0
    ? storiesData.stories.map((s: any) => ({
        year: s.time,
        title: s.title,
        description: s.description,
        documentation: s.images?.map((img: any) => getStorageUrl(img.image_path)) || []
      }))
    : fallbackStories;

  return (
    <main className="min-h-screen bg-black-main text-white selection:bg-blue-primary/30 pb-20">
      <Navbar />

      {/* Header Section */}
      <section className="pt-40 pb-16 px-6 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-r from-blue-primary to-blue-dark bg-clip-text text-transparent"
        >
          Sejarah & Proyek Kami
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-zinc-400 text-lg md:text-xl max-w-3xl mx-auto"
        >
          Mendokumentasikan jejak rekam, peristiwa bersejarah, dan penyelesaian proyek krusial oleh Departemen IT O&M dalam membangun pondasi teknologi transportasi modern.
        </motion.p>
      </section>

      {/* Story Timeline Section */}
      <section className="relative max-w-6xl mx-auto px-6 mt-10">
        
        {/* Garis Tengah Vertikal */}
        <div className="absolute left-6 md:left-1/2 top-4 bottom-0 w-[2px] bg-gradient-to-b from-blue-primary/60 via-blue-primary/20 to-transparent -translate-x-[1px] md:-translate-x-1/2" />

        <div className="space-y-24 md:space-y-32 relative">
          {displayStories.map((story: any, idx: number) => (
            <div 
              key={idx} 
              className={`relative flex flex-col md:flex-row items-center md:items-stretch gap-8 md:gap-0 ${
                idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              
              {/* Titik Point Timeline */}
              <div className="absolute left-0 md:left-1/2 top-0 w-12 h-12 rounded-full bg-black-main border-4 border-blue-primary flex items-center justify-center -translate-x-[50%] z-20 shadow-[0_0_20px_rgba(86,196,189,0.4)]">
                <div className="w-3 h-3 bg-white rounded-full" />
              </div>

              {/* Konten Kiri / Kanan (Text) */}
              <div className={`w-full md:w-1/2 flex flex-col justify-start pt-2 pl-16 md:pl-0 ${
                idx % 2 === 0 ? "md:pr-16 md:items-end md:text-right" : "md:pl-16 md:items-start md:text-left"
              }`}>
                <motion.div
                  initial={{ opacity: 0, x: idx % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <span className="inline-block py-1 px-4 rounded-full bg-blue-primary/10 border border-blue-primary/30 text-blue-primary font-bold text-sm tracking-widest mb-4">
                    {story.year}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">{story.title}</h2>
                  <p className="text-zinc-400 leading-relaxed text-base md:text-lg">
                    {story.description}
                  </p>
                </motion.div>
              </div>

              {/* Konten Kanan / Kiri (Dokumentasi Foto) */}
              <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${
                idx % 2 === 0 ? "md:pl-16" : "md:pr-16"
              }`}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: 0.2 }}
                  className="w-full h-[250px] md:h-[350px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative group"
                >
                  <ImageCarousel images={story.documentation} />
                </motion.div>
              </div>

            </div>
          ))}
        </div>

      </section>

      {/* Footer minimalis */}
      <footer className="mt-32 py-8 border-t border-white/5 text-center text-zinc-600 text-sm">
        <p>&copy; {new Date().getFullYear()} IT O&M HPIO PT KCIC. Divisi Sejarah.</p>
      </footer>
    </main>
  );
}

