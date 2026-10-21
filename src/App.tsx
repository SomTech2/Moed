import { useEffect, useRef, useState } from 'react'
import { site } from './data/site'

const translations = {
  en: {
    pageTitle: 'Moed — Technical Solutions Architect',
    pageDescription:
      'Moed is a Technical Solutions Architect in Hargeisa, Somaliland, designing software systems, enterprise applications, and applied AI solutions.',
    skip: 'Skip to content',
    home: 'Moed, home',
    openMenu: 'Open navigation menu',
    closeMenu: 'Close navigation menu',
    primaryNavigation: 'Primary navigation',
    languageSwitch: 'Switch language to Somali',
    languageName: 'Soomaali',
    navWork: 'Work',
    navAbout: 'About',
    navExpertise: 'Expertise',
    navContact: 'Contact',
    eyebrow: 'TECHNICAL SOLUTIONS ARCHITECT',
    heroFirst: "Hi, I'm Mohamed.",
    heroSecond: 'Building thoughtful digital products.',
    heroIntro:
      'I design intelligent software systems, enterprise applications, and AI-powered solutions where engineering, networks, security, and automation meet.',
    exploreWork: 'View Projects',
    contactMe: 'Contact Me',
    locationMeta: 'HARGEISA · SOMALILAND · GMT+3',
    roleLine: 'Software Engineer · AI Engineer · Network Engineer · Mobile Developer',
    heroTagline: 'Full-stack · AI · Networks · Security',
    imageAlt: 'Illustrative image selected for Moed’s portfolio',
    imageTop: 'MOED',
    imageLocation: 'HARGEISA, SOMALILAND',
    imageRoleOne: 'TECHNICAL SOLUTIONS ARCHITECT',
    imageRoleTwo: 'SOFTWARE · AI · NETWORKS',
    scroll: '↓  SCROLL TO EXPLORE',
    practicalFocus: 'A PRACTICAL FOCUS',
    focusStatement: 'Thoughtful engineering for the web, connected systems, and',
    appliedAi: ' applied AI.',
    focusAria: 'Professional focus',
    aboutLabel: 'A LITTLE ABOUT ME',
    aboutHeading: 'Engineering with clarity and purpose.',
    aboutFirst:
      `I’m ${site.fullName}, a Technical Solutions Architect based in Hargeisa, Somaliland. I work across software applications, connected systems, and practical AI solutions.`,
    aboutSecond:
      'I turn practical needs into software systems, connected applications, and useful AI features.',
    skillsLabel: 'SKILLS',
    skillFrontendLabel: 'FRONTEND & MOBILE',
    skillFrontend: ['Web interfaces', 'Responsive design', 'Mobile experiences'],
    skillBackendLabel: 'BACKEND & DATA',
    skillBackend: ['Application logic', 'API integration', 'Database systems'],
    skillSystemsLabel: 'NETWORKS · SECURITY · AI',
    skillSystems: ['Network systems', 'Security practices', 'Applied AI'],
    missionLabel: 'MISSION',
    missionText: 'Build useful software for practical needs.',
    visionLabel: 'VISION',
    visionText: 'Make connected systems easier to use.',
    approachValueLabel: 'APPROACH',
    approachValueText: 'Understand first; build in clear steps.',
    standardLabel: 'STANDARD',
    standardText: 'Keep the experience clear and dependable.',
    servicesLabel: 'SERVICES',
    servicesHeading: 'Practical help, from idea to release.',
    servicesIntro:
      'Focused development support for useful web products and connected digital systems.',
    serviceOneTitle: 'Websites & web applications',
    serviceOne:
      'Responsive, accessible interfaces shaped around real users and their needs.',
    serviceTwoTitle: 'Backend & API integration',
    serviceTwo:
      'Application logic and service integrations that connect product experiences to the systems behind them.',
    serviceThreeTitle: 'Database-driven products',
    serviceThree:
      'Data models and workflows designed to support the way an application is used.',
    serviceFourTitle: 'Applied AI features',
    serviceFour:
      'Practical AI integrations designed to support a clear user need.',
    projectStagesLabel: 'PROJECT STAGES',
    projectStagesHeading: 'From a clear brief to a considered release.',
    projectStagesIntro:
      'A practical sequence for taking a software project from its first questions through delivery.',
    projectStagesNote:
      'No individual project case studies are published yet because completed examples have not been verified.',
    noProjects:
      'Project case studies will be added when completed work and its details are ready to verify.',
    education: 'EDUCATION',
    educationTitle: 'BSc of Information and Computer Technology',
    university: 'Beder International University',
    expertiseLabel: 'CAPABILITIES',
    expertiseHeading: 'Useful by design.\nBuilt to work.',
    expertiseIntro:
      'A focus on building practical software, from the interface people use to the systems that support it.',
    capabilityOneTitle: 'Full-Stack Applications',
    capabilityOne:
      'Responsive web experiences connected to the data, APIs, and backend logic that support them.',
    capabilityTwoTitle: 'Database-Driven Systems',
    capabilityTwo:
      'Applications organized around real workflows, clear information, and useful data.',
    capabilityThreeTitle: 'API Integration',
    capabilityThree:
      'Connecting services to create straightforward, usable product experiences.',
    capabilityFourTitle: 'Applied AI',
    capabilityFour:
      'Practical AI systems that help people work with information and solve specific problems.',
    approachLabel: 'HOW I WORK',
    approachHeading: 'Clear thinking.\nCareful building.',
    approachIntro:
      'Good software comes from understanding the need, making deliberate choices, and staying attentive through delivery.',
    stepOneTitle: 'Understand',
    stepOne: 'Clarify the goal, intended users, requirements, and constraints.',
    stepTwoTitle: 'Design',
    stepTwo: 'Plan the user flows, interface, data, and technical structure.',
    stepThreeTitle: 'Build',
    stepThree: 'Implement the agreed features in focused, reviewable increments.',
    stepFourTitle: 'Refine',
    stepFour: 'Test the product, address issues, and prepare it for release.',
    contactLabel: 'HAVE A PROJECT IN MIND?',
    contactHeading: 'Let’s build something useful.',
    contactIntro:
      'Have a product idea, a business problem, or a project that needs thoughtful engineering? Get in touch.',
    emailLabel: 'EMAIL',
    whatsappLabel: 'WHATSAPP',
    whatsappLink: 'Message me on WhatsApp',
    githubLabel: 'GITHUB',
    footerRole: 'Technical Solutions Architect',
    copyright: 'MOED',
    whatsappAccessible: 'Chat with Moed on WhatsApp',
    whatsappBubble: 'Hi 👋 — let’s chat on WhatsApp',
    whatsappGreeting: site.whatsappGreeting,
  },
  so: {
    pageTitle: 'Moed — Technical Solutions Architect',
    pageDescription:
      'Moed waa Technical Solutions Architect jooga Hargeysa, Somaliland, kana shaqeeya naqshadaynta nidaamyada software-ka iyo xalalka AI.',
    skip: 'U gudub nuxurka',
    home: 'Moed, bogga hore',
    openMenu: 'Fur liiska hagidda',
    closeMenu: 'Xidh liiska hagidda',
    primaryNavigation: 'Liiska hagidda',
    languageSwitch: 'U beddel luqadda Ingiriisi',
    languageName: 'English',
    navWork: 'Shaqooyin',
    navAbout: 'Aniga',
    navExpertise: 'Aqoonta',
    navContact: 'Xiriir',
    eyebrow: 'NAQSHADEEYAH NIDAAMYADA FARSAMADA',
    heroFirst: 'Salaan, waxaan ahay Maxamed.',
    heroSecond: 'Waxaan dhisaa xalal dijitaal ah.',
    heroIntro:
      'Waxaan naqshadeeyaa nidaamyo software oo caqli leh, barnaamijyo ganacsi, iyo xalal AI ah oo isku xidha farsamada, shabakadaha, amniga, iyo otomaatigga.',
    exploreWork: 'Eeg Mashaariicda',
    contactMe: 'Ila soo xiriir',
    locationMeta: 'HARGEYSA · SOMALILAND · GMT+3',
    roleLine: 'Injineer Software · Injineer AI · Injineer Shabakad · Horumariye Mobile',
    heroTagline: 'Full-stack · AI · Shabakado · Amni',
    imageAlt: 'Sawir muuqaal ah oo loo doortay naqshadda bogga Moed',
    imageTop: 'MOED',
    imageLocation: 'HARGEYSA, SOMALILAND',
    imageRoleOne: 'NAQSHADEEYAH XALALKA FARSAMADA',
    imageRoleTwo: 'SOFTWARE · AI · SHABAKADAHA',
    scroll: '↓  HOOS U DAAWO',
    practicalFocus: 'DIIRADDA SHAQADA',
    focusStatement: 'Fikir iyo farsamo wanaagsan oo loogu talagalay webka, nidaamyada isku xidhan, iyo',
    appliedAi: ' garaadka macmalka ah.',
    focusAria: 'Diiradda shaqada',
    aboutLabel: 'WAX KOOBAN OO IGA KU SAABSAN',
    aboutHeading: 'Injineernimo cad oo ujeeddo leh.',
    aboutFirst:
      `Waxaan ahay ${site.fullName}, Technical Solutions Architect jooga Hargeysa, Somaliland. Waxaan ka shaqeeyaa barnaamijyada software-ka, nidaamyada isku xidhan, iyo xalalka AI ee wax ku oolka ah.`,
    aboutSecond:
      'Waxaan baahiyaha wax ku oolka ah u beddelaa nidaamyo software, barnaamijyo isku xidhan, iyo adeegyo AI oo waxtar leh.',
    skillsLabel: 'XIRFADAHA',
    skillFrontendLabel: 'FRONTEND IYO MOBILE',
    skillFrontend: ['Muuqaallada webka', 'Naqshad la jaanqaadda shaashadaha', 'Adeegyada mobile-ka'],
    skillBackendLabel: 'BACKEND IYO XOGTA',
    skillBackend: ['Habraacyada barnaamijka', 'Isku xidhka API-yada', 'Nidaamyada xogta'],
    skillSystemsLabel: 'SHABAKADAHA · AMNIGA · AI',
    skillSystems: ['Nidaamyada shabakadda', 'Hababka amniga', 'AI wax ku ool ah'],
    missionLabel: 'HIMILADA',
    missionText: 'Dhis software waxtar u leh baahiyaha dhabta ah.',
    visionLabel: 'ARAGTIDA',
    visionText: 'Nidaamyada isku xidhan ka dhig kuwo fudud.',
    approachValueLabel: 'HABKA',
    approachValueText: 'Marka hore faham; tallaabo cad ku dhis.',
    standardLabel: 'HEERKA',
    standardText: 'Ka dhig adeegga mid cad oo la isku hallayn karo.',
    servicesLabel: 'ADEEGYADA',
    servicesHeading: 'Taageero wax ku ool ah, fikradda ilaa hirgelinta.',
    servicesIntro:
      'Horumarin diiradda saarta websaydhyada waxtarka leh iyo nidaamyada dijitaalka ah ee isku xidhan.',
    serviceOneTitle: 'Websaydhyada iyo barnaamijyada webka',
    serviceOne:
      'Muuqaallo la jaanqaada shaashadaha kala duwan, la heli karo, oo ku salaysan baahida isticmaalayaasha.',
    serviceTwoTitle: 'Server-ka iyo isku xidhka API-yada',
    serviceTwo:
      'Habraacyada barnaamijka iyo isku xidhka adeegyada si loo xidho muuqaalka iyo nidaamyada ka dambeeya.',
    serviceThreeTitle: 'Badeecooyin xog ku dhisan',
    serviceThree:
      'Qaab xogeedyo iyo habraacyo taageera sida barnaamijka loo isticmaalo.',
    serviceFourTitle: 'Adeegsiga garaadka macmalka ah',
    serviceFour:
      'Isku xidhka AI ee wax ku oolka ah, loona sameeyo baahi isticmaale oo cad.',
    projectStagesLabel: 'MARXALAHA MASHRUUCA',
    projectStagesHeading: 'Qorshe cad ilaa hirgelin laga fiirsaday.',
    projectStagesIntro:
      'Tallaabooyin wax ku ool ah oo mashruuca software-ka ka bilaaba su’aalaha hore kuna gaadhsiiya hirgelin.',
    projectStagesNote:
      'Weli lama soo bandhigin tusaalooyin mashruuc oo gaar ah, sababtoo ah lama xaqiijin mashaariic dhammaaday.',
    noProjects:
      'Tusaalooyinka mashaariicda waxa lagu dari doonaa marka dhammaadka shaqada iyo faahfaahinteeda la xaqiijiyo.',
    education: 'WAXBARASHO',
    educationTitle: 'BSc of Information and Computer Technology',
    university: 'Jaamacadda Caalamiga ah ee Beder',
    expertiseLabel: 'AWOODAHA SHAQO',
    expertiseHeading: 'Ujeeddo leh ayaa loo naqshadeeyaa.\nSi hufan ayuu u shaqeeyaa.',
    expertiseIntro:
      'Waxaan xoogga saaraa dhisidda software waxtar leh, laga bilaabo muuqaalka uu qofku isticmaalo ilaa nidaamyada ka dambeeya.',
    capabilityOneTitle: 'Barnaamijyada Full-Stack',
    capabilityOne:
      'Barnaamijyo web oo la jaanqaada shaashadaha, kuna xidhan xogta, API-yada iyo habraacyada server-ka.',
    capabilityTwoTitle: 'Nidaamyada Xogta',
    capabilityTwo:
      'Barnaamijyo ku salaysan habraacyo dhab ah, xog cad iyo baahida isticmaalaha.',
    capabilityThreeTitle: 'Isku Xidhka API-yada',
    capabilityThree:
      'Isku xidhidda adeegyada si ay ugu shaqeeyaan hal waayo-aragnimo oo fudud.',
    capabilityFourTitle: 'Adeegsiga garaadka macmalka ah',
    capabilityFour:
      'Baadhista xalal AI oo dadka ka caawiya maaraynta xogta iyo xallinta hawlo gaar ah.',
    approachLabel: 'HABKA SHAQADAYDA',
    approachHeading: 'Fikir cad.\nDhisid taxaddar leh.',
    approachIntro:
      'Software wanaagsan wuxuu ka bilaabmaa fahamka baahida, go’aanno laga fiirsaday, iyo daryeel joogto ah ilaa la dhammeeyo.',
    stepOneTitle: 'Faham',
    stepOne: 'Caddee ujeeddada, isticmaalayaasha, shuruudaha iyo xaddidaadaha.',
    stepTwoTitle: 'Naqshadee',
    stepTwo: 'Qorshee habka isticmaalka, muuqaalka, xogta iyo qaab-dhismeedka farsamo.',
    stepThreeTitle: 'Dhis',
    stepThree: 'Hirgelinta u qaybi tallaabooyin kooban oo si fudud dib loogu eegi karo.',
    stepFourTitle: 'Hagaaji',
    stepFour: 'Tijaabi badeecadda, sax khaladaadka, una diyaari baahinta.',
    contactLabel: 'MA HAYSAA MASHRUUC?',
    contactHeading: 'Aan wada dhisno wax waxtar leh.',
    contactIntro:
      'Ma haysaa fikrad badeecad, dhibaato ganacsi, ama mashruuc u baahan farsamo laga fiirsaday? Ila soo xiriir.',
    emailLabel: 'IIMAYL',
    whatsappLabel: 'WHATSAPP',
    whatsappLink: 'Fariin iigu soo dir WhatsApp',
    githubLabel: 'GITHUB',
    footerRole: 'Naqshadeeyaha Xalalka Farsamada',
    copyright: 'MOED',
    whatsappAccessible: 'WhatsApp kala xiriir Moed',
    whatsappBubble: 'Salaan 👋 — aan WhatsApp ku wada sheekaysanno',
    whatsappGreeting: 'Salaan 👋 — waxaan kaaga soo qorayaa boggaaga portfolio-ga.',
  },
} as const

const processKeys = [
  ['01', 'stepOneTitle', 'stepOne'],
  ['02', 'stepTwoTitle', 'stepTwo'],
  ['03', 'stepThreeTitle', 'stepThree'],
  ['04', 'stepFourTitle', 'stepFour'],
] as const

const capabilityKeys = [
  ['capabilityOneTitle', 'capabilityOne'],
  ['capabilityTwoTitle', 'capabilityTwo'],
  ['capabilityThreeTitle', 'capabilityThree'],
  ['capabilityFourTitle', 'capabilityFour'],
] as const

const serviceKeys = [
  ['01', 'serviceOneTitle', 'serviceOne'],
  ['02', 'serviceTwoTitle', 'serviceTwo'],
  ['03', 'serviceThreeTitle', 'serviceThree'],
  ['04', 'serviceFourTitle', 'serviceFour'],
] as const

function ArrowIcon({ diagonal = false }: { diagonal?: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className="arrow-icon"
      viewBox="0 0 20 20"
      fill="none"
    >
      {diagonal ? (
        <path d="M5 15 15 5M6 5h9v9" />
      ) : (
        <path d="M3.5 10h12m-5-5 5 5-5 5" />
      )}
    </svg>
  )
}

function WhatsAppIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
      <path
        d="M19.4 4.6A10.4 10.4 0 0 0 3.1 17.2L2 22l4.9-1.1A10.4 10.4 0 0 0 19.4 4.6Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M8.3 7.7c-.3-.6-.6-.6-.9-.6h-.7c-.3 0-.7.1-.9.5-.3.4-1.2 1.2-1.2 2.9s1.2 3.3 1.4 3.5c.2.2 2.4 3.8 5.9 5.1 2.9 1.1 3.5.9 4.2.8.6-.1 2-1 2.3-1.8.3-.9.3-1.6.2-1.8-.1-.2-.3-.3-.7-.5l-2.2-1.1c-.3-.1-.6-.2-.8.2-.2.4-.9 1.1-1.1 1.4-.2.2-.4.3-.8.1-.4-.2-1.6-.6-3-1.9-1.1-1-1.9-2.2-2.1-2.6-.2-.4 0-.6.2-.8.2-.2.4-.5.6-.7.2-.2.2-.4.4-.6.1-.2.1-.4 0-.6l-.9-2Z"
        fill="currentColor"
      />
    </svg>
  )
}

function App() {
  const [language, setLanguage] = useState<keyof typeof translations>('en')
  const [menuOpen, setMenuOpen] = useState(false)
  const [headerStuck, setHeaderStuck] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [whatsappHintVisible, setWhatsappHintVisible] = useState(true)
  const copy = translations[language]
  const whatsappUrl = site.whatsappNumber
    ? `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(copy.whatsappGreeting)}`
    : null
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const navigationRef = useRef<HTMLElement>(null)

  useEffect(() => {
    document.documentElement.lang = language
    document.title = copy.pageTitle
    document.querySelector<HTMLMetaElement>('meta[name="description"]')
      ?.setAttribute('content', copy.pageDescription)
    document.querySelector<HTMLMetaElement>('meta[property="og:title"]')
      ?.setAttribute('content', copy.pageTitle)
    document.querySelector<HTMLMetaElement>('meta[property="og:description"]')
      ?.setAttribute('content', copy.pageDescription)
    document.querySelector<HTMLMetaElement>('meta[name="twitter:title"]')
      ?.setAttribute('content', copy.pageTitle)
    document.querySelector<HTMLMetaElement>('meta[name="twitter:description"]')
      ?.setAttribute('content', copy.pageDescription)
  }, [copy.pageDescription, copy.pageTitle, language])

  useEffect(() => {
    function updateHeader() {
      const hero = document.getElementById('top')
      setHeaderStuck(hero !== null && hero.getBoundingClientRect().bottom <= 0)
    }

    window.addEventListener('scroll', updateHeader, { passive: true })
    window.addEventListener('resize', updateHeader)
    updateHeader()
    return () => {
      window.removeEventListener('scroll', updateHeader)
      window.removeEventListener('resize', updateHeader)
    }
  }, [])

  useEffect(() => {
    const sections = ['services', 'about', 'expertise', 'approach', 'contact']
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null)

    function updateActiveSection() {
      const passedSections = sections.filter((section) => section.getBoundingClientRect().top <= 140)
      const currentSection = passedSections[passedSections.length - 1]
      setActiveSection(currentSection?.id ?? '')
    }

    window.addEventListener('scroll', updateActiveSection, { passive: true })
    window.addEventListener('resize', updateActiveSection)
    updateActiveSection()
    return () => {
      window.removeEventListener('scroll', updateActiveSection)
      window.removeEventListener('resize', updateActiveSection)
    }
  }, [])

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setWhatsappHintVisible(false)
      return
    }

    const timeout = window.setTimeout(() => setWhatsappHintVisible(false), 4000)
    return () => window.clearTimeout(timeout)
  }, [])

  useEffect(() => {
    if (!menuOpen) return

    const navigation = navigationRef.current
    const focusableElements = navigation?.querySelectorAll<HTMLElement>('a[href], button:not(:disabled)')
    const firstElement = focusableElements?.[0]
    const lastElement = focusableElements?.[focusableElements.length - 1]
    firstElement?.focus()

    function handleMenuKeydown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        menuButtonRef.current?.focus()
      }

      if (event.key !== 'Tab' || !firstElement || !lastElement) return
      if (document.activeElement === menuButtonRef.current) {
        event.preventDefault()
        const target = event.shiftKey ? lastElement : firstElement
        target.focus()
        return
      }
      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault()
        lastElement.focus()
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault()
        firstElement.focus()
      }
    }

    document.addEventListener('keydown', handleMenuKeydown)
    return () => {
      document.removeEventListener('keydown', handleMenuKeydown)
    }
  }, [menuOpen])

  function toggleMenu() {
    const opening = !menuOpen
    setMenuOpen(opening)

    if (!opening) menuButtonRef.current?.focus()
  }

  function closeMenu() {
    setMenuOpen(false)
    menuButtonRef.current?.focus()
  }

  return (
    <>
      <a className="skip-link" href="#main">
        {copy.skip}
      </a>

      <header className={`site-header${headerStuck ? ' is-stuck' : ''}`}>
        <div className="header-inner">
          <a className="brand" href="#top" aria-label={copy.home}>
            <img className="brand-avatar" src={site.portfolioIllustration} alt="" width="44" height="44" />
            <span className="brand-copy">
              <span className="brand-name">{site.displayName}</span>
              <span className="brand-caption">{site.title}</span>
            </span>
          </a>

          <button
            className="menu-toggle"
            type="button"
            ref={menuButtonRef}
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            aria-label={menuOpen ? copy.closeMenu : copy.openMenu}
            onClick={toggleMenu}
          >
            <span />
            <span />
          </button>

          <nav
            className={`primary-navigation${menuOpen ? ' is-open' : ''}`}
            id="primary-navigation"
            ref={navigationRef}
            aria-label={copy.primaryNavigation}
          >
            <a href="#approach" onClick={closeMenu} aria-current={activeSection === 'approach' ? 'location' : undefined}>
              {copy.navWork}
            </a>
            <a href="#expertise" onClick={closeMenu} aria-current={activeSection === 'expertise' ? 'location' : undefined}>
              {copy.navExpertise}
            </a>
            <a href="#about" onClick={closeMenu} aria-current={activeSection === 'about' ? 'location' : undefined}>
              {copy.navAbout}
            </a>
            <a href="#services" onClick={closeMenu} aria-current={activeSection === 'services' ? 'location' : undefined}>
              {copy.servicesLabel}
            </a>
            <a href="#contact" onClick={closeMenu} aria-current={activeSection === 'contact' ? 'location' : undefined}>
              {copy.navContact}
            </a>
            <button
              className="language-toggle"
              type="button"
              onClick={() => setLanguage(language === 'en' ? 'so' : 'en')}
              aria-label={copy.languageSwitch}
            >
              {copy.languageName}
            </button>
          </nav>
        </div>
      </header>
      <div className="header-spacer" aria-hidden="true" />

      <main id="main">
        <section className="hero section-shell" id="top" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="eyebrow-dot" />
              {copy.eyebrow}
            </p>
            <h1 id="hero-title">
              <span className="hero-title-line">{copy.heroFirst}</span>
              <span className="hero-title-line hero-title-accent">{copy.heroSecond}</span>
            </h1>
            <p className="hero-intro">
              {copy.heroIntro}
            </p>
            <p className="hero-role-line">{copy.roleLine}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#approach">
                {copy.exploreWork} <ArrowIcon />
              </a>
              <a className="button button-secondary" href="#contact">
                {copy.contactMe} <ArrowIcon />
              </a>
            </div>
            <p className="hero-meta mono">{copy.heroTagline}</p>
          </div>

          <div className="hero-art">
            <div className="hero-art-caption">
              <span>{copy.imageTop}</span>
              <span>{copy.imageLocation}</span>
            </div>
            <img
              className="hero-portrait"
              src={site.portfolioIllustration}
              alt={copy.imageAlt}
              width="1024"
              height="1536"
              loading="eager"
              decoding="async"
            />
            <div className="hero-art-footer">
              <span>{copy.imageRoleOne}</span>
              <span>{copy.imageRoleTwo}</span>
            </div>
          </div>

          <a className="scroll-cue" href="#expertise">
            <span className="scroll-line" />
            {copy.scroll}
          </a>
        </section>

        <section className="intro-band" aria-label={copy.focusAria}>
          <div className="section-shell intro-band-inner">
            <p className="eyebrow">{copy.practicalFocus}</p>
            <p>
              {copy.focusStatement}
              <span>{copy.appliedAi}</span>
            </p>
          </div>
        </section>

        <section className="services section-shell section-spacing" id="services" aria-labelledby="services-title">
          <div className="services-heading">
            <p className="eyebrow">{copy.servicesLabel} <span>/ 02</span></p>
            <h2 id="services-title">{copy.servicesHeading}</h2>
            <p>{copy.servicesIntro}</p>
          </div>
          <div className="service-list">
            {serviceKeys.map(([number, titleKey, descriptionKey]) => (
              <article className="service-row" key={number}>
                <span className="mono service-number">{number}</span>
                <h3>{copy[titleKey]}</h3>
                <p>{copy[descriptionKey]}</p>
              </article>
            ))}
          </div>
        </section>

        {/* TODO: add verified projects */}
        <section className="about section-shell section-spacing" id="about" aria-labelledby="about-title">
          <div className="about-label">
            <p className="eyebrow">{copy.aboutLabel} <span>/ 01</span></p>
            <span className="about-initials" aria-hidden="true">MAJ</span>
          </div>
          <div className="about-copy">
            <h2 id="about-title">{copy.aboutHeading}</h2>
            <p className="about-lede">{copy.aboutFirst}</p>
            <p>{copy.aboutSecond}</p>
            <div className="about-details" id="skills">
              <section className="about-subsection" aria-labelledby="skills-title">
                <h3 className="mono detail-label" id="skills-title">{copy.skillsLabel}</h3>
                <div className="skills-grid">
                  <div className="skill-group">
                    <h4 className="mono detail-label">{copy.skillFrontendLabel}</h4>
                    <ul className="skill-tags">
                      {copy.skillFrontend.map((skill) => <li key={skill}>{skill}</li>)}
                    </ul>
                  </div>
                  <div className="skill-group">
                    <h4 className="mono detail-label">{copy.skillBackendLabel}</h4>
                    <ul className="skill-tags">
                      {copy.skillBackend.map((skill) => <li key={skill}>{skill}</li>)}
                    </ul>
                  </div>
                  <div className="skill-group">
                    <h4 className="mono detail-label">{copy.skillSystemsLabel}</h4>
                    <ul className="skill-tags">
                      {copy.skillSystems.map((skill) => <li key={skill}>{skill}</li>)}
                    </ul>
                  </div>
                </div>
              </section>
              <section className="about-subsection" id="education" aria-labelledby="education-title">
                <span className="mono detail-label">{copy.education}</span>
                <p className="education-copy" id="education-title">{copy.educationTitle}<br />{copy.university}</p>
              </section>
              <div className="values-grid">
                <div><span className="mono detail-label">{copy.missionLabel}</span><p>{copy.missionText}</p></div>
                <div><span className="mono detail-label">{copy.visionLabel}</span><p>{copy.visionText}</p></div>
                <div><span className="mono detail-label">{copy.approachValueLabel}</span><p>{copy.approachValueText}</p></div>
                <div><span className="mono detail-label">{copy.standardLabel}</span><p>{copy.standardText}</p></div>
              </div>
            </div>
          </div>
        </section>

        <section className="expertise section-shell section-spacing" id="expertise" aria-labelledby="expertise-title">
          <div className="section-heading">
            <p className="eyebrow">{copy.expertiseLabel} <span>/ 03</span></p>
            <h2 id="expertise-title">
              {copy.expertiseHeading.split('\n').map((line, index) => (
                <span key={line}>{index > 0 && <br />}{line}</span>
              ))}
            </h2>
            <p className="section-lede">{copy.expertiseIntro}</p>
          </div>
          <div className="capability-list">
            {capabilityKeys.map(([titleKey, descriptionKey]) => (
            <article className="capability-row" key={titleKey}>
              <h3>{copy[titleKey]}</h3>
              <p>{copy[descriptionKey]}</p>
            </article>
            ))}
          </div>
        </section>

        <section className="approach section-spacing" id="approach" aria-labelledby="approach-title">
          <div className="section-shell approach-inner">
            <div className="approach-heading">
              <p className="eyebrow eyebrow-light">{copy.projectStagesLabel} <span>/ 04</span></p>
              <h2 className="approach-title-small">{copy.projectStagesHeading}</h2>
              <p className="project-stage-intro">{copy.projectStagesIntro}</p>
              <p className="project-stage-note">{copy.projectStagesNote}</p>
            </div>
            <div className="approach-details">
              <p className="eyebrow eyebrow-light">{copy.approachLabel}</p>
              <h2 id="approach-title">
                {copy.approachHeading.split('\n').map((line, index) => (
                  <span key={line}>{index > 0 && <br />}{line}</span>
                ))}
              </h2>
              <p>{copy.approachIntro}</p>
            </div>
            <ol className="process-list">
              {processKeys.map(([number, titleKey, descriptionKey]) => (
                <li className="process-step" key={number}>
                  <span className="mono">{number}</span>
                  <div>
                    <h3>{copy[titleKey]}</h3>
                    <p>{copy[descriptionKey]}</p>
                  </div>
                  <span className="process-mark" aria-hidden="true">+</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="contact" id="contact" aria-labelledby="contact-title">
          <div className="section-shell contact-inner">
            <div>
              <p className="eyebrow">{copy.contactLabel} <span>/ 05</span></p>
              <h2 id="contact-title">{copy.contactHeading}</h2>
              <p className="contact-copy">{copy.contactIntro}</p>
            </div>
            <div className="contact-links">
              <a className="contact-link" href={`mailto:${site.contactEmail}`}>
                <span className="contact-link-label mono">{copy.emailLabel}</span>
                <span>{site.contactEmail}</span>
                <ArrowIcon diagonal />
              </a>
              {whatsappUrl && (
                <a className="contact-link" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <span className="contact-link-label mono">{copy.whatsappLabel}</span>
                  <span>{copy.whatsappLink}</span>
                  <ArrowIcon diagonal />
                </a>
              )}
              <a className="contact-link" href={site.github} target="_blank" rel="noopener noreferrer">
                <span className="contact-link-label mono">GITHUB</span>
                <span>github.com/SomTech2</span>
                <ArrowIcon diagonal />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="section-shell footer-inner">
          <a className="footer-brand" href="#top">Moed</a>
          <p>{copy.footerRole}</p>
          <a className="footer-social" href={site.github} target="_blank" rel="noopener noreferrer">
            {copy.githubLabel} <ArrowIcon diagonal />
          </a>
          <span className="mono footer-copyright">
            © {new Date().getFullYear()} {copy.copyright}
          </span>
        </div>
      </footer>

      {whatsappUrl && (
        <a
          className="whatsapp-float"
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={copy.whatsappAccessible}
        >
          <span className={`whatsapp-bubble${whatsappHintVisible ? ' is-visible' : ''}`}>{copy.whatsappBubble}</span>
          <span className="whatsapp-icon"><WhatsAppIcon /></span>
        </a>
      )}
    </>
  )
}

export default App
