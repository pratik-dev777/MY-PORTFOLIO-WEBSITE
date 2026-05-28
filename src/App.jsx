import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Award,
  BadgeCheck,
  BriefcaseBusiness,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  Code2,
  Cpu,
  Download,
  Github,
  GraduationCap,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Moon,
  Phone,
  Send,
  Sparkles,
  Sun,
  Trophy,
  X,
  Zap,
} from "lucide-react";

const withBase = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;

const profile = {
  name: "Pratik Raj",
  title: "Full-Stack Developer",
  location: "Patna, Bihar, India",
  email: "pratikrajbit@gmail.com",
  phone: "+91-9386152006",
  github: "https://github.com/pratik-dev777",
  linkedin: "https://linkedin.com/in/pratikraj91",
  resume: withBase("Pratik-Raj-Resume.pdf"),
  photo: withBase("profile.jpeg"),
  headline:
    "ECE student and self-taught full-stack developer building useful, animated, production-minded web experiences.",
  summary:
    "I am pursuing B.Tech in Electronics and Communication Engineering at BIT Mesra, Patna campus, with strong hands-on work across React, Next.js, Express, MongoDB, Python, and JavaScript. I have built full-stack applications, completed a paid railway web-app internship, trained at Airports Authority of India, and led technical, event, and sponsorship teams on campus.",
};

const navItems = ["home", "about", "experience", "projects", "skills", "achievements", "contact"];

const stats = [
  { value: "9", label: "Week paid full-stack internship" },
  { value: "10+", label: "Repo-backed projects showcased" },
  { value: "8.6", label: "Best semester SGPA" },
  { value: "2nd", label: "EY 6.0 Hackathon round" },
];

const experience = [
  {
    role: "Full Stack Developer Intern",
    org: "Skylark Designer & Engineers Pvt. Ltd.",
    meta: "Patna | 15 May 2025 - 20 July 2025",
    tag: "Paid internship",
    icon: BriefcaseBusiness,
    points: [
      "Developed a full-stack web application for TRD, Danapur Division, East Central Railway.",
      "Worked with engineering stakeholders to understand railway division requirements and deliver functional features.",
      "Earned commendation for problem-solving, dedication, and proactive learning.",
    ],
  },
  {
    role: "Internship Trainee",
    org: "Airports Authority of India, J.P.N. Airport",
    meta: "Patna | 23 June 2025 - July 2025",
    tag: "Government training",
    icon: Cpu,
    points: [
      "Completed a four-week training program at an international airport.",
      "Observed flight operations, safety protocols, passenger systems, baggage workflows, and basic IT infrastructure.",
      "Built discipline, communication, and teamwork habits in a high-stakes operating environment.",
    ],
  },
];

const projects = [
  {
    title: "East Central Railway Document Viewer",
    stack: ["HTML", "CSS", "JavaScript", "PDF.js", "PDF-Lib"],
    category: "Full Stack",
    repo: "https://github.com/pratik-dev777/railway-project-webAPP",
    summary:
      "Internship project for Danapur Division station-board PDFs with station search, interactive railway map markers, PDF preview, section diagrams, downloads, and helper tooling.",
    accent: "rose",
    preview: "railway",
    image: withBase("project-previews/railway-preview.jpg"),
    featured: true,
  },
  {
    title: "AIBillFIX",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Vitest"],
    category: "AI / SaaS",
    repo: "https://github.com/pratik-dev777/AI-BILL-FIX-webAPP",
    summary:
      "AI spend-audit SaaS that lets startups enter tool usage, runs deterministic savings rules, persists audits with Supabase, supports public audit pages, and includes lead capture.",
    accent: "emerald",
    preview: "aiAudit",
    featured: true,
  },
  {
    title: "EY Hackathon AgentAI Platform",
    stack: ["React", "TypeScript", "Shadcn UI", "Python", "Scikit-learn"],
    category: "AI / ML",
    repo: "https://github.com/pratik-dev777/EY_HACKATHON_6.0_frontend",
    links: [
      { label: "Frontend", url: "https://github.com/pratik-dev777/EY_HACKATHON_6.0_frontend" },
      { label: "Backend", url: "https://github.com/pratik-dev777/EY-backend" },
    ],
    summary:
      "EY Techathon 6.0 solution combining an AgentAI predictive-maintenance dashboard with a Python vehicle-telemetry backend for fault prediction.",
    accent: "cyan",
    preview: "telemetry",
    image: withBase("project-previews/ey-preview.jpg"),
    featured: true,
  },
  {
    title: "VLSI FPGA Median Filter",
    stack: ["Verilog", "Xilinx", "Vivado", "MATLAB", "Image Processing"],
    category: "Hardware",
    repo: "https://github.com/pratik-dev777/VLSI-FPGA-PROJECT",
    summary:
      "3x3 median-filter image-denoising project with Verilog modules, pipelined comparator sort network, Vivado-friendly testbench, MATLAB preprocessing, and waveform outputs.",
    accent: "violet",
    preview: "fpga",
    image: withBase("project-previews/vlsi-preview.jpg"),
    featured: true,
  },
  {
    title: "She Can Foundation Connect",
    stack: ["React", "Vite", "Express", "SQLite", "JWT", "Zod"],
    category: "Full Stack",
    repo: "https://github.com/pratik-dev777/Form-and-adminPanel-landingPage",
    summary:
      "Full-stack contact portal with responsive landing page, validated form submission, Express APIs, SQLite persistence, JWT-protected admin dashboard, and status management.",
    accent: "amber",
    preview: "form",
    image: withBase("project-previews/shecan-preview.jpg"),
  },
  {
    title: "PopX Login UI",
    stack: ["React", "Vite", "CSS"],
    category: "Frontend",
    repo: "https://github.com/pratik-dev777/pratik-loginUI",
    summary:
      "Pixel-conscious React implementation of a mobile onboarding flow with landing, login, signup, and account settings screens.",
    accent: "lime",
    preview: "login",
  },
  {
    title: "Python Weather Voice App",
    stack: ["Python", "WeatherAPI", "Requests", "pyttsx3"],
    category: "Python",
    repo: "https://github.com/pratik-dev777/python-weather-app",
    summary:
      "Command-line weather assistant that fetches real-time WeatherAPI data for any city and reads the current temperature aloud with text-to-speech.",
    accent: "cyan",
    preview: "weather",
  },
  {
    title: "Currency Converter",
    stack: ["HTML", "CSS", "JavaScript", "Fetch API"],
    category: "API",
    repo: "",
    summary:
      "Local unpushed Fetch API project with currency dropdowns, country flags, live exchange-rate calls, validation, and instant conversion output.",
    accent: "amber",
    preview: "currency",
  },
  {
    title: "Rock Paper Scissors",
    stack: ["HTML", "CSS", "JavaScript"],
    category: "Games",
    repo: "https://github.com/pratik-dev777/rock-paper-scissors-game",
    summary:
      "Browser game with image-based choices, score tracking, randomized computer moves, and instant win/loss/draw feedback.",
    accent: "lime",
    preview: "game",
    image: withBase("project-previews/rps-preview.jpg"),
  },
  {
    title: "Tic Tac Toe Web App",
    stack: ["HTML", "CSS", "JavaScript"],
    category: "Games",
    repo: "https://github.com/pratik-dev777/tic-tac-toe-webAPP",
    summary:
      "Two-player classic Tic Tac Toe game with automatic winner detection, reset/new-game controls, and a clean browser-based interface.",
    accent: "emerald",
    preview: "tictactoe",
  },
];

const skillGroups = [
  { title: "Frontend", items: ["React.js", "Next.js", "HTML", "CSS", "JavaScript"], icon: Layers3 },
  { title: "Backend", items: ["Node.js", "Express.js", "REST APIs", "Full-stack architecture"], icon: Code2 },
  { title: "Data", items: ["MongoDB", "MySQL", "API integration", "PDF processing"], icon: Cpu },
  { title: "Programming", items: ["JavaScript", "Python", "Verilog basics", "Xilinx FPGA tools"], icon: Zap },
  {
    title: "Leadership",
    items: ["Team management", "Sponsorship", "Event ops", "Clear communication"],
    icon: BadgeCheck,
  },
  {
    title: "Professional",
    items: ["Planning", "Problem solving", "Collaboration", "Adaptability"],
    icon: CheckCircle2,
  },
];

const achievements = [
  "Qualified for the second round of the EY 6.0 Hackathon.",
  "Led PRAKRIDA sponsorships beyond the previous two years' combined total.",
  "Resource Head for IGNITE, optimizing logistics and resource allocation for XORDIUM 4.0.",
  "Event Management Head for the college eSports Club during XORDIUM 4.0.",
  "Physics topper in Class 12 board exams with A+ grades in English, Physics, and Mathematics.",
  "Scored 96 in Class 10 and 90 in Class 12 Computer Science.",
];

const education = [
  {
    title: "B.Tech in Electronics and Communication",
    place: "Birla Institute of Technology Mesra, Patna Campus",
    detail: "6 semesters completed | CGPA 7.5/10",
  },
  {
    title: "Class 12, CBSE",
    place: "St. Karen's Secondary School, Patna",
    detail: "90.2%",
  },
  {
    title: "Class 10, CBSE",
    place: "St. Karen's Secondary School, Patna",
    detail: "91.1%",
  },
];

const certifications = [
  "Online Python Course, W3Schools",
  "Online JavaScript Course, Apna College",
  "Cloud Computing Course, SWAYAM NPTEL",
];

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "dark");
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [projectFilter, setProjectFilter] = useState("All");
  const [spotlight, setSpotlight] = useState({ x: 50, y: 50 });
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 130, damping: 28, restDelta: 0.001 });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: 0.1 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const filteredProjects = useMemo(() => {
    if (projectFilter === "All") return projects;
    return projects.filter((project) => project.category === projectFilter);
  }, [projectFilter]);

  const filters = useMemo(() => ["All", ...new Set(projects.map((project) => project.category))], []);

  const handleMouseMove = (event) => {
    const x = Math.round((event.clientX / window.innerWidth) * 100);
    const y = Math.round((event.clientY / window.innerHeight) * 100);
    setSpotlight({ x, y });
  };

  return (
    <div className="app-shell" onMouseMove={handleMouseMove}>
      <motion.div className="scroll-progress" style={{ scaleX }} />
      <div
        className="spotlight"
        style={{ "--x": `${spotlight.x}%`, "--y": `${spotlight.y}%` }}
        aria-hidden="true"
      />
      <ParticleField />

      <Header
        activeSection={activeSection}
        theme={theme}
        setTheme={setTheme}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />

      <main>
        <Hero />
        <About />
        <Experience />
        <Projects
          filters={filters}
          filteredProjects={filteredProjects}
          projectFilter={projectFilter}
          setProjectFilter={setProjectFilter}
        />
        <Skills />
        <Achievements />
        <Contact />
      </main>

      <footer className="site-footer">
        <span>Designed and built for {profile.name}</span>
        <a href="#home" aria-label="Back to top">
          <ArrowDown className="upside-down" size={18} />
        </a>
      </footer>
    </div>
  );
}

function Header({ activeSection, theme, setTheme, menuOpen, setMenuOpen }) {
  return (
    <header className="site-header">
      <a href="#home" className="brand" aria-label="Pratik Raj home">
        <span>PR</span>
        <strong>Pratik Raj</strong>
      </a>

      <nav className="desktop-nav" aria-label="Primary navigation">
        {navItems.map((item) => (
          <a key={item} href={`#${item}`} className={activeSection === item ? "active" : ""}>
            {item}
          </a>
        ))}
      </nav>

      <div className="header-actions">
        <button className="icon-button" type="button" onClick={() => setTheme(theme === "dark" ? "light" : "dark")} aria-label="Toggle theme">
          {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
        </button>
        <a className="icon-button" href={profile.github} target="_blank" rel="noreferrer" aria-label="Open GitHub">
          <Github size={18} />
        </a>
        <button className="icon-button mobile-only" type="button" onClick={() => setMenuOpen(true)} aria-label="Open menu">
          <Menu size={18} />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div className="mobile-menu" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.div
              className="mobile-menu-panel"
              initial={{ y: -16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -16, opacity: 0 }}
            >
              <button className="icon-button close-menu" type="button" onClick={() => setMenuOpen(false)} aria-label="Close menu">
                <X size={18} />
              </button>
              {navItems.map((item) => (
                <a key={item} href={`#${item}`} onClick={() => setMenuOpen(false)}>
                  {item}
                  <ChevronRight size={16} />
                </a>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="hero section-pad">
      <div className="hero-copy">
        <Reveal>
          <span className="eyebrow">
            <Sparkles size={16} />
            Available for internships, freelance builds, and collaborations
          </span>
        </Reveal>
        <Reveal delay={0.08}>
          <h1>
            Pratik Raj
            <span>Full-stack developer with an ECE edge.</span>
          </h1>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="hero-lede">{profile.headline}</p>
        </Reveal>
        <Reveal delay={0.24}>
          <div className="hero-actions">
            <a className="primary-button" href="#projects">
              View work
              <ArrowDown size={18} />
            </a>
            <a className="secondary-button" href={profile.resume} download>
              <Download size={18} />
              Resume
            </a>
            <a className="ghost-link" href={`mailto:${profile.email}`}>
              <Send size={17} />
              Hire me
            </a>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.18} className="hero-visual-wrap">
        <TiltCard className="hero-card">
          <div className="orbital-ring ring-one" />
          <div className="orbital-ring ring-two" />
          <div className="profile-frame">
            <img src={profile.photo} alt="Pratik Raj" />
          </div>
          <div className="status-card glass">
            <span className="pulse" />
            Building clean, fast web apps
          </div>
          <div className="stack-card glass">
            <Code2 size={16} />
            React | Node | MongoDB | Python
          </div>
        </TiltCard>
      </Reveal>

      <div className="stats-strip">
        {stats.map((stat, index) => (
          <Reveal key={stat.label} delay={0.08 * index}>
            <div className="stat-card">
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <Section id="about" eyebrow="About" title="A developer who can move between product thinking, engineering, and real-world systems.">
      <div className="about-grid">
        <Reveal className="copy-panel">
          <p>{profile.summary}</p>
          <div className="contact-chips">
            <span>
              <MapPin size={16} />
              {profile.location}
            </span>
            <a href={`mailto:${profile.email}`}>
              <Mail size={16} />
              {profile.email}
            </a>
            <a href={`tel:${profile.phone.replaceAll("-", "")}`}>
              <Phone size={16} />
              {profile.phone}
            </a>
          </div>
        </Reveal>
        <Reveal delay={0.12} className="education-panel">
          <h3>Education</h3>
          {education.map((item) => (
            <div className="education-item" key={item.title}>
              <GraduationCap size={18} />
              <div>
                <strong>{item.title}</strong>
                <span>{item.place}</span>
                <small>{item.detail}</small>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </Section>
  );
}

function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Internships with engineering teams, public infrastructure, and deadline pressure.">
      <div className="timeline">
        {experience.map((item, index) => {
          const Icon = item.icon;
          return (
            <Reveal className="timeline-card" key={item.role} delay={index * 0.12}>
              <div className="timeline-icon">
                <Icon size={20} />
              </div>
              <div className="timeline-content">
                <span className="tag">{item.tag}</span>
                <h3>{item.role}</h3>
                <strong>{item.org}</strong>
                <small>
                  <CalendarDays size={15} />
                  {item.meta}
                </small>
                <ul>
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}

function Projects({ filters, filteredProjects, projectFilter, setProjectFilter }) {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Major builds with real repos, visual previews, and practical engineering range."
    >
      <div className="filter-row" role="tablist" aria-label="Project filters">
        {filters.map((filter) => (
          <button
            key={filter}
            className={projectFilter === filter ? "active" : ""}
            type="button"
            onClick={() => setProjectFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      <motion.div layout className="project-grid">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.article
              layout
              className={`project-card accent-${project.accent}`}
              key={project.title}
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -18, scale: 0.97 }}
              transition={{ duration: 0.35 }}
            >
              <ProjectPreview project={project} />
              <div className="project-topline">
                <span>{project.featured ? "Featured" : project.category}</span>
                <ArrowUpRight size={18} />
              </div>
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              <div className="stack-list">
                {project.stack.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
              <div className="project-actions">
                {project.links?.length ? (
                  project.links.map((link) => (
                    <a href={link.url} target="_blank" rel="noreferrer" key={link.url}>
                      <Github size={17} />
                      {link.label}
                    </a>
                  ))
                ) : project.repo ? (
                  <a href={project.repo} target="_blank" rel="noreferrer">
                    <Github size={17} />
                    View repo
                  </a>
                ) : (
                  <span>
                    <Github size={17} />
                    Local project files
                  </span>
                )}
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </Section>
  );
}

function ProjectPreview({ project }) {
  return (
    <div className={`project-preview preview-${project.preview}`} aria-label={`${project.title} screenshot preview`}>
      {project.image ? (
        <img className="project-preview-image" src={project.image} alt={`${project.title} preview`} />
      ) : null}
      <div className={`preview-window ${project.image ? "preview-overlay" : ""}`}>
        <div className="preview-dots">
          <i />
          <i />
          <i />
        </div>
        {project.preview === "railway" && (
          <div className="railway-preview">
            <strong>Danapur Division</strong>
            <span>Station search</span>
            <div className="rail-track">
              <i />
              <i />
              <i />
              <i />
            </div>
            <small>PDF viewer + section diagrams</small>
          </div>
        )}
        {project.preview === "aiAudit" && (
          <div className="audit-preview">
            <span>AI spend audit</span>
            <strong>$1.2k/mo</strong>
            <div>
              <i />
              <i />
              <i />
            </div>
            <small>Supabase saved report</small>
          </div>
        )}
        {project.preview === "currency" && (
          <div className="currency-preview">
            <strong>INR</strong>
            <ArrowUpRight size={18} />
            <strong>USD</strong>
            <span>Live API rate</span>
          </div>
        )}
        {project.preview === "login" && (
          <div className="login-preview">
            <strong>Welcome to PopX</strong>
            <span>Create Account</span>
            <small>Login | Signup | Profile</small>
          </div>
        )}
        {project.preview === "weather" && (
          <div className="weather-preview">
            <Sun size={34} />
            <strong>29°C</strong>
            <span>Patna | Voice output</span>
          </div>
        )}
        {project.preview === "telemetry" && (
          <div className="telemetry-preview">
            <strong>AgentAI</strong>
            <span>Fault prediction</span>
            <div className="node-map">
              <i />
              <i />
              <i />
              <i />
              <i />
            </div>
          </div>
        )}
        {project.preview === "fpga" && (
          <div className="fpga-preview">
            <div className="pixel-grid">
              {Array.from({ length: 25 }).map((_, index) => (
                <i key={index} />
              ))}
            </div>
            <strong>Median Filter</strong>
          </div>
        )}
        {project.preview === "form" && (
          <div className="form-preview">
            <strong>Validated API</strong>
            <span>SQLite submissions</span>
            <small>Admin dashboard</small>
          </div>
        )}
        {project.preview === "game" && (
          <div className="game-preview">
            <span>X</span>
            <span>O</span>
            <span>X</span>
            <strong>Arcade logic</strong>
          </div>
        )}
        {project.preview === "tictactoe" && (
          <div className="tictactoe-preview">
            {["X", "O", "X", "O", "X", "", "", "O", "X"].map((mark, index) => (
              <span key={`${mark}-${index}`}>{mark}</span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="A practical stack for turning ideas into polished, working software.">
      <div className="skills-grid">
        {skillGroups.map((group, index) => {
          const Icon = group.icon;
          return (
            <Reveal key={group.title} delay={index * 0.05} className="skill-card">
              <div className="skill-heading">
                <Icon size={20} />
                <h3>{group.title}</h3>
              </div>
              <div className="skill-pills">
                {group.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}

function Achievements() {
  return (
    <Section id="achievements" eyebrow="Highlights" title="Proof points from academics, hackathons, leadership, and campus execution.">
      <div className="achievement-layout">
        <Reveal className="achievement-panel">
          <div className="panel-icon">
            <Trophy size={24} />
          </div>
          <h3>Achievements</h3>
          <ul className="achievement-list">
            {achievements.map((achievement) => (
              <li key={achievement}>
                <Award size={17} />
                {achievement}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.12} className="cert-panel">
          <h3>Certifications</h3>
          {certifications.map((item) => (
            <div className="cert-item" key={item}>
              <CheckCircle2 size={18} />
              <span>{item}</span>
            </div>
          ))}
          <div className="interest-card">
            <strong>Interests</strong>
            <p>Football, cricket, chess, in-house tournaments, and learning new things.</p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

function Contact() {
  return (
    <section id="contact" className="contact-section section-pad">
      <Reveal>
        <div className="contact-card">
          <span className="eyebrow">
            <Mail size={16} />
            Contact
          </span>
          <h2>Let’s build something sharp, useful, and memorable.</h2>
          <p>
            I am open to internships, full-stack projects, collaboration opportunities, and technical roles where I can keep
            learning while shipping real work.
          </p>
          <div className="contact-actions">
            <a className="primary-button" href={`mailto:${profile.email}?subject=Portfolio%20Opportunity%20for%20Pratik%20Raj`}>
              <Send size={18} />
              Email me
            </a>
            <a className="secondary-button" href={profile.linkedin} target="_blank" rel="noreferrer">
              <Linkedin size={18} />
              LinkedIn
            </a>
            <a className="secondary-button" href={profile.github} target="_blank" rel="noreferrer">
              <Github size={18} />
              GitHub
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function Section({ id, eyebrow, title, children }) {
  return (
    <section id={id} className="content-section section-pad">
      <Reveal className="section-heading">
        <span className="eyebrow">{eyebrow}</span>
        <h2>{title}</h2>
      </Reveal>
      {children}
    </section>
  );
}

function Reveal({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, delay, ease: [0.2, 0.8, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}

function TiltCard({ children, className }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-120, 120], [9, -9]);
  const rotateY = useTransform(x, [-120, 120], [-9, 9]);

  const handleMouseMove = (event) => {
    const rect = ref.current.getBoundingClientRect();
    x.set(event.clientX - rect.left - rect.width / 2);
    y.set(event.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </motion.div>
  );
}

function ParticleField() {
  return (
    <div className="particle-field" aria-hidden="true">
      {Array.from({ length: 26 }).map((_, index) => (
        <span key={index} style={{ "--i": index }} />
      ))}
    </div>
  );
}

export default App;
