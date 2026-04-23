"use client";

import { motion } from "framer-motion";
import { Spotlight } from "@/components/ui/Spotlight";
import { Navbar } from "@/components/Navbar";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { ImageCarousel } from "@/components/ui/ImageCarousel";
import { InternshipTimeline } from "@/components/InternshipTimeline";
import { ArrowRight, Monitor, Server, Wrench, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-black-main text-white selection:bg-blue-primary/30">
      <Navbar />

      {/* Hero Section */}
      <section id="hero" className="relative bg-black-main overflow-hidden">
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
        <Spotlight className="pt-32 pb-20 md:pt-48 md:pb-32 flex items-center justify-center min-h-[90vh] w-full">
          <div className="max-w-7xl mx-auto px-6 relative z-10 text-center w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
                IT Operations & Maintenance <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-primary to-blue-300">
                  HPIO KCIC
                </span>
              </h1>
              <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10">
                Memastikan keandalan sistem dan infrastruktur IT stasiun Kereta Cepat Jakarta-Bandung demi kelancaran operasional setiap hari.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link 
                  href="/login" 
                  className="px-8 py-3 rounded-full bg-blue-primary text-black-main font-semibold hover:bg-blue-400 transition-colors flex items-center gap-2"
                >
                  Masuk ke Sistem <ArrowRight size={18} />
                </Link>
                <Link 
                  href="#about" 
                  className="px-8 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-medium transition-colors backdrop-blur-sm"
                >
                  Pelajari Lebih Lanjut
                </Link>
              </div>
            </motion.div>
          </div>
        </Spotlight>
      </section>

      {/* The Core IT Backbone Section */}
      <section id="about" className="py-24 bg-gradient-to-b from-black-main via-[#041217] to-[#061a24] overflow-hidden border-t border-white/5 relative">
        <div className="absolute inset-0 bg-blue-primary/5 mix-blend-overlay pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            
            {/* Left Content */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight uppercase">About Us</h2>
              <div className="space-y-6 text-zinc-400 text-lg leading-relaxed">
                <p>
                  HPIO serves as the critical nervous system of PT KCIC, engineered to ensure 24/7 reliability for high-speed rail operations. We do not just maintain systems; we guarantee uptime in an environment where milliseconds matter.
                </p>
                <p>
                  Our operational mandate focuses on proactive monitoring, instantaneous anomaly detection, and rapid deployment of technical resolutions across all command and control layers.
                </p>
              </div>
            </motion.div>

            {/* Right Content - Server visual with Terminal */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2 w-full"
            >
              <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-zinc-900 group shadow-2xl">
                <div className="absolute inset-0 bg-blue-primary/10 mix-blend-overlay z-10 transition-colors duration-500 group-hover:bg-blue-primary/20"></div>
                
                <img 
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop" 
                  alt="Server Racks" 
                  className="w-full h-[400px] object-cover grayscale opacity-70 transition-transform duration-700 group-hover:scale-105"
                />

                {/* Terminal Overlay */}
                <div className="absolute bottom-6 left-6 right-6 bg-black/80 backdrop-blur-md border border-white/10 rounded-xl p-5 z-20 font-mono text-xs md:text-sm shadow-2xl">
                  <div className="space-y-1.5">
                    <p className="text-blue-primary font-semibold">&gt; UPTIME_VERIFICATION: <span className="text-white font-bold ml-1">NOMINAL</span></p>
                    <p className="text-blue-primary font-semibold">&gt; NETWORK_LATENCY: <span className="text-white font-bold ml-1">1.2ms</span></p>
                    <p className="text-zinc-500 flex items-center">&gt; AWAITING_COMMAND<span className="w-2 h-4 bg-zinc-500 ml-1 animate-pulse" /></p>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* About Us & Core Responsibilities */}
      <section id="responsibilities" className="py-24 bg-gradient-to-b from-[#061a24] via-[#07212e] to-[#030d14] relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-primary/5 via-transparent to-transparent pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Responsibilities</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">Kami berdedikasi untuk menjaga perfoma sistem IT agar operasional perjalanan Kereta Cepat selalu dalam kondisi prima.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Monitor size={32} />, title: "Sistem Maintenance", desc: "Pemeliharaan rutin perangkat IT stasiun (TVM, Gate, dll)" },
              { icon: <Server size={32} />, title: "Monitoring", desc: "Pemantauan real-time terhadap infrastruktur jaringan & server" },
              { icon: <Wrench size={32} />, title: "Troubleshooting", desc: "Penanganan cepat terhadap kendala sistem dan hardware" },
              { icon: <ShieldCheck size={32} />, title: "Operasional Support", desc: "Dukungan IT penuh untuk kelancaran tim HPIO" }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-zinc-900 border border-white/5 hover:border-blue-primary/50 transition-colors group"
              >
                <div className="w-14 h-14 rounded-full bg-blue-primary/10 flex items-center justify-center text-blue-primary mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Karya & Hasil Operasional (Sticky Scroll Reveal) */}
      <section id="works" className="pt-24 pb-64 md:pb-80 bg-gradient-to-b from-[#030d14] via-black-main to-[#05171f] overflow-hidden border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Hasil Pekerjaan & Kegiatan</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">Dokumentasi nyata kegiatan kami berserta deskripsi dari portofolio operasional di lapangan.</p>
        </div>
        <div className="max-w-6xl mx-auto px-6">
          <StickyScroll content={[
            {
              title: "Pemeliharaan TVM & Gate Stasiun",
              description:
                "Tim HPIO melakukan pemeliharaan berkala pada perangkat layar sentuh, sistem pencetak, dan mekanisme pembayaran pada Ticket Vending Machine (TVM). Kami juga memastikan keakuratan sensor pada Automatic Fare Collection (AFC) Gate agar arus masuk-keluar penumpang di stasiun berjalan cepat tanpa latensi.",
              content: (
                <ImageCarousel images={[
                  "https://images.unsplash.com/photo-1591035882672-0050e0f316bf?q=80&w=1000&auto=format&fit=crop",
                  "https://images.unsplash.com/photo-1586769852044-692d6e3703f0?q=80&w=1000&auto=format&fit=crop",
                  "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop"
                ]} />
              ),
            },
            {
              title: "Network & Server Optimization",
              description:
                "Mengelola lalu lintas data operasional kereta yang sangat padat, tim kami melakukan peningkatan kapasitas (upgrade) infrastruktur jaringan fiber optic dan switch core stasiun secara rutin. Semua rack server dikonfigurasi ulang untuk mencegah downtime.",
              content: (
                <ImageCarousel images={[
                  "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1000&auto=format&fit=crop",
                  "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1000&auto=format&fit=crop",
                  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop"
                ]} />
              ),
            },
            {
              title: "24/7 Command Center Monitoring",
              description:
                "Sistem HPIO memantau metrik kesehatan (health check) setiap node jaringan mulai dari Halim hingga Tegalluar selama 24 jam penuh. Command Center ini bertugas merespons traffic spike dan anomali data sebelum tereskalasi menjadi isu serius pada sistem ticketing.",
              content: (
                <ImageCarousel images={[
                  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
                  "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1000&auto=format&fit=crop",
                  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1000&auto=format&fit=crop"
                ]} />
              ),
            },
            {
              title: "Rapid Troubleshooting di Lapangan",
              description:
                "Dalam skenario sistem kritis, Tim Ranger bersiaga untuk penggelaran pemulihan hardware langsung di lapangan (on-site). Dari penggantian modul hingga instalasi kabel, setiap respons darurat dieksekusi dengan SLA untuk mengamankan Recovery Time Objective (RTO).",
              content: (
                <ImageCarousel images={[
                  "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1000&auto=format&fit=crop",
                  "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1000&auto=format&fit=crop",
                  "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop"
                ]} />
              ),
            },
          ]} />
        </div>

        {/* Wave Shape Divider */}
        <div className="absolute bottom-[-1px] left-0 w-full overflow-hidden leading-[0] transform rotate-180 pointer-events-none">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[100px] md:h-[180px]">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="#ffffff" fillOpacity=".1"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5V0Z" fill="#ffffff" fillOpacity=".3"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="#ffffff"></path>
          </svg>
        </div>
      </section>

      {/* Structure Highlight */}
      <section id="structure" className="pt-10 pb-32 overflow-hidden relative bg-white text-black-main">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">Tim Kami</h2>
            <p className="text-zinc-600 text-lg">Motor penggerak di balik keandalan teknologi Kereta Cepat.</p>
          </div>

          <div className="flex flex-col items-center gap-16 max-w-6xl mx-auto relative">
            
            {/* --- HPIO SECTION DIVIDER --- */}
            <div className="w-full mb-4 relative">
              <div className="absolute inset-0 flex items-center" aria-hidden="true">
                <div className="w-full border-t border-zinc-200"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="bg-white px-6 text-2xl font-bold text-black-main">Tim Internal HPIO</span>
              </div>
            </div>

            {/* 1. Manager */}
            <div className="relative flex justify-center w-full">
              {[
                { role: "Manager", name: "Muhammad Syaiful Ramadhan", title: "IT O&M Manager", image: "https://i.pravatar.cc/150?img=11" }
              ].map((person, idx) => (
                <motion.div
                  key={`mgr-${idx}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="p-[1px] rounded-3xl bg-gradient-to-b from-blue-primary/40 to-blue-primary/10 w-72 z-10 hover:shadow-xl transition-all duration-300 group cursor-pointer"
                >
                  <div className="bg-white rounded-[1.4rem] p-8 h-full border border-blue-primary/20 flex flex-col items-center text-center shadow-sm relative overflow-hidden">
                    <div className="absolute top-0 w-full h-1/3 bg-blue-primary/5 rounded-t-[1.4rem]"></div>
                    <div className="relative w-32 h-32 mb-6">
                      <img 
                        src={person.image} 
                        alt={person.name}
                        className="w-full h-full object-cover rounded-full border-4 border-white shadow-lg transition-all duration-500 ease-out group-hover:scale-125 group-hover:-translate-y-4 group-hover:shadow-[0_10px_40px_rgba(86,196,189,0.3)] relative z-20"
                      />
                    </div>
                    <span className="text-blue-primary text-sm font-semibold uppercase tracking-wider mb-2 relative z-10">{person.role}</span>
                    <h4 className="text-xl font-bold mb-1 text-black-main relative z-10">{person.name}</h4>
                    <p className="text-sm text-zinc-500 relative z-10">{person.title}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Connecting Line (Optional Desktop) */}
            <div className="hidden md:block absolute top-[280px] bottom-1/2 left-1/2 w-[1px] bg-gradient-to-b from-blue-primary/40 to-transparent -z-10" />

            {/* 2. Team Leaders */}
            <div className="relative flex flex-wrap justify-center gap-6 md:gap-10 w-full">
              {[
                { role: "Team Leader", name: "Zandhy Pratama", title: "Halim & Karawang Leader", image: "https://i.pravatar.cc/150?img=18" },
                { role: "Team Leader", name: "Muhammad Faishal Affianto", title: "Padalarang & Tegalluar Leader", image: "https://i.pravatar.cc/150?img=14" },
                { role: "Team Leader", name: "Yhozigma Harra Ramanda", title: "501 Leader", image: "https://i.pravatar.cc/150?img=33" }
              ].map((person, idx) => (
                <motion.div
                  key={`tl-${idx}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * idx }}
                  className="p-[1px] rounded-3xl bg-gradient-to-b from-blue-primary/20 to-zinc-200 w-60 z-10 hover:shadow-lg transition-all duration-300 group cursor-pointer"
                >
                  <div className="bg-zinc-50 rounded-[1.4rem] p-6 h-full border border-white flex flex-col items-center text-center shadow-sm relative overflow-hidden group-hover:bg-white group-hover:border-blue-primary/30 transition-colors">
                    <div className="relative w-24 h-24 mb-5">
                      <img 
                        src={person.image} 
                        alt={person.name}
                        className="w-full h-full object-cover rounded-full border-4 border-white shadow-md transition-all duration-500 ease-out group-hover:scale-125 group-hover:-translate-y-3 group-hover:border-blue-primary/10 group-hover:shadow-[0_10px_30px_rgba(86,196,189,0.2)] relative z-20"
                      />
                    </div>
                    <span className="text-blue-dark text-xs font-semibold uppercase tracking-wider mb-2">{person.role}</span>
                    <h4 className="text-lg font-bold mb-1 text-black-main">{person.name}</h4>
                    <p className="text-xs text-zinc-500">{person.title}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* 3. Rangers */}
            <div className="relative flex flex-wrap justify-center gap-4 md:gap-8 w-full mt-6">
              {[
                { role: "Ranger", name: "Tsany", title: "Ranger", image: "https://i.pravatar.cc/150?img=8" },
                { role: "Ranger", name: "Avian", title: "Ranger", image: "https://i.pravatar.cc/150?img=15" },
                { role: "Ranger", name: "Rabby", title: "Ranger", image: "https://i.pravatar.cc/150?img=55" },
                { role: "Ranger", name: "Urwah", title: "Ranger", image: "https://i.pravatar.cc/150?img=59" },
                { role: "Ranger", name: "Fadel", title: "Ranger", image: "https://i.pravatar.cc/150?img=60" }
              ].map((person, idx) => (
                <motion.div
                  key={`rng-${idx}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (0.1 * idx) }}
                  className="p-[1px] rounded-2xl bg-zinc-200 hover:bg-gradient-to-b hover:from-blue-primary/20 hover:to-zinc-200 w-48 z-10 transition-all duration-300 group cursor-pointer"
                >
                  <div className="bg-white rounded-[1rem] p-5 h-full border border-white flex flex-col items-center text-center shadow-sm group-hover:border-blue-primary/20 transition-colors">
                    <div className="relative w-20 h-20 mb-4">
                      <img 
                        src={person.image} 
                        alt={person.name}
                        className="w-full h-full object-cover rounded-full border-4 border-zinc-100 shadow-sm transition-all duration-500 ease-out group-hover:scale-125 group-hover:-translate-y-2 group-hover:border-white group-hover:shadow-[0_10px_20px_rgba(86,196,189,0.15)] relative z-20"
                      />
                    </div>
                    <span className="text-zinc-500 text-[10px] font-semibold uppercase tracking-wider mb-1">{person.role}</span>
                    <h4 className="text-base font-bold mb-1 text-black-main">{person.name}</h4>
                    <p className="text-xs text-zinc-500">{person.title}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* --- CNJO SECTION DIVIDER --- */}
            <div className="w-full mt-24 mb-16 relative">
              <div className="absolute inset-0 flex items-center" aria-hidden="true">
                <div className="w-full border-t border-zinc-200"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="bg-white px-6 text-2xl font-bold text-black-main">Tim CNJO (Cars Nutech Join Operation)</span>
              </div>
            </div>

            {/* Tim CNJO Content */}
            <div className="flex flex-col items-center gap-16 w-full relative">
              
              {/* 1. Project Manager */}
              <div className="relative flex justify-center w-full">
                {[
                  { role: "Project Manager", name: "Project Manager", title: "Project Manager CNJO", image: "https://i.pravatar.cc/150?img=12" }
                ].map((person, idx) => (
                  <motion.div
                    key={`cnjo-pm-${idx}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="p-[1px] rounded-3xl bg-gradient-to-b from-blue-primary/40 to-blue-primary/10 w-72 z-10 hover:shadow-xl transition-all duration-300 group cursor-pointer"
                  >
                    <div className="bg-white rounded-[1.4rem] p-8 h-full border border-blue-primary/20 flex flex-col items-center text-center shadow-sm relative overflow-hidden">
                      <div className="absolute top-0 w-full h-1/3 bg-blue-primary/5 rounded-t-[1.4rem]"></div>
                      <div className="relative w-32 h-32 mb-6">
                        <img 
                          src={person.image} 
                          alt={person.name}
                          className="w-full h-full object-cover rounded-full border-4 border-white shadow-lg transition-all duration-500 ease-out group-hover:scale-125 group-hover:-translate-y-4 group-hover:shadow-[0_10px_40px_rgba(86,196,189,0.3)] relative z-20"
                        />
                      </div>
                      <span className="text-blue-primary text-sm font-semibold uppercase tracking-wider mb-2 relative z-10">{person.role}</span>
                      <h4 className="text-xl font-bold mb-1 text-black-main relative z-10">{person.name}</h4>
                      <p className="text-sm text-zinc-500 relative z-10">{person.title}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Connecting Line */}
              <div className="hidden md:block absolute top-[280px] bottom-1/2 left-1/2 w-[1px] bg-gradient-to-b from-blue-primary/40 to-transparent -z-10" />

              {/* Admin, Interpreter & Teknisi */}
              <div className="relative flex flex-wrap justify-center gap-4 md:gap-8 w-full mt-6">
                {[
                  { role: "Admin", name: "Fadillah", title: "Admin", image: "https://i.pravatar.cc/150?img=20" },
                  { role: "Interpreter", name: "Rahmat Fiyantiko", title: "Mandarin Specialist", image: "https://i.pravatar.cc/150?img=22" },
                  { role: "Interpreter", name: "Aliffio", title: "Mandarin Specialist", image: "https://i.pravatar.cc/150?img=24" },
                  { role: "Teknisi", name: "Dustin", title: "Teknisi Lapangan", image: "https://i.pravatar.cc/150?img=30" },
                  { role: "Teknisi", name: "Rizal Mutaqien", title: "Teknisi Lapangan", image: "https://i.pravatar.cc/150?img=31" },
                  { role: "Teknisi", name: "Alif Capslock", title: "Teknisi Lapangan", image: "https://i.pravatar.cc/150?img=32" },
                  { role: "Teknisi", name: "Alif Aus", title: "Teknisi Lapangan", image: "https://i.pravatar.cc/150?img=33" },
                  { role: "Teknisi", name: "Naufal Zha", title: "Teknisi Lapangan", image: "https://i.pravatar.cc/150?img=34" },
                  { role: "Teknisi", name: "Isal", title: "Teknisi Lapangan", image: "https://i.pravatar.cc/150?img=35" },
                  { role: "Teknisi", name: "Egi Yushis", title: "Teknisi Lapangan", image: "https://i.pravatar.cc/150?img=36" },
                  { role: "Teknisi", name: "Moh Jalu", title: "Teknisi Lapangan", image: "https://i.pravatar.cc/150?img=37" },
                  { role: "Teknisi", name: "Fatah Al", title: "Teknisi Lapangan", image: "https://i.pravatar.cc/150?img=38" },
                  { role: "Teknisi", name: "Reino", title: "Teknisi Lapangan", image: "https://i.pravatar.cc/150?img=39" },
                  { role: "Teknisi", name: "Imersto", title: "Teknisi Lapangan", image: "https://i.pravatar.cc/150?img=40" },
                  { role: "Teknisi", name: "Putra Yarman", title: "Teknisi Lapangan", image: "https://i.pravatar.cc/150?img=41" },
                  { role: "Teknisi", name: "Zidane", title: "Teknisi Lapangan", image: "https://i.pravatar.cc/150?img=42" }
                ].map((person, idx) => (
                  <motion.div
                    key={`cnjo-team-${idx}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + ((idx % 7) * 0.1) }}
                    className="p-[1px] rounded-2xl bg-zinc-200 hover:bg-gradient-to-b hover:from-blue-primary/20 hover:to-zinc-200 w-48 z-10 transition-all duration-300 group cursor-pointer"
                  >
                    <div className="bg-white rounded-[1rem] p-5 h-full border border-white flex flex-col items-center text-center shadow-sm group-hover:border-blue-primary/20 transition-colors">
                      <div className="relative w-20 h-20 mb-4">
                        <img 
                          src={person.image} 
                          alt={person.name}
                          className="w-full h-full object-cover rounded-full border-4 border-zinc-100 shadow-sm transition-all duration-500 ease-out group-hover:scale-125 group-hover:-translate-y-2 group-hover:border-white group-hover:shadow-[0_10px_20px_rgba(86,196,189,0.15)] relative z-20"
                        />
                      </div>
                      <span className="text-zinc-500 text-[10px] font-semibold uppercase tracking-wider mb-1">{person.role}</span>
                      <h4 className="text-base font-bold mb-1 text-black-main">{person.name}</h4>
                      <p className="text-xs text-zinc-500">{person.title}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Internship Timeline Area */}
      <InternshipTimeline />

      {/* Footer */}
      <footer className="py-8 border-t border-white/10 text-center text-zinc-500 text-sm bg-black-main">
        <p>&copy; {new Date().getFullYear()} IT O&M HPIO PT KCIC. All rights reserved.</p>
      </footer>
    </main>
  );
}
