import React from 'react';
import { Sparkles, BookOpen, Cpu, Globe2, ArrowUpRight } from 'lucide-react';
import { LinkedinIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function CommunityLogs() {
  const { thoughtsAndPosts, personal } = portfolioData;

  const logs = [
    {
      id: "log-1",
      number: "LOG_01",
      tag: "TECHNICAL_MENTORSHIP",
      title: "Teaching Is The Ultimate Mastery: Leading a 72-Hour ML & DL Bootcamp",
      date: "Camp Edition",
      subtitle: "Upskilling 1st-year B.Tech juniors from zero coding to training classification models in 72 hours.",
      content: [
        "Day 1: Demystified developer logic, POSIX toolchains, Python virtual environments, and core algorithmic structure.",
        "Day 2 & 3: Cut through the 'black box' of Machine Learning using Scikit-Learn; taught feature matrix creation and data normalization.",
        "The Highlight: Guiding students as their faces lit up training two actual models from scratch: Logistic Regression and a Random Forest Classifier."
      ],
      impact: "72 Hours • Hands-on Lab • Logistic Regression • Random Forest",
      icon: <BookOpen size={16} className="text-[#ea384c]" />
    },
    {
      id: "log-2",
      number: "LOG_02",
      tag: "SYSTEM_DEEP_DIVE",
      title: "Dhwani Sutra: Hybrid Classical ML & Local Llama 3.2 Generative AI",
      date: "Architecture Spotlight",
      subtitle: "Why single recommendation engines fail: marrying mathematical KNN spatial vectors with culture-aware LLMs.",
      content: [
        "The Sutra (Classical ML): KNN trained on Spotify Top 2018 vectors (BPM, Energy, Valence) for instantaneous spatial distance matching.",
        "The Dhwani (Generative AI): Local Llama 3.2 via Ollama acting as a Digital Curator analyzing Tollywood/Bollywood cultural resonance and 'Vibe-Lock'.",
        "IP-Persistent State & Shorts-Killer: Rolling 100-song FIFO history with millisecond audio resumption across browser sessions, filtering out low-quality short teasers."
      ],
      impact: "Top LinkedIn Reach • Hybrid Architecture • Local LLM • yt-dlp",
      icon: <Cpu size={16} className="text-[#ea384c]" />
    },
    {
      id: "log-3",
      number: "LOG_03",
      tag: "CLOUD_DEPLOYMENT",
      title: "Dark Maze: Canvas Game Orchestration on Amazon EC2 Infrastructure",
      date: "Cloud Genesis",
      subtitle: "First deployed web game ('Catch the Colour') hosted on an AWS EC2 instance.",
      content: [
        "Frontend: Built with HTML5 Canvas, responsive CSS, and pure event-driven Vanilla JavaScript without framework overhead.",
        "AWS Cloud Architecture: Deployed directly on an Amazon Web Services EC2 virtual machine running Linux, configuring security group inbound rules, Nginx, and SSH daemon management.",
        "Takeaway: Gained practical appreciation for the complete bridge between client-side code and cloud production runtimes."
      ],
      impact: "AWS EC2 • Linux Daemon • Pure JS • Cloud Security",
      icon: <Globe2 size={16} className="text-[#ea384c]" />
    }
  ];

  return (
    <section id="logs" className="py-20 border-b border-neutral-800/80 light:border-neutral-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-12">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-neutral-500 light:text-neutral-600 uppercase tracking-widest mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ea384c]"></span>
              <span>ENGINEERING_LOGS </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-100 light:text-neutral-900">
              Technical Logs & LinkedIn Dissections
            </h2>
          </div>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 font-mono text-xs text-neutral-400 hover:text-white light:text-neutral-700 light:hover:text-neutral-950 transition-colors"
          >
            <LinkedinIcon size={14} />
            <span>View Full LinkedIn Posts</span>
            <ArrowUpRight size={13} />
          </a>
        </div>

        {/* 3 Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {logs.map((log) => (
            <div
              key={log.id}
              className="rounded-lg border border-neutral-800 light:border-neutral-300 bg-neutral-900/40 light:bg-neutral-100/60 p-6 flex flex-col justify-between hover:border-neutral-600 light:hover:border-neutral-400 transition-all"
            >
              <div>
                {/* Meta header */}
                <div className="flex items-center justify-between font-mono text-xs text-neutral-500 light:text-neutral-600 pb-3 mb-3 border-b border-neutral-800 light:border-neutral-300">
                  <div className="flex items-center gap-1.5">
                    {log.icon}
                    <span className="text-neutral-300 light:text-neutral-800 font-medium">{log.tag}</span>
                  </div>
                  <span>{log.number}</span>
                </div>

                <h3 className="text-lg font-bold text-neutral-100 light:text-neutral-900 tracking-tight mb-2">
                  {log.title}
                </h3>
                <p className="font-mono text-xs text-neutral-400 light:text-neutral-600 mb-4 font-light">
                  {log.subtitle}
                </p>

                {/* Bullets */}
                <div className="space-y-2 mb-6">
                  {log.content.map((point, pIdx) => (
                    <div key={pIdx} className="text-xs text-neutral-400 light:text-neutral-700 leading-relaxed font-light pl-2.5 border-l border-neutral-800 light:border-neutral-300">
                      {point}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="pt-3 border-t border-neutral-800 light:border-neutral-300 flex items-center justify-between font-mono text-[11px]">
                  <span className="text-[#ea384c]">{log.impact}</span>
                  <a
                    href={personal.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="text-neutral-400 hover:text-white light:text-neutral-700 light:hover:text-neutral-900 inline-flex items-center gap-1"
                  >
                    <span>Read</span>
                    <ArrowUpRight size={11} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
