export interface ProjectUse {
  id: string
  title: string
  description: string
  icon: string
}

export const useHomeData = () => {
  const projectInfo = {
    title: 'UPB-Project: Conectando Empresas con Oportunidades',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
  }

  const projectUses: ProjectUse[] = [
    {
      id: '1',
      title: 'Conexión Empresarial',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilita la conexión entre empresas y patrocinadores de manera eficiente.',
      icon: 'link'
    },
    {
      id: '2',
      title: 'Gestión de Inversiones',
      description: 'Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Administra y visualiza tus inversiones en tiempo real.',
      icon: 'dollar'
    },
    {
      id: '3',
      title: 'Análisis de Datos',
      description: 'Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Obtén insights valiosos sobre tus proyectos.',
      icon: 'chart'
    },
    {
      id: '4',
      title: 'Networking Digital',
      description: 'Pellentesque in ipsum id orci porta dapibus. Expande tu red de contactos profesionales.',
      icon: 'team'
    },
    {
      id: '5',
      title: 'Documentación',
      description: 'Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Gestiona toda tu documentación en un solo lugar.',
      icon: 'file'
    }
  ]

  const fundingData = {
    current: 105000,
    target: 350000
  }

  return {
    projectInfo,
    projectUses,
    fundingData
  }
}
