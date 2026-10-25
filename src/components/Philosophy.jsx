import React from 'react';
import { Terminal, Shield, HardDrive, Cpu, GitBranch, Layers } from 'lucide-react';

export default function Philosophy() {
  const pillars = [
    {
      icon: <HardDrive size={18} className="text-neutral-300 light:text-neutral-800" />,
      tag: "ENVIRONMENT_PARITY",
      title: "Ubuntu Linux as Daily Driver",
      description: "Dual-booting my primary laptop and migrating day-to-day engineering to an Ubuntu base. Production servers, cloud nodes, and container runtimes live on Linux — developing directly in POSIX tooling eliminates abstraction leaks and environment mismatches."
    },
    {
      icon: <Layers size={18} className="text-neutral-300 light:text-neutral-800" />,
      tag: "HYBRID_INTELLIGENCE",
      title: "Mathematical ML + Local Generative AI",
      description: "Rejecting black-box reliance. In Dhwani Sutra, classical K-Nearest Neighbors performs millisecond-fast spatial matching on vectorized audio metrics, while local Llama 3.2 via Ollama handles contextual cultural nuance with strict user privacy and zero external API fees."
    },
    {
      icon: <Shield size={18} className="text-neutral-300 light:text-neutral-800" />,
      tag: "CLOUD_FOUNDATIONS",
      title: "AWS & Systems-Level Deployment",
      description: "Preparing for AWS Certified Cloud Practitioner by getting hands dirty with actual infrastructure: provisioning EC2 Linux instances, configuring security groups, SSH orchestration, reverse proxies, and continuous availability for deployed web applications."
    }
  ];

  return (
    <section id="philosophy" className="py-20 border-b border-neutral-800/80 light:border-neutral-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-12">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-neutral-500 light:text-neutral-600 uppercase tracking-widest mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ea384c]"></span>
              <span>ENGINEERING_MANIFESTO // 01</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-100 light:text-neutral-900">
              Systems-First Thinking & Manual Craftsmanship
            </h2>
          </div>
          <div className="font-mono text-xs text-neutral-500 light:text-neutral-600 max-w-xs text-left sm:text-right">
            <span>NO GLOWING GIMMICKS. JUST SOLID ARCHITECTURE, CLEAN TYPOGRAPHY, AND MEASURABLE CODE.</span>
          </div>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-lg border border-neutral-800 light:border-neutral-300 bg-neutral-900/40 light:bg-neutral-100/60 hover:border-neutral-600 light:hover:border-neutral-400 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-9 h-9 rounded border border-neutral-800 light:border-neutral-300 bg-neutral-950 light:bg-neutral-200 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="font-mono text-[10px] text-neutral-500 light:text-neutral-600 tracking-wider">
                    {`[0${idx + 1}]`}
                  </span>
                </div>
                <div className="font-mono text-[11px] text-[#ea384c] tracking-wider mb-1">
                  {item.tag}
                </div>
                <h3 className="text-base font-semibold text-neutral-100 light:text-neutral-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 light:text-neutral-700 leading-relaxed font-light">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-800/80 light:border-neutral-300 flex items-center justify-between font-mono text-[10px] text-neutral-500 light:text-neutral-600">
                <span>STANDARD: PRODUCTION</span>
                <span>STATUS: VERIFIED</span>
              </div>
            </div>
          ))}
        </div>

        {/* Minimal Terminal Quote Strip */}
        <div className="mt-8 p-4 rounded border border-neutral-800 light:border-neutral-300 bg-neutral-950 light:bg-neutral-100 font-mono text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-neutral-400 light:text-neutral-700">
          <div className="flex items-center gap-2">
            <span className="text-[#ea384c] font-bold">$</span>
            <span className="text-neutral-300 light:text-neutral-900">uname -srm</span>
            <span className="text-neutral-600">→ Linux 6.8.0-generic x86_64 (Ubuntu LTS Daily Driver)</span>
          </div>
          <div className="text-[11px] text-neutral-500">
            HOST: DUAL-BOOT RIG // LOCAL INFERENCE READY
          </div>
        </div>

      </div>
    </section>
  );
}
