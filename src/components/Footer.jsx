import React from 'react';
import { Mail, ArrowUp, Terminal, ShieldCheck } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-[#09090b] light:bg-[#f4f4f5] text-neutral-400 light:text-neutral-600 font-mono text-xs border-t border-neutral-800 light:border-neutral-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Top Footer Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-neutral-800/80 light:border-neutral-300">
          <div>
            <div className="flex items-center gap-2 text-neutral-200 light:text-neutral-900 font-bold text-sm">
              <span className="w-2 h-2 rounded-full bg-[#ea384c]"></span>
              <span>CHEVURI LOKESH KOTI SAI KUMAR</span>
            </div>
            <div className="text-[11px] text-neutral-500 light:text-neutral-600 pt-1">
              Production Portfolio • Built with React & Tailwind CSS • Hosted on Vercel
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <a
              href={personal.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white light:hover:text-neutral-950 transition-colors flex items-center gap-1.5"
            >
              <GithubIcon size={14} />
              <span>GitHub</span>
            </a>
            <span>/</span>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white light:hover:text-neutral-950 transition-colors flex items-center gap-1.5"
            >
              <LinkedinIcon size={14} />
              <span>LinkedIn</span>
            </a>
            <span>/</span>
            <a
              href={`mailto:${personal.email}`}
              className="hover:text-white light:hover:text-neutral-950 transition-colors flex items-center gap-1.5"
            >
              <Mail size={14} />
              <span>Email</span>
            </a>
          </div>
        </div>

        {/* Bottom Metadata & System Status */}
        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[11px] text-neutral-500 light:text-neutral-600">
          <div className="flex flex-wrap items-center gap-3">
            <span className="flex items-center gap-1 text-emerald-400">
              <ShieldCheck size={13} />
              <span>SYS_OK: 99.98%</span>
            </span>
            <span>•</span>
            <span>DOMAIN: <strong className="text-neutral-300 light:text-neutral-800 font-normal">lokeshkumar.tech</strong></span>
            <span>•</span>
            <span>OS: UBUNTU_LTS</span>
          </div>

          <div className="flex items-center gap-3">
            <span>© {new Date().getFullYear()} Chevuri Lokesh</span>
            <button
              onClick={scrollToTop}
              className="p-1.5 rounded border border-neutral-800 light:border-neutral-300 hover:border-neutral-600 bg-neutral-900/60 light:bg-neutral-200 text-neutral-400 hover:text-white transition-colors cursor-pointer inline-flex items-center gap-1"
              title="Back to Top"
            >
              <ArrowUp size={12} />
              <span>TOP</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
