import React from "react";
import { createRoot } from "react-dom/client";
import {
  Mail,
  ArrowUpRight,
  Download,
  Code2,
  Database,
  ShoppingCart,
  Server,
  CreditCard,
  LayoutDashboard,
  Menu,
  X,
  Moon,
  Sparkles,
  MapPin,
  Phone,
  Send,
} from "lucide-react";

import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import "./styles.css";

const projects = [
  {
    title: "GameMall",
    subtitle: "Virtual Gaming Mall & E-commerce Platform",
    description:
      "A complete gaming commerce experience combining vendors, stores, products, cart, orders, payments and an immersive virtual mall interface.",
    tech: ["React", "Node.js", "MySQL", "Paymob", "3D / Three.js"],
    url: null,
    featured: true,
    tone: "violet",
  },
  {
    title: "RoomEgy",
    subtitle: "Real Estate & Booking Platform",
    description:
      "A real-estate platform for discovering, renting and buying units, with listings, booking flows, agents and an administrative ecosystem.",
    tech: ["React", "PHP", "MySQL", "Bootstrap"],
    url: "https://roomegy.com/",
    featured: true,
    tone: "blue",
  },
  {
    title: "Quran Management System",
    subtitle: "Quran Learning & Hifz Platform",
    description:
      "A platform for organizing Quran learning and memorization activities, students, حلقات, content and related management workflows.",
    tech: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
    url: "https://aac-eg.com/quran/",
    featured: false,
    tone: "green",
  },
  {
    title: "School Management System",
    subtitle: "School Administration Platform",
    description:
      "An administrative system with secure login and management workflows designed for school operations and day-to-day data management.",
    tech: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
    url: "https://aac-eg.com/school/",
    featured: false,
    tone: "cyan",
  },
];

const skills = [
  ["React", "Frontend"],
  ["Next.js", "Frontend"],
  ["Node.js", "Backend"],
  ["PHP", "Backend"],
  ["MySQL", "Database"],
  ["MongoDB", "Database"],
  ["REST APIs", "Backend"],
  ["Git / GitHub", "Tools"],
  ["JavaScript", "Language"],
  ["Bootstrap", "UI"],
  ["Tailwind CSS", "UI"],
  ["Payment APIs", "Integration"],
];

const services = [
  {
    icon: Code2,
    title: "Full Stack Web Development",
    text: "End-to-end web applications from polished interfaces to secure backend services.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Development",
    text: "Stores, products, carts, orders, dashboards and payment integrations.",
  },
  {
    icon: Server,
    title: "REST API Development",
    text: "Structured APIs with authentication, validation, roles and database workflows.",
  },
  {
    icon: LayoutDashboard,
    title: "Admin Dashboards",
    text: "Practical management interfaces for teams, businesses and operations.",
  },
  {
    icon: Database,
    title: "Database Design",
    text: "Relational data models, business rules and maintainable backend architecture.",
  },
  {
    icon: CreditCard,
    title: "Payment Integration",
    text: "Checkout and payment flows integrated with external payment gateways.",
  },
];

function App() {
  const [open, setOpen] = React.useState(false);
  const [darkGlow, setDarkGlow] = React.useState(true);
  const close = () => setOpen(false);
  return (
    <div className={darkGlow ? "app" : "app soft"}>
      <div className="noise" />
      <header className="nav-wrap">
        <nav className="nav container">
          <a href="#home" className="brand" onClick={close}>
            <span>7G</span>
            <b>7 Gates</b>
          </a>
          <div className={`nav-links ${open ? "open" : ""}`}>
            {[
              "Home",
              "About",
              "Services",
              "Projects",
              "Process",
              "Contact",
            ].map((x) => (
              <a key={x} href={"#" + x.toLowerCase()} onClick={close}>
                {x}
              </a>
            ))}
          </div>
          <div className="nav-actions">
            <button
              className="icon-btn"
              onClick={() => setDarkGlow(!darkGlow)}
              aria-label="Toggle glow"
            >
              <Moon size={17} />
            </button>
            <a className="small-cta" href="#contact">
              Start a Project
            </a>
            <button className="menu-btn" onClick={() => setOpen(!open)}>
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </nav>
      </header>

      <main>
        <section id="home" className="hero container">
          <div className="hero-copy">
            <div className="eyebrow">
              <Sparkles size={14} /> WELCOME TO
            </div>
            <h1>
              7 <span>Gates</span>
            </h1>
            <h2>
              Digital Solutions <span>& Software Development</span>
            </h2>
            <p>
              We build modern web applications, e-commerce platforms, management
              systems and custom digital solutions designed around real business
              needs.
            </p>
            <div className="hero-buttons">
              <a className="primary-btn" href="#projects">
                Explore Our Work <ArrowUpRight size={17} />
              </a>
              <a className="secondary-btn" href="#contact">
                Start a Project <Mail size={16} />
              </a>
            </div>
            <div className="socials">
              <a
                href="https://github.com/Mahmedesa"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>
              <a href="#contact">
                <FaLinkedinIn />
              </a>
              <a href="#contact">
                <Mail />
              </a>
            </div>
          </div>
          <div className="hero-art">
            <div className="orbit o1" />
            <div className="orbit o2" />
            <div className="code-card">
              <div className="dots">
                <i />
                <i />
                <i />
              </div>
              <div className="code-lines">
                <b>const</b> developer = {"{"}
              </div>
              <div className="code-lines">
                company: <em>"7 Gates"</em>,
              </div>
              <div className="code-lines">
                focus: <em>"Digital Solutions"</em>,
              </div>
              <div className="code-lines">
                build: <em>"real products"</em>
              </div>
              <div className="code-lines">{" }"}</div>
            </div>
            <div className="tech-float f1">React</div>
            <div className="tech-float f2">Node</div>
            <div className="tech-float f3">PHP</div>
            <div className="tech-float f4">MySQL</div>
          </div>
        </section>

        <section id="about" className="section container split">
          <div>
            <div className="eyebrow">ABOUT 7 GATES</div>
            <h2 className="section-title">
              Building Digital <span>Products</span>
            </h2>
            <p className="lead">
              7 Gates is a software development company focused on building
              useful, maintainable and business-oriented digital products. We
              turn business requirements into clean interfaces, reliable APIs
              and complete digital experiences.
            </p>
            <div className="chips">
              <span>Business Focused</span>
              <span>Reliable Delivery</span>
              <span>Modern Technology</span>
            </div>
            <a className="secondary-btn" href="#contact">
              <Download size={16} /> Start a Project
            </a>
          </div>
          <div className="about-card">
            <div className="avatar-ring">
              <div className="avatar-placeholder">7G</div>
            </div>
            <div>
              <b>7 Gates · Software Development</b>
              <p>Web + E-commerce + Systems + Integrations</p>
            </div>
          </div>
        </section>

        <section id="skills" className="section container">
          <div className="eyebrow">TECH STACK</div>
          <h2 className="section-title">
            Our Technology <span>Stack</span>
          </h2>
          <p className="lead narrow">
            A practical technology stack for building modern, scalable and
            business-focused digital products.
          </p>
          <div className="skill-grid">
            {skills.map(([name, cat]) => (
              <div className="skill" key={name}>
                <Code2 size={18} />
                <div>
                  <b>{name}</b>
                  <small>{cat}</small>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="section container">
          <div className="eyebrow">OUR WORK</div>
          <h2 className="section-title">
            Selected <span>Projects</span>
          </h2>
          <p className="lead narrow">
            Selected systems and products representing our work across frontend,
            backend, databases, integrations and business workflows.
          </p>
          <div className="project-grid">
            {projects.map((p) => (
              <article
                className={`project ${p.featured ? "featured" : ""}`}
                key={p.title}
              >
                <div className={`project-visual ${p.tone}`}>
                  <div className="window">
                    <div className="window-top">
                      <i />
                      <i />
                      <i />
                    </div>
                    <div className="mock-title">{p.title}</div>
                    <div className="mock-panel">
                      <span />
                      <span />
                      <span />
                    </div>
                  </div>
                </div>
                <div className="project-body">
                  <div className="project-kicker">PROJECT</div>
                  <h3>{p.title}</h3>
                  <h4>{p.subtitle}</h4>
                  <p>{p.description}</p>
                  <div className="tags">
                    {p.tech.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                  <div className="project-actions">
                    {p.url ? (
                      <a
                        className="primary-btn compact"
                        href={p.url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Live Demo <ArrowUpRight size={15} />
                      </a>
                    ) : (
                      <span className="secondary-btn compact disabled">
                        Featured Project
                      </span>
                    )}
                    <a className="secondary-btn compact" href="#contact">
                      Details
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="section container split experience">
          <div>
            <div className="eyebrow">WHY 7 GATES</div>
            <h2 className="section-title">
              Our <span>Capabilities</span>
            </h2>
          </div>
          <div className="timeline">
            <div className="timeline-item">
              <b>Custom Software Development</b>
              <small>Present</small>
              <p>
                Building custom web applications, e-commerce systems, dashboards
                and APIs around real business requirements.
              </p>
            </div>
            <div className="timeline-item">
              <b>Product-Focused Development</b>
              <small>Professional Experience</small>
              <p>
                Creating responsive interfaces and practical digital experiences
                with attention to usability and performance.
              </p>
            </div>
            <div className="timeline-item">
              <b>Business Systems</b>
              <small>E-commerce & Business Systems</small>
              <p>
                Websites and management systems across e-commerce, restaurants,
                education and real-estate use cases.
              </p>
            </div>
          </div>
        </section>

        <section id="services" className="section container">
          <div className="eyebrow">WHAT WE DO</div>
          <h2 className="section-title">
            Services We <span>Provide</span>
          </h2>
          <div className="service-grid">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <div className="service" key={s.title}>
                  <div className="service-icon">
                    <Icon size={20} />
                  </div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              );
            })}
          </div>
        </section>

        <section id="process" className="section container">
          <div className="eyebrow">HOW WE WORK</div>
          <h2 className="section-title">
            From Idea to <span>Product</span>
          </h2>
          <p className="lead narrow">
            A clear development process that keeps business goals, user
            experience and technical quality aligned.
          </p>
          <div className="service-grid">
            <div className="service">
              <div className="service-icon">
                <Sparkles size={20} />
              </div>
              <h3>01 · Discover</h3>
              <p>
                Understand the business, users, requirements and goals before
                development starts.
              </p>
            </div>
            <div className="service">
              <div className="service-icon">
                <Code2 size={20} />
              </div>
              <h3>02 · Build</h3>
              <p>
                Design and develop the product with a practical, scalable
                technology stack.
              </p>
            </div>
            <div className="service">
              <div className="service-icon">
                <Database size={20} />
              </div>
              <h3>03 · Integrate</h3>
              <p>
                Connect databases, APIs, authentication, dashboards and
                third-party services.
              </p>
            </div>
            <div className="service">
              <div className="service-icon">
                <ArrowUpRight size={20} />
              </div>
              <h3>04 · Launch</h3>
              <p>
                Test, refine and prepare the product for a reliable production
                launch.
              </p>
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="container contact-grid">
            <div>
              <div className="eyebrow">GET IN TOUCH</div>
              <h2 className="section-title">
                Let's Work <span>Together</span>
              </h2>
              <p className="lead">
                Have a project in mind? Tell us what you are building and let's
                discuss the right digital solution for your business.
              </p>
              <div className="contact-info">
                <span>
                  <Mail size={18} /> info@7gates.com
                </span>
                <span>
                  <Phone size={18} /> +20 112 559 5754
                </span>
                <span>
                  <MapPin size={18} /> Egypt
                </span>
              </div>
              <div className="socials">
                <a
                  href="https://github.com/Mahmedesa"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub />
                </a>
                <a href="#">
                  <FaLinkedinIn />
                </a>
                <a href="mailto:hello@7gates.com">
                  <Mail />
                </a>
              </div>
            </div>
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <input placeholder="Your Name" />
              <input placeholder="Your Email" type="email" />
              <select defaultValue="">
                <option value="" disabled>
                  Project Type
                </option>
                <option>Web Application</option>
                <option>E-commerce</option>
                <option>API / Backend</option>
                <option>Other</option>
              </select>
              <textarea placeholder="Tell me about your project..." rows="5" />
              <button className="primary-btn" type="submit">
                <Send size={16} /> Send Message
              </button>
            </form>
          </div>
        </section>
      </main>
      <footer className="footer container">
        <span>7G · 7 Gates</span>
        <span>Full Stack Developer</span>
        <span>© 2026 7 Gates. All rights reserved.</span>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
