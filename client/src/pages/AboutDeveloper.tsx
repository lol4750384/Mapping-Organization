import React from 'react'
import PageTemplate from '../components/PageTemplate'
import { Row, Col } from 'antd'
import { useDeveloperData } from '../hooks/useDeveloperData'
import DeveloperHeader from '../components/developer/DeveloperHeader'
import AboutSection from '../components/developer/AboutSection'
import SkillsSection from '../components/developer/SkillsSection'
import PortfolioSection from '../components/developer/PortfolioSection'
import ReferencesSection from '../components/developer/ReferencesSection'

const AboutDeveloper: React.FC = () => {
  const { skills, references, portfolio, contact, about } = useDeveloperData()

  return (
    <PageTemplate title="Sobre el Developer" subtitle="Conoce al desarrollador detrás del proyecto">
      <div style={{ padding: '0 16px' }}>
        <DeveloperHeader name={about.name} title={about.title} contact={contact} />

        <Row gutter={24} style={{ marginBottom: 24 }}>
          <Col xs={24} md={12}>
            <AboutSection description={about.description} goal={about.goal} />
          </Col>
          <Col xs={24} md={12}>
            <SkillsSection skills={skills} />
          </Col>
        </Row>

        <PortfolioSection portfolio={portfolio} />

        <ReferencesSection references={references} />
      </div>
    </PageTemplate>
  )
}

export default AboutDeveloper