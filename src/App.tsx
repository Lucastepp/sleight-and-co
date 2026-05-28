import { useState } from 'react'
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Building2,
  Camera,
  Check,
  ChevronDown,
  CircleDot,
  Gem,
  Globe2,
  Hotel,
  Megaphone,
  Menu,
  MonitorCog,
  Package,
  Palette,
  PenTool,
  Sparkles,
  Store,
  Utensils,
  Video,
  Waves,
  X,
} from 'lucide-react'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa6'
import mark from './assets/sleight-mark-tight-transparent.png'
import wordmark from './assets/sleight-wordmark-tight-transparent.png'
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
    name: 'Blue Lagoon Creative',
    text: 'Resort, destination, and guest experience brands with a sharper digital front door.',
  },
  {
    icon: Gem,
    label: 'Beauty',
    name: 'Beauty House',
    text: 'A beauty and lifestyle vertical for aesthetic brands, wellness offers, and future product houses.',
  },
  {
    icon: MonitorCog,
    label: 'Technology',
    name: 'Human Forge Tech',
    text: 'Websites, automations, and internal tools that make the commercial engine easier to run.',
  },
  {
    icon: Utensils,
    label: 'Restaurants',
    name: 'Purple Tomato',
    text: 'A working name for restaurant, pub, and dining concepts with bold atmosphere and repeatable demand.',
  },
  {
    icon: Building2,
    label: 'Events',
    name: 'Sleight Events',
    text: 'Launches, private events, activations, and experience-led offers built to feel memorable.',
  },
]

const proofLines = [
  'Strategy before surface',
  'Brand before template',
  'Systems before noise',
]

const footerLinks = [
  'Blue Lagoon Creative',
  'Beauty House',
  'Human Forge Tech',
  'Purple Tomato',
  'Sleight Events',
]

const socialLinks = [
  { label: 'Instagram', href: 'https://instagram.com/', icon: FaInstagram },
  { label: 'LinkedIn', href: 'https://linkedin.com/', icon: FaLinkedinIn },
  { label: 'Facebook', href: 'https://facebook.com/', icon: FaFacebookF },
]

const quizSteps = [
  {
    id: 'business',
    eyebrow: 'Question 1 of 4',
    sideTitle: 'Start with the business behind it.',
    sideText:
      'A beach club, restaurant, clinic, and resort do not need the same website or launch system.',
    title: 'What best describes the business?',
    helper: 'Choose the closest match. We will shape the recommendation around it.',
    options: [
      { label: 'Hotel, resort or stay', detail: 'Rooms, guest experience, destination, hospitality', icon: Hotel, venture: 'Blue Lagoon Creative' },
      { label: 'Beach club or venue', detail: 'Day pass, tables, events, waterfront experience', icon: Waves, venture: 'Blue Lagoon Creative' },
      { label: 'Restaurant, pub or bar', detail: 'Dining, drinks, reservations, local regulars', icon: Utensils, venture: 'Purple Tomato' },
      { label: 'Beauty or wellness brand', detail: 'Salon, spa, aesthetic clinic, product house', icon: Gem, venture: 'Beauty House' },
      { label: 'Service business', detail: 'Local team, estimates, appointments, project leads', icon: Store, venture: 'Human Forge Tech' },
      { label: 'New venture or product', detail: 'Offer still being shaped, launch needs structure', icon: Building2, venture: 'Sleight & Co. Group' },
    ],
  },
  {
    id: 'need',
    eyebrow: 'Question 2 of 4',
    sideTitle: 'Name the real job.',
    sideText:
      'Some brands need a sharper site. Others need identity, content, ads, automation, and a full launch rhythm.',
    title: 'What do you need most right now?',
    helper: 'Pick the one that would create the most movement in the next 90 days.',
    options: [
      { label: 'Website and conversion path', detail: 'Homepage, service pages, forms, booking or lead flow', icon: Globe2, tier: 'Essential Web Presence' },
      { label: 'Brand identity and positioning', detail: 'Naming, voice, visual system, offer clarity', icon: Palette, tier: 'Signature Brand System' },
      { label: 'Marketing and demand', detail: 'Campaigns, SEO, content, paid traffic, lead generation', icon: Megaphone, tier: 'Growth Engine' },
      { label: 'Photo, video and story', detail: 'Shoot direction, founder video, venue content, drone footage', icon: Camera, tier: 'Content-Led Launch' },
      { label: 'The full package', detail: 'Brand, site, content, campaigns, systems and launch plan', icon: Package, tier: 'Complete Venture Build' },
    ],
  },
  {
    id: 'content',
    eyebrow: 'Question 3 of 4',
    sideTitle: 'Assets change the whole build.',
    sideText:
      'Real photos, founder footage, venue clips, and product detail can move the site from polished to believable.',
    title: 'What content do you already have?',
    helper: 'This helps decide whether we build around existing assets or plan production.',
    options: [
      { label: 'Almost nothing yet', detail: 'We need to create the visual world from scratch', icon: Sparkles, contentLevel: 'production' },
      { label: 'Logo only', detail: 'Brand exists, but site content and media need work', icon: Palette, contentLevel: 'brand' },
      { label: 'Some photos and videos', detail: 'Useful assets exist, but they need direction and editing', icon: Camera, contentLevel: 'curation' },
      { label: 'Need premium shoot', detail: 'Drone, team interviews, venue/product video, campaign cuts', icon: Video, contentLevel: 'production' },
    ],
  },
  {
    id: 'pace',
    eyebrow: 'Question 4 of 4',
    sideTitle: 'Choose the level of ambition.',
    sideText:
      'A serious site can launch lean. A serious brand system needs a deeper build and a clearer operating rhythm.',
    title: 'How serious should the first build be?',
    helper: 'No fake budget numbers here. This is about scope and appetite.',
    options: [
      { label: 'Lean but premium', detail: 'A sharp first version with the essentials done properly', icon: Check, ambition: 'lean' },
      { label: 'Growth ready', detail: 'Website, content structure, lead flow, and campaign foundation', icon: Megaphone, ambition: 'growth' },
      { label: 'Flagship launch', detail: 'Identity, website, film/photo direction, marketing system', icon: Sparkles, ambition: 'flagship' },
      { label: 'Build the company around it', detail: 'Full venture architecture, offer, systems, content and launch', icon: Building2, ambition: 'venture' },
    ],
  },
]

type QuizOption = (typeof quizSteps)[number]['options'][number]

function hasTextField<T extends string>(
  option: QuizOption | undefined,
  field: T,
): option is QuizOption & Record<T, string> {
  return Boolean(option && field in option && typeof option[field as keyof QuizOption] === 'string')
}

function getQuizRecommendation(selections: Record<string, string>) {
  const businessOption = quizSteps[0].options.find((option) => option.label === selections.business)
  const needOption = quizSteps[1].options.find((option) => option.label === selections.need)
  const contentOption = quizSteps[2].options.find((option) => option.label === selections.content)
  const paceOption = quizSteps[3].options.find((option) => option.label === selections.pace)

  const venture = hasTextField(businessOption, 'venture')
    ? businessOption.venture
    : 'Sleight & Co. Group'
  let tier = hasTextField(needOption, 'tier') ? needOption.tier : 'Strategic Build'

  if (hasTextField(paceOption, 'ambition') && ['flagship', 'venture'].includes(paceOption.ambition)) {
    tier = paceOption.ambition === 'venture' ? 'Complete Venture Build' : 'Flagship Launch System'
  }

  const productionNeeded =
    hasTextField(contentOption, 'contentLevel') && contentOption.contentLevel === 'production'

  return {
    venture,
    tier,
    productionNeeded,
    summary: productionNeeded
      ? 'Recommended with brand strategy, conversion website, premium media production, and a launch system.'
      : 'Recommended with offer clarity, conversion website, content direction, and a marketing foundation.',
  }
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [quizStep, setQuizStep] = useState(0)
  const [quizSelections, setQuizSelections] = useState<Record<string, string>>({})
  const isQuizComplete = quizStep >= quizSteps.length
  const activeQuizStep = quizSteps[Math.min(quizStep, quizSteps.length - 1)]
  const recommendation = getQuizRecommendation(quizSelections)

  const handleQuizSelect = (stepId: string, label: string) => {
    setQuizSelections((current) => ({ ...current, [stepId]: label }))
    setQuizStep((current) => Math.min(current + 1, quizSteps.length))
  }

  const resetQuiz = () => {
    setQuizSelections({})
    setQuizStep(0)
  }

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
          <a href="#diagnostic">Diagnostic</a>
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
          <a href="#diagnostic" onClick={() => setMenuOpen(false)}>
            Diagnostic
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
          <div className="hero-glass" />
          <div className="hero-ribbon" />
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
        </div>

        <div className="hero-inner">
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
            <span>Group architecture</span>
            <strong>Brands, systems, and demand engines under one roof.</strong>
            <ul>
              {proofLines.map((line) => (
                <li key={line}>
                  <Sparkles aria-hidden="true" size={15} />
                  {line}
                </li>
              ))}
            </ul>
          </aside>
        </div>
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

      <section className="diagnostic" id="diagnostic" aria-labelledby="diagnostic-title">
        <div className="diagnostic-shell">
          <aside className="diagnostic-side">
            <img src={wordmark} alt="" aria-hidden="true" />
            <div className="diagnostic-step-number">
              {isQuizComplete ? 'Result' : String(quizStep + 1).padStart(2, '0')}
            </div>
            <p>{isQuizComplete ? 'Recommended path' : activeQuizStep.eyebrow}</p>
            <h2 id="diagnostic-title">
              {isQuizComplete ? 'A sharper starting point.' : activeQuizStep.sideTitle}
            </h2>
            <span>
              {isQuizComplete
                ? 'Use this as the brief starter. The final scope still depends on real business facts, budget, media, and timeline.'
                : activeQuizStep.sideText}
            </span>
          </aside>

          <div className="diagnostic-main">
            <div className="diagnostic-topbar">
              <button
                type="button"
                className="diagnostic-back"
                onClick={() => setQuizStep((current) => Math.max(0, current - 1))}
                disabled={quizStep === 0}
                aria-label="Go to previous question"
              >
                <ArrowLeft aria-hidden="true" size={18} />
              </button>
              <div className="progress-track" aria-hidden="true">
                <span style={{ width: `${isQuizComplete ? 100 : ((quizStep + 1) / quizSteps.length) * 100}%` }} />
              </div>
              <strong>{isQuizComplete ? '100%' : `${Math.round(((quizStep + 1) / quizSteps.length) * 100)}%`}</strong>
            </div>

            {!isQuizComplete ? (
              <div className="question-panel">
                <p className="section-kicker">Find your build</p>
                <h2>{activeQuizStep.title}</h2>
                <p>{activeQuizStep.helper}</p>
                <div className="answer-list">
                  {activeQuizStep.options.map((option) => {
                    const Icon = option.icon
                    const selected = quizSelections[activeQuizStep.id] === option.label
                    return (
                      <button
                        className={selected ? 'answer-option selected' : 'answer-option'}
                        key={option.label}
                        type="button"
                        onClick={() => handleQuizSelect(activeQuizStep.id, option.label)}
                      >
                        <Icon aria-hidden="true" size={22} />
                        <span>
                          <strong>{option.label}</strong>
                          <small>{option.detail}</small>
                        </span>
                        <ArrowRight aria-hidden="true" size={18} />
                      </button>
                    )
                  })}
                </div>
              </div>
            ) : (
              <div className="result-panel">
                <p className="section-kicker">Recommended starting point</p>
                <h2>{recommendation.tier}</h2>
                <p>{recommendation.summary}</p>
                <div className="result-card">
                  <span>Best-fit group vertical</span>
                  <strong>{recommendation.venture}</strong>
                </div>
                <div className="result-card">
                  <span>Media production</span>
                  <strong>{recommendation.productionNeeded ? 'Plan photo, video, and drone' : 'Use assets plus direction'}</strong>
                </div>
                <div className="result-actions">
                  <a className="primary-action" href="mailto:hello@sleightandco.example">
                    Send this brief
                    <ArrowRight aria-hidden="true" size={18} />
                  </a>
                  <button type="button" className="secondary-action reset-action" onClick={resetQuiz}>
                    Start over
                  </button>
                </div>
              </div>
            )}
          </div>
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

      <footer className="site-footer">
        <div className="footer-brand">
          <div>
            <p>Sleight & Co.</p>
            <span>Group</span>
          </div>
        </div>
        <nav aria-label="Sleight group companies">
          {footerLinks.map((link) => (
            <a href="#group" key={link}>
              {link}
            </a>
          ))}
        </nav>
        <div className="footer-note">
          <img src={mark} alt="" aria-hidden="true" />
          <div>
            <p>Marketing, technology, and venture work shaped around the business behind it.</p>
            <span>Concept site. Production details pending confirmation.</span>
            <div className="social-links" aria-label="Social links">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a href={social.href} key={social.label} aria-label={social.label}>
                    <Icon aria-hidden="true" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}

export default App
