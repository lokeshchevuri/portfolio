import React from 'react';
import { Briefcase, GraduationCap, Award, Calendar, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ExperienceEducation() {
  const { experience, education, certifications } = portfolioData;

  return (
    <section id="experience" className="py-20 border-b border-neutral-800/80 light:border-neutral-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-12">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-neutral-500 light:text-neutral-600 uppercase tracking-widest mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ea384c]"></span>
              <span>TRACK_RECORD // 05</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-100 light:text-neutral-900">
              Experience, Education & Credentials
            </h2>
          </div>
          <div className="font-mono text-xs text-neutral-500 light:text-neutral-600">
            MERIT-DRIVEN // TECHNICAL FOUNDATION
          </div>
        </div>

        {/* Two Column Layout: Experience & Education */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Experience (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 pb-2 font-mono text-xs uppercase tracking-wider text-neutral-400 light:text-neutral-700 border-b border-neutral-800 light:border-neutral-300">
              <Briefcase size={14} className="text-[#ea384c]" />
              <span>Technical Leadership & Contributions</span>
            </div>

            <div className="space-y-6">
              {experience.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-lg border border-neutral-800 light:border-neutral-300 bg-neutral-900/40 light:bg-neutral-100/60 space-y-3"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-xs">
                    <span className="text-neutral-200 light:text-neutral-900 font-bold text-base">
                      {item.role}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-neutral-800 light:bg-neutral-200 text-neutral-300 light:text-neutral-800 text-[11px]">
                      {item.period}
                    </span>
                  </div>

                  <div className="font-mono text-xs text-[#ea384c]">
                    {item.organization}
                  </div>

                  <p className="text-xs sm:text-sm text-neutral-300 light:text-neutral-700 leading-relaxed font-light">
                    {item.description}
                  </p>

                  <div className="space-y-1.5 pt-2">
                    {item.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs text-neutral-400 light:text-neutral-600 leading-relaxed font-light">
                        <span className="text-[#ea384c] mt-0.5">•</span>
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Education & Certifications (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Education Sub-section */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 pb-2 font-mono text-xs uppercase tracking-wider text-neutral-400 light:text-neutral-700 border-b border-neutral-800 light:border-neutral-300">
                <GraduationCap size={15} className="text-[#ea384c]" />
                <span>Formal Education</span>
              </div>

              {education.map((edu, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-lg border border-neutral-800 light:border-neutral-300 bg-neutral-950/60 light:bg-neutral-100/70 space-y-2"
                >
                  <div className="flex items-center justify-between font-mono text-xs">
                    <span className="font-bold text-neutral-100 light:text-neutral-900 text-sm">
                      {edu.institution}
                    </span>
                    <span className="text-emerald-400 font-semibold">{edu.score}</span>
                  </div>
                  <div className="font-mono text-xs text-neutral-400 light:text-neutral-600">
                    {edu.degree}
                  </div>
                  <div className="text-[11px] font-mono text-neutral-500 light:text-neutral-500">
                    {edu.location} • {edu.period}
                  </div>
                  <p className="text-xs text-neutral-400 light:text-neutral-700 leading-relaxed font-light pt-1 border-t border-neutral-800/60 light:border-neutral-300">
                    {edu.details}
                  </p>
                </div>
              ))}
            </div>

            {/* Certifications Sub-section */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 pb-2 font-mono text-xs uppercase tracking-wider text-neutral-400 light:text-neutral-700 border-b border-neutral-800 light:border-neutral-300">
                <Award size={15} className="text-[#ea384c]" />
                <span>Certifications & Specialized Tracks</span>
              </div>

              {certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-lg border border-neutral-800 light:border-neutral-300 bg-neutral-950/60 light:bg-neutral-100/70 space-y-1.5"
                >
                  <div className="flex items-center justify-between font-mono text-xs">
                    <span className="font-semibold text-neutral-200 light:text-neutral-900">
                      {cert.title}
                    </span>
                    <span className="text-[10px] text-[#ea384c] uppercase font-mono">
                      {cert.status}
                    </span>
                  </div>
                  <div className="font-mono text-[11px] text-neutral-500 light:text-neutral-600">
                    {cert.issuer}
                  </div>
                  <p className="text-xs text-neutral-400 light:text-neutral-700 leading-relaxed font-light">
                    {cert.summary}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
