"use client";

import { motion } from "framer-motion";
import { Users, GraduationCap } from "lucide-react";

export default function OrganizationPage() {
  const manager = [
    { role: "Manager", name: "Muhammad Syaiful Ramadhan", title: "IT O&M Manager", image: "https://i.pravatar.cc/150?img=11" }
  ];

  const teamLeaders = [
    { role: "Team Leader", name: "Zandhy Pratama", title: "Halim & Karawang Leader", image: "https://i.pravatar.cc/150?img=18" },
    { role: "Team Leader", name: "Muhammad Faishal Affianto", title: "Padalarang & Tegalluar Leader", image: "https://i.pravatar.cc/150?img=14" },
    { role: "Team Leader", name: "Yhozigma Harra Ramanda", title: "501 Leader", image: "https://i.pravatar.cc/150?img=33" }
  ];

  const rangers = [
    { role: "Ranger", name: "Tsany", title: "Ranger", image: "https://i.pravatar.cc/150?img=8" },
    { role: "Ranger", name: "Avian", title: "Ranger", image: "https://i.pravatar.cc/150?img=15" },
    { role: "Ranger", name: "Rabby", title: "Ranger", image: "https://i.pravatar.cc/150?img=55" },
    { role: "Ranger", name: "Urwah", title: "Ranger", image: "https://i.pravatar.cc/150?img=59" },
    { role: "Ranger", name: "Fadel", title: "Ranger", image: "https://i.pravatar.cc/150?img=60" }
  ];

  // Dummy 13 Interns from Telkom University
  const interns = Array.from({ length: 13 }).map((_, idx) => ({
    id: idx + 1,
    name: `Intern Tel-U ${idx + 1}`, // Anda bisa menggantinya dengan nama aslinya
    university: "Telkom University",
    period: "2023 - 2024", // Contoh periode
    role: "Project Intern",
    image: `https://i.pravatar.cc/150?img=${10 + idx}`, // Random avatar
  }));

  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-3xl font-bold flex items-center gap-3">
          <Users className="text-blue-primary" />
          Struktur Organisasi
        </h1>
        <p className="text-zinc-400 mt-1">Hierarki tim IT O&M dan riwayat anggota magang (Internship).</p>
      </div>

      {/* STRUKTUR ORGANISASI UTAMA */}
      <div className="bg-zinc-900 border border-white/5 rounded-2xl p-8 relative overflow-hidden">
        <h2 className="text-xl font-semibold mb-12 text-center text-white border-b border-white/10 pb-4 inline-block relative left-1/2 -translate-x-1/2">
          Struktur Utama Tim
        </h2>

        <div className="flex flex-col items-center gap-16 max-w-6xl mx-auto relative">
          
          {/* 1. Manager */}
          <div className="relative flex justify-center w-full">
            {manager.map((person, idx) => (
              <motion.div
                key={`mgr-${idx}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-1 rounded-2xl bg-gradient-to-b from-blue-primary/40 to-transparent w-72 z-10 group cursor-pointer"
              >
                <div className="bg-black-main rounded-xl p-8 h-full border border-white/10 flex flex-col items-center text-center">
                  <div className="relative w-32 h-32 mb-6">
                    <img 
                      src={person.image} 
                      alt={person.name}
                      className="w-full h-full object-cover rounded-full border-2 border-blue-primary shadow-[0_0_20px_rgba(86,196,189,0.3)] transition-all duration-500 ease-out group-hover:scale-110 relative z-20"
                    />
                  </div>
                  <span className="text-blue-primary text-sm font-semibold uppercase tracking-wider mb-2">{person.role}</span>
                  <h4 className="text-2xl font-bold mb-1">{person.name}</h4>
                  <p className="text-base text-zinc-400">{person.title}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Connecting Line (Optional Desktop) */}
          <div className="hidden md:block absolute top-[280px] bottom-1/2 left-1/2 w-0.5 bg-gradient-to-b from-blue-primary/50 to-transparent -z-10" />

          {/* 2. Team Leaders */}
          <div className="relative flex flex-wrap justify-center gap-6 md:gap-10 w-full">
            {teamLeaders.map((person, idx) => (
              <motion.div
                key={`tl-${idx}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * idx }}
                className="p-[1px] rounded-2xl bg-gradient-to-b from-blue-primary/20 to-transparent w-60 z-10 group cursor-pointer"
              >
                <div className="bg-black-main rounded-xl p-6 h-full border border-white/5 flex flex-col items-center text-center transition-colors group-hover:border-blue-primary/30">
                  <div className="relative w-24 h-24 mb-5">
                    <img 
                      src={person.image} 
                      alt={person.name}
                      className="w-full h-full object-cover rounded-full border-2 border-blue-primary/50 transition-all duration-500 ease-out group-hover:scale-110 relative z-20"
                    />
                  </div>
                  <span className="text-blue-primary text-xs font-semibold uppercase tracking-wider mb-2">{person.role}</span>
                  <h4 className="text-xl font-bold mb-1">{person.name}</h4>
                  <p className="text-sm text-zinc-400">{person.title}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* 3. Rangers */}
          <div className="relative flex flex-wrap justify-center gap-4 md:gap-8 w-full mt-6">
            {rangers.map((person, idx) => (
              <motion.div
                key={`rng-${idx}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + (0.1 * idx) }}
                className="p-[1px] rounded-2xl bg-gradient-to-b from-white/10 to-transparent w-48 z-10 group cursor-pointer"
              >
                <div className="bg-zinc-950 rounded-xl p-5 h-full border border-white/5 flex flex-col items-center text-center transition-colors group-hover:bg-zinc-900 group-hover:border-white/20">
                  <div className="relative w-20 h-20 mb-4">
                    <img 
                      src={person.image} 
                      alt={person.name}
                      className="w-full h-full object-cover rounded-full border border-white/10 transition-all duration-500 ease-out group-hover:scale-110 relative z-20"
                    />
                  </div>
                  <span className="text-zinc-400 text-[10px] font-semibold uppercase tracking-wider mb-1">{person.role}</span>
                  <h4 className="text-lg font-bold mb-1">{person.name}</h4>
                  <p className="text-xs text-zinc-500">{person.title}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>

      {/* RIWAYAT MAGANG TELKOM UNIVERSITY */}
      <div className="bg-zinc-900 border border-white/5 rounded-2xl p-8 relative overflow-hidden mt-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div>
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <GraduationCap className="text-blue-primary" />
              Riwayat Magang
            </h2>
            <p className="text-zinc-400 text-sm mt-1">Daftar 13 mahasiswa Telkom University yang pernah magang di tim HPIO IT O&M.</p>
          </div>
          <div className="px-4 py-2 bg-blue-primary/10 border border-blue-primary/30 rounded-xl text-blue-primary text-sm font-semibold">
            Total: 13 Interns
          </div>
        </div>

        {/* Gunakan Grid untuk anggota magang */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {interns.map((intern, idx) => (
            <motion.div
              key={`intern-${idx}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-black-main border border-white/5 rounded-xl p-4 flex flex-col items-center text-center hover:border-blue-primary/50 transition-colors group"
            >
              <img 
                src={intern.image} 
                alt={intern.name}
                className="w-16 h-16 rounded-full object-cover mb-3 grayscale group-hover:grayscale-0 transition-all duration-300 border border-white/10"
              />
              <h5 className="font-bold text-sm text-white mb-1">{intern.name}</h5>
              <span className="text-[10px] text-zinc-500 bg-white/5 px-2 py-0.5 rounded uppercase tracking-wider mb-2">
                {intern.university}
              </span>
              <p className="text-xs text-zinc-400">{intern.period}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
