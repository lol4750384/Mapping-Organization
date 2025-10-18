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
      comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      link: 'https://linkedin.com/in/laura-gomez'
    },
    {
      name: 'Carlos Ruiz',
      position: 'Project Manager, EduSoft',
      comment: 'Vestibulum ac diam sit amet quam vehicula elementum. Cras ultricies ligula sed magna dictum porta.',
      link: 'https://linkedin.com/in/carlos-ruiz'
    }
  ]

  const portfolio: PortfolioItem[] = [
    {
      title: 'Lorem Ipsum Project',
      url: 'https://portfolio.example.com/landing',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.',
    },
    {
      title: 'Dolor Sit Amet',
      url: 'https://portfolio.example.com/dashboard',
      description: 'Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Proin eget tortor risus.',
    },
    {
      title: 'Consectetur Adipiscing',
      url: 'https://portfolio.example.com/events',
      description: 'Pellentesque in ipsum id orci porta dapibus. Nulla porttitor accumsan tincidunt donec sollicitudin.',
    }
  ]

  const contact: DeveloperContact = {
    email: 'miguel.mendoza@devmail.com',
    linkedin: 'https://linkedin.com/in/miguel-mendoza',
    github: 'https://github.com/miguel-mendoza'
  }

  const about: DeveloperAbout = {
    name: 'Miguel Mendoza',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
    goal: 'Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.'
  }

  return {
    skills,
    references,
    portfolio,
    contact,
    about
  }
}
