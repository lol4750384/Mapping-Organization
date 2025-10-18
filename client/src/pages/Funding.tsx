import React from 'react'
import PageTemplate from '../components/PageTemplate'
import { Card, Button, Typography } from 'antd'
import { useTheme } from '../ThemeProvider'
import { lightTheme, darkTheme } from '../theme.ts'
import { useNavigate } from 'react-router-dom'

const { Title, Paragraph } = Typography

const Funding: React.FC = () => {
  const { mode } = useTheme()
  const tokens = (mode === 'light' ? (lightTheme.token as any) : (darkTheme.token as any)) || {}
  const surface = tokens.colorBgContainer
  const border = tokens.colorBorder
  const primary = tokens.colorPrimary
  const container = tokens.colorBgContainer
  const navigate = useNavigate()

  return (
    <PageTemplate title="Financiación" subtitle="Apoya el desarrollo del proyecto">
      <Card style={{ background: surface, border: border ? `1px solid ${border}` : undefined }}>
        <Title level={3}>Apoya el proyecto</Title>
        <Paragraph>
          Puedes contribuir a través de distintos canales. Gracias por tu apoyo.
        </Paragraph>
        <Button
          onClick={() => navigate('/funding')}
          className="btn-animate btn-pop"
          style={{ background: primary, color: container, border: 'none' }}
        >
          Donar ahora
        </Button>
      </Card>
    </PageTemplate>
  )
}

export default Funding
