import React from 'react';
import { Cpu, Globe, Code2, BookOpen, Layers, Database, Smartphone } from 'lucide-react';

export default function HomePage() {
  const studentInfo = {
    name: "Salsabila Mahda Runisha",
    id: "2141720257",
    role: "Full-stack Developer & IoT Enthusiast",
    bio: "Mahasiswi Teknik Informatika di Politeknik Negeri Malang yang berfokus pada pengembangan aplikasi web modern, sistem cerdas berbasis IoT, dan pengolahan data.",
    interests: [
      { name: "Next.js", icon: <Layers size={14} /> },
      { name: "Firebase", icon: <Database size={14} /> },
      { name: "Flutter", icon: <Smartphone size={14} /> },
      { name: "ESP32 / IoT", icon: <Cpu size={14} /> },
      { name: "Data Analysis", icon: <Globe size={14} /> }
    ],
    stats: [
      { label: "Semester", value: "6" },
      { label: "Main Projects", value: "4+" },
      { label: "Focus", value: "Software" }
    ]
  };

  return (
    <main className="min-h-screen bg-[#020617] text-slate-200 flex items-center justify-center p-4 md:p-8 selection:bg-cyan-500/30 overflow-hidden relative">

      <div className="absolute top-0 left-0 w-full h-full z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-cyan-600/10 rounded-full blur-[140px] animate-pulse" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-indigo-600/10 rounded-full blur-[140px] animate-pulse delay-700" />
      </div>

      <div className="max-w-3xl w-full bg-slate-900/40 backdrop-blur-2xl border border-slate-800/60 rounded-[2.5rem] p-8 md:p-14 shadow-2xl z-10 relative overflow-hidden">

        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

        <div className="relative z-10">
          <header className="space-y-6 mb-10 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-bold tracking-[0.2em] uppercase">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              Technical Student Profile
            </div>
            
            <div className="space-y-2">
              <h1 className="text-4xl md:text-6xl font-black tracking-tight bg-gradient-to-br from-white via-slate-200 to-slate-600 bg-clip-text text-transparent">
                {studentInfo.name}
              </h1>
              <div className="flex flex-col md:flex-row md:items-center gap-3 text-slate-400">
                <span className="text-lg font-medium text-cyan-500/80 tracking-wide uppercase text-sm">{studentInfo.role}</span>
                <span className="hidden md:block text-slate-700">|</span>
                <span className="font-mono text-sm tracking-tighter">ID: {studentInfo.id}</span>
              </div>
            </div>
          </header>

          <div className="grid grid-cols-3 gap-4 mb-10 py-6 border-y border-slate-800/50">
            {studentInfo.stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-[10px] uppercase tracking-widest text-slate-500 font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>

          <section className="mb-12">
            <h2 className="text-xs font-bold text-slate-500 uppercase tracking-[0.3em] mb-4 flex items-center gap-3">
               Brief Introduction
            </h2>
            <p className="text-slate-400 leading-relaxed text-lg font-light italic">
              &quot;{studentInfo.bio}&quot;
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-xs font-bold text-slate-500 uppercase tracking-[0.3em] mb-6 flex items-center gap-3">
              <Code2 size={14} className="text-cyan-500" /> Technology Stack
            </h2>
            <div className="flex flex-wrap gap-3">
              {studentInfo.interests.map((skill) => (
                <div 
                  key={skill.name}
                  className="group flex items-center gap-2 px-5 py-2.5 bg-slate-800/30 border border-slate-800 rounded-2xl text-sm font-medium hover:border-cyan-500/40 hover:bg-cyan-500/5 transition-all duration-300 cursor-default"
                >
                  <span className="text-slate-500 group-hover:text-cyan-400 transition-colors">
                    {skill.icon}
                  </span>
                  <span className="group-hover:text-white transition-colors">{skill.name}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Footer Section */}
          <footer className="pt-8 border-t border-slate-800/50 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center gap-3 text-slate-400 group cursor-pointer">
              <div className="p-2 rounded-lg bg-slate-800/50 group-hover:bg-cyan-500/10 transition-colors">
                <BookOpen size={18} className="text-cyan-500" />
              </div>
              <span className="text-sm font-medium tracking-tight group-hover:text-slate-200 transition-colors">Politeknik Negeri Malang</span>
            </div>
            
            <div className="flex items-center gap-4 text-slate-500 text-[11px] font-mono tracking-tighter uppercase">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                Containerized Environment
              </div>
              <span className="text-slate-800">/</span>
              <span>v1.0.4-2026</span>
            </div>
          </footer>
        </div>
      </div>
    </main>
  );
}