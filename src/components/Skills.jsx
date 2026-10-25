import React from 'react';
import { Code2, Server, Cloud, Terminal, CheckCircle2, CircleDot } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Skills() {
  const { skills } = portfolioData;

  const skillCategories = [
    {
      title: "Core Languages",
      icon: <Code2 size={16} className="text-neutral-400" />,
      items: skills.languages,
      badge: "SYNTAX & LOGIC"
    },
    {
      title: "Frameworks & Machine Learning",
      icon: <Server size={16} className="text-neutral-400" />,
      items: skills.frameworks,
      badge: "FULL-STACK & AI"
    },
    {
      title: "Cloud, Systems & Workflow",
      icon: <Cloud size={16} className="text-neutral-400" />,
      items: skills.cloudAndDevOps,
      badge: "INFRASTRUCTURE"
    }
  ];

  return (
    <section id="skills" className="py-20 border-b border-neutral-800/80 light:border-neutral-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-12">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-neutral-500 light:text-neutral-600 uppercase tracking-widest mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ea384c]"></span>
              <span>TECHNICAL_INDEX </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-100 light:text-neutral-900">
              Proficiencies & Stack Matrix
            </h2>
          </div>
          <div className="font-mono text-xs text-neutral-500 light:text-neutral-600">
            EVALUATED BY PRODUCTION APPLICABILITY
          </div>
        </div>

        {/* 3 Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((cat, idx) => (
            <div
              key={idx}
              className="rounded-lg border border-neutral-800 light:border-neutral-300 bg-neutral-950/60 light:bg-neutral-100/70 p-6 flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-neutral-800 light:border-neutral-300">
                  <div className="flex items-center gap-2">
                    {cat.icon}
                    <h3 className="text-base font-semibold text-neutral-100 light:text-neutral-900">
                      {cat.title}
                    </h3>
                  </div>
                  <span className="font-mono text-[10px] text-neutral-500 light:text-neutral-600 uppercase tracking-wider">
                    {cat.badge}
                  </span>
                </div>

                {/* List items */}
                <div className="space-y-3">
                  {cat.items.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-3 rounded border border-neutral-800/70 light:border-neutral-300/80 bg-neutral-900/40 light:bg-neutral-200/40 hover:border-neutral-600 light:hover:border-neutral-400 transition-colors"
                    >
                      <div className="flex items-center justify-between font-mono text-xs mb-1">
                        <span className="font-medium text-neutral-200 light:text-neutral-900">
                          {skill.name}
                        </span>
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-neutral-800 light:bg-neutral-300 text-neutral-400 light:text-neutral-800 uppercase">
                          {skill.level}
                        </span>
                      </div>
                      <p className="text-[11px] text-neutral-400 light:text-neutral-600 leading-relaxed font-light">
                        {skill.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom tag */}
              <div className="mt-6 pt-3 border-t border-neutral-800/80 light:border-neutral-300 font-mono text-[10px] text-neutral-500 light:text-neutral-600 flex justify-between">
                <span>CATEGORY_REF: 0{idx + 1}</span>
                <span className="text-emerald-500">ACTIVE_STACK</span>
              </div>
            </div>
          ))}
        </div>

        {/* Linux Workstation Callout Banner */}
        <div className="mt-10 p-5 rounded-lg border border-neutral-800 light:border-neutral-300 bg-neutral-900/40 light:bg-neutral-100/60 flex flex-col md:flex-row md:items-center justify-between gap-4 font-mono text-xs">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded border border-neutral-700 light:border-neutral-300 bg-neutral-950 light:bg-neutral-200 flex items-center justify-center text-neutral-300 light:text-neutral-800">
              <Terminal size={15} />
            </div>
            <div>
              <div className="text-neutral-200 light:text-neutral-900 font-semibold flex items-center gap-2">
                <span>UBUNTU DUAL-BOOT DEV WORKSTATION</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              </div>
              <div className="text-[11px] text-neutral-400 light:text-neutral-600 font-light">
                Bash toolchains • Local Ollama LLM inference • Docker containerization • AWS CLI integration
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 text-[11px] text-neutral-400">
            <span className="px-2.5 py-1 rounded border border-neutral-700 bg-neutral-950 light:bg-neutral-200 text-neutral-300 light:text-neutral-800">
              DOCKER & K8S: LEARNING
            </span>
            <span className="px-2.5 py-1 rounded border border-neutral-700 bg-neutral-950 light:bg-neutral-200 text-neutral-300 light:text-neutral-800">
              AWS: CERTIFIED
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
