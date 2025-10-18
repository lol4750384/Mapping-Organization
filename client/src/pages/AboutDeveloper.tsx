import React from 'react'
import PageTemplate from '../components/PageTemplate'
import { Card, Typography, Button } from 'antd'
import { useTheme } from '../ThemeProvider'
import { lightTheme, darkTheme } from '../theme.ts'

const { Title, Paragraph } = Typography

const AboutDeveloper: React.FC = () => {
  const { mode } = useTheme()
  const tokens = (mode === 'light' ? (lightTheme.token as any) : (darkTheme.token as any)) || {}
  const surface = tokens.colorBgContainer
  const border = tokens.colorBorder
  const primary = tokens.colorPrimary
  const container = tokens.colorBgContainer

  return (
    <PageTemplate title="Sobre el Developer" subtitle="Conoce al desarrollador detrás del proyecto">
      <Card style={{ background: surface, border: border ? `1px solid ${border}` : undefined }}>
        <Title level={3}>Developer</Title>
        <Paragraph>Perfil del desarrollador, experiencia y enlaces de contacto.</Paragraph>
        <div style={{ marginTop: 16 }}>
          <Button
            className="btn-animate btn-pop"
            onClick={() => window.open('mailto:dev@example.com')}
            style={{ background: primary, color: container, border: 'none' }}
          >
            Contactar
          </Button>
        </div>
      </Card>
    </PageTemplate>
  )
}

export default AboutDeveloper
