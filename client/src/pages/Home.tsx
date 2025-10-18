import React from 'react'
import PageTemplate from '../components/PageTemplate'
import HeroSection from '../components/home/HeroSection'
import FeaturesSection from '../components/home/FeaturesSection'
import { useHomeData } from '../hooks/useHomeData'

const Home: React.FC = () => {
  const { heroContent, featureItems } = useHomeData()

  return (
    <PageTemplate title="Apoya este proyecto" subtitle="Tu contribución nos ayudará a desarrollar este proyecto innovador.">
      <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
        <HeroSection title={heroContent.title} description={heroContent.description} />
        <FeaturesSection features={featureItems} />
      </div>
    </PageTemplate>
  )
}

export default Home