import React, { useState, useRef, useEffect } from 'react';
import { Terminal, Send, Copy, Check, Mail, Phone, MapPin, Globe, ExternalLink, CornerDownLeft } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function TerminalContact() {
  const { personal, projects, skills } = portfolioData;
  const [copiedEmail, setCopiedEmail] = useState(false);
  // const [copiedPhone, setCopiedPhone] = useState(false);

  // Terminal state
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState([
    { type: 'system', text: "Lokesh Kumar Shell v2.6.0 (x86_64-pc-linux-gnu)" },
    { type: 'system', text: "Type 'help' to view available system commands or 'projects' to inspect codebases." }
  ]);
  const terminalBodyRef = useRef(null);
  const isFirstMount = useRef(true);

  useEffect(() => {
    if (isFirstMount.current) {
      isFirstMount.current = false;
      return;
    }
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [history]);

  const copyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  /*
  const copyPhone = () => {
    navigator.clipboard.writeText(personal.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };
  */

  const handleCommand = (e) => {
    e.preventDefault();
    const cmd = inputVal.trim().toLowerCase();
    if (!cmd) return;

    const newHistory = [...history, { type: 'user', text: `$ ${inputVal}` }];

    switch (cmd) {
      case 'help':
        newHistory.push({
          type: 'output',
          text: `AVAILABLE COMMANDS:
  • whoami     : Bio, education & core philosophy
  • projects   : View showcased repositories & architecture
  • skills     : Technical stack & cloud capabilities
  • linux      : Details on the Ubuntu daily driver setup
  • domain     : Custom domain verification (lokeshkumar.tech)
  • contact    : Direct communication channels
  • clear      : Reset terminal display`
        });
        break;

      case 'whoami':
        newHistory.push({
          type: 'output',
          text: `${personal.name}
Full-Stack Engineer & Computer Science undergraduate at Sri Vasavi Engineering College (CGPA: 8.89/10).
Specializing in MERN stack web applications, hybrid AI engines (Dhwani Sutra), and Linux-based cloud deployments.`
        });
        break;

      case 'projects':
        newHistory.push({
          type: 'output',
          text: `FEATURED SYSTEMS:
1. Dhwani Sutra : Hybrid ML (KNN) + Local Llama 3.2 Ollama Music Engine (Python/Flask)
   Repo: https://github.com/lokeshchevuri/Dhwani-sutra
2. Agrimitra : Community Service Project delivering digital agronomy tools
   Repo: https://github.com/lokeshchevuri/Agrimitra
3. Dark Maze : AWS EC2 hosted browser game exploring Linux daemon orchestration (Cloud Provisioned)`
        });
        break;

      case 'skills':
        newHistory.push({
          type: 'output',
          text: `LANGUAGES   : Python, JavaScript (ES6+), Java, C, SQL, HTML/CSS
FRAMEWORKS  : React.js, Node.js, Express.js, Flask, Scikit-Learn
CLOUD & OS  : AWS (Cloud Practitioner Prep), Ubuntu Linux (Daily Driver), Docker, K8s, Vercel
DATABASE    : MongoDB, JSON-DB state management, Relational SQL`
        });
        break;

      case 'linux':
        newHistory.push({
          type: 'output',
          text: `LINUX ENVIRONMENT SPECS:
• OS: Ubuntu LTS (Dual-boot workstation)
• Toolchain: Bash, Git, Python 3.12, Node.js, Ollama daemon
• Philosophy: Direct POSIX environment usage ensures 100% parity with cloud container runtimes.`
        });
        break;

      case 'domain':
        newHistory.push({
          type: 'output',
          text: `DOMAIN VERIFICATION:
• Domain Name: lokeshkumar.tech
• Provider: get.tech (Recognized through CodeChef reward)
• Target Host: Vercel Production Edge Deployment`
        });
        break;

      case 'contact':
        newHistory.push({
          type: 'output',
          text: `DIRECT CHANNELS:
• Email: ${personal.email}
• LinkedIn: ${personal.linkedin}
• GitHub: ${personal.github}`
        });
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      default:
        newHistory.push({
          type: 'error',
          text: `bash: command not found: ${cmd}. Type 'help' for valid options.`
        });
    }

    setHistory(newHistory);
    setInputVal('');
  };

  return (
    <section id="connect" className="py-20 border-b border-neutral-800/80 light:border-neutral-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-12">
          <div>
            <div className="flex items-center gap-2 font-mono text-xs text-neutral-500 light:text-neutral-600 uppercase tracking-widest mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ea384c]"></span>
              <span>COMMUNICATION_CHANNELS // 06</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-100 light:text-neutral-900">
              Get In Touch & Interactive CLI
            </h2>
          </div>
          <div className="font-mono text-xs text-neutral-500 light:text-neutral-600">
            DISCUSS ROLES, INTERVIEWS OR COLLABORATION
          </div>
        </div>

        {/* Two Column: Direct Contact & CLI Terminal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Communication Card (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-lg border border-neutral-800 light:border-neutral-300 bg-neutral-950/70 light:bg-neutral-100/70 space-y-6">
              
              <div className="pb-4 border-b border-neutral-800 light:border-neutral-300">
                <span className="font-mono text-xs text-[#ea384c] block mb-1">
                  AVAILABILITY: IMMEDIATE / OPEN FOR INTERVIEWS
                </span>
                <h3 className="text-xl font-bold text-neutral-100 light:text-neutral-900">
                  Ready to Build High-Impact Systems
                </h3>
                <p className="text-xs text-neutral-400 light:text-neutral-600 leading-relaxed font-light mt-1">
                  Whether you're hiring for software engineering internships, entry-level full-stack positions, or want to discuss machine learning architectures, my inbox is always open.
                </p>
              </div>

              {/* Contact Items */}
              <div className="space-y-3 font-mono text-xs">
                
                {/* Email with copy */}
                <div className="p-3 rounded border border-neutral-800 light:border-neutral-300 bg-neutral-900/50 light:bg-neutral-200/50 flex items-center justify-between">
                  <div className="flex items-center gap-2.5 truncate">
                    <Mail size={15} className="text-neutral-400 shrink-0" />
                    <span className="text-neutral-200 light:text-neutral-900 truncate">{personal.email}</span>
                  </div>
                  <button
                    onClick={copyEmail}
                    className="p-1.5 rounded hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors cursor-pointer shrink-0"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                  </button>
                </div>

                {/* Phone (Hidden as per privacy preference) */}
                {/* 
                <div className="p-3 rounded border border-neutral-800 light:border-neutral-300 bg-neutral-900/50 light:bg-neutral-200/50 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <Phone size={15} className="text-neutral-400 shrink-0" />
                    <span className="text-neutral-200 light:text-neutral-900">{personal.phone}</span>
                  </div>
                  <button
                    onClick={copyPhone}
                    className="p-1.5 rounded hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors cursor-pointer shrink-0"
                    title="Copy Phone"
                  >
                    {copiedPhone ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                  </button>
                </div>
                */}

                {/* Location */}
                <div className="p-3 rounded border border-neutral-800 light:border-neutral-300 bg-neutral-900/50 light:bg-neutral-200/50 flex items-center gap-2.5">
                  <MapPin size={15} className="text-neutral-400 shrink-0" />
                  <span className="text-neutral-300 light:text-neutral-800">{personal.location}</span>
                </div>

                {/* Domain info */}
                <div className="p-3 rounded border border-neutral-800 light:border-neutral-300 bg-neutral-900/50 light:bg-neutral-200/50 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <Globe size={15} className="text-neutral-400 shrink-0" />
                    <span className="text-neutral-300 light:text-neutral-800">{personal.domain}</span>
                  </div>
                  <span className="text-[10px] text-emerald-400 font-semibold">GET.TECH REWARD</span>
                </div>

              </div>

              {/* Direct Mail Button */}
              <a
                href={`mailto:${personal.email}?subject=Software%20Engineering%20Opportunity%20-%20Chevuri%20Lokesh`}
                className="w-full py-2.5 rounded bg-neutral-100 text-neutral-950 hover:bg-white font-mono text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-xs"
              >
                <Send size={13} />
                <span>Compose Direct Email</span>
              </a>

            </div>
          </div>

          {/* Right Column: Interactive CLI Terminal (7 cols) */}
          <div id="terminal" className="lg:col-span-7">
            <div className="rounded-lg border border-neutral-800 light:border-neutral-300 bg-neutral-950 shadow-2xl overflow-hidden font-mono text-xs">
              
              {/* Terminal Window Chrome */}
              <div className="px-4 py-2.5 bg-neutral-900 border-b border-neutral-800 flex items-center justify-between text-neutral-400">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-neutral-700"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-neutral-700"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-neutral-700"></span>
                  <span className="text-[11px] text-neutral-400 ml-2">lokesh@ubuntu-workstation: ~</span>
                </div>
                <div className="flex items-center gap-2 text-[10px] text-neutral-500">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  <span>SESSION_ACTIVE</span>
                </div>
              </div>

              {/* Terminal Body */}
              <div ref={terminalBodyRef} className="p-4 h-72 sm:h-80 overflow-y-auto space-y-2.5 text-neutral-300 select-text bg-[#090a0c]">
                {history.map((item, idx) => (
                  <div key={idx} className="leading-relaxed">
                    {item.type === 'user' && (
                      <div className="text-neutral-100 font-semibold">{item.text}</div>
                    )}
                    {item.type === 'system' && (
                      <div className="text-neutral-500 text-[11px]">{item.text}</div>
                    )}
                    {item.type === 'output' && (
                      <pre className="text-neutral-300 whitespace-pre-wrap font-mono text-[11px] leading-relaxed pl-2 border-l border-neutral-800">
                        {item.text}
                      </pre>
                    )}
                    {item.type === 'error' && (
                      <div className="text-[#ea384c] text-[11px]">{item.text}</div>
                    )}
                  </div>
                ))}
              </div>

              {/* Terminal Input Bar */}
              <form onSubmit={handleCommand} className="p-2.5 bg-neutral-900/90 border-t border-neutral-800 flex items-center gap-2">
                <span className="text-emerald-400 font-bold pl-2">❯</span>
                <input
                  type="text"
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  placeholder="type 'help', 'whoami', 'projects', 'skills', or 'contact'..."
                  className="w-full bg-transparent text-neutral-100 font-mono text-xs focus:outline-none placeholder:text-neutral-600"
                />
                <button
                  type="submit"
                  className="px-2 py-1 rounded bg-neutral-800 hover:bg-neutral-700 text-neutral-300 text-[11px] font-mono flex items-center gap-1 cursor-pointer transition-colors"
                >
                  <span>RUN</span>
                  <CornerDownLeft size={11} />
                </button>
              </form>

            </div>

            {/* Quick Command Suggestions */}
            <div className="mt-3 flex flex-wrap items-center gap-2 font-mono text-[11px] text-neutral-500 light:text-neutral-600">
              <span>QUICK_RUN:</span>
              {['whoami', 'projects', 'skills', 'linux', 'contact', 'clear'].map((cmd) => (
                <button
                  key={cmd}
                  onClick={() => {
                    setInputVal(cmd);
                  }}
                  className="px-2 py-0.5 rounded border border-neutral-800 light:border-neutral-300 hover:border-neutral-600 bg-neutral-900/50 light:bg-neutral-200 text-neutral-400 hover:text-white light:text-neutral-700 transition-colors cursor-pointer"
                >
                  {cmd}
                </button>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
