import React, { useState } from 'react';
import { Terminal, Mail, ArrowDown, Copy, Check, Sparkles, ExternalLink, Cpu } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function Hero() {
  const { personal } = portfolioData;
  const [copied, setCopied] = useState(false);
  const [photoFilter, setPhotoFilter] = useState('mono'); // 'mono' or 'natural'

  const copyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 border-b border-neutral-800/80 light:border-neutral-200">
      {/* Background Dot Matrix Subtle Texture */}
      <div className="absolute inset-0 bg-dot-grid opacity-60 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Top Technical Metadata Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-8 mb-8 border-b border-neutral-800/60 light:border-neutral-200 font-mono text-xs text-neutral-500 light:text-neutral-600">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-neutral-300 light:text-neutral-800">
              <span className="w-2 h-2 rounded-full bg-[#ea384c]"></span>
              SYS_ID: LK-7801
            </span>
            <span className="text-neutral-700 light:text-neutral-300">/</span>
            <span>KERNEL: LINUX_UBUNTU_X86_64</span>
            <span className="text-neutral-700 light:text-neutral-300">/</span>
            <span className="text-neutral-400 light:text-neutral-700">AWS_PRACTITIONER_CERT</span>
          </div>

          <div className="flex items-center gap-2 text-neutral-400 light:text-neutral-600">
            <span>LOC: PENUGONDA, AP, IN</span>
            <span className="text-neutral-700 light:text-neutral-300">/</span>
            <span className="text-emerald-500 font-medium">AVAILABLE</span>
          </div>
        </div>

        {/* Main Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Typography & Story */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-neutral-900 light:bg-neutral-200 border border-neutral-800 light:border-neutral-300 font-mono text-xs text-neutral-300 light:text-neutral-800">
              <Cpu size={13} className="text-[#ea384c]" />
              <span>Full-Stack Engineer & AI Systems Practitioner</span>
            </div>

            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-100 light:text-neutral-900 leading-[1.1]">
                Chevuri Lokesh <br />
                <span className="text-neutral-400 light:text-neutral-600 font-medium text-3xl sm:text-4xl lg:text-5xl">
                  Koti Sai Kumar
                </span>
              </h1>
              <p className="font-mono text-xs text-neutral-500 light:text-neutral-500 tracking-wider uppercase pt-1">
                Domain: <span className="text-neutral-300 light:text-neutral-800 font-semibold underline decoration-neutral-700 underline-offset-4">lokeshkumar.tech</span>
              </p>
            </div>

            <p className="text-base sm:text-lg text-neutral-400 light:text-neutral-700 leading-relaxed max-w-2xl font-light">
              Third-year Computer Science undergraduate at <strong className="font-medium text-neutral-200 light:text-neutral-900">Sri Vasavi Engineering College (CGPA 8.89)</strong>. 
              Grounded in daily-driver <strong className="font-medium text-neutral-200 light:text-neutral-900">Ubuntu Linux</strong> workflows, 
              building resilient MERN applications, and architecting hybrid machine learning systems like <strong className="font-medium text-neutral-200 light:text-neutral-900">Dhwani Sutra</strong>.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="px-5 py-2.5 rounded bg-neutral-100 text-neutral-950 hover:bg-white font-mono text-xs font-semibold tracking-wider uppercase transition-all shadow-xs inline-flex items-center gap-2 group"
              >
                <span>Inspect Projects</span>
                <span className="group-hover:translate-x-0.5 transition-transform">→</span>
              </a>

              <button
                onClick={copyEmail}
                className="px-4 py-2.5 rounded border border-neutral-800 light:border-neutral-300 hover:border-neutral-600 light:hover:border-neutral-400 bg-neutral-900/80 light:bg-neutral-100 font-mono text-xs text-neutral-300 light:text-neutral-800 transition-all inline-flex items-center gap-2 cursor-pointer"
              >
                {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                <span>{copied ? "Copied Email!" : "Copy Email"}</span>
              </button>

              <a
                href="#terminal"
                className="px-4 py-2.5 rounded border border-neutral-800 light:border-neutral-300 hover:border-neutral-600 bg-neutral-900/40 light:bg-neutral-100 font-mono text-xs text-neutral-400 hover:text-neutral-200 light:text-neutral-700 light:hover:text-neutral-900 transition-colors inline-flex items-center gap-1.5"
              >
                <Terminal size={14} />
                <span>Launch CLI</span>
              </a>
            </div>

            {/* Social Links Bar */}
            <div className="flex items-center gap-4 pt-2 font-mono text-xs text-neutral-500 light:text-neutral-600">
              <a
                href={personal.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-white light:hover:text-neutral-900 transition-colors"
              >
                <GithubIcon size={15} />
                <span>github/lokeshchevuri</span>
              </a>
              <span>•</span>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-white light:hover:text-neutral-900 transition-colors"
              >
                <LinkedinIcon size={15} />
                <span>linkedin</span>
              </a>
            </div>
          </div>

          {/* Right Column: Nothing OS Style Profile Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-sm rounded-lg border border-neutral-800 light:border-neutral-300 bg-neutral-950/70 light:bg-neutral-100/70 p-4 shadow-xl relative backdrop-blur-sm group">
              
              {/* Corner crosshairs like Nothing OS / technical blueprints */}
              <div className="absolute top-1 left-1 font-mono text-[9px] text-neutral-700 light:text-neutral-400 select-none">+</div>
              <div className="absolute top-1 right-1 font-mono text-[9px] text-neutral-700 light:text-neutral-400 select-none">+</div>
              <div className="absolute bottom-1 left-1 font-mono text-[9px] text-neutral-700 light:text-neutral-400 select-none">+</div>
              <div className="absolute bottom-1 right-1 font-mono text-[9px] text-neutral-700 light:text-neutral-400 select-none">+</div>

              {/* Card Header */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-neutral-800 light:border-neutral-300 font-mono text-[11px] text-neutral-400 light:text-neutral-600">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ea384c]"></span>
                  <span>AVATAR // BIOMETRIC</span>
                </span>
                <button
                  onClick={() => setPhotoFilter(photoFilter === 'mono' ? 'natural' : 'mono')}
                  className="px-2 py-0.5 rounded bg-neutral-900 light:bg-neutral-200 border border-neutral-800 light:border-neutral-300 hover:border-neutral-600 text-[10px] text-neutral-400 hover:text-neutral-200 light:text-neutral-700 transition-colors cursor-pointer"
                  title="Toggle Monochrome / Natural filter"
                >
                  FILTER: {photoFilter.toUpperCase()}
                </button>
              </div>

              {/* Photo Frame */}
              <div className="relative aspect-square w-full rounded-sm overflow-hidden border border-neutral-800 light:border-neutral-300 bg-neutral-900">
                <img
                  src="/profile.png"
                  alt="Chevuri Lokesh Koti Sai Kumar"
                  className={`w-full h-full object-cover object-center transition-all duration-500 group-hover:scale-[1.02] ${
                    photoFilter === 'mono' ? 'grayscale contrast-115 brightness-95' : 'grayscale-0'
                  }`}
                />

                {/* Subtle Scanline Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent pointer-events-none"></div>

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between font-mono text-[10px] text-neutral-300 bg-neutral-950/80 backdrop-blur-md px-2.5 py-1 rounded border border-neutral-800">
                  <span>CHEVURI_LOKESH.PNG</span>
                  <span className="text-emerald-400">STATUS_OK</span>
                </div>
              </div>

              {/* Card Meta Details */}
              <div className="pt-3 space-y-1.5 font-mono text-xs">
                <div className="flex justify-between text-neutral-400 light:text-neutral-600 text-[11px]">
                  <span>ROLE:</span>
                  <span className="text-neutral-200 light:text-neutral-900 font-medium">Software Engineer</span>
                </div>
                <div className="flex justify-between text-neutral-400 light:text-neutral-600 text-[11px]">
                  <span>WORKSTATION:</span>
                  <span className="text-neutral-200 light:text-neutral-900">Ubuntu LTS / Dual-Boot</span>
                </div>
                <div className="flex justify-between text-neutral-400 light:text-neutral-600 text-[11px]">
                  <span>CERTIFICATION:</span>
                  <span className="text-neutral-200 light:text-neutral-900">AWS Cloud Practitioner</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="mt-14 pt-8 border-t border-neutral-800/80 light:border-neutral-200 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {personal.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-4 rounded border border-neutral-800/80 light:border-neutral-300 bg-neutral-900/30 light:bg-neutral-100/50 backdrop-blur-xs"
            >
              <div className="font-mono text-[11px] text-neutral-500 light:text-neutral-600 uppercase tracking-wider mb-1">
                {stat.label}
              </div>
              <div className="text-xl sm:text-2xl font-bold font-mono text-neutral-100 light:text-neutral-900">
                {stat.value}
              </div>
              <div className="text-[11px] text-neutral-500 light:text-neutral-600 truncate mt-0.5">
                {stat.sub}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
