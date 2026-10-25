export const portfolioData = {
  personal: {
    name: "Chevuri Lokesh Koti Sai Kumar",
    shortName: "Lokesh Chevuri",
    title: "Full-Stack Engineer & Systems Builder",
    domain: "lokeshkumar.tech",
    email: "chevurilokesh07@gmail.com",
    phone: "+91 9393969353",
    location: "Penugonda, Andhra Pradesh, India",
    status: "Available for Software Engineering Roles & Internships",
    github: "https://github.com/lokeshchevuri",
    linkedin: "https://www.linkedin.com/in/lokesh-koti-sai-kumar-chevuri",
    bio: "Computer Science undergraduate with an engineering philosophy grounded in Linux-first workflows, systems thinking, and hybrid AI architectures. Building scalable web platforms with the MERN stack, Python, and cloud infrastructure.",
    stats: [
      { label: "B.Tech CGPA", value: "8.89", sub: "Sri Vasavi Eng. College" },
      { label: "Daily Driver", value: "Ubuntu Linux", sub: "Dedicated dual-boot system" },
      { label: "Core Cloud", value: "AWS Certified", sub: "Cloud Practitioner Foundations" },
      { label: "Community", value: "72h Bootcamp", sub: "Trained 1st Year Juniors in ML" },
    ]
  },

  projects: [
    {
      id: "dhwani-sutra",
      title: "Dhwani Sutra",
      tagline: "The Sound Algorithm — Hybrid ML & Generative AI Music Discovery Engine",
      featured: true,
      category: "AI & Full-Stack",
      github: "https://github.com/lokeshchevuri/Dhwani-sutra",
      starsBadge: "Flagship Project",
      summary: "A production-grade music platform solving the recommendation cold-start problem through a dual-layer intelligence core: mathematical K-Nearest Neighbors vectorization combined with local Llama 3.2 LLM curation.",
      architecture: [
        {
          layer: "The Sutra (Classical ML)",
          desc: "K-Nearest Neighbors (KNN) model trained on Spotify audio feature vectors (BPM, Energy, Valence, Acousticness). Performs zero-latency high-dimensional spatial similarity matching."
        },
        {
          layer: "The Dhwani (Generative AI)",
          desc: "Integrated local Ollama LLMs (Llama 3.2) acting as an empathetic 'Digital Curator' analyzing cultural cues, linguistic tone, and regional cinema links (Bollywood, Tollywood) without external API latency or privacy leaks."
        },
        {
          layer: "Asynchronous Audio Proxying",
          desc: "Engineered a high-concurrency Python Flask backend using yt-dlp to stream audio in real-time, eliminating local storage overhead while maintaining millisecond buffer latency."
        },
        {
          layer: "IP-Persistent State & Shorts-Killer",
          desc: "Server-side JSON-DB persistence that tracks users by IP, maintaining a rolling 100-song FIFO queue and exact millisecond playback resumption across browser sessions, filtered by duration logic to eliminate low-quality teaser shorts."
        }
      ],
      techStack: ["Python", "Flask", "Scikit-Learn (KNN)", "Ollama (Llama 3.2)", "Pandas", "yt-dlp", "ES6+ JavaScript", "JSON-DB"]
    },
    {
      id: "bus-pass-system",
      title: "Bus Pass Management System",
      tagline: "Digitized Transit Pass Lifecycle Platform with Role-Based Authentication",
      featured: true,
      category: "Full-Stack Web (MERN)",
      github: "https://github.com/lokeshchevuri/bus-pass-management-system",
      starsBadge: "MERN Stack",
      summary: "A robust enterprise web application that streamlines institutional transit workflows, transforming manual paperwork into a validated digital lifecycle with distinct administrative and passenger privileges.",
      architecture: [
        {
          layer: "Role-Based Access Control (RBAC)",
          desc: "Secure JWT-driven authorization flows distinguishing between administrative operators, verification officers, and student applicants."
        },
        {
          layer: "Lifecycle State Machine",
          desc: "End-to-end digital approval pipeline from initial submission and document validation to pass generation and validity renewal."
        },
        {
          layer: "MERN Architecture",
          desc: "Built with React frontend, Express.js REST API gateway, Node.js asynchronous backend, and MongoDB document database schema for high-throughput queries."
        }
      ],
      techStack: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT Authentication", "Tailwind CSS", "RESTful APIs"]
    },
    {
      id: "agrimitra",
      title: "Agrimitra",
      tagline: "Community Service Project — Digital Enablement for Local Farmers",
      featured: true,
      category: "Social Impact / Web",
      github: "https://github.com/lokeshchevuri/Agrimitra",
      starsBadge: "Community Service Project",
      summary: "Engineered as an impactful Community Service Project (CSP) to provide local rural agricultural communities with direct access to crop recommendations, regional weather advisories, and sustainable cultivation practices.",
      architecture: [
        {
          layer: "Localized Farmer UX",
          desc: "Minimalist, accessible UI built for high readability across low-bandwidth mobile environments in rural agricultural belts."
        },
        {
          layer: "Advisory & Resource Engine",
          desc: "Aggregates actionable insights regarding soil compatibility, pest alerts, and seasonal harvesting guidance."
        }
      ],
      techStack: ["JavaScript", "HTML5", "CSS3", "Node.js", "Community APIs", "Responsive Design"]
    },
    {
      id: "dark-maze",
      title: "Dark Maze",
      tagline: "Interactive Canvas Game Deployed on AWS EC2 Cloud Infrastructure",
      featured: false,
      category: "Cloud Deployment & Game",
      //github: "https://github.com/lokeshchevuri",
      starsBadge: "AWS EC2 Hosted",
      summary: "An interactive browser game challenging players to 'Catch the Colour', engineered to master DOM mechanics, event loops, and end-to-end cloud provisioning on an Amazon EC2 Linux instance.",
      architecture: [
        {
          layer: "Frontend Game Mechanics",
          desc: "Pure Vanilla JavaScript state-driven loop with zero external framework overhead for ultra-responsive user input."
        },
        {
          layer: "AWS Cloud Orchestration",
          desc: "Configured AWS EC2 virtual machine, Linux security groups, Nginx reverse proxy, and continuous uptime monitoring."
        }
      ],
      techStack: ["Vanilla JavaScript", "HTML5 Canvas", "CSS3", "AWS EC2", "Linux / Ubuntu Server", "Nginx"]
    }
  ],

  experience: [
    {
      role: "Lead Technical Instructor & Mentor",
      organization: "Python, ML & Deep Learning 72-Hour Intensive Bootcamp",
      period: "Recent",
      type: "Bootcamp & Mentorship",
      description: "Designed curriculum and delivered an intensive 3-day hands-on bootcamp for 1st-year B.Tech juniors, transitioning them from absolute beginners to deploying predictive machine learning models.",
      highlights: [
        "Day 1: Demystified developer environments, Linux toolchains, Python interpreters, and foundational algorithmic thinking.",
        "Day 2 & 3: Broke open the 'black box' of Machine Learning using Scikit-Learn; taught feature matrix construction, data splitting, and evaluation metrics.",
        "Live Milestone: Mentored students through training and evaluating two real-world classification models from scratch: Logistic Regression and Random Forest Classifiers."
      ]
    },
    {
      role: "Associate of Cloud and Security",
      organization: "Microsoft Learn Student Club (MLSC)",
      period: "Ongoing",
      type: "Technical Community",
      description: "Focused strictly on core engineering initiatives, peer workshops, and modern infrastructure exploration.",
      highlights: [
        "Explored and implemented cloud computing architectures and cybersecurity defense best practices alongside senior peers.",
        "Co-organized technical workshops and technical problem-solving sprints to build a collaborative, code-first culture.",
        "Mentored junior engineering students in foundational programming, debugging discipline, and Git version control."
      ]
    }
  ],

  skills: {
    languages: [
      { name: "Python", level: "Advanced", desc: "Scientific stack, Flask, ML pipelines, yt-dlp, CLI tools" },
      { name: "JavaScript (ES6+)", level: "Advanced", desc: "Async/await, DOM APIs, React state architecture, Node.js" },
      { name: "Java", level: "Proficient", desc: "Object-Oriented Programming, Data Structures & Algorithms" },
      { name: "C", level: "Proficient", desc: "Memory fundamentals, pointers, low-level computation" },
      { name: "SQL", level: "Proficient", desc: "Relational schema design, complex joins, query optimization" },
      { name: "HTML5 & CSS3", level: "Advanced", desc: "Semantic markup, modern layout models, responsive UI" }
    ],
    frameworks: [
      { name: "React.js", level: "Advanced", desc: "Hooks, component lifecycles, virtual DOM, Tailwind integration" },
      { name: "Node.js & Express", level: "Proficient", desc: "RESTful API design, middleware pipelines, JWT auth" },
      { name: "MongoDB (MERN)", level: "Proficient", desc: "Document storage, aggregation pipelines, Mongoose ODM" },
      { name: "Flask", level: "Proficient", desc: "Microservice backends, Python API routes, audio streaming" },
      { name: "Scikit-Learn", level: "Proficient", desc: "KNN spatial models, Random Forest, Logistic Regression" },
      { name: "Ollama / Local LLMs", level: "Hands-on", desc: "Llama 3.2 orchestration, local AI inference, zero API leak" }
    ],
    cloudAndDevOps: [
      { name: "AWS (Cloud Foundations)", level: "Certified", desc: "EC2 instances, S3 storage, IAM security policies, VPC" },
      { name: "Linux / Ubuntu Base", level: "Daily Driver", desc: "Dual-boot workstation, shell scripting, process management" },
      { name: "Docker", level: "Learning", desc: "Containerizing microservices, Dockerfiles, isolated environments" },
      { name: "Kubernetes", level: "Learning", desc: "Container orchestration concepts, pod scheduling, services" },
      { name: "Vercel & Supabase", level: "Proficient", desc: "Continuous deployment, serverless routing, edge hosting" },
      { name: "Git & GitHub", level: "Proficient", desc: "Branching strategies, CI workflows, open-source collaboration" }
    ]
  },

  thoughtsAndPosts: [
    {
      id: "post-1",
      tag: "Mentorship & Pedagogy",
      title: "Teaching Is The Ultimate Mastery: Leading a 72-Hour ML/DL Bootcamp",
      preview: "Taking absolute beginners from zero to training Logistic Regression and Random Forest models in 72 hours. Focused on intuition before mathematics and hands-on coding before abstractions.",
      stats: "72 Hours • Hands-on Lab • Scikit-Learn",
      link: "https://www.linkedin.com/in/lokesh-koti-sai-kumar-chevuri-3a9abb375"
    },
    {
      id: "post-2",
      tag: "System Architecture",
      title: "Dhwani Sutra: Dual-Engine Core for Culture-Aware Music Discovery",
      preview: "Why single recommendation engines fail: How we bridged mathematical KNN spatial vectorization on Spotify features with Llama 3.2 local LLM cultural intelligence and IP-persistent playback.",
      stats: "Top LinkedIn Reach • Hybrid AI • Low-Latency",
      link: "https://www.linkedin.com/in/lokesh-koti-sai-kumar-chevuri-3a9abb375"
    },
    {
      id: "post-3",
      tag: "Cloud Infrastructure",
      title: "From Code to Cloud: Deploying 'Dark Maze' on Amazon EC2",
      preview: "Demystifying production cloud deployments: configuring security groups, SSH tunnels, Linux service daemons, and reverse proxies for real-world interactive browser experiences.",
      stats: "AWS EC2 • Linux Daemon • Pure JS",
      link: "https://www.linkedin.com/in/lokesh-koti-sai-kumar-chevuri-3a9abb375"
    }
  ],

  education: [
    {
      institution: "Sri Vasavi Engineering College",
      location: "Tadepalligudem, Andhra Pradesh",
      degree: "Bachelor of Technology in Computer Science and Technology",
      period: "Expected May 2028",
      score: "CGPA: 8.89 / 10",
      details: "Key Coursework: Data Structures & Algorithms, Database Management Systems (DBMS), Object-Oriented Programming (OOP), Operating Systems, Computer Networks."
    },
    {
      institution: "Vasavi Viznan Junior College",
      location: "Penugonda, Andhra Pradesh",
      degree: "Class XII Board of Intermediate Education",
      period: "Graduated 2024",
      score: "Score: 96.4%",
      details: "Strong academic foundation in Mathematics, Physics, and analytical logic."
    }
  ],

  certifications: [
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services (AWS)",
      status: "Exam Credential Validation (Target Feb 2026)",
      summary: "Validating foundational knowledge of AWS cloud architecture, IAM access management, S3 storage tiers, EC2 compute scaling, and enterprise infrastructure security."
    },
    {
      title: "Container & Orchestration Engineering",
      issuer: "Independent Deep Dive",
      status: "In Active Progress",
      summary: "Practical implementation of Docker containerization and Kubernetes cluster management for distributed microservice workloads."
    }
  ]
};
