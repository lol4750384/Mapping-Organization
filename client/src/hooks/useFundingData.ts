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
      name: 'Servidores Cloud',
      cost: 84000,
      description: 'Infraestructura en la nube para hosting y escalabilidad',
      icon: null,
      status: 'pending'
    },
    {
      name: 'Equipo Desarrollo',
      cost: 56000,
      description: 'Computadoras y licencias para el equipo de desarrollo',
      icon: null,
      status: 'partial'
    },
    {
      name: 'Herramientas Testing',
      cost: 35000,
      description: 'Software y herramientas para testing y QA',
      icon: null,
      status: 'pending'
    },
    {
      name: 'Marketing Digital',
      cost: 49000,
      description: 'Campañas de marketing y promoción del proyecto',
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
