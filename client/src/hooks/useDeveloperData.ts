export interface Skill {
  name: string
  color: string
}

export interface Reference {
  name: string
  position: string
  comment: string
  link: string
}

export interface PortfolioItem {
  title: string
  url: string
  description: string
}

export interface DeveloperContact {
  email: string
  linkedin: string
  github: string
}

export interface DeveloperAbout {
  name: string
  title: string
  description: string
  goal: string
}

export const useDeveloperData = () => {
  const skills: Skill[] = [
    { name: 'React', color: 'blue' },
    { name: 'TypeScript', color: 'geekblue' },
    { name: 'Node.js', color: 'volcano' },
    { name: 'Ant Design', color: 'gold' },
    { name: 'CI/CD', color: 'green' },
    { name: 'Testing', color: 'purple' },
    { name: 'Arquitectura', color: 'magenta' },
    { name: 'Docker', color: 'cyan' },
    { name: 'MongoDB', color: 'lime' },
  ]

  const references: Reference[] = [
    {
      name: 'Laura Gómez',
      position: 'CTO, TechCorp',
      comment: 'Un profesional excepcional, siempre aporta soluciones innovadoras y trabaja en equipo.',
      link: 'https://linkedin.com/in/laura-gomez'
    },
    {
      name: 'Carlos Ruiz',
      position: 'Project Manager, EduSoft',
      comment: 'Miguel demostró liderazgo y compromiso en todos los proyectos que gestionó.',
      link: 'https://linkedin.com/in/carlos-ruiz'
    }
  ]

  const portfolio: PortfolioItem[] = [
    {
      title: 'Landing Page Creativa',
      url: 'https://portfolio.example.com/landing',
      description: 'Diseño y desarrollo de una landing page interactiva para startups.',
    },
    {
      title: 'Dashboard Empresarial',
      url: 'https://portfolio.example.com/dashboard',
      description: 'Panel de control para gestión de datos empresariales con visualizaciones avanzadas.',
    },
    {
      title: 'App de Eventos',
      url: 'https://portfolio.example.com/events',
      description: 'Aplicación móvil para gestión y registro de eventos en tiempo real.',
    }
  ]

  const contact: DeveloperContact = {
    email: 'miguel.mendoza@devmail.com',
    linkedin: 'https://linkedin.com/in/miguel-mendoza',
    github: 'https://github.com/miguel-mendoza'
  }

  const about: DeveloperAbout = {
    name: 'Miguel Mendoza',
    title: 'Ingeniero de Software especializado en desarrollo web, arquitectura de sistemas y diseño de experiencias digitales.',
    description: 'Soy una persona curiosa, empática y orientada a resultados. Disfruto resolver problemas complejos, trabajar en equipo y compartir conocimiento. Me apasiona el arte digital, la música y el aprendizaje continuo.',
    goal: 'Mi objetivo es crear soluciones que impacten positivamente a las personas y empresas.'
  }

  return {
    skills,
    references,
    portfolio,
    contact,
    about
  }
}
