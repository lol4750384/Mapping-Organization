export interface ProjectUse {
  id: string
  title: string
  description: string
  icon: string
}

export interface FeatureItem {
  title: string
  description: string
  iconName: 'rocket' | 'team' | 'heart'
}

export const useHomeData = () => {
  const projectInfo = {
    title: 'UPB-Project: Lorem Ipsum Dolor Sit Amet',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
  }

  const projectUses: ProjectUse[] = [
    {
      id: '1',
      title: 'Lorem Ipsum Dolor',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      icon: 'link'
    },
    {
      id: '2',
      title: 'Consectetur Adipiscing',
      description: 'Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Proin eget tortor risus cras ultricies ligula sed magna dictum.',
      icon: 'dollar'
    },
    {
      id: '3',
      title: 'Mauris Blandit Aliquet',
      description: 'Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Vivamus magna justo lacinia eget consectetur sed convallis at tellus.',
      icon: 'chart'
    },
    {
      id: '4',
      title: 'Pellentesque Habitant',
      description: 'Pellentesque in ipsum id orci porta dapibus. Nulla porttitor accumsan tincidunt donec sollicitudin molestie malesuada.',
      icon: 'team'
    },
    {
      id: '5',
      title: 'Vestibulum Ante Ipsum',
      description: 'Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.',
      icon: 'file'
    }
  ]

  const fundingData = {
    current: 105000,
    target: 350000
  }

  const heroContent = {
    title: 'Lorem Ipsum Dolor Sit',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation.'
  }

  const featureItems: FeatureItem[] = [
    {
      iconName: 'rocket',
      title: 'Proin Eget Tortor',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non nulla sit amet nisl tempus convallis.',
    },
    {
      iconName: 'team',
      title: 'Vivamus Magna Justo',
      description: 'Pellentesque in ipsum id orci porta dapibus. Donec sollicitudin molestie malesuada proin eget tortor risus.',
    },
    {
      iconName: 'heart',
      title: 'Nulla Porttitor',
      description: 'Vestibulum ante ipsum primis in faucibus. Cras ultricies ligula sed magna dictum porta mauris blandit.',
    },
  ]

  return {
    projectInfo,
    projectUses,
    fundingData,
    heroContent,
    featureItems
  }
}
