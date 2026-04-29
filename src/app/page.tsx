import React from 'react';
import { Cpu, Code2, BookOpen } from 'lucide-react';

export default function HomePage() {
  const studentInfo = {
    name: "Salsabila Mahda Runisha",
    id: "214172XXXX", // Sesuaikan dengan NIM Polinema-mu
    role: "Full-stack Developer & IoT Enthusiast",
    bio: "Mahasiswi Teknik Informatika di Politeknik Negeri Malang yang berfokus pada pengembangan aplikasi web modern, IoT, dan analisis data.",
    interests: ["Next.js", "Firebase", "Tailwind CSS", "Arduino/ESP32", "Data Analysis"]
  };

  return (
    <main className="min-h-screen bg-[#0f172a] text-slate-200 flex items-center justify-center p-6 selection:bg-cyan-500/30">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-900/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/20 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-2xl w-full bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-3xl p-8 md:p-12 shadow-2xl z-10">
        {/* Header Section */}
        <header className="space-y-4 mb-8">
          <div className="inline-block px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-medium tracking-wider uppercase">
            Student Profile
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-slate-200 to-slate-500 bg-clip-text text-transparent">
            {studentInfo.name}
          </h1>
          <p className="text-xl text-cyan-400 font-medium">NIM: {studentInfo.id}</p>
        </header>

        {/* About Section */}
        <section className="mb-10">
          <p className="text-slate-400 leading-relaxed text-lg">
            {studentInfo.bio}
          </p>
        </section>

        {/* Interests Section */}
        <section className="mb-10">
          <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-widest mb-4 flex items-center gap-2">
            <Cpu size={16} /> Tech Interests
          </h2>
          <div className="flex flex-wrap gap-2">
            {studentInfo.interests.map((skill) => (
              <span 
                key={skill}
                className="px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-xl text-sm hover:border-cyan-500/50 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Footer Section */}
        <footer className="pt-8 border-t border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-2 text-slate-400 text-sm">
            <BookOpen size={18} className="text-cyan-500" />
            <span>Politeknik Negeri Malang</span>
          </div>
          
          <div className="flex items-center gap-2 text-slate-500 text-sm italic">
            <Code2 size={16} />
            Built with Next.js & Docker
          </div>
        </footer>
      </div>
    </main>
  );
}