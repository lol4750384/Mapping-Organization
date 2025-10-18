import { useState } from 'react'

export interface FundingData {
  goal: number
  raised: number
  progress: number
}

export interface EquipmentItem {
  name: string
  cost: number
  description: string
  icon: React.ReactNode
  status: 'pending' | 'partial' | 'funded'
}

export const useFundingData = () => {
  const [contributionAmount, setContributionAmount] = useState(350)

  const fundingData: FundingData = {
    goal: 350000,
    raised: 105000,
    progress: 30
  }

  const equipmentNeeded: EquipmentItem[] = [
    {
      name: 'Lorem Ipsum Dolor',
      cost: 84000,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.',
      icon: null,
      status: 'pending'
    },
    {
      name: 'Consectetur Adipiscing',
      cost: 56000,
      description: 'Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui proin eget tortor.',
      icon: null,
      status: 'partial'
    },
    {
      name: 'Mauris Blandit',
      cost: 35000,
      description: 'Pellentesque in ipsum id orci porta dapibus nulla porttitor accumsan tincidunt donec.',
      icon: null,
      status: 'pending'
    },
    {
      name: 'Vivamus Magna',
      cost: 49000,
      description: 'Curabitur non nulla sit amet nisl tempus convallis quis ac lectus vivamus magna justo.',
      icon: null,
      status: 'funded'
    }
  ]

  return {
    fundingData,
    equipmentNeeded,
    contributionAmount,
    setContributionAmount
  }
}
