"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { getData } from "@/services/fetchData";
import { getStorageUrl } from "@/lib/utils";

const staticTimelineData = [
  {
    batch: "Batch 1",
    year: "Agustus 2023 - Januari 2024",
    title: "Pionir Sistem Manajemen IT Cepat",
    description: "Generasi pertama internship HPIO PT KCIC. Berfokus pada perancangan konsep awal arsitektur jaringan, inventarisasi data base operasional tahap pertama, dan pemetaan server stasiun utama.",
    interns: [
      { name: "Nama Intern 1", role: "Network Engineer", image: "https://i.pravatar.cc/150?img=50" },
      { name: "Nama Intern 2", role: "System Administrator", image: "https://i.pravatar.cc/150?img=45" },
      { name: "Nama Intern 3", role: "IT Support", image: "https://i.pravatar.cc/150?img=47" },
    ]
  },
  {
    batch: "Batch 2",
    year: "Februari 2024 - Juli 2024",
    title: "Pengembangan Dashboard & Otomasi",
    description: "Melakukan peningkatan besar pada sistem pemantauan suhu server, status CCTV, perancangan dashboard interaktif, serta digitalisasi pelaporan kerusakan untuk efisiensi tim teknisi.",
    interns: [
      { name: "Nama Intern 4", role: "Frontend Developer", image: "https://i.pravatar.cc/150?img=51" },
      { name: "Nama Intern 5", role: "Backend Engineer", image: "https://i.pravatar.cc/150?img=33" },
      { name: "Nama Intern 6", role: "Data Analyst", image: "https://i.pravatar.cc/150?img=53" },
      { name: "Nama Intern 7", role: "UI/UX Designer", image: "https://i.pravatar.cc/150?img=12" }
    ]
  }
];

export const InternshipTimeline = () => {
  const [internsData, setInternsData] = useState<any[]>([]);

  // Fetch intern data from API
  getData("api/get-interns", setInternsData);

  // Map API data or fallback to static data
  const timelineData = internsData.length > 0 
    ? internsData.map((item: any) => ({
        batch: `Batch ${item.Batch}`,
        year: `${item.start_date} - ${item.end_date}`,
        title: item.achievement_title,
        description: item.achievement_description,
        interns: item.members?.map((member: any) => ({
          name: member.name,
          role: member.job_desk,
          image: member.image ? getStorageUrl(member.image) : "https://i.pravatar.cc/150?img=60"
        })) || []
      }))
    : staticTimelineData;

  return (
    <section className="py-24 bg-zinc-50 relative overflow-hidden" id="internship">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4 tracking-tight text-black-main"
          >
            Jejak Langkah Internship
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-zinc-500 text-lg max-w-2xl mx-auto"
          >
            Kisah dan kontribusi mahasiswa magang hebat yang turut serta membangun sistem IT Kereta Cepat Jakarta-Bandung dari masa ke masa.
          </motion.p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-primary via-blue-primary/50 to-transparent -translate-x-1/2" />

          {timelineData.map((item, idx) => (
            <div key={idx} className={`relative flex flex-col md:flex-row items-center md:justify-between mb-24 last:mb-0 ${idx % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
              
              {/* Timeline Node Symbol */}
              <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-white border-4 border-blue-primary -translate-x-1/2 shadow-[0_0_15px_rgba(86,196,189,0.5)] z-20 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-blue-primary" />
              </div>

              {/* Date Box (Mobile logic keeps it natural, desktop anchors it to center) */}
              <div className={`w-full md:w-5/12 flex ${idx % 2 === 0 ? "md:justify-start" : "md:justify-end"} pl-14 md:pl-0 mb-6 md:mb-0`}>
                <motion.div 
                  initial={{ opacity: 0, x: idx % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-white px-6 py-3 rounded-full shadow-md border border-zinc-100 inline-block"
                >
                  <span className="text-blue-primary font-bold mr-2">{item.batch}</span>
                  <span className="text-zinc-400 text-sm">{item.year}</span>
                </motion.div>
              </div>

              {/* Content Card */}
              <div className="w-full md:w-5/12 pl-14 md:pl-0">
                <motion.div 
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-3xl shadow-xl border border-zinc-100 hover:shadow-2xl transition-shadow duration-300"
                >
                  <h3 className="text-2xl font-bold text-black-main mb-3">{item.title}</h3>
                  <p className="text-zinc-500 mb-8 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="space-y-4">
                    <h4 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider">Anggota Tim:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {item.interns.map((intern: any, i: number) => (
                        <div key={i} className="flex items-center gap-3 p-3 rounded-2xl bg-zinc-50 border border-zinc-100 hover:border-blue-primary/30 transition-colors">
                          <img src={intern.image} alt={intern.name} className="w-10 h-10 rounded-full object-cover shadow-sm" />
                          <div>
                            <p className="text-sm font-bold text-black-main">{intern.name}</p>
                            <p className="text-[10px] text-zinc-500 font-medium">{intern.role}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

