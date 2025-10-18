import React from 'react'
import { useNavigate } from 'react-router-dom'
import PageTemplate from '../components/PageTemplate'
import { Row, Col, Card, Button, Typography, Divider, Space } from 'antd'
import { RocketOutlined, TeamOutlined, HeartOutlined } from '@ant-design/icons'
import { useTheme } from '../ThemeProvider'
import { lightTheme, darkTheme } from '../theme.ts'

const { Title, Paragraph } = Typography

const Home: React.FC = () => {
  const { mode } = useTheme()
  const tokens = (mode === 'light' ? (lightTheme.token as any) : (darkTheme.token as any)) || {}

  const primary = tokens.colorPrimary
  const container = tokens.colorBgContainer
  const border = tokens.colorBorder
  const text = tokens.colorText
  const textSecondary = tokens.colorTextSecondary
  const shadow = tokens.shadowColor

  const heroStyle: React.CSSProperties = {
    background: container,
    border: border ? `1px solid ${border}` : undefined,
    borderRadius: 12,
    padding: 32,
    boxShadow: shadow ? `0 10px 30px ${shadow}` : undefined,
  }

  const cardStyle = {
    background: container,
    border: border ? `1px solid ${border}` : undefined,
    borderRadius: 12,
    padding: 20,
  } as React.CSSProperties

  const featureItems = [
    {
      icon: <RocketOutlined style={{ fontSize: 22, color: primary }} />,
      title: 'Rendimiento óptimo',
      description: 'Velocidad y eficiencia en cada interacción, optimizado para producción.',
    },
    {
      icon: <TeamOutlined style={{ fontSize: 22, color: primary }} />,
      title: 'Comunidad activa',
      description: 'Colabora, aporta y crece con aportes de una comunidad comprometida.',
    },
    {
      icon: <HeartOutlined style={{ fontSize: 22, color: primary }} />,
      title: 'Diseño pensado en el usuario',
      description: 'Interfaz cuidada para ofrecer la mejor experiencia posible.',
    },
  ]

  const navigate = useNavigate()

  return (
    <PageTemplate title="Apoya este proyecto" subtitle="Tu contribución nos ayudará a desarrollar este proyecto innovador.">
      <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
        <section style={heroStyle}>
          <Title level={1} style={{ color: primary, marginBottom: 8 }}>Apoya este proyecto</Title>
          <Paragraph style={{ color: text, marginBottom: 20 }}>
            Con tu ayuda podemos impulsar un proyecto que conecta patrocinadores con iniciativas innovadoras.
            Colabora para acelerar el desarrollo y el impacto.
          </Paragraph>
          <Space size="middle">
            <Button
              onClick={() => navigate('/funding')}
              style={{
                background: primary,
                color: container,
                border: 'none',
                padding: '10px 20px',
                borderRadius: 8,
                fontWeight: 700,
              }}
              aria-label="Contribuir"
            >
              Contribuir
            </Button>
            <Button
              onClick={() => window.scrollTo({ top: 600, behavior: 'smooth' })}
              style={{
                border: border ? `1px solid ${border}` : undefined,
                color: text,
                background: 'transparent',
                padding: '10px 20px',
                borderRadius: 8,
                fontWeight: 600,
              }}
              aria-label="Saber más"
            >
              Saber más
            </Button>
          </Space>
        </section>

        <section>
          <Row gutter={[24, 24]}>
            {featureItems.map((f, i) => (
              <Col xs={24} sm={12} md={8} key={f.title}>
                <Card style={{
                  background: container,
                  border: border ? `1px solid ${border}` : undefined,
                  borderRadius: 12,
                  padding: 20,
                  minHeight: 160,
                }}>
                   <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                    <div style={{
                      width: 48,
                      height: 48,
                      borderRadius: 10,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: primary,
                      color: container,
                    }}>
                      {f.icon}
                    </div>
                    <div style={{ minWidth: 0 }}>
                      <Title level={4} style={{ margin: 0, color: text }}>{f.title}</Title>
                      <Paragraph style={{ marginTop: 8, color: textSecondary }}>{f.description}</Paragraph>
                    </div>
                   </div>
                 </Card>
               </Col>
             ))}
          </Row>
        </section>
      </div>
    </PageTemplate>
  )
}

export default Home