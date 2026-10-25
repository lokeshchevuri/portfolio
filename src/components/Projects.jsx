import React, { useState } from 'react';
import { ExternalLink, Cpu, Layers, Radio, ShieldCheck, ChevronRight, Terminal, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function Projects() {
  const { projects } = portfolioData;
  const [activeTab, setActiveTab] = useState('all');

  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(p => p.category.toLowerCase().includes(activeTab.toLowerCase()));

  const flagship = projects.find(p => p.id === 'dhwani-sutra');
  const otherProjects = projects.filter(p => p.id !== 'dhwani-sutra');

  return (
    <section id="projects" className="py-20 border-b border-neutral-800/80 light:border-neutral-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-12">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-neutral-500 light:text-neutral-600 uppercase tracking-widest mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ea384c]"></span>
              <span>ENGINEERED_SOFTWARE </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-100 light:text-neutral-900">
              Featured Systems & Codebases
            </h2>
          </div>
          
          {/* Quick Filter */}
          <div className="flex items-center gap-2 font-mono text-xs">
            {['all', 'ai', 'mern', 'cloud'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 py-1 rounded uppercase tracking-wider transition-colors cursor-pointer ${
                  activeTab === tab
                    ? 'bg-neutral-100 text-neutral-950 font-semibold'
                    : 'bg-neutral-900/60 light:bg-neutral-200/60 text-neutral-400 hover:text-white light:text-neutral-700 light:hover:text-neutral-950 border border-neutral-800 light:border-neutral-300'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* FLAGSHIP HERO PROJECT: DHWANI SUTRA */}
        {(activeTab === 'all' || activeTab === 'ai') && flagship && (
          <div className="mb-12 rounded-lg border border-neutral-700 light:border-neutral-300 bg-neutral-950/80 light:bg-neutral-100/90 p-6 sm:p-8 relative overflow-hidden shadow-2xl">
            {/* Top Accent Line */}
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#ea384c] via-neutral-500 to-transparent"></div>

            <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-neutral-800 light:border-neutral-300 font-mono text-xs">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded bg-[#ea384c]/10 text-[#ea384c] border border-[#ea384c]/30 font-semibold">
                  FLAGSHIP ARCHITECTURE
                </span>
                <span className="text-neutral-400 light:text-neutral-600">ID: PRJ-01 // DHWANI_SUTRA</span>
              </div>
              <a
                href={flagship.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-neutral-300 hover:text-white light:text-neutral-800 light:hover:text-neutral-950 transition-colors"
              >
                <GithubIcon size={15} />
                <span>github/lokeshchevuri/Dhwani-sutra</span>
                <ArrowUpRight size={13} />
              </a>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
              {/* Left Column: Description & Specs */}
              <div className="lg:col-span-7 space-y-4">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-neutral-100 light:text-neutral-900 tracking-tight">
                    {flagship.title}
                  </h3>
                  <p className="font-mono text-xs text-neutral-400 light:text-neutral-600 pt-1">
                    {flagship.tagline}
                  </p>
                </div>

                <p className="text-sm text-neutral-300 light:text-neutral-700 leading-relaxed font-light">
                  {flagship.summary}
                </p>

                {/* Tech Pills */}
                <div className="pt-2">
                  <div className="font-mono text-[11px] text-neutral-500 light:text-neutral-600 uppercase mb-2">
                    TECHNOLOGY_STACK:
                  </div>
                  <div className="flex flex-wrap gap-1.5 font-mono text-xs">
                    {flagship.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded bg-neutral-900 light:bg-neutral-200 border border-neutral-800 light:border-neutral-300 text-neutral-300 light:text-neutral-800 text-[11px]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Row */}
                <div className="pt-4 flex items-center gap-3">
                  <a
                    href={flagship.github}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 rounded bg-neutral-100 text-neutral-950 hover:bg-white font-mono text-xs font-semibold uppercase tracking-wider inline-flex items-center gap-2 transition-all shadow-xs"
                  >
                    <GithubIcon size={14} />
                    <span>View Repository & Source</span>
                  </a>
                  <a
                    href="#logs"
                    className="px-4 py-2 rounded border border-neutral-800 light:border-neutral-300 hover:border-neutral-600 font-mono text-xs text-neutral-400 hover:text-white light:text-neutral-700 light:hover:text-neutral-950 transition-colors"
                  >
                    Read Technical Breakdown
                  </a>
                </div>
              </div>

              {/* Right Column: Architectural Highlights */}
              <div className="lg:col-span-5 space-y-3">
                <div className="font-mono text-xs text-neutral-400 light:text-neutral-600 uppercase tracking-wider pb-1 flex items-center gap-1.5">
                  <Layers size={13} className="text-[#ea384c]" />
                  <span>Dual-Engine Core Mechanics</span>
                </div>

                {flagship.architecture.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded border border-neutral-800/80 light:border-neutral-300 bg-neutral-900/50 light:bg-neutral-200/50 space-y-1"
                  >
                    <div className="font-mono text-xs font-semibold text-neutral-200 light:text-neutral-900 flex items-center justify-between">
                      <span>{item.layer}</span>
                      <span className="text-[10px] text-neutral-500">{`0${idx + 1}`}</span>
                    </div>
                    <p className="text-xs text-neutral-400 light:text-neutral-700 leading-normal font-light">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* OTHER SHOWCASED PROJECTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects
            .filter(p => p.id !== 'dhwani-sutra' || activeTab !== 'all')
            .map((project, idx) => (
              <div
                key={project.id}
                className="rounded-lg border border-neutral-800 light:border-neutral-300 bg-neutral-900/40 light:bg-neutral-100/60 p-6 flex flex-col justify-between hover:border-neutral-600 light:hover:border-neutral-400 transition-all group"
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between font-mono text-xs text-neutral-500 light:text-neutral-600 pb-3 mb-3 border-b border-neutral-800/80 light:border-neutral-300">
                    <span className="text-[#ea384c] font-semibold">{project.starsBadge}</span>
                    <span>{`REF: PRJ-0${idx + 2}`}</span>
                  </div>

                  <h4 className="text-xl font-bold text-neutral-100 light:text-neutral-900 tracking-tight group-hover:text-white transition-colors">
                    {project.title}
                  </h4>
                  <p className="font-mono text-xs text-neutral-400 light:text-neutral-600 pt-1 pb-3">
                    {project.tagline}
                  </p>

                  <p className="text-xs sm:text-sm text-neutral-400 light:text-neutral-700 leading-relaxed font-light mb-4">
                    {project.summary}
                  </p>

                  {/* Architecture bullets */}
                  <div className="space-y-2 mb-6">
                    {project.architecture.map((arch, aIdx) => (
                      <div key={aIdx} className="text-xs text-neutral-400 light:text-neutral-700 pl-3 border-l border-neutral-800 light:border-neutral-300 font-light">
                        <strong className="font-mono text-neutral-300 light:text-neutral-900 block font-normal">{arch.layer}:</strong>
                        <span>{arch.desc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-1 mb-4 font-mono text-[11px]">
                    {project.techStack.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded bg-neutral-900 light:bg-neutral-200 border border-neutral-800 light:border-neutral-300 text-neutral-400 light:text-neutral-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="pt-3 border-t border-neutral-800/80 light:border-neutral-300 flex items-center justify-between font-mono text-xs">
                    {project.github ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-neutral-300 hover:text-white light:text-neutral-800 light:hover:text-neutral-950 font-medium transition-colors"
                      >
                        <GithubIcon size={14} />
                        <span>View Codebase</span>
                        <ArrowUpRight size={12} />
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 text-neutral-400 light:text-neutral-600 font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                        <span>AWS Cloud Hosted Demo</span>
                      </span>
                    )}
                    <span className="text-neutral-600 light:text-neutral-400 text-[10px]">
                      {project.github ? "VERIFIED_BUILD" : "CLOUD_PROVISIONED"}
                    </span>
                  </div>
                </div>
              </div>
            ))}
        </div>

      </div>
    </section>
  );
}
