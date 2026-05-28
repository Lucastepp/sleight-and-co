import { useState } from 'react'
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  ChevronDown,
  CircleDot,
  Gem,
  Menu,
  MonitorCog,
  PenTool,
  Sparkles,
  Waves,
  X,
} from 'lucide-react'
import mark from './assets/sleight-mark.png'
import wordmark from './assets/sleight-wordmark.png'
import './App.css'

const menuGroups = [
  {
    title: 'Capabilities',
    items: ['Brand systems', 'Growth marketing', 'AI workflows', 'Product design'],
  },
  {
    title: 'Group Verticals',
    items: ['Hospitality', 'Beauty', 'Technology', 'Venture launches'],
  },
  {
    title: 'Company',
    items: ['Operating model', 'Studio notes', 'Partner with us'],
  },
]

const ventures = [
  {
    icon: Waves,
    label: 'Hospitality',
    name: 'Blue Lagoon',
    text: 'Resort, destination, and guest experience brands with a sharper digital front door.',
  },
  {
    icon: Gem,
    label: 'Beauty',
    name: 'Beauty House',
    text: 'A placeholder vertical for wellness, aesthetic, and lifestyle brands still to be named.',
  },
  {
    icon: MonitorCog,
    label: 'Technology',
    name: 'Sleight Systems',
    text: 'Websites, automations, and internal tools that make the commercial engine easier to run.',
  },
  {
    icon: Building2,
    label: 'Ventures',
    name: 'New Companies',
    text: 'A home for offers, products, and operating businesses built under one premium group.',
  },
]

const proofLines = [
  'Strategy before surface',
  'Brand before template',
  'Systems before noise',
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <main className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Sleight and Co. home">
          <img src={wordmark} alt="Sleight & Co." />
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          <div className="nav-item">
            <button className="nav-trigger" type="button">
              Group <ChevronDown aria-hidden="true" size={14} />
            </button>
            <div className="mega-menu" aria-label="Group menu">
              {menuGroups.map((group) => (
                <div key={group.title}>
                  <p>{group.title}</p>
                  {group.items.map((item) => (
                    <a href="#group" key={item}>
                      {item}
                    </a>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <a href="#work">Work</a>
          <a href="#model">Model</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="header-cta" href="mailto:hello@sleightandco.example">
          <span>Start a brief</span>
          <ArrowUpRight aria-hidden="true" size={17} />
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </header>

      {menuOpen && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          <a href="#group" onClick={() => setMenuOpen(false)}>
            Group
          </a>
          <a href="#work" onClick={() => setMenuOpen(false)}>
            Work
          </a>
          <a href="#model" onClick={() => setMenuOpen(false)}>
            Model
          </a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
        </nav>
      )}

      <section className="hero" id="top">
        <div className="hero-media" aria-hidden="true">
          <img src={mark} alt="" />
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
        </div>

        <div className="hero-copy">
          <p className="eyebrow">
            <CircleDot aria-hidden="true" size={14} />
            Venture group for marketing, technology, and owned brands
          </p>
          <h1>Sleight & Co. Group</h1>
          <p className="hero-lede">
            A premium operating house for brands that need a sharper market presence,
            cleaner digital systems, and a path from idea to revenue.
          </p>
          <div className="hero-actions">
            <a className="primary-action" href="mailto:hello@sleightandco.example">
              Send project details
              <ArrowRight aria-hidden="true" size={18} />
            </a>
            <a className="secondary-action" href="#group">
              View the group
              <ArrowUpRight aria-hidden="true" size={17} />
            </a>
          </div>
        </div>

        <aside className="hero-panel" aria-label="Sleight operating focus">
          <p>Operating focus</p>
          <ul>
            {proofLines.map((line) => (
              <li key={line}>
                <Sparkles aria-hidden="true" size={15} />
                {line}
              </li>
            ))}
          </ul>
        </aside>
      </section>

      <section className="group-map" id="group" aria-labelledby="group-title">
        <div className="section-kicker">Group map</div>
        <div className="section-heading">
          <h2 id="group-title">One house, distinct businesses.</h2>
          <p>
            Sleight & Co. is built as an umbrella: each vertical gets its own
            identity, audience, offer, and conversion path.
          </p>
        </div>

        <div className="venture-grid">
          {ventures.map((venture) => {
            const Icon = venture.icon
            return (
              <article className="venture-card" key={venture.name}>
                <div className="venture-topline">
                  <span>{venture.label}</span>
                  <Icon aria-hidden="true" size={20} />
                </div>
                <h3>{venture.name}</h3>
                <p>{venture.text}</p>
                <a href="#contact">
                  Discuss this vertical
                  <ArrowUpRight aria-hidden="true" size={16} />
                </a>
              </article>
            )
          })}
        </div>
      </section>

      <section className="split-section" id="work">
        <div>
          <p className="section-kicker">What the group does</p>
          <h2>From first impression to operating system.</h2>
        </div>
        <div className="service-stack">
          <article>
            <PenTool aria-hidden="true" />
            <h3>Market identity</h3>
            <p>
              Naming, positioning, visual direction, website copy, and launch pages
              that make each business feel specific.
            </p>
          </article>
          <article>
            <MonitorCog aria-hidden="true" />
            <h3>Digital infrastructure</h3>
            <p>
              Conversion sites, booking flows, lead capture, automations, dashboards,
              and practical AI tools for the team behind the brand.
            </p>
          </article>
          <article>
            <Sparkles aria-hidden="true" />
            <h3>Growth operations</h3>
            <p>
              Campaign strategy, search visibility, creative testing, content systems,
              and the weekly rhythm needed to keep offers moving.
            </p>
          </article>
        </div>
      </section>

      <section className="model" id="model" aria-labelledby="model-title">
        <div className="section-kicker">Operating model</div>
        <h2 id="model-title">Built like a studio. Run like a company.</h2>
        <div className="model-steps">
          <article>
            <span>01</span>
            <h3>Shape the offer</h3>
            <p>Clarify who it serves, what makes it worth buying, and what proof is still missing.</p>
          </article>
          <article>
            <span>02</span>
            <h3>Build the front door</h3>
            <p>Design the site, content, and lead path around one clear action.</p>
          </article>
          <article>
            <span>03</span>
            <h3>Install the system</h3>
            <p>Connect forms, workflows, reporting, and repeatable marketing operations.</p>
          </article>
        </div>
      </section>

      <section className="contact-band" id="contact">
        <img src={wordmark} alt="" aria-hidden="true" />
        <div>
          <p className="section-kicker">Partner with Sleight</p>
          <h2>Bring the first serious brief.</h2>
          <p>
            This concept uses placeholder contact details until the real email, legal
            name, and production form destination are confirmed.
          </p>
        </div>
        <a className="primary-action light" href="mailto:hello@sleightandco.example">
          Start a brief
          <ArrowRight aria-hidden="true" size={18} />
        </a>
      </section>
    </main>
  )
}

export default App
