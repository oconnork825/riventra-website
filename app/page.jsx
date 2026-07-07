import {
  ArrowRight,
  BarChart3,
  Bot,
  Building2,
  CheckCircle2,
  Cpu,
  Mail,
  PackageCheck,
  Sparkles,
  Zap,
} from 'lucide-react';

const solutions = [
  {
    title: 'Resident Essentials',
    label: 'First launch',
    description:
      'Modern cashless convenience stations for apartments, offices, and shared residential spaces.',
    bullets: ['No-cost amenity for property teams', 'Useful essentials and quick-grab products', 'Stocked and serviced by Riventra'],
    icon: Building2,
  },
  {
    title: 'FlowIQ',
    label: 'Automation platform',
    description:
      'AI-assisted workflows, dashboards, inventory intelligence, and digital transformation solutions.',
    bullets: ['Workflow automation', 'Inventory and route intelligence', 'AI-enabled operating systems'],
    icon: Bot,
  },
  {
    title: 'ReportForge',
    label: 'Reporting product',
    description:
      'Automated reporting, executive dashboards, and repeatable analytics workflows for organizations.',
    bullets: ['Automated reports', 'Executive-ready dashboards', 'Reliable reporting pipelines'],
    icon: BarChart3,
  },
];

const stats = [
  ['24/7', 'resident access'],
  ['0$', 'property cost to explore'],
  ['AI', 'operations-first mindset'],
  ['Local', 'Capital Region service'],
];

export default function Home() {
  return (
    <main>
      <header className="nav">
        <a className="brand" href="#top" aria-label="Riventra home">
          <span className="brandMark">R</span>
          <span>Riventra</span>
        </a>
        <nav>
          <a href="#solutions">Solutions</a>
          <a href="#platform">Platform</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section id="top" className="hero">
        <div className="orb one" />
        <div className="orb two" />
        <div className="heroCopy">
          <p className="eyebrow">Capital Region • New York</p>
          <h1>Intelligent retail and AI automation for everyday operations.</h1>
          <p className="lede">
            Riventra builds practical technology products and unattended retail solutions that help
            residential communities and organizations operate more intelligently.
          </p>
          <div className="actions">
            <a className="btn primary" href="mailto:keith@riventra.app?subject=Riventra%20Inquiry">
              Start a conversation <ArrowRight size={18} />
            </a>
            <a className="btn secondary" href="#solutions">Explore solutions</a>
          </div>
        </div>

        <div className="heroVisual" aria-label="Riventra dashboard preview">
          <div className="windowTop">
            <span /><span /><span />
          </div>
          <div className="dashboardHeader">
            <div>
              <p>Riventra Operating Layer</p>
              <h2>FlowIQ</h2>
            </div>
            <span className="pill">Live roadmap</span>
          </div>
          <div className="metricGrid">
            {stats.map(([big, small]) => (
              <div className="metric" key={small}>
                <strong>{big}</strong>
                <span>{small}</span>
              </div>
            ))}
          </div>
          <div className="bars">
            <span style={{ height: '44%' }} />
            <span style={{ height: '72%' }} />
            <span style={{ height: '58%' }} />
            <span style={{ height: '88%' }} />
            <span style={{ height: '64%' }} />
            <span style={{ height: '78%' }} />
          </div>
          <div className="insight">
            <Sparkles size={18} />
            <p>Use real sales, inventory, and service data to improve product mix and operations.</p>
          </div>
        </div>
      </section>

      <section className="marquee" aria-label="Riventra capabilities">
        <span>Intelligent Retail</span>
        <span>AI Automation</span>
        <span>Dashboards</span>
        <span>Reporting</span>
        <span>Digital Transformation</span>
      </section>

      <section id="solutions" className="section">
        <p className="eyebrow">Solutions</p>
        <div className="sectionHeader">
          <h2>Built as a technology company from day one.</h2>
          <p>
            Riventra starts with Resident Essentials and grows into a broader platform for automation,
            reporting, and operational intelligence.
          </p>
        </div>

        <div className="cards">
          {solutions.map((item, index) => {
            const Icon = item.icon;
            return (
              <article className={index === 0 ? 'card featured' : 'card'} key={item.title}>
                <div className="cardTop">
                  <div className="iconWrap"><Icon size={24} /></div>
                  <span>{item.label}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <ul>
                  {item.bullets.map((bullet) => (
                    <li key={bullet}><CheckCircle2 size={18} /> {bullet}</li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </section>

      <section id="platform" className="section dark">
        <div className="sectionHeader">
          <p className="eyebrow">Platform mindset</p>
          <h2>Every machine becomes a data source. Every workflow becomes software.</h2>
          <p>
            Riventra’s long-term advantage is the combination of real-world operations and software
            that learns from those operations.
          </p>
        </div>
        <div className="platformGrid">
          <div><PackageCheck /><h3>Inventory intelligence</h3><p>Track product performance, restocking priorities, and margin by location.</p></div>
          <div><Zap /><h3>Workflow automation</h3><p>Automate reporting, alerts, operational tasks, and customer follow-up.</p></div>
          <div><Cpu /><h3>AI-ready systems</h3><p>Design tools that can become the foundation for future FlowIQ and ReportForge products.</p></div>
        </div>
      </section>

      <section id="about" className="section split">
        <div>
          <p className="eyebrow">Founder-led</p>
          <h2>Local service backed by data science and enterprise automation experience.</h2>
        </div>
        <div className="copy">
          <p>
            Riventra was founded by <strong>Keith O&apos;Connor, Ph.D.</strong>, a data scientist and digital
            transformation leader with experience building automation strategies, analytics workflows,
            dashboards, and operational systems.
          </p>
          <p>
            The company combines practical service with modern technology: first by launching Resident
            Essentials in apartment communities, then by developing FlowIQ and ReportForge into software
            products shaped by real-world operations.
          </p>
        </div>
      </section>

      <section className="section property">
        <div className="propertyCard">
          <p className="eyebrow">For property managers</p>
          <h2>Add a resident convenience amenity without adding work for your staff.</h2>
          <p>
            Riventra installs and manages modern unattended convenience stations that give residents
            access to helpful products when they need them most.
          </p>
          <div className="benefits">
            <div><strong>24/7 access</strong><span>Convenience beyond office hours.</span></div>
            <div><strong>No-cost conversation</strong><span>Explore fit before any commitment.</span></div>
            <div><strong>Cashless experience</strong><span>Simple, modern resident payments.</span></div>
            <div><strong>Local support</strong><span>Capital Region based service.</span></div>
          </div>
          <a className="btn primary" href="mailto:keith@riventra.app?subject=Resident%20Convenience%20Station%20Inquiry">
            Request a 15-minute conversation <Mail size={18} />
          </a>
        </div>
      </section>

      <section id="contact" className="section contact">
        <p className="eyebrow">Contact</p>
        <h2>Start a conversation with Riventra.</h2>
        <p>
          For apartment partnerships, Resident Essentials, FlowIQ automation, or ReportForge reporting,
          reach out directly.
        </p>
        <a className="btn primary" href="mailto:keith@riventra.app">keith@riventra.app</a>
      </section>

      <footer>
        <div>
          <strong>Riventra LLC</strong>
          <span>Intelligent Retail • AI • Automation • Digital Transformation</span>
        </div>
        <div>
          <a href="mailto:keith@riventra.app">keith@riventra.app</a>
          <a href="https://riventra.app">riventra.app</a>
        </div>
      </footer>
    </main>
  );
}
