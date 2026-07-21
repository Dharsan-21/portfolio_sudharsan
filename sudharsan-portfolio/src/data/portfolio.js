export const site = {
  name: 'Sudharsan B',
  initials: 'SB',
  logo: 'Sudharsan',
  year: '2025',
  location: 'Chennai, India',
  locationLabel: 'Location',
  availability: 'Open to internships',
  availabilityBadge: 'AVAILABLE FOR INTERNSHIPS',
}

export const seo = {
  title: 'Sudharsan B — Software Engineer & ECE Student',
  description:
    'Electronics and Communication Engineering student building software across Python, web, and embedded systems. Open to internships.',
  ogImage: '/og-image.svg',
}

export const nav = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'experience', label: 'Experience', href: '#experience' },
  { id: 'skills', label: 'Skills', href: '#skills' },
  { id: 'achievements', label: 'Achievements', href: '#achievements' },
  { id: 'contact', label: 'Contact', href: '#contact' },
]

export const hero = {
  name: 'Sudharsan B',
  roles: [
    'Software Developer',
    'ECE Engineer',
    'Python Developer',
    'Problem Solver',
  ],
  description:
    'I study Electronics and Communication Engineering, but I build with code. From bus management systems to IoT rehabilitation devices, I care about software that solves real problems—not demos that look good in a README.',
  ctas: {
    primary: { label: 'View Projects', href: '#projects' },
    secondary: { label: 'Download Resume', href: '/resume.pdf' },
    tertiary: { label: 'Contact Me', href: '#contact' },
  },
}

export const about = {
  label: 'About',
  title: 'Engineering roots, software mindset',
  paragraphs: [
    'I started in electronics engineering drawn to how hardware and signals interact. Embedded systems were my entry point—writing firmware, reading schematics, and understanding that every line of code eventually touches something physical.',
    'That curiosity pulled me toward Python and automation. I began building desktop applications and database-backed tools, then web interfaces. What started as scripts to save time became full projects with real users and constraints.',
    'Today I am deepening my full-stack skills, exploring AI applications, and looking for internships where I can contribute from day one. I learn fast, document what I build, and ship work that holds up outside the classroom.',
  ],
  stats: [
    { value: '2+', label: 'Years Coding' },
    { value: '5+', label: 'Projects' },
    { value: '3', label: 'Workshops' },
    { value: '1', label: 'Internship' },
  ],
}

export const projects = {
  label: 'Projects',
  title: 'Selected work',
  items: [
    {
      number: '01',
      title: 'ERP Bus Management System',
      problem: 'Manual bus tracking created scheduling gaps and reporting delays for an institution.',
      stack: ['Python', 'MySQL', 'Tkinter'],
      outcome: 'Replaced manual bus tracking for an institution with a centralized management system.',
      links: { live: null, github: 'https://github.com' },
    },
    {
      number: '02',
      title: 'Student Attendance Management System',
      problem: 'Paper-based attendance was error-prone and impossible to query at scale.',
      stack: ['Python', 'MySQL'],
      outcome: 'Automated attendance with full database integration and reliable record-keeping.',
      links: { live: null, github: 'https://github.com' },
    },
    {
      number: '03',
      title: 'Smart Rehabilitation System',
      problem: 'Patients needed accessible, sensor-driven feedback during rehabilitation exercises.',
      stack: ['STM32', 'IoT', 'Sensors'],
      outcome: 'Hackathon-recognized hardware-software healthcare solution with real-time monitoring.',
      links: { live: null, github: 'https://github.com' },
    },
    {
      number: '04',
      title: 'AI Projects — In Progress',
      problem: 'Applying machine learning to practical problems beyond coursework.',
      stack: ['Python', 'Machine Learning'],
      outcome: 'Signals active learning trajectory in applied AI and data-driven systems.',
      links: { live: null, github: 'https://github.com' },
    },
  ],
  linkLabels: {
    live: 'Live',
    github: 'GitHub',
  },
}

export const experience = {
  label: 'Experience',
  title: 'Where I have applied my skills',
  role: 'Python Developer Intern',
  company: 'Internship',
  dateRange: '2026 — Present',
  bullets: [
    'Automated a reporting workflow reducing manual data entry by approximately three hours per week.',
    'Built Python scripts that integrated with MySQL databases to streamline internal data pipelines.',
    'Debugged production issues across legacy codebases, improving system reliability for daily operations.',
    'Collaborated with team leads to document automation processes, enabling faster onboarding for new contributors.',
  ],
  skills: ['Python', 'MySQL', 'Automation', 'Debugging'],
}

export const skills = {
  label: 'Skills',
  title: 'Tools and technologies I work with',
  categories: [
    {
      name: 'Languages',
      items: ['Python', 'Java', 'JavaScript', 'C'],
    },
    {
      name: 'Frontend',
      items: ['HTML', 'CSS', 'React', 'Tailwind CSS'],
    },
    {
      name: 'Backend',
      items: ['Node.js', 'Express.js'],
    },
    {
      name: 'Databases',
      items: ['MySQL'],
    },
    {
      name: 'Embedded',
      items: ['STM32', 'IoT', '3D Printing'],
    },
    {
      name: 'Tools',
      items: ['Git', 'GitHub', 'VS Code', 'Postman'],
    },
  ],
}

export const achievements = {
  label: 'Achievements',
  title: 'Recognition and growth',
  items: [
    {
      icon: 'presentation',
      title: 'Paper Presentation',
      description: 'Smart Electric Fence System',
      context: '2026',
    },
    {
      icon: 'trophy',
      title: 'Hackathon Recognition',
      description: 'Smart Rehabilitation System',
      context: '2026',
    },
    {
      icon: 'certificate',
      title: 'Python Programming Certification',
      description: 'Formal credential in Python fundamentals and application',
      context: '2026',
    },
    {
      icon: 'drone',
      title: 'Drone Technology Workshop',
      description: 'Hands-on exposure to drone systems and flight principles',
      context: '2026',
    },
    {
      icon: 'chip',
      title: 'STM32 Embedded Systems Workshop',
      description: 'Microcontroller programming and peripheral integration',
      context: '2026',
    },
    {
      icon: 'cube',
      title: '3D Printing & Prototyping Workshop',
      description: 'Rapid prototyping for hardware project iterations',
      context: '2025',
    },
  ],
}

export const learning = {
  label: 'Currently Learning',
  title: 'What I am building toward',
  items: [
    {
      icon: 'brain',
      title: 'Artificial Intelligence',
      description: 'Applying ML to problems with real data and measurable outcomes.',
    },
    {
      icon: 'react',
      title: 'React Ecosystem',
      description: 'Modern component patterns, state management, and performance.',
    },
    {
      icon: 'server',
      title: 'Node.js & APIs',
      description: 'Building reliable backends that frontends can depend on.',
    },
    {
      icon: 'cloud',
      title: 'Cloud Deployment',
      description: 'Shipping projects beyond localhost with proper infrastructure.',
    },
    {
      icon: 'layers',
      title: 'Full Stack Architecture',
      description: 'Designing systems where frontend, backend, and data align.',
    },
    {
      icon: 'blueprint',
      title: 'System Design',
      description: 'Thinking in trade-offs, scale, and maintainability early.',
    },
  ],
}

export const contact = {
  label: 'Contact',
  headline: 'Have an idea or opportunity?',
  subheadline: "Let's build something meaningful together.",
  form: {
    nameLabel: 'Name',
    namePlaceholder: 'Your name',
    emailLabel: 'Email',
    emailPlaceholder: 'you@example.com',
    messageLabel: 'Message',
    messagePlaceholder: 'Tell me about the opportunity or project...',
    submitLabel: 'Send Message',
    successMessage: 'Thanks for reaching out. I will get back to you soon.',
  },
  links: [
    {
      type: 'email',
      label: 'Email',
      href: 'mailto:sudharsan@example.com',
      value: 'dharsanbalu21@gmail.com',
    },
    {
      type: 'linkedin',
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/sudharsan',
      value: 'linkedin.com/in/sudharsan',
    },
    {
      type: 'github',
      label: 'GitHub',
      href: 'https://github.com/sudharsan',
      value: 'github.com/sudharsan',
    },
  ],
}

export const footer = {
  text: 'Designed & built by Sudharsan B',
  social: [
    { type: 'github', href: 'https://github.com/sudharsan', label: 'GitHub' },
    { type: 'linkedin', href: 'https://linkedin.com/in/sudharsan', label: 'LinkedIn' },
    { type: 'email', href: 'mailto:dharsanbalu21@gmail.com', label: 'Email' },
  ],
}

export const ui = {
  menuOpen: 'Open menu',
  menuClose: 'Close menu',
  scrollTo: 'Scroll to',
  externalLink: 'opens in new tab',
  monogramAlt: 'Sudharsan B monogram',
  geometricArtAlt: 'Abstract geometric composition',
  typewriterPrefix: 'I am a',
  arrow: '→',
}
