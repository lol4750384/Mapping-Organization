import React from 'react'
import PageTemplate from '../components/PageTemplate'
import { Card, Row, Col, Typography, Button } from 'antd'
import { useTheme } from '../ThemeProvider'
import { lightTheme, darkTheme } from '../theme.ts'

const { Title, Paragraph } = Typography

const Testing: React.FC = () => {
  const { mode } = useTheme()
  const tokens = (mode === 'light' ? (lightTheme.token as any) : (darkTheme.token as any)) || {}
  const surface = tokens.colorBgContainer
  const border = tokens.colorBorder
  const primary = tokens.colorPrimary
  const container = tokens.colorBgContainer

  return (
    <PageTemplate title="Testing" subtitle="Herramientas y pruebas de la aplicación">
      <Row gutter={[24, 24]}>
        <Col xs={24} md={12}>
          <Card style={{ background: surface, border: border ? `1px solid ${border}` : undefined }}>
            <Title level={4}>Pruebas unitarias</Title>
            <Paragraph>Descripción de las pruebas unitarias y su estado.</Paragraph>
            <div style={{ marginTop: 16 }}>
              <Button
                onClick={() => console.log('Run unit tests')}
                className="btn-animate"
                style={{ background: primary, color: container, border: 'none' }}
              >
                Ejecutar pruebas
              </Button>
            </div>
          </Card>
        </Col>
        <Col xs={24} md={12}>
          <Card style={{ background: surface, border: border ? `1px solid ${border}` : undefined }}>
            <Title level={4}>Integración</Title>
            <Paragraph>Pruebas de integración y pipelines.</Paragraph>
            <div style={{ marginTop: 16 }}>
              <Button
                onClick={() => console.log('Run integration tests')}
                className="btn-animate"
                style={{ background: primary, color: container, border: 'none' }}
              >
                Ejecutar integración
              </Button>
            </div>
          </Card>
        </Col>
      </Row>
    </PageTemplate>
  )
}

export default Testing
