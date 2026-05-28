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
  { value: "7+", label: "Practical projects shipped" },
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
    title: "TextUtils",
    stack: ["React.js", "JavaScript", "CSS"],
    category: "Web App",
    repo: "",
    summary:
      "Feature-rich text manipulation utility with case conversion, cleanup tools, copy actions, text-to-speech, live preview, summary stats, and dark mode.",
    accent: "emerald",
    preview: "text",
  },
  {
    title: "Currency Converter",
    stack: ["HTML", "CSS", "JavaScript", "API"],
    category: "API App",
    repo: "",
    summary:
      "Responsive converter that calls a live currency API and transforms exchange data into a quick, usable interface.",
    accent: "amber",
    preview: "currency",
  },
  {
    title: "Weather Speaker",
    stack: ["Python", "API", "Text-to-Speech"],
    category: "Python",
    repo: "",
    summary:
      "Python utility that fetches weather information and announces the result with speech output for a hands-free experience.",
    accent: "cyan",
    preview: "weather",
  },
  {
    title: "PDF Merger",
    stack: ["Python", "PyPDF2"],
    category: "Automation",
    repo: "",
    summary:
      "Small productivity program that merges user-selected PDF files into one document using Python PDF tooling.",
    accent: "violet",
    preview: "pdf",
  },
  {
    title: "FPGA Median Filter",
    stack: ["Verilog", "Xilinx", "Image Processing"],
    category: "ECE",
    repo: "",
    summary:
      "Ongoing minor project implementing a median filter for salt-and-pepper noise reduction with FPGA simulation basics.",
    accent: "rose",
    preview: "fpga",
  },
  {
    title: "Game Arcade",
    stack: ["HTML", "CSS", "JavaScript"],
    category: "Games",
    repo: "",
    summary:
      "Interactive Rock-Paper-Scissors and two-player Tic-Tac-Toe games with browser-native logic and responsive styling.",
    accent: "lime",
    preview: "game",
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
        <Projects filters={filters} filteredProjects={filteredProjects} projectFilter={projectFilter} setProjectFilter={setProjectFilter} />
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
    <Section id="projects" eyebrow="Projects" title="Selected builds across web apps, automation, games, APIs, and ECE experiments.">
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
                <span>{project.category}</span>
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
                {project.repo ? (
                  <a href={project.repo} target="_blank" rel="noreferrer">
                    <Github size={17} />
                    Repository
                  </a>
                ) : (
                  <span>
                    <Github size={17} />
                    Repo link pending
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
      <div className="preview-window">
        <div className="preview-dots">
          <i />
          <i />
          <i />
        </div>
        {project.preview === "text" && (
          <div className="text-preview">
            <span>TextUtils</span>
            <strong>Words 184</strong>
            <p>camelCase | PascalCase | snake_case</p>
            <div />
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
        {project.preview === "weather" && (
          <div className="weather-preview">
            <Sun size={34} />
            <strong>29°C</strong>
            <span>Patna | Voice output</span>
          </div>
        )}
        {project.preview === "pdf" && (
          <div className="pdf-preview">
            <span>PDF A</span>
            <ChevronRight size={18} />
            <span>PDF B</span>
            <strong>Merged.pdf</strong>
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
        {project.preview === "game" && (
          <div className="game-preview">
            <span>X</span>
            <span>O</span>
            <span>X</span>
            <strong>Arcade logic</strong>
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
